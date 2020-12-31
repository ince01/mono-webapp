/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
const autoprefixer = require('autoprefixer');
const postcss = require('rollup-plugin-postcss');
const copy = require('rollup-plugin-copy');

module.exports = {
  rollup(config) {
    config.plugins.push(
      postcss({
        plugins: [autoprefixer()],
        extract: path.resolve('dist/ant_ui_compiled.css'),
      }),
      copy({
        targets: [
          {
            src:
              './node_modules/@elastic/eui/dist/eui_theme_amsterdam_light.css',
            dest: 'dist/',
            rename: (name, extension) => `ant_ui_styles.${extension}`,
          },
        ],
      }),
    );
    return config;
  },
};
