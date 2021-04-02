<template>
    <div id="app">
        <div class="main-container">
            <div id="nav">
                <b-navbar id="nav_bar" toggleable="md" type="light" variant="light">
                    <b-navbar-brand to="/award_video">
                        <img src="https://d3gec4yjx788g8.cloudfront.net/platform/3282/assets/logo.png"
                             style="max-width: 250px;" alt="Logo"/>
                    </b-navbar-brand>
                    <b-navbar-toggle id="collapse-button" target="nav-collapse"></b-navbar-toggle>
                    <b-collapse id="nav-collapse" is-nav>
                        <b-navbar-nav class="ml-auto">
<!--                            <b-nav-item to="/">Home</b-nav-item>-->
                            <b-nav-item-dropdown text="IB Art Exhibition" right>
                                <b-dropdown-item to="/art_video">Opening Video</b-dropdown-item>
                                <b-dropdown-item to="/art_exhibition">Art Gallery</b-dropdown-item>
                            </b-nav-item-dropdown>
                            <b-nav-item to="/design_tech">Design Technology</b-nav-item>
                            <b-nav-item to="/riff">RIFF</b-nav-item>
                            <b-nav-item-dropdown text="Arts Awards 2020" right>
                                <b-dropdown-item to="/award_list">Award List</b-dropdown-item>
                                <b-dropdown-item to="/award_video">Arts Award Video</b-dropdown-item>
                            </b-nav-item-dropdown>
                            <b-nav-item-dropdown text="Arts Gallery" right>
                                <b-dropdown-item to="/art_gallery">Visual Arts</b-dropdown-item>
                                <b-dropdown-item to="/media">Media Arts</b-dropdown-item>
                            </b-nav-item-dropdown>
                            <b-nav-item to="/music">Music Gallery</b-nav-item>
                            <b-nav-item-dropdown text="Theatre Gallery" right>
                                <b-dropdown-item to="/theatre">Theatre Gallery</b-dropdown-item>
                                <b-dropdown-item to="/theatre_ib2">IB2 Theatre</b-dropdown-item>
                            </b-nav-item-dropdown>
                        </b-navbar-nav>
                    </b-collapse>
                </b-navbar>
            </div>
            <br>
            <router-view/>
        </div>
        <router-link to="/about" class="footer-link" style="text-decoration: none; color: inherit;">
            <footer class="page-footer font-small footer">
                <div class="footer-copyright text-center footer-text">
                </div>
            </footer>
        </router-link>
    </div>
</template>

<style>
    #app {
        font-family: "Goudy Old Style", serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        /* background-image: url("./assets/mainbackground.jpg"); */
        background-repeat: no-repeat;
        background-position: center; /* Center the image */
        background-size: cover; /* Resize the background image to cover the entire container */
        /*background-color: rgba(230, 97, 27, 0.25);*/
        background-color: #F2F2F2;
    }

    h1 {
        font-family: "Goudy Old Style", serif;
    }

    #collapse-button {
        color: black;
    }

    #nav_bar {
        /*overflow: scroll;*/
        z-index: 10;
        position: sticky;
        top: 0; /* Position the navbar at the top of the page */
        width: 100%; /* Full width */
    }

    .nav-item {
        font-weight: bold;
        color: #2c3e50;
    }

    #nav a {
        font-weight: bold;
        color: #2c3e50;
    }

    #nav a.router-link-exact-active {
        color: #E6611B;
    }

    .line-div {
        width: 30em;
        max-width: 80%;
        display: inline-block;
    }

    .parent-line-div {
        text-align: center;
        position: relative;
    }

    .main-container {
        min-height: calc(100vh - 60px);
    }
    /*.footer-text{*/
    /*    display: inline-flex;*/
    /*    flex-direction: column;*/
    /*    justify-content: center;*/
    /*    transition: .2s;*/
    /*}*/

    .footer {
        background-color: rgb(242, 242, 242);
        height: 60px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        transition: .25s;
    }

    .footer:hover {
        background-color: rgb(242, 242, 242);
    }

    .footer:after {
        content: "© 2020 Copyright: Ridley College. Designed by Thomas Lin, David Meng, Phoenix Gao."
    }

    .footer:hover:after {
        content: "About Us!"
    }

    h2 {
        width: 100%;
        text-align: center;
        border-bottom: 1px solid #000;
        line-height: 0.1em;
        display: inline-block;
        margin: 10px 0 20px;
    }

    h2 span {
        background: #fff;
        padding: 0 20px;
    }
</style>
