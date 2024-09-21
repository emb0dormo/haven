<template>
  <div class="contact-us">
    <div class="left-section">
      <h1 class="title">Contact Us</h1>
      <ul>
        <li class="contact-info">The Haven Co., Ltd</li>
        <li class="contact-info">Phone: 061-585-2120</li>
        <li class="contact-info">Email: thehaven7777@gmail.com</li>
        <li class="contact-info">
          Location: 3F Summer Hill, Room 3039, 1106 Sukhumvit Road, Phrakanong, Klongtoey, Bangkok
        </li>
      </ul>
    </div>
    <div class="right-section">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3876.5858219612282!2d100.6057306!3d13.6829305!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e2a1dc8c483fdf%3A0x156e17b2980504bd!2sSEMICIRCLE%20STUDIO!5e0!3m2!1sen!2sth!4v1726960796252!5m2!1sen!2sth"
        width="100%"
        height="100%"
        style="border:0;"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  </div>
</template>

<style scoped>
.contact-us {
  min-height: 100vh;
  display: flex;
  align-items: flex-start;
  padding: 20px;
}

.left-section {
  flex: 0.5; /* Adjusted to give more space to the right-section */
  padding: 20px;
}

.right-section {
  flex: 1.5; /* Ensures it takes more space */
  padding: 0; /* Remove padding to make it full width and height */
}

.title {
  font-size: 36px;
  font-family: 'GravesendSans-Medium', sans-serif;
  margin-bottom: 20px;
}

ul {
  list-style-type: none;
  padding: 0;
}

.contact-info {
  font-size: 16px;
  color: #555;
  margin-bottom: 15px;
}

iframe {
  width: 100%;
  height: 90vh; /* Make it fill the entire height of the viewport */
  border: 0;
}
</style>
