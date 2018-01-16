<template>
  <div id="myDiv">
    <h1>待做事项列表</h1>
    <input type="text" v-model.trim="item" >
    <button @click="sendItem" class="btn btn-success">Add</button>
  </div>
</template>
<script>
export default {
  created(){
    this.$http.get('http://localhost:8888/admin/data/user_list.php').then(respones=>{
      console.log(respones.data.data);
    })
  },
  data:()=>{
    return {item:''};
  },
  methods:{
    sendItem(){
      this.$emit('getItem',this.item)
    }
  },
  mounted(){
    $('#myDiv').css('backgroundColor','red');
  }
}
</script>
