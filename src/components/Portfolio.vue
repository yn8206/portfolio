<template>
    <section id="port">
        <h1>MY PORTFOLIO</h1>
        <Item :list="list.responsive" :title="'Responsive'" @openPopEvent="openPop"/>
        <Item :list="list.pc" :title="'PC'" @openPopEvent="openPop"/>
        <Item :list="list.mobile" :title="'Mobile'" @openPopEvent="openPop"/>
        <Item :list="list.web" :title="'ETC'" @openPopEvent="openPop"/>
    </section>
</template>
<script>
import Item from '@/components/List.vue';

export default {
  name: 'Portfolio',
  props: {
    list: Object,
  },
  methods:{
    openPop($id){
      this.$emit('openPopEvent', $id);
    }
  },
  components: {
    Item,
  }
};
</script>
