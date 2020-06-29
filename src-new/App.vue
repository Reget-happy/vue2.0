<template>
  <div id="app">
    <router-view></router-view>
    <Loading v-if="Loading"></Loading>
  </div>
</template>

<script>
import { mapState,mapMutations } from 'vuex'

export default {
  name: 'App',
  created(){
  },
  computed:{
    ...mapState(['num','count','Loading','json'])
  },
  mounted() {

  },
  methods:{
    ...mapMutations(['changeNum']),
    click(str){
      this.changeNum(str)
    }
  }
}
</script>

<style>

</style>
