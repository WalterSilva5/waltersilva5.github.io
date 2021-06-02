<template>
  <div class="card col-lg-3 col-md-5 justify-content-center wsi-shadow-animated" type="button">
    <slot>

    </slot>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.card {
  display: inline-block;
  margin-left: 20px;
  height: 250px;
  img{
      height: 250px;
  }
}
</style>
