(function(){"use strict";var e={8232:function(e,t,n){var r=n(9242),a=n(3396);function i(e,t,n,r,i,o){const u=(0,a.up)("MyHeader"),s=(0,a.up)("router-view");return(0,a.wg)(),(0,a.iD)(a.HY,null,[(0,a.Wm)(u),(0,a.Wm)(s)],64)}const o={class:"my-header"};function u(e,t,n,r,i,u){const s=(0,a.up)("RouterLink");return(0,a.wg)(),(0,a.iD)("div",o,[(0,a.Wm)(s,{to:"/"},{default:(0,a.w5)((()=>[(0,a.Uk)("Sudoku")])),_:1})])}var s={},d=n(89);const l=(0,d.Z)(s,[["render",u]]);var c=l,f={components:{MyHeader:c},data(){return{}}};const m=(0,d.Z)(f,[["render",i]]);var v=m,h=n(2483);const x={class:"main-page"},p={class:"main-menu"};function y(e,t,n,r,i,o){const u=(0,a.up)("RouterLink");return(0,a.wg)(),(0,a.iD)("div",x,[(0,a._)("div",p,[(0,a.Wm)(u,{to:"/sudoku",class:"button-arounder"},{default:(0,a.w5)((()=>[(0,a.Uk)("Играть")])),_:1}),(0,a.Wm)(u,{to:"/check",class:"button-arounder"},{default:(0,a.w5)((()=>[(0,a.Uk)("Заполнять")])),_:1})])])}var S={name:"MainPage",data(){return{}}};const I=(0,d.Z)(S,[["render",y]]);var A=I;const b={class:"sudoku-page"};function O(e,t,n,r,i,o){const u=(0,a.up)("Board");return(0,a.wg)(),(0,a.iD)("div",b,[(0,a.Wm)(u)])}var g=n(7139);const w={class:"board"};function k(e,t,n,r,i,o){const u=(0,a.up)("BoardItem");return(0,a.wg)(),(0,a.iD)("div",w,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(i.formattedArray,((e,t)=>((0,a.wg)(),(0,a.j4)(u,{indexOfSlot:t},{default:(0,a.w5)((()=>[(0,a.Uk)((0,g.zw)(e||""),1)])),_:2},1032,["indexOfSlot"])))),256))])}n(7658);function E(e,t,n,r,i,o){return(0,a.wg)(),(0,a.iD)("div",{class:(0,g.C_)(["board-item",e.invalidSlots.includes(n.indexOfSlot)?"invalid-slot":""]),style:(0,g.j5)({borderBottom:o.isBorderBottom()}),contenteditable:"",onInput:t[0]||(t[0]=(...e)=>o.restrictToInteger&&o.restrictToInteger(...e))},[(0,a.WI)(e.$slots,"default")],38)}var T=n(65),B={props:{indexItem:{type:Number,default:0},indexOfSlot:{type:Number,default:0}},methods:{restrictToInteger(e){e.target.innerText&&(e.target.innerText=e.target.innerText[0].replace(/[^\d]/g,"")),this.$store.dispatch("checkInputValue",{indexOfSlot:this.indexOfSlot,value:e.target.innerText})},isBorderBottom(){return this.indexItem>=19&&this.indexItem<=27||this.indexItem>=46&&this.indexItem<=54?"3px solid":void 0}},computed:(0,T.rn)({invalidSlots:e=>e.invalidSlots})};const M=(0,d.Z)(B,[["render",E]]);var j=M,C={components:{BoardItem:j},data(){return{formattedArray:[]}},computed:(0,T.rn)(["exampleArray"]),methods:{fillFormattedArray(){this.exampleArray.forEach((e=>{e.forEach((e=>{this.formattedArray.push(e)}))}))},checkIsEndGame(e){let t=!0;e.forEach((e=>{e.forEach((e=>{e||(t=!1)}))})),t&&(alert("победа"),this.$store.commit("setIsEndGame",!0))}},mounted(){this.fillFormattedArray()},watch:{exampleArray:{handler:function(e,t){this.checkIsEndGame(e)},deep:!0}}};const N=(0,d.Z)(C,[["render",k]]);var _=N,D={components:{Board:_}};const W=(0,d.Z)(D,[["render",O]]);var G=W;const Z=[{path:"/",name:"main",component:A},{path:"/sudoku",name:"sudoku",component:G}],V=(0,h.p7)({history:(0,h.PO)("/sudoku/"),routes:Z});var H=V,P=(0,T.MT)({state:{exampleArray:[[5,3,0,0,7,0,0,0,0],[6,0,0,1,9,5,0,0,0],[0,9,8,0,0,0,0,6,0],[8,0,0,0,6,0,0,0,3],[4,0,0,8,0,3,0,0,1],[7,0,0,0,2,0,0,0,6],[0,6,0,0,0,0,2,8,0],[0,0,0,4,1,9,0,0,5],[0,0,0,0,8,0,0,7,9]],currentArray:[],invalidSlots:[],isEndGame:!1},getters:{},mutations:{setInvalidSlots(e,t){"add"!==t.event||e.invalidSlots.includes(+t.indexOfSlot)?"remove"===t.event&&e.invalidSlots.includes(+t.indexOfSlot)&&(e.invalidSlots=e.invalidSlots.filter((e=>e!=+t.indexOfSlot))):e.invalidSlots=[...e.invalidSlots,t.indexOfSlot]},insertInArray(e,t){e.exampleArray[t.indexOfArray][t.indexInSubArray]=+t.value},setIsEndGame(e,t){e.isEndGame=t}},actions:{isSameNumberInColumn({commit:e,state:t,dispatch:n},r){let a=!1;return t.exampleArray.forEach(((e,t)=>{e.forEach(((e,n)=>{n===r.indexInSubArray&&e==+r.value&&t!==r.indexOfArray&&(a=!0)}))})),a},isSameNumberInRow({commit:e,state:t,dispatch:n},r){let a=!1;return t.exampleArray[r.indexInArray].forEach(((e,t)=>{+r.value&&e==+r.value&&t!==r.indexInSubArray&&(a=!0)})),a},async isSameNumberInArea({commit:e,state:t,dispatch:n},r){let a=[],i=[],o=[];return await n("getSquareIndexes",r.indexInArray).then((e=>{i=e})),await n("getSquareIndexes",r.indexInSubArray).then((e=>{o=e})),i.forEach((e=>{o.forEach((n=>{+r.indexInArray===e&&+r.indexInSubArray===n?a.push(0):a.push(t.exampleArray[e][n])}))})),a.includes(+r.value)},getSquareIndexes(e,t){return 0===+t||1===+t||2===+t?[0,1,2]:3===+t||4===+t||5===+t?[3,4,5]:[6,7,8]},async checkCurrentValue({dispatch:e},t){let n=!1,r=!1,a=!1;return await e("isSameNumberInColumn",t).then((e=>{n=e})),await e("isSameNumberInRow",t).then((e=>{r=e})),await e("isSameNumberInArea",t).then((e=>{a=e})),!r&&!n&&!a},async checkInputValue({commit:e,state:t,dispatch:n},r){let a=Math.ceil(+r.indexOfSlot/9)>=0?Math.floor(r.indexOfSlot/9):0,i=r.indexOfSlot-9*a;if(r.value){const t={indexInArray:a,indexInSubArray:i,value:r.value};let o=!1;await n("checkCurrentValue",t).then((e=>{o=e})),e("setInvalidSlots",o?{indexOfSlot:+r.indexOfSlot,event:"remove"}:{indexOfSlot:+r.indexOfSlot,event:"add"}),e("insertInArray",{indexOfArray:a,indexInSubArray:i,value:+r.value})}else e("insertInArray",{indexOfArray:a,indexInSubArray:i,value:0}),e("setInvalidSlots",{indexOfSlot:+r.indexOfSlot,event:"remove"});n("checkExistsInvalid")},checkExistsInvalid({commit:e,state:t,dispatch:n}){t.invalidSlots.forEach((async r=>{let a=Math.ceil(+r/9)>=0?Math.floor(r/9):0,i=r-9*a,o=t.exampleArray[a][i];const u={indexInArray:a,indexInSubArray:i,value:o};await n("checkCurrentValue",u).then((t=>{t&&(console.log(r),e("setInvalidSlots",{indexOfSlot:+r,event:"remove"}))}))}))}},modules:{}});(0,r.ri)(v).use(P).use(H).mount("#app")}},t={};function n(r){var a=t[r];if(void 0!==a)return a.exports;var i=t[r]={exports:{}};return e[r](i,i.exports,n),i.exports}n.m=e,function(){var e=[];n.O=function(t,r,a,i){if(!r){var o=1/0;for(l=0;l<e.length;l++){r=e[l][0],a=e[l][1],i=e[l][2];for(var u=!0,s=0;s<r.length;s++)(!1&i||o>=i)&&Object.keys(n.O).every((function(e){return n.O[e](r[s])}))?r.splice(s--,1):(u=!1,i<o&&(o=i));if(u){e.splice(l--,1);var d=a();void 0!==d&&(t=d)}}return t}i=i||0;for(var l=e.length;l>0&&e[l-1][2]>i;l--)e[l]=e[l-1];e[l]=[r,a,i]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={143:0};n.O.j=function(t){return 0===e[t]};var t=function(t,r){var a,i,o=r[0],u=r[1],s=r[2],d=0;if(o.some((function(t){return 0!==e[t]}))){for(a in u)n.o(u,a)&&(n.m[a]=u[a]);if(s)var l=s(n)}for(t&&t(r);d<o.length;d++)i=o[d],n.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return n.O(l)},r=self["webpackChunksudoku"]=self["webpackChunksudoku"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var r=n.O(void 0,[998],(function(){return n(8232)}));r=n.O(r)})();
//# sourceMappingURL=app.1573ca56.js.map