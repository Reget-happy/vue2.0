import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import axios from 'axios'

Vue.use(Vuex)

let store=new Vuex.Store({
    state:{
        Loading:true,
    },
    mutations:{
        changeLoading(state,bool){
            state.Loading=bool
        },
    },
    //相当于计算属性
    getters:{
        // sum(state){
        //     let sum=0
        //     state.arr.forEach((item)=> {
        //         sum+=item
        //     })
        //     return sum
        // }
    },
    //异步方法集合
    actions:{
        actionAjax(context){
        //     // setTimeout(()=>{
        //         console.log(context)
        //         axios.get("https://cnodejs.org/api/v1/topics").then((res)=>{
        //             context.commit("changeJson",res.data.data)
        //         })
        //     // },2000)
        }
    },
    plugins: [createPersistedState()] //加上这个就可以了
})

export default store