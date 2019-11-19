<template>
    <section class="pop">
        <div class="wrap">
            <h2>{{item.title}}</h2>
            <button @click="closePop" class="close">닫기</button>
        </div>
    </section>
</template>

<script>
    export default {
        name:'popup',
        props:{
            item:{}
        },
        methods:{
            closePop(){
                this.$emit("closePopEvent")
            }
        },
        created(){
            console.dir(this.item);
        }
    }
</script>