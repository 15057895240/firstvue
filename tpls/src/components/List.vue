<template>
<div>
  <my-header></my-header>
  <ul>
    <li :key="i" v-for="(tmp,i) in list">
      <button @click="jump(i)">{{tmp}}</button>
    </li>
  </ul>
  <my-footer></my-footer>
  </div>
</template>

<script>
import Footer from '@/components/Footer'
export default {
  components:{
    myFooter:Footer
  },
  data:()=>{
    return {list:[100,200,300]}
  },
  methods:{
    jump(i){
      this.$router.push('/myDetail/'+i);
    }
  }
}
</script>

<style>
  ul{
    list-style-type: none;
  }
</style>
