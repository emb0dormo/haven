<template>
  <div class="partners">
    <div class="left-section">
      <h1>Partners</h1>
      <ul>
        <li>
          <span class="bullet">&bull;</span>
          <span class="partner-name">LINE Webtoon TH</span>
          <img src="@/assets/images/webtoon-logo.png" alt="Webtoon Logo" class="logo" />
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.partners {
  min-height: 100vh;
  display: flex;
  align-items: flex-start; /* Aligns elements at the top */
  padding: 20px;
}

.left-section {
  flex: 1;
  padding: 20px;
}

h1 {
  font-size: 36px;
  font-family: 'GravesendSans-Medium', sans-serif;
  margin-bottom: 20px;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  font-size: 16px;
  color: #555;
  margin-bottom: 10px;
  display: flex;
  align-items: center; /* Aligns bullet, text, and logo in a row vertically */
}

.bullet {
  margin-right: 5px;
}

.partner-name {
  margin-right: 10px;
}

.logo {
  width: 22px;
  height: auto;
  margin-left: 10px; /* Space between text and logo */
}

</style>
