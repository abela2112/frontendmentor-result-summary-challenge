/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: { HankenGrotesk: ["Hanken Grotesk", "sans-serif"] },
      colors: {
        Lightred: "hsla(0, 100%, 67%,0.1)",
        Orangeyyellow: "hsla(39, 100%, 56%,0.1)",
        Greenteal: "hsla(166, 100%, 37%,0.1)",
        Cobaltblue: "hsla(234, 85%, 45%,0.1)",
        LightSlateBlue: "hsl(252, 100%, 67%)",
        LightRoyalBlue: " hsl(241, 81%, 54%)",
        VioletBlue: "hsla(256, 72%, 46%, 1)",
        PersianBlue: "hsla(241, 72%, 46%,0.8)",
      },
    },
  },
  plugins: [],
};
