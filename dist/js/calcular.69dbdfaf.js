(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["calcular"],{"407b":function(e,t,s){},a1f0:function(e,t,s){"use strict";var i=s("407b"),a=s.n(i);a.a},b4ea:function(e,t,s){"use strict";s.r(t);var i=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"calcular"},[s("div",{staticClass:"top-bar"},[e.section>0?s("span",{staticClass:"backBtn",on:{click:function(t){return e.back()}}},[e._v("Anterior")]):e._e(),s("span",{staticClass:"step"},[e._v(e._s(e.section+1)+"/"+e._s(e.sections.length))]),0!=e.section?s("span",[e._v(e._s(e.historical[e.section-1].toFixed(2))+" $")]):e._e()]),s("div",{staticClass:"body"},[s("h1",{staticClass:"question text-center"},[e._v(e._s(e.sections[e.section].title))]),s("div",{staticClass:"options row"},e._l(e.sections[e.section].options,(function(t,i){return s("Option",{key:i,staticClass:"col-md-3",attrs:{option:t},on:{choice:function(t){return e.choice(t)}}})})),1)])])},a=[],o=s("bb63"),n=[{title:"¿Qué tipo de web estás buscando?",options:[{src:"E-tienda.jpeg",text:"E-tienda",value:350},{src:"web-profecional.jpeg",text:"Web profesional",value:250},{src:"web-blog.jpeg",text:"Web con blog",value:150},{src:"web-a-medida.jpeg",text:"Web a medida",value:50}]},{title:"¿Qué diseño quieres que tenga tu Web?",options:[{src:"E-tienda.jpeg",text:"Usar plantilla",value:1.2},{src:"E-tienda.jpeg",text:"Diseño a medida",value:1.5},{src:"no-diseño.jpeg",text:"No necesito diseño",value:1.5},{src:"E-tienda.jpeg",text:"No lo se",value:1.5}]},{title:"¿Cómo de grande necesitas que sea la web?",options:[{src:"E-tienda.jpeg",text:"Pequeña: menos de 3 páginas/50 productos",value:1.4},{src:"E-tienda.jpeg",text:"Mediana: menos de 10 páginas/200 productos",value:1.1},{src:"E-tienda.jpeg",text:"Grande: más de 10 páginas/200 productos",value:1.6},{src:"E-tienda.jpeg",text:"No lo se",value:1.6}]},{title:"¿En tu web se van a realizar pagos?",options:[{src:"E-tienda.jpeg",text:"Si",value:1.4},{src:"E-tienda.jpeg",text:"No",value:1.1},{src:"E-tienda.jpeg",text:"No lo se",value:1.6}]},{title:"¿La Web estará integrada con otra Web, App o ERP?",options:[{src:"E-tienda.jpeg",text:"Si",value:1.4},{src:"E-tienda.jpeg",text:"No",value:1.1},{src:"E-tienda.jpeg",text:"No lo se",value:1.6}]},{title:"¿Tu Web necesita login o registro de usuarios?",options:[{src:"E-tienda.jpeg",text:"Si",value:1.4},{src:"E-tienda.jpeg",text:"No",value:1.1},{src:"E-tienda.jpeg",text:"No lo se",value:1.6}]},{title:"¿Va a ser una web multidioma?",options:[{src:"E-tienda.jpeg",text:"Si",value:1.4},{src:"E-tienda.jpeg",text:"No",value:1.1},{src:"E-tienda.jpeg",text:"No lo se",value:1.6}]},{title:"¿La Web necesita un directorio/buscador interno?",options:[{src:"E-tienda.jpeg",text:"Si",value:1.4},{src:"E-tienda.jpeg",text:"No",value:1.1},{src:"E-tienda.jpeg",text:"No lo se",value:1.6}]},{title:"¿Tu web necesita servicios de SEO?",options:[{src:"E-tienda.jpeg",text:"Si",value:1.4},{src:"E-tienda.jpeg",text:"No",value:1.1},{src:"E-tienda.jpeg",text:"No lo se",value:1.6}]},{title:"¿En qué estado se encuentra tu web?",options:[{src:"E-tienda.jpeg",text:"Solamente es una idea",value:1.4},{src:"E-tienda.jpeg",text:"Boceto preparado",value:1.1},{src:"E-tienda.jpeg",text:"Web en desrrollo",value:1.6},{src:"E-tienda.jpeg",text:"Web lanzada",value:1.6}]}],c={components:{Option:o["a"]},data:function(){return{cost:0,historical:[],section:0,sections:n}},methods:{choice:function(e){this.sections.length>this.section+1?(0==this.section?this.cost=e.value:this.cost*=e.value,this.section++,this.historical.push(this.cost)):(this.cost*=e.value,this.historical.push(this.cost),this.$router.push({name:"Resultado",params:{cost:this.historical[this.section]}}))},back:function(){this.historical.pop(),this.section--}}},l=c,r=(s("a1f0"),s("2877")),u=Object(r["a"])(l,i,a,!1,null,null,null);t["default"]=u.exports}}]);
//# sourceMappingURL=calcular.69dbdfaf.js.map