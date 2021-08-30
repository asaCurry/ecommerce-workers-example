<template>
  <div v-if="getModalDisplay" class="modal fixed inset-0 flex justify-center items-top">
      <div class="glass opaque w-4/6 mt-24 mb-auto p-12 bg-white rounded-lg ">
        <div @click="setModalDisplay(false)" class=" text-24 absolute top-8 right-8">X</div>
        <div class="flex flex-col justify-center items-top h-full">
            <div class="summary py-4">
                <h2>{{ getModalProduct.title }}</h2>
                <SanityContent v-if="getModalProduct.title.length" :key="getModalProduct.title.id" :blocks="getModalProduct.body.en" class="py-5" />
                <figure class="">
                    <SanityImage
                        :asset-id="getModalProduct.defaultProductVariant.images[0].asset._ref"
                        auto="format" class="object-contain h-56 w-full pt-4"
                    />
                </figure>
            </div>
            <button>Add to Cart</button>
        </div>
      </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations} from 'vuex';

export default {
    props: {},
    computed: {
        ...mapGetters({
            getModalDisplay: 'modal/getModalDisplay',
            getModalProduct: 'modal/getModalProduct'
        })
    },
    methods: {
        ...mapMutations({
            setModalDisplay: 'modal/setModalDisplay',
        })
    }
}
</script>

<style>

</style>