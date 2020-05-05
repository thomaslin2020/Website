<template>
    <section class="section section--gallery">
        <div class="container-fluid">
            <div class="row">
                <div class="col-xs-12">
                    <agile>
                        <!--suppress HtmlUnknownTarget -->
                        <img class="slide"
                             v-bind:key="photo" v-for="photo in photos" :src="photo"
                             alt="Label" style="height: 100vh;">
                    </agile>
                </div>
            </div>
        </div>
    </section>


</template>

<script>
    export default {
        name: 'Photos',
        props: ['photos'],
        data() {
            return{
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
                color: #fff
                cursor: pointer
                font-size: 24px
                height: 100%
                position: absolute
                top: 0
                transition-duration: .3s
                width: 80px

                &:hover
                    background-color: rgba(#000, .5)
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
                object-fit: cover
                width: 100%

</style>