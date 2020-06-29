<template>
  <div class="loading">
        <h4>Loading</h4>
        <img width="150" src="https://i01piccdn.sogoucdn.com/af05289f0f95425d" alt="">
  </div>
</template>

<script>
export default {
  name: '',
  data() { 
    return {

    }
  },
  props: {

  },
  components:{
  },
  
  methods:{

  },
 }
</script>

<style scoped>
.loading{
    background: rgba(0,0,0,0.5);
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
</style>