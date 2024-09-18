<template>
  <div class="home">
    <div class="content">
      <h1 class="title">The Haven Co., Ltd</h1>
      <!-- <p>(photo background)</p> -->
      <!-- Add other content as needed -->
    </div>
    <div class="background"></div>
  </div>
</template>

<style scoped>
@font-face {
  font-family: 'GravesendSans-Medium';
  src: url('@/assets/fonts/GravesendSans-Medium.otf') format('opentype');
}

.home {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative; /* Ensure the absolute positioning of the background */
}

.background {
  position: absolute;
  top: -0.5;
  left: 0;
  width: 102.3%;
  height: 108%;
  background-image: url('@/assets/images/HomeBackgroundPhoto.jpg'); /* Set the background image */
  background-size: cover; /* Cover the entire container */
  background-position: center; /* Center the background image */
  opacity: 0.5; /* Adjust the opacity as needed */
}

.content {
  text-align: center;
  z-index: 1; /* Ensure content is above the background */
}

.title {
  font-family: 'GravesendSans-Medium', sans-serif; /* Use the custom font */
  font-size: 36px;
  margin-bottom: 20px; /* Add margin bottom to create space between title and paragraph */
}

p {
  font-family: 'GravesendSans-Medium', sans-serif; /* Use the custom font */
  font-size: 18px;
  color: #555;
}
</style>
