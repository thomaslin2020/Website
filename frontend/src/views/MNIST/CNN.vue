<template>
    <div>
        <h2>Upload your MNIST image</h2>
        <input style="display: none" type="file" name="file" @change="onFileSelected" ref="inputFile">
        <b-button @click="$refs.inputFile.click()">Select File</b-button>
        <b-button type="submit" value="upload" @click="onUpload">Upload</b-button>
        <div id="preview">
            <p v-if="isImage === false">Please Upload an Image</p>
            <!--suppress HtmlUnknownTarget -->
            <img v-if="imageURL" :src="imageURL" alt="" style="width: 500px;height: 500px;"/>
        </div>
        <div v-if="prediction">
            <p>Prediction: {{prediction}}</p>
            <div id="chart">
                <apexchart type="bar" height="350" :options="chartOptions" :series="series"></apexchart>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios'
    import VueApexCharts from 'vue-apexcharts'

    export default {
        name: "CNN",
        data() {
            return {
                selectedImage: null,
                isImage: null,
                imageURL: null,
                prediction: null,
                series: [{data: null}],
                chartOptions: {
                    chart: {type: 'bar', height: 350},
                    plotOptions: {bar: {horizontal: true,}},
                    dataLabels: {enabled: false},
                    xaxis: {categories: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'],}
                },
            };
        },
        components: {
            apexchart: VueApexCharts,
        },
        methods: {
            onFileSelected(event) {
                this.selectedImage = event.target.files[0]
                this.previewImage(event)
            },
            onUpload() {
                if (this.selectedImage) {
                    let path = 'predict/mnist/cnn'
                    const fd = new FormData()
                    fd.append('file', this.selectedImage)
                    axios.post(this.$domain + path, fd, {
                        onUploadProgress: uploadEvent => {
                            console.log('Upload Progress: ' + Math.round(uploadEvent.loaded / uploadEvent.total * 100) + '%')
                        }
                    }).then(response => {
                        this.prediction = response.data.class
                        this.series[0].data = response.data.confidence
                        console.log(response)
                    }).catch(e => {
                        this.errors.push(e)
                    })
                }
            },
            previewImage(event) {
                let input = event.target;
                if (input.files && input.files[0]) {
                    if (/\.(jpe?g|png|gif)$/i.test(input.files[0].name)) {
                        this.isImage = true
                        let reader = new FileReader();
                        reader.onload = (e) => {
                            this.imageURL = e.target.result;
                        }
                        reader.readAsDataURL(input.files[0]);
                    } else {
                        this.isImage = false
                        this.imageURL = null
                    }
                }
            }
            // getMessage() {
            //     const path = 'http://localhost:5000/predict/mnist/cnn';
            //     axios.get(path)
            //         .then(response => {
            //             this.msg = response.data;
            //         })
            //         .catch((error) => {
            //             console.error(error);
            //         });
            // }, postData() {
            //     const path = 'http://localhost:5000/predict/mnist/cnn';
            //     axios.post(path, {
            //         image: this.image
            //     }).then(response => {
            //     }).catch(e => {
            //         this.errors.push(e)
            //     })
            // }
        },
    }
</script>

<style scoped>
    #preview {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    #preview img {
        height: 100px;
        max-width: 100%;
        max-height: 500px;
    }
</style>