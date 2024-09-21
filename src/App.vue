<template>
  <div>
    <!-- Navigation buttons -->
    <nav class="nav-container">
      <RouterLink to="/" class="nav-link">Home</RouterLink>
      <RouterLink to="/AboutUs" class="nav-link">About Us</RouterLink>
      <RouterLink to="/business" class="nav-link">Business</RouterLink>
      <RouterLink to="/Partners" class="nav-link">Partners</RouterLink>
      <RouterLink to="/News" class="nav-link">News</RouterLink>
      <RouterLink to="/ContactUs" class="nav-link">Contact Us</RouterLink>
    </nav>

    <!-- Transparent container with only the bottom line visible -->
    <div class="bottom-line"></div>

    <!-- Background photo -->
    <div class="background-photo"></div>

    <main>
      <RouterView />
    </main>

    <!-- Grey line above the footer -->
    <div class="grey-line"></div>

    <!-- Include PageFooter component -->
    <PageFooter />

    <!-- Logo placed in the top right corner -->
    <div class="logo-container">
      <img src="@/assets/images/TwoSquaresLogo.png" alt="Logo" />
    </div>

    <!-- Haven logo placed in the top left corner -->
    <div class="logo-container-left">
      <img src="@/assets/images/Logo.png" alt="Haven Logo" />
    </div>
  </div>
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router'
import PageFooter from '@/components/PageFooter.vue' // Import PageFooter component
import '@/assets/css/styles.css'
</script>

<style scoped>
/* Set a minimum height for the page */
body,
html {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  min-height: 100vh;
  margin: 0;
  padding: 0;
  overflow-x: hidden; /* Prevent horizontal scroll */
  width: 100vw; /* Full width */
  font-size: 1.2rem;
}

.nav-container {
  display: flex;
  justify-content: center;
  flex-wrap: wrap; /* Allow wrapping on smaller screens */
  font-size: 2rem;
  text-align: center;
  margin-top: 0;
  background-color: transparent;
  width: 100%;
  padding-top: 1rem;
  padding-bottom: 1rem;
}

.nav-link {
  margin: 0 3rem;
  text-decoration: none;
  color: black;
  font-family: 'GravesendSans-Medium', sans-serif;
}

.bottom-line {
  margin-top: 0;
  width: 100%;
  height: 1px;
  background-color: #ccc;
}

.background-photo {
  background-image: url('your-background-photo.jpg');
  background-size: cover;
  background-position: center;
  width: 100%;
  height: auto; /* Make background proportional */
  max-height: 60vh;
  margin-top: 0;
  padding: 0;
}

.grey-line {
  margin-top: 0;
  position: relative;
  top: 0;
  width: 100%;
  height: 1px;
  background-color: #ccc;
}

.logo-container,
.logo-container-left {
  position: absolute;
}

.logo-container {
  top: 10px;
  right: 15px;
}

.logo-container-left {
  top: -3px;
  left: 15px;
}

.logo-container-left img {
  width: 55px;
}

.logo-container img {
  width: 25px;
}
.main {
  display: flex;
  flex-direction: column; /* Stack elements vertically */
  width: 100%;
  margin: 0, auto;
}
</style>
