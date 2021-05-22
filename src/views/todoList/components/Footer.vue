<template>
  <div class="todo-footer">
    <label>
      <input type="checkbox" v-model="isCompleted" />
    </label>
    <span
      ><span>已完成 {{ isCompletedNum }}</span> / 全部 {{ todos.length }}</span
    >
    <button class="btn btn-danger" @click="clearIsCompleted">
      清除已完成任务
    </button>
  </div>
</template>
<script lang="ts">
import { computed, defineComponent } from "vue";
import { Todo } from "@/types/todos";
export default defineComponent({
  name: "Footer",
  props: {
    todos: {
      type: Array as () => Todo[],
      required: true,
    },
    checkAll: {
      type: Function,
      required: true,
    },
    delIsVompleted: {
      type: Function,
      required: true,
    },
  },
  setup(props) {
    // 已完成的数量
    const isCompletedNum = computed(() => {
      return props.todos.reduce(
        (pre, cur) => (pre += cur.isCompleted ? 1 : 0),
        0
      );
    });
    // 全选 全不选
    const isCompleted = computed({
      get() {
        return (
          isCompletedNum.value > 0 &&
          isCompletedNum.value === props.todos.length
        );
      },
      set(val) {
        props.checkAll(val);
      },
    });
    // 删除已选中
    const clearIsCompleted = () => {
      props.delIsVompleted();
    };
    return {
      isCompletedNum,
      isCompleted,
      clearIsCompleted,
    };
  },
});
</script>
<style scoped lang="scss">
@import "@/assets/css/base";
.todo-footer {
  height: 40px;
  line-height: 40px;
  padding-left: 6px;
  margin-top: 5px;
}

.todo-footer label {
  display: inline-block;
  margin-right: 20px;
  cursor: pointer;
}

.todo-footer label input {
  position: relative;
  top: -1px;
  vertical-align: middle;
  margin-right: 5px;
}

.todo-footer button {
  float: right;
  margin-top: 5px;
}
</style>
