<template>
  <div id="app">
    <Header/>
    <Main/>
    <About/>
    <Portfolio/>
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


export default {
  name: 'app',
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
