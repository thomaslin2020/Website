<template>
    <div>
        <div class="bar" style="display: flex;">
            <div id="left">
                <div v-if="windowWidth > 600">
                    <router-link :to="'/art_gallery/'+indices[0]" style="text-decoration: none;">
                        <b-button variant="outline" class="pagination-button" @click="reload"><p class="text"><b>{{parse_grade(indices[0])}}</b>
                        </p>
                        </b-button>
                    </router-link>
                </div>
                <div v-else>
                    <router-link :to="'/art_gallery/'+indices[0]" style="text-decoration: none;">
                        <b-button variant="outline" class="pagination-button" @click="reload">
                            <p class="text"><b>←</b></p>
                        </b-button>
                    </router-link>
                </div>
                <br>
            </div>

            <div id="middle">
                <h1>
                    {{parse_grade(grade)}} Art Gallery
                </h1>
                <br v-if="windowWidth < 600">
            </div>
            <div id="right">
                <div v-if="windowWidth > 600">
                    <router-link :to="'/art_gallery/'+indices[1]" style="text-decoration: none;">
                        <b-button variant="outline" class="pagination-button" @click="reload"><p class="text">
                            <b>{{parse_grade(indices[1])}}</b>
                        </p>
                        </b-button>
                    </router-link>
                </div>
                <div v-else>
                    <router-link :to="'/art_gallery/'+indices[1]" style="text-decoration: none;">
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
    import art_gallery from '../json/art_gallery.json'

    export default {
        name: "Artist",
        components: {Photos},
        data() {
            return {
                grade: this.$route.params.grade,
                photos: this.get_photos(),
                class_names: this.get_class_names(),
                indices: this.get_indices(),
                shuffled: false
            }
        }
        ,
        methods: {
            parse_grade: function (input) {
                if (input.includes('ib')) {
                    return input.toUpperCase().replace('_', ' ')
                } else if (input.includes('design')){
                    return 'Design Technology'
                } else{
                    return (input[0].toUpperCase() + input.slice(1)).replace('_', ' ')
                }
            },
            parse_link: function (name) {
                name = name.replace(/ /g, '_')
                name = name.toLowerCase()
                return name
            },
            print_: function (input) {
                console.log(input)
            },
            get_class_names: function () {
                let names = []
                for (let i = 0; i < art_gallery.grades.length; i++) {
                    names.push(art_gallery.grades[i]["class_name"])
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
                let index = names.findIndex(name => name === this.parse_grade(this.$route.params.grade))
                indices.push(this.parse_link(names[this.mod(index - 1, names.length)]))
                indices.push(this.parse_link(names[this.mod(index + 1, names.length)]))
                this.print_(indices)
                return indices
            },
            get_photos: function () {
                let temp = art_gallery.grades.find(({class_name}) => class_name === this.parse_grade(this.$route.params.grade))
                if (temp !== undefined) {
                    let p = temp.images
                    for (let i = 0; i < p.length; i++) {
                        if (!p[i].includes("master")) {
                            p[i] = this.$static + "visual_arts/" + this.$route.params.grade + '/' + p[i]
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