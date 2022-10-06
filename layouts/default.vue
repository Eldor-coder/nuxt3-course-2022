<template>
    <TheHeader/>
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
          right: 0;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0px 50px;
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