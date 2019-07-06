(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,a,t){"use strict";t.r(a);var r=t(0),i=t.n(r),s=t(2),m=t.n(s),l=t(3),n=t(4),c=t(7),g=t(5),o=t(8);var h=function(e){return i.a.createElement("div",{className:"wrapper"},e.children)};var y=function(e){var a={backgroundColor:"#5133a4",color:"white",fontSize:"20px",margin:5,padding:5};return i.a.createElement("nav",{className:"navbar navbar-expand-lg sticky-top",style:{backgroundColor:"#5133a4",color:"white",fontSize:"20px"}},i.a.createElement("ul",{className:"navbar-nav",style:a},i.a.createElement("li",{className:"nav-item active",style:a},i.a.createElement("a",{href:"/",style:a},i.a.createElement("strong",null,"Clicky Game"))),i.a.createElement("li",{className:"nav-item",style:a},i.a.createElement("div",null,"Click an image to begin!")),i.a.createElement("li",{className:"nav-item float-right",style:a}," Score: ",e.score," | Top Score: ",e.topScore)))};var d=function(){return i.a.createElement("header",{className:"header",style:{backgroundColor:"slategray"}},i.a.createElement("h1",{style:{color:"white",fontSize:"60px",textAlign:"center"}},i.a.createElement("strong",null,"Clicky Game!")),i.a.createElement("h2",{style:{color:"white",fontSize:"32px",textAlign:"center"}},"Click on an image to earn points, but don't click on any more than once!"))};var A=function(e){return i.a.createElement("div",{className:"container my-5 mx-auto",style:{backgroundColor:"white"}},e.children)};var f=function(){return i.a.createElement("footer",{className:"footer fixed-bottom",style:{backgroundColor:"#6956af",paddingTop:5}},i.a.createElement("div",{className:"bottom",style:{backgroundColor:"#5133a4",color:"white",fontSize:"16px"}},"Clicky Game!"))},u=t(6);var E=function(e){var a={height:"143px",width:"143px"};return i.a.createElement("div",{className:"card mb-5",style:a},i.a.createElement("div",{className:"img-container"},i.a.createElement("img",{style:a,className:"img-fluid",id:e.id,alt:e.name,src:e.image,onClick:function(){return e.shuffleArray(e.imageArray)}})))},v=function(e){function a(){var e,t;Object(l.a)(this,a);for(var r=arguments.length,i=new Array(r),s=0;s<r;s++)i[s]=arguments[s];return(t=Object(c.a)(this,(e=Object(g.a)(a)).call.apply(e,[this].concat(i)))).state={imageArray:u,clickedArray:[],score:0,topScore:0},t.shuffleArray=function(e){console.log("shuffleArray called"),console.log("original array:",e);for(var a=e.slice(),r=a.length-1;r>0;r--){var i=Math.floor(Math.random()*(r+1)),s=[a[i],a[r]];a[r]=s[0],a[i]=s[1]}t.setState({imageArray:a}),console.log("shuffled array:",a)},t}return Object(o.a)(a,e),Object(n.a)(a,[{key:"render",value:function(){return i.a.createElement(h,null,i.a.createElement(y,{score:this.state.score,topScore:this.state.topScore}),i.a.createElement(d,null),i.a.createElement(A,null,i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col-2"}),i.a.createElement("div",{className:"col-2"},i.a.createElement(E,{id:this.state.imageArray[0].id,name:this.state.imageArray[0].name,image:this.state.imageArray[0].image,imageArray:this.state.imageArray,shuffleArray:this.shuffleArray})),i.a.createElement("div",{className:"col-1"}),i.a.createElement("div",{className:"col-3"},i.a.createElement(E,{id:this.state.imageArray[1].id,name:this.state.imageArray[1].name,image:this.state.imageArray[1].image,imageArray:this.state.imageArray,shuffleArray:this.shuffleArray})),i.a.createElement("div",{className:"col-1"},i.a.createElement(E,{id:this.state.imageArray[2].id,name:this.state.imageArray[2].name,image:this.state.imageArray[2].image,imageArray:this.state.imageArray,shuffleArray:this.shuffleArray})),i.a.createElement("div",{className:"col-1"}),i.a.createElement("div",{className:"col-2"})),i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col-2"}),i.a.createElement("div",{className:"col-2"},i.a.createElement(E,{id:this.state.imageArray[3].id,name:this.state.imageArray[3].name,image:this.state.imageArray[3].image,imageArray:this.state.imageArray,shuffleArray:this.shuffleArray})),i.a.createElement("div",{className:"col-1"}),i.a.createElement("div",{className:"col-3"},i.a.createElement(E,{id:this.state.imageArray[4].id,name:this.state.imageArray[4].name,image:this.state.imageArray[4].image,imageArray:this.state.imageArray,shuffleArray:this.shuffleArray})),i.a.createElement("div",{className:"col-1"},i.a.createElement(E,{id:this.state.imageArray[5].id,name:this.state.imageArray[5].name,image:this.state.imageArray[5].image,imageArray:this.state.imageArray,shuffleArray:this.shuffleArray})),i.a.createElement("div",{className:"col-1"}),i.a.createElement("div",{className:"col-2"})),i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col-2"}),i.a.createElement("div",{className:"col-2"},i.a.createElement(E,{id:this.state.imageArray[6].id,name:this.state.imageArray[6].name,image:this.state.imageArray[6].image,imageArray:this.state.imageArray,shuffleArray:this.shuffleArray})),i.a.createElement("div",{className:"col-1"}),i.a.createElement("div",{className:"col-3"},i.a.createElement(E,{id:this.state.imageArray[7].id,name:this.state.imageArray[7].name,image:this.state.imageArray[7].image,imageArray:this.state.imageArray,shuffleArray:this.shuffleArray})),i.a.createElement("div",{className:"col-1"},i.a.createElement(E,{id:this.state.imageArray[8].id,name:this.state.imageArray[8].name,image:this.state.imageArray[8].image,imageArray:this.state.imageArray,shuffleArray:this.shuffleArray})),i.a.createElement("div",{className:"col-1"}),i.a.createElement("div",{className:"col-2"})),i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col-2"}),i.a.createElement("div",{className:"col-2"},i.a.createElement(E,{id:this.state.imageArray[9].id,name:this.state.imageArray[9].name,image:this.state.imageArray[9].image,imageArray:this.state.imageArray,shuffleArray:this.shuffleArray})),i.a.createElement("div",{className:"col-1"}),i.a.createElement("div",{className:"col-3"},i.a.createElement(E,{id:this.state.imageArray[10].id,name:this.state.imageArray[10].name,image:this.state.imageArray[10].image,imageArray:this.state.imageArray,shuffleArray:this.shuffleArray})),i.a.createElement("div",{className:"col-1"},i.a.createElement(E,{id:this.state.imageArray[11].id,name:this.state.imageArray[11].name,image:this.state.imageArray[11].image,imageArray:this.state.imageArray,shuffleArray:this.shuffleArray})),i.a.createElement("div",{className:"col-1"}),i.a.createElement("div",{className:"col-2"}))),i.a.createElement(f,null))}}]),a}(r.Component);m.a.render(i.a.createElement(v,null),document.getElementById("root"))},6:function(e){e.exports=[{id:1,name:"cat",image:"/images/cat.jpg"},{id:2,name:"dog",image:"/images/dog.jpg"},{id:3,name:"bird",image:"/images/bird.jpg"},{id:4,name:"deer",image:"/images/deer.jpg"},{id:5,name:"hamster",image:"/images/hamster.jpg"},{id:6,name:"turtle",image:"/images/turtle.jpg"},{id:7,name:"squirrel",image:"/images/squirrel.jpg"},{id:8,name:"eagle",image:"/images/eagle.jpg"},{id:9,name:"frog",image:"/images/frog.jpg"},{id:10,name:"giraffe",image:"/images/giraffe.jpg"},{id:11,name:"sheep",image:"/images/sheep.jpg"},{id:12,name:"penguin",image:"/images/penguin.jpg"}]},9:function(e,a,t){e.exports=t(15)}},[[9,1,2]]]);
//# sourceMappingURL=main.9d3d9491.chunk.js.map