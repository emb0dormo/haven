<template>
  <div class="merchandise">
    <div class="content">
      <div class="left-section">
        <!-- Replace the placeholder with the image -->
        <br />
        <img class="merchandise-image" src="@/assets/images/Asset2.png" alt="Merchandise" />
        <img class="merchandise-image" src="@/assets/images/Asset1.png" alt="Merchandise" />
      </div>
      <div class="right-section">
        <h1>Merchandise</h1>
        <p>
          <br />
          The Haven takes pride in crafting premium goods that are not only aesthetically pleasing
          but also functional. From exquisite homeware to fashionable accessories, our products are
          meticulously designed to cater to your lifestyle and preferences.
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.merchandise {
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
  flex: 1;
  padding: 20px;
}

.merchandise-image {
  width: 100%; /* Ensure the image takes the full width of its container */
  height: auto; /* Maintain aspect ratio */
}

.right-section {
  flex: 2;
  padding: 20px;
}

h1 {
  margin-top: 1%;
  font-size: 36px;
  font: center;
  font-family: 'GravesendSans-Medium', sans-serif;
}

p {
  font-size: 14px;
  color: black; /* Adjust text color based on your design */
}
</style>
