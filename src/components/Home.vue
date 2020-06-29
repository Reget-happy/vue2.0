<template>
  <div></div>
</template>

<script>
import { mapState, mapMutations, mapGetters, mapActions } from "vuex";
export default {
  name: "",
  data() {
    return {};
  },
  props: {},
  components: {},
  computed: {},
  mounted() {
            
      this.$axios.get('../../static/data.json').then((res)=>{
          console.log(res)
      })
  },
  methods: {}
};
</script>

<style scoped>
</style>