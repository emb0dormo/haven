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
</script>

<style scoped>
/* Style for the navigation container */
.nav-container {
  display: flex;
  justify-content: center;
  font-size: 16px;
  text-align: center;
  margin-top: 1rem;
  background-color: transparent; /* Transparent background */
}

/* Style for the navigation links */
.nav-link {
  margin: 0 1rem;
  text-decoration: none;
  color: black; /* Change the color for all navigation links */
  font-family: 'GravesendSans-Medium', sans-serif; /* Use the custom font */
}

/* Style for the bottom line */
.bottom-line {
  margin-top: 1.5%;
  width: 102.25%;
  height: 1px;
  background-color: #ccc; /* Grey color */
}

/* Style for the background photo */
.background-photo {
  background-image: url('your-background-photo.jpg'); /* Replace 'your-background-photo.jpg' with your actual photo path */
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 16px; /* Adjust height as needed */
}

/* Grey line above the footer */
.grey-line {
  margin-bottom: 1%;
  margin-top: 10%;
  width: 100%;
  height: 1px;
  background-color: #ccc; /* Grey color */
}

/* Styles for the logos */
.logo-container {
  position: absolute;
  top: 10px;
  right: 15px;
}

.logo-container-left {
  position: absolute;
  top: -3px;
  left: 15px;
}

.logo-container-left img {
  width: 55px;
  height: auto;
}

.logo-container img {
  width: 25px;
  height: auto;
}

/* Additional styles */
body {
  color: black; /* Set the color for the entire text on the website */
  margin-bottom: 50px; /* Ensure content does not overlap with the footer */
}

.main {
  padding: 1rem;
}
</style>
