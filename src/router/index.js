import Vue from "vue"; //引入Vue
import Router from "vue-router"; //引入vue-router
import HelloWorld from "@/components/HelloWorld"; //引入根目录下的HelloWorld.vue组件
import Home from "@/components/Home";
import FirstPage from "@/components/FirstPage";
import SecondPage from "@/components/SecondPage";
import FirstPart from "@/components/HomeComponents/FirstPart";
import SecondPart from "@/components/HomeComponents/SecondPart";
import ElementUITest from "@/components/ElementUIs/ElementUITest";
//安装路由  Vue全局使用Router
Vue.use(Router);

//3.创建路由
export default new Router({
  routes: [
    //配置路由，这里是个数组
    {
      //每一个链接都是一个对象
      path: "/", //链接路径( "/"代表根路径)
      name: "HelloWorld", //路由名称，
      component: HelloWorld //对应的组件模板
    },
    {
      path: "/Home",
      name: "Home",
      component: Home,
      children: [
        //创建子路由（可以多层 用 [] 表示数组 {}表示对象）
        {
          path: "FirstPart", // 相对路径
          name: "FirstPart",
          component: FirstPart
        },
        {
          path: "/Home/SecondPart", // 绝对路径：path左侧的'/'永远代表跟路由
          name: "SecondPart",
          component: SecondPart
        }
      ]
    },
    {
      path: "/FirstPage",
      name: "FirstPage",
      component: FirstPage
    },
    {
      path: "/SecondPage",
      name: "SecondPage",
      component: SecondPage
    },
    {
      path: "/ElementUITest",
      name: "ElementUITest",
      component: ElementUITest
    }
  ]
});
