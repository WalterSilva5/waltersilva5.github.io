<template>
  <div>
    <app-header @changeSection="changeSection"/>
    <app-section class="container-fluid" style="margin:0;" :sectionActive="sectionActive"/>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import '../node_modules/jquery/dist/jquery.js';

import JQuery from 'jquery'

import "./assets/styles.scss";
import "bootstrap/dist/css/bootstrap.css"
import "animate.css"
import AppHeader from './components/AppHeader.vue'
import AppSection from './components/AppSection.vue'
import AppFooter from './components/AppFooter.vue'
export default defineComponent({
  name: 'App',
  components: {
    AppHeader,
    AppSection,
    AppFooter
  },
  data() {
    return {
      sectionActive: "AppSectionAbout"
    }
  },
  methods: {
    changeSection(section){
      this.sectionActive = section;
    }
  },
})
//console.log(AppSection.methods.changeSection(AppSection))
</script>

<style>
</style>
