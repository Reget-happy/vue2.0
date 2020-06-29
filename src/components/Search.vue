<template>
  <div>
        <header>
           <van-search v-model="value" show-action background="#F0F0F0" placeholder="输入搜索的内容" @focus="isShow = true">
                <template #action>
                    <div @click="addHistory">
                        搜索
                    </div>
                </template>
            </van-search>
        </header>
        <div class="list" v-show="isShow">
            <ul>
                <li v-for="(item,index) in Sou" :key="index">{{ item.title }}</li>
            </ul>
        </div>
        <!-- 历史记录信息 -->
      <div id="history">
          <div id="history-head">
              <span>历史记录</span>
              <van-icon name="delete" size="15" @click="removeHistory"/>
          </div>
          <div id="history-list">
              <div class="item" v-for="(item,index) in historyList" :key="index">{{item}}</div>
          </div>
      </div>
  </div>
</template>

<script>
import '../assets/reset.css'
import rem from '../assets/rem'
export default {
  name: '',
  data() { 
    return {
        value:'',
        list:[],
        historyList:[],
        isShow:false
    }
  },
  props: {

  },
  computed:{
      Sou(){
          if(this.value == ""){
              return [];
          }
          return  this.list.filter((item)=>{
              return item.title.includes(this.value)
            //   return item.title.indexOf(this.keywords) > -1
          })
      }
  },
  components:{
  },
  mounted() {
        this.$axios.get('../../static/list.json').then((res)=>{
            this.list=res.data.result
        }),
        this.getHistory();
  },
  methods:{
        // 获取历史记录列表
        getHistory(){
            let data = localStorage.getItem("test_history")
            if(data==null){
                this.historyList=[]
            }else{
                this.historyList = JSON.parse(data)
            }
        },

        //添加历史记录
        addHistory(){
            this.isShow=false;
            //如果文本框的内容为空，不能添加
            if(this.value.length<=0){
                return false
            }
            //头部添加
            this.historyList.unshift(this.value)
            if(this.historyList.length>6){
                this.historyList.pop()
            }
            localStorage.setItem("test_history",JSON.stringify(this.historyList))
        },

        //删除历史记录
        removeHistory(){
            localStorage.removeItem("test_history")
            this.getHistory()
        }

  },
 }
</script>

<style lang="scss">
body{
    font-size: 0.16rem;
}
li{
    width: 3.6rem;
    overflow:hidden; 
    text-overflow:ellipsis; 
    white-space:nowrap; 
}
#history{
    width: 100%;
    text-align: center;
    #history-head{
        width: 100%;
        display: flex;
        justify-content: space-between;
        padding: 6% 5%;
        box-sizing: border-box;
        span{
            font-size: .25rem;
            font-weight: bold;
        }
    }
    #history-list{
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        .item{
            width: 23%;
            margin: 1%;
            background-color: #F0F0F0;
            border-radius: .1rem;
            padding: 3% 2%;
            box-sizing: border-box;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
        }
    }
}
</style>