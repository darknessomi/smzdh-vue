/**
 * Created by darknessomi on 16/8/26.
 */
const routers = {
    '/index': {
        component (resolve) {
            require(['./views/index.vue'], resolve);
        }
    }
};
export default routers;