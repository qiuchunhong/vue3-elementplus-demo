<template>
  <li
    :class="{ mouseover: mouseover }"
    @mouseenter="mouseover = true"
    @mouseleave="mouseover = false"
  >
    <label>
      <input type="checkbox" v-model="isCompleted" />
      <span>{{ todo.title }}</span>
    </label>
    <button class="btn btn-danger" @click="delTodo(index)" v-if="mouseover">
      删除
    </button>
  </li>
</template>
<script lang="ts">
import { computed, defineComponent, inject, ref } from "vue";
import { Todo } from "@/types/todos";
export default defineComponent({
  name: "Item",
  props: {
    todo: {
      type: Object as () => Todo, // 函数返回的Todo类型
      required: true,
    },
    index: {
      type: Number,
      required: true,
    },
    changeIsCompleted: {
      type: Function,
      required: true,
    },
  },
  setup(props) {
    // 鼠标经过
    const mouseover = ref(false);
    // 复选框状态
    const isCompleted = computed({
      get() {
        return props.todo.isCompleted;
      },
      set(val) {
        props.changeIsCompleted(props.todo, val);
      },
    });
    // 删除数据
    const delTodo = inject("delTodo");
    return {
      mouseover,
      isCompleted,
      delTodo,
    };
  },
});
</script>
<style scoped lang="scss">
@import "@/assets/css/base";

li {
  list-style: none;
  height: 36px;
  line-height: 36px;
  padding: 0 5px;
  border-bottom: 1px solid #ddd;
}
li.mouseover {
  background-color: pink;
  color: green;
}
li label {
  float: left;
  cursor: pointer;
}

li label li input {
  vertical-align: middle;
  margin-right: 6px;
  position: relative;
  top: -1px;
}

li button {
  float: right;
  /* display: none; */
  margin-top: 3px;
}
li::before {
  content: initial;
}
li:last-child {
  border-bottom: none;
}
</style>
