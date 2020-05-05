<template>
    <div class="grid">

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
    .grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
        /* This is better for small screens, once min() is better supported */
        /* grid-template-columns: repeat(auto-fill, minmax(min(200px, 100%), 1fr)); */
        grid-gap: 1rem;
        /* This is the standardized property now, but has slightly less support */
        /* gap: 1rem */
    }
</style>