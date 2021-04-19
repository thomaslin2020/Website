<template>
    <div>
        <div class="bar" style="display: flex;">
            <div id="left">
                <div v-if="windowWidth > 600">
                    <router-link :to="'/music/'+indices[0]" style="text-decoration: none;">
                        <b-button variant="outline" class="pagination-button" @click="reload"><p class="text"><b>{{parse_event(indices[0])}}</b>
                        </p>
                        </b-button>
                    </router-link>
                </div>
                <div v-else>
                    <router-link :to="'/music/'+indices[0]" style="text-decoration: none;">
                        <b-button variant="outline" class="pagination-button" @click="reload">
                            <p class="text"><b>←</b></p>
                        </b-button>
                    </router-link>
                </div>
                <br>
            </div>

            <div id="middle">
                <h1>
                    {{parse_event(event)}}
                </h1>
                <br v-if="windowWidth < 600">
            </div>
            <div id="right">
                <div v-if="windowWidth > 600">
                    <router-link :to="'/music/'+indices[1]" style="text-decoration: none;">
                        <b-button variant="outline" class="pagination-button" @click="reload"><p class="text">
                            <b>{{parse_event(indices[1])}}</b>
                        </p>
                        </b-button>
                    </router-link>
                </div>
                <div v-else>
                    <router-link :to="'/music/'+indices[1]" style="text-decoration: none;">
                        <b-button variant="outline" class="pagination-button" @click="reload">
                            <p class="text"><b>→</b></p>
                        </b-button>
                    </router-link>
                    <br>
                </div>
            </div>
        </div>
        <div class="grade-images">
            <div v-if="windowWidth > 600">
                <div v-if ="event=='choir'">
                </div>
                <div v-else>
                <Photos v-if="photos.length > 0" :photos="photos" :dots="false" :speed="1500" :fade="true"/>
                </div>
            </div>
            <div v-else>
                <ul>
                    <li v-for="photo in photos" v-bind:key="photo">
                        <img :src="photo" :alt="photo" style="width: 100%; max-width:100%; padding-bottom: 10px;" v-if="photo.includes('jpg')">
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    import Photos from "../components/Photos";
    import music from '../json/music.json'

    export default {
        name: "MusicEvents",
        components: {Photos},
        data() {
            return {
                event: this.$route.params.event,
                photos: this.get_photos(),
                class_names: this.get_class_names(),
                indices: this.get_indices(),
                shuffled: false
            }
        }
        ,
        methods: {
            parse_event: function (input) {
                let string = input.split('_')
                for (let i = 0; i < string.length; i++) {
                    string[i] = string[i][0].toUpperCase() + string[i].slice(1)
                }
                return string.join(' ')
            },
            parse_link: function (name) {
                name = name.replace(/ /g, '_').toLowerCase()
                return name
            },
            print_: function (input) {
                console.log(input)
            },
            get_class_names: function () {
                let names = []
                for (let i = 0; i < music.events.length; i++) {
                    names.push(music.events[i]["event"])
                }
                return names
            },
            mod: function (n, m) {
                return ((n % m) + m) % m;
            },
            reload: function () {
                setTimeout(function () {
                    window.location.reload()
                }, 100)
            },
            get_indices: function () {
                let indices = []
                let names = this.get_class_names()
                let index = names.findIndex(name => name === this.parse_event(this.$route.params.event))
                indices.push(this.parse_link(names[this.mod(index - 1, names.length)]))
                indices.push(this.parse_link(names[this.mod(index + 1, names.length)]))
                this.print_(indices)
                return indices
            },
            get_photos: function () {
                let temp = music.events.find(({event}) => event === this.parse_event(this.$route.params.event))
                if (temp !== undefined) {
                    let p = temp.images
                    for (let i = 0; i < p.length; i++) {
                        if (!p[i].includes("master")) {
                            p[i] = this.$static + "music/" + this.$route.params.event + '/' + p[i]
                        }
                    }
                    return p
                }
            },
            // computed: {}
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