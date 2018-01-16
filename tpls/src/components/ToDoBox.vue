<template>
  <div>
    <to-do-input></to-do-input>
    <to-do-list></to-do-list>
  </div>
</template>
<script>
import ToDoList from '@/components/ToDoList'
import ToDoInput from '@/components/ToDoInput'
export default {
  components:{
    ToDoList:ToDoList,
    ToDoInput:ToDoInput
  }
}
</script>

