<template>
    <div class="parent">
        <div class="grid" style="padding-bottom: 20px">
            <div class="image-container" v-for="{class_name, thumbnail} in art_grades" v-bind:key="class_name">
                <router-link :to="'/art_gallery/'+parse_link(class_name)">
                    <div class="zoom-container">
                        <!--suppress HtmlUnknownTarget -->
                        <img :src="thumbnail" alt="Grade" style="width:100%; height: 200px; object-fit: contain">
                        <div class="content">
                            <h1 style="align-self: flex-end">{{class_name}}</h1>
                        </div>
                    </div>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
    import art_gallery from '../json/art_gallery.json'

    export default {
        name: "VisualArt",
        data() {
            return {
                art_grades: art_gallery.grades
            }
        },
        methods: {
            parse_link: function (name) {
                name = name.replace(/ /g, '_')
                name = name.toLowerCase()
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
        display: grid;
        height: 100%;
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
        /* This is better for small screens, once min() is better supported */
        /* grid-template-columns: repeat(auto-fill, minmax(min(200px, 100%), 1fr)); */
        grid-gap: 1rem;
        /* This is the standardized property now, but has slightly less support */
        /* gap: 1rem */
        margin: auto;
    }

    .parent {
        /*display: flex;*/
        /*flex-direction: column;*/
        /*justify-content: center;*/
    }
</style>