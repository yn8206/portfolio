<template>
  <div id="app">
    <Header/>
    <Main/>
    <About/>
    <Portfolio :list="list" @openPopEvent="openPop"/>
    <Pop v-if="item !== null" :item="item" @closePopEvent="closePop" ref="pop"/>
    <Contact/>
    <Footer/>
  </div>
</template>

<script>
import Header from './components/Header.vue';
import Main from './components/Main.vue';
import About from './components/About.vue';
import Portfolio from './components/Portfolio.vue';
import Contact from './components/Contact.vue';
import Footer from './components/Footer.vue';
import Pop from './components/Pop.vue';

import portfolioList from './data/portfolio.json';

export default {
  name: 'app',
  data() {
    return {
      list: {
        pc: [],
        mobile: [],
        responsive: [],
        etc: [],
      },
      item: null,
      popTop: 0,
    };
  },
  methods: {
    getPortfolio() {
      portfolioList.map((item) => {
        const obj = {
          id: item.id,
          type: item.type, // pc, mobile, responsive
          sub_type: item.sub_type,
          title: item.title,
          info: item.work.info,
          poster: item.poster,
        };
        item.type == 'pc' ? this.list.pc.push(obj) : (item.type == 'mobile' ? this.list.mobile.push(obj) : (item.type == 'etc' ? this.list.etc.push(obj) : this.list.responsive.push(obj)));
      });
    },
    openPop($id) {
      console.log('팝업을 오픈합니다!!');
      document.getElementsByTagName('html')[0].style.overflow = 'hidden';
      // js break continue x 대신 some, every 상용
      portfolioList.some((item, idx) => {
        if (item.id == $id) {
          this.item = item;
          return true; // true쓰면 반복이 멈춤
        }
      });
    },
    closePop() {
      document.getElementsByTagName('html')[0].style.overflow = '';
      this.item = null;
    },
  },
  created() {
    this.getPortfolio();
  },
  components: {
    Header,
    Main,
    About,
    Portfolio,
    Contact,
    Footer,
    Pop,
  },
};
</script>
