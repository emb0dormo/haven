<template>
  <div class="about-us">
    <div class="section background-section">
      <h1>About Us</h1>
    </div>

    <div class="section">
      <img src="@/assets/images/asset1.png" alt="Asset 1" />
    </div>

    <div class="section" style="padding-top: 40px">
      <h2 style="margin-bottom: 20px">Our Story</h2>
      <p class="small-text">
        Established in August 2023, The Haven is a dynamic Korean company that has ventured into the
        vibrant market of Thailand. Specializing in goods production and pop-up store operation, The
        Haven brings a unique blend of Korean craftsmanship and creativity to Thai consumers. We are
        committed to delivering high-quality products and unforgettable experiences through our
        innovative approach.
      </p>
    </div>

    <div class="section" style="padding-top: 40px">
      <img src="@/assets/images/asset2.png" alt="Asset 2" />
    </div>

    <div class="section" style="padding-top: 40px">
      <h2 style="margin-bottom: 20px">Our Mission</h2>
      <p class="small-text">
        At The Haven, our mission is to bridge cultures through creativity and provide Thai
        consumers with a taste of Korean excellence. We believe that every product tells a story,
        and our goal is to curate a collection of goods that reflect the rich cultural heritage and
        artistic diversity of Korea.
      </p>
    </div>

    <div class="section" style="padding-top: 40px">
      <img src="@/assets/images/asset3.png" alt="Asset 3" />
    </div>

    <div class="section" style="padding-top: 40px">
      <div class="bl-development">
        <h2 style="margin-bottom: 20px">BL IP Development</h2>
        <p>
          As part of our commitment to innovation and entertainment, The Haven is also actively
          involved in the development of BL (Boys' Love) Intellectual Property. We believe in the
          power of storytelling and aim to create captivating narratives that resonate with diverse
          audiences. Our BL IP projects promise to bring unique and heartfelt stories to life,
          celebrating love and relationships in a meaningful way.
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.about-us {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: -50px !important;
}

.section {
  width: 100%;
  padding: 20px;
  margin-top: 80px !important;
  text-align: center;
}

.section img {
  width: 100%;
  height: auto;
}

h1 {
  font-size: 36px;
  font-family: 'GravesendSans-Medium', sans-serif;
  margin-top: 40px;
}

.background-section {
  position: relative;
  background-image: url('@/assets/images/defocused-reception-hall.jpg');
  background-size: cover;
  background-position: center;
  padding: 80px 0;
}

h1 {
  font-size: 36px;
  font-family: 'GravesendSans-Medium', sans-serif;
  margin-top: 0; /* Adjust margin-top to bring the title closer to the background */
}

h2 {
  font-size: 20px;
  font-family: 'GravesendSans-Medium', sans-serif;
  text-align: center;
}

.small-text {
  font-size: 14px;
  color: black;
  font-family: 'GravesendSans-Medium', sans-serif;
  text-align: center;
  width: 80%;
  margin: 0 auto;
}

.bl-development {
  text-align: center;
  width: 80%;
  margin: 0 auto 110px;
}

.bl-development h2 {
  font-size: 20px;
  font-family: 'GravesendSans-Medium', sans-serif;
  text-align: center;
}

.bl-development p {
  font-size: 14px;
  color: black;
  font-family: 'GravesendSans-Medium', sans-serif;
  text-align: center;
}
</style>
