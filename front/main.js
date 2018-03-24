import Vue from 'vue';
import VueRouter from 'vue-router';
import Meta from 'vue-meta';

import index from './pages/index/index.vue';

Vue.use(VueRouter);
Vue.use(Meta);

const routes = [
    { path: '/', name: 'index', component: index, props: true }
];

const router = new VueRouter({
    routes
});

new Vue({
    router
}).$mount('#app');
