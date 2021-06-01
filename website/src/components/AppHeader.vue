<template>
  <div>
    <nav class="navbar navbar-expand-lg">
      <a class="navbar-brand" href="#">Walter Silva</a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <a
            class="nav-item nav-link" type="button"
            @click.prevent="$emit('changeSection', 'AppSectionAbout')"
            >About</a
          >
          <a
            class="nav-item nav-link" type="button"
            @click.prevent="$emit('changeSection', 'AppSectionPortfolio')"
            >Portfolio</a
          >
          <a
            class="nav-item nav-link" type="button"
            @click.prevent="$emit('changeSection', 'AppSectionProjects')"
            >Projects</a
          >
          <a
            class="nav-item nav-link" type="button"
            @click.prevent="$emit('changeSection', 'AppSectionContacts')"
            >Contacts</a
          >
          <a class="nav-item nav-link" target="__blank" type="button" href="https://tiforadacaixa.blogspot.com.br">MyBlog</a>
        </div>
        <div class="col-5"></div>
          <div id="social" class="ml-5">
            <div class="my-2 my-lg-0  pr-0">
              <ul class="navbar-nav d-flex justify-content-end">
                <li class="nav-item col-3">
                  <a class="nav-link text-light pr-0" target="__blank"
                    href="https://www.linkedin.com/in/walter-pereira-245067161/"><img class="img-fluid rounded-circle"
                      src="..//assets/icons/linkedin.png" alt="linkedin-icon"></a>
                </li>
                <li class="nav-item col-3">
                  <a class="nav-link text-light pr-0" target="__blank"
                    href="https://github.com/WalterSilva5?tab=repositories"><img class="img-fluid rounded-circle"
                      src="../assets/icons/github.png" alt="github-icon"></a>
                </li>
              </ul>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script lang="ts">
import { ref, defineComponent } from "vue";
export default defineComponent({
  name: "AppHader",
});
</script>

<style scoped lang="scss">
nav {
  background-color: black;
}
.header-logo {
  font-weight: bold;
  margin: 25px;
}
a, img {
  font-weight: bold;
  color: white;
  transition: 1s;
  &:hover {
    color: rgb(91, 161, 184);
    text-decoration: underline;
  }
  &:active {
    color: rgb(4, 0, 237);
  }
  img:hover{
    transition:0.2s;
    background-color:rgb(91, 161, 184);
  }
}
</style>
