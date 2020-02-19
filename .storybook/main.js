const path = require('path');

module.exports = {
  stories: ['../**/*.stories.js'],
  addons: [
    '@storybook/addon-actions',
    '@storybook/addon-links',
    '@storybook/addon-notes',
    '@storybook/addon-docs',
    '@storybook/addon-viewport',
    '@storybook/addon-knobs',
    '@storybook/addon-storysource',
    '@storybook/addon-a11y',
    '@storybook/addon-backgrounds'
  ],
  webpackFinal: async (config, { configType }) => {
    // `configType` has a value of 'DEVELOPMENT' or 'PRODUCTION'
    // You can change the configuration based on that.
    // 'PRODUCTION' is used when building the static version of storybook.

    // Make whatever fine-grained changes you need
    config.module.rules.push({
      test: /\.scss$/,
      use: ['style-loader', 'css-loader', 'sass-loader'],
      include: path.resolve(__dirname, '../'),
    });

    config.module.rules.push({
      // You also can put this loader above, but I recommend to use
      // a separeted rule with enforce: 'post' for maintainability
      // and simplicity. For example, you can enable the loader only
      // for development build.
      test: /\.vue$/,
      use: 'vue-docgen-loader',
      enforce: 'post'
    });

    // Return the altered config
    return config;
  },
};