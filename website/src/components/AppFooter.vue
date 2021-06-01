<template>
<div>  
  <nav class="footer">
        <p class="footer-logo w3-center">Walter Silva - {{new Date().getFullYear()}}</p>
  </nav>
</div>
</template>

<script lang="ts">
import { ref, defineComponent } from 'vue'
export default defineComponent({
  name: 'AppFooter'
})
</script>

<style scoped lang="scss">
.footer{
  height:50px;
  background-color:black;
}
.footer-logo{
  font-weight: bold;
}
</style>
