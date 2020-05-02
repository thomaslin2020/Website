<template>
    <div>
        <div class="iframe-container">
            <iframe src="https://www.youtube.com/embed/9lkFhNYrHCQ" allow="autoplay; encrypted-media"
                    allowfullscreen></iframe>
        </div>
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
        height: 100%;
    }
</style>