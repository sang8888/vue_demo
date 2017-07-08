<template>
<div class="my">
   <my-header title="我的"/>
</div>
</template>
<script>
import header from './header'
export default{
    data:function(){
        return{
            msg:'这是我的'
        }
    },
    components:{
        'my-header':header
    }
}
</script>
<style>

</style>