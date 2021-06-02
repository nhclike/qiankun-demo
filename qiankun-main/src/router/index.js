import Router from 'vue-router'
export default new Router({
    mode:'history',
    base:'',
    routes: [
        { path: '/', redirect: '/father'},
        { path:'/father', component: ()=> import('@/components/father')}
    ]
})
