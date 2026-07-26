/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "#142033",
          light: "#1F304B",
          dark: "#0B1220",
        },
        chalk: {
          DEFAULT: "#EDEFE9",
          soft: "#F5F6F2",
        },
        marigold: {
          DEFAULT: "#E8A33D",
          dark: "#C9832A",
        },
        oxblood: {
          DEFAULT: "#7A2431",
          dark: "#5C1A24",
        },
        pine: {
          DEFAULT: "#2F7A4D",
        },
      },
      fontFamily: {
        display: ["'Space Grotesk'", "sans-serif"],
        body: ["'Inter'", "sans-serif"],
        editorial: ["'Lora'", "serif"],
      },
      backgroundImage: {
        "ruled-lines":
          "repeating-linear-gradient(to bottom, transparent, transparent 39px, rgba(20,32,51,0.08) 40px)",
      },
      boxShadow: {
        stamp: "0 0 0 2px rgba(232,163,61,0.35), 0 8px 24px rgba(20,32,51,0.12)",
      },
    },
  },
  plugins: [],
};
