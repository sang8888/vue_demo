<template>
<div class="all1">
    
    
          <div class="div-top">
              <a heaf=""><img :src="data.author.avatar_url"></a> 
              <p>{{data.author.loginname}}</p>
              <p>3月前 <span>#分享#</span></p>
          </div>
          <div class="common">
        <div class="icon" v-if='data.good'><i data-v-01fb4290="" class="iconfont icon-topic-good"></i></div>
        <div class="icon" v-if='data.top'><i data-v-01fb4290="" class="iconfont icon-topic-top"></i></div>
      </div>
          <div class="div-con">
                 <p>{{data.title}}</p>
          </div>
          <div class="div-time">
            <span><i class="icon iconfont icon-click"></i> {{data.visit_count}}</span>
            <span><i class="icon iconfont icon-comment"></i>{{data.reply_count}}</span>
            <span>1天前</span>
          </div>
       
          
      


   

</div>
</template>
<script>

export default{
    
     props:['data']
   
    
}
</script>
<style>

 .all1{
     position: relative;
  padding: 15px 15px 0 15px;
  margin-bottom: 15px;
  list-style: none;
  box-shadow: 0 0 5px #ccc;
  background: #fff;
 }

 .div-top{
   position: relative;
   width:100%;
 text-indent:40px;}
.div-top>a{
    display:block;
    position:absolute;
    top:4px;
    width:32px;
    height:32px;
  
}
.div-top>a>img{
   display:block;
   width:100%;
   height:100%;
   border-radius:50%;
}
.div-top>p{
  width:100%;
  font-size:12px;
  padding:3px 0;


}
.div-top>p>span{
  display:inline-block;
  text-indent:-1px;
  color:green;
}
.div-con{
    padding: 10px 0;
    line-height: 22px;
    font-size: 16px;
    font-weight: bold;
    color: #222;
    border-bottom:1px solid #eee;
}

.div-time{
    width: 100%;
    height: 40px;
    line-height: 40px;
    /*text-align: center;*/
    display: flex;
   
}

.div-time span{
   flex: 1;


    line-height: 40px;
    text-align: center;
    border-right: 1px solid #e1e1e1;
    font-size: 12px;
    color: #aaa;
}

.div-time span:nth-of-type(3){
     border-right:none;
}

 .common{
  position: absolute;
    top: 0;
    right: 0;
    z-index: 2;
    height: 80px;
}
 .common .icon{
  float: left;
}
 .common .icon i{


      display: block;
      font-size: 34px;
      -webkit-transform: rotate(35deg);
      transform: rotate(35deg);
      padding: 20px 5px;


}
 .common .icon .icon-topic-good{
    color: red;
}
 .common .icon .icon-topic-top{
    color: green;
}
</style>