<template>
  <MyHeader/>
  <router-view/>
</template>


<script>
  import MyHeader from "@/components/MyHeader/MyHeader";

  export default {
    components:{MyHeader},

    data(){
      return{

      }
    }
}
</script>
<style lang="scss">
@import "assets/style";
</style>
