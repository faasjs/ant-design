const createCompiler = require('@storybook/addon-docs/mdx-compiler-plugin');

const swcOptions = {
  jsc: {
    parser: {
      syntax: 'typescript',
      tsx: true,
      dynamicImport: true,

    },
    transform: {
      react: {
        runtime: 'automatic'
      }
    },
    target: 'es2021',
  }
}

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
          loader: 'swc-loader',
          options: swcOptions
        }
      },
      {
        test: /\.mdx?$/,
        use: [
          {
            loader: 'swc-loader',
            options: swcOptions
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
