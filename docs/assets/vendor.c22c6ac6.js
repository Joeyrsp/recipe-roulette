var e=Object.defineProperty,r=Object.prototype.hasOwnProperty,n=Object.getOwnPropertySymbols,t=Object.prototype.propertyIsEnumerable,o=(r,n,t)=>n in r?e(r,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[n]=t,l=(e,l)=>{for(var i in l||(l={}))r.call(l,i)&&o(e,i,l[i]);if(n)for(var i of n(l))t.call(l,i)&&o(e,i,l[i]);return e},i={},a=[],u=e=>e,f=a.map,s=Array.isArray,d="undefined"!=typeof requestAnimationFrame?requestAnimationFrame:setTimeout,p=e=>{var r="";if("string"==typeof e)return e;if(s(e))for(var n,t=0;t<e.length;t++)(n=p(e[t]))&&(r+=(r&&" ")+n);else for(var t in e)e[t]&&(r+=(r&&" ")+t);return r},m=(e,r)=>{for(var n in l(l({},e),r))if("function"==typeof(s(e[n])?e[n][0]:e[n]))r[n]=e[n];else if(e[n]!==r[n])return!0},v=e=>null==e?e:e.key,c=(e,r,n,t,o,i)=>{if("key"===r);else if("style"===r)for(var a in l(l({},n),t))n=null==t||null==t[a]?"":t[a],"-"===a[0]?e[r].setProperty(a,n):e[r][a]=n;else"o"===r[0]&&"n"===r[1]?((e.events||(e.events={}))[r=r.slice(2)]=t)?n||e.addEventListener(r,o):e.removeEventListener(r,o):!i&&"list"!==r&&"form"!==r&&r in e?e[r]=null==t?"":t:null==t||!1===t||"class"===r&&!(t=p(t))?e.removeAttribute(r):e.setAttribute(r,t)},y=(e,r,n)=>{var t=e.props,o=3===e.type?document.createTextNode(e.tag):(n=n||"svg"===e.tag)?document.createElementNS("http://www.w3.org/2000/svg",e.tag,{is:t.is}):document.createElement(e.tag,{is:t.is});for(var l in t)c(o,l,null,t[l],r,n);for(var i=0;i<e.children.length;i++)o.appendChild(y(e.children[i]=h(e.children[i]),r,n));return e.node=o},g=(e,r,n,t,o,i)=>{if(n===t);else if(null!=n&&3===n.type&&3===t.type)n.tag!==t.tag&&(r.nodeValue=t.tag);else if(null==n||n.tag!==t.tag)r=e.insertBefore(y(t=h(t),o,i),r),null!=n&&e.removeChild(n.node);else{var a,u,f,s,d=n.props,p=t.props,m=n.children,b=t.children,w=0,A=0,C=m.length-1,k=b.length-1;for(var E in i=i||"svg"===t.tag,l(l({},d),p))("value"===E||"selected"===E||"checked"===E?r[E]:d[E])!==p[E]&&c(r,E,d[E],p[E],o,i);for(;A<=k&&w<=C&&null!=(f=v(m[w]))&&f===v(b[A]);)g(r,m[w].node,m[w],b[A]=h(b[A++],m[w++]),o,i);for(;A<=k&&w<=C&&null!=(f=v(m[C]))&&f===v(b[k]);)g(r,m[C].node,m[C],b[k]=h(b[k--],m[C--]),o,i);if(w>C)for(;A<=k;)r.insertBefore(y(b[A]=h(b[A++]),o,i),(u=m[w])&&u.node);else if(A>k)for(;w<=C;)r.removeChild(m[w++].node);else{var O={},N={};for(E=w;E<=C;E++)null!=(f=m[E].key)&&(O[f]=m[E]);for(;A<=k;)f=v(u=m[w]),s=v(b[A]=h(b[A],u)),N[f]||null!=s&&s===v(m[w+1])?(null==f&&r.removeChild(u.node),w++):null==s||1===n.type?(null==f&&(g(r,u&&u.node,u,b[A],o,i),A++),w++):(f===s?(g(r,u.node,u,b[A],o,i),N[s]=!0,w++):null!=(a=O[s])?(g(r,r.insertBefore(a.node,u&&u.node),a,b[A],o,i),N[s]=!0):g(r,u&&u.node,null,b[A],o,i),A++);for(;w<=C;)null==v(u=m[w++])&&r.removeChild(u.node);for(var E in O)null==N[E]&&r.removeChild(O[E].node)}}return t.node=r},h=(e,r)=>!0!==e&&!1!==e&&e?"function"==typeof e.tag?((!r||null==r.memo||((e,r)=>{for(var n in e)if(e[n]!==r[n])return!0;for(var n in r)if(e[n]!==r[n])return!0})(r.memo,e.memo))&&((r=e.tag(e.memo)).memo=e.memo),r):e:A(""),b=e=>3===e.nodeType?A(e.nodeValue,e):w(e.nodeName.toLowerCase(),i,f.call(e.childNodes,b),1,e),w=(e,r,n,t,o)=>({tag:e,props:r,key:r.key,children:n,type:t,node:o}),A=(e,r)=>w(e,i,a,3,r),C=({node:e,view:r,subscriptions:n,dispatch:t=u,init:o=i})=>{var l,f,p=e&&b(e),v=[],c=e=>{l!==e&&(null==(l=e)&&(t=n=y=u),n&&(v=((e,r=a,n)=>{for(var t,o,l=[],i=0;i<e.length||i<r.length;i++)t=e[i],o=r[i],l.push(o&&!0!==o?!t||o[0]!==t[0]||m(o[1],t[1])?[o[0],o[1],(t&&t[2](),o[0](n,o[1]))]:t:t&&t[2]());return l})(v,n(l),t)),r&&!f&&d(y,f=!0))},y=()=>e=g(e.parentNode,e,p,p=r(l),h,f=!1),h=function(e){t(this.events[e.type],e)};return(t=t(((e,r)=>"function"==typeof e?t(e(l,r)):s(e)?"function"==typeof e[0]?t(e[0],e[1]):e.slice(1).map((e=>e&&!0!==e&&e[0](t,e[1])),c(e[0])):c(e))))(o),t};function k(e,r=[]){return e.forEach((e=>{Array.isArray(e)?k(e,r):r.push(e)})),r}var E=(e,r,...n)=>"function"==typeof e?e(r,k(n)):((e,r,n=a)=>w(e,r,s(n)?n:[n]))(e,r||{},k(n).map((e=>"string"==typeof e||"number"==typeof e?A(e):e)));export{C as a,E as h};