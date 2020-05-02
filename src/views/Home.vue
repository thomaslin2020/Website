<template lang="pug">
    main.main
        Photos
</template>

<script>
    import Photos from "../components/Photos";

    export default {
        name: 'Home',
        components: {
            Photos,
        }
    }
</script>

<style lang="scss" type="text/scss">
    @import './scss/main.scss';
</style>
