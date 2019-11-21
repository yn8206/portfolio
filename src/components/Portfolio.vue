<template>
    <section id="port">
        <h1>MY PORTFOLIO</h1>
        <article class="list">
          <h2>Responsive</h2>
          <div class="unit"  v-for="item in list.responsive" :key="item.id" :style="{ backgroundImage: 'url('+require('../img/web/'+ item.poster )+')' }" @click="openPop(item.id)">
            <PortItem :item="item"/>
          </div>
        </article>
        <article class="list">
          <h2>Mobile</h2>
          <div class="unit"  v-for="item in list.mobile" :key="item.id" :style="{ backgroundImage: 'url('+require('../img/web/'+ item.poster )+')' }" @click="openPop(item.id)">
            <PortItem :item="item"/>
          </div>
        </article>
        <article class="list">
          <h2>PC</h2>
          <div class="unit"  v-for="item in list.pc" :key="item.id" :style="{ backgroundImage: 'url('+require('../img/web/'+ item.poster )+')' }" @click="openPop(item.id)">
            <PortItem :item="item"/>
          </div>
        </article>
        <article class="list">
          <h2>ETC</h2>
          <div class="unit"  v-for="item in list.etc" :key="item.id" :style="{ backgroundImage: 'url('+require('../img/web/'+ item.poster )+')' }" @click="openPop(item.id)">
            <PortItem :item="item"/>
          </div>
        </article>
    </section>
</template>
<script>
import PortItem from '@/components/PortItem.vue';

export default {
  name: 'Portfolio',
  props: {
    list: Object,
  },
  methods:{
    openPop($id){
      if($id < 100) this.$emit('openPopEvent', $id);
    }
  },
  components: {
    PortItem,
  }
};
</script>
