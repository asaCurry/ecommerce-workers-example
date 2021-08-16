<template>
  <div class="container">
    <div>
      <h1 class="title">
        My Blog {{ products.length }}
      </h1>
    </div>
    <div class="posts">
      <div v-for="product in products" :key="product._id">
        <h2><a :href="product.slug.current" v-text="product.title" /></h2>
        <div class="summary">
          <SanityContent v-if="product.title.length" :key="product.title.id" :blocks="product.body.en" class="py-5" />
            <SanityImage
              :asset-id="product.defaultProductVariant.images[0].asset._ref"
              auto="format"
            />
          <span>image: {{ product.defaultProductVariant.images[0].asset._ref }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { groq } from '@nuxtjs/sanity'

export default {
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
  margin: 2rem;
  min-height: 100vh;
}
.posts {
  margin: 2rem 0;
}
</style>