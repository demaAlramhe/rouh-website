import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        rouh: {
          sand: "#f8f1df",
          blue: "#5a9db0",
          wine: "#7f2a46",
          rose: "#b17e79",
          ink: "#321b22",
          mist: "#e8d9ca",
        },
      },
      fontFamily: {
        sans: ["var(--font-cairo)", "system-ui", "sans-serif"],
        display: ["var(--font-amiri)", "var(--font-cairo)", "serif"],
      },
      boxShadow: {
        glow: "0 34px 110px rgba(127, 42, 70, 0.14)",
        soft: "0 22px 70px rgba(50, 27, 34, 0.09)",
        petal: "0 18px 55px rgba(177, 126, 121, 0.18)",
        button: "0 18px 38px rgba(90, 157, 176, 0.28), inset 0 1px 0 rgba(255,255,255,0.28)",
      },
      backgroundImage: {
        "rouh-radial":
          "radial-gradient(circle at top right, rgba(90, 157, 176, 0.2), transparent 36%), radial-gradient(circle at bottom left, rgba(177, 126, 121, 0.24), transparent 34%)",
        "premium-card":
          "linear-gradient(145deg, rgba(255,255,255,0.72), rgba(255,255,255,0.36))",
        "ink-glow":
          "radial-gradient(circle at 18% 12%, rgba(248,241,223,0.14), transparent 28%), linear-gradient(145deg, #321b22, #241018)",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-14px)" },
        },
        reveal: {
          "0%": { opacity: "0", transform: "translateY(28px) scale(0.985)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        shimmer: {
          "0%": { transform: "translateX(120%)" },
          "100%": { transform: "translateX(-120%)" },
        },
        videoFadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      animation: {
        float: "float 7s ease-in-out infinite",
        reveal: "reveal 0.9s cubic-bezier(0.22, 1, 0.36, 1) both",
        shimmer: "shimmer 3.8s ease-in-out infinite",
        videoFadeIn: "videoFadeIn 0.65s ease-out forwards",
      },
    },
  },
  plugins: [],
};

export default config;
