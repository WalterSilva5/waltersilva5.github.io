<template>
<div> 
  <nav>
    <div class="nav-wrapper">
        <h5 class="header-logo left">Walter Silva</h5>
      <div> 
        <ul class="hide-on-med-and-down">
          <li><a class="waves-effect waves-dark">About</a></li>
          <li><a class="waves-effect waves-dark">Portfolio</a></li>
          <li><a class="waves-effect waves-dark">Projects</a></li>
          <li><a class="waves-effect waves-dark">Contacts</a></li>
        </ul>
      </div>
    </div>
  </nav>
</div>
</template>

<script lang="ts">
import { ref, defineComponent } from 'vue'
export default defineComponent({
  name: 'AppHader'
})
</script>

<style scoped lang="scss">
nav{
  background-color:black;
}
.header-logo{
  font-weight: bold;
  margin: 25px;
}
a{
  font-weight: bold;
  &:hover{
    color:lightblue;
  }
  &:active{
    color: rgb(4, 0, 237)
  }
}
</style>
