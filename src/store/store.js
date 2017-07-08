import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
   state:{
       students:[
           {"id":0,name:'aaaa'},
           {"id":1,name:'bbbb'},
           {"id":2,name:'cccc'},
           {"id":3,name:'dddd'}
       ]
   },
getters:{
  getStudent: state => state.students
},
actions:{
addStu( store, student ){
        store.commit('addStu',student)
      },
      delStu ( store , obj) {
        store.commit('delStu',obj)
      }
},
mutations:{
addStu:(state,student)=>{
    state.students.push(student)
},
delStu(state,obj){
    for(let i=0;i<state.students.length;i++){
        if(obj.id===state.students[i].id){
            state.students.splice(i,1)
        }
    }
}
}




})
