(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-390bac8e"],{1148:function(t,e,r){"use strict";var n=r("a691"),o=r("1d80");t.exports="".repeat||function(t){var e=String(o(this)),r="",i=n(t);if(i<0||i==1/0)throw RangeError("Wrong number of repetitions");for(;i>0;(i>>>=1)&&(e+=e))1&i&&(r+=e);return r}},"1d2f":function(t,e,r){},"408a":function(t,e,r){var n=r("c6b6");t.exports=function(t){if("number"!=typeof t&&"Number"!=n(t))throw TypeError("Incorrect invocation");return+t}},"49b7":function(t,e,r){"use strict";var n=r("1d2f"),o=r.n(n);o.a},b680:function(t,e,r){"use strict";var n=r("23e7"),o=r("a691"),i=r("408a"),a=r("1148"),c=r("d039"),u=1..toFixed,s=Math.floor,l=function(t,e,r){return 0===e?r:e%2===1?l(t,e-1,r*t):l(t*t,e/2,r)},f=function(t){var e=0,r=t;while(r>=4096)e+=12,r/=4096;while(r>=2)e+=1,r/=2;return e},h=u&&("0.000"!==8e-5.toFixed(3)||"1"!==.9.toFixed(0)||"1.25"!==1.255.toFixed(2)||"1000000000000000128"!==(0xde0b6b3a7640080).toFixed(0))||!c((function(){u.call({})}));n({target:"Number",proto:!0,forced:h},{toFixed:function(t){var e,r,n,c,u=i(this),h=o(t),d=[0,0,0,0,0,0],p="",v="0",b=function(t,e){var r=-1,n=e;while(++r<6)n+=t*d[r],d[r]=n%1e7,n=s(n/1e7)},w=function(t){var e=6,r=0;while(--e>=0)r+=d[e],d[e]=s(r/t),r=r%t*1e7},m=function(){var t=6,e="";while(--t>=0)if(""!==e||0===t||0!==d[t]){var r=String(d[t]);e=""===e?r:e+a.call("0",7-r.length)+r}return e};if(h<0||h>20)throw RangeError("Incorrect fraction digits");if(u!=u)return"NaN";if(u<=-1e21||u>=1e21)return String(u);if(u<0&&(p="-",u=-u),u>1e-21)if(e=f(u*l(2,69,1))-69,r=e<0?u*l(2,-e,1):u/l(2,e,1),r*=4503599627370496,e=52-e,e>0){b(0,r),n=h;while(n>=7)b(1e7,0),n-=7;b(l(10,n,1),0),n=e-1;while(n>=23)w(1<<23),n-=23;w(1<<n),b(1,1),w(2),v=m()}else b(0,r),b(1<<-e,0),v=m()+a.call("0",h);return h>0?(c=v.length,v=p+(c<=h?"0."+a.call("0",h-c)+v:v.slice(0,c-h)+"."+v.slice(c-h))):v=p+v,v}})},c109:function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"home"},[r("p",[t._v("¡Bien! ¡Hemos terminado!")]),r("h1",[t._v("El coste estimado de tu web es")]),r("h1",{staticClass:"cost"},[t._v(t._s(t.cost)+" $")]),r("h2",[t._v("Cuéntanos que necesitas para que podamos entender tu proyecto")]),r("router-link",{attrs:{to:"/calcular"}},[t._v("Calcular coste")])],1)},o=[],i=(r("b680"),{name:"Home",data:function(){return{cost:0}},beforeMount:function(){this.$route.params.cost?this.cost=this.$route.params.cost.toFixed(2):this.$router.push({name:"Home"})}}),a=i,c=(r("49b7"),r("2877")),u=Object(c["a"])(a,n,o,!1,null,null,null);e["default"]=u.exports}}]);
//# sourceMappingURL=chunk-390bac8e.eca3617a.js.map