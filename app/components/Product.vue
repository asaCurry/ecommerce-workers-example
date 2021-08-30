<template>
  <div @click="handleModal(product)" class="product glass col-span-1 p-8 rounded-lg">
    <a :href="product.slug.current"><h2 class="text-center text-accentone font-bold text-lg" v-text="product.title"></h2></a>
    <div class="summary py-4">
        <p class="text-accentone">{{ this.shortenBody(product.body.en[0].children[0].text)}}</p>
        <!--
        <SanityContent v-if="product.title.length" :key="product.title.id" :blocks="this.shortenBody(product.body.en)" class="py-5" /> -->
        <figure class="">
            <SanityImage
                :asset-id="product.defaultProductVariant.images[0].asset._ref"
                auto="format" class="object-contain h-56 w-full pt-4"
            />
        </figure>
    </div>
  </div>
</template>

<script>
import { mapMutations} from 'vuex';

export default {
    props: {
        product: Object
    },
    methods: {
        ...mapMutations({
            setModalDisplay: 'modal/setModalDisplay',
            setModalProduct: 'modal/setModalProduct'
        }),
        shortenBody(str){
            if(str.length > 80){
                let shortString = str.slice(0,80);
                return `${shortString}...`;
            } else {
                return str;
            }
        },
        handleModal(product){
            console.log(product)
            this.setModalDisplay(true)
            this.setModalProduct(product)
        }
    }
}
</script>

<style>
    .product {
        @apply h-full
    }
    /* utility styles */

    .glass {
        box-shadow: 0 0 1rem 0 rgba(0, 0, 0, .2); 
        border-radius: 25px;
        background: radial-gradient(rgba(255,138,23, 0.3) 0%,rgba(255, 255, 255, .50) 60%,rgba(255, 255, 255, .80) 100% ) ;
        backdrop-filter: blur(5px);
    }
    .glass.opaque {
        background: radial-gradient(rgba(255, 255, 255, .80) 60%,rgba(255, 255, 255, .90) 100% ) ;        
    }
</style>