<template>
    <div class="parent">
        <div class="grid" style="padding-bottom: 20px">
            <div class="image-container" v-for="{event : event} in events" v-bind:key="event">
                <router-link :to="'/music/'+parse_link(event)">
                    <div class="zoom-container">
                        <img src="https://dummyimage.com/1920x1080/000/fff" alt="Event" style="width:100%;">
                        <div class="content">
                            <h1>{{event}}</h1>
                        </div>
                    </div>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
    import music from '../json/music.json'

    export default {
        name: "Music",
        data() {
            return {
                events: music.events
            }
        },
        methods: {
            parse_link: function (name) {
                name = name.replace(/ /g, '_').toLowerCase()
                return name
            }
        }
    }
</script>

<style scoped>
    .image-container {
        position: relative;
        max-width: 400px; /* Maximum width */
        margin: 0 auto; /* Center it */
    }

    .image-container .content {
        position: absolute; /* Position the background text */
        bottom: 0; /* At the bottom. Use top:0 to append it to the top */
        background: rgb(0, 0, 0); /* Fallback color */
        background: rgba(0, 0, 0, 0.25); /* Black background with 0.3 opacity */
        color: #f1f1f1; /* Grey text */
        width: 100%; /* Full width */
        padding: 20px; /* Some padding */
    }

    .zoom-container {
        transition: transform .2s;
    }

    .zoom-container:hover {
        transform: scale(1.21);
        background: rgba(0, 0, 0, 0); /* Black background with 0.3 opacity */
    }

    h1 {
        font-size: 30px;
        font-family: "Goudy Old Style Bold", serif;
    }

    .grid {
        max-width: 90%;
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
        grid-gap: 1rem;
        margin: auto;
    }
</style>