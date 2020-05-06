<template>
    <div>
        <div class="bar" style="display: flex;">
            <div id="left">
                <div v-if="windowWidth > 600">
                    <router-link :to="'/art_exhibition/'+indices[0]" style="text-decoration: none;">
                        <b-button variant="outline" class="pagination-button" @click="reload"><p class="text"><b>{{capitalize(indices[0])}}'s
                            Art</b></p>
                        </b-button>
                    </router-link>
                </div>
                <div v-else>
                    <router-link :to="'/art_exhibition/'+indices[0]" style="text-decoration: none;">
                        <b-button variant="outline" class="pagination-button" @click="reload">
                            <p class="text"><b>←</b></p>
                        </b-button>
                    </router-link>
                </div>
                <br>
            </div>

            <div id="middle">
                <h1>
                    {{capitalize(artist_name)}}'s Art Gallery
                </h1>
                <br v-if="windowWidth < 600">
            </div>
            <div id="right">
                <div v-if="windowWidth > 600">
                    <router-link :to="'/art_exhibition/'+indices[1]" style="text-decoration: none;">
                        <b-button variant="outline" class="pagination-button" @click="reload"><p class="text">
                            <b>{{capitalize(indices[1])}}'s
                                Art</b>
                        </p>
                        </b-button>
                    </router-link>
                </div>
                <div v-else>
                    <router-link :to="'/art_exhibition/'+indices[1]" style="text-decoration: none;">
                        <b-button variant="outline" class="pagination-button" @click="reload">
                            <p class="text"><b>→</b></p>
                        </b-button>
                    </router-link>
                    <br>
                </div>
            </div>
        </div>
        <div class="artist-images">
            <div v-if="windowWidth > 600">
                <Photos :photos="photos"/>
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
    import items from '../json/art_exhibition.json'

    export default {
        name: "Artist",
        components: {Photos},
        data() {
            return {
                artist_name: this.$route.params.name,
                photos: this.get_photos(),
                artist_names: this.get_artist_names(),
                indices: this.get_indices(),
            }
        }
        ,
        methods: {
            capitalize: function (input) {
                return input[0].toUpperCase() + input.slice(1)
            }
            ,
            print_: function (input) {
                console.log(input)
            }
            ,
            get_artist_names: function () {
                let names = []
                for (let i = 0; i < items.artists.length; i++) {
                    names.push(items.artists[i].url)
                }
                return names
            }
            ,
            mod: function (n, m) {
                return ((n % m) + m) % m;
            }
            ,
            reload: function () {
                setTimeout(function () {
                    window.location.reload()
                }, 100)
            }
            ,
            get_indices: function () {
                let indices = []
                let names = this.get_artist_names()
                let index = names.findIndex(name => name === this.$route.params.name)
                indices.push(names[this.mod(index - 1, names.length)])
                indices.push(names[this.mod(index + 1, names.length)])
                return indices
            }
            ,
            get_photos: function () {
                if (items.artists.find(m => m.url === this.$route.params.name) !== undefined) {
                    let p = items.artists.find(m => m.url === this.$route.params.name).photos
                    for (let i = 0; i < p.length; i++) {
                        if (!p[i].includes("master")) {
                            p[i] = this.$static + "art_exhibition/" + this.$route.params.name + '/' + p[i]
                        }
                    }
                    this.print_(p)
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