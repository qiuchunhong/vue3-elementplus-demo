<template>
  <ul class="todo-main">
    <Item
      v-for="(item, index) in todos"
      :key="item.id"
      :todo="item"
      :index="index"
      :changeIsCompleted="changeIsCompleted"
    />
  </ul>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import Item from "./Item.vue";
import { Todo } from "@/types/todos";
export default defineComponent({
  name: "List",
  components: {
    Item,
  },
  props: {
    todos: {
      type: Object as () => Todo,
      required: true,
    },
    changeIsCompleted: {
      type: Function,
      required: true,
    },
  },
  setup() {
    return {};
  },
});
</script>
<style scoped>
.todo-main {
  margin-left: 0px;
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 0px;
  margin-top: 10px;
}

.todo-empty {
  height: 40px;
  line-height: 40px;
  border: 1px solid #ddd;
  border-radius: 4px;
  padding-left: 5px;
  margin-top: 10px;
}
</style>
