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
  position: relative; /* Keep relative for background positioning */
}

.background {
  position: absolute;
  top: 0; /* Set to 0 to avoid fractional units */
  left: 0;
  width: 100%; /* Adjusted to 100% for better scaling */
  height: 100vh;
  background-image: url('@/assets/images/HomeBackgroundPhoto.jpg');
  background-size: cover;
  background-position: center;
  opacity: 0.5;
}

.content {
  text-align: center;
  z-index: 1;
}

.title {
  font-family: 'GravesendSans-Medium', sans-serif;
  font-size: 36px;
  margin-bottom: 20px;
}

p {
  font-family: 'GravesendSans-Medium', sans-serif;
  font-size: 18px;
  color: #555;
}
</style>
