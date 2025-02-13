<template>
    <div>
        <div>cescesces</div>
        <slot></slot>
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