const colors = require("tailwindcss/colors")
const plugin = require("tailwindcss/plugin")


/** @type {import("tailwindcss").Config} */
const colorsThemePreset = {
  preset: [],
  theme: {
    colors: {
      typography: {
        body: colors.neutral["700"],
        header: colors.neutral["900"],
        caption: colors.neutral["500"],
      },
      neutral: {
        ...colors.neutral,
      },
      slate: {
        ...colors.slate,
      },
      gray: {
        ...colors.gray,
      },
      primary: {
        ...colors.blue,
        dark: colors.neutral,
      },
      secondary: {
        ...colors.purple,
        dark: colors.gray,
      },
      info: {
        ...colors.neutral,
        dark: colors.indigo,
      },
      success: {
        ...colors.green,
        dark: colors.orange,
      },
      danger: {
        ...colors.red,
        dark: colors.rose,
      },
      white: colors.white,
      transparent: colors.transparent,
      current: colors.current,
    },
  },
}

/** @type {import("tailwindcss").Config} */
const customPreset = {
  presets: [],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--custom-font)"],
      },
      ringColor: {
        DEFAULT: colors.purple["700"],
      },
      ringOffsetColor: {
        DEFAULT: colors.purple["700"],
      },
      outlineColor: {
        DEFAULT: colors.purple["700"],
      },
      animation: {
        "fade-in": "fade-in 200ms ease-in",
      },
      keyframes: {
        "fade-in": {
          "0%": { opacity: "0%" },
          "100%": { opacity: "100%" },
        },
      },
    },
  },
}

/** @type {import("tailwindcss").Config} */
module.exports = {
  presets: [
    colorsThemePreset,
    customPreset,
  ],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/stories/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/library/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/container-queries"),
    plugin(function({ addVariant }) {
      addVariant("child", "& > *")
    }),
    plugin(function({ matchVariant }) {
      matchVariant("not", (value) => `&:not(${value})`)
    }),
    plugin(function({ matchUtilities }) {
      matchUtilities({
        "h-dynamic-screen": value => ({
          height: `${value}dvh`,
        }),
      }, {
        values: {
          0: "0",
          25: "25",
          50: "50",
          75: "75",
          100: "100",
        },
      })
    }),
    plugin(function({ matchUtilities }) {
      matchUtilities({
        "grid-fit": value => ({
          gridTemplateColumns: `repeat(auto-fit, minmax(${value}, 1fr))`,
        }),
        "grid-fill": value => ({
          gridTemplateColumns: `repeat(auto-fill, minmax(${value}, 1fr))`,
        }),
      }, {
        values: {
          15: "15rem",
          20: "20rem",
          30: "30rem",
          40: "40rem",
        },
      })
    }),
  ],
}
