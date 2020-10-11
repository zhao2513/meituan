import Vue from 'vue'
import Router from 'vue-router'
import defaultPage from '@/views/default'
import homePage from '@/page/home/index'
import list from '@/page/list/index'
import blank from '@/views/blank'
import login from '@/page/login/index'
import register from '@/page/reg/index'


Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [{
        path: '/',
        name: 'defaultPage',
        component: defaultPage,
        redirect: '/home',
        children: [{
            path: 'home',
            name: 'home',
            component: homePage
        }, {
            path: 'list/:keyword',
            name: 'list',
            component: list
        }]
    }, {
        path: '/blank',
        name: 'blank',
        component: blank,
        children: [{
            path: 'login',
            name: 'login',
            component: login
        }, {
            path: 'register',
            name: 'register',
            component: register
        }]
    }]
})