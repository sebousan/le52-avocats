/* eslint-disable no-undef */
module.exports = {
  plugins: {
    autoprefixer: {},
    cssnano: {
      preset: 'default'
    },
    '@fullhuman/postcss-purgecss': {
      mode: 'all',
      content: ['./hugo_stats.json'],
      dynamicAttributes: ['aria-current', 'href', 'role'],
      safelist: {
        standard: [
          'show',
          'fade',
          /-backdrop$/,
          /^leaflet-/,
          /^is-/,
          /^has-/,
          /^js-/,
          /^[href^="#"]/,
          /^[href^="mailto"]/
        ]
      },
      defaultExtractor: (content) => {
        let els = JSON.parse(content).htmlElements;
        els = els.tags.concat(els.classes);
        return els;
      }
    }
  }
};
