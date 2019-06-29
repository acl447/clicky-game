(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,a,t){"use strict";t.r(a);var r=t(0),i=t.n(r),s=t(2),m=t.n(s),l=t(3),n=t(4),c=t(7),o=t(5),h=t(8);var g=function(e){return i.a.createElement("div",{className:"wrapper"},e.children)};var y=function(e){var a={backgroundColor:"#5133a4",color:"white",fontSize:"20px",margin:5,padding:5};return i.a.createElement("nav",{className:"navbar navbar-expand-lg sticky-top",style:{backgroundColor:"#5133a4",color:"white",fontSize:"20px"}},i.a.createElement("ul",{className:"navbar-nav mr-auto",style:a},i.a.createElement("li",{className:"nav-item active",style:a},i.a.createElement("a",{href:"/",style:a},i.a.createElement("strong",null,"Clicky Game"))),i.a.createElement("li",{className:"nav-item",style:a},i.a.createElement("div",null,"Click an image to begin!")),i.a.createElement("li",{className:"nav-item",style:a}," Score: ",e.score," | Top Score: ",e.topScore)))};var f=function(){return i.a.createElement("header",{className:"header",style:{backgroundColor:"slategray"}},i.a.createElement("h1",{style:{color:"white",fontSize:"60px",textAlign:"center"}},i.a.createElement("strong",null,"Clicky Game!")),i.a.createElement("h2",{style:{color:"white",fontSize:"32px",textAlign:"center"}},"Click on an image to earn points, but don't click on any more than once!"))};var d=function(e){return i.a.createElement("div",{className:"container",style:{backgroundColor:"white"}},e.children)};var u=function(){return i.a.createElement("footer",{className:"footer fixed-bottom",style:{backgroundColor:"#6956af",paddingTop:5}},i.a.createElement("div",{className:"bottom",style:{backgroundColor:"#5133a4",color:"white",fontSize:"16px"}},"Clicky Game!"))},A=t(6);var p=function(e){return i.a.createElement("div",{className:"card"},i.a.createElement("div",{className:"img-container"},i.a.createElement("img",{style:{maxHeight:"200px",maxWidth:"200px"},className:"img-fluid",id:e.id,alt:e.name,src:e.image,onClick:function(){return e.shuffleArray(e.imageArray)}})))},E=function(e){function a(){var e,t;Object(l.a)(this,a);for(var r=arguments.length,i=new Array(r),s=0;s<r;s++)i[s]=arguments[s];return(t=Object(c.a)(this,(e=Object(o.a)(a)).call.apply(e,[this].concat(i)))).state={imageArray:A,score:0,topScore:0},t.shuffleArray=function(e){console.log("shuffleArray called"),console.log("original array:",e);for(var a=e.slice(),r=a.length-1;r>0;r--){var i=Math.floor(Math.random()*(r+1)),s=[a[i],a[r]];a[r]=s[0],a[i]=s[1]}t.setState({imageArray:a}),console.log("shuffled array:",a)},t}return Object(h.a)(a,e),Object(n.a)(a,[{key:"componentDidMount",value:function(){this.shuffleArray(this.state.imageArray)}},{key:"render",value:function(){return i.a.createElement(g,null,i.a.createElement(y,{score:this.state.score,topScore:this.state.topScore}),i.a.createElement(f,null),i.a.createElement(d,null,i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col-4"},i.a.createElement(p,{id:this.state.imageArray[0].id,name:this.state.imageArray[0].name,image:this.state.imageArray[0].image,imageArray:this.state.imageArray,shuffleArray:this.shuffleArray})),i.a.createElement("div",{className:"col-4"},i.a.createElement(p,{id:this.state.imageArray[1].id,name:this.state.imageArray[1].name,image:this.state.imageArray[1].image,imageArray:this.state.imageArray,shuffleArray:this.shuffleArray})),i.a.createElement("div",{className:"col-4"},i.a.createElement(p,{id:this.state.imageArray[2].id,name:this.state.imageArray[2].name,image:this.state.imageArray[2].image,imageArray:this.state.imageArray,shuffleArray:this.shuffleArray}))),i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col-4"},i.a.createElement(p,{id:this.state.imageArray[3].id,name:this.state.imageArray[3].name,image:this.state.imageArray[3].image,imageArray:this.state.imageArray,shuffleArray:this.shuffleArray})),i.a.createElement("div",{className:"col-4"},i.a.createElement(p,{id:this.state.imageArray[4].id,name:this.state.imageArray[4].name,image:this.state.imageArray[4].image,imageArray:this.state.imageArray,shuffleArray:this.shuffleArray})),i.a.createElement("div",{className:"col-4"},i.a.createElement(p,{id:this.state.imageArray[5].id,name:this.state.imageArray[5].name,image:this.state.imageArray[5].image,imageArray:this.state.imageArray,shuffleArray:this.shuffleArray}))),i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col-4"},i.a.createElement(p,{id:this.state.imageArray[6].id,name:this.state.imageArray[6].name,image:this.state.imageArray[6].image,imageArray:this.state.imageArray,shuffleArray:this.shuffleArray})),i.a.createElement("div",{className:"col-4"},i.a.createElement(p,{id:this.state.imageArray[7].id,name:this.state.imageArray[7].name,image:this.state.imageArray[7].image,imageArray:this.state.imageArray,shuffleArray:this.shuffleArray})),i.a.createElement("div",{className:"col-4"},i.a.createElement(p,{id:this.state.imageArray[8].id,name:this.state.imageArray[8].name,image:this.state.imageArray[8].image,imageArray:this.state.imageArray,shuffleArray:this.shuffleArray}))),i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col-4"},i.a.createElement(p,{id:this.state.imageArray[9].id,name:this.state.imageArray[9].name,image:this.state.imageArray[9].image,imageArray:this.state.imageArray,shuffleArray:this.shuffleArray})),i.a.createElement("div",{className:"col-4"},i.a.createElement(p,{id:this.state.imageArray[10].id,name:this.state.imageArray[10].name,image:this.state.imageArray[10].image,imageArray:this.state.imageArray,shuffleArray:this.shuffleArray})),i.a.createElement("div",{className:"col-4"},i.a.createElement(p,{id:this.state.imageArray[11].id,name:this.state.imageArray[11].name,image:this.state.imageArray[11].image,imageArray:this.state.imageArray,shuffleArray:this.shuffleArray})))),i.a.createElement(u,null))}}]),a}(r.Component);m.a.render(i.a.createElement(E,null),document.getElementById("root"))},6:function(e){e.exports=[{id:1,name:"cat",image:"https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"},{id:2,name:"dog",image:"https://images.unsplash.com/photo-1517423440428-a5a00ad493e8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=987&q=80"},{id:3,name:"bird",image:"https://images.unsplash.com/photo-1535083783855-76ae62b2914e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"},{id:4,name:"deer",image:"https://images.unsplash.com/photo-1484406566174-9da000fda645?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=670&q=80"},{id:5,name:"hamster",image:"https://images.unsplash.com/photo-1425082661705-1834bfd09dca?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1655&q=80"},{id:6,name:"turtle",image:"https://images.unsplash.com/photo-1437622368342-7a3d73a34c8f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1920&q=80"},{id:7,name:"squirrel",image:"https://images.unsplash.com/photo-1507666405895-422eee7d517f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"},{id:8,name:"eagle",image:"https://images.unsplash.com/photo-1504350440606-81847d413a13?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2089&q=80"},{id:9,name:"frog",image:"https://images.unsplash.com/photo-1502780402662-acc01c084a25?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1680&q=80"},{id:10,name:"giraffe",image:"https://images.unsplash.com/photo-1547721064-da6cfb341d50?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80"},{id:11,name:"sheep",image:"https://images.unsplash.com/photo-1484557985045-edf25e08da73?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80"},{id:12,name:"penguin",image:"https://images.unsplash.com/photo-1508967289497-b9c85158e02d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1690&q=80"}]},9:function(e,a,t){e.exports=t(15)}},[[9,1,2]]]);
//# sourceMappingURL=main.87c18ced.chunk.js.map