<template>
    <ul @getItem="getItem">
      <li is="to-do-item" :key="i" v-for="(item,i) in items" :itemValue="item"></li>
    </ul>
</template>
<script>
import ToDoItem from '@/components/ToDoItem'

export default {
  components:{
    ToDoItem:ToDoItem
  },
  data:()=>{
    return {items:['次饭','碎觉','打豆豆']}
  },
  methods:{
    getItem(item){
      console.log(item);
    }
  }
}
</script>

