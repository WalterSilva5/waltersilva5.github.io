<template>
  <div>
    <div class="my-5">
      <h3 class="title">Alguns de meus projetos</h3>
      <div class="cards row container-fluid col-12 py-3 wsi-shadow" id="cards">
        <app-portfolio-card>
          <a
            href="https://waltersilva5.github.io/wsi-youtube-downloader-demo/"
            target="_blank"
          >
            <img src="../../assets/projects/project-0.png" class="img-fluid" />
          </a>
        </app-portfolio-card>

        <a href="https://carvalhosfit.herokuapp.com/home/" target="_blank">
          <app-portfolio-card>
            <img
              src="../../assets/projects/project-1.png"
              class="img-fluid"
            /> </app-portfolio-card
        ></a>

        <a href="https://waltersilva5.github.io/wsi-landing-page-green/dist/" target="_blank">
          <app-portfolio-card>
            <img
              src="../../assets/projects/project-5.png"
              class="img-fluid"
            /> </app-portfolio-card
        ></a>

        <a href="https://frinex.com.br" target="_blank">
          <app-portfolio-card>
            <img
              src="../../assets/projects/project-2.png"
              class="img-fluid"
            /> </app-portfolio-card
        ></a>

        <a
          href="https://github.com/WalterSilva5/gestao-de-lan-house"
          target="_blank"
        >
          <app-portfolio-card>
            <img
              src="../../assets/projects/project-3.png"
              class="img-fluid"
            /> </app-portfolio-card
        ></a>

        <a href="https://github.com/WalterSilva5/teste-esoft" target="_blank">
          <app-portfolio-card>
            <img
              src="../../assets/projects/project-4.png"
              class="img-fluid"
            /> </app-portfolio-card
        ></a>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "@vue/runtime-core";
import AppPortfolioCard from "./AppPortofolio/AppPortifolioCard.vue";
export default defineComponent({
  props: {},
  name: "AppSectionPortfolio",
  components: {
    AppPortfolioCard,
  },
  created() {
    setInterval(() => {
      document.getElementById("cards").scrollLeft += 1;
    }, 50);

    setInterval(() => {
      document.getElementById("cards").scrollLeft -= 1000;
    }, 30000);
  },
});
</script>

<style lang="scss" scoped>
h3 {
  font-size: 40px;
  font-weight: bold;
  &.hover {
    color: blue;
    text-decoration: none;
  }
}
.cards {
  display: block;
  overflow-x: auto;
  white-space: nowrap;
}
</style>
