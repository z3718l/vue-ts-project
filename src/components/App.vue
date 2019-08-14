<template>
  <div id="app">
    Hello Word Vue TS
    <br />
      <p class="p1">{{ab}}</p>
      <button @click="changeNum()">点击事件</button>
    <br />
    <p>
      <img src="../assets/images/aa.png" alt="">
    </p>
    <router-link to="/login">Go to Login</router-link>
    <router-view></router-view>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import { store } from '../store';
export default class App extends Vue {
  ab: string = '12313321'
  aa: number = 0;
  changeNum(): void {
    console.log('点击')
    console.log(store)
    store.commit('increment')
    this.aa = store.state.count
    console.log(this.aa)
  }

  mounted () {
    console.log('111111')
    console.log(store)
  }
}
</script>
<style lang="scss">
  * {
    margin: 0;
    padding: 0
  }
  .p1 {
    color: #ffeebb;
  }
  img {
    width: 100px;
    height: 100px;
  }
</style>