import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

// 导入全局的样式
import "./index.less"

import { Button,Swipe, SwipeItem ,Tab,Tabs} from 'vant';

Vue.use(Button);
Vue.use(Swipe);
Vue.use(SwipeItem);
Vue.use(Tab);
Vue.use(Tabs);

// 配置axios
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios)



new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
