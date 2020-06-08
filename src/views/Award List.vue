<template>
    <div>
        <div v-bind:key="award" v-for="award in awards">
            <h2>
                {{award.category}}
            </h2>
            <ul>
                <li v-for="person in award.people" v-bind:key="person">
                    {{person}}
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Arts Awards List",
        data() {
            return {
                awards: [
                    {category: "d", people: ["d","e"]}, {category: "", people: []}
                ]
            }
        }
    }
</script>

<style scoped>
    ul {
        columns: 2;
        -webkit-columns: 2;
        -moz-columns: 2;
    }
</style>