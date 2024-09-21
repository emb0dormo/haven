<template>
  <div class="popup-store">
    <div class="left-section">
      <img class="popup-store-image" src="@/assets/images/popUpStore.jpg" alt="Pop-up Store" />
    </div>
    <div class="right-section">
      <h2 class="title">Popup Stores</h2>
      <p class="description">
        We understand that shopping is an experience, and our pop-up stores are a testament to that
        belief. These temporary retail spaces are carefully curated to offer a unique and immersive
        shopping experience, allowing you to explore our products up close and personal.
      </p>
    </div>
  </div>
</template>

<style scoped>
.popup-store {
  min-height: 100vh;
  display: flex;
}

.left-section {
  flex: 1;
  padding: 20px;
}

.popup-store-image {
  width: 100%;
  height: auto;
}

.right-section {
  flex: 1;
  padding: 20px;
}

.title {
  font-size: 24px; /* Same as NewsView */
  margin-bottom: 20px;
  font-family: 'GravesendSans-Medium', sans-serif;
  color: black; /* Title color remains black */
}

.description {
  font-size: 15px; /* Same as NewsView content */
  color: rgb(82, 76, 76); /* Gray color for the description */
  font-family: Arial, sans-serif; /* A simpler font for the description */
}
</style>
