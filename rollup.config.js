import typescript from 'rollup-plugin-typescript2'
import postcss from 'rollup-plugin-postcss'

const packageJson = require('./package.json')

export default {
  input: 'src/index.ts',
  output: [
    {
      file: packageJson.main,
      format: 'cjs',
      globals: { react: 'React' }
    },
    {
      file: packageJson.module,
      format: 'esm',
      globals: { react: 'React' }
    }
  ],
  plugins: [
    typescript({ useTsconfigDeclarationDir: true }),
    postcss({
        extensions: ['.css']
    })
  ],
  external: ['react']
}
