<template>
  <div id="app">
    Hello Word Vue TS
    <br />
      <p class="p1">{{ab}}</p>
      <button @click="changeNum()">点击事件</button>
    <p>
      <button @click="btnClick()">点击发送请求</button>
    </p>
    <p><img class="img" src="../assets/images/aa.png" alt=""></p>
    <p>
      <ImgEnlargeZoomer :image="imgStr"></ImgEnlargeZoomer>
    </p>
    <router-link to="/login">Go to Login</router-link>
    <router-link to="/imgEnlarge">Go to ImgEnlarge</router-link>
    <router-view></router-view>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import { store } from '../store'
import ImgEnlargeZoomer from '../components/ImgEnlargeZoomer.vue'
@Component({
  components: {
    ImgEnlargeZoomer
  }
})
export default class App extends Vue {
  ab: string = '12313321'
  aa: number = 0;
  imgStr: String = 'https://hpx-pc.oss-cn-beijing.aliyuncs.com/partner/partner1.png'
  changeNum(): void {
    console.log('点击')
    console.log(store)
    store.commit('increment')
    this.aa = store.state.count
    console.log(this.aa)
  }

  btnClick() {
    this.$http.get('listData').then(res => {
      console.log(res)
    })
  }

  mounted () {
    // console.log('111111')
    // console.log(store)
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
  .img {
    width: 30px;
    height: 30px;
  }
</style>