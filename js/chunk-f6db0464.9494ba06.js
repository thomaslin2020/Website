(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-f6db0464"],{"2a86":function(t,e,i){"use strict";var a=i("4683"),s=i.n(a);s.a},4683:function(t,e,i){},"735b":function(t){t.exports=JSON.parse('{"artists":[{"image":"https://bbk12e1-cdn.myschoolcdn.com/ftpimages/180/user/large_user_5593181_907.jpg","first_name":"Anna","last_name":"Green","url":"Anna","photos":["1.jpeg","2.jpeg","3.jpeg","4.jpeg","5.jpeg","6.jpeg"]},{"image":"https://bbk12e1-cdn.myschoolcdn.com/ftpimages/180/user/large_user_4859358_647.jpg","first_name":"(Christina) Shiyang","last_name":"Chen","url":"Christina","photos":["1.jpeg","2.jpeg","3.jpeg","4.jpeg","5.jpeg","6.jpeg","7.jpeg","8.jpeg","9.jpeg","10.jpeg"]},{"image":"https://bbk12e1-cdn.myschoolcdn.com/ftpimages/180/user/large_user_4791562_266.jpg","first_name":"(Doris) Huihui","last_name":"Zhu","url":"Doris","photos":["1.jpeg","2.jpeg","3.jpeg","4.jpeg","5.jpeg","6.jpeg","7.jpeg","8.jpeg","9.jpeg","10.jpeg"]},{"image":"https://bbk12e1-cdn.myschoolcdn.com/ftpimages/180/user/large_user_4104559_919.jpg?resize=8100,8100","first_name":"(Jane) Jiayi","last_name":"Wang","url":"Jane","photos":["1.jpeg","2.jpeg","3.jpeg","4.jpeg","5.jpeg","6.jpeg"]},{"image":"https://bbk12e1-cdn.myschoolcdn.com/ftpimages/180/user/large_user_4388451_656.jpg","first_name":"(Kate) Katsiaryna","last_name":"Zialenskaya","url":"Kate","photos":["1.jpeg","2.jpeg","3.jpeg","4.jpeg","5.jpeg","6.jpeg","7.jpeg","8.jpeg","9.jpeg","10.jpeg"]},{"image":"https://bbk12e1-cdn.myschoolcdn.com/ftpimages/180/user/large_user_4772767_512.jpg","first_name":"Miranda","last_name":"Teta","url":"Miranda","photos":["1.jpeg","2.jpeg","3.jpeg","4.jpeg","5.jpeg","6.jpeg","7.jpeg","8.jpeg","9.jpeg","10.jpeg"]},{"image":"https://bbk12e1-cdn.myschoolcdn.com/ftpimages/180/user/large_user_4318805_658.jpg?resize=8100,8100","first_name":"(Henry) Feidong","last_name":"Song","url":"Henry","photos":["1.jpeg","2.jpeg","3.jpeg","4.jpeg","5.jpeg","6.jpeg","7.jpeg","8.jpeg","9.jpeg"]},{"image":"https://bbk12e1-cdn.myschoolcdn.com/ftpimages/180/user/large_user_4525150_606.jpg?resize=8100,8100","first_name":"(Matt) Chengkai","last_name":"Xue","url":"Matt","photos":["1.jpeg","2.jpeg","3.jpeg","4.jpeg","5.jpeg"]},{"image":"https://bbk12e1-cdn.myschoolcdn.com/ftpimages/180/user/large_user_4404490_931.jpg?resize=8100,8100","first_name":"(Marie) Jose Marie","last_name":"Omulen","url":"Marie","photos":["1.jpeg","2.jpeg","3.jpeg","4.jpeg","5.jpeg","6.jpeg","7.jpeg","8.jpeg","9.jpeg","10.jpeg"]}]}')},b7e4:function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"bar",staticStyle:{display:"flex"}},[i("div",{attrs:{id:"left"}},[t.windowWidth>600?i("div",[i("router-link",{staticStyle:{"text-decoration":"none"},attrs:{to:"/art_exhibition/"+t.indices[0]}},[i("b-button",{staticClass:"pagination-button",attrs:{variant:"outline"},on:{click:t.reload}},[i("p",{staticClass:"text"},[i("b",[t._v(t._s(t.capitalize(t.indices[0]))+"'s Art")])])])],1)],1):i("div",[i("router-link",{staticStyle:{"text-decoration":"none"},attrs:{to:"/art_exhibition/"+t.indices[0]}},[i("b-button",{staticClass:"pagination-button",attrs:{variant:"outline"},on:{click:t.reload}},[i("p",{staticClass:"text"},[i("b",[t._v("←")])])])],1)],1),i("br")]),i("div",{attrs:{id:"middle"}},[i("h1",[t._v(" "+t._s(t.capitalize(t.artist_name))+"'s Art Gallery ")]),t.windowWidth<600?i("br"):t._e()]),i("div",{attrs:{id:"right"}},[t.windowWidth>600?i("div",[i("router-link",{staticStyle:{"text-decoration":"none"},attrs:{to:"/art_exhibition/"+t.indices[1]}},[i("b-button",{staticClass:"pagination-button",attrs:{variant:"outline"},on:{click:t.reload}},[i("p",{staticClass:"text"},[i("b",[t._v(t._s(t.capitalize(t.indices[1]))+"'s Art")])])])],1)],1):i("div",[i("router-link",{staticStyle:{"text-decoration":"none"},attrs:{to:"/art_exhibition/"+t.indices[1]}},[i("b-button",{staticClass:"pagination-button",attrs:{variant:"outline"},on:{click:t.reload}},[i("p",{staticClass:"text"},[i("b",[t._v("→")])])])],1),i("br")],1)])]),i("div",{staticClass:"artist-images"},[t.windowWidth>600?i("div",[i("Photos",{attrs:{photos:t.photos,fade:!0,speed:750}})],1):i("div",[i("ul",t._l(t.photos,(function(t){return i("li",{key:t},[i("img",{staticStyle:{width:"100%","max-width":"100%","padding-bottom":"10px"},attrs:{src:t,alt:t}})])})),0)])])])},s=[],n=(i("7db0"),i("c740"),i("caad"),i("fb6a"),i("b0c0"),i("2532"),i("5fed")),r=i("735b"),o={name:"Artist",components:{Photos:n["a"]},data:function(){return{artist_name:this.$route.params.name,photos:this.get_photos(),artist_names:this.get_artist_names(),indices:this.get_indices()}},methods:{capitalize:function(t){return t[0].toUpperCase()+t.slice(1)},print_:function(t){console.log(t)},get_artist_names:function(){for(var t=[],e=0;e<r.artists.length;e++)t.push(r.artists[e].url);return t},mod:function(t,e){return(t%e+e)%e},reload:function(){setTimeout((function(){window.location.reload()}),100)},get_indices:function(){var t=this,e=[],i=this.get_artist_names(),a=i.findIndex((function(e){return e===t.$route.params.name}));return e.push(i[this.mod(a-1,i.length)]),e.push(i[this.mod(a+1,i.length)]),e},get_photos:function(){var t=this;if(void 0!==r.artists.find((function(e){return e.url===t.$route.params.name}))){for(var e=r.artists.find((function(e){return e.url===t.$route.params.name})).photos,i=0;i<e.length;i++)e[i].includes("master")||(e[i]=this.$static+"art_exhibition/"+this.$route.params.name+"/"+e[i]);return this.print_(e),e}}}},p=o,g=(i("2a86"),i("2877")),c=Object(g["a"])(p,a,s,!1,null,"5f8e0829",null);e["default"]=c.exports},c740:function(t,e,i){"use strict";var a=i("23e7"),s=i("b727").findIndex,n=i("44d2"),r=i("ae40"),o="findIndex",p=!0,g=r(o);o in[]&&Array(1)[o]((function(){p=!1})),a({target:"Array",proto:!0,forced:p||!g},{findIndex:function(t){return s(this,t,arguments.length>1?arguments[1]:void 0)}}),n(o)}}]);
//# sourceMappingURL=chunk-f6db0464.9494ba06.js.map