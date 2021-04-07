const path = require('path')
const BundleTracker = require("webpack-bundle-tracker");

const pages = {
  'vue_app': {
    entry: './src/main.js',
    chunks: ['chunk-vendors']
  },
}


module.exports = {
  pages: pages,
  filenameHashing: false,
  productionSourceMap: false,
  publicPath: process.env.NODE_ENV === 'production'
    ? '/static/static/vue'
    : 'http://localhost:8080/',
  outputDir: '../static/vue/',
  css: {
    loaderOptions: {
      sass: {
        sassOptions: {
          includePaths: ['./node_modules', './src/assets'],
        },
      },
    },
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@themeConfig': path.resolve(__dirname, 'themeConfig.js'),
        '@core': path.resolve(__dirname, 'src/@core'),
        '@validations': path.resolve(__dirname, 'src/@core/utils/validations/validations.js'),
        '@axios': path.resolve(__dirname, 'src/libs/axios'),
      },
    },
  },
  chainWebpack: config => {
    config.module
      .rule('vue')
      .use('vue-loader')
      .loader('vue-loader')
      .tap(options => {
        // eslint-disable-next-line no-param-reassign
        options.transformAssetUrls = {
          img: 'src',
          image: 'xlink:href',
          'b-avatar': 'src',
          'b-img': 'src',
          'b-img-lazy': ['src', 'blank-src'],
          'b-card': 'img-src',
          'b-card-img': 'src',
          'b-card-img-lazy': ['src', 'blank-src'],
          'b-carousel-slide': 'img-src',
          'b-embed': 'src',
        }
        return options
      })

    config.optimization
      .splitChunks({
        cacheGroups: {
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name: "chunk-vendors",
            chunks: "all",
            priority: 1
          },
        },
      });

    Object.keys(pages).forEach(page => {
      config.plugins.delete(`html-${page}`);
      config.plugins.delete(`preload-${page}`);
      config.plugins.delete(`prefetch-${page}`);
    })

    config
      .plugin('BundleTracker')
      .use(BundleTracker, [{ filename: '../frontend/webpack-stats.json' }]);

    config.resolve.alias
      .set('__STATIC__', 'static')

    config.devServer
      .public('http://localhost:8080')
      .host('localhost')
      .port(8080)
      .hotOnly(true)
      .watchOptions({ poll: 1000 })
      .https(false)
      .headers({ "Access-Control-Allow-Origin": ["*"] })
  },
  transpileDependencies: ['vue-echarts', 'resize-detector'],
  lintOnSave: false,
  devServer: {
    proxy: {
      '^/api': {
        target: 'https://n376smrwjb.execute-api.us-east-2.amazonaws.com/',
      },
    }
  }
}
