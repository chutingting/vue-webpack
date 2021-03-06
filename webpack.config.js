var path = require('path');
var webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

function resolve(dir) {
  return path.join(__dirname, '.', dir)
}

module.exports = (env = {}) => {
  console.log(`------------------- ${env.Generative?'生产':'开发'}环境 -------------------`);
  var plugins = (module.exports.plugins || []).concat([
    new CleanWebpackPlugin(['dist']),
    new webpack.optimize.UglifyJsPlugin({
      // sourceMap: true,
      // compress: {
      //   warnings: false
      // }
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true
    })
  ])
  if (!env.Generative) {
    plugins = [];
  }
  plugins.push(new HtmlWebpackPlugin({
    template: './src/index.html'
  }));

  return {
    entry: './src/main.js', //入口
    output: {
      path: path.resolve(__dirname, './dist'), //输出结果
      // publicPath: evn.production ? './' : '/', //文件路径
      filename: '[name].js',
      chunkFilename: '[id].chunk.js'
    },
    module: {
      rules: [
        //  使用vue-loader 加载 .vue 结尾的文件
        {
          test: /\.vue$/,
          loader: 'vue-loader',
          options: {
            loaders: {}
            // other vue-loader options go here
          }
        },
        // 使用babel 加载 .js 结尾的文件
        {
          test: /\.js$/,
          loader: 'babel-loader',
          exclude: /node_modules/
        },
        //加载图标
        {
          test: /\.(eot|woff|ttf|svg)$/,
          loader: 'file-loader',
          options: {
            name: '[name].[ext]?[hash]'
          }
        },
        // 加载css
        {
          test: /\.css$/,
          loader: "style-loader!css-loader",
          exclude: /node_modules/
        },
       /*  {
          test: /\.css$/,
          use: ['style-loader', {
            loader: 'css-loader',
            options: {
              modules: true, //让css-loader支持Css Modules。
            },
          }]
        }, */
        {
          test: /\.scss$/,
          loader: "style-loader!css-loader!sass-loader!"
        },
        {
          test: /\.html$/,
          loader: 'html-loader',
          options: {
            minimize: false
          }
        },
        {
          test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
          loader: 'url-loader',
          options: {
            limit: 10000,
            name: '[name].[ext]?[hash]'
          }
        }
      ]
    },
    resolve: {
      alias: {
        'vue$': 'vue/dist/vue.esm.js',
        '@': resolve('/src')
      }
    },
    devServer: {
      inline: true, //检测文件变化，实时构建并刷新浏览器
      port: "8000",
      proxy: {
        '/api': {
          target: '',
          pathRewrite: {
            "^/api": ""
          },
          secure: false,
          changeOrigin: true
        },
      },
      //404 页面返回 index.html 
      historyApiFallback: true,
    },
    performance: {
      hints: false
    },
    plugins: plugins,
    devtool: '#eval-source-map' //开发模式下更方便定位错误
  }
}