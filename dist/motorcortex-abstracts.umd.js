!function(t,n){"object"==typeof exports&&"undefined"!=typeof module?module.exports=n(require("@donkeyclip/motorcortex")):"function"==typeof define&&define.amd?define(["@donkeyclip/motorcortex"],n):(t="undefined"!=typeof globalThis?globalThis:t||self)["@donkeyclip/motorcortex-abstracts"]=n(t.MotorCortex)}(this,(function(t){"use strict";function n(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,r)}return e}function e(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?n(Object(r),!0).forEach((function(n){a(t,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(r,n))}))}return t}function r(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}function i(t,n){for(var e=0;e<n.length;e++){var r=n[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function o(t,n,e){return n&&i(t.prototype,n),e&&i(t,e),t}function a(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}function s(t,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(n&&n.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),n&&p(t,n)}function c(t){return c=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},c(t)}function p(t,n){return p=Object.setPrototypeOf||function(t,n){return t.__proto__=n,t},p(t,n)}function l(t,n){if(n&&("object"==typeof n||"function"==typeof n))return n;if(void 0!==n)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}function u(t){var n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var e,r=c(t);if(n){var i=c(this).constructor;e=Reflect.construct(r,arguments,i)}else e=r.apply(this,arguments);return l(this,e)}}var h="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},f=function(t){return t&&t.Math==Math&&t},d=f("object"==typeof globalThis&&globalThis)||f("object"==typeof window&&window)||f("object"==typeof self&&self)||f("object"==typeof h&&h)||function(){return this}()||Function("return this")(),y={},m=function(t){try{return!!t()}catch(t){return!0}},v=!m((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]})),g=Function.prototype.call,b=g.bind?g.bind(g):function(){return g.apply(g,arguments)},w={},x={}.propertyIsEnumerable,S=Object.getOwnPropertyDescriptor,k=S&&!x.call({1:2},1);w.f=k?function(t){var n=S(this,t);return!!n&&n.enumerable}:x;var j,O,C=function(t,n){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:n}},z=Function.prototype,T=z.bind,P=z.call,M=T&&T.bind(P),E=T?function(t){return t&&M(P,t)}:function(t){return t&&function(){return P.apply(t,arguments)}},I=E,A=I({}.toString),R=I("".slice),L=function(t){return R(A(t),8,-1)},V=E,D=m,F=L,_=d.Object,H=V("".split),G=D((function(){return!_("z").propertyIsEnumerable(0)}))?function(t){return"String"==F(t)?H(t,""):_(t)}:_,B=d.TypeError,N=function(t){if(null==t)throw B("Can't call method on "+t);return t},W=G,U=N,Q=function(t){return W(U(t))},q=function(t){return"function"==typeof t},Y=q,K=function(t){return"object"==typeof t?null!==t:Y(t)},X=d,$=q,J=function(t){return $(t)?t:void 0},Z=function(t,n){return arguments.length<2?J(X[t]):X[t]&&X[t][n]},tt=E({}.isPrototypeOf),nt=d,et=Z("navigator","userAgent")||"",rt=nt.process,it=nt.Deno,ot=rt&&rt.versions||it&&it.version,at=ot&&ot.v8;at&&(O=(j=at.split("."))[0]>0&&j[0]<4?1:+(j[0]+j[1])),!O&&et&&(!(j=et.match(/Edge\/(\d+)/))||j[1]>=74)&&(j=et.match(/Chrome\/(\d+)/))&&(O=+j[1]);var st=O,ct=st,pt=m,lt=!!Object.getOwnPropertySymbols&&!pt((function(){var t=Symbol();return!String(t)||!(Object(t)instanceof Symbol)||!Symbol.sham&&ct&&ct<41})),ut=lt&&!Symbol.sham&&"symbol"==typeof Symbol.iterator,ht=Z,ft=q,dt=tt,yt=ut,mt=d.Object,vt=yt?function(t){return"symbol"==typeof t}:function(t){var n=ht("Symbol");return ft(n)&&dt(n.prototype,mt(t))},gt=d.String,bt=q,wt=function(t){try{return gt(t)}catch(t){return"Object"}},xt=d.TypeError,St=function(t){if(bt(t))return t;throw xt(wt(t)+" is not a function")},kt=St,jt=b,Ot=q,Ct=K,zt=d.TypeError,Tt={exports:{}},Pt=d,Mt=Object.defineProperty,Et=function(t,n){try{Mt(Pt,t,{value:n,configurable:!0,writable:!0})}catch(e){Pt[t]=n}return n},It=Et,At="__core-js_shared__",Rt=d[At]||It(At,{}),Lt=Rt;(Tt.exports=function(t,n){return Lt[t]||(Lt[t]=void 0!==n?n:{})})("versions",[]).push({version:"3.19.1",mode:"global",copyright:"© 2021 Denis Pushkarev (zloirock.ru)"});var Vt=N,Dt=d.Object,Ft=function(t){return Dt(Vt(t))},_t=Ft,Ht=E({}.hasOwnProperty),Gt=Object.hasOwn||function(t,n){return Ht(_t(t),n)},Bt=E,Nt=0,Wt=Math.random(),Ut=Bt(1..toString),Qt=function(t){return"Symbol("+(void 0===t?"":t)+")_"+Ut(++Nt+Wt,36)},qt=d,Yt=Tt.exports,Kt=Gt,Xt=Qt,$t=lt,Jt=ut,Zt=Yt("wks"),tn=qt.Symbol,nn=tn&&tn.for,en=Jt?tn:tn&&tn.withoutSetter||Xt,rn=function(t){if(!Kt(Zt,t)||!$t&&"string"!=typeof Zt[t]){var n="Symbol."+t;$t&&Kt(tn,t)?Zt[t]=tn[t]:Zt[t]=Jt&&nn?nn(n):en(n)}return Zt[t]},on=b,an=K,sn=vt,cn=function(t,n){var e=t[n];return null==e?void 0:kt(e)},pn=function(t,n){var e,r;if("string"===n&&Ot(e=t.toString)&&!Ct(r=jt(e,t)))return r;if(Ot(e=t.valueOf)&&!Ct(r=jt(e,t)))return r;if("string"!==n&&Ot(e=t.toString)&&!Ct(r=jt(e,t)))return r;throw zt("Can't convert object to primitive value")},ln=rn,un=d.TypeError,hn=ln("toPrimitive"),fn=function(t,n){if(!an(t)||sn(t))return t;var e,r=cn(t,hn);if(r){if(void 0===n&&(n="default"),e=on(r,t,n),!an(e)||sn(e))return e;throw un("Can't convert object to primitive value")}return void 0===n&&(n="number"),pn(t,n)},dn=vt,yn=function(t){var n=fn(t,"string");return dn(n)?n:n+""},mn=K,vn=d.document,gn=mn(vn)&&mn(vn.createElement),bn=function(t){return gn?vn.createElement(t):{}},wn=!v&&!m((function(){return 7!=Object.defineProperty(bn("div"),"a",{get:function(){return 7}}).a})),xn=v,Sn=b,kn=w,jn=C,On=Q,Cn=yn,zn=Gt,Tn=wn,Pn=Object.getOwnPropertyDescriptor;y.f=xn?Pn:function(t,n){if(t=On(t),n=Cn(n),Tn)try{return Pn(t,n)}catch(t){}if(zn(t,n))return jn(!Sn(kn.f,t,n),t[n])};var Mn={},En=d,In=K,An=En.String,Rn=En.TypeError,Ln=function(t){if(In(t))return t;throw Rn(An(t)+" is not an object")},Vn=v,Dn=wn,Fn=Ln,_n=yn,Hn=d.TypeError,Gn=Object.defineProperty;Mn.f=Vn?Gn:function(t,n,e){if(Fn(t),n=_n(n),Fn(e),Dn)try{return Gn(t,n,e)}catch(t){}if("get"in e||"set"in e)throw Hn("Accessors not supported");return"value"in e&&(t[n]=e.value),t};var Bn=Mn,Nn=C,Wn=v?function(t,n,e){return Bn.f(t,n,Nn(1,e))}:function(t,n,e){return t[n]=e,t},Un={exports:{}},Qn=q,qn=Rt,Yn=E(Function.toString);Qn(qn.inspectSource)||(qn.inspectSource=function(t){return Yn(t)});var Kn,Xn,$n,Jn=qn.inspectSource,Zn=q,te=Jn,ne=d.WeakMap,ee=Zn(ne)&&/native code/.test(te(ne)),re=Tt.exports,ie=Qt,oe=re("keys"),ae={},se=ee,ce=d,pe=E,le=K,ue=Wn,he=Gt,fe=Rt,de=function(t){return oe[t]||(oe[t]=ie(t))},ye=ae,me="Object already initialized",ve=ce.TypeError,ge=ce.WeakMap;if(se||fe.state){var be=fe.state||(fe.state=new ge),we=pe(be.get),xe=pe(be.has),Se=pe(be.set);Kn=function(t,n){if(xe(be,t))throw new ve(me);return n.facade=t,Se(be,t,n),n},Xn=function(t){return we(be,t)||{}},$n=function(t){return xe(be,t)}}else{var ke=de("state");ye[ke]=!0,Kn=function(t,n){if(he(t,ke))throw new ve(me);return n.facade=t,ue(t,ke,n),n},Xn=function(t){return he(t,ke)?t[ke]:{}},$n=function(t){return he(t,ke)}}var je={set:Kn,get:Xn,has:$n,enforce:function(t){return $n(t)?Xn(t):Kn(t,{})},getterFor:function(t){return function(n){var e;if(!le(n)||(e=Xn(n)).type!==t)throw ve("Incompatible receiver, "+t+" required");return e}}},Oe=v,Ce=Gt,ze=Function.prototype,Te=Oe&&Object.getOwnPropertyDescriptor,Pe=Ce(ze,"name"),Me=Pe&&"something"===function(){}.name,Ee=Pe&&(!Oe||Oe&&Te(ze,"name").configurable),Ie=d,Ae=q,Re=Gt,Le=Wn,Ve=Et,De=Jn,Fe={EXISTS:Pe,PROPER:Me,CONFIGURABLE:Ee}.CONFIGURABLE,_e=je.get,He=je.enforce,Ge=String(String).split("String");(Un.exports=function(t,n,e,r){var i,o=!!r&&!!r.unsafe,a=!!r&&!!r.enumerable,s=!!r&&!!r.noTargetGet,c=r&&void 0!==r.name?r.name:n;Ae(e)&&("Symbol("===String(c).slice(0,7)&&(c="["+String(c).replace(/^Symbol\(([^)]*)\)/,"$1")+"]"),(!Re(e,"name")||Fe&&e.name!==c)&&Le(e,"name",c),(i=He(e)).source||(i.source=Ge.join("string"==typeof c?c:""))),t!==Ie?(o?!s&&t[n]&&(a=!0):delete t[n],a?t[n]=e:Le(t,n,e)):a?t[n]=e:Ve(n,e)})(Function.prototype,"toString",(function(){return Ae(this)&&_e(this).source||De(this)}));var Be={},Ne=Math.ceil,We=Math.floor,Ue=function(t){var n=+t;return n!=n||0===n?0:(n>0?We:Ne)(n)},Qe=Ue,qe=Math.max,Ye=Math.min,Ke=Ue,Xe=Math.min,$e=function(t){return t>0?Xe(Ke(t),9007199254740991):0},Je=function(t){return $e(t.length)},Ze=Q,tr=function(t,n){var e=Qe(t);return e<0?qe(e+n,0):Ye(e,n)},nr=Je,er=function(t){return function(n,e,r){var i,o=Ze(n),a=nr(o),s=tr(r,a);if(t&&e!=e){for(;a>s;)if((i=o[s++])!=i)return!0}else for(;a>s;s++)if((t||s in o)&&o[s]===e)return t||s||0;return!t&&-1}},rr={includes:er(!0),indexOf:er(!1)},ir=Gt,or=Q,ar=rr.indexOf,sr=ae,cr=E([].push),pr=function(t,n){var e,r=or(t),i=0,o=[];for(e in r)!ir(sr,e)&&ir(r,e)&&cr(o,e);for(;n.length>i;)ir(r,e=n[i++])&&(~ar(o,e)||cr(o,e));return o},lr=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"],ur=pr,hr=lr.concat("length","prototype");Be.f=Object.getOwnPropertyNames||function(t){return ur(t,hr)};var fr={};fr.f=Object.getOwnPropertySymbols;var dr=Z,yr=Be,mr=fr,vr=Ln,gr=E([].concat),br=dr("Reflect","ownKeys")||function(t){var n=yr.f(vr(t)),e=mr.f;return e?gr(n,e(t)):n},wr=Gt,xr=br,Sr=y,kr=Mn,jr=m,Or=q,Cr=/#|\.prototype\./,zr=function(t,n){var e=Pr[Tr(t)];return e==Er||e!=Mr&&(Or(n)?jr(n):!!n)},Tr=zr.normalize=function(t){return String(t).replace(Cr,".").toLowerCase()},Pr=zr.data={},Mr=zr.NATIVE="N",Er=zr.POLYFILL="P",Ir=zr,Ar=d,Rr=y.f,Lr=Wn,Vr=Un.exports,Dr=Et,Fr=function(t,n){for(var e=xr(n),r=kr.f,i=Sr.f,o=0;o<e.length;o++){var a=e[o];wr(t,a)||r(t,a,i(n,a))}},_r=Ir,Hr=function(t,n){var e,r,i,o,a,s=t.target,c=t.global,p=t.stat;if(e=c?Ar:p?Ar[s]||Dr(s,{}):(Ar[s]||{}).prototype)for(r in n){if(o=n[r],i=t.noTargetGet?(a=Rr(e,r))&&a.value:e[r],!_r(c?r:s+(p?".":"#")+r,t.forced)&&void 0!==i){if(typeof o==typeof i)continue;Fr(o,i)}(t.sham||i&&i.sham)&&Lr(o,"sham",!0),Vr(e,r,o,t)}},Gr=L,Br=Array.isArray||function(t){return"Array"==Gr(t)},Nr=yn,Wr=Mn,Ur=C,Qr={};Qr[rn("toStringTag")]="z";var qr=d,Yr="[object z]"===String(Qr),Kr=q,Xr=L,$r=rn("toStringTag"),Jr=qr.Object,Zr="Arguments"==Xr(function(){return arguments}()),ti=E,ni=m,ei=q,ri=Yr?Xr:function(t){var n,e,r;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(e=function(t,n){try{return t[n]}catch(t){}}(n=Jr(t),$r))?e:Zr?Xr(n):"Object"==(r=Xr(n))&&Kr(n.callee)?"Arguments":r},ii=Jn,oi=function(){},ai=[],si=Z("Reflect","construct"),ci=/^\s*(?:class|function)\b/,pi=ti(ci.exec),li=!ci.exec(oi),ui=function(t){if(!ei(t))return!1;try{return si(oi,ai,t),!0}catch(t){return!1}},hi=!si||ni((function(){var t;return ui(ui.call)||!ui(Object)||!ui((function(){t=!0}))||t}))?function(t){if(!ei(t))return!1;switch(ri(t)){case"AsyncFunction":case"GeneratorFunction":case"AsyncGeneratorFunction":return!1}return li||!!pi(ci,ii(t))}:ui,fi=d,di=Br,yi=hi,mi=K,vi=rn("species"),gi=fi.Array,bi=function(t){var n;return di(t)&&(n=t.constructor,(yi(n)&&(n===gi||di(n.prototype))||mi(n)&&null===(n=n[vi]))&&(n=void 0)),void 0===n?gi:n},wi=function(t,n){return new(bi(t))(0===n?0:n)},xi=m,Si=st,ki=rn("species"),ji=function(t){return Si>=51||!xi((function(){var n=[];return(n.constructor={})[ki]=function(){return{foo:1}},1!==n[t](Boolean).foo}))},Oi=Hr,Ci=d,zi=m,Ti=Br,Pi=K,Mi=Ft,Ei=Je,Ii=function(t,n,e){var r=Nr(n);r in t?Wr.f(t,r,Ur(0,e)):t[r]=e},Ai=wi,Ri=ji,Li=st,Vi=rn("isConcatSpreadable"),Di=9007199254740991,Fi="Maximum allowed index exceeded",_i=Ci.TypeError,Hi=Li>=51||!zi((function(){var t=[];return t[Vi]=!1,t.concat()[0]!==t})),Gi=Ri("concat"),Bi=function(t){if(!Pi(t))return!1;var n=t[Vi];return void 0!==n?!!n:Ti(t)};Oi({target:"Array",proto:!0,forced:!Hi||!Gi},{concat:function(t){var n,e,r,i,o,a=Mi(this),s=Ai(a,0),c=0;for(n=-1,r=arguments.length;n<r;n++)if(Bi(o=-1===n?a:arguments[n])){if(c+(i=Ei(o))>Di)throw _i(Fi);for(e=0;e<i;e++,c++)e in o&&Ii(s,c,o[e])}else{if(c>=Di)throw _i(Fi);Ii(s,c++,o)}return s.length=c,s}});var Ni=m,Wi=Hr,Ui=G,Qi=Q,qi=function(t,n){var e=[][t];return!!e&&Ni((function(){e.call(null,n||function(){throw 1},1)}))},Yi=E([].join),Ki=Ui!=Object,Xi=qi("join",",");Wi({target:"Array",proto:!0,forced:Ki||!Xi},{join:function(t){return Yi(Qi(this),void 0===t?",":t)}});var $i=function(n){s(i,n);var e=u(i);function i(){return r(this,i),e.apply(this,arguments)}return o(i,[{key:"font",get:function(){return[{type:"google-font",src:"https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,400;0,500;0,800;1,700;1,800;1,900&display=swap"}]}},{key:"html",get:function(){for(var t=[],n=1;n<=this.attrs.items;n++){var e=1===n?this.attrs.crossSize/2-this.attrs.crossThickness/2:this.attrs.crossSize*n;t.push('<div style="left: '.concat(e,'px;" class="cross-wrapper-item cross-wrapper-item-').concat(n,'">\n          <div class="cross cross-item-').concat(n,'"></div>\n        </div>'))}return'\n      <div class="wrapper">\n        '.concat(t.join(""),"\n  \t  </div>\n    ")}},{key:"css",get:function(){return"\n      .wrapper{\n        width: ".concat(this.attrs.width,"px;\n        height: ").concat(this.attrs.height,"px;\n        display:flex;\n        font-family: 'Poppins', sans-serif;\n      }\n      \n      .cross {\n        background: ").concat(this.attrs.color,";\n        height: ").concat(this.attrs.crossSize,"px;\n        width: ").concat(this.attrs.crossThickness,"px;\n       \n      }\n      .cross-wrapper-item {\n        height: ").concat(this.attrs.crossSize,"px;\n        width:").concat(this.attrs.crossSize,"px;\n        position: absolute;\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        align-content: center;\n      }\n\n      .cross:after {\n        background: ").concat(this.attrs.color,';\n        content: "";\n        height: ').concat(this.attrs.crossThickness,"px;\n        left: -").concat(this.attrs.crossSize/2-this.attrs.crossThickness/2,"px;\n        position: absolute;\n        top: ").concat(this.attrs.crossSize/2-this.attrs.crossThickness/2,"px;\n        width: ").concat(this.attrs.crossSize,"px;\n      }\n    ")}},{key:"buildTree",value:function(){for(var n=1;n<=this.attrs.items;n++){var e=new t.CSSEffect({animatedAttrs:{transform:{scale:1,rotate:"-".concat(Math.floor(190*Math.random()),"deg")}},initialValues:{transform:{scale:0,rotate:"0deg"}}},{duration:1e3,selector:".cross-item-"+(this.attrs.items-n+1)});this.addIncident(e,500*n-500);var r=250*this.attrs.items+250*n,i=this.attrs.crossSize*(n+1),o=new t.CSSEffect({animatedAttrs:{left:"".concat(this.attrs.travelDistance-i,"px"),transform:{rotate:"197deg"}}},{duration:700,selector:".cross-wrapper-item-"+(this.attrs.items-n+1),easing:"easeInOutQuad"});this.addIncident(o,r)}}}]),i}(t.HTMLClip),Ji=function(n){s(i,n);var e=u(i);function i(){return r(this,i),e.apply(this,arguments)}return o(i,[{key:"font",get:function(){return[{type:"google-font",src:"https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,400;0,500;0,800;1,700;1,800;1,900&display=swap"}]}},{key:"html",get:function(){for(var t=[],n=0;n<=this.attrs.steps;n++)t.push('<svg class="cross-item cross-item-'.concat(n,'" style="left:').concat(this.attrs.travelDistance/this.attrs.steps*n,"px;transform: rotate(").concat(Math.floor(361*Math.random()),'deg)" height="').concat(this.attrs.crossSize,'px" viewBox="0 0 512 512" width="').concat(this.attrs.crossSize,'px" xmlns="http://www.w3.org/2000/svg">\n           <path d="m336 512h-160v-177h-176v-160h176v-175h160v175h176v160h-176zm-120-40h80v-177h176v-80h-176v-175h-80v175h-176v80h176zm0 0"/>\n        </svg>'));return'\n      <div class="wrapper">\n        '.concat(t.join(""),"\n  \t  </div>\n    ")}},{key:"css",get:function(){return"\n      .wrapper{\n        width: ".concat(this.attrs.width,"px;\n        height: ").concat(this.attrs.height,"px;\n        display:flex;\n        font-family: 'Poppins', sans-serif;\n      }\n\n      .cross-item{\n        fill: ").concat(this.attrs.color,";\n        position:relative;\n      }\n    ")}},{key:"buildTree",value:function(){for(var n=0;n<=this.attrs.steps;n++){var e=new t.CSSEffect({animatedAttrs:{opacity:1},initialValues:{opacity:0}},{duration:1,selector:".cross-item-"+n});this.addIncident(e,500*n+1);var r=new t.CSSEffect({animatedAttrs:{opacity:0},initialValues:{opacity:1}},{duration:1,selector:".cross-item-"+n});this.addIncident(r,500*n+1+500)}}}]),i}(t.HTMLClip),Zi=pr,to=lr,no=Object.keys||function(t){return Zi(t,to)},eo=Ft,ro=no;Hr({target:"Object",stat:!0,forced:m((function(){ro(1)}))},{keys:function(t){return ro(eo(t))}});var io=St,oo=E(E.bind),ao=function(t,n){return io(t),void 0===n?t:oo?oo(t,n):function(){return t.apply(n,arguments)}},so=G,co=Ft,po=Je,lo=wi,uo=E([].push),ho=function(t){var n=1==t,e=2==t,r=3==t,i=4==t,o=6==t,a=7==t,s=5==t||o;return function(c,p,l,u){for(var h,f,d=co(c),y=so(d),m=ao(p,l),v=po(y),g=0,b=u||lo,w=n?b(c,v):e||a?b(c,0):void 0;v>g;g++)if((s||g in y)&&(f=m(h=y[g],g,d),t))if(n)w[g]=f;else if(f)switch(t){case 3:return!0;case 5:return h;case 6:return g;case 2:uo(w,h)}else switch(t){case 4:return!1;case 7:uo(w,h)}return o?-1:r||i?i:w}},fo={forEach:ho(0),map:ho(1),filter:ho(2),some:ho(3),every:ho(4),find:ho(5),findIndex:ho(6),filterReject:ho(7)}.map;Hr({target:"Array",proto:!0,forced:!ji("map")},{map:function(t){return fo(this,t,arguments.length>1?arguments[1]:void 0)}});var yo=function(n){s(i,n);var e=u(i);function i(){return r(this,i),e.apply(this,arguments)}return o(i,[{key:"font",get:function(){return[{type:"google-font",src:"https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,400;0,500;0,800;1,700;1,800;1,900&display=swap"}]}},{key:"html",get:function(){var t=[];this.array=[];for(var n=0;n<this.attrs.items;n++)this.array.push(0),t.push(' <div  class="cross cross-item-'.concat(n,'"></div> '));return'\n      <div class="wrapper">\n        '.concat(t.join(""),"\n  \t  </div>\n    ")}},{key:"css",get:function(){return"\n      .wrapper{\n        width: ".concat(this.attrs.width,"px;\n        display:flex;\n        font-family: 'Poppins', sans-serif;\n        display: grid;\n        grid-column-gap: ").concat(this.attrs.crossSize/2,"px;\n        grid-template-columns: repeat(").concat(Math.round(this.attrs.items/this.attrs.rows),", 1fr);\n        grid-row-gap: ").concat(this.attrs.crossSize,"px;\n        justify-items: center;\n      }\n      \n      .cross {\n        background: ").concat(this.attrs.color,";\n        height: ").concat(this.attrs.crossSize,"px;\n        width: ").concat(this.attrs.crossThickness,"px;\n        position: relative;\n      }\n   \n      .cross:after {\n        background: ").concat(this.attrs.color,';\n        content: "";\n        height: ').concat(this.attrs.crossThickness,"px;\n        left: -").concat(this.attrs.crossSize/2-this.attrs.crossThickness/2,"px;\n        position: absolute;\n        top: ").concat(this.attrs.crossSize/2-this.attrs.crossThickness/2,"px;\n        width: ").concat(this.attrs.crossSize,"px;\n      }\n    ")}},{key:"buildTree",value:function(){var n=this;(function(t){for(var n,e,r=t.length;0!==r;)e=Math.floor(Math.random()*r),n=t[r-=1],t[r]=t[e],t[e]=n;return t})(Object.keys(this.array)).map((function(e,r){var i=new t.CSSEffect({animatedAttrs:{opacity:1},initialValues:{opacity:0}},{duration:1,selector:".cross-item-"+e});n.addIncident(i,200*r*(n.attrs.timing||1))}))}}]),i}(t.HTMLClip),mo=function(n){s(i,n);var e=u(i);function i(){return r(this,i),e.apply(this,arguments)}return o(i,[{key:"font",get:function(){return[{type:"google-font",src:"https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,400;0,500;0,800;1,700;1,800;1,900&display=swap"}]}},{key:"html",get:function(){var t=[];this.array=[];for(var n=0;n<3;n++){this.array.push(0);var e=Math.floor(Math.random()*this.attrs.maxLineWidth),r=Math.floor(Math.random()*this.attrs.height);t.push('\n        <div style="width:'.concat(e,'px;" class="line-wrapper line-wrapper-item-').concat(n,'">\n          <div style="width:').concat(this.attrs.maxLineWidth,"px;height:").concat(r,'px;" class="line line-item-').concat(n,'"></div>\n        </div>\n      '))}return'\n      <div class="wrapper">\n        '.concat(t.join(""),"\n      </div>\n    ")}},{key:"css",get:function(){return"\n      .wrapper{\n        width: ".concat(this.attrs.width,"px;\n        height:").concat(this.attrs.height,"px;\n        display:flex;\n        font-family: 'Poppins', sans-serif;\n      }\n      \n      .line{\n        background: ").concat(this.attrs.color,";\n        position: relative;\n      }\n\n      .line-wrapper{\n        position: relative;\n        overflow: hidden;\n      }\n    ")}},{key:"buildTree",value:function(){for(var n=0;n<=3;n++){var e=new t.CSSEffect({animatedAttrs:{height:"".concat(.6*this.attrs.height,"px"),top:"0px"},initialValues:{height:"0px",top:"".concat(this.attrs.height,"px")}},{duration:500,selector:".line-wrapper-item-"+n});this.addIncident(e,500*n+1);var r=new t.CSSEffect({animatedAttrs:{height:"0px"}},{duration:400,selector:".line-item-"+n});this.addIncident(r,500+500*n+1)}}}]),i}(t.HTMLClip),vo=function(n){s(i,n);var e=u(i);function i(){return r(this,i),e.apply(this,arguments)}return o(i,[{key:"font",get:function(){return[{type:"google-font",src:"https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,400;0,500;0,800;1,700;1,800;1,900&display=swap"}]}},{key:"html",get:function(){var t=[];this.array=[];for(var n=0;n<3;n++){var e=Math.floor(Math.random()*this.attrs.maxLineHeight),r=Math.floor(Math.random()*this.attrs.width);this.array.push(0),t.push('\n        <div style="width:'.concat(e,'px;" class="line-wrapper line-wrapper-item-').concat(n,'">\n          <div style="height:').concat(this.attrs.maxLineHeight,"px; width:").concat(r,'px;" class="line line-item-').concat(n,'"></div>\n        </div>\n      '))}return'\n      <div class="wrapper">\n        '.concat(t.join(""),"\n      </div>\n    ")}},{key:"css",get:function(){return"\n      .wrapper{\n        width: ".concat(this.attrs.width,"px;\n        height:").concat(this.attrs.height,"px;\n        font-family: 'Poppins', sans-serif;\n      }\n\n      .line{\n        background: ").concat(this.attrs.color,";\n        position: relative;\n      }\n\n      .line-wrapper{\n        position: relative;\n        overflow: hidden;\n      }\n    ")}},{key:"buildTree",value:function(){for(var n=0;n<=3;n++){var e=new t.CSSEffect({animatedAttrs:{width:"".concat(.6*this.attrs.width,"px"),left:"0px"},initialValues:{width:"0px",left:"".concat(this.attrs.width,"px")}},{duration:500,selector:".line-wrapper-item-"+n});this.addIncident(e,500*n+1);var r=new t.CSSEffect({animatedAttrs:{width:"0px"}},{duration:400,selector:".line-item-"+n});this.addIncident(r,500+500*n+1)}}}]),i}(t.HTMLClip),go=function(n){s(i,n);var e=u(i);function i(){return r(this,i),e.apply(this,arguments)}return o(i,[{key:"font",get:function(){return[{type:"google-font",src:"https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,400;0,500;0,800;1,700;1,800;1,900&display=swap"}]}},{key:"html",get:function(){var t=[];this.array=[];for(var n=0;n<this.attrs.items;n++){var e=this.randomIntFromInterval(this.attrs.minR-90,this.attrs.maxR-90);t.push('<div style="transform: rotate('.concat(e,'deg)" class="circle circle-item-').concat(n,'"></div>'))}return'\n      <div class="wrapper">\n        '.concat(t.join(""),"\n      </div>\n    ")}},{key:"randomIntFromInterval",value:function(t,n){return Math.floor(Math.random()*(n-t+1)+t)}},{key:"css",get:function(){return"\n      .wrapper{\n        width: ".concat(this.attrs.width,"px;\n        height:").concat(this.attrs.height,"px;\n        display:flex;\n        font-family: 'Poppins', sans-serif;\n        justify-content: center;\n        align-items: center;\n      }\n\n      .circle{\n        background: ").concat(!0===this.attrs.border?"transparent":this.attrs.color,";\n        width:").concat(this.attrs.maxCirlcleSize,"px;\n        height:").concat(this.attrs.maxCirlcleSize,"px;\n        border-radius: 100%;\n        position: absolute;\n      }\n  ")}},{key:"buildTree",value:function(){for(var n=0;n<this.attrs.items;n++){var e=new t.CSSEffect({animatedAttrs:{transform:{translateY:"".concat(-this.attrs.travelDistance,"px")}}},{duration:500,selector:".circle-item-"+n});this.addIncident(e,0);var r=new t.CSSEffect({animatedAttrs:{width:"".concat(!0===this.attrs.border?0:this.attrs.maxCirlcleSize,"px"),height:"".concat(!0===this.attrs.border?0:this.attrs.maxCirlcleSize,"px"),border:!0===this.attrs.border?"".concat(this.attrs.maxCirlcleSize/2,"px solid ").concat(this.attrs.color):"".concat(0,"px solid ",this.attrs.color)},initialValues:{width:"0px",height:"0px",border:(this.attrs.border,"".concat(0,"px solid ",this.attrs.color))}},{duration:250,selector:".circle-item-"+n});this.addIncident(r,0);var i=new t.CSSEffect({animatedAttrs:{width:"".concat(!0===this.attrs.border?this.attrs.maxCirlcleSize:0,"px"),height:"".concat(!0===this.attrs.border?this.attrs.maxCirlcleSize:0,"px"),border:"".concat(0,"px solid ",this.attrs.color)}},{duration:250,selector:".circle-item-"+n});this.addIncident(i,250)}}}]),i}(t.HTMLClip),bo=function(n){s(i,n);var e=u(i);function i(){return r(this,i),e.apply(this,arguments)}return o(i,[{key:"font",get:function(){return[{type:"google-font",src:"https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,400;0,500;0,800;1,700;1,800;1,900&display=swap"}]}},{key:"html",get:function(){var t=[];this.array=[];for(var n=0;n<this.attrs.items;n++){var e=this.randomIntFromInterval(this.attrs.maxCirlcleSize,this.attrs.width-this.attrs.maxCirlcleSize);t.push('<div style="left: '.concat(e,'px" class="circle circle-item-').concat(n,'"></div>'))}return'\n      <div class="wrapper">\n        '.concat(t.join(""),"\n      </div>\n    ")}},{key:"css",get:function(){return"\n      .wrapper{\n        width: ".concat(this.attrs.width,"px;\n        height:").concat(this.attrs.height,"px;\n        display:flex;\n        font-family: 'Poppins', sans-serif;\n        justify-content: center;\n        align-items: center;\n      }\n      .circle{\n        background: ").concat(!0===this.attrs.border?"transparent":this.attrs.color,";\n        width:").concat(this.attrs.maxCirlcleSize,"px;\n        height:").concat(this.attrs.maxCirlcleSize,"px;\n        border-radius: 100%;\n        position: absolute;\n\n      }\n    ")}},{key:"randomIntFromInterval",value:function(t,n){return Math.floor(Math.random()*(n-t+1)+t)}},{key:"buildTree",value:function(){for(var n=0;n<this.attrs.items;n++){var e=this.randomIntFromInterval(350,500),r=new t.CSSEffect({animatedAttrs:{top:"".concat(-this.attrs.maxCirlcleSize,"px")},initialValues:{top:"".concat(this.attrs.height,"px")}},{duration:Math.round(e),selector:".circle-item-"+n});this.addIncident(r,0);var i=new t.CSSEffect({animatedAttrs:{width:"".concat(!0===this.attrs.border?0:this.attrs.maxCirlcleSize,"px"),height:"".concat(!0===this.attrs.border?0:this.attrs.maxCirlcleSize,"px"),border:!0===this.attrs.border?"".concat(this.attrs.maxCirlcleSize/2,"px solid ").concat(this.attrs.color):"".concat(0,"px solid ",this.attrs.color)},initialValues:{width:"0px",height:"0px",border:(this.attrs.border,"".concat(0,"px solid ",this.attrs.color))}},{duration:Math.round(e/2),selector:".circle-item-"+n});this.addIncident(i,0);var o=new t.CSSEffect({animatedAttrs:{width:"".concat(!0===this.attrs.border?this.attrs.maxCirlcleSize:0,"px"),height:"".concat(!0===this.attrs.border?this.attrs.maxCirlcleSize:0,"px"),border:"".concat(0,"px solid ",this.attrs.color)}},{duration:Math.round(e/2),selector:".circle-item-"+n});this.addIncident(o,Math.round(e/2))}}}]),i}(t.HTMLClip),wo=function(n){s(i,n);var e=u(i);function i(){return r(this,i),e.apply(this,arguments)}return o(i,[{key:"font",get:function(){return[{type:"google-font",src:"https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,400;0,500;0,800;1,700;1,800;1,900&display=swap"}]}},{key:"html",get:function(){for(var t=[],n=0;n<this.attrs.items;n++)t.push(' <div class="dots dots-item-'.concat(n,'"></div>'));return'\n      <div class="wrapper">\n        '.concat(t.join(""),"\n  \t  </div>\n    ")}},{key:"css",get:function(){return"\n      .wrapper{\n        width: ".concat(this.attrs.width,"px;\n        display:flex;\n        font-family: 'Poppins', sans-serif;\n        display: grid;\n       \n        grid-template-columns: repeat(").concat(Math.round(this.attrs.items/this.attrs.rows),", ").concat(this.attrs.columnGap,"px);\n        grid-row-gap: ").concat(this.attrs.rowGap,"px;\n        justify-items: center;\n      }\n      \n      .dots {\n        background: ").concat(this.attrs.color,";\n        height: ").concat(this.attrs.dotSize,"px;\n        width: ").concat(this.attrs.dotSize,"px;\n        border-radius: 100%;\n        position: relative;\n      }\n    ")}},{key:"buildTree",value:function(){var n=new t.CSSEffect({animatedAttrs:{opacity:1},initialValues:{opacity:0}},{duration:100*this.attrs.timing,selector:".dots",repeats:this.attrs.repeats});this.addIncident(n,0)}}]),i}(t.HTMLClip),xo=function(n){s(i,n);var e=u(i);function i(){return r(this,i),e.apply(this,arguments)}return o(i,[{key:"font",get:function(){return[{type:"google-font",src:"https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,400;0,500;0,800;1,700;1,800;1,900&display=swap"}]}},{key:"html",get:function(){var t=[];this.array=[];for(var n=0;n<this.attrs.items;n++)this.array.push(0),t.push(' <div class="cross cross-item-'.concat(n,'"></div>'));return'\n      <div class="wrapper">\n        <div class= "cross-wrapper cross-wrapper-0">\n          '.concat(t.join(""),'\n        </div>\n        <div class= "cross-wrapper cross-wrapper-1">\n          ').concat(t.join(""),"\n        </div>\n  \t  </div>\n    ")}},{key:"css",get:function(){return"\n      .wrapper{\n        width: ".concat(this.attrs.width,"px;\n        display:flex;\n        font-family: 'Poppins', sans-serif;\n        height: ").concat(2*this.attrs.crossSize+this.attrs.crossSize/2,"px;\n      }\n\n      .cross-wrapper{\n        display:flex;\n        position :absolute;\n        width:").concat(this.attrs.width,"px;\n        justify-content: space-around;\n        top:").concat(this.attrs.crossSize+this.attrs.crossSize/2,"px;\n      }\n\n      .cross {\n        background: ").concat(this.attrs.color,";\n        height: ").concat(this.attrs.crossSize,"px;\n        width: ").concat(this.attrs.crossThickness,"px;\n        position: relative;\n      }\n   \n      .cross:after {\n        background: ").concat(this.attrs.color,';\n        content: "";\n        height: ').concat(this.attrs.crossThickness,"px;\n        left: -").concat(this.attrs.crossSize/2-this.attrs.crossThickness/2,"px;\n        position: absolute;\n        top: ").concat(this.attrs.crossSize/2-this.attrs.crossThickness/2,"px;\n        width: ").concat(this.attrs.crossSize,"px;\n      }\n    ")}},{key:"buildTree",value:function(){for(var n=0;n<this.attrs.items;n++){var e=!0===this.attrs.reverse?this.attrs.items-n-1:n,r=new t.CSSEffect({animatedAttrs:{opacity:1},initialValues:{opacity:0}},{duration:1,selector:".cross-item-"+e,easing:"easeOutQuad"});this.addIncident(r,200*n*(this.attrs.timing||1))}var i=new t.CSSEffect({animatedAttrs:{top:"0px"}},{duration:350,selector:".cross-wrapper-1",easing:"easeOutQuad"});this.addIncident(i,200*(this.attrs.timing||1)*this.attrs.items)}}]),i}(t.HTMLClip);return{npm_name:"@donkeyclip/motorcortex-abstracts",version:"1.0.2",incidents:[{exportable:$i,name:"CrossMoveRight",attributesValidationRules:e({},{width:{optional:!1,type:"number"},height:{optional:!1,type:"number"},crossSize:{optional:!1,type:"number"},crossThickness:{optional:!1,type:"number"},travelDistance:{optional:!1,type:"number"},items:{optional:!1,type:"number"},color:{optional:!1,type:"color"}})},{exportable:Ji,name:"CrossMoveRightOutline",attributesValidationRules:e({},{width:{optional:!1,type:"number"},height:{optional:!1,type:"number"},crossSize:{optional:!1,type:"number"},travelDistance:{optional:!1,type:"number"},steps:{optional:!1,type:"number"},color:{optional:!1,type:"color"}})},{exportable:yo,name:"CrossRandom",attributesValidationRules:e({},{width:{optional:!1,type:"number"},crossSize:{optional:!1,type:"number"},crossThickness:{optional:!1,type:"number"},items:{optional:!1,type:"number"},color:{optional:!1,type:"color"},rows:{optional:!1,type:"number"},timing:{optional:!0,type:"number"}})},{exportable:mo,name:"VerticalLinesMove",attributesValidationRules:e({},{width:{optional:!1,type:"number"},height:{optional:!1,type:"number"},maxLineWidth:{optional:!1,type:"number"},color:{optional:!1,type:"color"}})},{exportable:vo,name:"HorizontalLinesMove",attributesValidationRules:e({},{width:{optional:!1,type:"number"},height:{optional:!1,type:"number"},maxLineHeight:{optional:!1,type:"number"},color:{optional:!1,type:"color"}})},{exportable:go,name:"CircleExplosion",attributesValidationRules:e({},{width:{optional:!1,type:"number"},height:{optional:!1,type:"number"},maxCirlcleSize:{optional:!1,type:"number"},travelDistance:{optional:!1,type:"number"},color:{optional:!1,type:"color"},items:{optional:!1,type:"number"},minR:{optional:!1,type:"number"},maxR:{optional:!1,type:"number"},border:{optional:!1,type:"boolean"}})},{exportable:bo,name:"CircleBubbleUp",attributesValidationRules:e({},{width:{optional:!1,type:"number"},height:{optional:!1,type:"number"},maxCirlcleSize:{optional:!1,type:"number"},travelDistance:{optional:!1,type:"number"},color:{optional:!1,type:"color"},items:{optional:!1,type:"number"},border:{optional:!1,type:"boolean"}})},{exportable:wo,name:"Dots",attributesValidationRules:e({},{width:{optional:!1,type:"number"},dotSize:{optional:!1,type:"number"},items:{optional:!1,type:"number"},color:{optional:!1,type:"color"},rowGap:{optional:!1,type:"number"},columnGap:{optional:!1,type:"number"},rows:{optional:!1,type:"number"},timing:{optional:!1,type:"number"},repeats:{optional:!1,type:"number"}})},{exportable:xo,name:"CrossRowReveal",attributesValidationRules:e({},{width:{optional:!1,type:"number"},crossSize:{optional:!1,type:"number"},crossThickness:{optional:!1,type:"number"},items:{optional:!1,type:"number"},color:{optional:!1,type:"color"},reverse:{optional:!1,type:"boolean"},timing:{optional:!1,type:"number"}})}]}}));
