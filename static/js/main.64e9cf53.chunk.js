(this.webpackJsonpblackjack=this.webpackJsonpblackjack||[]).push([[0],[,,,,,,,function(e,u,t){e.exports=t(17)},,,,,function(e,u,t){},function(e,u,t){},function(e,u,t){},function(e,u,t){},function(e,u,t){},function(e,u,t){"use strict";t.r(u);var a=t(0),s=t.n(a),i=t(6),l=t.n(i),v=(t(12),t(1)),n=t(2),r=t(4),c=t(3),o=(t(13),t(14),function(e){Object(r.a)(t,e);var u=Object(c.a)(t);function t(){var e;return Object(v.a)(this,t),(e=u.call(this)).state={randomDeg:2*Math.abs(Math.random())>1?"rotate(-".concat(6*Math.random(),"deg)"):"rotate(".concat(6*Math.random(),"5deg)")},e}return Object(n.a)(t,[{key:"render",value:function(){var e=this.props,u=e.suit,t=e.value;return s.a.createElement("div",{className:"card-container"},s.a.createElement("div",{className:"card",style:{transform:this.state.randomDeg}},s.a.createElement("div",{className:"card-header",style:{color:"\u2665"===u||"\u2666"===u?"red":"black"}},u,t),s.a.createElement("div",{className:"card-suit",style:{color:"\u2665"===u||"\u2666"===u?"red":"black"}},u),s.a.createElement("div",{className:"card-footer",style:{color:"\u2665"===u||"\u2666"===u?"red":"black"}},u,t)))}}]),t}(s.a.Component)),d=(t(15),function(e){Object(r.a)(t,e);var u=Object(c.a)(t);function t(){var e;return Object(v.a)(this,t),(e=u.call(this)).setViewBet=function(){return e.setState({view:"bet"})},e.setViewControls=function(){return e.setState({view:"controls"})},e.state={view:"controls"},e}return Object(n.a)(t,[{key:"render",value:function(){var e=this.props,u=e.id,t=e.balance,a=e.hand,i=e.isBust,l=e.isStick,v=e.hitFunction,n=e.stickFunction,r=e.dealer,c=e.betFunction,d=e.bet,h=e.isWinner,m=e.isLoser,p=e.isDraw,b=e.isOut,y=this.state.view,f=!!(i||l||b),k=d<1,E=a&&a.length<1,B=a&&0!==a.length&&b?"Out!":i?"Bust!":p?"Draw!":m?"Loser!":h?"Winner!":l?"Stick!":"";return b&&(B="Out!"),s.a.createElement("div",{className:"player-container"},s.a.createElement("div",{className:"player-controls-container"},s.a.createElement("div",{className:"player-status"},B),s.a.createElement("div",{hidden:r||f},"Balance: ",t,", Bet: ",d),s.a.createElement("div",{hidden:r||f||"bet"!==y},s.a.createElement("input",{type:"Button",value:"Back",onClick:this.setViewControls}),s.a.createElement("input",{type:"Button",value:"10",onClick:function(){return c(u,10)}}),s.a.createElement("input",{type:"Button",value:"20",onClick:function(){return c(u,20)}}),s.a.createElement("input",{type:"Button",value:"50",onClick:function(){return c(u,50)}}),s.a.createElement("input",{type:"Button",value:"100",onClick:function(){return c(u,100)}})),s.a.createElement("div",{hidden:r||f||"controls"!==y},s.a.createElement("input",{disabled:f||k,type:"button",value:"Hit",onClick:function(){return v(u)},className:f||k?"disabled":""}),s.a.createElement("input",{disabled:f||E,type:"button",value:"Stick",onClick:function(){return n(u)},className:f||E?"disabled":""}),s.a.createElement("input",{disabled:f||!E,type:"button",value:"Bet",onClick:this.setViewBet,className:f||!E?"disabled":""}))),s.a.createElement("div",{className:"player-cards-container"},a&&a.map((function(e,u){return s.a.createElement(o,{key:u,suit:e.suit,value:e.value,index:u})}))))}}]),t}(s.a.Component)),h=(t(16),[{suit:"\u2665",value:2},{suit:"\u2665",value:3},{suit:"\u2665",value:4},{suit:"\u2665",value:5},{suit:"\u2665",value:6},{suit:"\u2665",value:7},{suit:"\u2665",value:8},{suit:"\u2665",value:9},{suit:"\u2665",value:10},{suit:"\u2665",value:"J"},{suit:"\u2665",value:"Q"},{suit:"\u2665",value:"K"},{suit:"\u2665",value:"A"},{suit:"\u2666",value:2},{suit:"\u2666",value:3},{suit:"\u2666",value:4},{suit:"\u2666",value:5},{suit:"\u2666",value:6},{suit:"\u2666",value:7},{suit:"\u2666",value:8},{suit:"\u2666",value:9},{suit:"\u2666",value:10},{suit:"\u2666",value:"J"},{suit:"\u2666",value:"Q"},{suit:"\u2666",value:"K"},{suit:"\u2666",value:"A"},{suit:"\u2663",value:2},{suit:"\u2663",value:3},{suit:"\u2663",value:4},{suit:"\u2663",value:5},{suit:"\u2663",value:6},{suit:"\u2663",value:7},{suit:"\u2663",value:8},{suit:"\u2663",value:9},{suit:"\u2663",value:10},{suit:"\u2663",value:"J"},{suit:"\u2663",value:"Q"},{suit:"\u2663",value:"K"},{suit:"\u2663",value:"A"},{suit:"\u2660",value:2},{suit:"\u2660",value:3},{suit:"\u2660",value:4},{suit:"\u2660",value:5},{suit:"\u2660",value:6},{suit:"\u2660",value:7},{suit:"\u2660",value:8},{suit:"\u2660",value:9},{suit:"\u2660",value:10},{suit:"\u2660",value:"J"},{suit:"\u2660",value:"Q"},{suit:"\u2660",value:"K"},{suit:"\u2660",value:"A"},{suit:"\u2665",value:2},{suit:"\u2665",value:3},{suit:"\u2665",value:4},{suit:"\u2665",value:5},{suit:"\u2665",value:6},{suit:"\u2665",value:7},{suit:"\u2665",value:8},{suit:"\u2665",value:9},{suit:"\u2665",value:10},{suit:"\u2665",value:"J"},{suit:"\u2665",value:"Q"},{suit:"\u2665",value:"K"},{suit:"\u2665",value:"A"},{suit:"\u2666",value:2},{suit:"\u2666",value:3},{suit:"\u2666",value:4},{suit:"\u2666",value:5},{suit:"\u2666",value:6},{suit:"\u2666",value:7},{suit:"\u2666",value:8},{suit:"\u2666",value:9},{suit:"\u2666",value:10},{suit:"\u2666",value:"J"},{suit:"\u2666",value:"Q"},{suit:"\u2666",value:"K"},{suit:"\u2666",value:"A"},{suit:"\u2663",value:2},{suit:"\u2663",value:3},{suit:"\u2663",value:4},{suit:"\u2663",value:5},{suit:"\u2663",value:6},{suit:"\u2663",value:7},{suit:"\u2663",value:8},{suit:"\u2663",value:9},{suit:"\u2663",value:10},{suit:"\u2663",value:"J"},{suit:"\u2663",value:"Q"},{suit:"\u2663",value:"K"},{suit:"\u2663",value:"A"},{suit:"\u2660",value:2},{suit:"\u2660",value:3},{suit:"\u2660",value:4},{suit:"\u2660",value:5},{suit:"\u2660",value:6},{suit:"\u2660",value:7},{suit:"\u2660",value:8},{suit:"\u2660",value:9},{suit:"\u2660",value:10},{suit:"\u2660",value:"J"},{suit:"\u2660",value:"Q"},{suit:"\u2660",value:"K"},{suit:"\u2660",value:"A"},{suit:"\u2665",value:2},{suit:"\u2665",value:3},{suit:"\u2665",value:4},{suit:"\u2665",value:5},{suit:"\u2665",value:6},{suit:"\u2665",value:7},{suit:"\u2665",value:8},{suit:"\u2665",value:9},{suit:"\u2665",value:10},{suit:"\u2665",value:"J"},{suit:"\u2665",value:"Q"},{suit:"\u2665",value:"K"},{suit:"\u2665",value:"A"},{suit:"\u2666",value:2},{suit:"\u2666",value:3},{suit:"\u2666",value:4},{suit:"\u2666",value:5},{suit:"\u2666",value:6},{suit:"\u2666",value:7},{suit:"\u2666",value:8},{suit:"\u2666",value:9},{suit:"\u2666",value:10},{suit:"\u2666",value:"J"},{suit:"\u2666",value:"Q"},{suit:"\u2666",value:"K"},{suit:"\u2666",value:"A"},{suit:"\u2663",value:2},{suit:"\u2663",value:3},{suit:"\u2663",value:4},{suit:"\u2663",value:5},{suit:"\u2663",value:6},{suit:"\u2663",value:7},{suit:"\u2663",value:8},{suit:"\u2663",value:9},{suit:"\u2663",value:10},{suit:"\u2663",value:"J"},{suit:"\u2663",value:"Q"},{suit:"\u2663",value:"K"},{suit:"\u2663",value:"A"},{suit:"\u2660",value:2},{suit:"\u2660",value:3},{suit:"\u2660",value:4},{suit:"\u2660",value:5},{suit:"\u2660",value:6},{suit:"\u2660",value:7},{suit:"\u2660",value:8},{suit:"\u2660",value:9},{suit:"\u2660",value:10},{suit:"\u2660",value:"J"},{suit:"\u2660",value:"Q"},{suit:"\u2660",value:"K"},{suit:"\u2660",value:"A"},{suit:"\u2665",value:2},{suit:"\u2665",value:3},{suit:"\u2665",value:4},{suit:"\u2665",value:5},{suit:"\u2665",value:6},{suit:"\u2665",value:7},{suit:"\u2665",value:8},{suit:"\u2665",value:9},{suit:"\u2665",value:10},{suit:"\u2665",value:"J"},{suit:"\u2665",value:"Q"},{suit:"\u2665",value:"K"},{suit:"\u2665",value:"A"},{suit:"\u2666",value:2},{suit:"\u2666",value:3},{suit:"\u2666",value:4},{suit:"\u2666",value:5},{suit:"\u2666",value:6},{suit:"\u2666",value:7},{suit:"\u2666",value:8},{suit:"\u2666",value:9},{suit:"\u2666",value:10},{suit:"\u2666",value:"J"},{suit:"\u2666",value:"Q"},{suit:"\u2666",value:"K"},{suit:"\u2666",value:"A"},{suit:"\u2663",value:2},{suit:"\u2663",value:3},{suit:"\u2663",value:4},{suit:"\u2663",value:5},{suit:"\u2663",value:6},{suit:"\u2663",value:7},{suit:"\u2663",value:8},{suit:"\u2663",value:9},{suit:"\u2663",value:10},{suit:"\u2663",value:"J"},{suit:"\u2663",value:"Q"},{suit:"\u2663",value:"K"},{suit:"\u2663",value:"A"},{suit:"\u2660",value:2},{suit:"\u2660",value:3},{suit:"\u2660",value:4},{suit:"\u2660",value:5},{suit:"\u2660",value:6},{suit:"\u2660",value:7},{suit:"\u2660",value:8},{suit:"\u2660",value:9},{suit:"\u2660",value:10},{suit:"\u2660",value:"J"},{suit:"\u2660",value:"Q"},{suit:"\u2660",value:"K"},{suit:"\u2660",value:"A"},{suit:"\u2665",value:2},{suit:"\u2665",value:3},{suit:"\u2665",value:4},{suit:"\u2665",value:5},{suit:"\u2665",value:6},{suit:"\u2665",value:7},{suit:"\u2665",value:8},{suit:"\u2665",value:9},{suit:"\u2665",value:10},{suit:"\u2665",value:"J"},{suit:"\u2665",value:"Q"},{suit:"\u2665",value:"K"},{suit:"\u2665",value:"A"},{suit:"\u2666",value:2},{suit:"\u2666",value:3},{suit:"\u2666",value:4},{suit:"\u2666",value:5},{suit:"\u2666",value:6},{suit:"\u2666",value:7},{suit:"\u2666",value:8},{suit:"\u2666",value:9},{suit:"\u2666",value:10},{suit:"\u2666",value:"J"},{suit:"\u2666",value:"Q"},{suit:"\u2666",value:"K"},{suit:"\u2666",value:"A"},{suit:"\u2663",value:2},{suit:"\u2663",value:3},{suit:"\u2663",value:4},{suit:"\u2663",value:5},{suit:"\u2663",value:6},{suit:"\u2663",value:7},{suit:"\u2663",value:8},{suit:"\u2663",value:9},{suit:"\u2663",value:10},{suit:"\u2663",value:"J"},{suit:"\u2663",value:"Q"},{suit:"\u2663",value:"K"},{suit:"\u2663",value:"A"},{suit:"\u2660",value:2},{suit:"\u2660",value:3},{suit:"\u2660",value:4},{suit:"\u2660",value:5},{suit:"\u2660",value:6},{suit:"\u2660",value:7},{suit:"\u2660",value:8},{suit:"\u2660",value:9},{suit:"\u2660",value:10},{suit:"\u2660",value:"J"},{suit:"\u2660",value:"Q"},{suit:"\u2660",value:"K"},{suit:"\u2660",value:"A"},{suit:"\u2665",value:2},{suit:"\u2665",value:3},{suit:"\u2665",value:4},{suit:"\u2665",value:5},{suit:"\u2665",value:6},{suit:"\u2665",value:7},{suit:"\u2665",value:8},{suit:"\u2665",value:9},{suit:"\u2665",value:10},{suit:"\u2665",value:"J"},{suit:"\u2665",value:"Q"},{suit:"\u2665",value:"K"},{suit:"\u2665",value:"A"},{suit:"\u2666",value:2},{suit:"\u2666",value:3},{suit:"\u2666",value:4},{suit:"\u2666",value:5},{suit:"\u2666",value:6},{suit:"\u2666",value:7},{suit:"\u2666",value:8},{suit:"\u2666",value:9},{suit:"\u2666",value:10},{suit:"\u2666",value:"J"},{suit:"\u2666",value:"Q"},{suit:"\u2666",value:"K"},{suit:"\u2666",value:"A"},{suit:"\u2663",value:2},{suit:"\u2663",value:3},{suit:"\u2663",value:4},{suit:"\u2663",value:5},{suit:"\u2663",value:6},{suit:"\u2663",value:7},{suit:"\u2663",value:8},{suit:"\u2663",value:9},{suit:"\u2663",value:10},{suit:"\u2663",value:"J"},{suit:"\u2663",value:"Q"},{suit:"\u2663",value:"K"},{suit:"\u2663",value:"A"},{suit:"\u2660",value:2},{suit:"\u2660",value:3},{suit:"\u2660",value:4},{suit:"\u2660",value:5},{suit:"\u2660",value:6},{suit:"\u2660",value:7},{suit:"\u2660",value:8},{suit:"\u2660",value:9},{suit:"\u2660",value:10},{suit:"\u2660",value:"J"},{suit:"\u2660",value:"Q"},{suit:"\u2660",value:"K"},{suit:"\u2660",value:"A"}]),m=function(e){Object(r.a)(t,e);var u=Object(c.a)(t);function t(){var e;return Object(v.a)(this,t),(e=u.call(this)).hit=function(u){var t=h[Math.floor(Math.random()*h.length)],a=e.state;a.players[u].hand.push(t),e.setState({players:a.players}),e.countCards(u)},e.stick=function(u){var t=e.state;t.players[u].isStick=!0,e.setState({players:t.players})},e.bet=function(u,t){var a=e.state,s=a.players[u];s.bet+t>s.balance||s.bet+t<=s.balance&&(a.players[u].bet=a.players[u].bet+t,e.setState({players:a.players}))},e.countCards=function(u){var t=e.state.players[u].hand,a=e.state,s=0;t.forEach((function(e){"Q"===e.value||"K"===e.value||"J"===e.value?s+=10:"A"===e.value?s+=s+11>21?1:11:s+=e.value})),a.players[u].handTotal=s,s>21&&(a.players[u].isBust=!0,a.handTotal=0),e.setState({players:a.players})},e.reset=function(){var u=e.state.players,t=e.state.dealer;u.forEach((function(e){e.hand=[],e.isStick=!1,e.isBust=!1,e.bet=0,e.isWinner=!1,e.handTotal=0,e.isLoser=!1,e.isDraw=!1,e.isOut=0==e.balance})),t.hand=[],t.isBust=!1,t.isWinner=!1,t.handTotal=!1,t.isLoser=!1,e.setState({dealer:t,players:u,roundInProgress:!0})},e.dealerRound=function(){for(var u=e.state.dealer,t=0;t<18;){var a=h[Math.floor(Math.random()*h.length)];"Q"===a.value||"K"===a.value||"J"===a.value?t+=10:"A"===a.value?t+=t+11>21?1:11:t+=a.value,u.hand.push(a)}u.handTotal=t,t>21&&(u.isBust=!0,u.handTotal=0),e.setState({dealer:u})},e.playRound=function(){e.dealerRound();var u=e.state.players,t=e.state.dealer,a=e.state;a.roundInProgress=!1;var s=[],i=0;u.forEach((function(e){e.handTotal>i&&!e.isBust&&!e.isOut&&(i=e.handTotal)})),t.handTotal>i&&!t.isBust?(a.dealer.isWinner=!0,u.forEach((function(e){a.players[e.id].isLoser=!0}))):i>t.handTotal&&u.forEach((function(e){e.isBust||e.isOut||(e.handTotal>t.handTotal?(s.push(e.id),a.players[e.id].isWinner=!0):e.handTotal<t.handTotal?a.players[e.id].isLoser=!0:e.handTotal===t.handTotal&&(a.players[e.id].isDraw=!0))})),u.forEach((function(e){e.isWinner&&21===e.handTotal?e.balance=e.balance+3*e.bet:e.isWinner?e.balance=e.balance+2*e.bet:(e.isLoser||e.isBust)&&(e.balance=e.balance-e.bet),0==e.balance&&(e.isOut=!0)})),e.setState({newState:a})},e.state={roundInProgress:!0,players:[],dealer:{hand:[],handTotal:0,isBust:!1,isWinner:!1,isLoser:!1,isDraw:!1}},e}return Object(n.a)(t,[{key:"componentWillMount",value:function(){for(var e=prompt("How many players are at the table"),u=new Array(Number(e)),t=[],a=0;a<u.length;a++)t.push({hand:[],handTotal:0,balance:1e3,isBust:!1,total:0,id:a,isStick:!1,bet:0,isWinner:!1,isLoser:!1,isDraw:!1,isOut:!1});this.setState({players:t})}},{key:"componentDidUpdate",value:function(){var e=this.state,u=e.players,t=e.roundInProgress;u.every((function(e){return e.isBust||e.isStick||e.isOut}))&&t&&this.playRound()}},{key:"render",value:function(){var e=this,u=this.state.dealer;return s.a.createElement("div",{className:"table-container"},s.a.createElement("h1",{style:{textAlign:"center"}},"\u2663 \u2666 Blackjack \u2665 \u2660"),s.a.createElement("h2",{className:"dealer-text"},"Dealer"),s.a.createElement("div",{className:"play-area"},s.a.createElement("div",{className:"status-area"},s.a.createElement("input",{hidden:this.state.roundInProgress,onClick:this.reset,type:"button",value:"Next Game"}),s.a.createElement("div",{hidden:!this.state.roundInProgress})),s.a.createElement("div",{className:"dealer-container"},s.a.createElement(d,{dealer:"true",hand:u.hand,isBust:u.isBust,isWinner:u.isWinner,isLoser:u.isLoser,isDraw:!1})),s.a.createElement("div",{className:"players-container"},this.state.players.map((function(u){return s.a.createElement(d,{id:u.id,isWinner:u.isWinner,bet:u.bet,key:u.id,hitFunction:e.hit,hand:u.hand,balance:u.balance,isBust:u.isBust,isStick:u.isStick,stickFunction:e.stick,betFunction:e.bet,isLoser:u.isLoser,isDraw:u.isDraw,isOut:u.isOut})})))))}}]),t}(s.a.Component),p=function(e){Object(r.a)(t,e);var u=Object(c.a)(t);function t(){var e;return Object(v.a)(this,t),(e=u.call(this)).state={numberOfPlayers:3},e}return Object(n.a)(t,[{key:"render",value:function(){return s.a.createElement(m,{numberOfPlayers:this.state.numberOfPlayers})}}]),t}(s.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(s.a.createElement(s.a.StrictMode,null,s.a.createElement(p,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[7,1,2]]]);
//# sourceMappingURL=main.64e9cf53.chunk.js.map