module.exports = {
  theme: {
    extend: {
      colors: {
        ghostwhite: "#f8f8ff",
        black: {
          "100": "#1a1a1a",
          "200": "#2b2b2b",
          "900": "#000000"
        }
      },
      width: {
        "px-276": "276px",
        "px-232": "232px",
        "px-192": "192px",
        "px-168": "168px"
      },
      height: {
        "px-300": "300px",
        "px-234": "234px",
        "px-217": "217px",
        "px-274": "274px",
        "px-480": "480px"
      },
      spacing: {
        sm: "12px"
      }
    },
    inset: {
      "0": 0,
      "12": "3rem",
      "24": "6rem"
    }
  },
  variants: {
    outline: ["focus", "responsive", "hover"]
  },
  plugins: []
};
