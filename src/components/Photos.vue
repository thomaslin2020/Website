<template>
    <section class="section section--gallery">
        <div class="container-fluid">
            <div class="row">
                <div class="col-xs-12">
                    <agile v-if="photos" :dots="dots" :autoplay="autoplaySpeed" :fade="fade" :speed="speed">
                        <!--suppress HtmlUnknownTarget -->
                        <img class="slide"
                             v-bind:key="photo" v-for="photo in photos" :src="photo"
                             alt="Label">
                    </agile>
                </div>
            </div>
        </div>
    </section>


</template>

<script>
    import VueAgile from './Agile.vue'
    import Vue from 'vue'

    Vue.component('agile', VueAgile)

    export default {
        name: 'Photos',
        props: ['photos','dots','autoplaySpeed','fade','speed'],
        data() {
            return {
            }
        }
    }
</script>

<style lang="sass">
    .section--gallery
        margin: 15px

        .agile
            &__nav-button
                background: transparent
                border: none
                color: #000000
                cursor: pointer
                font-size: 30px
                height: 100%
                position: absolute
                top: 0
                transition-duration: .3s
                width: 80px

                &:hover
                    background-color: rgba(#000, .5)
                    color: #fff
                    opacity: 1

                &--prev
                    left: 0

                &--next
                    right: 0

            &__dots
                bottom: 10px
                left: 50%
                position: absolute
                transform: translateX(-50%)

            &__dot
                margin: 0 10px

                button
                    background-color: transparent
                    border: 1px solid #E6611B
                    border-radius: 50%
                    cursor: pointer
                    display: block
                    height: 10px
                    font-size: 0
                    line-height: 0
                    margin: 0
                    padding: 0
                    transition-duration: .3s
                    width: 10px

                &--current,
                &:hover
                    button
                        background-color: #E6611B

            // Slides styles
            .slide
                display: block
                object-fit: contain
                width: 100%
                min-height: 100vh

</style>