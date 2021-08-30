<template>
  <div class="general layout-wrapper relative">
    <GlobalNavigation />
    <div class="inner-wrapper">
        <Nuxt />
    </div>
    <GlobalFooter />
    <Modal />
  </div>
</template>

<script>
export default {

}
</script>

<style>
/* typography */
    h1,h2,h3,h4,h5 {
      @apply font-display font-bold text-xl
    }
    p,ul,ol,li,a,span {
      @apply font-body font-semibold text-base
    }
/* wrappers */
    body {
      @apply relative
    }
    .layout-wrapper {
        background-color: white;
    }

    .inner-wrapper {
        max-width: 1024px;
        margin: 0 auto;
    }
    .general {
      background: linear-gradient(to right, rgba(255,138,23,.4),rgba(255, 50, 23,.3));
      background-size: cover;
    }
</style>