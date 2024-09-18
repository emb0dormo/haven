<template>
  <div class="business">
    <div class="top-section">
      <h1>BUSINESS</h1>
    </div>
    <div class="buttons-section">
      <router-link to="/Yearbook"><button>Yearbook</button></router-link>
      <router-link to="/OEMODM"><button>OEM/ODM</button></router-link>
      <router-link to="/PopupStores"><button>Pop-up Stores</button></router-link>
      <router-link to="/Merchandise"><button>Merchandise</button></router-link>
    </div>
    <!-- Display the projects section below the buttons -->
    <router-view></router-view>
  </div>
</template>

<style scoped>
.business {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.top-section {
  margin-top: -2.1%;
  width: 102.2%;
  position: relative;
  min-height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url('@/assets/images/blurred-terrace-entrance.jpg');
  background-size: cover;
  background-position: center;
}

h1 {
  font-size: 36px;
  font-family: 'GravesendSans-Medium', sans-serif;
  color: black;
}

.buttons-section {
  display: flex;
  justify-content: space-around;
  margin-top: 20px;
}

button {
  position: relative;
  padding: 10px 0; /* Adjusted padding to vertically center the text */
  font-size: 16px;
  color: #000;
  background-color: transparent; /* Set background color to transparent */
  border: none;
  cursor: pointer;
  font-family: 'GravesendSans-Medium', sans-serif;
}

/* Add a thin gray line under each button */
button::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 50%; /* Adjusted to horizontally center the line */
  transform: translateX(-50%); /* Center the line horizontally */
  width: 100%; /* Adjusted width to cover half of the button */
  height: 1px;
  background-color: #ccc;
}
</style>
