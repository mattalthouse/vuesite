(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0a5abfbd"],{"0bfb":function(t,e,n){"use strict";var r=n("cb7c");t.exports=function(){var t=r(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},"11e9":function(t,e,n){var r=n("52a7"),o=n("4630"),i=n("6821"),s=n("6a99"),a=n("69a8"),l=n("c69a"),u=Object.getOwnPropertyDescriptor;e.f=n("9e1e")?u:function(t,e){if(t=i(t),e=s(e,!0),l)try{return u(t,e)}catch(n){}if(a(t,e))return o(!r.f.call(t,e),t[e])}},"1ce7":function(t,e,n){"use strict";var r=n("cbde"),o=n.n(r);o.a},"2f21":function(t,e,n){"use strict";var r=n("79e5");t.exports=function(t,e){return!!t&&r(function(){e?t.call(null,function(){},1):t.call(null)})}},"2fdb":function(t,e,n){"use strict";var r=n("5ca1"),o=n("d2c8"),i="includes";r(r.P+r.F*n("5147")(i),"String",{includes:function(t){return!!~o(this,t,i).indexOf(t,arguments.length>1?arguments[1]:void 0)}})},3022:function(t,e,n){(function(t){var r=Object.getOwnPropertyDescriptors||function(t){for(var e=Object.keys(t),n={},r=0;r<e.length;r++)n[e[r]]=Object.getOwnPropertyDescriptor(t,e[r]);return n},o=/%[sdj%]/g;e.format=function(t){if(!P(t)){for(var e=[],n=0;n<arguments.length;n++)e.push(a(arguments[n]));return e.join(" ")}n=1;for(var r=arguments,i=r.length,s=String(t).replace(o,function(t){if("%%"===t)return"%";if(n>=i)return t;switch(t){case"%s":return String(r[n++]);case"%d":return Number(r[n++]);case"%j":try{return JSON.stringify(r[n++])}catch(e){return"[Circular]"}default:return t}}),l=r[n];n<i;l=r[++n])y(l)||!I(l)?s+=" "+l:s+=" "+a(l);return s},e.deprecate=function(n,r){if("undefined"!==typeof t&&!0===t.noDeprecation)return n;if("undefined"===typeof t)return function(){return e.deprecate(n,r).apply(this,arguments)};var o=!1;function i(){if(!o){if(t.throwDeprecation)throw new Error(r);t.traceDeprecation?console.trace(r):console.error(r),o=!0}return n.apply(this,arguments)}return i};var i,s={};function a(t,n){var r={seen:[],stylize:u};return arguments.length>=3&&(r.depth=arguments[2]),arguments.length>=4&&(r.colors=arguments[3]),v(n)?r.showHidden=n:n&&e._extend(r,n),T(r.showHidden)&&(r.showHidden=!1),T(r.depth)&&(r.depth=2),T(r.colors)&&(r.colors=!1),T(r.customInspect)&&(r.customInspect=!0),r.colors&&(r.stylize=l),f(r,t,r.depth)}function l(t,e){var n=a.styles[e];return n?"["+a.colors[n][0]+"m"+t+"["+a.colors[n][1]+"m":t}function u(t,e){return t}function c(t){var e={};return t.forEach(function(t,n){e[t]=!0}),e}function f(t,n,r){if(t.customInspect&&n&&S(n.inspect)&&n.inspect!==e.inspect&&(!n.constructor||n.constructor.prototype!==n)){var o=n.inspect(r,t);return P(o)||(o=f(t,o,r)),o}var i=h(t,n);if(i)return i;var s=Object.keys(n),a=c(s);if(t.showHidden&&(s=Object.getOwnPropertyNames(n)),E(n)&&(s.indexOf("message")>=0||s.indexOf("description")>=0))return p(n);if(0===s.length){if(S(n)){var l=n.name?": "+n.name:"";return t.stylize("[Function"+l+"]","special")}if(_(n))return t.stylize(RegExp.prototype.toString.call(n),"regexp");if(j(n))return t.stylize(Date.prototype.toString.call(n),"date");if(E(n))return p(n)}var u,v="",y=!1,w=["{","}"];if(m(n)&&(y=!0,w=["[","]"]),S(n)){var C=n.name?": "+n.name:"";v=" [Function"+C+"]"}return _(n)&&(v=" "+RegExp.prototype.toString.call(n)),j(n)&&(v=" "+Date.prototype.toUTCString.call(n)),E(n)&&(v=" "+p(n)),0!==s.length||y&&0!=n.length?r<0?_(n)?t.stylize(RegExp.prototype.toString.call(n),"regexp"):t.stylize("[Object]","special"):(t.seen.push(n),u=y?d(t,n,r,a,s):s.map(function(e){return g(t,n,r,a,e,y)}),t.seen.pop(),b(u,v,w)):w[0]+v+w[1]}function h(t,e){if(T(e))return t.stylize("undefined","undefined");if(P(e)){var n="'"+JSON.stringify(e).replace(/^"|"$/g,"").replace(/'/g,"\\'").replace(/\\"/g,'"')+"'";return t.stylize(n,"string")}return C(e)?t.stylize(""+e,"number"):v(e)?t.stylize(""+e,"boolean"):y(e)?t.stylize("null","null"):void 0}function p(t){return"["+Error.prototype.toString.call(t)+"]"}function d(t,e,n,r,o){for(var i=[],s=0,a=e.length;s<a;++s)N(e,String(s))?i.push(g(t,e,n,r,String(s),!0)):i.push("");return o.forEach(function(o){o.match(/^\d+$/)||i.push(g(t,e,n,r,o,!0))}),i}function g(t,e,n,r,o,i){var s,a,l;if(l=Object.getOwnPropertyDescriptor(e,o)||{value:e[o]},l.get?a=l.set?t.stylize("[Getter/Setter]","special"):t.stylize("[Getter]","special"):l.set&&(a=t.stylize("[Setter]","special")),N(r,o)||(s="["+o+"]"),a||(t.seen.indexOf(l.value)<0?(a=y(n)?f(t,l.value,null):f(t,l.value,n-1),a.indexOf("\n")>-1&&(a=i?a.split("\n").map(function(t){return"  "+t}).join("\n").substr(2):"\n"+a.split("\n").map(function(t){return"   "+t}).join("\n"))):a=t.stylize("[Circular]","special")),T(s)){if(i&&o.match(/^\d+$/))return a;s=JSON.stringify(""+o),s.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)?(s=s.substr(1,s.length-2),s=t.stylize(s,"name")):(s=s.replace(/'/g,"\\'").replace(/\\"/g,'"').replace(/(^"|"$)/g,"'"),s=t.stylize(s,"string"))}return s+": "+a}function b(t,e,n){var r=t.reduce(function(t,e){return 0,e.indexOf("\n")>=0&&0,t+e.replace(/\u001b\[\d\d?m/g,"").length+1},0);return r>60?n[0]+(""===e?"":e+"\n ")+" "+t.join(",\n  ")+" "+n[1]:n[0]+e+" "+t.join(", ")+" "+n[1]}function m(t){return Array.isArray(t)}function v(t){return"boolean"===typeof t}function y(t){return null===t}function w(t){return null==t}function C(t){return"number"===typeof t}function P(t){return"string"===typeof t}function D(t){return"symbol"===typeof t}function T(t){return void 0===t}function _(t){return I(t)&&"[object RegExp]"===O(t)}function I(t){return"object"===typeof t&&null!==t}function j(t){return I(t)&&"[object Date]"===O(t)}function E(t){return I(t)&&("[object Error]"===O(t)||t instanceof Error)}function S(t){return"function"===typeof t}function L(t){return null===t||"boolean"===typeof t||"number"===typeof t||"string"===typeof t||"symbol"===typeof t||"undefined"===typeof t}function O(t){return Object.prototype.toString.call(t)}function x(t){return t<10?"0"+t.toString(10):t.toString(10)}e.debuglog=function(n){if(T(i)&&(i=Object({VUE_APP_CLI_UI_URL:"",NODE_ENV:"production",BASE_URL:"/vuesite/"}).NODE_DEBUG||""),n=n.toUpperCase(),!s[n])if(new RegExp("\\b"+n+"\\b","i").test(i)){var r=t.pid;s[n]=function(){var t=e.format.apply(e,arguments);console.error("%s %d: %s",n,r,t)}}else s[n]=function(){};return s[n]},e.inspect=a,a.colors={bold:[1,22],italic:[3,23],underline:[4,24],inverse:[7,27],white:[37,39],grey:[90,39],black:[30,39],blue:[34,39],cyan:[36,39],green:[32,39],magenta:[35,39],red:[31,39],yellow:[33,39]},a.styles={special:"cyan",number:"yellow",boolean:"yellow",undefined:"grey",null:"bold",string:"green",date:"magenta",regexp:"red"},e.isArray=m,e.isBoolean=v,e.isNull=y,e.isNullOrUndefined=w,e.isNumber=C,e.isString=P,e.isSymbol=D,e.isUndefined=T,e.isRegExp=_,e.isObject=I,e.isDate=j,e.isError=E,e.isFunction=S,e.isPrimitive=L,e.isBuffer=n("d60a");var k=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];function A(){var t=new Date,e=[x(t.getHours()),x(t.getMinutes()),x(t.getSeconds())].join(":");return[t.getDate(),k[t.getMonth()],e].join(" ")}function N(t,e){return Object.prototype.hasOwnProperty.call(t,e)}e.log=function(){console.log("%s - %s",A(),e.format.apply(e,arguments))},e.inherits=n("3fb5"),e._extend=function(t,e){if(!e||!I(e))return t;var n=Object.keys(e),r=n.length;while(r--)t[n[r]]=e[n[r]];return t};var R="undefined"!==typeof Symbol?Symbol("util.promisify.custom"):void 0;function M(t,e){if(!t){var n=new Error("Promise was rejected with a falsy value");n.reason=t,t=n}return e(t)}function U(e){if("function"!==typeof e)throw new TypeError('The "original" argument must be of type Function');function n(){for(var n=[],r=0;r<arguments.length;r++)n.push(arguments[r]);var o=n.pop();if("function"!==typeof o)throw new TypeError("The last argument must be of type Function");var i=this,s=function(){return o.apply(i,arguments)};e.apply(this,n).then(function(e){t.nextTick(s,null,e)},function(e){t.nextTick(M,e,s)})}return Object.setPrototypeOf(n,Object.getPrototypeOf(e)),Object.defineProperties(n,r(e)),n}e.promisify=function(t){if("function"!==typeof t)throw new TypeError('The "original" argument must be of type Function');if(R&&t[R]){var e=t[R];if("function"!==typeof e)throw new TypeError('The "util.promisify.custom" argument must be of type Function');return Object.defineProperty(e,R,{value:e,enumerable:!1,writable:!1,configurable:!0}),e}function e(){for(var e,n,r=new Promise(function(t,r){e=t,n=r}),o=[],i=0;i<arguments.length;i++)o.push(arguments[i]);o.push(function(t,r){t?n(t):e(r)});try{t.apply(this,o)}catch(s){n(s)}return r}return Object.setPrototypeOf(e,Object.getPrototypeOf(t)),R&&Object.defineProperty(e,R,{value:e,enumerable:!1,writable:!1,configurable:!0}),Object.defineProperties(e,r(t))},e.promisify.custom=R,e.callbackify=U}).call(this,n("4362"))},3591:function(t,e,n){},3846:function(t,e,n){n("9e1e")&&"g"!=/./g.flags&&n("86cc").f(RegExp.prototype,"flags",{configurable:!0,get:n("0bfb")})},"38ff":function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"tableapp"}},[t._m(0),n("app-table",{attrs:{appTitle:"Table 1",jsonSource:"https://api.myjson.com/bins/t5x0u"}}),n("app-table",{attrs:{appTitle:"animals",jsonSource:"https://api.myjson.com/bins/vjahk"}})],1)},o=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",[t._v("Data randomly generated using "),n("a",{attrs:{href:"https://mockaroo.com/"}},[t._v("Mockaroo")])])}],i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"parallax"},[n("div",{attrs:{id:"Table"}},[n("app-header",{attrs:{title:t.appTitle,subtitle:t.subtitle}}),n("button",{staticClass:"btn-table2",on:{click:function(e){return t.openModalAddCell()}}},[t._v("Add New Entry")]),n("span",[n("input",{directives:[{name:"model",rawName:"v-model",value:t.searchTerm,expression:"searchTerm"}],attrs:{placeholder:"Search"},domProps:{value:t.searchTerm},on:{change:function(e){return t.searchTable()},input:function(e){e.target.composing||(t.searchTerm=e.target.value)}}}),n("button",{staticClass:"btn-table2",on:{click:function(e){return t.clearSearch()}}},[t._v("Clear")])]),t.showModalAddCell||t.showModalEditCell?n("app-modal",[t.showModalEditCell?n("div",{attrs:{slot:"body"},slot:"body"},[n("h3",{attrs:{slot:"header"},slot:"header"},[t._v("Edit Cell:")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.editData,expression:"editData"}],attrs:{size:"25",placeholder:"Enter Data Here"},domProps:{value:t.editData},on:{input:function(e){e.target.composing||(t.editData=e.target.value)}}}),n("span",{attrs:{slot:"footer"},slot:"footer"},[n("button",{staticStyle:{"margin-right":"20px"},on:{click:function(e){return t.closeModal()}}},[t._v("Close")]),n("button",{on:{click:function(e){return t.editCell()}}},[t._v("Save")])])]):t._e(),t.showModalAddCell?n("div",{attrs:{slot:"body"},slot:"body"},[n("h3",{attrs:{slot:"header"},slot:"header"},[t._v("New Cell:")]),t._l(t.columnList,function(e){return n("span",[t._v("\r\n                    "+t._s(e)+"\r\n                    "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.newColEditData[e],expression:"newColEditData[col]"}],attrs:{size:"25"},domProps:{value:t.newColEditData[e]},on:{input:function(n){n.target.composing||t.$set(t.newColEditData,e,n.target.value)}}}),n("br"),n("br")])}),n("span",{attrs:{slot:"footer"},slot:"footer"},[n("button",{staticStyle:{"margin-right":"20px"},on:{click:function(e){return t.closeModal()}}},[t._v("Close")]),n("button",{on:{click:function(e){return t.addCell()}}},[t._v("Add New Entry")])])],2):t._e()]):t._e(),n("table",{attrs:{slot:"app-cell"},slot:"app-cell"},[n("thead",t._l(t.columnList,function(e,r){return n("th",[0!=r?n("i",{staticClass:"fa fa-caret-left fa-sm",on:{click:function(n){return t.moveColLeft(e)}}}):t._e(),t._v("\r\n                "+t._s(e)+"\r\n                "),r<t.columnList.length-1?n("i",{staticClass:"fa fa-caret-right fa-sm",on:{click:function(n){return t.moveColRight(e)}}}):t._e(),n("i",{staticClass:"fa fa-sort fa-sm",staticStyle:{float:"right","margin-left":"10px"},on:{click:function(n){return t.sortByValue(e)}}},[t._v(" Sort")])])}),0),t._l(t.uniqueIDs,function(e,r){return r>=t.rowsPerPageLower&&r<t.rowsPerPageUpper?n("tr",t._l(t.TableCell,function(r){return r.searchInclude&&r.objID===e?n("td",{on:{click:function(e){return t.openModalEdit(r)}}},[n("app-cell",{attrs:{value:r.value,column:r.column,header:r.header,objID:r.objID,colID:r.colID,hoverActive:r.hoverActive,searchInclude:r.searchInclude}}),n("span",{staticClass:"edit"},[r.isEditable?n("i",{staticClass:"fa fa-pencil-square-o fa-sm",staticStyle:{"background-color":"inherit",color:"crimson","box-shadow":"none"}}):t._e()])],1):t._e()}),0):t._e()})],2),n("br"),n("button",{staticClass:"fa fa-fast-backward fa-xs",on:{click:function(e){return t.firstPage()}}}),t._l(t.numPages,function(e){return e>t.currentPage-5&&e<t.currentPage?n("button",{on:{click:function(n){return t.jumptoPage(e)}}},[t._v(t._s(e))]):t._e()}),n("i",[t._v(t._s(t.currentPage))]),t._l(t.numPages,function(e){return e<t.currentPage+5&&e>t.currentPage?n("button",{on:{click:function(n){return t.jumptoPage(e)}}},[t._v(t._s(e))]):t._e()}),n("button",{staticClass:"fa fa-fast-forward fa-xs",on:{click:function(e){return t.lastPage()}}}),n("br"),n("br"),n("label",{attrs:{for:"numrowsDropdown"}},[t._v("Rows Per Page:")]),n("select",{directives:[{name:"model",rawName:"v-model",value:t.numofRows,expression:"numofRows"}],attrs:{id:"numrowsDropdown"},on:{change:[function(e){var n=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){var e="_value"in t?t._value:t.value;return e});t.numofRows=e.target.multiple?n:n[0]},function(e){return t.jumptoPage(t.currentPage)}]}},[n("option",[t._v("10")]),n("option",[t._v("20")]),n("option",[t._v("50")])]),n("br")],2)])},s=[],a=(n("6b54"),n("2fdb"),n("ac6a"),n("55dd"),n("6762"),n("7f7f"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span",{attrs:{id:"TableCell"}},[t._t("app-cell",[t._v("\n        "+t._s(t.value)+"\n    ")])],2)}),l=[],u=(n("c5f6"),{name:"TableCell",props:{column:{type:String},hoverActive:{type:Boolean},value:{},header:{type:Boolean},objID:{type:Number},colID:{type:Number},searchInclude:{type:Boolean},isEditable:{type:Boolean}},data:function(){return{}},methods:{}}),c=u,f=n("2877"),h=Object(f["a"])(c,a,l,!1,null,"e6b77dc6",null),p=h.exports,d=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",[n("h3",[t._v(t._s(t.title))])])},g=[],b={props:["title","subtitle"]},m=b,v=(n("1ce7"),Object(f["a"])(m,d,g,!1,null,"3c3c997a",null)),y=v.exports,w=n("f178"),C=(n("3022"),{components:{"app-header":y,"app-cell":p,"app-modal":w["default"]},name:"Table",props:["appTitle","jsonSource"],data:function(){return{TableCell:[],selectedCell:[{}],selectedColCheck:[],searchTerm:"",title:"Test Vue Table",subtitle:"asdf",Column1:"Name",Column2:"Occupation",Column3:"HireDate",keysList:[],columnList:[],uniqueIDs:[],colOrder:[],newColEditData:[],includedSearchCells:[],includedSearchRows:[],numofRows:20,rowsPerPageLower:0,rowsPerPageUpper:20,currentPage:1,sortedTable:!0,showModal:!1,showModalAddCell:!1,showModalEditCell:!1,editData:"",editApiPath:""}},created:function(){this.getJsonData()},mounted:function(){},computed:{numPages:function(){var t=this.uniqueIDs,e=t.length/this.numofRows;return Math.ceil(e)}},methods:{getJsonData:function(){var t=this;console.log("getting json data"),fetch(this.jsonSource).then(function(t){return t.json()}).then(function(e){t.populateTableCells(e),t.getUniqueIDs()}).catch(function(t){console.log("json error! "+t)})},submitData:function(t,e){this.$http.post(t,e).then(function(t){console.log(t)})},getNumRows:function(){this.uniqueIDs.length<=this.numofRows&&(this.numofRows=this.uniqueIDs.length,this.rowsPerPageUpper=this.uniqueIDs.length)},populateTableCells:function(t){if(void 0!=t[0])for(var e in t[0]){var n=t[0][e]["name"];void 0!=n?this.columnList.push(n):this.columnList.push(e),this.keysList.push(e)}else for(var e in t)this.keysList.push(e),this.columnList.push(e);this.keysList.push();for(var r=0;r<this.columnList.length;r++)this.colOrder.push(r);console.log(this.selectedColCheck);var o=this.keysList;if(void 0==t.length)for(var i=0;i<o.length;i++)this.TableCell.push({column:o[i],value:t[o[i]],header:!1,objID:r,colID:i,searchInclude:!0,isEditable:!1});else for(r=0;r<t.length;r++)for(i=0;i<o.length;i++){var s=t[r][o[i]]["cellValue"],a=t[r][o[i]]["name"];void 0!=s&&void 0!=a?this.TableCell.push({column:a,value:s,header:!1,objID:r,colID:i,searchInclude:!0,isEditable:t[r][o[i]]["isEditable"]}):this.TableCell.push({column:o[i],value:t[r][o[i]],header:!1,objID:r,colID:i,searchInclude:!0,isEditable:!1})}},moveColLeft:function(t){for(var e=this.columnList.indexOf(t),n=this.columnList,r=[],o=[],i=0;i<n.length;i++)i!==e-1||r.includes(n[i])||(r.push(n[e]),o.push(e)),r.includes(n[i])||(r.push(n[i]),o.push(i));this.columnList=[],this.colOrder=[];for(i=0;i<r.length;i++)this.columnList.push(r[i]),this.colOrder.push(o[i]);this.reorderCols()},moveColRight:function(t){for(var e=this.columnList.indexOf(t),n=e+1,r=this.columnList,o=[],i=[],s=0;s<r.length;s++)s!==e||o.includes(r[s])?o.includes(r[s])||(o.push(r[s]),i.push(s)):(o.push(r[n]),o.push(r[e]),i.push(n),i.push(e));this.columnList=[],this.colOrder=[];for(s=0;s<o.length;s++)this.columnList.push(o[s]),this.colOrder.push(i[s]);this.reorderCols()},addCell:function(){var t=this.uniqueIDs;t.sort(function(t,e){return t<e?-1:t>e?1:0});for(var e=0;e<this.columnList.length;e++)this.TableCell.push({column:this.columnList[e],value:this.newColEditData[this.columnList[e]],header:!1,objID:t[t.length-1]+1,colID:e,searchInclude:!0});this.getUniqueIDs(),this.newColEditData=[]},getUniqueIDs:function(){var t=this,e=[];this.TableCell.forEach(function(t){e.includes(t.objID)||e.push(t.objID)}),t.uniqueIDs=[],e.forEach(function(e){t.uniqueIDs.push(e)})},getUniqueIDsCustom:function(t){var e=this,n=[];t.forEach(function(t){n.includes(t)||n.push(t)}),e.uniqueIDs=[],n.forEach(function(t){e.uniqueIDs.push(t)})},reorgIDs:function(t){this.uniqueIDs=[];for(var e=0;e<t.length;e++)this.uniqueIDs.push(t[e].objID);return this.uniqueIDs},reorderCols:function(){for(var t=[],e=0;e<this.colOrder.length;e++)for(var n=0;n<this.TableCell.length;n++)this.columnList[e]===this.TableCell[n].column&&(this.TableCell[n].colID=e,t.push(this.TableCell[n]));this.TableCell=[];for(var r=0;r<t.length;r++)this.TableCell.push(t[r])},sortByValue:function(t){for(var e=[],n=0;n<this.TableCell.length;n++)this.TableCell[n]["column"]===t&&this.uniqueIDs.includes(this.TableCell[n]["objID"])&&e.push(this.TableCell[n]);this.sortedTable=!this.sortedTable,t.toLowerCase().includes("date")?e.sort(function(t,e){var n=new Date(t.value),r=new Date(e.value);return r-n}):e.sort(function(t,e){if("string"==typeof t.value){if(t.value.toLowerCase()<e.value.toLowerCase())return-1;if(t.value.toLowerCase()>e.value.toLowerCase())return 1}else{if(t.value<e.value)return-1;if(t.value>e.value)return 1}return 0}),this.sortedTable&&e.reverse(),this.reorgIDs(e)},editCell:function(){for(var t,e=[],n=0;n<this.TableCell.length;n++)this.TableCell[n].objID===this.selectedCell[1].objID&&(e.push(this.TableCell[n]),this.TableCell[n].colID===this.selectedCell[1].colID&&(this.TableCell[n],t=n));this.TableCell[t].value=this.editData;var r="http://localhost:7071/api/UpdateInsurance";this.submitData(r,e),this.closeModal(),this.editData="",this.selectedCell=[{}]},openModalEdit:function(t){t.isEditable&&(this.showModalEditCell=!0,this.editData=t.value,this.selectedCell.push(t))},openModalAddCell:function(){this.showModalAddCell=!0;for(var t=0;t<this.columnListlength;t++)this.newColEditData.push(this.columnList[t])},closeModal:function(){this.showModalEditCell=!1,this.showModalAddCell=!1,this.editData="",this.selectedCell=[{}]},prevPage:function(){this.rowsPerPageUpper-=this.numofRows,this.rowsPerPageLower=this.rowsPerPageUpper-this.numofRows,this.currentPage--},nextPage:function(){this.rowsPerPageUpper+=this.numofRows,this.rowsPerPageLower=this.rowsPerPageUpper-this.numofRows,this.currentPage++},jumptoPage:function(t){this.rowsPerPageUpper=this.numofRows*t,this.rowsPerPageLower=this.rowsPerPageUpper-this.numofRows,this.currentPage=t},firstPage:function(){this.currentPage=1,this.rowsPerPageUpper=this.numofRows*this.currentPage,this.rowsPerPageLower=this.rowsPerPageUpper-this.numofRows},lastPage:function(){this.currentPage=this.numPages,this.rowsPerPageUpper=this.numofRows*this.currentPage,this.rowsPerPageLower=this.rowsPerPageUpper-this.numofRows},searchTable:function(){for(var t=[],e=[],n=0;n<this.TableCell.length;n++)this.searchTerm.length<=0&&(this.TableCell[n].searchInclude=!0),this.TableCell[n].value.toString().toLowerCase().includes(this.searchTerm.toLowerCase())&&t.push(this.TableCell[n].objID);for(n=0;n<this.TableCell.length;n++)t.includes(this.TableCell[n].objID)?(this.TableCell[n].searchInclude=!0,e.includes(this.TableCell[n].objID)||e.push(this.TableCell[n].objID)):this.TableCell[n].searchInclude=!1;this.getUniqueIDsCustom(e),this.firstPage()},clearSearch:function(){this.searchTerm.length>0&&(this.searchTerm="",this.searchTable())}}}),P=C,D=(n("bda0"),Object(f["a"])(P,i,s,!1,null,null,null)),T=D.exports,_={components:{"app-table":T},name:"app",data:function(){return{jsonPath:""}}},I=_,j=(n("5e6d"),Object(f["a"])(I,r,o,!1,null,null,null));e["default"]=j.exports},"3fb5":function(t,e){"function"===typeof Object.create?t.exports=function(t,e){t.super_=e,t.prototype=Object.create(e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}})}:t.exports=function(t,e){t.super_=e;var n=function(){};n.prototype=e.prototype,t.prototype=new n,t.prototype.constructor=t}},4362:function(t,e,n){e.nextTick=function(t){setTimeout(t,0)},e.platform=e.arch=e.execPath=e.title="browser",e.pid=1,e.browser=!0,e.env={},e.argv=[],e.binding=function(t){throw new Error("No such module. (Possibly not yet loaded)")},function(){var t,r="/";e.cwd=function(){return r},e.chdir=function(e){t||(t=n("df7c")),r=t.resolve(e,r)}}(),e.exit=e.kill=e.umask=e.dlopen=e.uptime=e.memoryUsage=e.uvCounters=function(){},e.features={}},5147:function(t,e,n){var r=n("2b4c")("match");t.exports=function(t){var e=/./;try{"/./"[t](e)}catch(n){try{return e[r]=!1,!"/./"[t](e)}catch(o){}}return!0}},"55dd":function(t,e,n){"use strict";var r=n("5ca1"),o=n("d8e8"),i=n("4bf8"),s=n("79e5"),a=[].sort,l=[1,2,3];r(r.P+r.F*(s(function(){l.sort(void 0)})||!s(function(){l.sort(null)})||!n("2f21")(a)),"Array",{sort:function(t){return void 0===t?a.call(i(this)):a.call(i(this),o(t))}})},"5dbc":function(t,e,n){var r=n("d3f4"),o=n("8b97").set;t.exports=function(t,e,n){var i,s=e.constructor;return s!==n&&"function"==typeof s&&(i=s.prototype)!==n.prototype&&r(i)&&o&&o(t,i),t}},"5e6d":function(t,e,n){"use strict";var r=n("cd78"),o=n.n(r);o.a},6526:function(t,e,n){"use strict";var r=n("9e0e"),o=n.n(r);e["default"]=o.a},6762:function(t,e,n){"use strict";var r=n("5ca1"),o=n("c366")(!0);r(r.P,"Array",{includes:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}}),n("9c6c")("includes")},"6b54":function(t,e,n){"use strict";n("3846");var r=n("cb7c"),o=n("0bfb"),i=n("9e1e"),s="toString",a=/./[s],l=function(t){n("2aba")(RegExp.prototype,s,t,!0)};n("79e5")(function(){return"/a/b"!=a.call({source:"a",flags:"b"})})?l(function(){var t=r(this);return"/".concat(t.source,"/","flags"in t?t.flags:!i&&t instanceof RegExp?o.call(t):void 0)}):a.name!=s&&l(function(){return a.call(this)})},"6c5e":function(t,e,n){"use strict";var r=n("8e59"),o=n.n(r);o.a},"7f7f":function(t,e,n){var r=n("86cc").f,o=Function.prototype,i=/^\s*function ([^ (]*)/,s="name";s in o||n("9e1e")&&r(o,s,{configurable:!0,get:function(){try{return(""+this).match(i)[1]}catch(t){return""}}})},"8b97":function(t,e,n){var r=n("d3f4"),o=n("cb7c"),i=function(t,e){if(o(t),!r(e)&&null!==e)throw TypeError(e+": can't set as prototype!")};t.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(t,e,r){try{r=n("9b43")(Function.call,n("11e9").f(Object.prototype,"__proto__").set,2),r(t,[]),e=!(t instanceof Array)}catch(o){e=!0}return function(t,n){return i(t,n),e?t.__proto__=n:r(t,n),t}}({},!1):void 0),check:i}},"8e59":function(t,e,n){},"904d":function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",{attrs:{name:"modal"}},[n("div",{staticClass:"modal modal-mask",staticStyle:{display:"block"}},[n("div",{staticClass:"modal-dialog",attrs:{role:"document"}},[n("div",{staticClass:"modal-content"},[n("div",{staticClass:"modal-header"},[t._t("header")],2),n("div",{staticClass:"modal-body"},[t._t("body")],2),n("div",{staticClass:"modal-footer"},[t._t("footer")],2)])])])])},o=[];n.d(e,"a",function(){return r}),n.d(e,"b",function(){return o})},9093:function(t,e,n){var r=n("ce10"),o=n("e11e").concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return r(t,o)}},"9e0e":function(t,e){t.exports={name:"modal",props:["list"]}},aa77:function(t,e,n){var r=n("5ca1"),o=n("be13"),i=n("79e5"),s=n("fdef"),a="["+s+"]",l="​",u=RegExp("^"+a+a+"*"),c=RegExp(a+a+"*$"),f=function(t,e,n){var o={},a=i(function(){return!!s[t]()||l[t]()!=l}),u=o[t]=a?e(h):s[t];n&&(o[n]=u),r(r.P+r.F*a,"String",o)},h=f.trim=function(t,e){return t=String(o(t)),1&e&&(t=t.replace(u,"")),2&e&&(t=t.replace(c,"")),t};t.exports=f},aae3:function(t,e,n){var r=n("d3f4"),o=n("2d95"),i=n("2b4c")("match");t.exports=function(t){var e;return r(t)&&(void 0!==(e=t[i])?!!e:"RegExp"==o(t))}},ac6a:function(t,e,n){for(var r=n("cadf"),o=n("0d58"),i=n("2aba"),s=n("7726"),a=n("32e9"),l=n("84f2"),u=n("2b4c"),c=u("iterator"),f=u("toStringTag"),h=l.Array,p={CSSRuleList:!0,CSSStyleDeclaration:!1,CSSValueList:!1,ClientRectList:!1,DOMRectList:!1,DOMStringList:!1,DOMTokenList:!0,DataTransferItemList:!1,FileList:!1,HTMLAllCollection:!1,HTMLCollection:!1,HTMLFormElement:!1,HTMLSelectElement:!1,MediaList:!0,MimeTypeArray:!1,NamedNodeMap:!1,NodeList:!0,PaintRequestList:!1,Plugin:!1,PluginArray:!1,SVGLengthList:!1,SVGNumberList:!1,SVGPathSegList:!1,SVGPointList:!1,SVGStringList:!1,SVGTransformList:!1,SourceBufferList:!1,StyleSheetList:!0,TextTrackCueList:!1,TextTrackList:!1,TouchList:!1},d=o(p),g=0;g<d.length;g++){var b,m=d[g],v=p[m],y=s[m],w=y&&y.prototype;if(w&&(w[c]||a(w,c,h),w[f]||a(w,f,m),l[m]=h,v))for(b in r)w[b]||i(w,b,r[b],!0)}},bda0:function(t,e,n){"use strict";var r=n("3591"),o=n.n(r);o.a},c5f6:function(t,e,n){"use strict";var r=n("7726"),o=n("69a8"),i=n("2d95"),s=n("5dbc"),a=n("6a99"),l=n("79e5"),u=n("9093").f,c=n("11e9").f,f=n("86cc").f,h=n("aa77").trim,p="Number",d=r[p],g=d,b=d.prototype,m=i(n("2aeb")(b))==p,v="trim"in String.prototype,y=function(t){var e=a(t,!1);if("string"==typeof e&&e.length>2){e=v?e.trim():h(e,3);var n,r,o,i=e.charCodeAt(0);if(43===i||45===i){if(n=e.charCodeAt(2),88===n||120===n)return NaN}else if(48===i){switch(e.charCodeAt(1)){case 66:case 98:r=2,o=49;break;case 79:case 111:r=8,o=55;break;default:return+e}for(var s,l=e.slice(2),u=0,c=l.length;u<c;u++)if(s=l.charCodeAt(u),s<48||s>o)return NaN;return parseInt(l,r)}}return+e};if(!d(" 0o1")||!d("0b1")||d("+0x1")){d=function(t){var e=arguments.length<1?0:t,n=this;return n instanceof d&&(m?l(function(){b.valueOf.call(n)}):i(n)!=p)?s(new g(y(e)),n,d):y(e)};for(var w,C=n("9e1e")?u(g):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),P=0;C.length>P;P++)o(g,w=C[P])&&!o(d,w)&&f(d,w,c(g,w));d.prototype=b,b.constructor=d,n("2aba")(r,p,d)}},cbde:function(t,e,n){},cd78:function(t,e,n){},d2c8:function(t,e,n){var r=n("aae3"),o=n("be13");t.exports=function(t,e,n){if(r(e))throw TypeError("String#"+n+" doesn't accept regex!");return String(o(t))}},d60a:function(t,e){t.exports=function(t){return t&&"object"===typeof t&&"function"===typeof t.copy&&"function"===typeof t.fill&&"function"===typeof t.readUInt8}},df7c:function(t,e,n){(function(t){function n(t,e){for(var n=0,r=t.length-1;r>=0;r--){var o=t[r];"."===o?t.splice(r,1):".."===o?(t.splice(r,1),n++):n&&(t.splice(r,1),n--)}if(e)for(;n--;n)t.unshift("..");return t}var r=/^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/,o=function(t){return r.exec(t).slice(1)};function i(t,e){if(t.filter)return t.filter(e);for(var n=[],r=0;r<t.length;r++)e(t[r],r,t)&&n.push(t[r]);return n}e.resolve=function(){for(var e="",r=!1,o=arguments.length-1;o>=-1&&!r;o--){var s=o>=0?arguments[o]:t.cwd();if("string"!==typeof s)throw new TypeError("Arguments to path.resolve must be strings");s&&(e=s+"/"+e,r="/"===s.charAt(0))}return e=n(i(e.split("/"),function(t){return!!t}),!r).join("/"),(r?"/":"")+e||"."},e.normalize=function(t){var r=e.isAbsolute(t),o="/"===s(t,-1);return t=n(i(t.split("/"),function(t){return!!t}),!r).join("/"),t||r||(t="."),t&&o&&(t+="/"),(r?"/":"")+t},e.isAbsolute=function(t){return"/"===t.charAt(0)},e.join=function(){var t=Array.prototype.slice.call(arguments,0);return e.normalize(i(t,function(t,e){if("string"!==typeof t)throw new TypeError("Arguments to path.join must be strings");return t}).join("/"))},e.relative=function(t,n){function r(t){for(var e=0;e<t.length;e++)if(""!==t[e])break;for(var n=t.length-1;n>=0;n--)if(""!==t[n])break;return e>n?[]:t.slice(e,n-e+1)}t=e.resolve(t).substr(1),n=e.resolve(n).substr(1);for(var o=r(t.split("/")),i=r(n.split("/")),s=Math.min(o.length,i.length),a=s,l=0;l<s;l++)if(o[l]!==i[l]){a=l;break}var u=[];for(l=a;l<o.length;l++)u.push("..");return u=u.concat(i.slice(a)),u.join("/")},e.sep="/",e.delimiter=":",e.dirname=function(t){var e=o(t),n=e[0],r=e[1];return n||r?(r&&(r=r.substr(0,r.length-1)),n+r):"."},e.basename=function(t,e){var n=o(t)[2];return e&&n.substr(-1*e.length)===e&&(n=n.substr(0,n.length-e.length)),n},e.extname=function(t){return o(t)[3]};var s="b"==="ab".substr(-1)?function(t,e,n){return t.substr(e,n)}:function(t,e,n){return e<0&&(e=t.length+e),t.substr(e,n)}}).call(this,n("4362"))},f178:function(t,e,n){"use strict";var r=n("904d"),o=n("6526"),i=(n("6c5e"),n("2877")),s=Object(i["a"])(o["default"],r["a"],r["b"],!1,null,null,null);e["default"]=s.exports},fdef:function(t,e){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"}}]);
//# sourceMappingURL=chunk-0a5abfbd.7111e6f3.js.map