const path = require('path');
const { injectBabelPlugin } = require('react-app-rewired');
const rewireLess = require('react-app-rewire-less');
const { generateTheme, getLessVars } = require('antd-theme-generator');




// const options = {
//   stylesDir: path.join(__dirname, './src/styles'),
//   antDir: path.join(__dirname, './node_modules/antd'),
//   varFile: path.join(__dirname, './src/styles/vars.less'),
//   mainLessFile: path.join(__dirname, './src/styles/main.less'),
//   themeVariables: [
//     '@primary-color',
//     '@secondary-color',
//     '@text-color',
//     '@text-color-secondary',
//     '@heading-color',
//     '@layout-body-background',
//     '@btn-primary-bg',
//     '@layout-header-background',
//     '@border-color-base',
//     '@white'
//   ],
//   indexFileName: 'index.html',
//   outputFilePath: path.join(__dirname, './public/color.less'),
//   customColorRegexArray: [/^fade\(.*\)$/]
// }

// generateTheme(options).then(less => {
//   console.log('Theme generated successfully');
// })
//   .catch(error => {
//     console.log('Error', error);
//   });
/*
# Config
*/
module.exports = function override(config, env) {
  config = injectBabelPlugin(
    ['import', { libraryName: 'antd', style: true }],
    config
  );
  config = rewireLess.withLoaderOptions({
    modifyVars: getLessVars(path.join(__dirname, './src/styles/vars.less')),
    javascriptEnabled: true
  })(config, env);
  return config;
};