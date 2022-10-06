<template>
  <div >
    <h1 class="text-3xl mb-10">All iPhones</h1>

    <div class="grid grid-cols-4  gap-4">
      <nuxt-link 
        v-for="(iphone,index) of iphones"
        :key="index"
        :to="`/iphones/${iphone}`" 
        class="bg-white shadow-lg flex flex-col items-center px-4 py-4  rounded-lg"
      >
        <h3 class="text-xl mb-5">{{iphone}}</h3>
        <img class=" h-28" :src="`/images/${iphone}.jfif`" alt="">
      </nuxt-link>
    </div>
  </div>
</template>

<script setup>
  useHead({
    title : 'Nuxt-iPhones'
  })

  // const {data} = useFetch("/api/iphones")
  const {data} = await useFetch('/api/iphone')
  const iphones = data.value.iphones
</script>

<style>

</style>