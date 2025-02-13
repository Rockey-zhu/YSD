<template>
    <div>
        <button @click="onclick1">please onclick me bnvnvn  {{temp}} </button>    
        <iframe src="/public/lucksheet/index.html" frameborder="0"></iframe>
    
    </div>    
</template>

<script>
export default {
     data() {
        return {
            temp:1
        }
    },
    methods: {
        onclick1(){
            this.temp++;
        }
    }
}
</script>

<style scoped>

</style>