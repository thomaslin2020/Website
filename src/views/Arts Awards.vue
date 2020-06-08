<template>
    <div class="parent">
        <div class="iframe-container">
            <iframe v-if="windowWidth > 1200" width="640" height="360" src="https://www.youtube.com/embed/yqawEepsE4o" frameborder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" style="height: calc(100vh - 175px);"
                    allowfullscreen></iframe>
            <iframe v-else width="640" height="360" src="https://www.youtube.com/embed/yqawEepsE4o" frameborder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" style="height: 100%"
                    allowfullscreen></iframe>
        </div>
        <br>
    </div>
</template>

<script>
    export default {
        name: "Arts Awards Video"
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
    }
</style>