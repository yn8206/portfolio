<template>
    <div class="slider">
        <h2>{{title}}</h2>
        <button @click="slidePrev" class="prev">prev</button>
        <button @click="slideNext" class="next">next</button>
        <Hooper :infiniteScroll="true" :itemsToShow="3" :wheelControl="false" :keysControl="false"  ref="carousel">
            <Pagination slot="hooper-addons"></Pagination>
            <Slide  v-for="item in list" :key="item.id" :style="{ backgroundImage: 'url(' + require('../img/web/'+ item.poster ) + ')' }"> 
                <span class="blind">{{item.title}}</span> 
            </Slide>
            <!-- <hooper-navigation slot="hooper-addons"></hooper-navigation> -->
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

