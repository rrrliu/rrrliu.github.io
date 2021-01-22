(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"4BXb":function(e,t,a){},"7vrA":function(e,t,a){"use strict";var n=a("wx14"),r=a("zLVn"),i=a("TSYQ"),o=a.n(i),l=a("q1tI"),s=a.n(l),d=a("vUet"),u=s.a.forwardRef((function(e,t){var a=e.bsPrefix,i=e.fluid,l=e.as,u=void 0===l?"div":l,c=e.className,f=Object(r.a)(e,["bsPrefix","fluid","as","className"]),m=Object(d.a)(a,"container"),h="string"==typeof i?"-"+i:"-fluid";return s.a.createElement(u,Object(n.a)({ref:t},f,{className:o()(c,i?""+m+h:m)}))}));u.displayName="Container",u.defaultProps={fluid:!1},t.a=u},"8ypT":function(e,t,a){},Bl7J:function(e,t,a){"use strict";var n=a("f98A"),r=a("q1tI"),i=a.n(r),o=a("Wbzz"),l=(a("4BXb"),function(){return i.a.createElement("header",{className:"header"},i.a.createElement("div",{className:"header-links",style:{margin:"0 auto",textAlign:"right",maxWidth:960,padding:"1.45rem 1.0875rem 0"}},i.a.createElement(o.Link,{to:"/"},"About"),i.a.createElement(o.Link,{to:"/shelf"},"Shelf"),i.a.createElement(o.Link,{to:"/projects"},"Projects")))});a("8ypT"),t.a=function(e){var t=e.children,a=n.data;return i.a.createElement(i.a.Fragment,null,i.a.createElement(l,{siteTitle:a.site.siteMetadata.title}),i.a.createElement("div",null,i.a.createElement("main",null,t)))}},DmN7:function(e){e.exports=JSON.parse('{"data":{"books":{"edges":[{"node":{"data":{"Title":"The House of the Spirits","Artist":"Isabel Allende"}}},{"node":{"data":{"Title":"1984","Artist":"George Orwell"}}},{"node":{"data":{"Title":"Not Fade Away: A Short Life Well Lived","Artist":"Peter Barton"}}},{"node":{"data":{"Title":"Gut: The Inside Story of Our Body\'s Most Underrated Organ","Artist":"Giulia Enders"}}},{"node":{"data":{"Title":"Steve Jobs","Artist":"Walter Isaacson"}}},{"node":{"data":{"Title":"Tribe","Artist":"Sebastian Junger"}}},{"node":{"data":{"Title":"Unbroken","Artist":"Laura Hillenbrand"}}},{"node":{"data":{"Title":"Sophie\'s World","Artist":"Jostein Gaarder"}}},{"node":{"data":{"Title":"The Machine Stops","Artist":"E. M. Forster"}}},{"node":{"data":{"Title":"The Catcher in the Rye","Artist":"J.D. Salinger"}}},{"node":{"data":{"Title":"Atomic Habits","Artist":"James Clear"}}},{"node":{"data":{"Title":" Stories of Your Life and Others","Artist":"Ted Chiang"}}},{"node":{"data":{"Title":"Stubborn Attachments","Artist":"Tyler Cowen"}}},{"node":{"data":{"Title":"Leaders Eat Last","Artist":"Simon Sinek"}}},{"node":{"data":{"Title":"Romance of the Three Kingdoms","Artist":"Luo Guanzhong"}}},{"node":{"data":{"Title":"The Hitchhiker\'s Guide to the Galaxy","Artist":"Douglas Adams"}}},{"node":{"data":{"Title":"Guns, Germs, and Steel","Artist":"Jared Diamond"}}},{"node":{"data":{"Title":"The Courage to Be Disliked","Artist":"Ichiro Kishimi"}}}]},"music":{"edges":[{"node":{"data":{"Title":"Punisher","Artist":"Phoebe Bridgers"}}},{"node":{"data":{"Title":"Big Fish Theory","Artist":"Vince Stapes"}}},{"node":{"data":{"Title":"Pink Polo EP","Artist":"Masego"}}},{"node":{"data":{"Title":"Dreamland","Artist":"Glass Animals"}}},{"node":{"data":{"Title":"GINGER","Artist":"BROCKHAMPTON"}}}]},"films":{"edges":[{"node":{"data":{"Title":"Good Will Hunting","Artist":null}}},{"node":{"data":{"Title":"Into the Wild","Artist":null}}},{"node":{"data":{"Title":"The Godfather","Artist":null}}},{"node":{"data":{"Title":"Smoke Signals","Artist":null}}}]}}}')},"PZd/":function(e,t,a){var n=a("P8UN"),r=a("ys0W")(!0);n(n.S,"Object",{entries:function(e){return r(e)}})},QA0p:function(e,t,a){"use strict";a("E5k/"),a("pJf4"),t.__esModule=!0,t.default=function(e,t){var a=void 0===t?{}:t,n=a.propTypes,i=a.defaultProps,o=a.allowFallback,l=void 0!==o&&o,s=a.displayName,d=void 0===s?e.name||e.displayName:s,u=function(t,a){return e(t,a)};return Object.assign(r.default.forwardRef||!l?r.default.forwardRef(u):function(e){return u(e,null)},{displayName:d,propTypes:n,defaultProps:i})};var n,r=(n=a("q1tI"))&&n.__esModule?n:{default:n}},S1tD:function(e,t,a){"use strict";a.r(t);a("rzGZ"),a("Dq+y"),a("8npG"),a("PZd/"),a("E5k/");var n=a("DmN7"),r=a("q1tI"),i=a.n(r),o=(a("Wbzz"),a("Bl7J")),l=a("vrFN"),s=a("7vrA"),d=function(e){var t=Object.assign({},e);return Object.entries(t).forEach((function(e){var a=e[0],n=e[1];return t[a]=n.edges.map((function(e){return e.node.data}))})),t},u=function(e,t){return i.a.createElement(i.a.Fragment,null,i.a.createElement("p",null,e),i.a.createElement("ul",null,t.map((function(e,t){return i.a.createElement("li",{key:"completed-"+t},i.a.createElement("span",{style:{fontStyle:"italic"}},e.Title),i.a.createElement("span",null,e.Artist&&" by "+e.Artist))}))))};t.default=function(){var e=n.data,t=d(e),a=t.books,r=t.music,c=t.films;return i.a.createElement(o.a,null,i.a.createElement(l.a,{title:"Shelf"}),i.a.createElement(s.a,{className:"intro-container shelf",fluid:!0},i.a.createElement("h1",{className:"title"},"Shelf"),i.a.createElement("p",null,"An unordered collection of books, music, films, and other works of art that I would recommend to others. Somewhat inspired by Patrick Collision's"," ",i.a.createElement("a",{href:"https://patrickcollison.com/bookshelf"},"bookshelf"),"."),u("Books:",a),u("Music:",r),u("Films:",c)))}},TSYQ:function(e,t,a){var n;a("MIFh"),function(){"use strict";var a={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var i=typeof n;if("string"===i||"number"===i)e.push(n);else if(Array.isArray(n)&&n.length){var o=r.apply(null,n);o&&e.push(o)}else if("object"===i)for(var l in n)a.call(n,l)&&n[l]&&e.push(l)}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(n=function(){return r}.apply(t,[]))||(e.exports=n)}()},f98A:function(e){e.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"title":"Richard Liu"}}}}')},vUet:function(e,t,a){"use strict";a.d(t,"a",(function(){return o}));a("pJf4"),a("wx14"),a("QA0p");var n=a("q1tI"),r=a.n(n),i=r.a.createContext({});i.Consumer,i.Provider;function o(e,t){var a=Object(n.useContext)(i);return e||a[t]||t}},wx14:function(e,t,a){"use strict";function n(){return(n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}a.d(t,"a",(function(){return n}))},ys0W:function(e,t,a){var n=a("QPJK"),r=a("2mBY"),i=a("5SQf"),o=a("BnbX").f;e.exports=function(e){return function(t){for(var a,l=i(t),s=r(l),d=s.length,u=0,c=[];d>u;)a=s[u++],n&&!o.call(l,a)||c.push(e?[a,l[a]]:l[a]);return c}}},zLVn:function(e,t,a){"use strict";function n(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}a.d(t,"a",(function(){return n}))}}]);
//# sourceMappingURL=component---src-pages-shelf-js-1f26a0a301e0825ddbc8.js.map