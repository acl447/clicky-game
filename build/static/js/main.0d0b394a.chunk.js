(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,a,t){"use strict";t.r(a);var r=t(0),c=t.n(r),i=t(2),n=t.n(i),l=t(3),s=t(4),o=t(7),m=t(5),g=t(8);var d=function(e){return c.a.createElement("div",{className:(e.shakeWrapper,"wrapper")},e.images)};var u=function(e){var a={backgroundColor:"#5133a4",color:"white",fontSize:"20px",margin:5,padding:5};return c.a.createElement("nav",{className:"navbar navbar-expand-lg sticky-top",style:{backgroundColor:"#5133a4",color:"white",fontSize:"20px"}},c.a.createElement("ul",{className:"navbar-nav",style:a},c.a.createElement("li",{className:"nav-item active",style:a},c.a.createElement("a",{href:"/",style:a},c.a.createElement("strong",null,"Clicky Game"))),c.a.createElement("li",{className:"nav-item",style:a},c.a.createElement("div",null,"Click an image to begin!")),c.a.createElement("li",{className:"nav-item float-right",style:a}," Score: ",e.score," | Top Score: ",e.topScore),c.a.createElement("li",{className:"message",style:a},c.a.createElement("strong",null,e.message))))};var p=function(){return c.a.createElement("header",{className:"header",style:{backgroundColor:"slategray"}},c.a.createElement("h1",{style:{color:"white",fontSize:"60px",textAlign:"center"}},c.a.createElement("strong",null,"Clicky Game!")),c.a.createElement("h2",{style:{color:"white",fontSize:"32px",textAlign:"center"}},"Click on an image to earn points, but don't click on any more than once!"))};var k=function(e){return c.a.createElement("div",{className:"container my-5 mx-auto",style:{backgroundColor:"white"}},e.children)};var f=function(){return c.a.createElement("footer",{className:"footer fixed-bottom",style:{backgroundColor:"#6956af",paddingTop:5}},c.a.createElement("div",{className:"bottom",style:{backgroundColor:"#5133a4",color:"white",fontSize:"16px"}},"Clicky Game!"))},h=t(6);var y=function(e){var a={height:"143px",width:"143px"};return c.a.createElement("div",{className:"card mb-5",style:a},c.a.createElement("div",{className:"img-container"},c.a.createElement("img",{style:a,className:"img-fluid",id:e.id,alt:e.name,src:e.image,onClick:function(){return e.clickPicture(e.id)}})))},v=function(e){function a(){var e,t;Object(l.a)(this,a);for(var r=arguments.length,c=new Array(r),i=0;i<r;i++)c[i]=arguments[i];return(t=Object(o.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(c)))).state={images:h,clickedArray:[],score:0,topScore:0,message:"",shakeit:"false"},t.clickPicture=function(e){var a=t.shuffleArray(t.state.images);t.setState({images:a}),t.state.clickedArray.includes(e)?t.setState({score:0,clickedArray:[],message:"Picture has already been clicked! Click for a new game!",shakeit:"true"}):t.setState({clickedArray:t.state.clickedArray.concat([e]),score:t.state.score+1,message:"Correct guess! You rock!",shakeit:"false"}),t.state.score>t.state.topScore&&t.setState({topScore:t.state.score})},t.shuffleArray=function(e){for(var a=e.length-1;a>0;a--){var t=Math.floor(Math.random()*(a+1)),r=[e[t],e[a]];e[a]=r[0],e[t]=r[1],console.log(e[a]),console.log(e[t])}return e},t}return Object(g.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){var e=this;return c.a.createElement("div",{className:"App"},c.a.createElement(u,{score:this.state.score,topScore:this.state.topScore,message:this.state.message}),c.a.createElement(p,null),c.a.createElement(k,null,c.a.createElement(d,{shakeWrapper:this.state.shakeit,images:this.state.images.map(function(a){return c.a.createElement(y,{id:a.id,key:a.id,name:a.name,image:a.image,clickPicture:e.clickPicture})})})),c.a.createElement(f,null))}}]),a}(r.Component);n.a.render(c.a.createElement(v,null),document.getElementById("root"))},6:function(e){e.exports=[{id:1,name:"cat",image:"./images/cat.jpg",clicked:!1},{id:2,name:"dog",image:"./images/dog.jpg",clicked:!1},{id:3,name:"bird",image:"./images/bird.jpg",clicked:!1},{id:4,name:"deer",image:"./images/deer.jpg",clicked:!1},{id:5,name:"hamster",image:"./images/hamster.jpg",clicked:!1},{id:6,name:"turtle",image:"./images/turtle.jpg",clicked:!1},{id:7,name:"squirrel",image:"./images/squirrel.jpg",clicked:!1},{id:8,name:"eagle",image:"./images/eagle.jpg",clicked:!1},{id:9,name:"frog",image:"./images/frog.jpg",clicked:!1},{id:10,name:"giraffe",image:"./images/giraffe.jpg",clicked:!1},{id:11,name:"sheep",image:"./images/sheep.jpg",clicked:!1},{id:12,name:"penguin",image:"./images/penguin.jpg",clicked:!1}]},9:function(e,a,t){e.exports=t(15)}},[[9,1,2]]]);
//# sourceMappingURL=main.0d0b394a.chunk.js.map