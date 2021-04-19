<template>
    <div class="parent">
        <h1 style="margin-bottom: 15px">IB2 Theatre Showcase</h1>
        <div v-for="video in videos" :key="video">
            <div class="iframe-container">
                <iframe v-if="windowWidth > 1200" width="640" height="360"
                        :src="video"
                        frameborder="0"
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                        style="height: calc(100vh - 175px);"
                        allowfullscreen></iframe>
                <iframe v-else width="640" height="360" :src="video" frameborder="0"
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                        style="height: 100%"
                        allowfullscreen></iframe>
            </div>
            <br>
            <br><br></div>
    </div>
</template>

<script>
    export default {
        name: "IB2Theatre",
        data() {
            return {
                videos: ["https://youtu.be/7Wj_fQSLS64",
"https://youtu.be/TaVYPUAtocA",
"https://youtu.be/uDAyt6yKqqU"
]
            }
        }
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