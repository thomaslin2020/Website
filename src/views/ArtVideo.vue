<template>
    <div class="iframe-container">
        <iframe width="542" height="361" src="https://www.youtube.com/embed/kJX6Jvlt2jQ" frameborder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen></iframe>
    </div>
</template>

<script>
    export default {
        name: "ArtVideo"
    }
</script>

<style scoped>
    .iframe-container {
        margin: 0 auto;
        position: relative;
        width: 75%;
        padding-bottom: 42.34%;
        height: 0;
    }

    .iframe-container iframe {
        position: absolute;
        border: 0;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }
</style>