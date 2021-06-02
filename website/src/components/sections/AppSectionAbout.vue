<template>
  <div>
    <!-- about -->
    <div class="row about mt-3 px-md-4">
      <div class="col-lg-3 d-flex align-self-center justify-content-center">
        <img
          src="../../assets/profile.png"
          class="img-fluid rounded-circle wsi-shadow-animated"
          alt="profile"
        />
      </div>
      <div
        class="
          col-lg-9
          align-self-center
          justify-content-center
          wsi-shadow-animated
        "
        style="max-height: 450px; overflow: auto"
      >
        <div class="container-fluid">
          <h5 class="about-text text-center align-self-center">
            <img
              src="../../assets/icons/waving-hand.png"
              class="hand-icon"
            />Olá, Meu nome é
            <a href="https://www.linkedin.com/in/walter-pereira-245067161/"
              ><span><b>Walter</b></span></a
            ><br />
            Eu sou <b>programador</b> e <b>designer</b> frontend.
          </h5>
        </div>

        <div class="row container-md container-fluid col-12 d-flex justify-content-center">
          <div class="row col-md-8 wsi-shadow-animated mx-md-4 my-4 text-left">
            <div>
              <h5>
                <b>Tenho experiencia com desenvolvimento web backend com:</b>
              </h5>
            </div>
            <br />
            <div>
              <span class="my-2">Python3 + Django</span>
              <br />
              <span>PHP + Codeigniter3</span>
              <br />
              <span>Bancos de dados: Oracle, PostgreSQL e MySQL</span>
            </div>
          </div>
          <div class="row col-md-8 wsi-shadow-animated mx-md-4 my-4  text-left">
            <h5><b>Possuo experiência frontend com as ferramentas:</b></h5>
            <div>
              <span class="my-2">VueJS</span>
              <br />
              <span>Bootstrap, W3CSS, MateralizeCSS</span>
              <br />
              <span>Html, CSS, SASS, SCSS</span>
              <br />
              <span>Javascript, es6+, Typescript</span>
            </div>
          </div>

          <div class="row col-md-8 wsi-shadow-animated mx-md-4 my-4 text-left">
            <div>
              <h5 style="height: 100%">
                <b>Tenho tambem os conhecimentos:</b>
              </h5>
            </div>
            <div class="col-12 p-0 m-0 float-left container-flex">
              <div>
                <span>Programação seguindo os principios SOLID</span>
                <br />
                <span>Clean Code e Design Patterns</span>
                <br />
                <span>Prototipagem de componentes</span>
                <br />
                <span>Conhecimentos em qualidade de design</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- end about -->
    <app-section-portfolio />
  </div>
</template>

<script>
import { defineComponent } from "@vue/runtime-core";
import AppSectionPortfolio from "./AppSectionPortfolio.vue";
export default defineComponent({
  name: "AppSectionAbout",
  components: {
    AppSectionPortfolio,
  },
});
</script>
<style lang="scss" scoped>
.about-text {
  text-align: center;
  padding: 10px;
  margin: 30px;
  .hand-icon {
    width: 30px;
    margin: 10px;
  }
}
</style>
