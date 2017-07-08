<template>
<div class="all">
     <div class="home1">
     <ul class="home1-ul">
       <li v-for="item in list">
         <user :data='item'/>
       
          
       </li>
    </ul>


    </div>

</div>
</template>


<script>
import axios from 'axios'
import user from './user'
export default{
     data(){
         return{
             list:[]
         }
     },
   components:{
       user
   },
    created:function(){
        var self=this;
      axios.get('https://cnodejs.org/api/v1/topics')
      .then(function(response){
          return response.data
      })
      .then(function(data){
          self.list=data.data
          console.log( self.list)
      })
    }
    
}
</script>
<style>

 .home1{
       width:100%;
       height:100%;
     
      
   }
  .home1-ul {
      width: 100%;
    list-style-type: none;
     padding: 0;
      overflow: auto;
     background: #eeeeee;
   }


    /*.home1-ul>li {
   position: relative;
    padding: 15px 15px 0 15px;
    margin-bottom: 15px;
    list-style: none;
    box-shadow: 0 0 5px #ccc;
    background: #fff;


}*/

</style>