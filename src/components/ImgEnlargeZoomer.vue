<template>
  <div class="image_zoom" ref="magnifier">
    <div class="image" :style="imageStyle">
      <img :src="image" alt="">
    </div>
  </div>
</template>
<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
@Component({
  
})
export default class ImgEnlargeZoomer extends Vue {
  @Prop() image:String
  @Prop() width:Number
  @Prop() height:Number
  props: ['image','width','height']
  get imageStyle() {
    return {
      width: this.width + 'px',
      height: this.height + 'px'
    }
  }
  mounted () {
    console.log(this.width)
  }
}
</script>
<style lang="scss">
  .image_zoom {
    display: inline-block;
    position: relative;
    box-sizing: border-box;
    cursor: zoom-in;
    overflow: hidden;
    .image {
      width: 400px;
      height: 400px;
      img {
        width: 400px;
        height: 400px;
      }
    }
  }
</style>