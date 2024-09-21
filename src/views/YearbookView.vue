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
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0 5rem;
}

.content {
  display: flex;
  justify-content: space-between;
  align-items: flex-start; /* Aligns image and text to the top */
  max-width: 1200px;
  margin-top: 2rem; /* Adds space from the grey line */
}

.left-section {
  flex: 1;
  max-width: 40%;
  display: flex;
  align-items: flex-start; /* Align image to the top */
}

.placeholder-photo {
  width: 100%;
  height: auto;
}

.right-section {
  flex: 1;
  max-width: 55%;
  padding-left: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}

h1 {
  font-size: 2rem;
  margin-bottom: 2rem;
  font-family: 'GravesendSans-Medium', sans-serif;
  text-align: left;
}

p {
  font-size: 15px; /* Same as NewsView content */
  color: rgb(82, 76, 76); /* Gray color for the description */
  font-family: Arial, sans-serif; /* A simpler font for the description */
}

/* Responsive adjustments for smaller screens */
@media (max-width: 768px) {
  .content {
    flex-direction: column;
    text-align: center;
  }

  .left-section, .right-section {
    width: 100%;
    padding: 0;
  }

  h1 {
    font-size: 28px;
  }

  p {
    font-size: 14px;
  }
}
</style>
