<template>
  <div id="app-section">
    <component class="comp" :is='sectionActive'/>
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
      props:{
        sectionActive: String
    }
  })
</script>

<style lang="scss">
h4{
    margin: 0 !important;
}
#app-section{
  min-height: 600px;
}

</style>