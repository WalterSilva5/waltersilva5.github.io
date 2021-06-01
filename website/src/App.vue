<template>
  <app-header/>
  <app-section/>
</template>

<script>
import { defineComponent } from 'vue'
import {$,jQuery} from 'jquery';

import "./assets/styles.scss";
import '@materializecss/materialize/sass/materialize.scss'
import 'w3-css/w3.css'


import AppHeader from './components/AppHeader.vue'
import AppSection from './components/AppSection.vue'
import AppFooter from './components/AppFooter.vue'
export default defineComponent({
  name: 'App',
  components: {
    AppHeader,
    AppSection,
    AppFooter
  }
})
</script>

<style>
</style>
