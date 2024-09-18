<template>
  <div class="partners">
    <div class="left-section">
      <h1>Partners</h1>
      <ul>
        <li>
          <span class="bullet">&bull;</span> <span class="partner-name">LINE Webtoon TH</span>
        </li>
        <!-- Added span for partner name -->
        <!-- Add more partners as needed -->
      </ul>
    </div>
    <div class="right-section">
      <img src="@/assets/images/webtoon-logo.png" alt="Webtoon Logo" />
      <!-- Added Webtoon logo -->
    </div>
  </div>
</template>

<style scoped>
.partners {
  min-height: 100vh;
  display: flex;
}

.left-section {
  flex: 1;
  padding: 20px;
}

h1 {
  font-size: 36px;
  font-family: 'GravesendSans-Medium', sans-serif; /* Apply custom font */
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  font-size: 14px;
  color: #555;
  margin-bottom: 10px;
  display: flex; /* Ensure items are in a row */
  align-items: center; /* Align items vertically */
}

.bullet {
  margin-right: 5px;
}

.partner-name {
  font-family: 'GravesendSans-Medium', sans-serif; /* Apply custom font */
}

.right-section {
  flex: 1;
  padding: 20px;
  display: flex;
  align-items: center; /* Align items vertically */
}

.right-section img {
  height: 20px; /* Adjust as needed */
  margin-right: 10px; /* Add margin to separate from text */
  margin-bottom: 238px; /* Adjust to align vertically with the text */
}
</style>
