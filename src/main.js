// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import router from "./router";
import ElementUI from "element-ui";

Vue.config.productionTip = false;

Vue.use(ElementUI);

/* eslint-disable no-new */
new Vue({
  // 配置对象的属性名都是一些确定的名称，不能随便修改
  el: "#app",
  router, // 注册路由器
  components: { App }, // 映射组件标签
  template: "<App/>" // 指定需要渲染到页面的模板
});
