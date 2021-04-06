<template>
    <div>
        <h1>IB2 Visual Art Galleries</h1>
        <b-container deck class="card_container">
            <b-row :cols="this.cols">
                <b-card v-bind:key="artist.image" :img-src="artist.image" img-alt="Card image" v-for="artist in artists"
                        class="artist_card mx-auto h-100"
                        img-top>
                    <router-link :to="'art_exhibition/'+artist.url">
                        <b-card-text class="card_text">
                            <div style="text-align: center; vertical-align: center;">
                                <p class="names">
                                    <b>{{artist.first_name}} {{artist.last_name}}</b>
                                </p>
                            </div>
                        </b-card-text>
                    </router-link>
                </b-card>
            </b-row>
        </b-container>
    </div>
</template>

<script>
    import items from '../json/art_exhibition.json'

    export default {
        name: "ArtExhibition",
        data() {
            return {
                artists: items.artists,
                width: 500,
                cols: 5
            }
        },

        mounted() {
            this.$nextTick(function () {
                window.addEventListener('resize', this.getWindowWidth);
                window.addEventListener('resize', this.getCols);
                this.getWindowWidth()
                this.getCols()
            })
        },

        methods: {
            getWindowWidth() {
                console.log(document.documentElement.clientWidth)
                this.width = document.documentElement.clientWidth;
            }, getCols() {
                let num = this.width
                if (num < 420) {
                    this.cols = 1;
                } else if (num > 1000) {
                    this.cols = 5;
                } else if (num > 800) {
                    this.cols = 4;
                } else if (num > 600) {
                    this.cols = 3;
                } else {
                    this.cols = 2;
                }
            }
        },
        beforeDestroy() {
            window.removeEventListener('resize', this.getWindowWidth);
        }
    }
</script>

<style scoped>
    .artist_card {
        overflow: hidden;
        max-width: 100%;
        /*min-width: 200px;*/
        /*max-width: 200px;*/
        margin: 1rem;
    }

    .card_container {
        max-width: 80%;
        overflow: hidden;
    }

    .card_text {
        max-height: 15px;
        min-height: 15px;
        word-wrap: break-word;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .names {
        margin: auto;
        vertical-align: middle;
        font-size: 13.3px;
    }
</style>