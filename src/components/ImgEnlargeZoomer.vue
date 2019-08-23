<template>
  <div>
    <div>888</div>
    <div>
      <img :src="image" alt="">
    </div>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
@Component({
  props: {
    image: {
      type: String,
      required: true
    },
    width: {
      type: Number,
      default: 200
    },
    height: {
      type: Number,
      default: 200
    }
  }
})
export default class ImgEnlargeZoomer extends Vue {

  get imageStyle() {
    return {
      // width: this.width + 'px',
      // height: this.height + 'px'
    }
  }
  
}
</script>