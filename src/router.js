/**
 * Created by darknessomi on 16/8/26.
 */
const routers = {
    '/index': {
        component (resolve) {
            require(['./views/index.vue'], resolve);
        }
    },
    '/signup': {
        component (resolve) {
            require(['./views/signup.vue'], resolve);
        }
    },
    '/signin': {
        component (resolve) {
            require(['./views/signin.vue'], resolve);
        }
    }
};
export default routers;