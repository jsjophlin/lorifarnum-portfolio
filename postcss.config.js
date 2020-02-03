module.exports = {
  plugins: [
    require("postcss-import"),
    require("postcss-preset-env")({
      stage: 2,
      autoprefixer: { grid: true },
      importFrom: [
        "src/styles/vars.css",
        "src/styles/media-queries.css",
        "src/styles/global.css",
      ],
      features: {
        "nesting-rules": true,
        "custom-media-queries": true,
      },
    }),
    require("tailwindcss"),
  ],
}
