<template>
  <div class="news">
    <div class="left-section">
      <img
        v-if="selectedNews"
        :src="selectedNews.photoUrl"
        class="selected-photo"
        alt="Selected Photo"
      />
    </div>
    <div class="right-section">
      <div v-if="selectedNews">
        <h2 class="title">{{ selectedNews.title }}</h2>
        <!-- Added class for title -->
        <p class="content">{{ selectedNews.content }}</p>
        <!-- Added class for content -->
      </div>
    </div>
  </div>
</template>

<script>
import popupStorePhoto from '@/assets/images/popUpStore.jpg' // Import the new photo

export default {
  data() {
    return {
      news: [
        {
          title: 'Our First Pop-up Store',
          content:
            "The 'ฉันนี่แหละท่านขุนที่สวยที่สุดในสยาม' Pop-Up Store by LINE WEBTOON, organized in collaboration with The Haven, was a sensational event that took place from January 18th to January 31st, 2024, on the 7th floor of SF Town, MBK. This unique pop-up store delighted fans of the Thai LGBTQ+ romance webtoon created by ยืนกินปากกาที่ท่าพระ, also known as YKPK. It offered a wide range of Korean-made-quality products, including keyrings, photocards, (fabric)posters, and many other collectables, inspired by the beloved webtoon. Fans had the incredible opportunity to meet the talented artist on the 21st and 26th of January during a special fan signing event. Both the 'ฉันนี่แหละท่านขุนที่สวยที่สุดในสยาม' webtoon and YKPK studio enjoyed immense popularity and deep love from their Thai fanbase, making this event a cherished memory for all who attended.",
          photoUrl: popupStorePhoto // Use the new photo URL
        }
      ],
      selectedNews: null
    }
  },
  mounted() {
    // Set the selected news to the first news item when the component is mounted
    this.selectedNews = this.news[0]
  }
}
</script>

<style scoped>
.news {
  min-height: 100vh;
  display: flex;
}

.left-section {
  flex: 1;
  padding: 20px;
}

.selected-photo {
  width: 100%;
  height: auto;
}

.right-section {
  flex: 1;
  padding: 20px;
  margin-top: -1.5%;
}

.title {
  font-size: 24px; /* Adjust title font size */
  margin-bottom: 20px; /* Add margin between title and content */
  font-family: 'GravesendSans-Medium', sans-serif;
}

.content {
  font-size: 13px; /* Adjust content font size */
  color: rgb(82, 76, 76);
}
</style>
