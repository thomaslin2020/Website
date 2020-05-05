<template>
    <div class="parent">
        <div class="iframe-container">
            <iframe width="640" height="360" src="https://www.youtube.com/embed/FmtFuy2o99E" frameborder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen></iframe>
        </div>
        <br>
    </div>
</template>

<script>
    export default {
        name: "Riff"
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