<template>
<div class="head">
    <h2>{{title}}</h2>
</div>
</template>
<script>
export default{
    props:['title']
}
</script>
<style>
*{
    margin: 0;
    padding: 0;
}

.head{
    width: 100%;
    height: 50px;
    background: pink;
    line-height: 50px;
    position: fixed;
    top: 0;
    text-align: center;
}
</style>