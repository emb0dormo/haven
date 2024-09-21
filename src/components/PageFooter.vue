<template>
  <footer class="footer">
    <div class="footer-content">
      <p>
        The Haven Co., Ltd, 3F Summer Hill, Room 3039, 1106 Sukhumvit Road, Phrakanong, Klongtoey,
        Bangkok 10110 Thailand 061-585-2120
      </p>
      <p>{{ copyright }}</p>
    </div>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      copyright: ''
    }
  }
}
</script>

<style scoped>
.footer {
  width: 100%;
  background-color: transparent; /* Make the background color transparent */
  padding: 20px 10px;
  text-align: center;
}

.footer-content {
  max-width: 1200px;
  margin: 0 auto;
}

.footer-content p {
  font-size: 12px;
  margin-bottom: 8px;
}
</style>
