<template>
    <div>
        <div class="bar" style="display: flex;">
            <div id="left">
                <router-link :to="'/art_exhibition/'+indices[0]">
                    <b-button variant="outline" class="pagination-button" @click="reload"><p class="text"><b>{{capitalize(indices[0])}}'s
                        Art</b></p>
                    </b-button>
                </router-link>
            </div>
            <div id="middle">
                <h1>
                    {{capitalize(artist_name)}}'s Art Gallery
                </h1>
            </div>
            <div id="right">
                <router-link :to="'/art_exhibition/'+indices[1]">
                    <b-button variant="outline" class="pagination-button" @click="reload"><p class="text">
                        <b>{{capitalize(indices[1])}}'s
                            Art</b>
                    </p>
                    </b-button>
                </router-link>
            </div>
        </div>
        <div class="artist-images">
            <Photos :photos="photos"/>
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
                repository: "https://raw.githubusercontent.com/thomaslin2020/ridley-arts-celebration/master/",
                folder: "src/assets/art_exhibition/",
                artist_name: this.$route.params.name,
                photos: this.get_photos(),
                artist_names: this.get_artist_names(),
                indices: this.get_indices(),
            }
        },
        methods: {
            capitalize: function (input) {
                return input[0].toUpperCase() + input.slice(1)
            },
            print_: function (input) {
                console.log(input)
            },
            get_artist_names: function () {
                let names = []
                for (let i = 0; i < items.artists.length; i++) {
                    names.push(items.artists[i].url)
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
                let names = this.get_artist_names()
                let index = names.findIndex(name => name === this.$route.params.name)
                indices.push(names[this.mod(index - 1, names.length)])
                indices.push(names[this.mod(index + 1, names.length)])
                return indices
            },
            get_photos: function () {
                let p = items.artists.find(m => m.url === this.$route.params.name).photos
                for (let i = 0; i < p.length; i++) {
                    p[i] = this.repository + this.folder + this.$route.params.name + '/' + p[i]
                }
                return p
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

    .text {
        font-family: "Goudy Old Style", serif;
    }

    .pagination-button {
        border-radius: 10%;
        color: #E6611B;
        border-width: 2px;
        border-color: #E6611B;
        background-color: #FCFCFC;
    }

    #left {
        float: left;
        width: 25%;
    }

    #middle {
        float: left;
        width: 50%;
    }

    #right {
        float: right;
        width: 25%;
    }
</style>