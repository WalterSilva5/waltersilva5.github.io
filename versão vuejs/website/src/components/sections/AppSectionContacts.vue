<template>
  <div>
    <div class="my-5">
        <h3 class="title">Entre em contato comigo</h3>
    <div class="d-flex justify-content-center py-2">
      <div class="cards col-md-8">
        
        <a href="https://www.linkedin.com/in/walter-pereira-245067161/" target="_blank">
          <div class="row wsi-shadow-animated my-4">
          <div class="col-sm-2 align-self-center">
            <img
              src="../../assets/icons/linkedin.png"
              class="rounded-circle col-lg-8"
              style="filter: invert(1)"
            />
          </div>
          <div class="col-md-10 align-self-center">
            <h3>https://www.linkedin.com/in/walter-pereira-245067161/</h3>
          </div>
        </div>
        </a>

        <a href="https://github.com/waltersilva5" target="_blank">
        <div class="row wsi-shadow-animated my-4 py-2">
          <div class="col-sm-2 align-self-center">
            <img
              src="../../assets/icons/github.png"
              class="rounded-circle col-lg-8"
              style="filter: invert(1)"
            />
          </div>
          <div class="col-md-10 align-self-center">
            <h3>https://github.com/waltersilva5</h3>
          </div>
        </div></a>

        <a href="mailto:waltersilva1@outlook.com" target="_blank">
          <div class="row wsi-shadow-animated my-4 py-2">
            <div class="col-sm-2 align-self-center">
              <img
                src="../../assets/icons/mail.png"
                class="rounded-circle col-lg-8"
                style="filter: invert(1)"
              />
            </div>
            <div class="col-md-10 align-self-center">
              <h3>waltersilva1@outlook.com</h3>
            </div>
          </div>
        </a>
        <a href="tel:5587996195736" target="_blank">
          <div class="row wsi-shadow-animated my-4 py-2">
            <div class="col-sm-2 align-self-center">
              <img
                src="../../assets/icons/whatsapp.png"
                class="rounded-circle col-lg-8"
                style=" filter: saturate(1); filter: grayscale(.8);"
              />
            </div>
            <div class="col-md-10 align-self-center">
              <h3> +55 879 9619-5736</h3>
            </div>
          </div>
        </a>

      </div>
    </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "@vue/runtime-core";
export default defineComponent({
  name: "AppSectionContacts",
});
</script>

<style lang="scss" scoped>
div{
  overflow: auto;
}
h3 {
  display: inline-block;
  font-size: 1.5em;
  font-weight: bold;
  &.hover{
    color:blue;
    text-decoration:none;
  }
}

img{
  width: 100px;
}

a{
  color: black;
  text-decoration:none;
}
</style>
