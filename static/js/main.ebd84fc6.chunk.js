(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{49:function(t,e,n){t.exports=n(80)},54:function(t,e,n){},55:function(t,e,n){},80:function(t,e,n){"use strict";n.r(e);var a=n(0),r=n.n(a),o=n(7),u=n.n(o),c=(n(54),n(55),n(14)),i=n(36),l=n(18),s=n(16),m=n(19),p=n(37),h=n.n(p),f=n(9),v=n(11),d=n(87),b=function(t){var e=t.value;return r.a.createElement(d.a,{bg:"light",body:!0},r.a.createElement("h1",null,e))};function E(){var t=Object(f.a)(["\n  height: 50vh;\n"]);return E=function(){return t},t}var k=v.a.div(E()),y=function(t){var e=t.memory;return r.a.createElement(r.a.Fragment,null,e.map(function(t,e){return r.a.createElement(b,{value:t,key:"".concat(t,"-").concat(e)})}),r.a.createElement(k,null))},w=n(83),O=n(84),N=n(85),g=n(88);function C(){var t=Object(f.a)(["\n  margin: 5px 5px 5px 5px;\n"]);return C=function(){return t},t}var j=v.a.div(C()),A=function(t){var e=t.buttonName,n=t.variant;return r.a.createElement(j,null,r.a.createElement(g.a,{buttonName:e,onClick:function(){t.onClick(t.buttonName)},block:!0,variant:n},e))},I=function(t){function e(){var t,n;Object(c.a)(this,e);for(var a=arguments.length,o=new Array(a),u=0;u<a;u++)o[u]=arguments[u];return(n=Object(l.a)(this,(t=Object(s.a)(e)).call.apply(t,[this].concat(o)))).buttonCol=function(t,e){return r.a.createElement(w.a,{key:t},r.a.createElement(A,{buttonName:t,onClick:e,variant:"info"}))},n.buttons=function(){var t=n.props.clickHandler;return r.a.createElement(r.a.Fragment,null,r.a.createElement(O.a,null,[7,8,9].map(function(e){return n.buttonCol(e,t)})),r.a.createElement(O.a,null,[4,5,6].map(function(e){return n.buttonCol(e,t)})),r.a.createElement(O.a,null,[1,2,3].map(function(e){return n.buttonCol(e,t)})),r.a.createElement(O.a,null,["C",0,"+/-"].map(function(e){return n.buttonCol(e,t)})))},n.render=function(){return r.a.createElement(N.a,null,n.buttons())},n}return Object(m.a)(e,t),e}(r.a.Component);function S(){var t=Object(f.a)(["\n  color: white;\n"]);return S=function(){return t},t}function T(){var t=Object(f.a)(["\n  background-color: #007bff;\n"]);return T=function(){return t},t}var H=v.a.div(T()),x=v.a.h1(S()),M=function(t){var e=t.num;return r.a.createElement(H,null,r.a.createElement(x,null,e))},P=n(89),R=n(86),_=[{name:"push",tooltip:"places an item on the top of the stack"},{name:"pop",tooltip:"removes the top item and returns it -- here, the return is placed in the keyboard input"},{name:"peek",tooltip:"shows the item on the top of the stack"},{name:"isEmpty",tooltip:"true when the stack is empty, otherwise false"}],B=[{name:"+",tooltip:"adds the first two items on the stack, and pushes the result back to the top"},{name:"-",tooltip:"subtracts the second item on the stack from the first, and pushes the result back to the top"},{name:"*",tooltip:"multiplies the first two items on the stack, and pushes the result back to the top"},{name:"/",tooltip:"divides the first item on the stack by the second, and pushes the result back to the top"}],K=function(t,e,n){var a=r.a.createElement(P.a,Object.assign({},n,{id:"".concat(t.name,"-popover")}),r.a.createElement(P.a.Title,null,t.name),r.a.createElement(P.a.Content,null,t.tooltip));return r.a.createElement(w.a,{key:t.name},r.a.createElement(R.a,{trigger:["hover","active"],delay:{show:600,hide:400},overlay:a},r.a.createElement("span",null,r.a.createElement(A,{buttonName:t.name,onClick:e,variant:"warning"}))))},F=function(t){var e=t.clickHandler;return r.a.createElement(N.a,null,r.a.createElement(O.a,null,_.map(function(n){return K(n,e,t)})),r.a.createElement(O.a,null,B.map(function(n){return K(n,e,t)})))};function D(){var t=Object(f.a)(["\n      background-color: #f8f9fa;\n      position: fixed;\n      bottom: 0;\n      align-items: center;\n      width: 100vw;\n    "]);return D=function(){return t},t}var J=function(t){function e(){var t,n;Object(c.a)(this,e);for(var a=arguments.length,o=new Array(a),u=0;u<a;u++)o[u]=arguments[u];return(n=Object(l.a)(this,(t=Object(s.a)(e)).call.apply(t,[this].concat(o)))).buttonArea=function(){var t=n.props.clickHandler;return r.a.createElement(r.a.Fragment,null,r.a.createElement(I,{clickHandler:t}),r.a.createElement(F,{clickHandler:t}))},n.render=function(){var t=n.props.inputDisplay,e=v.a.div(D());return r.a.createElement(e,null,r.a.createElement(M,{num:t}),n.buttonArea())},n}return Object(m.a)(e,t),e}(r.a.Component),L=function t(){var e=this;Object(c.a)(this,t),this.isEmpty=function(){return 0===e.memory.length},this.push=function(t){e.memory.unshift(t)},this.peek=function(){if(0===e.memory.length)throw new Error("Empty stack");return e.memory[0]},this.pop=function(){if(0===e.memory.length)throw new Error("Empty stack");var t=e.memory[0];return e.memory=e.memory.slice(1),t},this.operate=function(t){var n=t.length;if(e.memory.length<n)throw new Error("Not enough items.");for(var a=[];n>0;)a.push(e.pop()),n+=-1;e.push(t.apply(void 0,a))},this.memory=[]},W=function(t,e){return t+e},U=function(t,e){return t-e},$=function(t,e){return t*e},q=function(t,e){return t/e},z=function(t){function e(t){var n;return Object(c.a)(this,e),(n=Object(l.a)(this,Object(s.a)(e).call(this,t))).input=function(t){e.couldNotBeANumber(t)?e.isStackOperator(t)?n.handleStackInput(t):e.isMathOperator(t)?n.handleMathInput(t):e.isCalcOperator(t)&&n.handleCalcInput(t):n.handleNumInput(t)},n.handleNumInput=function(t){var e=n.state.inputNum;n.setState({inputNum:10*e+parseInt(t)})},n.render=function(){var t=n.state,e=t.inputNum,a=t.stack;return r.a.createElement("div",null,r.a.createElement(y,{memory:a.memory}),r.a.createElement(h.a,{handleKeys:["numeric"],onKeyEvent:function(t){return n.input(t)}}),r.a.createElement("div",null,r.a.createElement(J,{inputDisplay:e,clickHandler:n.input})))},n.state={inputNum:0,stack:new L},n}return Object(m.a)(e,t),Object(i.a)(e,[{key:"handleStackInput",value:function(t){var e=this.state,n=e.inputNum,a=e.stack;switch(t){case"push":a.push(n),this.setState({inputNum:0});break;case"pop":try{this.setState({inputNum:a.pop()})}catch(r){window.alert(r)}break;case"isEmpty":window.alert(a.isEmpty())}}},{key:"handleMathInput",value:function(t){var e=this.state.stack;switch(t){case"+":e.operate(W);break;case"-":e.operate(U);break;case"*":e.operate($);break;case"/":e.operate(q)}this.forceUpdate()}},{key:"handleCalcInput",value:function(t){var e=this.state.inputNum;switch(t){case"C":this.setState({inputNum:0});break;case"+/-":this.setState({inputNum:-1*e})}}}]),e}(r.a.Component);z.STACK_OPERATIONS=["push","pop","peek","isEmpty"],z.MATH_OPERATIONS=["+","-","*","/"],z.CALC_OPERATIONS=["C","+/-"],z.couldNotBeANumber=function(t){return isNaN(parseInt(t))},z.isStackOperator=function(t){return z.STACK_OPERATIONS.includes(t)},z.isMathOperator=function(t){return z.MATH_OPERATIONS.includes(t)},z.isCalcOperator=function(t){return z.CALC_OPERATIONS.includes(t)};var G=z;var Q=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(G,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));u.a.render(r.a.createElement(Q,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(t){t.unregister()})}},[[49,1,2]]]);
//# sourceMappingURL=main.ebd84fc6.chunk.js.map