<template>
    <div class="parent">
        <h1 style="margin-bottom: 15px">Comparative Study Playlist</h1>
        <div class="iframe-container">
            <iframe v-if="windowWidth > 1200" width="640" height="360" src="https://youtube.com/embed/playlist?list=PLc4-pkXuUpXTZY4YAfYKGClGrKOLmpQYt"
                    frameborder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    style="height: calc(100vh - 175px);"
                    allowfullscreen></iframe>
            <iframe v-else width="640" height="360" src="https://youtube.com/embed/playlist?list=PLc4-pkXuUpXTZY4YAfYKGClGrKOLmpQYt" frameborder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" style="height: 100%"
                    allowfullscreen></iframe>
        </div>
        <br>
                <h1 style="margin-bottom: 15px">Short Film Playlist</h1>
        <div class="iframe-container">
            <iframe v-if="windowWidth > 1200" width="640" height="360" src="https://youtube.com/embed/playlist?list=PLc4-pkXuUpXTPjzqXfepVft47Us93VA3m"
                    frameborder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    style="height: calc(100vh - 175px);"
                    allowfullscreen></iframe>
            <iframe v-else width="640" height="360" src="https://youtube.com/embed/playlist?list=PLc4-pkXuUpXTPjzqXfepVft47Us93VA3m" frameborder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" style="height: 100%"
                    allowfullscreen></iframe>
        </div>
        <br>
           <h1 style="margin-bottom: 15px">One Minute Project Playlist</h1>
        <div class="iframe-container">
            <iframe v-if="windowWidth > 1200" width="640" height="360" src="https://youtube.com/embed/playlist?list=PLc4-pkXuUpXQYoyRKZvVWG6xkgue89nus"
                    frameborder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    style="height: calc(100vh - 175px);"
                    allowfullscreen></iframe>
            <iframe v-else width="640" height="360" src="https://youtube.com/embed/playlist?list=PLc4-pkXuUpXQYoyRKZvVWG6xkgue89nus" frameborder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" style="height: 100%"
                    allowfullscreen></iframe>
        </div>
        <br>
        
        
    </div>
    
</template>

<script>
    export default {
        name: "Riff",
        data() {
            return {}
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