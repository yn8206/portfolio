<template>
  <header>
    <h1 class="logo"><a href="#main"><img src="../img/logo.svg" alt="Yn Logo"></a></h1>
    <nav class="gnb" ref="gnb">
      <button class="ico_close" @click="closeMenu"><span>메뉴 닫기</span></button>
      <ul>
        <li><a href="#main">HOME</a></li>
        <li><a href="#about">ABOUT</a></li>
        <li><a href="#port">PORTFOLIO</a></li>
        <li><a href="#contact">CONTACT</a></li>
      </ul>
    </nav>
    <button class="ico_menu" @click="openMenu"><span>메뉴 아이콘</span></button>
  </header>
</template>

<script>
export default {
  name: 'Header',
  methods:{
    openMenu(){
      this.$refs.gnb.classList.add("on");
    },
    closeMenu(){
      this.$refs.gnb.classList.remove("on");
    }
  }
};
</script>
