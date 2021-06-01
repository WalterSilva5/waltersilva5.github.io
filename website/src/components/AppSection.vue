<template>
  <div id="app-section">
    <component class="comp" :is='componentActive'/>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import AppSectionAbout from "./sections/AppSectionAbout.vue"
import AppSectionPortfolio from "./sections/AppSectionPortfolio.vue"
import AppSectionProjects from "./sections/AppSectionProjects.vue"
import AppSectionContacts from "./sections/AppSectionContacts.vue"
export default defineComponent({
    name: "AppSection",
    components:{
      AppSectionAbout,
      AppSectionPortfolio,
      AppSectionProjects,
      AppSectionContacts
    },
    data() {
      return {
        componentActive: "AppSectionAbout"
      }
    },
  })
</script>

<style lang="scss" scoped>

#app-section{
  min-height: 600px;
  background-color: red;
}

</style>