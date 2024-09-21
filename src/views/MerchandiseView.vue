<template>
  <div class="merchandise">
    <div class="left-section">
      <!-- Add two images in the left section -->
      <img class="merchandise-image" src="@/assets/images/Asset1.png" alt="Merchandise Image 1" />
      <img class="merchandise-image" src="@/assets/images/Asset2.png" alt="Merchandise Image 2" />
    </div>
    <div class="right-section">
      <h2 class="title">Merchandise</h2>
      <p class="description">
        The Haven takes pride in crafting premium goods that are not only aesthetically pleasing
        but also functional. From exquisite homeware to fashionable accessories, our products are
        meticulously designed to cater to your lifestyle and preferences.
      </p>
    </div>
  </div>
</template>

<style scoped>
.merchandise {
  min-height: 100vh;
  display: flex;
}

.left-section {
  flex: 1;
  padding: 20px;
  display: flex;
  flex-direction: column; /* Stack images vertically */
  gap: 20px; /* Add space between the two images */
}

.merchandise-image {
  width: 100%;
  height: auto;
}

.right-section {
  flex: 1;
  padding: 20px;
}

.title {
  font-size: 24px; /* Same as Popup Store */
  margin-bottom: 20px;
  font-family: 'GravesendSans-Medium', sans-serif;
  color: black;
}

.description {
  font-size: 16px; /* Gray text for description */
  color: rgb(82, 76, 76);
  font-family: Arial, sans-serif;
}
</style>
