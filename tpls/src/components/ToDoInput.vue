<template>
  <div>
    <h1>待做事项列表</h1>
    <input type="text" v-model.trim="item" >
    <button @click="sendItem" class="btn btn-success">Add</button>
  </div>
</template>
<script>
export default {
  data:()=>{
    return {item:''};
  },
  methods:{
    sendItem(){
      this.$emit('getItem',this.item)
    }
  }
}
</script>
