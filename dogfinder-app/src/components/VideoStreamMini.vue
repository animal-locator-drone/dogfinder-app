<template>
        <video id="video" autoplay controls  width="100%" height="100%" class="videoplayermini">
                <source src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
                        type="video/mp4">
                Your browser does not support the video tag.
        </video>
</template>

<script setup lang="ts">
</script>

<style scoped>
.videoplayermini {
        position: relative;
        height: 100%;
        width: 100%;
        display: block;
        margin: 0%;
        padding: 0%;
}

</style>