(this["webpackJsonpgui-search"]=this["webpackJsonpgui-search"]||[]).push([[0],{32:function(t,e,n){},42:function(t,e,n){},48:function(t,e,n){"use strict";n.r(e);var o=n(1),c=n.n(o),i=n(33),a=n.n(i),r=(n(42),n(32),n(9)),s=n(7),l=n(11),u=n(12),j=n(50),b=n(49),p=n(53),h=n(3),O=function(t){return Object(h.jsx)(b.a,{args:[1,1,1],position:[].concat(Object(r.a)(t.position),[.5]),children:Object(h.jsx)("meshPhongMaterial",{attach:"material",color:t.color})})},f=n(0),x=function(t){var e=t.children,n=t.color,c=void 0===n?"#fff":n,i=t.position,a=(Object(l.a)(t,["children","color","position"]),Object(u.e)(f.FontLoader,"/font.json")),r=Object(o.useMemo)((function(){return{font:a,size:5,height:1.5}}),[a]);return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(b.a,{args:[1,1,1],position:[i[0],i[1],.5],children:Object(h.jsx)("meshPhongMaterial",{attach:"material",opacity:0,transparent:!0,color:"green"})}),Object(h.jsx)("group",{position:[i[0],i[1],0],scale:[.1,.1,.1],children:Object(h.jsxs)("mesh",{position:e>9?[-4,-2,0]:[-2,-3,0],children:[Object(h.jsx)("textBufferGeometry",{args:[e,r]}),Object(h.jsx)("meshBasicMaterial",{color:c})]})})]})},d=n(51),g=function(t){var e=Object(o.useMemo)((function(){for(var e=Object(s.a)(t.position,2),n=e[0],o=e[1],c=[],i=1,a=-n/2;a<=n/2;a++)c.push([a,-i*o/2,.1],[a,i*o/2,.1]),i*=-1;c.pop(),i=1;for(var r=o/2;r>=-o/2;r--)c.push([i*n/2,r,.1],[-i*n/2,r,.1]),i*=-1;return c}),[t.position]);return Object(h.jsx)(d.a,{points:e,color:"black",lineWidth:1})},m=function(t){return Object(h.jsx)(b.a,{args:[1,1,1],position:t.position,children:Object(h.jsx)("meshPhongMaterial",{attach:"material",transparent:!0,opacity:0,color:t.color})})},v=n(52),y=function(t){var e=Object(v.a)("/WinnerCup.fbx");return Object(h.jsxs)("group",{children:[Object(h.jsx)(m,{position:[].concat(Object(r.a)(t.position),[.5]),color:"green"}),Object(h.jsx)("primitive",{object:e,dispose:null,scale:[.002,.002,.002],position:[].concat(Object(r.a)(t.position),[.5]),rotation:[Math.PI/2,0,0]})]})},S=function(t){t.size,Object(l.a)(t,["size"]);var e=Object(o.useState)([]),n=Object(s.a)(e,2),c=n[0],i=n[1],a=Object(o.useState)(-1),f=Object(s.a)(a,2),d=f[0],v=f[1],S=Object(o.useState)(null),M=Object(s.a)(S,2),C=M[0],P=M[1],k=Object(o.useState)(null),F=Object(s.a)(k,2),N=F[0],E=F[1],I=Object(o.useState)("Select destination Grid"),w=Object(s.a)(I,2),B=w[0],T=w[1],z=Object(o.useState)(!1),L=Object(s.a)(z,2),A=L[0],G=L[1],D=Object(o.useState)(4),J=Object(s.a)(D,2),W=J[0],X=J[1],_=Object(o.useState)(4),R=Object(s.a)(_,2),Y=R[0],q=R[1],H=function(){var t=String.fromCharCode(Math.floor(25*Math.random()+65));do{var e=Math.floor(42*Math.random()+48);(e<58||e>64)&&(t+=String.fromCharCode(e))}while(t.length<32);return t};Object(o.useEffect)((function(){for(var t=(W-1)/2,e=(Y-1)/2,n=[],o=-t;o<=t;o++)for(var c=-e;c<=e;c++)n.push({position:[o,c],key:H(),color:"green",type:null,value:-1});i(n)}),[W,Y]);var K=function(t){return c.findIndex((function(e){return e.position[0]==t.x&e.position[1]==t.y}))},Q=function t(e,n,o){if(console.log(o),o)console.log("path found");else if(e!=C){var a=Object(r.a)(c),s=c[e].position,l=null,u=o;[K({x:s[0]-1,y:s[1]}),K({x:s[0]+1,y:s[1]}),K({x:s[0],y:s[1]-1}),K({x:s[0],y:s[1]+1})].forEach((function(t){t==C&&(console.log("des found"),u=!0),-1!=t&&console.log(t,a[t].value,n),-1!=t&&"text"==a[t].type&&a[t].value<n&&(n=a[t].value,l=t)})),null!=l?(a[l].type="obs",a[l].color="red",i((function(){return a})),setTimeout((function(){return t(l,n,u)}),500)):(console.log(e,C),T(u?"Path found":"Path not found"))}else console.log("path found")};Object(o.useEffect)((function(){c.length<1||-1==c.findIndex((function(t){return null==t.type}))&&0==A&&(G(!0),console.log("oasjoias"),setTimeout((function(){console.log("completed proximity"),T("Starting path tracker"),Q(N,Number.MAX_SAFE_INTEGER,!1)}),2e3))}),[c]);var U=function t(e){var n=Object(r.a)(c),o=c[e].position,a=c[e].value;[K({x:o[0]-1,y:o[1]}),K({x:o[0]+1,y:o[1]}),K({x:o[0],y:o[1]-1}),K({x:o[0],y:o[1]+1})].forEach((function(e){-1!=e&&null==n[e].type&&-1==n[e].value&&(n[e].value=a+1,n[e].color="red",n[e].type="text",setTimeout((function(){i((function(){return n})),t(e)}),1e3))}))};return Object(h.jsxs)("div",{className:"App",children:[Object(h.jsx)("div",{className:"wrapper",children:-1==d?Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("h1",{className:"text",children:"Select the grid Size"}),Object(h.jsx)("h1",{className:"text",children:"X :"}),Object(h.jsx)("input",{type:"number",min:"1",max:"10",value:W,onChange:function(t){var e=t.target.value;X(e>10?20:2*e)}}),Object(h.jsx)("h1",{className:"text",children:"Y :"}),Object(h.jsx)("input",{type:"number",min:"1",max:"10",value:Y,onChange:function(t){var e=t.target.value;q(e>10?20:2*e)}}),Object(h.jsx)("button",{className:"gameStateButton",onClick:function(){return v(0)},children:"Continue"})]}):Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("h1",{className:"text",children:B}),Object(h.jsx)("button",{onClick:function(){!d&null!=C?(v(1),T("left click to add obstacles and right click to remove them")):1==d?(T("Select the starting cube"),v(2)):2==d&&(T("finding proximity values"),v(3),U(C))},className:"gameStateButton",children:"done"})]})}),Object(h.jsx)(j.a,{}),Object(h.jsx)(u.a,{shadowMap:!0,invalidateFrameloop:!0,camera:{position:[0,15,15],far:100},style:{height:"calc(100vh - 50px)"},children:Object(h.jsxs)(o.Suspense,{fallback:null,children:[Object(h.jsxs)("group",{rotation:[-Math.PI/2,0,0],children:[Object(h.jsx)(b.b,{args:[W,Y]}),Object(h.jsx)("ambientLight",{intensity:1}),Object(h.jsx)("spotLight",{intensity:2,position:[10,10,10]}),Object(h.jsx)("group",{onPointerDown:function(t){if(t.stopPropagation(),-1!=d){var e=t.intersections[0].object.position,n=K(e),o=Object(r.a)(c);-1!=n&&(0===t.button?1===d?o[n].type="obs":2===d&null==N?(o[n].type="obs",o[n].color="red",E(n)):null==C&&(o[n].type="des",o[n].value=0,P(n)):(o[n].type=null,1==d&n==C&&(o[n].type="obs"),2==d&n==N&&(o[n].color="green",o[n].value=-1,E(null)),d||P(null)),i((function(){return o})))}},children:c.map((function(t){return null==t.type?Object(h.jsx)(m,{position:t.position}):"des"==t.type?Object(h.jsx)(y,{position:t.position}):"text"==t.type?Object(h.jsx)(x,{position:t.position,children:""+t.value,color:t.color}):Object(h.jsx)(O,{position:t.position,color:t.color})}))}),Object(h.jsx)(g,{position:[W,Y]})]}),Object(h.jsx)(p.a,{})]})})]})};var M=function(){return Object(h.jsx)(S,{size:[20,20]})},C=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,54)).then((function(e){var n=e.getCLS,o=e.getFID,c=e.getFCP,i=e.getLCP,a=e.getTTFB;n(t),o(t),c(t),i(t),a(t)}))};a.a.render(Object(h.jsx)(c.a.StrictMode,{children:Object(h.jsx)(M,{})}),document.getElementById("root")),C()}},[[48,1,2]]]);
//# sourceMappingURL=main.3ef0d6bb.chunk.js.map