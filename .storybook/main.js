const createCompiler = require('@storybook/addon-docs/mdx-compiler-plugin');

module.exports = {
  core: {
    builder: 'webpack5',
  },
  stories: [
    '../src/components/**/*.stories.mdx',
    '../src/components/**/*.stories.@(ts|tsx)'
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-postcss',
  ],
  framework: '@storybook/react',
  features: {
    storyStoreV7: true,
  },
  webpackFinal(config) {
    console.log(config)
    config.module.rules = [
      {
        test: /\.css$/i,
        use: [
          'style-loader',
          'css-loader'
        ],
      },
      {
        test: /\.tsx?$/,
        use: {
          loader: '@sucrase/webpack-loader',
          options: {
            transforms: ['typescript', 'jsx']
          }
        }
      },
      {
        test: /\.mdx?$/,
        use: [
          {
            loader: '@sucrase/webpack-loader',
            options: {
              transforms: ['typescript', 'jsx']
            }
          },
          {
            loader: '@mdx-js/loader',
            options: {
              compilers: [createCompiler({})]
            }
          }
        ]
      }
    ]

    return config
  }
}
