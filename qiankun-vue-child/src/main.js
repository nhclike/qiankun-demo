import Vue from 'vue';
import App from './App.vue'
import Router from 'vue-router'
import router from "./router/index"

// new Vue({
//   router,
//   render: h => h(App),
// }).$mount('#app')

Vue.use(Router);
Vue.config.productionTip = false;

let instance = null;
function render( props = {}) {
    const { container,appContent } = props;
    instance = new Vue({
        router,
        data(){
          return {
            content:appContent
          }
        },
        //render: h => h(App),
        render(h) {
          return h(App,{
            props:{
              content:this.content
            }
          })
        }
    }).$mount(container ? container.querySelector('#app'): '#app');  // 为了避免根id#app与其他DOM冲突，需要限制查找范围
}

if (!window.__POWERED_BY_QIANKUN__) {
    render();
}

//--------- 生命周期函数------------//
export async function bootstrap() {
    console.log('[vue] vue app bootstraped');
}
export async function mount(props) {
    console.log('[vue] props from main framework', props);
    render(props);
}
export async function unmount() {
    instance.$destroy();
    instance.$el.innerHTML = '';
    instance = null;
}
