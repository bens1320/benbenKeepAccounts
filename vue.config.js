// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path')


module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/benbenKeepAccounts-website/'
    : '/',
  lintOnSave: false,

  chainWebpack: config => {
    const dir = path.resolve(__dirname, 'src/assets/icons')

    // 配置svg-sprite-loader
    config.module
      .rule('svg-sprite')
      .test(/\.svg$/)
      .include.add(dir).end() //包含 icons 目录
      .use('svg-sprite-loader').loader('svg-sprite-loader').options({extract: false}).end()
      //解决svg 有fill
      .use('svgo-loader').loader('svgo-loader')
      .tap(options => ({...options, plugins: [{removeAttrs: {attrs: 'fill'}}]})).end()

    //配置插件
    config
      .plugin('svg-sprite')
      // eslint-disable-next-line @typescript-eslint/no-var-requires
      .use(require('svg-sprite-loader/plugin'), [{plainSprite: true}])

    config.module.rule('svg').exclude.add(dir) // 其他 svg loader 排除 icons 目录
  }
}
