<template>
  <div id="app">
    <footer>
   <router-link to="/hello"><i class="icon iconfont icon-index"></i><br/>首页</router-link>
    <router-link to="/fb"><i class="icon iconfont icon-edit"></i><br/>发表</router-link>
    <router-link to="/xx"><i class="icon iconfont icon-msg"></i><br/>消息</router-link>
    <router-link to="/my"><i class="icon iconfont icon-user"></i><br/>我的</router-link>
     </footer>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
@import url('./iconfont/iconfont.css');

*{
  margin: 0;
  padding: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /*text-align: center;*/
  color: #2c3e50;
  margin-top: 60px;
}
footer{
  display: flex;
  width: 100%;
  height: 60px;
  border-top: 1px solid gray;
  position: fixed;
  bottom: 0;
  text-align: center;
align-items: center;
background: white;
z-index: 999;
}
footer .active{
  color: #80BD01;
  width: 80px;
 
  align-items: center;
 
}

a{
  text-decoration: none;
  color: black;
  flex: 1;
}
</style>
