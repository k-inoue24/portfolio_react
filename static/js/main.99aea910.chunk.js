(this.webpackJsonpreact_test=this.webpackJsonpreact_test||[]).push([[0],{14:function(e,t,n){},26:function(e,t,n){},33:function(e,t,n){},34:function(e,t,n){},35:function(e,t,n){},36:function(e,t,n){},37:function(e,t,n){"use strict";n.r(t);var i=n(1),c=n.n(i),a=n(20),s=n.n(a),r=n(11),l=(n(26),n(4)),o=n(5),j=n(7),u=n(6),b=n(0),h=function(e){Object(j.a)(n,e);var t=Object(u.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(b.jsxs)("header",{children:[Object(b.jsx)("div",{className:"inner",children:Object(b.jsx)("div",{className:"siteTitle",children:Object(b.jsxs)(r.b,{to:"/",children:["K's Casual Portfolio",Object(b.jsx)("span",{children:"developed with React"})]})})}),Object(b.jsx)("nav",{children:Object(b.jsxs)("ul",{children:[Object(b.jsx)("li",{children:Object(b.jsx)(r.b,{to:"/",children:"HOME"})}),Object(b.jsx)("li",{children:Object(b.jsx)(r.b,{to:"/introduction",children:"INTRODUCTION"})}),Object(b.jsx)("li",{children:Object(b.jsx)(r.b,{to:"/link",children:"LINK"})})]})})]})}}]),n}(c.a.Component),d=n(2),O=function(e){Object(j.a)(n,e);var t=Object(u.a)(n);function n(e){var i;return Object(l.a)(this,n),(i=t.call(this,e)).state={isModalOpen:!1},i}return Object(o.a)(n,[{key:"handleClickItem",value:function(){this.setState({isModalOpen:!0})}},{key:"handleClickClose",value:function(){this.setState({isModalOpen:!1})}},{key:"render",value:function(){var e,t=this;return this.state.isModalOpen&&(e=Object(b.jsx)("div",{className:"itemModalLayer",onClick:function(){t.handleClickClose()},children:Object(b.jsxs)("div",{className:"itemModal",onClick:function(e){e.stopPropagation()},children:[Object(b.jsx)("div",{className:"itemTitle modalTitle",children:this.props.name}),Object(b.jsx)("div",{className:"itemText",children:this.props.text}),Object(b.jsx)(r.b,{className:"itemBtn itemDetailBtn",to:this.props.link,children:"\u8a73\u7d30\u3092\u898b\u308b"}),Object(b.jsx)("button",{className:"itemBtn itemCloseBtn",onClick:function(){t.handleClickClose()},children:"\u9589\u3058\u308b"})]})})),Object(b.jsxs)("div",{className:"item",children:[Object(b.jsx)("div",{className:"itemTitle",children:this.props.name}),Object(b.jsx)("div",{className:"itemDetail",onClick:function(){t.handleClickItem()},children:"CLICK"}),e]})}}]),n}(c.a.Component),p=(n(14),n(33),function(e){Object(j.a)(n,e);var t=Object(u.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(b.jsxs)("div",{className:"inner",children:[Object(b.jsx)("h1",{className:"pageTitle",children:"This is the casual site for challenging React!"}),Object(b.jsx)("div",{className:"itemWrap",children:[{name:"INTRODUCTION",text:"\u7d4c\u6b74\u3084\u4eca\u5f8c\u306e\u76ee\u6a19\u3001\u73fe\u5728\u306e\u30b9\u30ad\u30eb\u30bb\u30c3\u30c8\u306a\u3069\u3092\u7d39\u4ecb\u3057\u307e\u3059\uff01",link:"/introduction"},{name:"LINK",text:"\u500b\u4eba\u30d6\u30ed\u30b0\u3084GitHub\u306a\u3069\u3001\u5404\u7a2e\u30ea\u30f3\u30af\u3092\u63b2\u8f09\u3057\u3066\u3044\u307e\u3059\uff01",link:"/link"}].map((function(e,t){return Object(b.jsx)(O,{name:e.name,text:e.text,link:e.link},t)}))})]})}}]),n}(c.a.Component)),m=function(e){Object(j.a)(n,e);var t=Object(u.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){var e=this.props.text.split("<br>").map((function(e,t){return Object(b.jsx)("p",{children:e},t)}));return Object(b.jsxs)("div",{className:"introductionItem",children:[Object(b.jsx)("div",{className:"titleContent",children:Object(b.jsx)("h2",{children:this.props.title})}),Object(b.jsx)("div",{className:"textContent",children:e})]})}}]),n}(c.a.Component),x=(n(34),function(e){Object(j.a)(n,e);var t=Object(u.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(b.jsxs)("div",{className:"inner",children:[Object(b.jsx)("h1",{className:"pageTitle",children:"INTRODUCTION"}),Object(b.jsx)("div",{className:"introductionWrap",children:[{title:"PROFILE",text:"\u540d\u524d\uff1a\u4e95\u4e0a\u6075\u592a<br>\u5e74\u9f62\uff1a26\u6b73<br>\u5c45\u4f4f\u5730\uff1a\u6771\u4eac\u90fd\u6e0b\u8c37\u533a"},{title:"CAREER",text:"\u5143\u3088\u308a\u6d77\u5916\u3067\u751f\u6d3b\u3059\u308b\u3053\u3068\u304c\u5922\u3060\u3063\u305f\u306e\u3067\u3001\u6d77\u5916\u62e0\u70b9\u306b\u30d5\u30eb\u30ea\u30e2\u30fc\u30c8\u3067\u50cd\u304d\u3084\u3059\u3044Web\u5236\u4f5c\u306e\u72ec\u5b66\u3092\u59cb\u3081\u307e\u3057\u305f\u3002<br>\u5927\u5b66\u4f11\u5b66\u5f8c\u3001\u30d5\u30ea\u30fc\u30e9\u30f3\u30b9web\u30a8\u30f3\u30b8\u30cb\u30a2\u3068\u3057\u3066\u6771\u5357\u30a2\u30b8\u30a2\u30672\u5e74\u307b\u3069\u751f\u6d3b\u3057\u3066\u3057\u307e\u3044\u3057\u305f\u304c\u3001\u6b21\u7b2c\u306b\u30d7\u30ed\u30b0\u30e9\u30df\u30f3\u30b0\u30b9\u30ad\u30eb\u306e\u5411\u4e0a\u306b\u60c5\u71b1\u3092\u6301\u3064\u3088\u3046\u306b\u306a\u308a\u3001\u3088\u308a\u30ec\u30d9\u30eb\u30a2\u30c3\u30d7\u3092\u56f3\u308c\u308b\u65e5\u672c\u306e\u5236\u4f5c\u4f01\u696d\u306b\u5c31\u8077\u3057\u307e\u3057\u305f\u3002"},{title:"TARGET",text:"\u30d5\u30ed\u30f3\u30c8\u30a8\u30f3\u30c9\u30a8\u30f3\u30b8\u30cb\u30a2\u3068\u3057\u3066\u3001\u30e2\u30c0\u30f3\u306a\u30b9\u30ad\u30eb\u3078\u306e\u30ad\u30e3\u30c3\u30c1\u30a2\u30c3\u30d7\u306f\u5fc5\u9808\u4e8b\u9805\u3067\u3042\u308b\u3068\u8003\u3048\u3066\u304a\u308a\u3001\u73fe\u5728\u306fVue/React/TypeScript\u306e\u30a4\u30f3\u30d7\u30c3\u30c8+\u30a2\u30a6\u30c8\u30d7\u30c3\u30c8\u3092\u9032\u3081\u3066\u3044\u307e\u3059\u3002<br>Vue\u3068React\u306b\u3064\u3044\u3066\u306f\u6700\u7d42\u7684\u306b\u306f\u3044\u305a\u308c\u304b\u4e00\u65b9\u306b\u7d5e\u308b\u4e88\u5b9a\u3067\u3059\u304c\u3001\u73fe\u5728\u306f\u81ea\u5206\u306e\u9032\u8def\u3092\u5e83\u3052\u308b\u305f\u3081\u306b\u4e21\u65b9\u306e\u30ec\u30d9\u30eb\u30a2\u30c3\u30d7\u3092\u56f3\u3063\u3066\u3044\u307e\u3059\u3002<br>\u305d\u308c\u305e\u308c\u3001Vue CLI\u3068Create React App\u3092\u7528\u3044\u305fSPA\u306e\u5b9f\u88c5\u3092\u7d4c\u9a13\u6e08\u307f\u3067\u3001\u73fe\u5728\u306f\u7c21\u6613\u7684\u306a\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3092\u958b\u767a\u4e2d\u3067\u3059\u3002<br>\u30e2\u30c0\u30f3\u306a\u30b9\u30ad\u30eb\u3092\u4f7f\u7528\u3057\u3001\u81ea\u793e\u30b5\u30fc\u30d3\u30b9\u306e\u958b\u767a/\u6539\u5584\u306b\u8ca2\u732e\u3067\u304d\u308b\u30a8\u30f3\u30b8\u30cb\u30a2\u306b\u306a\u308b\u305f\u3081\u3001\u65e5\u3005\u697d\u3057\u307f\u306a\u304c\u3089\u52aa\u529b\u3057\u3066\u3044\u304f\u6240\u5b58\u3067\u3059\u3002"},{title:"SKILL",text:"JavaScript(ES6)/jQuery/Vue/React/HTML5(Pug,Jade)/CSS3(Sass)/gulp/Grunt/WordPress/PHP/BootStrap4/Git(\u203b1)/Photoshop/Illustrator<br>\u203b1 \u30bd\u30fc\u30b9\u306f\u3001Git\u3068SourceTree\u3092\u9023\u643a\u3057\u3066\u7ba1\u7406\u3057\u3066\u3044\u307e\u3059\u3002"},{title:"QUALIFICATION",text:"TOEIC885\u70b9/\u82f1\u8a9e\u691c\u5b9a\u6e961\u7d1a<br>\u203b\u7fbd\u7530\u7a7a\u6e2f\u306b\u3066\u5916\u56fd\u4ebaVIP\u306e\u30a4\u30f3\u30d0\u30a6\u30f3\u30c9/\u30a2\u30a6\u30c8\u30d0\u30a6\u30f3\u30c9\u696d\u52d9\u30821\u5e74\u9593\u7d4c\u9a13\u3057\u3066\u304a\u308a\u3001\u82f1\u8a9e\u3067\u306e\u30b3\u30df\u30e5\u30cb\u30b1\u30fc\u30b7\u30e7\u30f3\u304c\u53ef\u80fd\u3067\u3059\u3002"}].map((function(e,t){return Object(b.jsx)(m,{title:e.title,text:e.text},t)}))})]})}}]),n}(c.a.Component)),f=function(e){Object(j.a)(n,e);var t=Object(u.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(b.jsx)("li",{className:"linkItem",children:Object(b.jsxs)("a",{href:this.props.link,target:"_blank",children:[Object(b.jsx)("img",{className:"linkImg",src:this.props.image,alt:""}),Object(b.jsxs)("div",{className:"linkContent",children:[Object(b.jsx)("h2",{className:"linkTitle",children:this.props.title}),Object(b.jsx)("div",{className:"linkText",children:this.props.text})]})]})})}}]),n}(c.a.Component),k=(n(35),function(e){Object(j.a)(n,e);var t=Object(u.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(b.jsxs)("div",{className:"inner",children:[Object(b.jsx)("h1",{className:"pageTitle",children:"LINK"}),Object(b.jsx)("div",{className:"linkWrap",children:[{link:"https://inouekeita.work/",image:"inouekeita_work.png",title:"inouekeita.work",text:"\u30d5\u30ea\u30fc\u30e9\u30f3\u30b9\u306e\u9803\u3001\u55b6\u696d\u7528\u306b\u6d3b\u8e8d\u3057\u305f\u30dd\u30fc\u30c8\u30d5\u30a9\u30ea\u30aa\u30b5\u30a4\u30c8\u3067\u3059\u3002\u30c7\u30b6\u30a4\u30f3/\u30b3\u30fc\u30c7\u30a3\u30f3\u30b0/WordPress\u30c6\u30fc\u30de\u69cb\u7bc9\u307e\u3067\u884c\u3044\u307e\u3057\u305f\u3002\u4e00\u90e8\u30d5\u30ea\u30fc\u30e9\u30f3\u30b9\u6642\u4ee3\u306e\u5b9f\u52d9\u5b9f\u7e3e\u3082\u63b2\u8f09\u3057\u3066\u3044\u308b\u306e\u3067\u3001\u662f\u975e\u3054\u89a7\u304f\u3060\u3055\u3044\uff01"},{link:"https://mannequin-code.com/",image:"mannequin_code.png",title:"Mannequin Code",text:"\u5b8c\u5168\u653e\u7f6e\u4e2d\u306e\u500b\u4eba\u30d6\u30ed\u30b0\u3067\u3059\u3002\u3082\u3063\u3068\u66f4\u65b0\u3067\u304d\u308b\u3088\u3046\u9811\u5f35\u308a\u307e\u3059\u3002"},{link:"https://github.com/k-inoue24",image:"github.png",title:"GitHub",text:"\u500b\u4eba\u958b\u767a\u3084\u81ea\u5df1\u5b66\u7fd2\u306e\u8de1\u3092\u30ec\u30dd\u30b8\u30c8\u30ea\u306b\u6b8b\u3057\u3066\u3044\u307e\u3059\u3002\u30bd\u30fc\u30b9\u306fSourceTree\u3068\u9023\u643a\u3055\u305b\u3066\u7ba1\u7406\u4e2d\u3067\u3059\u3002"},{link:"https://twitter.com/KeitaBangkok",image:"twitter.png",title:"Twitter",text:"\u6d77\u5916\u751f\u6d3b\u3057\u3066\u3044\u305f\u9803\u306f\u5f53\u6642\u306e\u6a21\u69d8\u3092\u3088\u304f\u30c4\u30a4\u30fc\u30c8\u3057\u3066\u3044\u307e\u3057\u305f\u3002\u73fe\u5728\u306f\u30d7\u30ed\u30b0\u30e9\u30df\u30f3\u30b0\u60c5\u5831\u306e\u767a\u4fe1\u304c\u4e2d\u5fc3\u3067\u3059\u3002"}].map((function(e,t){return Object(b.jsx)(f,{link:e.link,image:e.image,title:e.title,text:e.text},t)}))})]})}}]),n}(c.a.Component)),v=function(e){Object(j.a)(n,e);var t=Object(u.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(b.jsx)("main",{children:Object(b.jsxs)(d.c,{children:[Object(b.jsx)(d.a,{path:"/",component:p,exact:!0}),Object(b.jsx)(d.a,{path:"/introduction",component:x}),Object(b.jsx)(d.a,{path:"/link",component:k}),Object(b.jsx)(d.a,{component:p,exact:!0})]})})}}]),n}(c.a.Component),C=function(e){Object(j.a)(n,e);var t=Object(u.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(b.jsx)("footer",{children:"Copyright - Keita Inoue, 2021 All Rights Reserved."})}}]),n}(c.a.Component);n(36);var N=function(){return Object(b.jsxs)("div",{className:"App",children:[Object(b.jsx)(h,{}),Object(b.jsx)(v,{}),Object(b.jsx)(C,{})]})},g=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,38)).then((function(t){var n=t.getCLS,i=t.getFID,c=t.getFCP,a=t.getLCP,s=t.getTTFB;n(e),i(e),c(e),a(e),s(e)}))};s.a.render(Object(b.jsx)(r.a,{basename:"/portfolio_react",children:Object(b.jsx)(c.a.StrictMode,{children:Object(b.jsx)(N,{})})}),document.getElementById("root")),g()}},[[37,1,2]]]);
//# sourceMappingURL=main.99aea910.chunk.js.map