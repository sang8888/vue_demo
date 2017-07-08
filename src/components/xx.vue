<template>
<div class="xx">
   <my-header title="消息"/>
</div>
</template>
<script>
import header from './header'
export default{
    data:function(){
        return{
            msg:'这是消息'
        }
    },
    components:{
        'my-header':header
    }
}
</script>
<style>

</style>