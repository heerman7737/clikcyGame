(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,function(e){e.exports=[{id:"1",image:"https://vignette.wikia.nocookie.net/aobuta/images/d/d8/Mai_Sakurajima_Anime_-_Screenshot_1.png/revision/latest/scale-to-width-down/1000?cb=20181016030235"},{id:"2",image:"https://vignette.wikia.nocookie.net/aobuta/images/7/77/Sakuta_Azusagawa_Anime_-_Screenshot_1.png/revision/latest/scale-to-width-down/1000?cb=20181016030234"},{id:"3",image:"https://vignette.wikia.nocookie.net/aobuta/images/7/7f/Kaede_Azuzugawa_anime.jpg/revision/latest/scale-to-width-down/280?cb=20181025214659"},{id:"4",image:"https://vignette.wikia.nocookie.net/aobuta/images/5/5a/Shoko.png/revision/latest/scale-to-width-down/300?cb=20181030103852"},{id:"5",image:"https://vignette.wikia.nocookie.net/aobuta/images/2/21/Nodoka_Toyohama_Anime.png/revision/latest/scale-to-width-down/280?cb=20181205215054"},{id:"6",image:"https://vignette.wikia.nocookie.net/aobuta/images/2/22/Rio_Futaba_Anime_-_Screenshot_1.png/revision/latest/scale-to-width-down/300?cb=20181016030235"},{id:"7",image:"https://vignette.wikia.nocookie.net/aobuta/images/0/01/Yuuma.png/revision/latest/scale-to-width-down/300?cb=20181107004932"},{id:"8",image:"https://vignette.wikia.nocookie.net/aobuta/images/d/d0/Saki.png/revision/latest/scale-to-width-down/300?cb=20181113023924"},{id:"9",image:"https://vignette.wikia.nocookie.net/aobuta/images/4/46/Tomoe_Koga_Anime.png/revision/latest/scale-to-width-down/300?cb=20181107005439"},{id:"10",image:"https://vignette.wikia.nocookie.net/aobuta/images/6/69/Fumika_Nanjou_Anime.png/revision/latest/scale-to-width-down/300?cb=20181113023600"},{id:"11",image:"https://vignette.wikia.nocookie.net/aobuta/images/5/5a/Mai%27s_mother_Anime.png/revision/latest/scale-to-width-down/300?cb=20181113022334"},{id:"12",image:"https://vignette.wikia.nocookie.net/aobuta/images/9/9f/Shoko_introduces_herself.png/revision/latest/scale-to-width-down/300?cb=20181108024808"}]},,,,,,,,function(e,t,a){e.exports=a(20)},,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),o=a(3),c=a.n(o),r=(a(15),a(4)),s=a(5),l=a(7),u=a(6),d=a(8),m=(a(16),a(17),function(e){return i.a.createElement("header",null,i.a.createElement("nav",null,i.a.createElement("h1",null,"Let's Play A Memory Game"),i.a.createElement("h2",null,"Click on an image to earn points, but don't click on any more than once!")))}),g=(a(18),function(e){return i.a.createElement("article",null,i.a.createElement("p",null,e.status," | Score: ",e.currentScore," | Top Score: ",e.topScore))}),h=(a(19),function(e){return i.a.createElement("section",{id:e.id,value:e.id,onClick:function(){return e.clickedPlayer(e.id)}},i.a.createElement("article",null,i.a.createElement("img",{src:e.image,className:"db",alt:"game-char"})))}),w=a(1),p=function(e){for(var t=e.length;t>0;){var a=Math.floor(Math.random()*t),n=e[--t];e[t]=e[a],e[a]=n}return e},k=function(e){function t(){var e,a;Object(r.a)(this,t);for(var n=arguments.length,i=new Array(n),o=0;o<n;o++)i[o]=arguments[o];return(a=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(i)))).state={currentScore:0,topScore:0,result:"",clicked:[],Icons:w,gameOver:!1},a.clickedPlayer=function(e){console.log("Picture clicked with id: ".concat(e)),a.state.clicked.includes(e)?a.reset():(a.pointIncrease(),a.state.clicked.push(e),a.setState({gameOver:!1}))},a.pointIncrease=function(){var e=a.state.currentScore+1;e===a.state.Icons.length?a.setState({result:"Winner!",topScore:e,currentScore:0,clicked:[],gameOver:!1}):e>a.state.topScore?a.setState({topScore:e,currentScore:e,result:"New high score!"}):a.setState({currentScore:e,result:"You got this!"}),a.resetIcon()},a.reset=function(){a.setState({points:0,currentScore:0,topScore:a.state.topScore,result:"GAME OVER",clicked:[],gameOver:!0}),window.location.reload()},a.resetIcon=function(){var e=p(w);a.setState({Icons:e})},a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.setState({result:"Click a character to get started"})}},{key:"render",value:function(){var e=this;return i.a.createElement(i.a.Fragment,null,i.a.createElement(m,null),i.a.createElement(g,{topScore:this.state.topScore,currentScore:this.state.currentScore,status:this.state.result}),i.a.createElement("div",{className:"main"},this.state.Icons.map(function(t){return i.a.createElement(h,{id:t.id,image:t.image,clickedPlayer:e.clickedPlayer})})))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(i.a.createElement(k,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[9,1,2]]]);
//# sourceMappingURL=main.a1a6dc97.chunk.js.map