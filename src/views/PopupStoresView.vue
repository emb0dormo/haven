<template>
  <div class="popup-stores">
    <div class="content">
      <div class="left-section">
        <!-- Replace the placeholder with the image -->
        <img class="popup-store-image" src="@/assets/images/popUpStore.jpg" alt="Pop-up Store" />
      </div>
      <div class="right-section">
        <h1>Popup Stores</h1>
        <p>
          <br />
          We understand that shopping is an experience, and our pop-up stores are a testament to
          that belief. These temporary retail spaces are carefully curated to offer a unique and
          immersive shopping experience, allowing you to explore our products up close and personal.
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.popup-stores {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.content {
  display: flex;
  justify-content: space-around;
  max-width: 800px; /* Adjust the max-width based on your design */
  margin-top: -200px !important; /* Adjust the margin-top value as needed */
}

.left-section {
  margin-top: 1%;
  flex: 1;
  padding: 20px;
}

.popup-store-image {
  width: 100%; /* Ensure the image takes the full width of its container */
  height: auto; /* Maintain aspect ratio */
}

.right-section {
  flex: 2;
  padding: 20px;
}

h1 {
  margin-top: -2%;
  font-size: 36px;
  font-family: 'GravesendSans-Medium', sans-serif;
}

p {
  font-size: 14px;
  color: black; /* Adjust text color based on your design */
}
</style>
