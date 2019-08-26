<template>
  <div>
    <div>子组件</div>
  </div>
</template>
<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
@Component({
  components: {},
  // props: {
  //   title: {
  //     type: String,
  //     default: ''
  //   }
  // }
})
export default class Childer extends Vue {
  // @Prop() title: String
  // props: ['title']
  mounted () {
    console.log('生命周期---counted')
    // console.log()
  }
}
</script>
