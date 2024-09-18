<template>
  <div class="yearbook">
    <div class="content">
      <div class="left-section">
        <img
          class="placeholder-photo"
          src="@/assets/images/YEARBOOK LOGO-01.png"
          alt="Yearbook Logo"
        />
      </div>
      <div class="right-section">
        <h1>Yearbook</h1>
        <p>
          Yearbook 4cut redefines photography, elevating memories with our distinctive high-angle
          approach. Celebrate cultural fusion and youthful spirit with a school uniform of your
          choice and enjoy as we capture your journey in a way that’s uniquely yours. Elevate
          memories and embrace your story with Yearbook 4cut!
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.yearbook {
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

.placeholder-photo {
  width: 100%;
  height: 100%;
  object-fit: cover; /* Ensures the image covers the entire container */
}

.right-section {
  margin-top: 1%;
  flex: 2;
  padding: 20px;
}

h1 {
  font-size: 36px;
  font-family: 'GravesendSans-Medium', sans-serif;
}

p {
  margin-top: 2.5%;
  font-size: 14px;
  color: black; /* Adjust text color based on your design */
}
</style>
