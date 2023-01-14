export type TailwindConfig = import("tailwindcss").Config;

const tailwindConfig: TailwindConfig = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
  daisyui: {
    logs: false,
  },
};

export default tailwindConfig;
