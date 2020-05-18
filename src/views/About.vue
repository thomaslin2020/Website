<template>
    <div class="about">
        <h1>About Us</h1>
        <h3 style="margin-bottom: 15px;">Ridley College Web Developers</h3>
        <div style="display: flex; flex-direction: row; justify-content: center;">
            <div style="max-width: 80%;">
                <div style="background-color: rgba(255,255,255,0.4); border-radius: 10px; padding: 20px;">
                    <p style="margin-bottom: 0">This site was a collaborative effort between Ridley Arts teachers and senior Ridley students. The
                        objective of this site is to showcase the 2019-2020 academic year in terms of arts activities
                        and
                        arts events at the school. Due to the school shutdown due to Covid 19, this virtual display was
                        the
                        only means by which to celebrate student achievement this year.
                        We welcome your input.</p>
                    <b-container deck class="card_container">
                        <b-row :cols="cols">
                            <b-card img-src="https://bbk12e1-cdn.myschoolcdn.com/ftpimages/180/user/large_user_4447514_144.jpg"
                                    img-alt="Card image" style="width: 40%; min-width: 30%; margin-top: 15px;"
                                    class="artist_card mx-auto h-100"
                                    img-top>
                                <b-card-text class="card_text">
                                    <div style="text-align: center; vertical-align: center;">
                                        <p class="names">
                                            <b>Thomas Lin</b>
                                        </p>
                                    </div>
                                </b-card-text>
                            </b-card>
                            <b-card img-src="https://bbk12e1-cdn.myschoolcdn.com/ftpimages/180/user/large_user_4811747_810.jpg"
                                    img-alt="Card image" style="width: 40%; min-width: 30%; margin-top: 15px;"
                                    class="artist_card mx-auto h-100"
                                    img-top>
                                <b-card-text class="card_text">
                                    <div style="text-align: center; vertical-align: center;">
                                        <p class="names">
                                            <b>David Meng</b>
                                        </p>
                                    </div>
                                </b-card-text>
                            </b-card>
                        </b-row>
                    </b-container>
                </div>
            </div>
        </div>
        <br>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                cols: 2,
                width: document.documentElement.clientWidth
            }
        },
        methods: {
            getWindowWidth() {
                console.log(document.documentElement.clientWidth)
                this.width = document.documentElement.clientWidth;
            }, getCols() {
                let num = this.width
                if (num < 500) {
                    this.cols = 1;
                } else {
                    this.cols = 2;
                }
            }
        },
        mounted() {
            window.addEventListener('resize', this.getWindowWidth);
            window.addEventListener('resize', this.getCols);
            this.$nextTick(function () {
                this.getWindowWidth()
                this.getCols()
            })
        },

    }
</script>>
<style scoped>
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
        font-size: 18px;
    }
</style>