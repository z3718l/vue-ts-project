<template>
  <div id="app">
    Hello Word Vue TS
    <br />
      <p class="p1">{{ab}}</p>
      <button @click="changeNum()">点击事件</button>
    <p>
      <button @click="btnClick()">点击发送请求</button>
    </p>
    <p>
      <img src="../assets/images/aa.png" alt="">
    </p>
    <router-link to="/login">Go to Login</router-link>
    <router-view></router-view>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import { store } from '../store'
import _ from 'lodash'
export default class App extends Vue {
  ab: string = '12313321'
  aa: number = 0;
  array: Array<number> = [1, 2]
  other: Array<number>
  changeNum(): void {
    console.log('点击')
    console.log(store)
    console.log(store)
    console.log(store)
    store.commit('increment')
    this.aa = store.state.count
    console.log(this.aa)
  }

  btnClick() {
    this.other = _.concat(this.array, [3,4])
    console.log(this.other)
    this.$http.get('listData').then(res => {
      console.log(res)
    })
  }

  mounted () {
    console.log('111111')
    console.log(store)
    this.other = _.concat(this.array, [3,4])
    console.log(this.other)
  }
}
</script>
<style lang="scss">
  * {
    margin: 0;
    padding: 0
  }
  .p1 {
    color: blue;
  }
  img {
    width: 100px;
    height: 100px;
  }
</style>