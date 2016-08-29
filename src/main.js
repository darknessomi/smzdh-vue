/**
 * Created by darknessomi on 16/8/26.
 */
import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import App from 'components/app.vue';
import Routers from './router';
import Env from './config/env';

Vue.use(VueRouter);
Vue.use(VueResource);

// Send request body as application/x-www-form-urlencoded content type
// Vue.http.options.emulateJSON = true;

// Send PUT, PATCH and DELETE requests with a HTTP POST and set the X-HTTP-Method-Override header
Vue.http.options.emulateHTTP = true;

// 开启debug模式
Vue.config.debug = true;

// 路由配置
let router = new VueRouter({
    // 是否开启History模式的路由,默认开发环境开启,生产环境不开启。如果生产环境的服务端没有进行相关配置,请慎用
    history: Env != 'production'
});

router.map(Routers);

router.beforeEach(() => {
    window.scrollTo(0, 0);
});

router.afterEach(() => {

});

router.redirect({
    '*': "/"
});
router.start(App, '#app');