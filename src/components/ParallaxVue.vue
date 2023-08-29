<template>
    <div class="parallax-container">
        <div class="parallax" :style="{ transform: `translate3d(0, ${offset}px, 0)` }">
            <img src="../assets/graficos.jpg" alt="Parallax Image" />
        </div>
    </div>
</template>
  
<script>
export default {
    name: 'ParallaxVue',
    data() {
        return {
            offset: 0
        };
    },
    mounted() {
        window.addEventListener('scroll', this.updateOffset);
    },
    unmounted() {
        window.removeEventListener('scroll', this.updateOffset);
    },
    methods: {
        updateOffset() {
            this.offset = window.pageYOffset || document.documentElement.scrollTop;
        }
    }
};
</script>
  
<style>
.parallax-container {
    height: 400px;
    overflow: hidden;
}

.parallax {
    height: 100%;
    width: 100%;
    position: relative;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
}
</style>
  