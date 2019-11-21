<template>
    <div class="corver">
        <h3>{{item.title}}</h3>
        <p v-if="item.type !== 'pc' && item.type !== 'web'" v-html="item.sub_type" class="sub_tit">{{item.sub_type}}</p>
        <p v-html="item.info" class="info">{{item.info}}</p>
        <span class="link">자세히 보기→</span>
    </div>
</template>

<script>
export default {
  name: 'PortList',
  props: {
    title: String,
    item: Object,
  },
};

</script>
