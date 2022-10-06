<template>
  <div class="flex items-center justify-between bg-white px-5 py-5">
    <img class="w-1/2" src="/images/login.png" alt="">

    <form @submit.prevent="onSubmit" class="w-1/2 flex flex-col items-center gap-10">
        <h3 v-if="_error" class="text-white bg-red-600 rounded-xl w-1/2 flex item-center justify-center px-2 py-2">{{_error}}</h3>
        <input v-model="form.email" placeholder="Email address" type="email" class="w-2/3 flex items-center justify-center px-2 py-2 border-solid border-2 border-green-600 rounded-xl">
        <input v-model="form.password" placeholder="Password" type="password" class="w-2/3 flex items-center justify-center px-2 py-2 border-solid border-2 border-green-600 rounded-xl">
        <button class="bg-green-700 text-white rounded-xl w-2/3 flex item-center justify-center px-2 py-2">
            <span v-if="isLoading">Loading...</span>
            <span v-else>Sign in</span>
        </button>
    </form>
  </div>
</template>

<script setup>
    const form = reactive({
        "email": "eve.holt@reqres.in",
        "password": "cityslicka"
    })
    const isLoading = ref(false)
    const _error = ref(null)
    const url = 'https://reqres.in/api/login'


    async function onSubmit(){
        if(isLoading.value) return 
        isLoading.value = true

        const {data, error} = await useFetch(url, {
            method : 'post',
            body : form
        })

        isLoading.value = false
        if(error.value) {
            _error.value = error.value.data.error
            return
        }

        const auth = useAuth()
        auth.value.isAuthenticated = true

        navigateTo('/')
        console.log(data.value, error);
    }
</script>

<style>

</style>