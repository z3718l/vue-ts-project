<template>
  <div id="app">
    Hello Word Vue TS
    <br />
      <p class="p1">{{ab}}</p>
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
export default class App extends Vue {
  ab: string = '12313321'
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
</style>