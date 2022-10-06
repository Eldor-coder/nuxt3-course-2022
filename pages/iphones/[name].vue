<template>
  <div class="flex items-center justify-center bg-white px-32 pt-20 pb-96 rounded-xl">
    <div class="flex items-start gap-20">
      <img  :src="`/images/${iPhoneName}.jfif`" alt="">
      <div>
        <h3 class="text-4xl mb-10">
          {{iPhoneName}}
        </h3>
        <button v-if="check"  @click="addToCart" class="text-2xl text-white bg-green-700 rounded-2xl px-12 py-4 flex items-center justify-center">Buy now</button>
        <button v-else @click="removeFromCart" class="btn text-2xl text-white  rounded-2xl px-12 py-4 flex items-center justify-center">Remove from cart</button>
      </div>
    </div>
  </div>
</template>

<script setup>
  const cart = useCart()
  const route = useRoute()
  let check = ref(true)
  let breakForEach = ref('')

  onBeforeMount(()=> {
    try {
      cart.value.forEach(val => {
        if(val.name == route.params.name) {
          check.value = false
          throw  breakForEach
        } else {
          check.value = true
        }
      })
    } catch(val) {
      if(val.name == route.params.name) throw val
    }
    
  })
  const iPhoneName = computed(() =>{
        return route.params.name
    })
    useHead({
        title : `${route.params.name}`
    })
    
    function removeFromCart(){
      let index = cart.value.findIndex(val => val.name == route.params.name)
      if(index == 0) {
        cart.value = cart.value.splice(1)
        check.value = true
      } else {
        cart.value = cart.value.splice(index,1)
        check.value = true
      }
      
    }

    function checkIphone(val) {
      val.forEach(val => {
        if(val.name == route.params.name) {
          check.value = false
        } else {
          check.value = true
        }
      })
    }

    watch(
      () => cart,
      (newValue, oldValue) => {
        // newValue === oldValue
        
        checkIphone(newValue.value);
      },
      
      { deep: true }
    )

    function addToCart() {
      cart.value.push({
        name : `${route.params.name}`
      })
    }
</script>

<style scoped>
  .btn {
    background-color: #f03e3e;
  }
</style>
