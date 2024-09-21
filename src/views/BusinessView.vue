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
  margin-top: 0;
  position: relative;
  width: 100%;
  min-height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url('@/assets/images/blurred-terrace-entrance.jpg');
  background-size: cover;
  background-position: center;
}

h1 {
  font-size: 2vw; /* Responsive scaling for the heading */
  font-family: 'GravesendSans-Medium', sans-serif;
  color: black;
}

.buttons-section {
  display: flex;
  justify-content: space-around;
  margin-top: 20px;
  flex-wrap: wrap; /* Wrap buttons on smaller screens */
  gap: 20px; /* Adds space between buttons */
}

button {
  position: relative;
  padding: 15px 30px; /* Larger padding for better spacing */
  font-size: 2vw;
  color: #000;
  background-color: transparent; /* Set background color to transparent */
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-family: 'GravesendSans-Medium', sans-serif;
  transition: background-color 0.3s ease; /* Smooth transition for hover effect */
  outline: none;
}

button:hover,
button:focus {
  background-color: transparent;
  color: #000; /* Ensures the text color stays the same */
  text-decoration: none; /* Prevents underline or hover effects */
  outline: none;
  box-shadow: none;
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
@media (min-width: 1024px) {
  h1 {
    font-size: 36px; /* Set a fixed size for larger screens */
  }

  button {
    font-size: 18px; /* Fixed size for buttons on larger screens */
  }
}
</style>
