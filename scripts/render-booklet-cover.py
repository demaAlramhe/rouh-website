"""Render page 1 of public/docs/free-booklet.pdf to public/images/booklet-cover-from-pdf.jpg.

Does not overwrite booklet-cover.png (the hand-designed cover used on the site).

Requires: pip install pymupdf
"""
from pathlib import Path

import fitz

ROOT = Path(__file__).resolve().parents[1]
PDF = ROOT / "public" / "docs" / "free-booklet.pdf"
OUT = ROOT / "public" / "images" / "booklet-cover-from-pdf.jpg"


def main() -> None:
    if not PDF.is_file():
        raise SystemExit(f"Missing PDF: {PDF}")
    doc = fitz.open(PDF)
    try:
        page = doc[0]
        pix = page.get_pixmap(matrix=fitz.Matrix(2.25, 2.25), alpha=False)
        pix.save(OUT.as_posix())
    finally:
        doc.close()
    print(f"Wrote {OUT} ({pix.width}x{pix.height})")


if __name__ == "__main__":
    main()
