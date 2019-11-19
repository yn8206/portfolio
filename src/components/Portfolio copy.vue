<template>
    <article>
        <h2 v-touppercase>{{name}}</h2>
        <div class="lst">
            <a class="bx bg1" v-for="item in list" :key="item.id">
                <div class="cont">
                    <h3>{{item.title}}</h3>
                    <strong class="tit_sub" v-if="item.type !== 'responsive'">{{item.type}}</strong>
                    <strong class="tit_sub" v-else>반응형</strong>
                    <span v-html="item.info">{{item.info}}</span>
                    <span class="link">자세히 보기 →</span>
                </div>
            </a>
        </div>
    </article>
</template>

<script>
    export default {
        name: 'PortfolioItem',
        data(){
            return{
                name:this.title.toUpperCase()
            }
        },
        props:{
            title:String,
            list:Array
        }
    }
</script>