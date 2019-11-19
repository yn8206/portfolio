<template>
    <div class="slider">
        <h2>{{title}}</h2>
        <button @click="slidePrev" class="prev">prev</button>
        <button @click="slideNext" class="next">next</button>
        <Hooper :infiniteScroll="true" :itemsToShow="3" :wheelControl="false" :keysControl="false"  ref="carousel">
            <Pagination slot="hooper-addons"></Pagination>
            <Slide  v-for="item in list" :key="item.id" :style="{ backgroundImage: 'url(' + require('../img/web/'+ item.poster ) + ')' }"> 
                <div class="corver">
                    <h3>{{item.title}}</h3>
                    <p v-if="item.type !== 'pc' && item.type !== 'web'" v-html="item.sub_type" class="sub_tit">{{item.sub_type}}</p> 
                    <p v-html="item.info" class="info">{{item.info}}</p>
                    <span class="link">자세히 보기→</span>
                </div>
            </Slide>
        </Hooper> 
    </div>
</template>

<script>
    import {Hooper, Slide, Pagination} from 'hooper';
    export default {
        name: 'List',
        props:{
            title:String,
            list:Array
        },
        methods: {
            slidePrev() {
            this.$refs.carousel.slidePrev();
            },
            slideNext() {
            this.$refs.carousel.slideNext();
            }
        },
        components:{
            Hooper,
            Slide,
            Pagination
        }
    }
    
</script>

