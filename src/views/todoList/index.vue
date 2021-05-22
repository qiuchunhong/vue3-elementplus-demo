<template>
  <div class="todo-container">
    <div class="todo-wrap">
      <Header :addTodo="addTodo" />
      <List :todos="todos" :changeIsCompleted="changeIsCompleted" />
      <Footer
        :todos="todos"
        :checkAll="checkAll"
        :delIsVompleted="delIsVompleted"
      />
    </div>
  </div>
</template>
<script lang="ts">
import {
  defineComponent,
  onMounted,
  provide,
  reactive,
  toRefs,
  watch,
} from "vue";
import Header from "./components/Header.vue";
import List from "./components/List.vue";
import Footer from "./components/Footer.vue";
import { Todo } from "@/types/todos";

export default defineComponent({
  name: "todoList",
  components: {
    Header,
    List,
    Footer,
  },
  setup() {
    const state = reactive<{ todos: Todo[] }>({
      todos: [],
    });
    // 读取数据
    onMounted(() => {
      state.todos = JSON.parse(localStorage.getItem("todos_key") || "[]");
    });
    // 监视数据
    watch(
      () => state.todos,
      (val) => {
        localStorage.setItem("todos_key", JSON.stringify(val));
      },
      { deep: true }
    );
    // 修改单条复选框的值
    const changeIsCompleted = (todo: Todo, isCompleted: boolean) => {
      todo.isCompleted = isCompleted;
    };
    // 添加数据
    const addTodo = (item: Todo) => {
      state.todos.unshift(item);
    };
    // 删除单条数据
    const delTodo = (index: number) => {
      state.todos.splice(index, 1);
    };
    provide("delTodo", delTodo);
    // 全选 全不选
    const checkAll = (isCompleted: boolean) => {
      // 以下两种写法都可以 why?
      state.todos.forEach((val) => {
        val.isCompleted = isCompleted;
      });
      // state.todos.map((val: Todo) => {
      //   return (val.isCompleted = isCompleted);
      // });
    };
    // 删除已选中
    const delIsVompleted = () => {
      state.todos = state.todos.filter((val: Todo) => !val.isCompleted);
    };
    return {
      ...toRefs(state),
      changeIsCompleted,
      addTodo,
      checkAll,
      delIsVompleted,
    };
  },
});
</script>
<style scoped>
.todo-container {
  width: 600px;
  margin: 0 auto;
}

.todo-container .todo-wrap {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}
</style>
