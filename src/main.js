import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

// 导入全局的样式
import "./index.less"

import {Button, Swipe, Toast, Icon, SwipeItem, Tab, Tabs, List, PullRefresh, Cell} from 'vant';

Vue.use(Toast);
Vue.use(Icon);
Vue.use(Cell);
Vue.use(PullRefresh);
Vue.use(List)
Vue.use(Button);
Vue.use(Swipe);
Vue.use(SwipeItem);
Vue.use(Tab);
Vue.use(Tabs);

// 配置axios
// import axios from 'axios'
import axios from './utils/http'
import VueAxios from 'vue-axios'

// 为vue安装插件
// 把axios默认的实例赋给了它，我们通过这个实例发送请求的时候，使用的都是默认的配置，而不是我们封装好的配置
Vue.use(VueAxios, axios)


new Vue({
    router,
    render: h => h(App)
}).$mount('#app')
