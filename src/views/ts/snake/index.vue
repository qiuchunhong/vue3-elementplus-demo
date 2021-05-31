<template>
  <div class="snake-main">
    <div class="stage">
      <div class="snake" id="snake">
        <div></div>
      </div>
      <div class="food" id="food">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
    <div class="score-panel">
      <div class="l">SCORE: <span id="score">0</span></div>
      <div class="l">LEVEL: <span id="level">1</span></div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, onMounted } from "vue";
import GameControl from "./GameControl";
export default defineComponent({
  name: "APP",
  setup() {
    onMounted(() => {
      const gameControl = new GameControl();
      // setInterval(() => {
      //   console.log(gameControl.direction);
      // }, 1000);
    });
    return {};
  },
});
</script>
<style lang="scss">
.snake-main {
  width: 360px;
  height: 420px;
  margin: 0 auto;
  border: 10px solid #000;
  border-radius: 30px;
  background-color: #b4d7a8;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  .stage {
    width: 304px;
    height: 304px;
    border: 2px solid #000;
    position: relative;
  }
  .snake {
    div {
      width: 10px;
      height: 10px;
      background: #000;
      border: 1px solid #b4d7a8;
      position: absolute;
    }
  }
  .food {
    width: 10px;
    height: 10px;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    align-content: space-between;
    position: absolute;
    div {
      width: 4px;
      height: 4px;
      background: #000;
      transform: rotate(45deg);
    }
  }
  .score-panel {
    font-family: Courier;
    font-weight: bold;
    font-size: 20px;
    display: flex;
    justify-content: space-between;
    width: 304px;
    height: 40px;
    align-items: center;
  }
}
</style>
