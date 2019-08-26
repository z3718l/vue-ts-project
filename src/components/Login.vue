<template>
  <div>
    <div class="title">登录页</div>
    <Childer title="标题"></Childer>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import Childer from './Childer.vue'
@Component({
  components: {
    Childer
  }
})
export default class Login extends Vue {

}
</script>
