import Vue from 'vue'
import Router from 'vue-router'
import Ranks from '@/components/Ranks'
Vue.use(Router)
export default new Router({
    routes: [
        {
            path: '/',
            name: 'index',
            component: Ranks
        }, {
            path: '/Ranks',
            name: 'Ranks',
            component: Ranks
        }
    ]
})