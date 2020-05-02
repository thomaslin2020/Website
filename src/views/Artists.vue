<template>
    <div>
        <h1>
            {{capitalize(artist_name)}}'s Art Gallery
        </h1>
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
                artist_name: this.$route.params.name,
                photos: items.artists.find(m => m.url === this.$route.params.name).photos
            }
        },
        methods: {
            capitalize: function (input) {
                return input[0].toUpperCase() + input.slice(1)
            },
            print_: function(input){
                console.log(input)
            }
        },
        computed: {}
    }
</script>

<style scoped>
    h1 {
        font-size: 32px;
        margin: 0;
    }
</style>