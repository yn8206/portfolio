<template>
    <section class="pop">
        <div class="wrap">
            <h2>{{item.title}}</h2>
            <button @click="closePop" class="close">닫기</button>
            <p class="sub_tit" v-html="item.work.info">{{item.work.info}}</p>
            <div class="slider" v-if="item.img.length > 1">
                <swiper :options="swiperOption" ref="mySwiper">
                    <swiper-slide v-for="url in item.img" :key="url">
                        <img :src="require('../img/web/'+url )" :alt="item.title+' 이미지'">
                    </swiper-slide>
                    <div class="pagination"  slot="pagination"></div>
                </swiper>
            </div>
            <div class="bx_img" v-else>
                <img :src="require('../img/web/'+item.img[0])" :alt="item.title+' 이미지'">
            </div>
            <div class="cont">
                <p v-if="item.work.new"><b>개편 기여도 </b>: {{item.work.new}}</p>
                <p><b>기술 </b>: {{item.skill}}</p>
                <p class="desc" v-if="item.work.desc"><b>개편 </b>: <span v-html="item.work.desc">{{item.work.desc}}</span></p>
                <p><b>지원 브라우저 </b>: {{item.browser}}</p>
                <p v-if="item.url1"><b>URL </b>: <a :href="item.url1" target="_blank">{{item.url1}}</a></p>
                <p v-else><b>서비스가 중지되었습니다.</b></p>
                <p v-if="item.url2"><b>마크업 URL </b>: <a :href="item.url2" target="_blank">{{item.url2}}</a></p>
            </div>
        </div>
    </section>
</template>
<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper';

export default {
  name: 'popup',
  data() {
    return {
      swiperOption: {
        // swiper 옵션, 콜백함수 모두 동일하게 사용
        loop: true,
        // simulateTouch:false,
        autoplay: {
          delay: 3000,
          disableOnInteraction: false,
        },
        pagination: {
          el: '.pagination',
          clickable: true,
        },
      },
    };
  },
  props: {
    item: {},
  },
  methods: {
    closePop() {
      this.$emit('closePopEvent');
    },
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper;
    },
  },
  components: {
    swiper,
    swiperSlide,
  },
};
</script>
