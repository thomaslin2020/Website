<template>
    <div class="parent">
        <div class="grid" style="padding-bottom: 20px">
            <div class="image-container" v-for="grade in grades" v-bind:key="grade">
                <img src="https://dummyimage.com/1920x1080/000/fff" alt="Notebook" style="width:100%;">
                <div class="content">
                    <h1>{{grade}}</h1>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "VisualArt",
        data() {
            return {
                grades: ["Kindergarten", "Grade 1", "Grade 2", "Grade 3", "Grade 4", "Grade 5", "Grade 6", "Grade 7",
                    "Grade 8", "Grade 9", "Grade 10", "Grade 11", "IB 1", "Grade 12", "IB 2", "Design Technology"]
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
        background: rgba(0, 0, 0, 0.3); /* Black background with 0.5 opacity */
        color: #f1f1f1; /* Grey text */
        width: 100%; /* Full width */
        padding: 20px; /* Some padding */
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
    .parent{
        /*display: flex;*/
        /*flex-direction: column;*/
        /*justify-content: center;*/
    }
</style>