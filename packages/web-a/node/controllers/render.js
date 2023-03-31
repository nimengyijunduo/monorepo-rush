const config = require('../service/config');

//页面参数
const global = {
    api: config.qiyuesuo.ossapi, //API接口服务器地址
};

//默认视图
const home = 'index.html';

/**
 * @param res HTTP response对象 不能为空
 * @param view 视图 可为空，为空时渲染默认视图
 * @param data 传递到视图的数据，可为空
 */
module.exports = function (res, view, data) {
    const page = view || home;
    const model = Object.assign({}, data, global);
    res.render(page, model);
};
