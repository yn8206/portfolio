<template>
  <div id="app">
    <!-- <Header/> -->
    <Main/>
    <About/>
    <Portfolio :list="list"/>
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

import portfolioList from './data/portfolio.json';

export default {
  name: 'app',
  data() {
    return {
      list: {
        pc: [],
        mobile: [],
        responsive: [],
        web: [],
      },
    };
  },
  methods: {
    getPortfolio() {
      console.log('포트폴리오 내용을 불러옴니당~');
      portfolioList.map((item) => {
        const obj = {
          id: item.id,
          type: item.type, // pc, mobile, responsive
          title: item.title,
          info: item.work.info,
          poster: item.poster 
        };
        item.type == 'pc' ? this.list.pc.push(obj) : (item.type == 'mobile' ? this.list.mobile.push(obj) :  (item.type == 'web' ? this.list.web.push(obj) : this.list.responsive.push(obj)));
      });
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
  },
};
</script>
