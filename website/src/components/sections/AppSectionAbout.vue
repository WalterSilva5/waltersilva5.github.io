<template>
  <div>
    <!-- about -->
    <div class="row about mt-3 px-md-4">
      <div class="col-lg-4 d-flex align-self-center">
        <img src="../../assets/profile.png" class="img-fluid rounded-circle wsi-shadow-animated" alt="profile" />
      </div>
        <div class="col-lg-8 align-self-center">
          <h5 class="about-text wsi-shadow-animated">
          <img
            src="../../assets/icons/waving-hand.png"
            class="hand-icon"
          />Hi, I’m
          <a href="https://www.linkedin.com/in/walter-pereira-245067161/"
            ><b>Walter Silva</b></a
          ><br/>
          <!-- I'm software developer with experience building websites and
          applications, mostly in Python, and have some experience working with
          JavaScript( including VueJS & Jquery ) and PHP(Codeigniter).-->
          Take a
          look at my projects bellow.
        </h5>
        </div>        
    </div>
    <!-- end about -->
    <app-section-portfolio/>
  </div>
</template>

<script>
import { defineComponent } from "@vue/runtime-core";
import AppSectionPortfolio from "./AppSectionPortfolio.vue"
export default defineComponent({
  name: "AppSectionAbout",
  components:{
    AppSectionPortfolio
  }
});
</script>
<style lang="scss" scoped>
.about-text{
  text-align: center;
  padding:10px;
  margin: 30px;
  .hand-icon{
  width:30px;
  margin: 10px;
  }
}

</style>
