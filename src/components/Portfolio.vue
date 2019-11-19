<template>
    <section id="port">
        <h1>MY PORTFOLIO</h1>
        <Item :list="list.responsive" :title="'Responsive'"/>
        <Item :list="list.pc" :title="'PC'"/>
        <Item :list="list.mobile" :title="'Mobile'"/>
        <Item :list="list.web" :title="'ETC'"/>
    </section>
</template>
<script>
import Item from '@/components/List.vue';

export default {
  name: 'Portfolio',
  props: {
    list: Object,
  },
  components: {
    Item,
  }
};
</script>
