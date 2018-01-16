<template>
  <div>
    <my-header></my-header>
    <h1>这是我们的详情页面</h1>
    <button @click="goBack">go back</button>
  </div>
</template>

<script>
export default {
  created(){
    let i = this.$route.params.myIndex;
    console.log(i);
  },
  methods:{
    goBack(){
      this.$router.go(-1);
    }
  }
}
</script>
