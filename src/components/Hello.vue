<template>
<div class="hello">
   
    <header>
    <router-link to="/hello/all">全部</router-link>
    <router-link to="/hello/jh">精华</router-link>
    <router-link to="/hello/fx">分享</router-link>
    <router-link to="/hello/wd">问答</router-link>
    <router-link to="/hello/zp">招聘</router-link>
    </header>
      
     <router-view></router-view>
    

</div>
</template>
<script>

export default{
    
    
}
</script>
<style>
*{
    margin: 0;
    padding: 0;

}

header{
    display: flex;
    width: 100%;
    height: 50px;
    position: fixed;
    top: 0;
    border-bottom: 1px solid gray;
    line-height: 50px;
    text-align: center;
    background: white;
    z-index: 999;

}

a{
    flex: 1;
    color: #999999;
}

header .active{
    color: black;
    border-bottom: 2px solid #80BD01;
}



</style>