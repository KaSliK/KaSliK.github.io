(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5fc4e198"],{"434d":function(t,n,e){"use strict";e.d(n,"a",(function(){return a})),e.d(n,"b",(function(){return s}));e("d81d");var i=e("53ca");function a(t,n){t=t.map((function(t){return"object"==Object(i["a"])(n[t.id])?t.qty=n[t.id].qty:t.qty=0,t}))}function s(t,n){t=t.map((function(t){return"object"==Object(i["a"])(n[t.id])?t.qtyOfUser=n[t.id].qty:t.qtyOfUser=0,t}))}},b7d5:function(t,n,e){"use strict";var i=e("e7b3"),a=e.n(i);a.a},e7b3:function(t,n,e){},f820:function(t,n,e){"use strict";e.r(n);var i=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-container",[e("h1",[t._v("Informacje o nas zostaną dodane wkrótce")]),e("div",[t._v("Na chwilę obecną cieszcie się możliwością kolekcjonowania kart")])])},a=[],s=(e("d81d"),e("b0c0"),e("b64b"),e("d3b7"),e("ddb0"),e("bc3a")),r=e.n(s),c=e("434d"),d={data:function(){return{entries:[],isLoading:!1,inputUser:null,search:null,cards:null,myCards:this.$store.getters.userCards}},computed:{items:function(){var t=this;return Object.keys(this.entries).map((function(n){return t.entries[n].idname=t.entries[n].id+"  "+t.entries[n].name,t.entries[n]}))}},watch:{inputUser:function(){this.loading=!0,this.cards=null,this.getOtherUserCards()},search:function(){var t=this;this.items.length>0||this.isLoading||(this.isLoading=!0,r.a.get("api/users/list").then((function(n){console.log(n.data.data),t.entries=n.data.data})).finally((function(){return t.isLoading=!1})))}},methods:{getOtherUserCards:function(){var t=this;r.a.get("api/cards/u/".concat(this.inputUser.id)).then((function(n){t.cards=n.data.data.cards,t.cards=Object.keys(t.cards).map((function(n){return t.cards[n]})),Object(c["b"])(t.cards,t.myCards),t.isLoading=!1}))}}},o=d,u=(e("b7d5"),e("2877")),f=e("6544"),h=e.n(f),l=e("a523"),b=Object(u["a"])(o,i,a,!1,null,"65fd2c86",null);n["default"]=b.exports;h()(b,{VContainer:l["a"]})}}]);
//# sourceMappingURL=chunk-5fc4e198.373f0539.js.map