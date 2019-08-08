/**
 *  require.context 正则获取 /routes 下所有文件
 * routeContext.keys().filter 正则匹配 models下js文件 和 model.js 文件
 * concat 加上同级目录下其他model
 *
 * */

import common from './common';

const routeContext = require.context('../routes', true, /\S*\.js$/);
const fileNames = routeContext.keys().filter(item => /(\/models)|(model.js)/g.test(item));

export default fileNames.map(key => routeContext(key)).concat(common);
