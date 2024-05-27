const dotenv = require('dotenv');
const webpack = require('webpack');

dotenv.config({ path: process.env.NODE_ENV === 'production' ? './production.env' : './development.env' });

module.exports = {
  devServer: {
    port: process.env.DEV_PORT,
  },
  configureWebpack: {
    plugins: [
      new webpack.DefinePlugin({
        'process.env': {
          VUE_APP_BACKEND_URL: JSON.stringify(process.env.VUE_APP_BACKEND_URL),
        },
      }),
    ],
  },
};
