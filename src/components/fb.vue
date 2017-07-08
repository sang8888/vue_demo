<template>
<div class="fb">
   <my-header title="发表"/>
   <input type="text" @keyup.enter='addStu' v-model='name'>
    <div class="list-class">
                <ul class="ul">
                  <li v-for="stu in student">
                      <div>
                          {{  stu.name }}
                      </div>
                      <div class="" @click="delStu(stu.id)">
                          删除
                      </div>
                  </li>
                </ul>
            </div>
</div>
</template>
<script>
import header from './header'
import uuid from 'uuid'
export default{
    data:function(){
        return{
            name:''
        }
    },
    components:{
        'my-header':header
    },
    computed:{
  student(){
      return this.$store.getters.getStudent
  }
    },
    methods:{
       addStu(){

        var name = this.name;
          console.log('enter' + name)

        this.$store.dispatch('addStu',{
          id: uuid(),
          name:name
        })

        this.name = ''
      },
      delStu(id){
          console.log(id)

          this.$store.dispatch('delStu',{
            id:id
          })
      }
    }
}
</script>
<style>
*{
    margin: 0;
    padding: 0;
}

input{
    width: 100%;
    height: 60px;
  text-align: center;
   
}


.list-class .ul{
  list-style: none;
}

.ul{
  padding: 0;
  width: 100%;
 
}

.ul li{
width: 100%;
height: 40px;
display: flex;
flex-direction: row;
margin-top: 10px;
 background: skyblue;
 line-height: 40px;
}

.ul li div{
    flex:1;

}

</style>