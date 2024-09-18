<template>
  <div class="contact-us">
    <div class="left-section">
      <h1 class="title">Contact Us</h1>
      <!-- Added class for the title -->
      <ul>
        <br />
        <li class="contact-info">The Haven Co., Ltd</li>
        <!-- Added class for the list items -->
        <li class="contact-info">Phone: 061-585-2120</li>
        <li class="contact-info">Email: thehaven7777@gmail.com</li>
        <li class="contact-info">
          Location: 3F Summer Hill, Room 3039, 1106 Sukhumvit Road, Phrakanong, Klongtoey, Bangkok
        </li>
        <!-- Add more contact details as needed -->
      </ul>
    </div>
    <div class="right-section">
      <!-- Replace the Google Map placeholder with your image -->
      <img src="@/assets/images/mapLocation.png" alt="Map Location" />
    </div>
  </div>
</template>

<style scoped>
.contact-us {
  min-height: 100vh;
  display: flex;
}

.left-section {
  flex: 1;
  padding: 20px;
}

.right-section {
  flex: 1;
  padding: 20px;
  position: relative;
}

.title {
  font-size: 36px;
  font-family: 'GravesendSans-Medium', sans-serif; /* Apply custom font */
}

ul {
  list-style-type: none;
  padding: 0;
}

.contact-info {
  font-size: 13px;
  color: #555;
  margin-bottom: 10px;
  /* font-family: 'YourCustomFont', sans-serif; Apply custom font to the list items */
}

img {
  width: 100%;
  height: auto;
}
</style>
