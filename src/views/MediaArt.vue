<template>
    <div>
        <div class="bar" style="display: flex;">
            <div id="left"></div>
            <div id="middle">
                <h1>
                    Media Arts
                </h1>
                <br v-if="windowWidth < 600">
            </div>
            <div id="right"></div>
        </div>
        <div class="grade-images">
            <div v-if="windowWidth > 600">
                <Photos v-if="photos.length > 0" :photos="photos" :dots="false" :speed="1500" :fade="true"/>
            </div>
            <div v-else>
                <ul>
                    <li v-for="photo in photos" v-bind:key="photo">
                        <img :src="photo" :alt="photo" style="width: 100%; max-width:100%; padding-bottom: 10px;">
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    import Photos from "../components/Photos";
    import media from '../json/media.json'

    export default {
        name: "MediaArt",
        components: {Photos},
        data() {
            return {
                photos: this.get_photos(),
                shuffled: false
            }
        }
        ,
        methods: {
            print_: function (input) {
                console.log(input)
            },
            mod: function (n, m) {
                return ((n % m) + m) % m;
            },
            reload: function () {
                setTimeout(function () {
                    window.location.reload()
                }, 100)
            },
            get_photos: function () {
                let p = media.photos
                for (let i = 0; i < p.length; i++) {
                    if (!p[i].includes("master")) {
                        p[i] = this.$static + "media_arts/" + p[i]
                    }
                }
                return p
            },
            mounted() {
                console.log(this.photos)
            }
        }
    }
</script>

<style scoped>
    h1 {
        font-size: 32px;
        margin: 0;
    }

    ul {
        list-style-type: none;
        padding: 0;
    }

    li {
        display: inline-block;
        margin: 0 10px;
    }

    .text {
        /*position: absolute;*/
        /*top: 50%;*/
        /*left: 50%;*/
        /*transform: translate(-50%, -50%);*/
        text-decoration: none;
        vertical-align: middle;
        text-align: center;
        margin: auto;
        font-family: "Goudy Old Style Bold", serif;
    }

    .pagination-button {
        text-decoration: none !important;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        vertical-align: middle;
        border-radius: 10%;
        max-height: 40px;
        color: #E6611B;
        border-width: 2px;
        border-color: #E6611B;
        background-color: #FCFCFC;
        text-align: center;
    }

    .pagination-button:hover {
        color: #FCFCFC;
        background-color: #E6611B;
    }

    .bar {
        text-align: center;
        position: center;
    }

    #left {
        display: flex;
        justify-content: center;
        align-items: center;
        float: left;
        width: 25%;
    }

    #middle {
        float: left;
        width: 50%;
    }

    #right {
        display: flex;
        justify-content: center;
        align-items: center;
        float: right;
        width: 25%;
    }
</style>