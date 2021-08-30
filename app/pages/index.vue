<template>
  <section class="container">
    <div class="grid grid-cols-3 gap-6 auto-rows-min">
      <div v-for="product in products" :key="product._id">
        <Product v-bind:product="product" />
      </div>
    </div>
  </section>
</template>

<script>
import { groq } from '@nuxtjs/sanity'

export default {
  layout: 'general',
  async asyncData ({ $sanity }) {
    const query = groq`*[_type == "product"]`
    const products = await $sanity.fetch(query)
    return { products }
  },
  mounted () {
    console.log(this.products)
  }
}
</script>

<style>
.container {

}
.posts {
  margin: 2rem 0;
}


</style>