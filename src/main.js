import Vue from 'vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue'
import VueI18n from 'vue-i18n'

Vue.config.productionTip = false
Vue.use(ElementUI);
Vue.use(VueI18n)

const i18n=new VueI18n({
    locale:localStorage.getItem('languageSet')||'zh',   //从localStorage里获取用户中英文选择，没有则默认中文
    silentFallbackWarn: true,
    messages:{
        'zh':require('./lang/zh'),
        'en':require('./lang/en')
    }
})




new Vue({
  render: h => h(App),
  i18n
}).$mount('#app')
