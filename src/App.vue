<template>
    <div id="app">
        <div class="main-container">
            <div id="nav">
                <b-navbar id="nav_bar" toggleable="md" type="light" variant="light">
                    <b-navbar-brand href="#">
                        <img src="https://d3gec4yjx788g8.cloudfront.net/platform/3282/assets/logo.png"
                             style="max-width: 250px;" alt="Logo"/>
                    </b-navbar-brand>
                    <b-navbar-toggle id="collapse-button" target="nav-collapse"></b-navbar-toggle>
                    <b-collapse id="nav-collapse" is-nav>
                        <b-navbar-nav class="ml-auto">
                            <b-nav-item to="/">Home</b-nav-item>
                            <b-nav-item to="/art_exhibition">IB Art Exhibition</b-nav-item>
                            <b-nav-item to="/riff">RIFF</b-nav-item>
                            <b-nav-item-dropdown text="Arts Awards 2020" right>
                                <!--                            <b-dropdown-item to="#"></b-dropdown-item>-->
                                <!--                            <b-dropdown-divider/>-->
                                <b-dropdown-item to="/award_list">Award List</b-dropdown-item>
                                <b-dropdown-item to="/award_video">Arts Award Video</b-dropdown-item>
                            </b-nav-item-dropdown>
                            <b-nav-item to="/music">Music Gallery</b-nav-item>
                            <b-nav-item to="/theatre">Theatre Gallery</b-nav-item>
                        </b-navbar-nav>
                    </b-collapse>
                </b-navbar>
            </div>
            <br>
            <router-view/>
        </div>
        <footer class="page-footer font-small text-black-50 footer">
            <div class="footer-copyright text-center py-3">© 2020 Copyright: Ridley College</div>
        </footer>
    </div>
</template>

<style>
    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
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
        min-height: calc(100vh - 56px);
    }

    .footer {
        background-color: rgb(248, 249, 250);
        height: 56px;
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
