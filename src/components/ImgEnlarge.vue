<template>
  <div>
    <!-- https://www.jb51.net/article/133409.htm -->
    <!-- https://github.com/826327700/vue-piczoom/blob/master/src/components/PicZoom.vue -->
    <p>图片放大---vue-piczoom</p>
    <!-- <div class="magnifier-box" :class="vertical?'vertical':''" :ref="id" @mousemove="mousemove" @mouseover="mouseover" @mouseleave="mouseleave">
        <img v-show="showImg" :src="imgUrl" alt="">
        <div class="mouse-cover"></div>
        
    </div> -->
  </div>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
// import PicZoom from 'vue-piczoom'
@Component({
  props: {
    // scale: {
    //   type: Number,
    //   default: 2.5
    // },
    // url: {
    //   type: String,
    //   required: true
    // },
    // bigUrl: {
    //   type: String,
    //   default: null
    // },
    // scroll: {
    //   type: Boolean,
    //   default: false
    // },
    // showEidt: {
    //   type: Boolean,
    //   default: false
    // }
  }
})
export default class ImgEnlarge extends Vue {
  // 初始化变量
  id: any = null
  cover: any = null
  imgbox: any = null
  imgwrap: any = null
  orginUrl: any = null
  bigImgUrl: any = null
  bigOrginUrl: any = null
  imgUrl: any = null
  img: any = null
  canvas: any = null
  ctx: any = null
  rectTimesX: any = 0
  rectTimesY: any = 0
  imgTimesX: any = 0
  imgTimesY: any = 0
  init: any = false
  step: any = 0
  bigStep: any = 0
  vertical: any = false
  showImg: any = true

  // 实例创建之后
  created() {
    var $chars = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678'
    var maxPos = $chars.length
    var str = ''
    for (let i = 0; i < 10; i++) {
      str += $chars.charAt(Math.floor(Math.random() * maxPos));
　　}

    this.id=str
    // this.imgUrl=this.url
    // this.orginUrl=this.url
    // this.bigImgUrl=this.bigUrl
    // this.bigOrginUrl=this.bigUrl
  }
  
}
</script>