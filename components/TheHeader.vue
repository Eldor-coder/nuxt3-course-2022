<template>
    <div class="bg-green-800 px-8 py-5 flex align-center justify-between">
      <h1>
          <NuxtLink to="/" class="text-3xl text-white">Nuxt</NuxtLink>
      </h1>
      <ul>
          <li>
              <NuxtLink to="/iphones">iPhones</NuxtLink>
          </li>
          <li>
              <NuxtLink to="/users">Users</NuxtLink>
          </li>
          <li>
              <!-- <button @click="moveToAbout">About</button> -->
              <NuxtLink to="/about">About</NuxtLink>
          </li>
          <li>
                <NuxtLink to="/cart">Cart({{cart.length}})</NuxtLink>
              <!-- <p class="text-white">Cart({{cart.length}})</p> -->
          </li>
          <li v-if="!auth.isAuthenticated">
                <NuxtLink to="/login">Login</NuxtLink>
          </li>
          <li v-else>
                <NuxtLink to="/profile">Profile</NuxtLink>
          </li>
          <li v-if="auth.isAuthenticated">
                <button @click="logout" class="btn">
                    <img class="w-7 h-7" src="/images/logout.png" alt="">
                </button>
          </li>
      </ul>
    </div>
</template> 

<script setup>
    const cart = useCart()
    const auth = useAuth()

    function logout(){
        auth.value.isAuthenticated = false
    }
</script>

<style scoped>
    .header {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0px 50px;
        background-color: #2b8a3e;
        
    }   
    button, .btn {
        background: none;
        border: none;
        color: #fff;
        cursor: pointer;
    }
    .logo {
        text-decoration: none;
        color: #fff;
    }
    .logo:hover {
        text-decoration: underline;
    }
    ul {
        list-style: none;
        display: flex;
        align-items: center;
    }
    ul li {
        margin-right: 30px;
    }

    ul li a{
        text-decoration: none;
        color: #fff;
    }

    ul li a:hover{
        text-decoration: underline;
    }
</style>