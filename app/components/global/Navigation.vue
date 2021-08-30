<template>
  <div class="inner-wrapper flex flex-row items-center justify-center py-12">
    <div v-for="(item, index) in this.navItems" :key="index" class="text-accentone px-4"> 
      <NuxtLink :to="item.slug" class="font-medium">{{item.name}}</NuxtLink>
    </div>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      navItems: [
        {
          name: 'Home',
          slug: '/'
        },
        {
          name:'About Me',
          slug:'about-me'
        },
        {
          name:'Get in Touch',
          slug:'contact'
        }
      ]
    }
  },
}
</script>

<style>
  a.nuxt-link-exact-active {
    @apply text-accenttwo font-bold
  }
</style>