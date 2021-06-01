<template>
  <div>
    <h2 class="h2 title">SOME OF MY WORK</h2>
    <div class="cards row container col-12 py-3 wsi-shadow">
      <div class="card-work col-md-4">
        <img src="../../assets/projects/project-0.png" class="img-fluid rounded" alt="">
      </div>
      <div class="card-work col-md-4">
        <img src="../../assets/projects/project-1.jpg" class="img-fluid rounded" alt="">
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "@vue/runtime-core";
export default defineComponent({
  name: "AppSectionPortfolio",
});
</script>

<style lang="scss" scoped>
.card-work {
  display: inline-block;
  img{
    height: 300px;
  }
}
.cards{
  display: block;
  overflow-x: auto;
  white-space: nowrap;
}
</style>
