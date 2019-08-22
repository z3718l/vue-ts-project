<template>
  <div>
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
  components: {
    // PicZoom
  }
})
export default class ImgEnlarge extends Vue {
  
}
</script>