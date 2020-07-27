<template>
  <div>
    <h1>This is Home Page</h1>
    <router-link id="FirstPart" to="/Home/FirstPart">FirstPart</router-link>
    <router-link id="SecondPart" to="/Home/SecondPart">SecondPart</router-link>
    <hr />
    <!-- 根据路由链接显示路由组件 -->
    <router-view />
  </div>
</template>
