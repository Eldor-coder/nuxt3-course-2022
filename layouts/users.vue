<template>
    <div class="header">
      <h1>
          <NuxtLink to="/" class="logo">Nuxt</NuxtLink>
      </h1>
      <ul>
          <li>
              <button @click="moveToAbout">About</button>
              <!-- <NuxtLink to="/about">About</NuxtLink> -->
          </li>
          <li>
              <NuxtLink to="/users">Users</NuxtLink>
          </li>
      </ul>
    </div>
  </template>
  
  <script setup>
      function moveToAbout(){
          navigateTo('/about')
      }
  </script>
  
  <style scoped>
      .header {
          position: absolute;
          top: 0;
          left: 0;
          bottom: 0;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: space-between;
          padding: 50px 20px;
          background-color: #2b8a3e;
          
      }   
      button {
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
          flex-direction: column;
          align-items: center;
          padding: 0;
      }
      ul li {
          margin-bottom: 30px;
      }
  
      ul li a{
          text-decoration: none;
          color: #fff;
      }
  
      ul li a:hover{
          text-decoration: underline;
      }
  </style>