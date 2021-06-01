<template>
  <div>
<nav class="navbar navbar-expand-lg navbar">
  <h4 class="navbar-brand text-light font-weight-bold px-4 pr-5">Walter Silva</h4>
  <button class="navbar-toggler bg-secondary text-light" type="button" @click="toggle_menu()">
    <span class="text-light"><b>MENU</b></span>
  </button>
  <div class="navbar-collapse" id="navbarNav" style="display: none;">
    <ul class="navbar-nav">
          <li class="nav-item">
                      <a
            class="nav-item nav-link"
            type="button"
            @click.prevent="$emit('changeSection', 'AppSectionAbout')"
            >About</a
          ></li>

          <li>
            <a
            class="nav-item nav-link"
            type="button"
            @click.prevent="$emit('changeSection', 'AppSectionPortfolio')"
            >Portfolio</a
          >
          </li>
            <!-- <li>
              <a
              class="nav-item nav-link"
              type="button"
              @click.prevent="$emit('changeSection', 'AppSectionProjects')"
              >Projects</a
            >
            </li> -->
          <li>
            <a
            class="nav-item nav-link"
            type="button"
            @click.prevent="$emit('changeSection', 'AppSectionContacts')"
            >Contacts</a
          >
          </li>
          <li>
            <a
            class="nav-item nav-link"
            target="__blank"
            type="button"
            href="https://tiforadacaixa.blogspot.com.br"
            >MyBlog</a
          >
          </li>
          </ul>
    <div class="col-sm-4"></div>
        <div id="social" class="ml-5">
            <ul class="navbar-nav justify-content-end float-right">
              <li class="nav-item col-md-2 col-sm-2 float-left">
                <a
                  class="nav-link text-light pr-0"
                  target="__blank"
                  href="https://www.linkedin.com/in/walter-pereira-245067161/"
                  ><img
                    class="img-fluid rounded-circle"
                    src="..//assets/icons/linkedin.png"
                    alt="linkedin-icon"
                /></a>
              </li>
              <li class="nav-item col-md-2 col-sm-2 float-left">
                <a
                  class="nav-link text-light pr-0"
                  target="__blank"
                  href="https://github.com/WalterSilva5?tab=repositories"
                  ><img
                    class="img-fluid rounded-circle"
                    src="../assets/icons/github.png"
                    alt="github-icon"
                /></a>
                </li>
            </ul>
        </div>
  </div>
</nav>
  </div>
</template>

<script>
import { ref, defineComponent } from "vue";
export default defineComponent({
  props: {
  },
  name: "AppHader",
  methods: {
    toggle_menu(){
    var x = document.getElementById("navbarNav");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
  }
}
  },
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
a,
img{
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
  img:hover {
    transition: 0.2s;
    background-color: rgb(91, 161, 184);
  }
}
</style>
