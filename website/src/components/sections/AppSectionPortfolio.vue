<template>
  <div>
    <h2 class="h2 title">SOME OF MY WORK</h2>
    <div class="cards row container col-12 py-3 wsi-shadow">
      <app-portfolio-card>
        <a href="https://waltersilva5.github.io/wsi-youtube-downloader-demo/" target="__blank">
          <img
          src="../../assets/projects/project-0.png"
          class="img-fluid"
        />
        </a>
      </app-portfolio-card>

      <a href="https://carvalhosfit.herokuapp.com/home/" target="__blank">
      <app-portfolio-card>
        <img
          src="../../assets/projects/project-1.png"
          class="img-fluid"
        />
      </app-portfolio-card></a>

      <a href="https://frinex.com.br" target="__blank">
      <app-portfolio-card>
        <img
          src="../../assets/projects/project-2.png"
          class="img-fluid"
        />
      </app-portfolio-card></a>

      <a href="https://github.com/WalterSilva5/gestao-de-lan-house" target="__blank">
      <app-portfolio-card>
        <img
          src="../../assets/projects/project-3.png"
          class="img-fluid"
        />
      </app-portfolio-card></a>

      <a href="https://github.com/WalterSilva5/teste-esoft" target="__blank">
      <app-portfolio-card>
        <img
          src="../../assets/projects/project-4.png"
          class="img-fluid"
        />
      </app-portfolio-card></a>

    </div>
  </div>
</template>

<script>
import { defineComponent } from "@vue/runtime-core";
import AppPortfolioCard from "./AppPortofolio/AppPortifolioCard.vue"
export default defineComponent({
  props: {
  },
  name: "AppSectionPortfolio",
  components:{
    AppPortfolioCard
  }
});
</script>

<style lang="scss" scoped>
.cards{
  display: block;
  overflow-x: auto;
  white-space: nowrap;
}
</style>
