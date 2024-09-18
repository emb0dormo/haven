<template>
  <div class="projects">
    <div class="projects-container">
      <router-link to="/Yearbook" class="project-link">
        <div class="project">
          <h3 class="project-title">Yearbook</h3>
          <div class="icon-space">(Icon space for Yearbook)</div>
        </div>
      </router-link>
      <router-link to="/PopupStores" class="project-link">
        <div class="project">
          <h3 class="project-title">Pop-up Stores</h3>
          <div class="icon-space">(Icon space for Pop-up Stores)</div>
        </div>
      </router-link>
      <router-link to="/Merchandise" class="project-link">
        <div class="project">
          <h3 class="project-title">Merchandise</h3>
          <div class="icon-space">(Icon space for Merchandise)</div>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  // Your component logic remains unchanged
}
</script>

<style scoped>
.projects {
  margin-top: 20px;
  text-align: center;
}

.projects-container {
  display: flex;
  justify-content: space-around;
  margin-top: 10px;
}

.project {
  text-align: center;
}

.project-title {
  font-size: 18px;
  color: black; /* Set the color of the project title to black */
}

.icon-space {
  margin-top: 5px;
}
</style>
