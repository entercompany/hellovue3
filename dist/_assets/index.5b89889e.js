function e(e,t){const n=Object.create(null),r=e.split(",");for(let e=0;e<r.length;e++)n[r[e]]=!0;return t?e=>!!n[e.toLowerCase()]:e=>!!n[e]}const t=e("itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly");function n(e){return!!e||""===e}function r(e){if(_(e)){const t={};for(let n=0;n<e.length;n++){const s=e[n],i=E(s)?o(s):r(s);if(i)for(const e in i)t[e]=i[e]}return t}return E(e)||x(e)?e:void 0}const s=/;(?![^(]*\))/g,i=/:(.+)/;function o(e){const t={};return e.split(s).forEach((e=>{if(e){const n=e.split(i);n.length>1&&(t[n[0].trim()]=n[1].trim())}})),t}function a(e){let t="";if(E(e))t=e;else if(_(e))for(let n=0;n<e.length;n++){const r=a(e[n]);r&&(t+=r+" ")}else if(x(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const c=e=>E(e)?e:null==e?"":_(e)||x(e)&&(e.toString===C||!T(e.toString))?JSON.stringify(e,l,2):String(e),l=(e,t)=>t&&t.__v_isRef?l(e,t.value):I(t)?{[`Map(${t.size})`]:[...t.entries()].reduce(((e,[t,n])=>(e[`${t} =>`]=n,e)),{})}:k(t)?{[`Set(${t.size})`]:[...t.values()]}:!x(t)||_(t)||D(t)?t:String(t),u={},h=[],d=()=>{},f=()=>!1,p=/^on[^a-z]/,g=e=>p.test(e),m=e=>e.startsWith("onUpdate:"),y=Object.assign,v=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},w=Object.prototype.hasOwnProperty,b=(e,t)=>w.call(e,t),_=Array.isArray,I=e=>"[object Map]"===N(e),k=e=>"[object Set]"===N(e),T=e=>"function"==typeof e,E=e=>"string"==typeof e,S=e=>"symbol"==typeof e,x=e=>null!==e&&"object"==typeof e,A=e=>x(e)&&T(e.then)&&T(e.catch),C=Object.prototype.toString,N=e=>C.call(e),D=e=>"[object Object]"===N(e),R=e=>E(e)&&"NaN"!==e&&"-"!==e[0]&&""+parseInt(e,10)===e,O=e(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),P=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},L=/-(\w)/g,M=P((e=>e.replace(L,((e,t)=>t?t.toUpperCase():"")))),F=/\B([A-Z])/g,V=P((e=>e.replace(F,"-$1").toLowerCase())),U=P((e=>e.charAt(0).toUpperCase()+e.slice(1))),B=P((e=>e?`on${U(e)}`:"")),j=(e,t)=>!Object.is(e,t),q=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},$=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n})},z=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let G;let K;class W{constructor(e=!1){this.active=!0,this.effects=[],this.cleanups=[],!e&&K&&(this.parent=K,this.index=(K.scopes||(K.scopes=[])).push(this)-1)}run(e){if(this.active){const t=K;try{return K=this,e()}finally{K=t}}}on(){K=this}off(){K=this.parent}stop(e){if(this.active){let t,n;for(t=0,n=this.effects.length;t<n;t++)this.effects[t].stop();for(t=0,n=this.cleanups.length;t<n;t++)this.cleanups[t]();if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].stop(!0);if(this.parent&&!e){const e=this.parent.scopes.pop();e&&e!==this&&(this.parent.scopes[this.index]=e,e.index=this.index)}this.active=!1}}}const H=e=>{const t=new Set(e);return t.w=0,t.n=0,t},Q=e=>(e.w&Z)>0,J=e=>(e.n&Z)>0,Y=new WeakMap;let X=0,Z=1;let ee;const te=Symbol(""),ne=Symbol("");class re{constructor(e,t=null,n){this.fn=e,this.scheduler=t,this.active=!0,this.deps=[],this.parent=void 0,function(e,t=K){t&&t.active&&t.effects.push(e)}(this,n)}run(){if(!this.active)return this.fn();let e=ee,t=ie;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=ee,ee=this,ie=!0,Z=1<<++X,X<=30?(({deps:e})=>{if(e.length)for(let t=0;t<e.length;t++)e[t].w|=Z})(this):se(this),this.fn()}finally{X<=30&&(e=>{const{deps:t}=e;if(t.length){let n=0;for(let r=0;r<t.length;r++){const s=t[r];Q(s)&&!J(s)?s.delete(e):t[n++]=s,s.w&=~Z,s.n&=~Z}t.length=n}})(this),Z=1<<--X,ee=this.parent,ie=t,this.parent=void 0,this.deferStop&&this.stop()}}stop(){ee===this?this.deferStop=!0:this.active&&(se(this),this.onStop&&this.onStop(),this.active=!1)}}function se(e){const{deps:t}=e;if(t.length){for(let n=0;n<t.length;n++)t[n].delete(e);t.length=0}}let ie=!0;const oe=[];function ae(){oe.push(ie),ie=!1}function ce(){const e=oe.pop();ie=void 0===e||e}function le(e,t,n){if(ie&&ee){let t=Y.get(e);t||Y.set(e,t=new Map);let r=t.get(n);r||t.set(n,r=H()),ue(r)}}function ue(e,t){let n=!1;X<=30?J(e)||(e.n|=Z,n=!Q(e)):n=!e.has(ee),n&&(e.add(ee),ee.deps.push(e))}function he(e,t,n,r,s,i){const o=Y.get(e);if(!o)return;let a=[];if("clear"===t)a=[...o.values()];else if("length"===n&&_(e))o.forEach(((e,t)=>{("length"===t||t>=r)&&a.push(e)}));else switch(void 0!==n&&a.push(o.get(n)),t){case"add":_(e)?R(n)&&a.push(o.get("length")):(a.push(o.get(te)),I(e)&&a.push(o.get(ne)));break;case"delete":_(e)||(a.push(o.get(te)),I(e)&&a.push(o.get(ne)));break;case"set":I(e)&&a.push(o.get(te))}if(1===a.length)a[0]&&de(a[0]);else{const e=[];for(const t of a)t&&e.push(...t);de(H(e))}}function de(e,t){const n=_(e)?e:[...e];for(const e of n)e.computed&&fe(e);for(const e of n)e.computed||fe(e)}function fe(e,t){(e!==ee||e.allowRecurse)&&(e.scheduler?e.scheduler():e.run())}const pe=e("__proto__,__v_isRef,__isVue"),ge=new Set(Object.getOwnPropertyNames(Symbol).filter((e=>"arguments"!==e&&"caller"!==e)).map((e=>Symbol[e])).filter(S)),me=_e(),ye=_e(!1,!0),ve=_e(!0),we=be();function be(){const e={};return["includes","indexOf","lastIndexOf"].forEach((t=>{e[t]=function(...e){const n=it(this);for(let e=0,t=this.length;e<t;e++)le(n,0,e+"");const r=n[t](...e);return-1===r||!1===r?n[t](...e.map(it)):r}})),["push","pop","shift","unshift","splice"].forEach((t=>{e[t]=function(...e){ae();const n=it(this)[t].apply(this,e);return ce(),n}})),e}function _e(e=!1,t=!1){return function(n,r,s){if("__v_isReactive"===r)return!e;if("__v_isReadonly"===r)return e;if("__v_isShallow"===r)return t;if("__v_raw"===r&&s===(e?t?Je:Qe:t?He:We).get(n))return n;const i=_(n);if(!e&&i&&b(we,r))return Reflect.get(we,r,s);const o=Reflect.get(n,r,s);return(S(r)?ge.has(r):pe(r))?o:(e||le(n,0,r),t?o:ht(o)?i&&R(r)?o:o.value:x(o)?e?Ze(o):Xe(o):o)}}function Ie(e=!1){return function(t,n,r,s){let i=t[n];if(nt(i)&&ht(i)&&!ht(r))return!1;if(!e&&!nt(r)&&(rt(r)||(r=it(r),i=it(i)),!_(t)&&ht(i)&&!ht(r)))return i.value=r,!0;const o=_(t)&&R(n)?Number(n)<t.length:b(t,n),a=Reflect.set(t,n,r,s);return t===it(s)&&(o?j(r,i)&&he(t,"set",n,r):he(t,"add",n,r)),a}}const ke={get:me,set:Ie(),deleteProperty:function(e,t){const n=b(e,t);e[t];const r=Reflect.deleteProperty(e,t);return r&&n&&he(e,"delete",t,void 0),r},has:function(e,t){const n=Reflect.has(e,t);return S(t)&&ge.has(t)||le(e,0,t),n},ownKeys:function(e){return le(e,0,_(e)?"length":te),Reflect.ownKeys(e)}},Te={get:ve,set:(e,t)=>!0,deleteProperty:(e,t)=>!0},Ee=y({},ke,{get:ye,set:Ie(!0)}),Se=e=>e,xe=e=>Reflect.getPrototypeOf(e);function Ae(e,t,n=!1,r=!1){const s=it(e=e.__v_raw),i=it(t);n||(t!==i&&le(s,0,t),le(s,0,i));const{has:o}=xe(s),a=r?Se:n?ct:at;return o.call(s,t)?a(e.get(t)):o.call(s,i)?a(e.get(i)):void(e!==s&&e.get(t))}function Ce(e,t=!1){const n=this.__v_raw,r=it(n),s=it(e);return t||(e!==s&&le(r,0,e),le(r,0,s)),e===s?n.has(e):n.has(e)||n.has(s)}function Ne(e,t=!1){return e=e.__v_raw,!t&&le(it(e),0,te),Reflect.get(e,"size",e)}function De(e){e=it(e);const t=it(this);return xe(t).has.call(t,e)||(t.add(e),he(t,"add",e,e)),this}function Re(e,t){t=it(t);const n=it(this),{has:r,get:s}=xe(n);let i=r.call(n,e);i||(e=it(e),i=r.call(n,e));const o=s.call(n,e);return n.set(e,t),i?j(t,o)&&he(n,"set",e,t):he(n,"add",e,t),this}function Oe(e){const t=it(this),{has:n,get:r}=xe(t);let s=n.call(t,e);s||(e=it(e),s=n.call(t,e)),r&&r.call(t,e);const i=t.delete(e);return s&&he(t,"delete",e,void 0),i}function Pe(){const e=it(this),t=0!==e.size,n=e.clear();return t&&he(e,"clear",void 0,void 0),n}function Le(e,t){return function(n,r){const s=this,i=s.__v_raw,o=it(i),a=t?Se:e?ct:at;return!e&&le(o,0,te),i.forEach(((e,t)=>n.call(r,a(e),a(t),s)))}}function Me(e,t,n){return function(...r){const s=this.__v_raw,i=it(s),o=I(i),a="entries"===e||e===Symbol.iterator&&o,c="keys"===e&&o,l=s[e](...r),u=n?Se:t?ct:at;return!t&&le(i,0,c?ne:te),{next(){const{value:e,done:t}=l.next();return t?{value:e,done:t}:{value:a?[u(e[0]),u(e[1])]:u(e),done:t}},[Symbol.iterator](){return this}}}}function Fe(e){return function(...t){return"delete"!==e&&this}}function Ve(){const e={get(e){return Ae(this,e)},get size(){return Ne(this)},has:Ce,add:De,set:Re,delete:Oe,clear:Pe,forEach:Le(!1,!1)},t={get(e){return Ae(this,e,!1,!0)},get size(){return Ne(this)},has:Ce,add:De,set:Re,delete:Oe,clear:Pe,forEach:Le(!1,!0)},n={get(e){return Ae(this,e,!0)},get size(){return Ne(this,!0)},has(e){return Ce.call(this,e,!0)},add:Fe("add"),set:Fe("set"),delete:Fe("delete"),clear:Fe("clear"),forEach:Le(!0,!1)},r={get(e){return Ae(this,e,!0,!0)},get size(){return Ne(this,!0)},has(e){return Ce.call(this,e,!0)},add:Fe("add"),set:Fe("set"),delete:Fe("delete"),clear:Fe("clear"),forEach:Le(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach((s=>{e[s]=Me(s,!1,!1),n[s]=Me(s,!0,!1),t[s]=Me(s,!1,!0),r[s]=Me(s,!0,!0)})),[e,n,t,r]}const[Ue,Be,je,qe]=Ve();function $e(e,t){const n=t?e?qe:je:e?Be:Ue;return(t,r,s)=>"__v_isReactive"===r?!e:"__v_isReadonly"===r?e:"__v_raw"===r?t:Reflect.get(b(n,r)&&r in t?n:t,r,s)}const ze={get:$e(!1,!1)},Ge={get:$e(!1,!0)},Ke={get:$e(!0,!1)},We=new WeakMap,He=new WeakMap,Qe=new WeakMap,Je=new WeakMap;function Ye(e){return e.__v_skip||!Object.isExtensible(e)?0:function(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}((e=>N(e).slice(8,-1))(e))}function Xe(e){return nt(e)?e:et(e,!1,ke,ze,We)}function Ze(e){return et(e,!0,Te,Ke,Qe)}function et(e,t,n,r,s){if(!x(e))return e;if(e.__v_raw&&(!t||!e.__v_isReactive))return e;const i=s.get(e);if(i)return i;const o=Ye(e);if(0===o)return e;const a=new Proxy(e,2===o?r:n);return s.set(e,a),a}function tt(e){return nt(e)?tt(e.__v_raw):!(!e||!e.__v_isReactive)}function nt(e){return!(!e||!e.__v_isReadonly)}function rt(e){return!(!e||!e.__v_isShallow)}function st(e){return tt(e)||nt(e)}function it(e){const t=e&&e.__v_raw;return t?it(t):e}function ot(e){return $(e,"__v_skip",!0),e}const at=e=>x(e)?Xe(e):e,ct=e=>x(e)?Ze(e):e;function lt(e){ie&&ee&&ue((e=it(e)).dep||(e.dep=H()))}function ut(e,t){(e=it(e)).dep&&de(e.dep)}function ht(e){return!(!e||!0!==e.__v_isRef)}function dt(e){return ft(e,!1)}function ft(e,t){return ht(e)?e:new pt(e,t)}class pt{constructor(e,t){this.__v_isShallow=t,this.dep=void 0,this.__v_isRef=!0,this._rawValue=t?e:it(e),this._value=t?e:at(e)}get value(){return lt(this),this._value}set value(e){e=this.__v_isShallow?e:it(e),j(e,this._rawValue)&&(this._rawValue=e,this._value=this.__v_isShallow?e:at(e),ut(this))}}function gt(e){return ht(e)?e.value:e}const mt={get:(e,t,n)=>gt(Reflect.get(e,t,n)),set:(e,t,n,r)=>{const s=e[t];return ht(s)&&!ht(n)?(s.value=n,!0):Reflect.set(e,t,n,r)}};function yt(e){return tt(e)?e:new Proxy(e,mt)}class vt{constructor(e,t,n,r){this._setter=t,this.dep=void 0,this.__v_isRef=!0,this._dirty=!0,this.effect=new re(e,(()=>{this._dirty||(this._dirty=!0,ut(this))})),this.effect.computed=this,this.effect.active=this._cacheable=!r,this.__v_isReadonly=n}get value(){const e=it(this);return lt(e),!e._dirty&&e._cacheable||(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function wt(e,t,n,r){let s;try{s=r?e(...r):e()}catch(e){_t(e,t,n)}return s}function bt(e,t,n,r){if(T(e)){const s=wt(e,t,n,r);return s&&A(s)&&s.catch((e=>{_t(e,t,n)})),s}const s=[];for(let i=0;i<e.length;i++)s.push(bt(e[i],t,n,r));return s}function _t(e,t,n,r=!0){t&&t.vnode;if(t){let r=t.parent;const s=t.proxy,i=n;for(;r;){const t=r.ec;if(t)for(let n=0;n<t.length;n++)if(!1===t[n](e,s,i))return;r=r.parent}const o=t.appContext.config.errorHandler;if(o)return void wt(o,null,10,[e,s,i])}!function(e,t,n,r=!0){console.error(e)}(e,0,0,r)}let It=!1,kt=!1;const Tt=[];let Et=0;const St=[];let xt=null,At=0;const Ct=[];let Nt=null,Dt=0;const Rt=Promise.resolve();let Ot=null,Pt=null;function Lt(e){const t=Ot||Rt;return e?t.then(this?e.bind(this):e):t}function Mt(e){Tt.length&&Tt.includes(e,It&&e.allowRecurse?Et+1:Et)||e===Pt||(null==e.id?Tt.push(e):Tt.splice(function(e){let t=Et+1,n=Tt.length;for(;t<n;){const r=t+n>>>1;jt(Tt[r])<e?t=r+1:n=r}return t}(e.id),0,e),Ft())}function Ft(){It||kt||(kt=!0,Ot=Rt.then(qt))}function Vt(e,t,n,r){_(e)?n.push(...e):t&&t.includes(e,e.allowRecurse?r+1:r)||n.push(e),Ft()}function Ut(e,t=null){if(St.length){for(Pt=t,xt=[...new Set(St)],St.length=0,At=0;At<xt.length;At++)xt[At]();xt=null,At=0,Pt=null,Ut(e,t)}}function Bt(e){if(Ut(),Ct.length){const e=[...new Set(Ct)];if(Ct.length=0,Nt)return void Nt.push(...e);for(Nt=e,Nt.sort(((e,t)=>jt(e)-jt(t))),Dt=0;Dt<Nt.length;Dt++)Nt[Dt]();Nt=null,Dt=0}}const jt=e=>null==e.id?1/0:e.id;function qt(e){kt=!1,It=!0,Ut(e),Tt.sort(((e,t)=>jt(e)-jt(t)));try{for(Et=0;Et<Tt.length;Et++){const e=Tt[Et];e&&!1!==e.active&&wt(e,null,14)}}finally{Et=0,Tt.length=0,Bt(),It=!1,Ot=null,(Tt.length||St.length||Ct.length)&&qt(e)}}function $t(e,t,...n){if(e.isUnmounted)return;const r=e.vnode.props||u;let s=n;const i=t.startsWith("update:"),o=i&&t.slice(7);if(o&&o in r){const e=`${"modelValue"===o?"model":o}Modifiers`,{number:t,trim:i}=r[e]||u;i&&(s=n.map((e=>e.trim()))),t&&(s=n.map(z))}let a,c=r[a=B(t)]||r[a=B(M(t))];!c&&i&&(c=r[a=B(V(t))]),c&&bt(c,e,6,s);const l=r[a+"Once"];if(l){if(e.emitted){if(e.emitted[a])return}else e.emitted={};e.emitted[a]=!0,bt(l,e,6,s)}}function zt(e,t,n=!1){const r=t.emitsCache,s=r.get(e);if(void 0!==s)return s;const i=e.emits;let o={},a=!1;if(!T(e)){const r=e=>{const n=zt(e,t,!0);n&&(a=!0,y(o,n))};!n&&t.mixins.length&&t.mixins.forEach(r),e.extends&&r(e.extends),e.mixins&&e.mixins.forEach(r)}return i||a?(_(i)?i.forEach((e=>o[e]=null)):y(o,i),r.set(e,o),o):(r.set(e,null),null)}function Gt(e,t){return!(!e||!g(t))&&(t=t.slice(2).replace(/Once$/,""),b(e,t[0].toLowerCase()+t.slice(1))||b(e,V(t))||b(e,t))}let Kt=null,Wt=null;function Ht(e){const t=Kt;return Kt=e,Wt=e&&e.type.__scopeId||null,t}function Qt(e,t=Kt,n){if(!t)return e;if(e._n)return e;const r=(...n)=>{r._d&&Ur(-1);const s=Ht(t),i=e(...n);return Ht(s),r._d&&Ur(1),i};return r._n=!0,r._c=!0,r._d=!0,r}function Jt(e){const{type:t,vnode:n,proxy:r,withProxy:s,props:i,propsOptions:[o],slots:a,attrs:c,emit:l,render:u,renderCache:h,data:d,setupState:f,ctx:p,inheritAttrs:g}=e;let y,v;const w=Ht(e);try{if(4&n.shapeFlag){const e=s||r;y=Zr(u.call(e,e,h,i,f,d,p)),v=c}else{const e=t;0,y=Zr(e.length>1?e(i,{attrs:c,slots:a,emit:l}):e(i,null)),v=t.props?c:Yt(c)}}catch(t){Lr.length=0,_t(t,e,1),y=Qr(Or)}let b=y;if(v&&!1!==g){const e=Object.keys(v),{shapeFlag:t}=b;e.length&&7&t&&(o&&e.some(m)&&(v=Xt(v,o)),b=Jr(b,v))}return n.dirs&&(b=Jr(b),b.dirs=b.dirs?b.dirs.concat(n.dirs):n.dirs),n.transition&&(b.transition=n.transition),y=b,Ht(w),y}const Yt=e=>{let t;for(const n in e)("class"===n||"style"===n||g(n))&&((t||(t={}))[n]=e[n]);return t},Xt=(e,t)=>{const n={};for(const r in e)m(r)&&r.slice(9)in t||(n[r]=e[r]);return n};function Zt(e,t,n){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(t[i]!==e[i]&&!Gt(n,i))return!0}return!1}function en(e,t){if(is){let n=is.provides;const r=is.parent&&is.parent.provides;r===n&&(n=is.provides=Object.create(r)),n[e]=t}else;}function tn(e,t,n=!1){const r=is||Kt;if(r){const s=null==r.parent?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides;if(s&&e in s)return s[e];if(arguments.length>1)return n&&T(t)?t.call(r.proxy):t}}const nn={};function rn(e,t,n){return sn(e,t,n)}function sn(e,t,{immediate:n,deep:r,flush:s,onTrack:i,onTrigger:o}=u){const a=is;let c,l,h=!1,f=!1;if(ht(e)?(c=()=>e.value,h=rt(e)):tt(e)?(c=()=>e,r=!0):_(e)?(f=!0,h=e.some((e=>tt(e)||rt(e))),c=()=>e.map((e=>ht(e)?e.value:tt(e)?cn(e):T(e)?wt(e,a,2):void 0))):c=T(e)?t?()=>wt(e,a,2):()=>{if(!a||!a.isUnmounted)return l&&l(),bt(e,a,3,[p])}:d,t&&r){const e=c;c=()=>cn(e())}let p=e=>{l=w.onStop=()=>{wt(e,a,4)}};if(us)return p=d,t?n&&bt(t,a,3,[c(),f?[]:void 0,p]):c(),d;let g=f?[]:nn;const m=()=>{if(w.active)if(t){const e=w.run();(r||h||(f?e.some(((e,t)=>j(e,g[t]))):j(e,g)))&&(l&&l(),bt(t,a,3,[e,g===nn?void 0:g,p]),g=e)}else w.run()};let y;m.allowRecurse=!!t,y="sync"===s?m:"post"===s?()=>Ir(m,a&&a.suspense):()=>function(e){Vt(e,xt,St,At)}(m);const w=new re(c,y);return t?n?m():g=w.run():"post"===s?Ir(w.run.bind(w),a&&a.suspense):w.run(),()=>{w.stop(),a&&a.scope&&v(a.scope.effects,w)}}function on(e,t,n){const r=this.proxy,s=E(e)?e.includes(".")?an(r,e):()=>r[e]:e.bind(r,r);let i;T(t)?i=t:(i=t.handler,n=t);const o=is;as(this);const a=sn(s,i.bind(r),n);return o?as(o):cs(),a}function an(e,t){const n=t.split(".");return()=>{let t=e;for(let e=0;e<n.length&&t;e++)t=t[n[e]];return t}}function cn(e,t){if(!x(e)||e.__v_skip)return e;if((t=t||new Set).has(e))return e;if(t.add(e),ht(e))cn(e.value,t);else if(_(e))for(let n=0;n<e.length;n++)cn(e[n],t);else if(k(e)||I(e))e.forEach((e=>{cn(e,t)}));else if(D(e))for(const n in e)cn(e[n],t);return e}const ln=[Function,Array],un={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:ln,onEnter:ln,onAfterEnter:ln,onEnterCancelled:ln,onBeforeLeave:ln,onLeave:ln,onAfterLeave:ln,onLeaveCancelled:ln,onBeforeAppear:ln,onAppear:ln,onAfterAppear:ln,onAppearCancelled:ln},setup(e,{slots:t}){const n=os(),r=function(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return An((()=>{e.isMounted=!0})),Dn((()=>{e.isUnmounting=!0})),e}();let s;return()=>{const i=t.default&&yn(t.default(),!0);if(!i||!i.length)return;let o=i[0];if(i.length>1)for(const e of i)if(e.type!==Or){o=e;break}const a=it(e),{mode:c}=a;if(r.isLeaving)return pn(o);const l=gn(o);if(!l)return pn(o);const u=fn(l,a,r,n);mn(l,u);const h=n.subTree,d=h&&gn(h);let f=!1;const{getTransitionKey:p}=l.type;if(p){const e=p();void 0===s?s=e:e!==s&&(s=e,f=!0)}if(d&&d.type!==Or&&(!zr(l,d)||f)){const e=fn(d,a,r,n);if(mn(d,e),"out-in"===c)return r.isLeaving=!0,e.afterLeave=()=>{r.isLeaving=!1,n.update()},pn(o);"in-out"===c&&l.type!==Or&&(e.delayLeave=(e,t,n)=>{dn(r,d)[String(d.key)]=d,e._leaveCb=()=>{t(),e._leaveCb=void 0,delete u.delayedLeave},u.delayedLeave=n})}return o}}},hn=un;function dn(e,t){const{leavingVNodes:n}=e;let r=n.get(t.type);return r||(r=Object.create(null),n.set(t.type,r)),r}function fn(e,t,n,r){const{appear:s,mode:i,persisted:o=!1,onBeforeEnter:a,onEnter:c,onAfterEnter:l,onEnterCancelled:u,onBeforeLeave:h,onLeave:d,onAfterLeave:f,onLeaveCancelled:p,onBeforeAppear:g,onAppear:m,onAfterAppear:y,onAppearCancelled:v}=t,w=String(e.key),b=dn(n,e),I=(e,t)=>{e&&bt(e,r,9,t)},k=(e,t)=>{const n=t[1];I(e,t),_(e)?e.every((e=>e.length<=1))&&n():e.length<=1&&n()},T={mode:i,persisted:o,beforeEnter(t){let r=a;if(!n.isMounted){if(!s)return;r=g||a}t._leaveCb&&t._leaveCb(!0);const i=b[w];i&&zr(e,i)&&i.el._leaveCb&&i.el._leaveCb(),I(r,[t])},enter(e){let t=c,r=l,i=u;if(!n.isMounted){if(!s)return;t=m||c,r=y||l,i=v||u}let o=!1;const a=e._enterCb=t=>{o||(o=!0,I(t?i:r,[e]),T.delayedLeave&&T.delayedLeave(),e._enterCb=void 0)};t?k(t,[e,a]):a()},leave(t,r){const s=String(e.key);if(t._enterCb&&t._enterCb(!0),n.isUnmounting)return r();I(h,[t]);let i=!1;const o=t._leaveCb=n=>{i||(i=!0,r(),I(n?p:f,[t]),t._leaveCb=void 0,b[s]===e&&delete b[s])};b[s]=e,d?k(d,[t,o]):o()},clone:e=>fn(e,t,n,r)};return T}function pn(e){if(bn(e))return(e=Jr(e)).children=null,e}function gn(e){return bn(e)?e.children?e.children[0]:void 0:e}function mn(e,t){6&e.shapeFlag&&e.component?mn(e.component.subTree,t):128&e.shapeFlag?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function yn(e,t=!1,n){let r=[],s=0;for(let i=0;i<e.length;i++){let o=e[i];const a=null==n?o.key:String(n)+String(null!=o.key?o.key:i);o.type===Dr?(128&o.patchFlag&&s++,r=r.concat(yn(o.children,t,a))):(t||o.type!==Or)&&r.push(null!=a?Jr(o,{key:a}):o)}if(s>1)for(let e=0;e<r.length;e++)r[e].patchFlag=-2;return r}function vn(e){return T(e)?{setup:e,name:e.name}:e}const wn=e=>!!e.type.__asyncLoader,bn=e=>e.type.__isKeepAlive;function _n(e,t){kn(e,"a",t)}function In(e,t){kn(e,"da",t)}function kn(e,t,n=is){const r=e.__wdc||(e.__wdc=()=>{let t=n;for(;t;){if(t.isDeactivated)return;t=t.parent}return e()});if(En(t,r,n),n){let e=n.parent;for(;e&&e.parent;)bn(e.parent.vnode)&&Tn(r,t,n,e),e=e.parent}}function Tn(e,t,n,r){const s=En(t,e,r,!0);Rn((()=>{v(r[t],s)}),n)}function En(e,t,n=is,r=!1){if(n){const s=n[e]||(n[e]=[]),i=t.__weh||(t.__weh=(...r)=>{if(n.isUnmounted)return;ae(),as(n);const s=bt(t,n,e,r);return cs(),ce(),s});return r?s.unshift(i):s.push(i),i}}const Sn=e=>(t,n=is)=>(!us||"sp"===e)&&En(e,t,n),xn=Sn("bm"),An=Sn("m"),Cn=Sn("bu"),Nn=Sn("u"),Dn=Sn("bum"),Rn=Sn("um"),On=Sn("sp"),Pn=Sn("rtg"),Ln=Sn("rtc");function Mn(e,t=is){En("ec",e,t)}function Fn(e,t){const n=Kt;if(null===n)return e;const r=fs(n)||n.proxy,s=e.dirs||(e.dirs=[]);for(let e=0;e<t.length;e++){let[n,i,o,a=u]=t[e];T(n)&&(n={mounted:n,updated:n}),n.deep&&cn(i),s.push({dir:n,instance:r,value:i,oldValue:void 0,arg:o,modifiers:a})}return e}function Vn(e,t,n,r){const s=e.dirs,i=t&&t.dirs;for(let o=0;o<s.length;o++){const a=s[o];i&&(a.oldValue=i[o].value);let c=a.dir[r];c&&(ae(),bt(c,n,8,[e.el,a,e,t]),ce())}}function Un(e,t){return function(e,t,n=!0,r=!1){const s=Kt||is;if(s){const n=s.type;if("components"===e){const e=function(e,t=!0){return T(e)?e.displayName||e.name:e.name||t&&e.__name}(n,!1);if(e&&(e===t||e===M(t)||e===U(M(t))))return n}const i=jn(s[e]||n[e],t)||jn(s.appContext[e],t);return!i&&r?n:i}}("components",e,!0,t)||e}const Bn=Symbol();function jn(e,t){return e&&(e[t]||e[M(t)]||e[U(M(t))])}function qn(e,t,n,r){let s;const i=n&&n[r];if(_(e)||E(e)){s=new Array(e.length);for(let n=0,r=e.length;n<r;n++)s[n]=t(e[n],n,void 0,i&&i[n])}else if("number"==typeof e){s=new Array(e);for(let n=0;n<e;n++)s[n]=t(n+1,n,void 0,i&&i[n])}else if(x(e))if(e[Symbol.iterator])s=Array.from(e,((e,n)=>t(e,n,void 0,i&&i[n])));else{const n=Object.keys(e);s=new Array(n.length);for(let r=0,o=n.length;r<o;r++){const o=n[r];s[r]=t(e[o],o,r,i&&i[r])}}else s=[];return n&&(n[r]=s),s}function $n(e,t,n={},r,s){if(Kt.isCE||Kt.parent&&wn(Kt.parent)&&Kt.parent.isCE)return Qr("slot","default"===t?null:{name:t},r&&r());let i=e[t];i&&i._c&&(i._d=!1),Fr();const o=i&&zn(i(n)),a=qr(Dr,{key:n.key||`_${t}`},o||(r?r():[]),o&&1===e._?64:-2);return!s&&a.scopeId&&(a.slotScopeIds=[a.scopeId+"-s"]),i&&i._c&&(i._d=!0),a}function zn(e){return e.some((e=>!$r(e)||e.type!==Or&&!(e.type===Dr&&!zn(e.children))))?e:null}const Gn=e=>e?ls(e)?fs(e)||e.proxy:Gn(e.parent):null,Kn=y(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>Gn(e.parent),$root:e=>Gn(e.root),$emit:e=>e.emit,$options:e=>Xn(e),$forceUpdate:e=>e.f||(e.f=()=>Mt(e.update)),$nextTick:e=>e.n||(e.n=Lt.bind(e.proxy)),$watch:e=>on.bind(e)}),Wn={get({_:e},t){const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:a,appContext:c}=e;let l;if("$"!==t[0]){const a=o[t];if(void 0!==a)switch(a){case 1:return r[t];case 2:return s[t];case 4:return n[t];case 3:return i[t]}else{if(r!==u&&b(r,t))return o[t]=1,r[t];if(s!==u&&b(s,t))return o[t]=2,s[t];if((l=e.propsOptions[0])&&b(l,t))return o[t]=3,i[t];if(n!==u&&b(n,t))return o[t]=4,n[t];Hn&&(o[t]=0)}}const h=Kn[t];let d,f;return h?("$attrs"===t&&le(e,0,t),h(e)):(d=a.__cssModules)&&(d=d[t])?d:n!==u&&b(n,t)?(o[t]=4,n[t]):(f=c.config.globalProperties,b(f,t)?f[t]:void 0)},set({_:e},t,n){const{data:r,setupState:s,ctx:i}=e;return s!==u&&b(s,t)?(s[t]=n,!0):r!==u&&b(r,t)?(r[t]=n,!0):!b(e.props,t)&&(("$"!==t[0]||!(t.slice(1)in e))&&(i[t]=n,!0))},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:s,propsOptions:i}},o){let a;return!!n[o]||e!==u&&b(e,o)||t!==u&&b(t,o)||(a=i[0])&&b(a,o)||b(r,o)||b(Kn,o)||b(s.config.globalProperties,o)},defineProperty(e,t,n){return null!=n.get?e._.accessCache[t]=0:b(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};let Hn=!0;function Qn(e){const t=Xn(e),n=e.proxy,r=e.ctx;Hn=!1,t.beforeCreate&&Jn(t.beforeCreate,e,"bc");const{data:s,computed:i,methods:o,watch:a,provide:c,inject:l,created:u,beforeMount:h,mounted:f,beforeUpdate:p,updated:g,activated:m,deactivated:y,beforeDestroy:v,beforeUnmount:w,destroyed:b,unmounted:I,render:k,renderTracked:E,renderTriggered:S,errorCaptured:A,serverPrefetch:C,expose:N,inheritAttrs:D,components:R,directives:O,filters:P}=t;if(l&&function(e,t,n=d,r=!1){_(e)&&(e=nr(e));for(const n in e){const s=e[n];let i;i=x(s)?"default"in s?tn(s.from||n,s.default,!0):tn(s.from||n):tn(s),ht(i)&&r?Object.defineProperty(t,n,{enumerable:!0,configurable:!0,get:()=>i.value,set:e=>i.value=e}):t[n]=i}}(l,r,null,e.appContext.config.unwrapInjectedRef),o)for(const e in o){const t=o[e];T(t)&&(r[e]=t.bind(n))}if(s){const t=s.call(n,n);x(t)&&(e.data=Xe(t))}if(Hn=!0,i)for(const e in i){const t=i[e],s=T(t)?t.bind(n,n):T(t.get)?t.get.bind(n,n):d,o=!T(t)&&T(t.set)?t.set.bind(n):d,a=ps({get:s,set:o});Object.defineProperty(r,e,{enumerable:!0,configurable:!0,get:()=>a.value,set:e=>a.value=e})}if(a)for(const e in a)Yn(a[e],r,n,e);if(c){const e=T(c)?c.call(n):c;Reflect.ownKeys(e).forEach((t=>{en(t,e[t])}))}function L(e,t){_(t)?t.forEach((t=>e(t.bind(n)))):t&&e(t.bind(n))}if(u&&Jn(u,e,"c"),L(xn,h),L(An,f),L(Cn,p),L(Nn,g),L(_n,m),L(In,y),L(Mn,A),L(Ln,E),L(Pn,S),L(Dn,w),L(Rn,I),L(On,C),_(N))if(N.length){const t=e.exposed||(e.exposed={});N.forEach((e=>{Object.defineProperty(t,e,{get:()=>n[e],set:t=>n[e]=t})}))}else e.exposed||(e.exposed={});k&&e.render===d&&(e.render=k),null!=D&&(e.inheritAttrs=D),R&&(e.components=R),O&&(e.directives=O)}function Jn(e,t,n){bt(_(e)?e.map((e=>e.bind(t.proxy))):e.bind(t.proxy),t,n)}function Yn(e,t,n,r){const s=r.includes(".")?an(n,r):()=>n[r];if(E(e)){const n=t[e];T(n)&&rn(s,n)}else if(T(e))rn(s,e.bind(n));else if(x(e))if(_(e))e.forEach((e=>Yn(e,t,n,r)));else{const r=T(e.handler)?e.handler.bind(n):t[e.handler];T(r)&&rn(s,r,e)}}function Xn(e){const t=e.type,{mixins:n,extends:r}=t,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=e.appContext,a=i.get(t);let c;return a?c=a:s.length||n||r?(c={},s.length&&s.forEach((e=>Zn(c,e,o,!0))),Zn(c,t,o)):c=t,i.set(t,c),c}function Zn(e,t,n,r=!1){const{mixins:s,extends:i}=t;i&&Zn(e,i,n,!0),s&&s.forEach((t=>Zn(e,t,n,!0)));for(const s in t)if(r&&"expose"===s);else{const r=er[s]||n&&n[s];e[s]=r?r(e[s],t[s]):t[s]}return e}const er={data:tr,props:sr,emits:sr,methods:sr,computed:sr,beforeCreate:rr,created:rr,beforeMount:rr,mounted:rr,beforeUpdate:rr,updated:rr,beforeDestroy:rr,beforeUnmount:rr,destroyed:rr,unmounted:rr,activated:rr,deactivated:rr,errorCaptured:rr,serverPrefetch:rr,components:sr,directives:sr,watch:function(e,t){if(!e)return t;if(!t)return e;const n=y(Object.create(null),e);for(const r in t)n[r]=rr(e[r],t[r]);return n},provide:tr,inject:function(e,t){return sr(nr(e),nr(t))}};function tr(e,t){return t?e?function(){return y(T(e)?e.call(this,this):e,T(t)?t.call(this,this):t)}:t:e}function nr(e){if(_(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function rr(e,t){return e?[...new Set([].concat(e,t))]:t}function sr(e,t){return e?y(y(Object.create(null),e),t):t}function ir(e,t,n,r=!1){const s={},i={};$(i,Gr,1),e.propsDefaults=Object.create(null),or(e,t,s,i);for(const t in e.propsOptions[0])t in s||(s[t]=void 0);n?e.props=r?s:et(s,!1,Ee,Ge,He):e.type.props?e.props=s:e.props=i,e.attrs=i}function or(e,t,n,r){const[s,i]=e.propsOptions;let o,a=!1;if(t)for(let c in t){if(O(c))continue;const l=t[c];let u;s&&b(s,u=M(c))?i&&i.includes(u)?(o||(o={}))[u]=l:n[u]=l:Gt(e.emitsOptions,c)||c in r&&l===r[c]||(r[c]=l,a=!0)}if(i){const t=it(n),r=o||u;for(let o=0;o<i.length;o++){const a=i[o];n[a]=ar(s,t,a,r[a],e,!b(r,a))}}return a}function ar(e,t,n,r,s,i){const o=e[n];if(null!=o){const e=b(o,"default");if(e&&void 0===r){const e=o.default;if(o.type!==Function&&T(e)){const{propsDefaults:i}=s;n in i?r=i[n]:(as(s),r=i[n]=e.call(null,t),cs())}else r=e}o[0]&&(i&&!e?r=!1:!o[1]||""!==r&&r!==V(n)||(r=!0))}return r}function cr(e,t,n=!1){const r=t.propsCache,s=r.get(e);if(s)return s;const i=e.props,o={},a=[];let c=!1;if(!T(e)){const r=e=>{c=!0;const[n,r]=cr(e,t,!0);y(o,n),r&&a.push(...r)};!n&&t.mixins.length&&t.mixins.forEach(r),e.extends&&r(e.extends),e.mixins&&e.mixins.forEach(r)}if(!i&&!c)return r.set(e,h),h;if(_(i))for(let e=0;e<i.length;e++){const t=M(i[e]);lr(t)&&(o[t]=u)}else if(i)for(const e in i){const t=M(e);if(lr(t)){const n=i[e],r=o[t]=_(n)||T(n)?{type:n}:n;if(r){const e=dr(Boolean,r.type),n=dr(String,r.type);r[0]=e>-1,r[1]=n<0||e<n,(e>-1||b(r,"default"))&&a.push(t)}}}const l=[o,a];return r.set(e,l),l}function lr(e){return"$"!==e[0]}function ur(e){const t=e&&e.toString().match(/^\s*function (\w+)/);return t?t[1]:null===e?"null":""}function hr(e,t){return ur(e)===ur(t)}function dr(e,t){return _(t)?t.findIndex((t=>hr(t,e))):T(t)&&hr(t,e)?0:-1}const fr=e=>"_"===e[0]||"$stable"===e,pr=e=>_(e)?e.map(Zr):[Zr(e)],gr=(e,t,n)=>{if(t._n)return t;const r=Qt(((...e)=>pr(t(...e))),n);return r._c=!1,r},mr=(e,t,n)=>{const r=e._ctx;for(const n in e){if(fr(n))continue;const s=e[n];if(T(s))t[n]=gr(0,s,r);else if(null!=s){const e=pr(s);t[n]=()=>e}}},yr=(e,t)=>{const n=pr(t);e.slots.default=()=>n};function vr(){return{app:null,config:{isNativeTag:f,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let wr=0;function br(e,t){return function(n,r=null){T(n)||(n=Object.assign({},n)),null==r||x(r)||(r=null);const s=vr(),i=new Set;let o=!1;const a=s.app={_uid:wr++,_component:n,_props:r,_container:null,_context:s,_instance:null,version:ms,get config(){return s.config},set config(e){},use:(e,...t)=>(i.has(e)||(e&&T(e.install)?(i.add(e),e.install(a,...t)):T(e)&&(i.add(e),e(a,...t))),a),mixin:e=>(s.mixins.includes(e)||s.mixins.push(e),a),component:(e,t)=>t?(s.components[e]=t,a):s.components[e],directive:(e,t)=>t?(s.directives[e]=t,a):s.directives[e],mount(i,c,l){if(!o){const u=Qr(n,r);return u.appContext=s,c&&t?t(u,i):e(u,i,l),o=!0,a._container=i,i.__vue_app__=a,fs(u.component)||u.component.proxy}},unmount(){o&&(e(null,a._container),delete a._container.__vue_app__)},provide:(e,t)=>(s.provides[e]=t,a)};return a}}function _r(e,t,n,r,s=!1){if(_(e))return void e.forEach(((e,i)=>_r(e,t&&(_(t)?t[i]:t),n,r,s)));if(wn(r)&&!s)return;const i=4&r.shapeFlag?fs(r.component)||r.component.proxy:r.el,o=s?null:i,{i:a,r:c}=e,l=t&&t.r,h=a.refs===u?a.refs={}:a.refs,d=a.setupState;if(null!=l&&l!==c&&(E(l)?(h[l]=null,b(d,l)&&(d[l]=null)):ht(l)&&(l.value=null)),T(c))wt(c,a,12,[o,h]);else{const t=E(c),r=ht(c);if(t||r){const a=()=>{if(e.f){const n=t?h[c]:c.value;s?_(n)&&v(n,i):_(n)?n.includes(i)||n.push(i):t?(h[c]=[i],b(d,c)&&(d[c]=h[c])):(c.value=[i],e.k&&(h[e.k]=c.value))}else t?(h[c]=o,b(d,c)&&(d[c]=o)):r&&(c.value=o,e.k&&(h[e.k]=o))};o?(a.id=-1,Ir(a,n)):a()}}}const Ir=function(e,t){t&&t.pendingBranch?_(e)?t.effects.push(...e):t.effects.push(e):Vt(e,Nt,Ct,Dt)};function kr(e){return function(e,t){(G||(G="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{})).__VUE__=!0;const{insert:n,remove:r,patchProp:s,createElement:i,createText:o,createComment:a,setText:c,setElementText:l,parentNode:f,nextSibling:p,setScopeId:g=d,cloneNode:m,insertStaticContent:v}=e,w=(e,t,n,r=null,s=null,i=null,o=!1,a=null,c=!!t.dynamicChildren)=>{if(e===t)return;e&&!zr(e,t)&&(r=ne(e),Y(e,s,i,!0),e=null),-2===t.patchFlag&&(c=!1,t.dynamicChildren=null);const{type:l,ref:u,shapeFlag:h}=t;switch(l){case Rr:_(e,t,n,r);break;case Or:I(e,t,n,r);break;case Pr:null==e&&k(t,n,r,o);break;case Dr:L(e,t,n,r,s,i,o,a,c);break;default:1&h?S(e,t,n,r,s,i,o,a,c):6&h?F(e,t,n,r,s,i,o,a,c):(64&h||128&h)&&l.process(e,t,n,r,s,i,o,a,c,ie)}null!=u&&s&&_r(u,e&&e.ref,i,t||e,!t)},_=(e,t,r,s)=>{if(null==e)n(t.el=o(t.children),r,s);else{const n=t.el=e.el;t.children!==e.children&&c(n,t.children)}},I=(e,t,r,s)=>{null==e?n(t.el=a(t.children||""),r,s):t.el=e.el},k=(e,t,n,r)=>{[e.el,e.anchor]=v(e.children,t,n,r,e.el,e.anchor)},T=({el:e,anchor:t},r,s)=>{let i;for(;e&&e!==t;)i=p(e),n(e,r,s),e=i;n(t,r,s)},E=({el:e,anchor:t})=>{let n;for(;e&&e!==t;)n=p(e),r(e),e=n;r(t)},S=(e,t,n,r,s,i,o,a,c)=>{o=o||"svg"===t.type,null==e?x(t,n,r,s,i,o,a,c):D(e,t,s,i,o,a,c)},x=(e,t,r,o,a,c,u,h)=>{let d,f;const{type:p,props:g,shapeFlag:y,transition:v,patchFlag:w,dirs:b}=e;if(e.el&&void 0!==m&&-1===w)d=e.el=m(e.el);else{if(d=e.el=i(e.type,c,g&&g.is,g),8&y?l(d,e.children):16&y&&N(e.children,d,null,o,a,c&&"foreignObject"!==p,u,h),b&&Vn(e,null,o,"created"),g){for(const t in g)"value"===t||O(t)||s(d,t,null,g[t],c,e.children,o,a,te);"value"in g&&s(d,"value",null,g.value),(f=g.onVnodeBeforeMount)&&ns(f,o,e)}C(d,e,e.scopeId,u,o)}b&&Vn(e,null,o,"beforeMount");const _=(!a||a&&!a.pendingBranch)&&v&&!v.persisted;_&&v.beforeEnter(d),n(d,t,r),((f=g&&g.onVnodeMounted)||_||b)&&Ir((()=>{f&&ns(f,o,e),_&&v.enter(d),b&&Vn(e,null,o,"mounted")}),a)},C=(e,t,n,r,s)=>{if(n&&g(e,n),r)for(let t=0;t<r.length;t++)g(e,r[t]);if(s){if(t===s.subTree){const t=s.vnode;C(e,t,t.scopeId,t.slotScopeIds,s.parent)}}},N=(e,t,n,r,s,i,o,a,c=0)=>{for(let l=c;l<e.length;l++){const c=e[l]=a?es(e[l]):Zr(e[l]);w(null,c,t,n,r,s,i,o,a)}},D=(e,t,n,r,i,o,a)=>{const c=t.el=e.el;let{patchFlag:h,dynamicChildren:d,dirs:f}=t;h|=16&e.patchFlag;const p=e.props||u,g=t.props||u;let m;n&&Tr(n,!1),(m=g.onVnodeBeforeUpdate)&&ns(m,n,t,e),f&&Vn(t,e,n,"beforeUpdate"),n&&Tr(n,!0);const y=i&&"foreignObject"!==t.type;if(d?R(e.dynamicChildren,d,c,n,r,y,o):a||K(e,t,c,null,n,r,y,o,!1),h>0){if(16&h)P(c,t,p,g,n,r,i);else if(2&h&&p.class!==g.class&&s(c,"class",null,g.class,i),4&h&&s(c,"style",p.style,g.style,i),8&h){const o=t.dynamicProps;for(let t=0;t<o.length;t++){const a=o[t],l=p[a],u=g[a];u===l&&"value"!==a||s(c,a,l,u,i,e.children,n,r,te)}}1&h&&e.children!==t.children&&l(c,t.children)}else a||null!=d||P(c,t,p,g,n,r,i);((m=g.onVnodeUpdated)||f)&&Ir((()=>{m&&ns(m,n,t,e),f&&Vn(t,e,n,"updated")}),r)},R=(e,t,n,r,s,i,o)=>{for(let a=0;a<t.length;a++){const c=e[a],l=t[a],u=c.el&&(c.type===Dr||!zr(c,l)||70&c.shapeFlag)?f(c.el):n;w(c,l,u,null,r,s,i,o,!0)}},P=(e,t,n,r,i,o,a)=>{if(n!==r){for(const c in r){if(O(c))continue;const l=r[c],u=n[c];l!==u&&"value"!==c&&s(e,c,u,l,a,t.children,i,o,te)}if(n!==u)for(const c in n)O(c)||c in r||s(e,c,n[c],null,a,t.children,i,o,te);"value"in r&&s(e,"value",n.value,r.value)}},L=(e,t,r,s,i,a,c,l,u)=>{const h=t.el=e?e.el:o(""),d=t.anchor=e?e.anchor:o("");let{patchFlag:f,dynamicChildren:p,slotScopeIds:g}=t;g&&(l=l?l.concat(g):g),null==e?(n(h,r,s),n(d,r,s),N(t.children,r,d,i,a,c,l,u)):f>0&&64&f&&p&&e.dynamicChildren?(R(e.dynamicChildren,p,r,i,a,c,l),(null!=t.key||i&&t===i.subTree)&&Er(e,t,!0)):K(e,t,r,d,i,a,c,l,u)},F=(e,t,n,r,s,i,o,a,c)=>{t.slotScopeIds=a,null==e?512&t.shapeFlag?s.ctx.activate(t,n,r,o,c):U(t,n,r,s,i,o,c):B(e,t,c)},U=(e,t,n,r,s,i,o)=>{const a=e.component=function(e,t,n){const r=e.type,s=(t?t.appContext:e.appContext)||rs,i={uid:ss++,vnode:e,type:r,parent:t,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new W(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:cr(r,s),emitsOptions:zt(r,s),emit:null,emitted:null,propsDefaults:u,inheritAttrs:r.inheritAttrs,ctx:u,data:u,props:u,attrs:u,slots:u,refs:u,setupState:u,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};i.ctx={_:i},i.root=t?t.root:i,i.emit=$t.bind(null,i),e.ce&&e.ce(i);return i}(e,r,s);if(bn(e)&&(a.ctx.renderer=ie),function(e,t=!1){us=t;const{props:n,children:r}=e.vnode,s=ls(e);ir(e,n,s,t),((e,t)=>{if(32&e.vnode.shapeFlag){const n=t._;n?(e.slots=it(t),$(t,"_",n)):mr(t,e.slots={})}else e.slots={},t&&yr(e,t);$(e.slots,Gr,1)})(e,r);const i=s?function(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=ot(new Proxy(e.ctx,Wn));const{setup:r}=n;if(r){const n=e.setupContext=r.length>1?function(e){const t=t=>{e.exposed=t||{}};let n;return{get attrs(){return n||(n=function(e){return new Proxy(e.attrs,{get:(t,n)=>(le(e,0,"$attrs"),t[n])})}(e))},slots:e.slots,emit:e.emit,expose:t}}(e):null;as(e),ae();const s=wt(r,e,0,[e.props,n]);if(ce(),cs(),A(s)){if(s.then(cs,cs),t)return s.then((n=>{hs(e,n,t)})).catch((t=>{_t(t,e,0)}));e.asyncDep=s}else hs(e,s,t)}else ds(e,t)}(e,t):void 0;us=!1}(a),a.asyncDep){if(s&&s.registerDep(a,j),!e.el){const e=a.subTree=Qr(Or);I(null,e,t,n)}}else j(a,e,t,n,s,i,o)},B=(e,t,n)=>{const r=t.component=e.component;if(function(e,t,n){const{props:r,children:s,component:i}=e,{props:o,children:a,patchFlag:c}=t,l=i.emitsOptions;if(t.dirs||t.transition)return!0;if(!(n&&c>=0))return!(!s&&!a||a&&a.$stable)||r!==o&&(r?!o||Zt(r,o,l):!!o);if(1024&c)return!0;if(16&c)return r?Zt(r,o,l):!!o;if(8&c){const e=t.dynamicProps;for(let t=0;t<e.length;t++){const n=e[t];if(o[n]!==r[n]&&!Gt(l,n))return!0}}return!1}(e,t,n)){if(r.asyncDep&&!r.asyncResolved)return void z(r,t,n);r.next=t,function(e){const t=Tt.indexOf(e);t>Et&&Tt.splice(t,1)}(r.update),r.update()}else t.el=e.el,r.vnode=t},j=(e,t,n,r,s,i,o)=>{const a=()=>{if(e.isMounted){let t,{next:n,bu:r,u:a,parent:c,vnode:l}=e,u=n;Tr(e,!1),n?(n.el=l.el,z(e,n,o)):n=l,r&&q(r),(t=n.props&&n.props.onVnodeBeforeUpdate)&&ns(t,c,n,l),Tr(e,!0);const h=Jt(e),d=e.subTree;e.subTree=h,w(d,h,f(d.el),ne(d),e,s,i),n.el=h.el,null===u&&function({vnode:e,parent:t},n){for(;t&&t.subTree===e;)(e=t.vnode).el=n,t=t.parent}(e,h.el),a&&Ir(a,s),(t=n.props&&n.props.onVnodeUpdated)&&Ir((()=>ns(t,c,n,l)),s)}else{let o;const{el:a,props:c}=t,{bm:l,m:u,parent:h}=e,d=wn(t);if(Tr(e,!1),l&&q(l),!d&&(o=c&&c.onVnodeBeforeMount)&&ns(o,h,t),Tr(e,!0),a&&ue){const n=()=>{e.subTree=Jt(e),ue(a,e.subTree,e,s,null)};d?t.type.__asyncLoader().then((()=>!e.isUnmounted&&n())):n()}else{const o=e.subTree=Jt(e);w(null,o,n,r,e,s,i),t.el=o.el}if(u&&Ir(u,s),!d&&(o=c&&c.onVnodeMounted)){const e=t;Ir((()=>ns(o,h,e)),s)}(256&t.shapeFlag||h&&wn(h.vnode)&&256&h.vnode.shapeFlag)&&e.a&&Ir(e.a,s),e.isMounted=!0,t=n=r=null}},c=e.effect=new re(a,(()=>Mt(l)),e.scope),l=e.update=()=>c.run();l.id=e.uid,Tr(e,!0),l()},z=(e,t,n)=>{t.component=e;const r=e.vnode.props;e.vnode=t,e.next=null,function(e,t,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=e,a=it(s),[c]=e.propsOptions;let l=!1;if(!(r||o>0)||16&o){let r;or(e,t,s,i)&&(l=!0);for(const i in a)t&&(b(t,i)||(r=V(i))!==i&&b(t,r))||(c?!n||void 0===n[i]&&void 0===n[r]||(s[i]=ar(c,a,i,void 0,e,!0)):delete s[i]);if(i!==a)for(const e in i)t&&b(t,e)||(delete i[e],l=!0)}else if(8&o){const n=e.vnode.dynamicProps;for(let r=0;r<n.length;r++){let o=n[r];if(Gt(e.emitsOptions,o))continue;const u=t[o];if(c)if(b(i,o))u!==i[o]&&(i[o]=u,l=!0);else{const t=M(o);s[t]=ar(c,a,t,u,e,!1)}else u!==i[o]&&(i[o]=u,l=!0)}}l&&he(e,"set","$attrs")}(e,t.props,r,n),((e,t,n)=>{const{vnode:r,slots:s}=e;let i=!0,o=u;if(32&r.shapeFlag){const e=t._;e?n&&1===e?i=!1:(y(s,t),n||1!==e||delete s._):(i=!t.$stable,mr(t,s)),o=t}else t&&(yr(e,t),o={default:1});if(i)for(const e in s)fr(e)||e in o||delete s[e]})(e,t.children,n),ae(),Ut(void 0,e.update),ce()},K=(e,t,n,r,s,i,o,a,c=!1)=>{const u=e&&e.children,h=e?e.shapeFlag:0,d=t.children,{patchFlag:f,shapeFlag:p}=t;if(f>0){if(128&f)return void Q(u,d,n,r,s,i,o,a,c);if(256&f)return void H(u,d,n,r,s,i,o,a,c)}8&p?(16&h&&te(u,s,i),d!==u&&l(n,d)):16&h?16&p?Q(u,d,n,r,s,i,o,a,c):te(u,s,i,!0):(8&h&&l(n,""),16&p&&N(d,n,r,s,i,o,a,c))},H=(e,t,n,r,s,i,o,a,c)=>{t=t||h;const l=(e=e||h).length,u=t.length,d=Math.min(l,u);let f;for(f=0;f<d;f++){const r=t[f]=c?es(t[f]):Zr(t[f]);w(e[f],r,n,null,s,i,o,a,c)}l>u?te(e,s,i,!0,!1,d):N(t,n,r,s,i,o,a,c,d)},Q=(e,t,n,r,s,i,o,a,c)=>{let l=0;const u=t.length;let d=e.length-1,f=u-1;for(;l<=d&&l<=f;){const r=e[l],u=t[l]=c?es(t[l]):Zr(t[l]);if(!zr(r,u))break;w(r,u,n,null,s,i,o,a,c),l++}for(;l<=d&&l<=f;){const r=e[d],l=t[f]=c?es(t[f]):Zr(t[f]);if(!zr(r,l))break;w(r,l,n,null,s,i,o,a,c),d--,f--}if(l>d){if(l<=f){const e=f+1,h=e<u?t[e].el:r;for(;l<=f;)w(null,t[l]=c?es(t[l]):Zr(t[l]),n,h,s,i,o,a,c),l++}}else if(l>f)for(;l<=d;)Y(e[l],s,i,!0),l++;else{const p=l,g=l,m=new Map;for(l=g;l<=f;l++){const e=t[l]=c?es(t[l]):Zr(t[l]);null!=e.key&&m.set(e.key,l)}let y,v=0;const b=f-g+1;let _=!1,I=0;const k=new Array(b);for(l=0;l<b;l++)k[l]=0;for(l=p;l<=d;l++){const r=e[l];if(v>=b){Y(r,s,i,!0);continue}let u;if(null!=r.key)u=m.get(r.key);else for(y=g;y<=f;y++)if(0===k[y-g]&&zr(r,t[y])){u=y;break}void 0===u?Y(r,s,i,!0):(k[u-g]=l+1,u>=I?I=u:_=!0,w(r,t[u],n,null,s,i,o,a,c),v++)}const T=_?function(e){const t=e.slice(),n=[0];let r,s,i,o,a;const c=e.length;for(r=0;r<c;r++){const c=e[r];if(0!==c){if(s=n[n.length-1],e[s]<c){t[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,e[n[a]]<c?i=a+1:o=a;c<e[n[i]]&&(i>0&&(t[r]=n[i-1]),n[i]=r)}}i=n.length,o=n[i-1];for(;i-- >0;)n[i]=o,o=t[o];return n}(k):h;for(y=T.length-1,l=b-1;l>=0;l--){const e=g+l,h=t[e],d=e+1<u?t[e+1].el:r;0===k[l]?w(null,h,n,d,s,i,o,a,c):_&&(y<0||l!==T[y]?J(h,n,d,2):y--)}}},J=(e,t,r,s,i=null)=>{const{el:o,type:a,transition:c,children:l,shapeFlag:u}=e;if(6&u)return void J(e.component.subTree,t,r,s);if(128&u)return void e.suspense.move(t,r,s);if(64&u)return void a.move(e,t,r,ie);if(a===Dr){n(o,t,r);for(let e=0;e<l.length;e++)J(l[e],t,r,s);return void n(e.anchor,t,r)}if(a===Pr)return void T(e,t,r);if(2!==s&&1&u&&c)if(0===s)c.beforeEnter(o),n(o,t,r),Ir((()=>c.enter(o)),i);else{const{leave:e,delayLeave:s,afterLeave:i}=c,a=()=>n(o,t,r),l=()=>{e(o,(()=>{a(),i&&i()}))};s?s(o,a,l):l()}else n(o,t,r)},Y=(e,t,n,r=!1,s=!1)=>{const{type:i,props:o,ref:a,children:c,dynamicChildren:l,shapeFlag:u,patchFlag:h,dirs:d}=e;if(null!=a&&_r(a,null,n,e,!0),256&u)return void t.ctx.deactivate(e);const f=1&u&&d,p=!wn(e);let g;if(p&&(g=o&&o.onVnodeBeforeUnmount)&&ns(g,t,e),6&u)ee(e.component,n,r);else{if(128&u)return void e.suspense.unmount(n,r);f&&Vn(e,null,t,"beforeUnmount"),64&u?e.type.remove(e,t,n,s,ie,r):l&&(i!==Dr||h>0&&64&h)?te(l,t,n,!1,!0):(i===Dr&&384&h||!s&&16&u)&&te(c,t,n),r&&X(e)}(p&&(g=o&&o.onVnodeUnmounted)||f)&&Ir((()=>{g&&ns(g,t,e),f&&Vn(e,null,t,"unmounted")}),n)},X=e=>{const{type:t,el:n,anchor:s,transition:i}=e;if(t===Dr)return void Z(n,s);if(t===Pr)return void E(e);const o=()=>{r(n),i&&!i.persisted&&i.afterLeave&&i.afterLeave()};if(1&e.shapeFlag&&i&&!i.persisted){const{leave:t,delayLeave:r}=i,s=()=>t(n,o);r?r(e.el,o,s):s()}else o()},Z=(e,t)=>{let n;for(;e!==t;)n=p(e),r(e),e=n;r(t)},ee=(e,t,n)=>{const{bum:r,scope:s,update:i,subTree:o,um:a}=e;r&&q(r),s.stop(),i&&(i.active=!1,Y(o,e,t,n)),a&&Ir(a,t),Ir((()=>{e.isUnmounted=!0}),t),t&&t.pendingBranch&&!t.isUnmounted&&e.asyncDep&&!e.asyncResolved&&e.suspenseId===t.pendingId&&(t.deps--,0===t.deps&&t.resolve())},te=(e,t,n,r=!1,s=!1,i=0)=>{for(let o=i;o<e.length;o++)Y(e[o],t,n,r,s)},ne=e=>6&e.shapeFlag?ne(e.component.subTree):128&e.shapeFlag?e.suspense.next():p(e.anchor||e.el),se=(e,t,n)=>{null==e?t._vnode&&Y(t._vnode,null,null,!0):w(t._vnode||null,e,t,null,null,null,n),Bt(),t._vnode=e},ie={p:w,um:Y,m:J,r:X,mt:U,mc:N,pc:K,pbc:R,n:ne,o:e};let oe,ue;t&&([oe,ue]=t(ie));return{render:se,hydrate:oe,createApp:br(se,oe)}}(e)}function Tr({effect:e,update:t},n){e.allowRecurse=t.allowRecurse=n}function Er(e,t,n=!1){const r=e.children,s=t.children;if(_(r)&&_(s))for(let e=0;e<r.length;e++){const t=r[e];let i=s[e];1&i.shapeFlag&&!i.dynamicChildren&&((i.patchFlag<=0||32===i.patchFlag)&&(i=s[e]=es(s[e]),i.el=t.el),n||Er(t,i))}}const Sr=e=>e&&(e.disabled||""===e.disabled),xr=e=>"undefined"!=typeof SVGElement&&e instanceof SVGElement,Ar=(e,t)=>{const n=e&&e.to;if(E(n)){if(t){return t(n)}return null}return n};function Cr(e,t,n,{o:{insert:r},m:s},i=2){0===i&&r(e.targetAnchor,t,n);const{el:o,anchor:a,shapeFlag:c,children:l,props:u}=e,h=2===i;if(h&&r(o,t,n),(!h||Sr(u))&&16&c)for(let e=0;e<l.length;e++)s(l[e],t,n,2);h&&r(a,t,n)}const Nr={__isTeleport:!0,process(e,t,n,r,s,i,o,a,c,l){const{mc:u,pc:h,pbc:d,o:{insert:f,querySelector:p,createText:g,createComment:m}}=l,y=Sr(t.props);let{shapeFlag:v,children:w,dynamicChildren:b}=t;if(null==e){const e=t.el=g(""),l=t.anchor=g("");f(e,n,r),f(l,n,r);const h=t.target=Ar(t.props,p),d=t.targetAnchor=g("");h&&(f(d,h),o=o||xr(h));const m=(e,t)=>{16&v&&u(w,e,t,s,i,o,a,c)};y?m(n,l):h&&m(h,d)}else{t.el=e.el;const r=t.anchor=e.anchor,u=t.target=e.target,f=t.targetAnchor=e.targetAnchor,g=Sr(e.props),m=g?n:u,v=g?r:f;if(o=o||xr(u),b?(d(e.dynamicChildren,b,m,s,i,o,a),Er(e,t,!0)):c||h(e,t,m,v,s,i,o,a,!1),y)g||Cr(t,n,r,l,1);else if((t.props&&t.props.to)!==(e.props&&e.props.to)){const e=t.target=Ar(t.props,p);e&&Cr(t,e,null,l,0)}else g&&Cr(t,u,f,l,1)}},remove(e,t,n,r,{um:s,o:{remove:i}},o){const{shapeFlag:a,children:c,anchor:l,targetAnchor:u,target:h,props:d}=e;if(h&&i(u),(o||!Sr(d))&&(i(l),16&a))for(let e=0;e<c.length;e++){const r=c[e];s(r,t,n,!0,!!r.dynamicChildren)}},move:Cr,hydrate:function(e,t,n,r,s,i,{o:{nextSibling:o,parentNode:a,querySelector:c}},l){const u=t.target=Ar(t.props,c);if(u){const c=u._lpa||u.firstChild;if(16&t.shapeFlag)if(Sr(t.props))t.anchor=l(o(e),t,a(e),n,r,s,i),t.targetAnchor=c;else{t.anchor=o(e);let a=c;for(;a;)if(a=o(a),a&&8===a.nodeType&&"teleport anchor"===a.data){t.targetAnchor=a,u._lpa=t.targetAnchor&&o(t.targetAnchor);break}l(c,t,u,n,r,s,i)}}return t.anchor&&o(t.anchor)}},Dr=Symbol(void 0),Rr=Symbol(void 0),Or=Symbol(void 0),Pr=Symbol(void 0),Lr=[];let Mr=null;function Fr(e=!1){Lr.push(Mr=e?null:[])}let Vr=1;function Ur(e){Vr+=e}function Br(e){return e.dynamicChildren=Vr>0?Mr||h:null,Lr.pop(),Mr=Lr[Lr.length-1]||null,Vr>0&&Mr&&Mr.push(e),e}function jr(e,t,n,r,s,i){return Br(Hr(e,t,n,r,s,i,!0))}function qr(e,t,n,r,s){return Br(Qr(e,t,n,r,s,!0))}function $r(e){return!!e&&!0===e.__v_isVNode}function zr(e,t){return e.type===t.type&&e.key===t.key}const Gr="__vInternal",Kr=({key:e})=>null!=e?e:null,Wr=({ref:e,ref_key:t,ref_for:n})=>null!=e?E(e)||ht(e)||T(e)?{i:Kt,r:e,k:t,f:!!n}:e:null;function Hr(e,t=null,n=null,r=0,s=null,i=(e===Dr?0:1),o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&Kr(t),ref:t&&Wr(t),scopeId:Wt,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null};return a?(ts(c,n),128&i&&e.normalize(c)):n&&(c.shapeFlag|=E(n)?8:16),Vr>0&&!o&&Mr&&(c.patchFlag>0||6&i)&&32!==c.patchFlag&&Mr.push(c),c}const Qr=function(e,t=null,n=null,s=0,i=null,o=!1){e&&e!==Bn||(e=Or);if($r(e)){const r=Jr(e,t,!0);return n&&ts(r,n),Vr>0&&!o&&Mr&&(6&r.shapeFlag?Mr[Mr.indexOf(e)]=r:Mr.push(r)),r.patchFlag|=-2,r}c=e,T(c)&&"__vccOpts"in c&&(e=e.__vccOpts);var c;if(t){t=function(e){return e?st(e)||Gr in e?y({},e):e:null}(t);let{class:e,style:n}=t;e&&!E(e)&&(t.class=a(e)),x(n)&&(st(n)&&!_(n)&&(n=y({},n)),t.style=r(n))}const l=E(e)?1:(e=>e.__isSuspense)(e)?128:(e=>e.__isTeleport)(e)?64:x(e)?4:T(e)?2:0;return Hr(e,t,n,s,i,l,o,!0)};function Jr(e,t,n=!1){const{props:s,ref:i,patchFlag:o,children:c}=e,l=t?function(...e){const t={};for(let n=0;n<e.length;n++){const s=e[n];for(const e in s)if("class"===e)t.class!==s.class&&(t.class=a([t.class,s.class]));else if("style"===e)t.style=r([t.style,s.style]);else if(g(e)){const n=t[e],r=s[e];!r||n===r||_(n)&&n.includes(r)||(t[e]=n?[].concat(n,r):r)}else""!==e&&(t[e]=s[e])}return t}(s||{},t):s;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:l,key:l&&Kr(l),ref:t&&t.ref?n&&i?_(i)?i.concat(Wr(t)):[i,Wr(t)]:Wr(t):i,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:c,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==Dr?-1===o?16:16|o:o,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Jr(e.ssContent),ssFallback:e.ssFallback&&Jr(e.ssFallback),el:e.el,anchor:e.anchor}}function Yr(e=" ",t=0){return Qr(Rr,null,e,t)}function Xr(e="",t=!1){return t?(Fr(),qr(Or,null,e)):Qr(Or,null,e)}function Zr(e){return null==e||"boolean"==typeof e?Qr(Or):_(e)?Qr(Dr,null,e.slice()):"object"==typeof e?es(e):Qr(Rr,null,String(e))}function es(e){return null===e.el||e.memo?e:Jr(e)}function ts(e,t){let n=0;const{shapeFlag:r}=e;if(null==t)t=null;else if(_(t))n=16;else if("object"==typeof t){if(65&r){const n=t.default;return void(n&&(n._c&&(n._d=!1),ts(e,n()),n._c&&(n._d=!0)))}{n=32;const r=t._;r||Gr in t?3===r&&Kt&&(1===Kt.slots._?t._=1:(t._=2,e.patchFlag|=1024)):t._ctx=Kt}}else T(t)?(t={default:t,_ctx:Kt},n=32):(t=String(t),64&r?(n=16,t=[Yr(t)]):n=8);e.children=t,e.shapeFlag|=n}function ns(e,t,n,r=null){bt(e,t,7,[n,r])}const rs=vr();let ss=0;let is=null;const os=()=>is||Kt,as=e=>{is=e,e.scope.on()},cs=()=>{is&&is.scope.off(),is=null};function ls(e){return 4&e.vnode.shapeFlag}let us=!1;function hs(e,t,n){T(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:x(t)&&(e.setupState=yt(t)),ds(e,n)}function ds(e,t,n){const r=e.type;e.render||(e.render=r.render||d),as(e),ae(),Qn(e),ce(),cs()}function fs(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(yt(ot(e.exposed)),{get:(t,n)=>n in t?t[n]:n in Kn?Kn[n](e):void 0}))}const ps=(e,t)=>function(e,t,n=!1){let r,s;const i=T(e);return i?(r=e,s=d):(r=e.get,s=e.set),new vt(r,s,i||!s,n)}(e,0,us);function gs(e,t,n){const r=arguments.length;return 2===r?x(t)&&!_(t)?$r(t)?Qr(e,null,[t]):Qr(e,t):Qr(e,null,t):(r>3?n=Array.prototype.slice.call(arguments,2):3===r&&$r(n)&&(n=[n]),Qr(e,t,n))}const ms="3.2.37",ys="undefined"!=typeof document?document:null,vs=ys&&ys.createElement("template"),ws={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{const s=t?ys.createElementNS("http://www.w3.org/2000/svg",e):ys.createElement(e,n?{is:n}:void 0);return"select"===e&&r&&null!=r.multiple&&s.setAttribute("multiple",r.multiple),s},createText:e=>ys.createTextNode(e),createComment:e=>ys.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>ys.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},cloneNode(e){const t=e.cloneNode(!0);return"_value"in e&&(t._value=e._value),t},insertStaticContent(e,t,n,r,s,i){const o=n?n.previousSibling:t.lastChild;if(s&&(s===i||s.nextSibling))for(;t.insertBefore(s.cloneNode(!0),n),s!==i&&(s=s.nextSibling););else{vs.innerHTML=r?`<svg>${e}</svg>`:e;const s=vs.content;if(r){const e=s.firstChild;for(;e.firstChild;)s.appendChild(e.firstChild);s.removeChild(e)}t.insertBefore(s,n)}return[o?o.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}};const bs=/\s*!important$/;function _s(e,t,n){if(_(n))n.forEach((n=>_s(e,t,n)));else if(null==n&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const r=function(e,t){const n=ks[t];if(n)return n;let r=M(t);if("filter"!==r&&r in e)return ks[t]=r;r=U(r);for(let n=0;n<Is.length;n++){const s=Is[n]+r;if(s in e)return ks[t]=s}return t}(e,t);bs.test(n)?e.setProperty(V(r),n.replace(bs,""),"important"):e[r]=n}}const Is=["Webkit","Moz","ms"],ks={};const Ts="http://www.w3.org/1999/xlink";const[Es,Ss]=(()=>{let e=Date.now,t=!1;if("undefined"!=typeof window){Date.now()>document.createEvent("Event").timeStamp&&(e=performance.now.bind(performance));const n=navigator.userAgent.match(/firefox\/(\d+)/i);t=!!(n&&Number(n[1])<=53)}return[e,t]})();let xs=0;const As=Promise.resolve(),Cs=()=>{xs=0};function Ns(e,t,n,r){e.addEventListener(t,n,r)}function Ds(e,t,n,r,s=null){const i=e._vei||(e._vei={}),o=i[t];if(r&&o)o.value=r;else{const[n,a]=function(e){let t;if(Rs.test(e)){let n;for(t={};n=e.match(Rs);)e=e.slice(0,e.length-n[0].length),t[n[0].toLowerCase()]=!0}return[V(e.slice(2)),t]}(t);if(r){const o=i[t]=function(e,t){const n=e=>{const r=e.timeStamp||Es();(Ss||r>=n.attached-1)&&bt(function(e,t){if(_(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map((e=>t=>!t._stopped&&e&&e(t)))}return t}(e,n.value),t,5,[e])};return n.value=e,n.attached=(()=>xs||(As.then(Cs),xs=Es()))(),n}(r,s);Ns(e,n,o,a)}else o&&(!function(e,t,n,r){e.removeEventListener(t,n,r)}(e,n,o,a),i[t]=void 0)}}const Rs=/(?:Once|Passive|Capture)$/;const Os=/^on[a-z]/;const Ps="transition",Ls=(e,{slots:t})=>gs(hn,function(e){const t={};for(const n in e)n in Ms||(t[n]=e[n]);if(!1===e.css)return t;const{name:n="v",type:r,duration:s,enterFromClass:i=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:a=`${n}-enter-to`,appearFromClass:c=i,appearActiveClass:l=o,appearToClass:u=a,leaveFromClass:h=`${n}-leave-from`,leaveActiveClass:d=`${n}-leave-active`,leaveToClass:f=`${n}-leave-to`}=e,p=function(e){if(null==e)return null;if(x(e))return[Us(e.enter),Us(e.leave)];{const t=Us(e);return[t,t]}}(s),g=p&&p[0],m=p&&p[1],{onBeforeEnter:v,onEnter:w,onEnterCancelled:b,onLeave:_,onLeaveCancelled:I,onBeforeAppear:k=v,onAppear:T=w,onAppearCancelled:E=b}=t,S=(e,t,n)=>{js(e,t?u:a),js(e,t?l:o),n&&n()},A=(e,t)=>{e._isLeaving=!1,js(e,h),js(e,f),js(e,d),t&&t()},C=e=>(t,n)=>{const s=e?T:w,o=()=>S(t,e,n);Fs(s,[t,o]),qs((()=>{js(t,e?c:i),Bs(t,e?u:a),Vs(s)||zs(t,r,g,o)}))};return y(t,{onBeforeEnter(e){Fs(v,[e]),Bs(e,i),Bs(e,o)},onBeforeAppear(e){Fs(k,[e]),Bs(e,c),Bs(e,l)},onEnter:C(!1),onAppear:C(!0),onLeave(e,t){e._isLeaving=!0;const n=()=>A(e,t);Bs(e,h),document.body.offsetHeight,Bs(e,d),qs((()=>{e._isLeaving&&(js(e,h),Bs(e,f),Vs(_)||zs(e,r,m,n))})),Fs(_,[e,n])},onEnterCancelled(e){S(e,!1),Fs(b,[e])},onAppearCancelled(e){S(e,!0),Fs(E,[e])},onLeaveCancelled(e){A(e),Fs(I,[e])}})}(e),t);Ls.displayName="Transition";const Ms={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};Ls.props=y({},hn.props,Ms);const Fs=(e,t=[])=>{_(e)?e.forEach((e=>e(...t))):e&&e(...t)},Vs=e=>!!e&&(_(e)?e.some((e=>e.length>1)):e.length>1);function Us(e){return z(e)}function Bs(e,t){t.split(/\s+/).forEach((t=>t&&e.classList.add(t))),(e._vtc||(e._vtc=new Set)).add(t)}function js(e,t){t.split(/\s+/).forEach((t=>t&&e.classList.remove(t)));const{_vtc:n}=e;n&&(n.delete(t),n.size||(e._vtc=void 0))}function qs(e){requestAnimationFrame((()=>{requestAnimationFrame(e)}))}let $s=0;function zs(e,t,n,r){const s=e._endId=++$s,i=()=>{s===e._endId&&r()};if(n)return setTimeout(i,n);const{type:o,timeout:a,propCount:c}=function(e,t){const n=window.getComputedStyle(e),r=e=>(n[e]||"").split(", "),s=r("transitionDelay"),i=r("transitionDuration"),o=Gs(s,i),a=r("animationDelay"),c=r("animationDuration"),l=Gs(a,c);let u=null,h=0,d=0;t===Ps?o>0&&(u=Ps,h=o,d=i.length):"animation"===t?l>0&&(u="animation",h=l,d=c.length):(h=Math.max(o,l),u=h>0?o>l?Ps:"animation":null,d=u?u===Ps?i.length:c.length:0);const f=u===Ps&&/\b(transform|all)(,|$)/.test(n.transitionProperty);return{type:u,timeout:h,propCount:d,hasTransform:f}}(e,t);if(!o)return r();const l=o+"end";let u=0;const h=()=>{e.removeEventListener(l,d),i()},d=t=>{t.target===e&&++u>=c&&h()};setTimeout((()=>{u<c&&h()}),a+1),e.addEventListener(l,d)}function Gs(e,t){for(;e.length<t.length;)e=e.concat(e);return Math.max(...t.map(((t,n)=>Ks(t)+Ks(e[n]))))}function Ks(e){return 1e3*Number(e.slice(0,-1).replace(",","."))}const Ws=e=>{const t=e.props["onUpdate:modelValue"]||!1;return _(t)?e=>q(t,e):t};function Hs(e){e.target.composing=!0}function Qs(e){const t=e.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const Js={created(e,{modifiers:{lazy:t,trim:n,number:r}},s){e._assign=Ws(s);const i=r||s.props&&"number"===s.props.type;Ns(e,t?"change":"input",(t=>{if(t.target.composing)return;let r=e.value;n&&(r=r.trim()),i&&(r=z(r)),e._assign(r)})),n&&Ns(e,"change",(()=>{e.value=e.value.trim()})),t||(Ns(e,"compositionstart",Hs),Ns(e,"compositionend",Qs),Ns(e,"change",Qs))},mounted(e,{value:t}){e.value=null==t?"":t},beforeUpdate(e,{value:t,modifiers:{lazy:n,trim:r,number:s}},i){if(e._assign=Ws(i),e.composing)return;if(document.activeElement===e&&"range"!==e.type){if(n)return;if(r&&e.value.trim()===t)return;if((s||"number"===e.type)&&z(e.value)===t)return}const o=null==t?"":t;e.value!==o&&(e.value=o)}},Ys=["ctrl","shift","alt","meta"],Xs={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&0!==e.button,middle:e=>"button"in e&&1!==e.button,right:e=>"button"in e&&2!==e.button,exact:(e,t)=>Ys.some((n=>e[`${n}Key`]&&!t.includes(n)))},Zs=y({patchProp:(e,r,s,i,o=!1,a,c,l,u)=>{"class"===r?function(e,t,n){const r=e._vtc;r&&(t=(t?[t,...r]:[...r]).join(" ")),null==t?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}(e,i,o):"style"===r?function(e,t,n){const r=e.style,s=E(n);if(n&&!s){for(const e in n)_s(r,e,n[e]);if(t&&!E(t))for(const e in t)null==n[e]&&_s(r,e,"")}else{const i=r.display;s?t!==n&&(r.cssText=n):t&&e.removeAttribute("style"),"_vod"in e&&(r.display=i)}}(e,s,i):g(r)?m(r)||Ds(e,r,0,i,c):("."===r[0]?(r=r.slice(1),1):"^"===r[0]?(r=r.slice(1),0):function(e,t,n,r){if(r)return"innerHTML"===t||"textContent"===t||!!(t in e&&Os.test(t)&&T(n));if("spellcheck"===t||"draggable"===t||"translate"===t)return!1;if("form"===t)return!1;if("list"===t&&"INPUT"===e.tagName)return!1;if("type"===t&&"TEXTAREA"===e.tagName)return!1;if(Os.test(t)&&E(n))return!1;return t in e}(e,r,i,o))?function(e,t,r,s,i,o,a){if("innerHTML"===t||"textContent"===t)return s&&a(s,i,o),void(e[t]=null==r?"":r);if("value"===t&&"PROGRESS"!==e.tagName&&!e.tagName.includes("-")){e._value=r;const n=null==r?"":r;return e.value===n&&"OPTION"!==e.tagName||(e.value=n),void(null==r&&e.removeAttribute(t))}let c=!1;if(""===r||null==r){const s=typeof e[t];"boolean"===s?r=n(r):null==r&&"string"===s?(r="",c=!0):"number"===s&&(r=0,c=!0)}try{e[t]=r}catch(e){}c&&e.removeAttribute(t)}(e,r,i,a,c,l,u):("true-value"===r?e._trueValue=i:"false-value"===r&&(e._falseValue=i),function(e,r,s,i,o){if(i&&r.startsWith("xlink:"))null==s?e.removeAttributeNS(Ts,r.slice(6,r.length)):e.setAttributeNS(Ts,r,s);else{const i=t(r);null==s||i&&!n(s)?e.removeAttribute(r):e.setAttribute(r,i?"":s)}}(e,r,i,o))}},ws);let ei;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const ti=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let s=e.charCodeAt(r);s<128?t[n++]=s:s<2048?(t[n++]=s>>6|192,t[n++]=63&s|128):55296==(64512&s)&&r+1<e.length&&56320==(64512&e.charCodeAt(r+1))?(s=65536+((1023&s)<<10)+(1023&e.charCodeAt(++r)),t[n++]=s>>18|240,t[n++]=s>>12&63|128,t[n++]=s>>6&63|128,t[n++]=63&s|128):(t[n++]=s>>12|224,t[n++]=s>>6&63|128,t[n++]=63&s|128)}return t},ni={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let t=0;t<e.length;t+=3){const s=e[t],i=t+1<e.length,o=i?e[t+1]:0,a=t+2<e.length,c=a?e[t+2]:0,l=s>>2,u=(3&s)<<4|o>>4;let h=(15&o)<<2|c>>6,d=63&c;a||(d=64,i||(h=64)),r.push(n[l],n[u],n[h],n[d])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(ti(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):function(e){const t=[];let n=0,r=0;for(;n<e.length;){const s=e[n++];if(s<128)t[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=e[n++];t[r++]=String.fromCharCode((31&s)<<6|63&i)}else if(s>239&&s<365){const i=((7&s)<<18|(63&e[n++])<<12|(63&e[n++])<<6|63&e[n++])-65536;t[r++]=String.fromCharCode(55296+(i>>10)),t[r++]=String.fromCharCode(56320+(1023&i))}else{const i=e[n++],o=e[n++];t[r++]=String.fromCharCode((15&s)<<12|(63&i)<<6|63&o)}}return t.join("")}(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let t=0;t<e.length;){const s=n[e.charAt(t++)],i=t<e.length?n[e.charAt(t)]:0;++t;const o=t<e.length?n[e.charAt(t)]:64;++t;const a=t<e.length?n[e.charAt(t)]:64;if(++t,null==s||null==i||null==o||null==a)throw Error();const c=s<<2|i>>4;if(r.push(c),64!==o){const e=i<<4&240|o>>2;if(r.push(e),64!==a){const e=o<<6&192|a;r.push(e)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}},ri=function(e){return function(e){const t=ti(e);return ni.encodeByteArray(t,!0)}(e).replace(/\./g,"")};function si(e,t){if(!(t instanceof Object))return t;switch(t.constructor){case Date:return new Date(t.getTime());case Object:void 0===e&&(e={});break;case Array:e=[];break;default:return t}for(const n in t)t.hasOwnProperty(n)&&"__proto__"!==n&&(e[n]=si(e[n],t[n]));return e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ii{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),"function"==typeof e&&(this.promise.catch((()=>{})),1===e.length?e(t):e(t,n))}}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function oi(){return"undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:""}function ai(){return"undefined"!=typeof window&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(oi())}function ci(){try{return"[object process]"===Object.prototype.toString.call(global.process)}catch(e){return!1}}function li(){const e="object"==typeof chrome?chrome.runtime:"object"==typeof browser?browser.runtime:void 0;return"object"==typeof e&&void 0!==e.id}function ui(){return"object"==typeof navigator&&"ReactNative"===navigator.product}function hi(){const e=oi();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function di(){return"object"==typeof indexedDB}class fi extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name="FirebaseError",Object.setPrototypeOf(this,fi.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,pi.prototype.create)}}class pi{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){const n=t[0]||{},r=`${this.service}/${e}`,s=this.errors[e],i=s?function(e,t){return e.replace(gi,((e,n)=>{const r=t[n];return null!=r?String(r):`<${n}?>`}))}(s,n):"Error",o=`${this.serviceName}: ${i} (${r}).`;return new fi(r,o,n)}}const gi=/\{\$([^}]+)}/g;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mi(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function yi(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const s of n){if(!r.includes(s))return!1;const n=e[s],i=t[s];if(vi(n)&&vi(i)){if(!yi(n,i))return!1}else if(n!==i)return!1}for(const e of r)if(!n.includes(e))return!1;return!0}function vi(e){return null!==e&&"object"==typeof e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wi(e){const t=[];for(const[n,r]of Object.entries(e))Array.isArray(r)?r.forEach((e=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(e))})):t.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}function bi(e){const t={};return e.replace(/^\?/,"").split("&").forEach((e=>{if(e){const[n,r]=e.split("=");t[decodeURIComponent(n)]=decodeURIComponent(r)}})),t}function _i(e){const t=e.indexOf("?");if(!t)return"";const n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}function Ii(e,t){const n=new ki(e,t);return n.subscribe.bind(n)}class ki{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then((()=>{e(this)})).catch((e=>{this.error(e)}))}next(e){this.forEachObserver((t=>{t.next(e)}))}error(e){this.forEachObserver((t=>{t.error(e)})),this.close(e)}complete(){this.forEachObserver((e=>{e.complete()})),this.close()}subscribe(e,t,n){let r;if(void 0===e&&void 0===t&&void 0===n)throw new Error("Missing Observer.");r=function(e,t){if("object"!=typeof e||null===e)return!1;for(const n of t)if(n in e&&"function"==typeof e[n])return!0;return!1}(e,["next","error","complete"])?e:{next:e,error:t,complete:n},void 0===r.next&&(r.next=Ti),void 0===r.error&&(r.error=Ti),void 0===r.complete&&(r.complete=Ti);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then((()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch(e){}})),this.observers.push(r),s}unsubscribeOne(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then((()=>{if(void 0!==this.observers&&void 0!==this.observers[e])try{t(this.observers[e])}catch(e){"undefined"!=typeof console&&console.error&&console.error(e)}}))}close(e){this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then((()=>{this.observers=void 0,this.onNoObservers=void 0})))}}function Ti(){}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ei(e){return e&&e._delegate?e._delegate:e}class Si{constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class xi{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const e=new ii;if(this.instancesDeferred.set(t,e),this.isInitialized(t)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:t});n&&e.resolve(n)}catch(e){}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const n=this.normalizeInstanceIdentifier(null==e?void 0:e.identifier),r=null!==(t=null==e?void 0:e.optional)&&void 0!==t&&t;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(r)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(e){if(r)return null;throw e}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,this.shouldAutoInitialize()){if(function(e){return"EAGER"===e.instantiationMode}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e))try{this.getOrInitializeService({instanceIdentifier:"[DEFAULT]"})}catch(e){}for(const[e,t]of this.instancesDeferred.entries()){const n=this.normalizeInstanceIdentifier(e);try{const e=this.getOrInitializeService({instanceIdentifier:n});t.resolve(e)}catch(e){}}}}clearInstance(e="[DEFAULT]"){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter((e=>"INTERNAL"in e)).map((e=>e.INTERNAL.delete())),...e.filter((e=>"_delete"in e)).map((e=>e._delete()))])}isComponentSet(){return null!=this.component}isInitialized(e="[DEFAULT]"){return this.instances.has(e)}getOptions(e="[DEFAULT]"){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:n,options:t});for(const[e,t]of this.instancesDeferred.entries()){n===this.normalizeInstanceIdentifier(e)&&t.resolve(r)}return r}onInit(e,t){var n;const r=this.normalizeInstanceIdentifier(t),s=null!==(n=this.onInitCallbacks.get(r))&&void 0!==n?n:new Set;s.add(e),this.onInitCallbacks.set(r,s);const i=this.instances.get(r);return i&&e(i,r),()=>{s.delete(e)}}invokeOnInitCallbacks(e,t){const n=this.onInitCallbacks.get(t);if(n)for(const r of n)try{r(e,t)}catch(e){}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:(r=e,"[DEFAULT]"===r?void 0:r),options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch(e){}var r;return n||null}normalizeInstanceIdentifier(e="[DEFAULT]"){return this.component?this.component.multipleInstances?e:"[DEFAULT]":e}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}class Ai{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new xi(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ci=[];var Ni,Di;(Di=Ni||(Ni={}))[Di.DEBUG=0]="DEBUG",Di[Di.VERBOSE=1]="VERBOSE",Di[Di.INFO=2]="INFO",Di[Di.WARN=3]="WARN",Di[Di.ERROR=4]="ERROR",Di[Di.SILENT=5]="SILENT";const Ri={debug:Ni.DEBUG,verbose:Ni.VERBOSE,info:Ni.INFO,warn:Ni.WARN,error:Ni.ERROR,silent:Ni.SILENT},Oi=Ni.INFO,Pi={[Ni.DEBUG]:"log",[Ni.VERBOSE]:"log",[Ni.INFO]:"info",[Ni.WARN]:"warn",[Ni.ERROR]:"error"},Li=(e,t,...n)=>{if(t<e.logLevel)return;const r=(new Date).toISOString(),s=Pi[t];if(!s)throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`);console[s](`[${r}]  ${e.name}:`,...n)};class Mi{constructor(e){this.name=e,this._logLevel=Oi,this._logHandler=Li,this._userLogHandler=null,Ci.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Ni))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"==typeof e?Ri[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!=typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Ni.DEBUG,...e),this._logHandler(this,Ni.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Ni.VERBOSE,...e),this._logHandler(this,Ni.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Ni.INFO,...e),this._logHandler(this,Ni.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Ni.WARN,...e),this._logHandler(this,Ni.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Ni.ERROR,...e),this._logHandler(this,Ni.ERROR,...e)}}let Fi,Vi;const Ui=new WeakMap,Bi=new WeakMap,ji=new WeakMap,qi=new WeakMap,$i=new WeakMap;let zi={get(e,t,n){if(e instanceof IDBTransaction){if("done"===t)return Bi.get(e);if("objectStoreNames"===t)return e.objectStoreNames||ji.get(e);if("store"===t)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Wi(e[t])},set:(e,t,n)=>(e[t]=n,!0),has:(e,t)=>e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e};function Gi(e){return e!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(Vi||(Vi=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(e)?function(...t){return e.apply(Hi(this),t),Wi(Ui.get(this))}:function(...t){return Wi(e.apply(Hi(this),t))}:function(t,...n){const r=e.call(Hi(this),t,...n);return ji.set(r,t.sort?t.sort():[t]),Wi(r)}}function Ki(e){return"function"==typeof e?Gi(e):(e instanceof IDBTransaction&&function(e){if(Bi.has(e))return;const t=new Promise(((t,n)=>{const r=()=>{e.removeEventListener("complete",s),e.removeEventListener("error",i),e.removeEventListener("abort",i)},s=()=>{t(),r()},i=()=>{n(e.error||new DOMException("AbortError","AbortError")),r()};e.addEventListener("complete",s),e.addEventListener("error",i),e.addEventListener("abort",i)}));Bi.set(e,t)}(e),t=e,(Fi||(Fi=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])).some((e=>t instanceof e))?new Proxy(e,zi):e);var t}function Wi(e){if(e instanceof IDBRequest)return function(e){const t=new Promise(((t,n)=>{const r=()=>{e.removeEventListener("success",s),e.removeEventListener("error",i)},s=()=>{t(Wi(e.result)),r()},i=()=>{n(e.error),r()};e.addEventListener("success",s),e.addEventListener("error",i)}));return t.then((t=>{t instanceof IDBCursor&&Ui.set(t,e)})).catch((()=>{})),$i.set(t,e),t}(e);if(qi.has(e))return qi.get(e);const t=Ki(e);return t!==e&&(qi.set(e,t),$i.set(t,e)),t}const Hi=e=>$i.get(e);const Qi=["get","getKey","getAll","getAllKeys","count"],Ji=["put","add","delete","clear"],Yi=new Map;function Xi(e,t){if(!(e instanceof IDBDatabase)||t in e||"string"!=typeof t)return;if(Yi.get(t))return Yi.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,s=Ji.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!s&&!Qi.includes(n))return;const i=async function(e,...t){const i=this.transaction(e,s?"readwrite":"readonly");let o=i.store;return r&&(o=o.index(t.shift())),(await Promise.all([o[n](...t),s&&i.done]))[0]};return Yi.set(t,i),i}zi=(e=>({...e,get:(t,n,r)=>Xi(t,n)||e.get(t,n,r),has:(t,n)=>!!Xi(t,n)||e.has(t,n)}))(zi);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Zi{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map((e=>{if(function(e){const t=e.getComponent();return"VERSION"===(null==t?void 0:t.type)}(e)){const t=e.getImmediate();return`${t.library}/${t.version}`}return null})).filter((e=>e)).join(" ")}}const eo="@firebase/app",to=new Mi("@firebase/app"),no={[eo]:"fire-core","@firebase/app-compat":"fire-core-compat","@firebase/analytics":"fire-analytics","@firebase/analytics-compat":"fire-analytics-compat","@firebase/app-check":"fire-app-check","@firebase/app-check-compat":"fire-app-check-compat","@firebase/auth":"fire-auth","@firebase/auth-compat":"fire-auth-compat","@firebase/database":"fire-rtdb","@firebase/database-compat":"fire-rtdb-compat","@firebase/functions":"fire-fn","@firebase/functions-compat":"fire-fn-compat","@firebase/installations":"fire-iid","@firebase/installations-compat":"fire-iid-compat","@firebase/messaging":"fire-fcm","@firebase/messaging-compat":"fire-fcm-compat","@firebase/performance":"fire-perf","@firebase/performance-compat":"fire-perf-compat","@firebase/remote-config":"fire-rc","@firebase/remote-config-compat":"fire-rc-compat","@firebase/storage":"fire-gcs","@firebase/storage-compat":"fire-gcs-compat","@firebase/firestore":"fire-fst","@firebase/firestore-compat":"fire-fst-compat","fire-js":"fire-js",firebase:"fire-js-all"},ro=new Map,so=new Map;function io(e,t){try{e.container.addComponent(t)}catch(n){to.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function oo(e,t){e.container.addOrOverwriteComponent(t)}function ao(e){const t=e.name;if(so.has(t))return to.debug(`There were multiple attempts to register component ${t}.`),!1;so.set(t,e);for(const t of ro.values())io(t,e);return!0}function co(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const lo=new pi("app","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","storage-open":"Error thrown when opening storage. Original error: {$originalErrorMessage}.","storage-get":"Error thrown when reading from storage. Original error: {$originalErrorMessage}.","storage-set":"Error thrown when writing to storage. Original error: {$originalErrorMessage}.","storage-delete":"Error thrown when deleting from storage. Original error: {$originalErrorMessage}."});
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class uo{constructor(e,t,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new Si("app",(()=>this),"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw lo.create("app-deleted",{appName:this._name})}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ho(e,t={}){if("object"!=typeof t){t={name:t}}const n=Object.assign({name:"[DEFAULT]",automaticDataCollectionEnabled:!1},t),r=n.name;if("string"!=typeof r||!r)throw lo.create("bad-app-name",{appName:String(r)});const s=ro.get(r);if(s){if(yi(e,s.options)&&yi(n,s.config))return s;throw lo.create("duplicate-app",{appName:r})}const i=new Ai(r);for(const e of so.values())i.addComponent(e);const o=new uo(e,n,i);return ro.set(r,o),o}async function fo(e){const t=e.name;ro.has(t)&&(ro.delete(t),await Promise.all(e.container.getProviders().map((e=>e.delete()))),e.isDeleted=!0)}function po(e,t,n){var r;let s=null!==(r=no[e])&&void 0!==r?r:e;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=t.match(/\s|\//);if(i||o){const e=[`Unable to register library "${s}" with version "${t}":`];return i&&e.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&e.push("and"),o&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),void to.warn(e.join(" "))}ao(new Si(`${s}-version`,(()=>({library:s,version:t})),"VERSION"))}function go(e,t){if(null!==e&&"function"!=typeof e)throw lo.create("invalid-log-argument");!function(e,t){for(const n of Ci){let r=null;t&&t.level&&(r=Ri[t.level]),n.userLogHandler=null===e?null:(t,n,...s)=>{const i=s.map((e=>{if(null==e)return null;if("string"==typeof e)return e;if("number"==typeof e||"boolean"==typeof e)return e.toString();if(e instanceof Error)return e.message;try{return JSON.stringify(e)}catch(e){return null}})).filter((e=>e)).join(" ");n>=(null!=r?r:t.logLevel)&&e({level:Ni[n].toLowerCase(),message:i,args:s,type:t.name})}}}(e,t)}function mo(e){var t;t=e,Ci.forEach((e=>{e.setLogLevel(t)}))}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yo="firebase-heartbeat-store";let vo=null;function wo(){return vo||(vo=function(e,t,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(e,t),a=Wi(o);return r&&o.addEventListener("upgradeneeded",(e=>{r(Wi(o.result),e.oldVersion,e.newVersion,Wi(o.transaction))})),n&&o.addEventListener("blocked",(()=>n())),a.then((e=>{i&&e.addEventListener("close",(()=>i())),s&&e.addEventListener("versionchange",(()=>s()))})).catch((()=>{})),a}("firebase-heartbeat-database",1,{upgrade:(e,t)=>{if(0===t)e.createObjectStore(yo)}}).catch((e=>{throw lo.create("storage-open",{originalErrorMessage:e.message})}))),vo}async function bo(e,t){var n;try{const n=(await wo()).transaction(yo,"readwrite"),r=n.objectStore(yo);return await r.put(t,_o(e)),n.done}catch(e){throw lo.create("storage-set",{originalErrorMessage:null===(n=e)||void 0===n?void 0:n.message})}}function _o(e){return`${e.name}!${e.options.appId}`}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Io{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new To(t),this._heartbeatsCachePromise=this._storage.read().then((e=>(this._heartbeatsCache=e,e)))}async triggerHeartbeat(){const e=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),t=ko();if(null===this._heartbeatsCache&&(this._heartbeatsCache=await this._heartbeatsCachePromise),this._heartbeatsCache.lastSentHeartbeatDate!==t&&!this._heartbeatsCache.heartbeats.some((e=>e.date===t)))return this._heartbeatsCache.heartbeats.push({date:t,agent:e}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter((e=>{const t=new Date(e.date).valueOf();return Date.now()-t<=2592e6})),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null===this._heartbeatsCache||0===this._heartbeatsCache.heartbeats.length)return"";const e=ko(),{heartbeatsToSend:t,unsentEntries:n}=function(e,t=1024){const n=[];let r=e.slice();for(const s of e){const e=n.find((e=>e.agent===s.agent));if(e){if(e.dates.push(s.date),Eo(n)>t){e.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),Eo(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}(this._heartbeatsCache.heartbeats),r=ri(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function ko(){return(new Date).toISOString().substring(0,10)}class To{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!di()&&new Promise(((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var e;t((null===(e=s.error)||void 0===e?void 0:e.message)||"")}}catch(e){t(e)}})).then((()=>!0)).catch((()=>!1))}async read(){if(await this._canUseIndexedDBPromise){return await async function(e){var t;try{return(await wo()).transaction(yo).objectStore(yo).get(_o(e))}catch(e){throw lo.create("storage-get",{originalErrorMessage:null===(t=e)||void 0===t?void 0:t.message})}}(this.app)||{heartbeats:[]}}return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const n=await this.read();return bo(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:e.heartbeats})}}async add(e){var t;if(await this._canUseIndexedDBPromise){const n=await this.read();return bo(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...e.heartbeats]})}}}function Eo(e){return ri(JSON.stringify({version:2,heartbeats:e})).length}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var So;So="",ao(new Si("platform-logger",(e=>new Zi(e)),"PRIVATE")),ao(new Si("heartbeat",(e=>new Io(e)),"PRIVATE")),po(eo,"0.7.27",So),po(eo,"0.7.27","esm2017"),po("fire-js","");var xo=Object.freeze(Object.defineProperty({__proto__:null,SDK_VERSION:"9.8.4",_DEFAULT_ENTRY_NAME:"[DEFAULT]",_addComponent:io,_addOrOverwriteComponent:oo,_apps:ro,_clearComponents:function(){so.clear()},_components:so,_getProvider:co,_registerComponent:ao,_removeServiceInstance:function(e,t,n="[DEFAULT]"){co(e,t).clearInstance(n)},deleteApp:fo,getApp:function(e="[DEFAULT]"){const t=ro.get(e);if(!t)throw lo.create("no-app",{appName:e});return t},getApps:function(){return Array.from(ro.values())},initializeApp:ho,onLog:go,registerVersion:po,setLogLevel:mo,FirebaseError:fi},Symbol.toStringTag,{value:"Module"}));
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ao{constructor(e,t){this._delegate=e,this.firebase=t,io(e,new Si("app-compat",(()=>this),"PUBLIC")),this.container=e.container}get automaticDataCollectionEnabled(){return this._delegate.automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this._delegate.automaticDataCollectionEnabled=e}get name(){return this._delegate.name}get options(){return this._delegate.options}delete(){return new Promise((e=>{this._delegate.checkDestroyed(),e()})).then((()=>(this.firebase.INTERNAL.removeApp(this.name),fo(this._delegate))))}_getService(e,t="[DEFAULT]"){var n;this._delegate.checkDestroyed();const r=this._delegate.container.getProvider(e);return r.isInitialized()||"EXPLICIT"!==(null===(n=r.getComponent())||void 0===n?void 0:n.instantiationMode)||r.initialize(),r.getImmediate({identifier:t})}_removeServiceInstance(e,t="[DEFAULT]"){this._delegate.container.getProvider(e).clearInstance(t)}_addComponent(e){io(this._delegate,e)}_addOrOverwriteComponent(e){oo(this._delegate,e)}toJSON(){return{name:this.name,automaticDataCollectionEnabled:this.automaticDataCollectionEnabled,options:this.options}}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Co=new pi("app-compat","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance."});const No=
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function e(){const t=
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function(e){const t={},n={__esModule:!0,initializeApp:function(r,s={}){const i=ho(r,s);if(mi(t,i.name))return t[i.name];const o=new e(i,n);return t[i.name]=o,o},app:r,registerVersion:po,setLogLevel:mo,onLog:go,apps:null,SDK_VERSION:"9.8.4",INTERNAL:{registerComponent:function(t){const s=t.name,i=s.replace("-compat","");if(ao(t)&&"PUBLIC"===t.type){const o=(e=r())=>{if("function"!=typeof e[i])throw Co.create("invalid-app-argument",{appName:s});return e[i]()};void 0!==t.serviceProps&&si(o,t.serviceProps),n[i]=o,e.prototype[i]=function(...e){return this._getService.bind(this,s).apply(this,t.multipleInstances?e:[])}}return"PUBLIC"===t.type?n[i]:null},removeApp:function(e){delete t[e]},useAsService:function(e,t){return"serverAuth"===t?null:t},modularAPIs:xo}};function r(e){if(!mi(t,e=e||"[DEFAULT]"))throw Co.create("no-app",{appName:e});return t[e]}return n.default=n,Object.defineProperty(n,"apps",{get:function(){return Object.keys(t).map((e=>t[e]))}}),r.App=e,n}(Ao);return t.INTERNAL=Object.assign(Object.assign({},t.INTERNAL),{createFirebaseNamespace:e,extendNamespace:function(e){si(t,e)},createSubscribe:Ii,ErrorFactory:pi,deepExtend:si}),t}(),Do=new Mi("@firebase/app-compat");
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
if("object"==typeof self&&self.self===self&&void 0!==self.firebase){Do.warn("\n    Warning: Firebase is already defined in the global scope. Please make sure\n    Firebase library is only loaded once.\n  ");const e=self.firebase.SDK_VERSION;e&&e.indexOf("LITE")>=0&&Do.warn("\n    Warning: You are trying to load Firebase while using Firebase Performance standalone script.\n    You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.\n    ")}const Ro=No;!
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function(e){po("@firebase/app-compat","0.1.28",e)}();function Oo(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var s=0;for(r=Object.getOwnPropertySymbols(e);s<r.length;s++)t.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(e,r[s])&&(n[r[s]]=e[r[s]])}return n}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Ro.registerVersion("firebase","9.8.4","app-compat");const Po="facebook.com",Lo="github.com",Mo="google.com",Fo="password",Vo="twitter.com",Uo="EMAIL_SIGNIN",Bo="PASSWORD_RESET",jo="RECOVER_EMAIL",qo="REVERT_SECOND_FACTOR_ADDITION",$o="VERIFY_AND_CHANGE_EMAIL",zo="VERIFY_EMAIL";function Go(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Ko=
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function(){return{"admin-restricted-operation":"This operation is restricted to administrators only.","argument-error":"","app-not-authorized":"This app, identified by the domain where it's hosted, is not authorized to use Firebase Authentication with the provided API key. Review your key configuration in the Google API console.","app-not-installed":"The requested mobile application corresponding to the identifier (Android package name or iOS bundle ID) provided is not installed on this device.","captcha-check-failed":"The reCAPTCHA response token provided is either invalid, expired, already used or the domain associated with it does not match the list of whitelisted domains.","code-expired":"The SMS code has expired. Please re-send the verification code to try again.","cordova-not-ready":"Cordova framework is not ready.","cors-unsupported":"This browser is not supported.","credential-already-in-use":"This credential is already associated with a different user account.","custom-token-mismatch":"The custom token corresponds to a different audience.","requires-recent-login":"This operation is sensitive and requires recent authentication. Log in again before retrying this request.","dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK.","dynamic-link-not-activated":"Please activate Dynamic Links in the Firebase Console and agree to the terms and conditions.","email-change-needs-verification":"Multi-factor users must always have a verified email.","email-already-in-use":"The email address is already in use by another account.","emulator-config-failed":'Auth instance has already been used to make a network call. Auth can no longer be configured to use the emulator. Try calling "connectAuthEmulator()" sooner.',"expired-action-code":"The action code has expired.","cancelled-popup-request":"This operation has been cancelled due to another conflicting popup being opened.","internal-error":"An internal AuthError has occurred.","invalid-app-credential":"The phone verification request contains an invalid application verifier. The reCAPTCHA token response is either invalid or expired.","invalid-app-id":"The mobile app identifier is not registed for the current project.","invalid-user-token":"This user's credential isn't valid for this project. This can happen if the user's token has been tampered with, or if the user isn't for the project associated with this API key.","invalid-auth-event":"An internal AuthError has occurred.","invalid-verification-code":"The SMS verification code used to create the phone auth credential is invalid. Please resend the verification code sms and be sure to use the verification code provided by the user.","invalid-continue-uri":"The continue URL provided in the request is invalid.","invalid-cordova-configuration":"The following Cordova plugins must be installed to enable OAuth sign-in: cordova-plugin-buildinfo, cordova-universal-links-plugin, cordova-plugin-browsertab, cordova-plugin-inappbrowser and cordova-plugin-customurlscheme.","invalid-custom-token":"The custom token format is incorrect. Please check the documentation.","invalid-dynamic-link-domain":"The provided dynamic link domain is not configured or authorized for the current project.","invalid-email":"The email address is badly formatted.","invalid-emulator-scheme":"Emulator URL must start with a valid scheme (http:// or https://).","invalid-api-key":"Your API key is invalid, please check you have copied it correctly.","invalid-cert-hash":"The SHA-1 certificate hash provided is invalid.","invalid-credential":"The supplied auth credential is malformed or has expired.","invalid-message-payload":"The email template corresponding to this action contains invalid characters in its message. Please fix by going to the Auth email templates section in the Firebase Console.","invalid-multi-factor-session":"The request does not contain a valid proof of first factor successful sign-in.","invalid-oauth-provider":"EmailAuthProvider is not supported for this operation. This operation only supports OAuth providers.","invalid-oauth-client-id":"The OAuth client ID provided is either invalid or does not match the specified API key.","unauthorized-domain":"This domain is not authorized for OAuth operations for your Firebase project. Edit the list of authorized domains from the Firebase console.","invalid-action-code":"The action code is invalid. This can happen if the code is malformed, expired, or has already been used.","wrong-password":"The password is invalid or the user does not have a password.","invalid-persistence-type":"The specified persistence type is invalid. It can only be local, session or none.","invalid-phone-number":"The format of the phone number provided is incorrect. Please enter the phone number in a format that can be parsed into E.164 format. E.164 phone numbers are written in the format [+][country code][subscriber number including area code].","invalid-provider-id":"The specified provider ID is invalid.","invalid-recipient-email":"The email corresponding to this action failed to send as the provided recipient email address is invalid.","invalid-sender":"The email template corresponding to this action contains an invalid sender email or name. Please fix by going to the Auth email templates section in the Firebase Console.","invalid-verification-id":"The verification ID used to create the phone auth credential is invalid.","invalid-tenant-id":"The Auth instance's tenant ID is invalid.","login-blocked":"Login blocked by user-provided method: {$originalMessage}","missing-android-pkg-name":"An Android Package Name must be provided if the Android App is required to be installed.","auth-domain-config-required":"Be sure to include authDomain when calling firebase.initializeApp(), by following the instructions in the Firebase console.","missing-app-credential":"The phone verification request is missing an application verifier assertion. A reCAPTCHA response token needs to be provided.","missing-verification-code":"The phone auth credential was created with an empty SMS verification code.","missing-continue-uri":"A continue URL must be provided in the request.","missing-iframe-start":"An internal AuthError has occurred.","missing-ios-bundle-id":"An iOS Bundle ID must be provided if an App Store ID is provided.","missing-or-invalid-nonce":"The request does not contain a valid nonce. This can occur if the SHA-256 hash of the provided raw nonce does not match the hashed nonce in the ID token payload.","missing-multi-factor-info":"No second factor identifier is provided.","missing-multi-factor-session":"The request is missing proof of first factor successful sign-in.","missing-phone-number":"To send verification codes, provide a phone number for the recipient.","missing-verification-id":"The phone auth credential was created with an empty verification ID.","app-deleted":"This instance of FirebaseApp has been deleted.","multi-factor-info-not-found":"The user does not have a second factor matching the identifier provided.","multi-factor-auth-required":"Proof of ownership of a second factor is required to complete sign-in.","account-exists-with-different-credential":"An account already exists with the same email address but different sign-in credentials. Sign in using a provider associated with this email address.","network-request-failed":"A network AuthError (such as timeout, interrupted connection or unreachable host) has occurred.","no-auth-event":"An internal AuthError has occurred.","no-such-provider":"User was not linked to an account with the given provider.","null-user":"A null user object was provided as the argument for an operation which requires a non-null user object.","operation-not-allowed":"The given sign-in provider is disabled for this Firebase project. Enable it in the Firebase console, under the sign-in method tab of the Auth section.","operation-not-supported-in-this-environment":'This operation is not supported in the environment this application is running on. "location.protocol" must be http, https or chrome-extension and web storage must be enabled.',"popup-blocked":"Unable to establish a connection with the popup. It may have been blocked by the browser.","popup-closed-by-user":"The popup has been closed by the user before finalizing the operation.","provider-already-linked":"User can only be linked to one identity for the given provider.","quota-exceeded":"The project's quota for this operation has been exceeded.","redirect-cancelled-by-user":"The redirect operation has been cancelled by the user before finalizing.","redirect-operation-pending":"A redirect sign-in operation is already pending.","rejected-credential":"The request contains malformed or mismatching credentials.","second-factor-already-in-use":"The second factor is already enrolled on this account.","maximum-second-factor-count-exceeded":"The maximum allowed number of second factors on a user has been exceeded.","tenant-id-mismatch":"The provided tenant ID does not match the Auth instance's tenant ID",timeout:"The operation has timed out.","user-token-expired":"The user's credential is no longer valid. The user must sign in again.","too-many-requests":"We have blocked all requests from this device due to unusual activity. Try again later.","unauthorized-continue-uri":"The domain of the continue URL is not whitelisted.  Please whitelist the domain in the Firebase console.","unsupported-first-factor":"Enrolling a second factor or signing in with a multi-factor account requires sign-in with a supported first factor.","unsupported-persistence-type":"The current environment does not support the specified persistence type.","unsupported-tenant-operation":"This operation is not supported in a multi-tenant context.","unverified-email":"The operation requires a verified email.","user-cancelled":"The user did not grant your application the permissions it requested.","user-not-found":"There is no user record corresponding to this identifier. The user may have been deleted.","user-disabled":"The user account has been disabled by an administrator.","user-mismatch":"The supplied credentials do not correspond to the previously signed in user.","user-signed-out":"","weak-password":"The password must be 6 characters long or more.","web-storage-unsupported":"This browser is not supported or 3rd party cookies and data may be disabled.","already-initialized":"initializeAuth() has already been called with different options. To avoid this error, call initializeAuth() with the same options as when it was originally called, or call getAuth() to return the already initialized instance."}},Wo=Go,Ho=new pi("auth","Firebase",{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}),Qo=new Mi("@firebase/auth");function Jo(e,...t){Qo.logLevel<=Ni.ERROR&&Qo.error(`Auth (9.8.4): ${e}`,...t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yo(e,...t){throw ta(e,...t)}function Xo(e,...t){return ta(e,...t)}function Zo(e,t,n){const r=Object.assign(Object.assign({},Wo()),{[t]:n});return new pi("auth","Firebase",r).create(t,{appName:e.name})}function ea(e,t,n){if(!(t instanceof n))throw n.name!==t.constructor.name&&Yo(e,"argument-error"),Zo(e,"argument-error",`Type of ${t.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function ta(e,...t){if("string"!=typeof e){const n=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=e.name),e._errorFactory.create(n,...r)}return Ho.create(e,...t)}function na(e,t,...n){if(!e)throw ta(t,...n)}function ra(e){const t="INTERNAL ASSERTION FAILED: "+e;throw Jo(t),new Error(t)}function sa(e,t){e||ra(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ia=new Map;function oa(e){sa(e instanceof Function,"Expected a class definition");let t=ia.get(e);return t?(sa(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,ia.set(e,t),t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function aa(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.href)||""}function ca(){return"http:"===la()||"https:"===la()}function la(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.protocol)||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ua{constructor(e,t){this.shortDelay=e,this.longDelay=t,sa(t>e,"Short delay should be less than long delay!"),this.isMobile=ai()||ui()}get(){return"undefined"!=typeof navigator&&navigator&&"onLine"in navigator&&"boolean"==typeof navigator.onLine&&(ca()||li()||"connection"in navigator)&&!navigator.onLine?Math.min(5e3,this.shortDelay):this.isMobile?this.longDelay:this.shortDelay}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ha(e,t){sa(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class da{static initialize(e,t,n){this.fetchImpl=e,t&&(this.headersImpl=t),n&&(this.responseImpl=n)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!=typeof self&&"fetch"in self?self.fetch:void ra("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!=typeof self&&"Headers"in self?self.Headers:void ra("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!=typeof self&&"Response"in self?self.Response:void ra("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fa={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"},pa=new ua(3e4,6e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ga(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function ma(e,t,n,r,s={}){return ya(e,s,(async()=>{let s={},i={};r&&("GET"===t?i=r:s={body:JSON.stringify(r)});const o=wi(Object.assign({key:e.config.apiKey},i)).slice(1),a=await e._getAdditionalHeaders();return a["Content-Type"]="application/json",e.languageCode&&(a["X-Firebase-Locale"]=e.languageCode),da.fetch()(wa(e,e.config.apiHost,n,o),Object.assign({method:t,headers:a,referrerPolicy:"no-referrer"},s))}))}async function ya(e,t,n){e._canInitEmulator=!1;const r=Object.assign(Object.assign({},fa),t);try{const t=new ba(e),s=await Promise.race([n(),t.promise]);t.clearNetworkTimeout();const i=await s.json();if("needConfirmation"in i)throw _a(e,"account-exists-with-different-credential",i);if(s.ok&&!("errorMessage"in i))return i;{const t=s.ok?i.errorMessage:i.error.message,[n,o]=t.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===n)throw _a(e,"credential-already-in-use",i);if("EMAIL_EXISTS"===n)throw _a(e,"email-already-in-use",i);if("USER_DISABLED"===n)throw _a(e,"user-disabled",i);const a=r[n]||n.toLowerCase().replace(/[_\s]+/g,"-");if(o)throw Zo(e,a,o);Yo(e,a)}}catch(t){if(t instanceof fi)throw t;Yo(e,"network-request-failed")}}async function va(e,t,n,r,s={}){const i=await ma(e,t,n,r,s);return"mfaPendingCredential"in i&&Yo(e,"multi-factor-auth-required",{_serverResponse:i}),i}function wa(e,t,n,r){const s=`${t}${n}?${r}`;return e.config.emulator?ha(e.config,s):`${e.config.apiScheme}://${s}`}class ba{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise(((e,t)=>{this.timer=setTimeout((()=>t(Xo(this.auth,"network-request-failed"))),pa.get())}))}clearNetworkTimeout(){clearTimeout(this.timer)}}function _a(e,t,n){const r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=Xo(e,t,r);return s.customData._tokenResponse=n,s}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Ia(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch(e){}}function ka(e){return 1e3*Number(e)}function Ta(e){var t;const[n,r,s]=e.split(".");if(void 0===n||void 0===r||void 0===s)return Jo("JWT malformed, contained fewer than 3 sections"),null;try{const e=function(e){try{return ni.decodeString(e,!0)}catch(e){console.error("base64Decode failed: ",e)}return null}(r);return e?JSON.parse(e):(Jo("Failed to decode base64 JWT payload"),null)}catch(e){return Jo("Caught error parsing JWT payload as JSON",null===(t=e)||void 0===t?void 0:t.toString()),null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Ea(e,t,n=!1){if(n)return t;try{return await t}catch(t){throw t instanceof fi&&function({code:e}){return"auth/user-disabled"===e||"auth/user-token-expired"===e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t)&&e.auth.currentUser===e&&await e.auth.signOut(),t}}class Sa{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const e=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),e}{this.errorBackoff=3e4;const e=(null!==(t=this.user.stsTokenManager.expirationTime)&&void 0!==t?t:0)-Date.now()-3e5;return Math.max(0,e)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout((async()=>{await this.iteration()}),t)}async iteration(){var e;try{await this.user.getIdToken(!0)}catch(t){return void("auth/network-request-failed"===(null===(e=t)||void 0===e?void 0:e.code)&&this.schedule(!0))}this.schedule()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xa{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ia(this.lastLoginAt),this.creationTime=Ia(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Aa(e){var t;const n=e.auth,r=await e.getIdToken(),s=await Ea(e,async function(e,t){return ma(e,"POST","/v1/accounts:lookup",t)}(n,{idToken:r}));na(null==s?void 0:s.users.length,n,"internal-error");const i=s.users[0];e._notifyReloadListener(i);const o=(null===(t=i.providerUserInfo)||void 0===t?void 0:t.length)?i.providerUserInfo.map((e=>{var{providerId:t}=e,n=Oo(e,["providerId"]);return{providerId:t,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}})):[];const a=(c=e.providerData,l=o,[...c.filter((e=>!l.some((t=>t.providerId===e.providerId)))),...l]);var c,l;const u=e.isAnonymous,h=!(e.email&&i.passwordHash||(null==a?void 0:a.length)),d=!!u&&h,f={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new xa(i.createdAt,i.lastLoginAt),isAnonymous:d};Object.assign(e,f)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ca{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){na(e.idToken,"internal-error"),na(void 0!==e.idToken,"internal-error"),na(void 0!==e.refreshToken,"internal-error");const t="expiresIn"in e&&void 0!==e.expiresIn?Number(e.expiresIn):function(e){const t=Ta(e);return na(t,"internal-error"),na(void 0!==t.exp,"internal-error"),na(void 0!==t.iat,"internal-error"),Number(t.exp)-Number(t.iat)}(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}async getToken(e,t=!1){return na(!this.accessToken||this.refreshToken,e,"user-token-expired"),t||!this.accessToken||this.isExpired?this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null:this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:n,refreshToken:r,expiresIn:s}=await
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function(e,t){const n=await ya(e,{},(async()=>{const n=wi({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:r,apiKey:s}=e.config,i=wa(e,r,"/v1/token",`key=${s}`),o=await e._getAdditionalHeaders();return o["Content-Type"]="application/x-www-form-urlencoded",da.fetch()(i,{method:"POST",headers:o,body:n})}));return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}(e,t);this.updateTokensAndExpiration(n,r,Number(s))}updateTokensAndExpiration(e,t,n){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+1e3*n}static fromJSON(e,t){const{refreshToken:n,accessToken:r,expirationTime:s}=t,i=new Ca;return n&&(na("string"==typeof n,"internal-error",{appName:e}),i.refreshToken=n),r&&(na("string"==typeof r,"internal-error",{appName:e}),i.accessToken=r),s&&(na("number"==typeof s,"internal-error",{appName:e}),i.expirationTime=s),i}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Ca,this.toJSON())}_performRefresh(){return ra("not implemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Na(e,t){na("string"==typeof e||void 0===e,"internal-error",{appName:t})}class Da{constructor(e){var{uid:t,auth:n,stsTokenManager:r}=e,s=Oo(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Sa(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new xa(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const t=await Ea(this,this.stsTokenManager.getToken(this.auth,e));return na(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return async function(e,t=!1){const n=Ei(e),r=await n.getIdToken(t),s=Ta(r);na(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i="object"==typeof s.firebase?s.firebase:void 0,o=null==i?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:Ia(ka(s.auth_time)),issuedAtTime:Ia(ka(s.iat)),expirationTime:Ia(ka(s.exp)),signInProvider:o||null,signInSecondFactor:(null==i?void 0:i.sign_in_second_factor)||null}}(this,e)}reload(){return async function(e){const t=Ei(e);await Aa(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}(this)}_assign(e){this!==e&&(na(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map((e=>Object.assign({},e))),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new Da(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){na(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let n=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),n=!0),t&&await Aa(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Ea(this,async function(e,t){return ma(e,"POST","/v1/accounts:delete",t)}(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map((e=>Object.assign({},e))),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var n,r,s,i,o,a,c,l;const u=null!==(n=t.displayName)&&void 0!==n?n:void 0,h=null!==(r=t.email)&&void 0!==r?r:void 0,d=null!==(s=t.phoneNumber)&&void 0!==s?s:void 0,f=null!==(i=t.photoURL)&&void 0!==i?i:void 0,p=null!==(o=t.tenantId)&&void 0!==o?o:void 0,g=null!==(a=t._redirectEventId)&&void 0!==a?a:void 0,m=null!==(c=t.createdAt)&&void 0!==c?c:void 0,y=null!==(l=t.lastLoginAt)&&void 0!==l?l:void 0,{uid:v,emailVerified:w,isAnonymous:b,providerData:_,stsTokenManager:I}=t;na(v&&I,e,"internal-error");const k=Ca.fromJSON(this.name,I);na("string"==typeof v,e,"internal-error"),Na(u,e.name),Na(h,e.name),na("boolean"==typeof w,e,"internal-error"),na("boolean"==typeof b,e,"internal-error"),Na(d,e.name),Na(f,e.name),Na(p,e.name),Na(g,e.name),Na(m,e.name),Na(y,e.name);const T=new Da({uid:v,auth:e,email:h,emailVerified:w,displayName:u,isAnonymous:b,photoURL:f,phoneNumber:d,tenantId:p,stsTokenManager:k,createdAt:m,lastLoginAt:y});return _&&Array.isArray(_)&&(T.providerData=_.map((e=>Object.assign({},e)))),g&&(T._redirectEventId=g),T}static async _fromIdTokenResponse(e,t,n=!1){const r=new Ca;r.updateFromServerResponse(t);const s=new Da({uid:t.localId,auth:e,stsTokenManager:r,isAnonymous:n});return await Aa(s),s}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ra{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return void 0===t?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}Ra.type="NONE";const Oa=Ra;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pa(e,t,n){return`firebase:${e}:${t}:${n}`}class La{constructor(e,t,n){this.persistence=e,this.auth=t,this.userKey=n;const{config:r,name:s}=this.auth;this.fullUserKey=Pa(this.userKey,r.apiKey,s),this.fullPersistenceKey=Pa("persistence",r.apiKey,s),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Da._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();return await this.removeCurrentUser(),this.persistence=e,t?this.setCurrentUser(t):void 0}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,n="authUser"){if(!t.length)return new La(oa(Oa),e,n);const r=(await Promise.all(t.map((async e=>{if(await e._isAvailable())return e})))).filter((e=>e));let s=r[0]||oa(Oa);const i=Pa(n,e.config.apiKey,e.name);let o=null;for(const n of t)try{const t=await n._get(i);if(t){const r=Da._fromJSON(e,t);n!==s&&(o=r),s=n;break}}catch(e){}const a=r.filter((e=>e._shouldAllowMigration));return s._shouldAllowMigration&&a.length?(s=a[0],o&&await s._set(i,o.toJSON()),await Promise.all(t.map((async e=>{if(e!==s)try{await e._remove(i)}catch(e){}}))),new La(s,e,n)):new La(s,e,n)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ma(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(Ba(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(Fa(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(qa(t))return"Blackberry";if($a(t))return"Webos";if(Va(t))return"Safari";if((t.includes("chrome/")||Ua(t))&&!t.includes("edge/"))return"Chrome";if(ja(t))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=e.match(t);if(2===(null==n?void 0:n.length))return n[1]}return"Other"}function Fa(e=oi()){return/firefox\//i.test(e)}function Va(e=oi()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function Ua(e=oi()){return/crios\//i.test(e)}function Ba(e=oi()){return/iemobile/i.test(e)}function ja(e=oi()){return/android/i.test(e)}function qa(e=oi()){return/blackberry/i.test(e)}function $a(e=oi()){return/webos/i.test(e)}function za(e=oi()){return/iphone|ipad|ipod/i.test(e)}function Ga(e=oi()){return za(e)||ja(e)||$a(e)||qa(e)||/windows phone/i.test(e)||Ba(e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Ka(e,t=[]){let n;switch(e){case"Browser":n=Ma(oi());break;case"Worker":n=`${Ma(oi())}-${e}`;break;default:n=e}return`${n}/JsCore/9.8.4/${t.length?t.join(","):"FirebaseCore-web"}`}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wa{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const n=t=>new Promise(((n,r)=>{try{n(e(t))}catch(e){r(e)}}));n.onAbort=t,this.queue.push(n);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){var t;if(this.auth.currentUser===e)return;const n=[];try{for(const t of this.queue)await t(e),t.onAbort&&n.push(t.onAbort)}catch(e){n.reverse();for(const e of n)try{e()}catch(e){}throw this.auth._errorFactory.create("login-blocked",{originalMessage:null===(t=e)||void 0===t?void 0:t.message})}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ha{constructor(e,t,n){this.app=e,this.heartbeatServiceProvider=t,this.config=n,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Ja(this),this.idTokenSubscription=new Ja(this),this.beforeStateQueue=new Wa(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Ho,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=n.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=oa(t)),this._initializationPromise=this.queue((async()=>{var n,r;if(!this._deleted&&(this.persistenceManager=await La.create(this,e),!this._deleted)){if(null===(n=this._popupRedirectResolver)||void 0===n?void 0:n._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch(e){}await this.initializeCurrentUser(t),this.lastNotifiedUid=(null===(r=this.currentUser)||void 0===r?void 0:r.uid)||null,this._deleted||(this._isInitialized=!0)}})),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();return this.currentUser||e?this.currentUser&&e&&this.currentUser.uid===e.uid?(this._currentUser._assign(e),void await this.currentUser.getIdToken()):void await this._updateCurrentUser(e,!0):void 0}async initializeCurrentUser(e){var t;const n=await this.assertedPersistence.getCurrentUser();let r=n,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const n=null===(t=this.redirectUser)||void 0===t?void 0:t._redirectEventId,i=null==r?void 0:r._redirectEventId,o=await this.tryRedirectSignIn(e);n&&n!==i||!(null==o?void 0:o.user)||(r=o.user,s=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(r)}catch(e){r=n,this._popupRedirectResolver._overrideRedirectResult(this,(()=>Promise.reject(e)))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return na(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch(e){await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){var t;try{await Aa(e)}catch(e){if("auth/network-request-failed"!==(null===(t=e)||void 0===t?void 0:t.code))return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=function(){if("undefined"==typeof navigator)return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const t=e?Ei(e):null;return t&&na(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&na(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue((async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()}))}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue((async()=>{await this.assertedPersistence.setPersistence(oa(e))}))}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new pi("auth","Firebase",e())}onAuthStateChanged(e,t,n){return this.registerStateListener(this.authStateSubscription,e,t,n)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,n){return this.registerStateListener(this.idTokenSubscription,e,t,n)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(e=this._currentUser)||void 0===e?void 0:e.toJSON()}}async _setRedirectUser(e,t){const n=await this.getOrInitRedirectPersistenceManager(t);return null===e?n.removeCurrentUser():n.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&oa(e)||this._popupRedirectResolver;na(t,this,"argument-error"),this.redirectPersistenceManager=await La.create(this,[oa(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,n;return this._isInitialized&&await this.queue((async()=>{})),(null===(t=this._currentUser)||void 0===t?void 0:t._redirectEventId)===e?this._currentUser:(null===(n=this.redirectUser)||void 0===n?void 0:n._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue((async()=>this.directlySetCurrentUser(e)))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=null!==(t=null===(e=this.currentUser)||void 0===e?void 0:e.uid)&&void 0!==t?t:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,n,r){if(this._deleted)return()=>{};const s="function"==typeof t?t:t.next.bind(t),i=this._isInitialized?Promise.resolve():this._initializationPromise;return na(i,this,"internal-error"),i.then((()=>s(this.currentUser))),"function"==typeof t?e.addObserver(t,n,r):e.addObserver(t)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&(this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh()),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return na(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){e&&!this.frameworks.includes(e)&&(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Ka(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const n=await(null===(e=this.heartbeatServiceProvider.getImmediate({optional:!0}))||void 0===e?void 0:e.getHeartbeatsHeader());return n&&(t["X-Firebase-Client"]=n),t}}function Qa(e){return Ei(e)}class Ja{constructor(e){this.auth=e,this.observer=null,this.addObserver=Ii((e=>this.observer=e))}get next(){return na(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function Ya(e,t,n){const r=Qa(e);na(r._canInitEmulator,r,"emulator-config-failed"),na(/^https?:\/\//.test(t),r,"invalid-emulator-scheme");const s=!!(null==n?void 0:n.disableWarnings),i=Xa(t),{host:o,port:a}=function(e){const t=Xa(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const e=s[1];return{host:e,port:Za(r.substr(e.length+1))}}{const[e,t]=r.split(":");return{host:e,port:Za(t)}}}(t),c=null===a?"":`:${a}`;r.config.emulator={url:`${i}//${o}${c}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),s||function(){function e(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}"undefined"!=typeof console&&"function"==typeof console.info&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials.");"undefined"!=typeof window&&"undefined"!=typeof document&&("loading"===document.readyState?window.addEventListener("DOMContentLoaded",e):e())}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */()}function Xa(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function Za(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}class ec{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return ra("not implemented")}_getIdTokenResponse(e){return ra("not implemented")}_linkToIdToken(e,t){return ra("not implemented")}_getReauthenticationResolver(e){return ra("not implemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tc(e,t){return ma(e,"POST","/v1/accounts:resetPassword",ga(e,t))}async function nc(e,t){return ma(e,"POST","/v1/accounts:update",t)}async function rc(e,t){return ma(e,"POST","/v1/accounts:sendOobCode",ga(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class sc extends ec{constructor(e,t,n,r=null){super("password",n),this._email=e,this._password=t,this._tenantId=r}static _fromEmailAndPassword(e,t){return new sc(e,t,"password")}static _fromEmailAndCode(e,t,n=null){return new sc(e,t,"emailLink",n)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t="string"==typeof e?JSON.parse(e):e;if((null==t?void 0:t.email)&&(null==t?void 0:t.password)){if("password"===t.signInMethod)return this._fromEmailAndPassword(t.email,t.password);if("emailLink"===t.signInMethod)return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
return async function(e,t){return va(e,"POST","/v1/accounts:signInWithPassword",ga(e,t))}(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
return async function(e,t){return va(e,"POST","/v1/accounts:signInWithEmailLink",ga(e,t))}(e,{email:this._email,oobCode:this._password});default:Yo(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":return nc(e,{idToken:t,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return async function(e,t){return va(e,"POST","/v1/accounts:signInWithEmailLink",ga(e,t))}(e,{idToken:t,email:this._email,oobCode:this._password});default:Yo(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ic(e,t){return va(e,"POST","/v1/accounts:signInWithIdp",ga(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oc extends ec{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new oc(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Yo("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t="string"==typeof e?JSON.parse(e):e,{providerId:n,signInMethod:r}=t,s=Oo(t,["providerId","signInMethod"]);if(!n||!r)return null;const i=new oc(n,r);return i.idToken=s.idToken||void 0,i.accessToken=s.accessToken||void 0,i.secret=s.secret,i.nonce=s.nonce,i.pendingToken=s.pendingToken||null,i}_getIdTokenResponse(e){return ic(e,this.buildRequest())}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,ic(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,ic(e,t)}buildRequest(){const e={requestUri:"http://localhost",returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=wi(t)}return e}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ac={USER_NOT_FOUND:"user-not-found"};
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class cc extends ec{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,t){return new cc({verificationId:e,verificationCode:t})}static _fromTokenResponse(e,t){return new cc({phoneNumber:e,temporaryProof:t})}_getIdTokenResponse(e){return async function(e,t){return va(e,"POST","/v1/accounts:signInWithPhoneNumber",ga(e,t))}(e,this._makeVerificationRequest())}_linkToIdToken(e,t){return async function(e,t){const n=await va(e,"POST","/v1/accounts:signInWithPhoneNumber",ga(e,t));if(n.temporaryProof)throw _a(e,"account-exists-with-different-credential",n);return n}(e,Object.assign({idToken:t},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return async function(e,t){return va(e,"POST","/v1/accounts:signInWithPhoneNumber",ga(e,Object.assign(Object.assign({},t),{operation:"REAUTH"})),ac)}(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:t,verificationId:n,verificationCode:r}=this.params;return e&&t?{temporaryProof:e,phoneNumber:t}:{sessionInfo:n,code:r}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){"string"==typeof e&&(e=JSON.parse(e));const{verificationId:t,verificationCode:n,phoneNumber:r,temporaryProof:s}=e;return n||t||r||s?new cc({verificationId:t,verificationCode:n,phoneNumber:r,temporaryProof:s}):null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lc{constructor(e){var t,n,r,s,i,o;const a=bi(_i(e)),c=null!==(t=a.apiKey)&&void 0!==t?t:null,l=null!==(n=a.oobCode)&&void 0!==n?n:null,u=function(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}(null!==(r=a.mode)&&void 0!==r?r:null);na(c&&l&&u,"argument-error"),this.apiKey=c,this.operation=u,this.code=l,this.continueUrl=null!==(s=a.continueUrl)&&void 0!==s?s:null,this.languageCode=null!==(i=a.languageCode)&&void 0!==i?i:null,this.tenantId=null!==(o=a.tenantId)&&void 0!==o?o:null}static parseLink(e){const t=function(e){const t=bi(_i(e)).link,n=t?bi(_i(t)).deep_link_id:null,r=bi(_i(e)).deep_link_id;return(r?bi(_i(r)).link:null)||r||n||t||e}(e);try{return new lc(t)}catch(e){return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uc{constructor(){this.providerId=uc.PROVIDER_ID}static credential(e,t){return sc._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const n=lc.parseLink(t);return na(n,"argument-error"),sc._fromEmailAndCode(e,n.code,n.tenantId)}}uc.PROVIDER_ID="password",uc.EMAIL_PASSWORD_SIGN_IN_METHOD="password",uc.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class hc{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dc extends hc{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}class fc extends dc{static credentialFromJSON(e){const t="string"==typeof e?JSON.parse(e):e;return na("providerId"in t&&"signInMethod"in t,"argument-error"),oc._fromParams(t)}credential(e){return this._credential(Object.assign(Object.assign({},e),{nonce:e.rawNonce}))}_credential(e){return na(e.idToken||e.accessToken,"argument-error"),oc._fromParams(Object.assign(Object.assign({},e),{providerId:this.providerId,signInMethod:this.providerId}))}static credentialFromResult(e){return fc.oauthCredentialFromTaggedObject(e)}static credentialFromError(e){return fc.oauthCredentialFromTaggedObject(e.customData||{})}static oauthCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:n,oauthTokenSecret:r,pendingToken:s,nonce:i,providerId:o}=e;if(!(n||r||t||s))return null;if(!o)return null;try{return new fc(o)._credential({idToken:t,accessToken:n,nonce:i,pendingToken:s})}catch(e){return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pc extends dc{constructor(){super("facebook.com")}static credential(e){return oc._fromParams({providerId:pc.PROVIDER_ID,signInMethod:pc.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return pc.credentialFromTaggedObject(e)}static credentialFromError(e){return pc.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return pc.credential(e.oauthAccessToken)}catch(e){return null}}}pc.FACEBOOK_SIGN_IN_METHOD="facebook.com",pc.PROVIDER_ID="facebook.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class gc extends dc{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return oc._fromParams({providerId:gc.PROVIDER_ID,signInMethod:gc.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return gc.credentialFromTaggedObject(e)}static credentialFromError(e){return gc.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:n}=e;if(!t&&!n)return null;try{return gc.credential(t,n)}catch(e){return null}}}gc.GOOGLE_SIGN_IN_METHOD="google.com",gc.PROVIDER_ID="google.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class mc extends dc{constructor(){super("github.com")}static credential(e){return oc._fromParams({providerId:mc.PROVIDER_ID,signInMethod:mc.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return mc.credentialFromTaggedObject(e)}static credentialFromError(e){return mc.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return mc.credential(e.oauthAccessToken)}catch(e){return null}}}mc.GITHUB_SIGN_IN_METHOD="github.com",mc.PROVIDER_ID="github.com";class yc extends ec{constructor(e,t){super(e,e),this.pendingToken=t}_getIdTokenResponse(e){return ic(e,this.buildRequest())}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,ic(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,ic(e,t)}toJSON(){return{signInMethod:this.signInMethod,providerId:this.providerId,pendingToken:this.pendingToken}}static fromJSON(e){const t="string"==typeof e?JSON.parse(e):e,{providerId:n,signInMethod:r,pendingToken:s}=t;return n&&r&&s&&n===r?new yc(n,s):null}static _create(e,t){return new yc(e,t)}buildRequest(){return{requestUri:"http://localhost",returnSecureToken:!0,pendingToken:this.pendingToken}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vc extends hc{constructor(e){na(e.startsWith("saml."),"argument-error"),super(e)}static credentialFromResult(e){return vc.samlCredentialFromTaggedObject(e)}static credentialFromError(e){return vc.samlCredentialFromTaggedObject(e.customData||{})}static credentialFromJSON(e){const t=yc.fromJSON(e);return na(t,"argument-error"),t}static samlCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{pendingToken:t,providerId:n}=e;if(!t||!n)return null;try{return yc._create(n,t)}catch(e){return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wc extends dc{constructor(){super("twitter.com")}static credential(e,t){return oc._fromParams({providerId:wc.PROVIDER_ID,signInMethod:wc.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return wc.credentialFromTaggedObject(e)}static credentialFromError(e){return wc.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:n}=e;if(!t||!n)return null;try{return wc.credential(t,n)}catch(e){return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function bc(e,t){return va(e,"POST","/v1/accounts:signUp",ga(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */wc.TWITTER_SIGN_IN_METHOD="twitter.com",wc.PROVIDER_ID="twitter.com";class _c{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,n,r=!1){const s=await Da._fromIdTokenResponse(e,n,r),i=Ic(n);return new _c({user:s,providerId:i,_tokenResponse:n,operationType:t})}static async _forOperation(e,t,n){await e._updateTokensIfNecessary(n,!0);const r=Ic(n);return new _c({user:e,providerId:r,_tokenResponse:n,operationType:t})}}function Ic(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class kc extends fi{constructor(e,t,n,r){var s;super(t.code,t.message),this.operationType=n,this.user=r,Object.setPrototypeOf(this,kc.prototype),this.customData={appName:e.name,tenantId:null!==(s=e.tenantId)&&void 0!==s?s:void 0,_serverResponse:t.customData._serverResponse,operationType:n}}static _fromErrorAndOperation(e,t,n,r){return new kc(e,t,n,r)}}function Tc(e,t,n,r){return("reauthenticate"===t?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch((n=>{if("auth/multi-factor-auth-required"===n.code)throw kc._fromErrorAndOperation(e,n,t,r);throw n}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ec(e){return new Set(e.map((({providerId:e})=>e)).filter((e=>!!e)))}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Sc(e,t){const n=Ei(e);await Ac(!0,n,t);const{providerUserInfo:r}=await async function(e,t){return ma(e,"POST","/v1/accounts:update",t)}(n.auth,{idToken:await n.getIdToken(),deleteProvider:[t]}),s=Ec(r||[]);return n.providerData=n.providerData.filter((e=>s.has(e.providerId))),s.has("phone")||(n.phoneNumber=null),await n.auth._persistUserIfCurrent(n),n}async function xc(e,t,n=!1){const r=await Ea(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return _c._forOperation(e,"link",r)}async function Ac(e,t,n){await Aa(t);const r=!1===e?"provider-already-linked":"no-such-provider";na(Ec(t.providerData).has(n)===e,t.auth,r)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Cc(e,t,n=!1){var r;const{auth:s}=e,i="reauthenticate";try{const r=await Ea(e,Tc(s,i,t,e),n);na(r.idToken,s,"internal-error");const o=Ta(r.idToken);na(o,s,"internal-error");const{sub:a}=o;return na(e.uid===a,s,"user-mismatch"),_c._forOperation(e,i,r)}catch(e){throw"auth/user-not-found"===(null===(r=e)||void 0===r?void 0:r.code)&&Yo(s,"user-mismatch"),e}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Nc(e,t,n=!1){const r="signIn",s=await Tc(e,r,t),i=await _c._fromIdTokenResponse(e,r,s);return n||await e._updateCurrentUser(i.user),i}async function Dc(e,t){return Nc(Qa(e),t)}async function Rc(e,t){const n=Ei(e);return await Ac(!1,n,t.providerId),xc(n,t)}async function Oc(e,t){return Cc(Ei(e),t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Pc(e,t){const n=Qa(e),r=await async function(e,t){return va(e,"POST","/v1/accounts:signInWithCustomToken",ga(e,t))}(n,{token:t,returnSecureToken:!0}),s=await _c._fromIdTokenResponse(n,"signIn",r);return await n._updateCurrentUser(s.user),s}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lc{constructor(e,t){this.factorId=e,this.uid=t.mfaEnrollmentId,this.enrollmentTime=new Date(t.enrolledAt).toUTCString(),this.displayName=t.displayName}static _fromServerResponse(e,t){return"phoneInfo"in t?Mc._fromServerResponse(e,t):Yo(e,"internal-error")}}class Mc extends Lc{constructor(e){super("phone",e),this.phoneNumber=e.phoneInfo}static _fromServerResponse(e,t){return new Mc(t)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fc(e,t,n){var r;na((null===(r=n.url)||void 0===r?void 0:r.length)>0,e,"invalid-continue-uri"),na(void 0===n.dynamicLinkDomain||n.dynamicLinkDomain.length>0,e,"invalid-dynamic-link-domain"),t.continueUrl=n.url,t.dynamicLinkDomain=n.dynamicLinkDomain,t.canHandleCodeInApp=n.handleCodeInApp,n.iOS&&(na(n.iOS.bundleId.length>0,e,"missing-ios-bundle-id"),t.iOSBundleId=n.iOS.bundleId),n.android&&(na(n.android.packageName.length>0,e,"missing-android-pkg-name"),t.androidInstallApp=n.android.installApp,t.androidMinimumVersionCode=n.android.minimumVersion,t.androidPackageName=n.android.packageName)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Vc(e,t,n){const r=Ei(e),s={requestType:"PASSWORD_RESET",email:t};n&&Fc(r,s,n),await async function(e,t){return rc(e,t)}(r,s)}async function Uc(e,t){await async function(e,t){return ma(e,"POST","/v1/accounts:update",ga(e,t))}(Ei(e),{oobCode:t})}async function Bc(e,t){const n=Ei(e),r=await tc(n,{oobCode:t}),s=r.requestType;switch(na(s,n,"internal-error"),s){case"EMAIL_SIGNIN":break;case"VERIFY_AND_CHANGE_EMAIL":na(r.newEmail,n,"internal-error");break;case"REVERT_SECOND_FACTOR_ADDITION":na(r.mfaInfo,n,"internal-error");default:na(r.email,n,"internal-error")}let i=null;return r.mfaInfo&&(i=Lc._fromServerResponse(Qa(n),r.mfaInfo)),{data:{email:("VERIFY_AND_CHANGE_EMAIL"===r.requestType?r.newEmail:r.email)||null,previousEmail:("VERIFY_AND_CHANGE_EMAIL"===r.requestType?r.email:r.newEmail)||null,multiFactorInfo:i},operation:s}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function jc(e,t,n){const r=Ei(e),s={requestType:"EMAIL_SIGNIN",email:t};na(n.handleCodeInApp,r,"argument-error"),n&&Fc(r,s,n),await async function(e,t){return rc(e,t)}(r,s)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function qc(e,t){const n={identifier:t,continueUri:ca()?aa():"http://localhost"},{signinMethods:r}=await
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function(e,t){return ma(e,"POST","/v1/accounts:createAuthUri",ga(e,t))}(Ei(e),n);return r||[]}async function $c(e,t){const n=Ei(e),r={requestType:"VERIFY_EMAIL",idToken:await e.getIdToken()};t&&Fc(n.auth,r,t);const{email:s}=await async function(e,t){return rc(e,t)}(n.auth,r);s!==e.email&&await e.reload()}async function zc(e,t,n){const r=Ei(e),s={requestType:"VERIFY_AND_CHANGE_EMAIL",idToken:await e.getIdToken(),newEmail:t};n&&Fc(r.auth,s,n);const{email:i}=await async function(e,t){return rc(e,t)}(r.auth,s);i!==e.email&&await e.reload()}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Gc(e,{displayName:t,photoURL:n}){if(void 0===t&&void 0===n)return;const r=Ei(e),s={idToken:await r.getIdToken(),displayName:t,photoUrl:n,returnSecureToken:!0},i=await Ea(r,async function(e,t){return ma(e,"POST","/v1/accounts:update",t)}(r.auth,s));r.displayName=i.displayName||null,r.photoURL=i.photoUrl||null;const o=r.providerData.find((({providerId:e})=>"password"===e));o&&(o.displayName=r.displayName,o.photoURL=r.photoURL),await r._updateTokensIfNecessary(i)}async function Kc(e,t,n){const{auth:r}=e,s={idToken:await e.getIdToken(),returnSecureToken:!0};t&&(s.email=t),n&&(s.password=n);const i=await Ea(e,nc(r,s));await e._updateTokensIfNecessary(i,!0)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wc{constructor(e,t,n={}){this.isNewUser=e,this.providerId=t,this.profile=n}}class Hc extends Wc{constructor(e,t,n,r){super(e,t,n),this.username=r}}class Qc extends Wc{constructor(e,t){super(e,"facebook.com",t)}}class Jc extends Hc{constructor(e,t){super(e,"github.com",t,"string"==typeof(null==t?void 0:t.login)?null==t?void 0:t.login:null)}}class Yc extends Wc{constructor(e,t){super(e,"google.com",t)}}class Xc extends Hc{constructor(e,t,n){super(e,"twitter.com",t,n)}}function Zc(e){const{user:t,_tokenResponse:n}=e;return t.isAnonymous&&!n?{providerId:null,isNewUser:!1,profile:null}:function(e){var t,n;if(!e)return null;const{providerId:r}=e,s=e.rawUserInfo?JSON.parse(e.rawUserInfo):{},i=e.isNewUser||"identitytoolkit#SignupNewUserResponse"===e.kind;if(!r&&(null==e?void 0:e.idToken)){const r=null===(n=null===(t=Ta(e.idToken))||void 0===t?void 0:t.firebase)||void 0===n?void 0:n.sign_in_provider;if(r)return new Wc(i,"anonymous"!==r&&"custom"!==r?r:null)}if(!r)return null;switch(r){case"facebook.com":return new Qc(i,s);case"github.com":return new Jc(i,s);case"google.com":return new Yc(i,s);case"twitter.com":return new Xc(i,s,e.screenName||null);case"custom":case"anonymous":return new Wc(i,null);default:return new Wc(i,r,s)}}(n)}class el{constructor(e,t){this.type=e,this.credential=t}static _fromIdtoken(e){return new el("enroll",e)}static _fromMfaPendingCredential(e){return new el("signin",e)}toJSON(){return{multiFactorSession:{["enroll"===this.type?"idToken":"pendingCredential"]:this.credential}}}static fromJSON(e){var t,n;if(null==e?void 0:e.multiFactorSession){if(null===(t=e.multiFactorSession)||void 0===t?void 0:t.pendingCredential)return el._fromMfaPendingCredential(e.multiFactorSession.pendingCredential);if(null===(n=e.multiFactorSession)||void 0===n?void 0:n.idToken)return el._fromIdtoken(e.multiFactorSession.idToken)}return null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tl{constructor(e,t,n){this.session=e,this.hints=t,this.signInResolver=n}static _fromError(e,t){const n=Qa(e),r=t.customData._serverResponse,s=(r.mfaInfo||[]).map((e=>Lc._fromServerResponse(n,e)));na(r.mfaPendingCredential,n,"internal-error");const i=el._fromMfaPendingCredential(r.mfaPendingCredential);return new tl(i,s,(async e=>{const s=await e._process(n,i);delete r.mfaInfo,delete r.mfaPendingCredential;const o=Object.assign(Object.assign({},r),{idToken:s.idToken,refreshToken:s.refreshToken});switch(t.operationType){case"signIn":const e=await _c._fromIdTokenResponse(n,t.operationType,o);return await n._updateCurrentUser(e.user),e;case"reauthenticate":return na(t.user,n,"internal-error"),_c._forOperation(t.user,t.operationType,o);default:Yo(n,"internal-error")}}))}async resolveSignIn(e){const t=e;return this.signInResolver(t)}}class nl{constructor(e){this.user=e,this.enrolledFactors=[],e._onReload((t=>{t.mfaInfo&&(this.enrolledFactors=t.mfaInfo.map((t=>Lc._fromServerResponse(e.auth,t))))}))}static _fromUser(e){return new nl(e)}async getSession(){return el._fromIdtoken(await this.user.getIdToken())}async enroll(e,t){const n=e,r=await this.getSession(),s=await Ea(this.user,n._process(this.user.auth,r,t));return await this.user._updateTokensIfNecessary(s),this.user.reload()}async unenroll(e){var t;const n="string"==typeof e?e:e.uid,r=await this.user.getIdToken(),s=await Ea(this.user,(i=this.user.auth,o={idToken:r,mfaEnrollmentId:n},ma(i,"POST","/v2/accounts/mfaEnrollment:withdraw",ga(i,o))));var i,o;this.enrolledFactors=this.enrolledFactors.filter((({uid:e})=>e!==n)),await this.user._updateTokensIfNecessary(s);try{await this.user.reload()}catch(e){if("auth/user-token-expired"!==(null===(t=e)||void 0===t?void 0:t.code))throw e}}}const rl=new WeakMap;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class sl{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem("__sak","1"),this.storage.removeItem("__sak"),Promise.resolve(!0)):Promise.resolve(!1)}catch(e){return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class il extends sl{constructor(){super((()=>window.localStorage),"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=function(){const e=oi();return Va(e)||za(e)}()&&function(){try{return!(!window||window===window.top)}catch(e){return!1}}(),this.fallbackToPolling=Ga(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const n=this.storage.getItem(t),r=this.localCache[t];n!==r&&e(t,r,n)}}onStorageEvent(e,t=!1){if(!e.key)return void this.forAllChangedKeys(((e,t,n)=>{this.notifyListeners(e,n)}));const n=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const r=this.storage.getItem(n);if(e.newValue!==r)null!==e.newValue?this.storage.setItem(n,e.newValue):this.storage.removeItem(n);else if(this.localCache[n]===e.newValue&&!t)return}const r=()=>{const e=this.storage.getItem(n);(t||this.localCache[n]!==e)&&this.notifyListeners(n,e)},s=this.storage.getItem(n);hi()&&10===document.documentMode&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,10):r()}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const e of Array.from(n))e(t?JSON.parse(t):t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((()=>{this.forAllChangedKeys(((e,t,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:n}),!0)}))}),1e3)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}il.type="LOCAL";const ol=il;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class al extends sl{constructor(){super((()=>window.sessionStorage),"SESSION")}_addListener(e,t){}_removeListener(e,t){}}al.type="SESSION";const cl=al;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ll{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find((t=>t.isListeningto(e)));if(t)return t;const n=new ll(e);return this.receivers.push(n),n}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:n,eventType:r,data:s}=t.data,i=this.handlersMap[r];if(!(null==i?void 0:i.size))return;t.ports[0].postMessage({status:"ack",eventId:n,eventType:r});const o=Array.from(i).map((async e=>e(t.origin,s))),a=await function(e){return Promise.all(e.map((async e=>{try{return{fulfilled:!0,value:await e}}catch(e){return{fulfilled:!1,reason:e}}})))}(o);t.ports[0].postMessage({status:"done",eventId:n,eventType:r,response:a})}_subscribe(e,t){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),t&&0!==this.handlersMap[e].size||delete this.handlersMap[e],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function ul(e="",t=10){let n="";for(let e=0;e<t;e++)n+=Math.floor(10*Math.random());return e+n}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ll.receivers=[];class hl{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,n=50){const r="undefined"!=typeof MessageChannel?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let s,i;return new Promise(((o,a)=>{const c=ul("",20);r.port1.start();const l=setTimeout((()=>{a(new Error("unsupported_event"))}),n);i={messageChannel:r,onMessage(e){const t=e;if(t.data.eventId===c)switch(t.data.status){case"ack":clearTimeout(l),s=setTimeout((()=>{a(new Error("timeout"))}),3e3);break;case"done":clearTimeout(s),o(t.data.response);break;default:clearTimeout(l),clearTimeout(s),a(new Error("invalid_response"))}}},this.handlers.add(i),r.port1.addEventListener("message",i.onMessage),this.target.postMessage({eventType:e,eventId:c,data:t},[r.port2])})).finally((()=>{i&&this.removeMessageHandler(i)}))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dl(){return window}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function fl(){return void 0!==dl().WorkerGlobalScope&&"function"==typeof dl().importScripts}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const pl="firebaseLocalStorageDb";class gl{constructor(e){this.request=e}toPromise(){return new Promise(((e,t)=>{this.request.addEventListener("success",(()=>{e(this.request.result)})),this.request.addEventListener("error",(()=>{t(this.request.error)}))}))}}function ml(e,t){return e.transaction(["firebaseLocalStorage"],t?"readwrite":"readonly").objectStore("firebaseLocalStorage")}function yl(){const e=indexedDB.open(pl,1);return new Promise(((t,n)=>{e.addEventListener("error",(()=>{n(e.error)})),e.addEventListener("upgradeneeded",(()=>{const t=e.result;try{t.createObjectStore("firebaseLocalStorage",{keyPath:"fbase_key"})}catch(e){n(e)}})),e.addEventListener("success",(async()=>{const n=e.result;n.objectStoreNames.contains("firebaseLocalStorage")?t(n):(n.close(),await function(){const e=indexedDB.deleteDatabase(pl);return new gl(e).toPromise()}(),t(await yl()))}))}))}async function vl(e,t,n){const r=ml(e,!0).put({fbase_key:t,value:n});return new gl(r).toPromise()}function wl(e,t){const n=ml(e,!0).delete(t);return new gl(n).toPromise()}class bl{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then((()=>{}),(()=>{}))}async _openDb(){return this.db||(this.db=await yl()),this.db}async _withRetries(e){let t=0;for(;;)try{const t=await this._openDb();return await e(t)}catch(e){if(t++>3)throw e;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return fl()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=ll._getInstance(fl()?self:null),this.receiver._subscribe("keyChanged",(async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)}))),this.receiver._subscribe("ping",(async(e,t)=>["keyChanged"]))}async initializeSender(){var e,t;if(this.activeServiceWorker=await async function(){if(!(null===navigator||void 0===navigator?void 0:navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch(e){return null}}(),!this.activeServiceWorker)return;this.sender=new hl(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&(null===(e=n[0])||void 0===e?void 0:e.fulfilled)&&(null===(t=n[0])||void 0===t?void 0:t.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){var t;if(this.sender&&this.activeServiceWorker&&((null===(t=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===t?void 0:t.controller)||null)===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch(t){}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await yl();return await vl(e,"__sak","1"),await wl(e,"__sak"),!0}catch(e){}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite((async()=>(await this._withRetries((n=>vl(n,e,t))),this.localCache[e]=t,this.notifyServiceWorker(e))))}async _get(e){const t=await this._withRetries((t=>async function(e,t){const n=ml(e,!1).get(t),r=await new gl(n).toPromise();return void 0===r?null:r.value}(t,e)));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite((async()=>(await this._withRetries((t=>wl(t,e))),delete this.localCache[e],this.notifyServiceWorker(e))))}async _poll(){const e=await this._withRetries((e=>{const t=ml(e,!1).getAll();return new gl(t).toPromise()}));if(!e)return[];if(0!==this.pendingWrites)return[];const t=[],n=new Set;for(const{fbase_key:r,value:s}of e)n.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(s)&&(this.notifyListeners(r,s),t.push(r));for(const e of Object.keys(this.localCache))this.localCache[e]&&!n.has(e)&&(this.notifyListeners(e,null),t.push(e));return t}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const e of Array.from(n))e(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((async()=>this._poll()),800)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&this.stopPolling()}}bl.type="LOCAL";const _l=bl;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Il(e){return new Promise(((t,n)=>{const r=document.createElement("script");
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var s,i;r.setAttribute("src",e),r.onload=t,r.onerror=e=>{const t=Xo("internal-error");t.customData=e,n(t)},r.type="text/javascript",r.charset="UTF-8",(null!==(i=null===(s=document.getElementsByTagName("head"))||void 0===s?void 0:s[0])&&void 0!==i?i:document).appendChild(r)}))}function kl(e){return`__${e}${Math.floor(1e6*Math.random())}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tl{constructor(e){this.auth=e,this.counter=1e12,this._widgets=new Map}render(e,t){const n=this.counter;return this._widgets.set(n,new El(e,this.auth.name,t||{})),this.counter++,n}reset(e){var t;const n=e||1e12;null===(t=this._widgets.get(n))||void 0===t||t.delete(),this._widgets.delete(n)}getResponse(e){var t;const n=e||1e12;return(null===(t=this._widgets.get(n))||void 0===t?void 0:t.getResponse())||""}async execute(e){var t;const n=e||1e12;return null===(t=this._widgets.get(n))||void 0===t||t.execute(),""}}class El{constructor(e,t,n){this.params=n,this.timerId=null,this.deleted=!1,this.responseToken=null,this.clickHandler=()=>{this.execute()};const r="string"==typeof e?document.getElementById(e):e;na(r,"argument-error",{appName:t}),this.container=r,this.isVisible="invisible"!==this.params.size,this.isVisible?this.execute():this.container.addEventListener("click",this.clickHandler)}getResponse(){return this.checkIfDeleted(),this.responseToken}delete(){this.checkIfDeleted(),this.deleted=!0,this.timerId&&(clearTimeout(this.timerId),this.timerId=null),this.container.removeEventListener("click",this.clickHandler)}execute(){this.checkIfDeleted(),this.timerId||(this.timerId=window.setTimeout((()=>{this.responseToken=function(e){const t=[],n="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let r=0;r<e;r++)t.push(n.charAt(Math.floor(Math.random()*n.length)));return t.join("")}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(50);const{callback:e,"expired-callback":t}=this.params;if(e)try{e(this.responseToken)}catch(e){}this.timerId=window.setTimeout((()=>{if(this.timerId=null,this.responseToken=null,t)try{t()}catch(e){}this.isVisible&&this.execute()}),6e4)}),500))}checkIfDeleted(){if(this.deleted)throw new Error("reCAPTCHA mock was already deleted!")}}const Sl=kl("rcb"),xl=new ua(3e4,6e4);class Al{constructor(){this.hostLanguage="",this.counter=0,this.librarySeparatelyLoaded=!!dl().grecaptcha}load(e,t=""){return na(function(e){return e.length<=6&&/^\s*[a-zA-Z0-9\-]*\s*$/.test(e)}(t),e,"argument-error"),this.shouldResolveImmediately(t)?Promise.resolve(dl().grecaptcha):new Promise(((n,r)=>{const s=dl().setTimeout((()=>{r(Xo(e,"network-request-failed"))}),xl.get());dl()[Sl]=()=>{dl().clearTimeout(s),delete dl()[Sl];const i=dl().grecaptcha;if(!i)return void r(Xo(e,"internal-error"));const o=i.render;i.render=(e,t)=>{const n=o(e,t);return this.counter++,n},this.hostLanguage=t,n(i)};Il(`https://www.google.com/recaptcha/api.js??${wi({onload:Sl,render:"explicit",hl:t})}`).catch((()=>{clearTimeout(s),r(Xo(e,"internal-error"))}))}))}clearedOneInstance(){this.counter--}shouldResolveImmediately(e){return!!dl().grecaptcha&&(e===this.hostLanguage||this.counter>0||this.librarySeparatelyLoaded)}}class Cl{async load(e){return new Tl(e)}clearedOneInstance(){}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nl={theme:"light",type:"image"};class Dl{constructor(e,t=Object.assign({},Nl),n){this.parameters=t,this.type="recaptcha",this.destroyed=!1,this.widgetId=null,this.tokenChangeListeners=new Set,this.renderPromise=null,this.recaptcha=null,this.auth=Qa(n),this.isInvisible="invisible"===this.parameters.size,na("undefined"!=typeof document,this.auth,"operation-not-supported-in-this-environment");const r="string"==typeof e?document.getElementById(e):e;na(r,this.auth,"argument-error"),this.container=r,this.parameters.callback=this.makeTokenCallback(this.parameters.callback),this._recaptchaLoader=this.auth.settings.appVerificationDisabledForTesting?new Cl:new Al,this.validateStartingState()}async verify(){this.assertNotDestroyed();const e=await this.render(),t=this.getAssertedRecaptcha(),n=t.getResponse(e);return n||new Promise((n=>{const r=e=>{e&&(this.tokenChangeListeners.delete(r),n(e))};this.tokenChangeListeners.add(r),this.isInvisible&&t.execute(e)}))}render(){try{this.assertNotDestroyed()}catch(e){return Promise.reject(e)}return this.renderPromise||(this.renderPromise=this.makeRenderPromise().catch((e=>{throw this.renderPromise=null,e}))),this.renderPromise}_reset(){this.assertNotDestroyed(),null!==this.widgetId&&this.getAssertedRecaptcha().reset(this.widgetId)}clear(){this.assertNotDestroyed(),this.destroyed=!0,this._recaptchaLoader.clearedOneInstance(),this.isInvisible||this.container.childNodes.forEach((e=>{this.container.removeChild(e)}))}validateStartingState(){na(!this.parameters.sitekey,this.auth,"argument-error"),na(this.isInvisible||!this.container.hasChildNodes(),this.auth,"argument-error"),na("undefined"!=typeof document,this.auth,"operation-not-supported-in-this-environment")}makeTokenCallback(e){return t=>{if(this.tokenChangeListeners.forEach((e=>e(t))),"function"==typeof e)e(t);else if("string"==typeof e){const n=dl()[e];"function"==typeof n&&n(t)}}}assertNotDestroyed(){na(!this.destroyed,this.auth,"internal-error")}async makeRenderPromise(){if(await this.init(),!this.widgetId){let e=this.container;if(!this.isInvisible){const t=document.createElement("div");e.appendChild(t),e=t}this.widgetId=this.getAssertedRecaptcha().render(e,this.parameters)}return this.widgetId}async init(){na(ca()&&!fl(),this.auth,"internal-error"),await function(){let e=null;return new Promise((t=>{"complete"!==document.readyState?(e=()=>t(),window.addEventListener("load",e)):t()})).catch((t=>{throw e&&window.removeEventListener("load",e),t}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(),this.recaptcha=await this._recaptchaLoader.load(this.auth,this.auth.languageCode||void 0);const e=await
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function(e){return(await ma(e,"GET","/v1/recaptchaParams")).recaptchaSiteKey||""}(this.auth);na(e,this.auth,"internal-error"),this.parameters.sitekey=e}getAssertedRecaptcha(){return na(this.recaptcha,this.auth,"internal-error"),this.recaptcha}}class Rl{constructor(e,t){this.verificationId=e,this.onConfirmation=t}confirm(e){const t=cc._fromVerification(this.verificationId,e);return this.onConfirmation(t)}}async function Ol(e,t,n){var r;const s=await n.verify();try{let i;if(na("string"==typeof s,e,"argument-error"),na("recaptcha"===n.type,e,"argument-error"),i="string"==typeof t?{phoneNumber:t}:t,"session"in i){const t=i.session;if("phoneNumber"in i){na("enroll"===t.type,e,"internal-error");const n=await
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function(e,t){return ma(e,"POST","/v2/accounts/mfaEnrollment:start",ga(e,t))}(e,{idToken:t.credential,phoneEnrollmentInfo:{phoneNumber:i.phoneNumber,recaptchaToken:s}});return n.phoneSessionInfo.sessionInfo}{na("signin"===t.type,e,"internal-error");const n=(null===(r=i.multiFactorHint)||void 0===r?void 0:r.uid)||i.multiFactorUid;na(n,e,"missing-multi-factor-info");const o=await function(e,t){return ma(e,"POST","/v2/accounts/mfaSignIn:start",ga(e,t))}(e,{mfaPendingCredential:t.credential,mfaEnrollmentId:n,phoneSignInInfo:{recaptchaToken:s}});return o.phoneResponseInfo.sessionInfo}}{const{sessionInfo:t}=await async function(e,t){return ma(e,"POST","/v1/accounts:sendVerificationCode",ga(e,t))}(e,{phoneNumber:i.phoneNumber,recaptchaToken:s});return t}}finally{n._reset()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Pl{constructor(e){this.providerId=Pl.PROVIDER_ID,this.auth=Qa(e)}verifyPhoneNumber(e,t){return Ol(this.auth,e,Ei(t))}static credential(e,t){return cc._fromVerification(e,t)}static credentialFromResult(e){const t=e;return Pl.credentialFromTaggedObject(t)}static credentialFromError(e){return Pl.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:t,temporaryProof:n}=e;return t&&n?cc._fromTokenResponse(t,n):null}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Ll(e,t){return t?oa(t):(na(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Pl.PROVIDER_ID="phone",Pl.PHONE_SIGN_IN_METHOD="phone";class Ml extends ec{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return ic(e,this._buildIdpRequest())}_linkToIdToken(e,t){return ic(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return ic(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function Fl(e){return Nc(e.auth,new Ml(e),e.bypassAuthState)}function Vl(e){const{auth:t,user:n}=e;return na(n,t,"internal-error"),Cc(n,new Ml(e),e.bypassAuthState)}async function Ul(e){const{auth:t,user:n}=e;return na(n,t,"internal-error"),xc(n,new Ml(e),e.bypassAuthState)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bl{constructor(e,t,n,r,s=!1){this.auth=e,this.resolver=n,this.user=r,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise((async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(e){this.reject(e)}}))}async onAuthEvent(e){const{urlResponse:t,sessionId:n,postBody:r,tenantId:s,error:i,type:o}=e;if(i)return void this.reject(i);const a={auth:this.auth,requestUri:t,sessionId:n,tenantId:s||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(o)(a))}catch(e){this.reject(e)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Fl;case"linkViaPopup":case"linkViaRedirect":return Ul;case"reauthViaPopup":case"reauthViaRedirect":return Vl;default:Yo(this.auth,"internal-error")}}resolve(e){sa(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){sa(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jl=new ua(2e3,1e4);class ql extends Bl{constructor(e,t,n,r,s){super(e,t,r,s),this.provider=n,this.authWindow=null,this.pollId=null,ql.currentPopupAction&&ql.currentPopupAction.cancel(),ql.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return na(e,this.auth,"internal-error"),e}async onExecution(){sa(1===this.filter.length,"Popup operations only handle one event");const e=ul();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch((e=>{this.reject(e)})),this.resolver._isIframeWebStorageSupported(this.auth,(e=>{e||this.reject(Xo(this.auth,"web-storage-unsupported"))})),this.pollUserCancellation()}get eventId(){var e;return(null===(e=this.authWindow)||void 0===e?void 0:e.associatedEvent)||null}cancel(){this.reject(Xo(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ql.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,n;(null===(n=null===(t=this.authWindow)||void 0===t?void 0:t.window)||void 0===n?void 0:n.closed)?this.pollId=window.setTimeout((()=>{this.pollId=null,this.reject(Xo(this.auth,"popup-closed-by-user"))}),2e3):this.pollId=window.setTimeout(e,jl.get())};e()}}ql.currentPopupAction=null;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const $l=new Map;class zl extends Bl{constructor(e,t,n=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,n),this.eventId=null}async execute(){let e=$l.get(this.auth._key());if(!e){try{const t=await async function(e,t){const n=Hl(t),r=Wl(e);if(!await r._isAvailable())return!1;const s="true"===await r._get(n);return await r._remove(n),s}(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(t)}catch(t){e=()=>Promise.reject(t)}$l.set(this.auth._key(),e)}return this.bypassAuthState||$l.set(this.auth._key(),(()=>Promise.resolve(null))),e()}async onAuthEvent(e){if("signInViaRedirect"===e.type)return super.onAuthEvent(e);if("unknown"!==e.type){if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}else this.resolve(null)}async onExecution(){}cleanUp(){}}async function Gl(e,t){return Wl(e)._set(Hl(t),"true")}function Kl(e,t){$l.set(e._key(),t)}function Wl(e){return oa(e._redirectPersistence)}function Hl(e){return Pa("pendingRedirect",e.config.apiKey,e.name)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ql(e,t,n){return async function(e,t,n){const r=Qa(e);ea(e,t,hc);const s=Ll(r,n);return await Gl(s,r),s._openRedirect(r,t,"signInViaRedirect")}(e,t,n)}function Jl(e,t,n){return async function(e,t,n){const r=Ei(e);ea(r.auth,t,hc);const s=Ll(r.auth,n);await Gl(s,r.auth);const i=await Zl(r);return s._openRedirect(r.auth,t,"reauthViaRedirect",i)}(e,t,n)}function Yl(e,t,n){return async function(e,t,n){const r=Ei(e);ea(r.auth,t,hc);const s=Ll(r.auth,n);await Ac(!1,r,t.providerId),await Gl(s,r.auth);const i=await Zl(r);return s._openRedirect(r.auth,t,"linkViaRedirect",i)}(e,t,n)}async function Xl(e,t,n=!1){const r=Qa(e),s=Ll(r,t),i=new zl(r,s,n),o=await i.execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,t)),o}async function Zl(e){const t=ul(`${e.uid}:::`);return e._redirectEventId=t,await e.auth._setRedirectUser(e),await e.auth._persistUserIfCurrent(e),t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eu{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach((n=>{this.isEventForConsumer(e,n)&&(t=!0,this.sendToConsumer(e,n),this.saveEventToCache(e))})),this.hasHandledPotentialRedirect||!function(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return nu(e);default:return!1}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var n;if(e.error&&!nu(e)){const r=(null===(n=e.error.code)||void 0===n?void 0:n.split("auth/")[1])||"internal-error";t.onError(Xo(this.auth,r))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const n=null===t.eventId||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&n}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=6e5&&this.cachedEventUids.clear(),this.cachedEventUids.has(tu(e))}saveEventToCache(e){this.cachedEventUids.add(tu(e)),this.lastProcessedEventTime=Date.now()}}function tu(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter((e=>e)).join("-")}function nu({type:e,error:t}){return"unknown"===e&&"auth/no-auth-event"===(null==t?void 0:t.code)}async function ru(e,t={}){return ma(e,"GET","/v1/projects",t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const su=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,iu=/^https?/;function ou(e){const t=aa(),{protocol:n,hostname:r}=new URL(t);if(e.startsWith("chrome-extension://")){const s=new URL(e);return""===s.hostname&&""===r?"chrome-extension:"===n&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):"chrome-extension:"===n&&s.hostname===r}if(!iu.test(n))return!1;if(su.test(e))return r===e;const s=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const au=new ua(3e4,6e4);function cu(){const e=dl().___jsl;if(null==e?void 0:e.H)for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let t=0;t<e.CP.length;t++)e.CP[t]=null}let lu=null;function uu(e){return lu=lu||function(e){return new Promise(((t,n)=>{var r,s,i;function o(){cu(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{cu(),n(Xo(e,"network-request-failed"))},timeout:au.get()})}if(null===(s=null===(r=dl().gapi)||void 0===r?void 0:r.iframes)||void 0===s?void 0:s.Iframe)t(gapi.iframes.getContext());else{if(!(null===(i=dl().gapi)||void 0===i?void 0:i.load)){const t=kl("iframefcb");return dl()[t]=()=>{gapi.load?o():n(Xo(e,"network-request-failed"))},Il(`https://apis.google.com/js/api.js?onload=${t}`).catch((e=>n(e)))}o()}})).catch((e=>{throw lu=null,e}))}(e),lu}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hu=new ua(5e3,15e3),du={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},fu=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function pu(e){const t=e.config;na(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?ha(t,"emulator/auth/iframe"):`https://${e.config.authDomain}/__/auth/iframe`,r={apiKey:t.apiKey,appName:e.name,v:"9.8.4"},s=fu.get(e.config.apiHost);s&&(r.eid=s);const i=e._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${wi(r).slice(1)}`}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const gu={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"};class mu{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch(e){}}}function yu(e,t,n,r=500,s=600){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const c=Object.assign(Object.assign({},gu),{width:r.toString(),height:s.toString(),top:i,left:o}),l=oi().toLowerCase();n&&(a=Ua(l)?"_blank":n),Fa(l)&&(t=t||"http://localhost",c.scrollbars="yes");const u=Object.entries(c).reduce(((e,[t,n])=>`${e}${t}=${n},`),"");if(function(e=oi()){var t;return za(e)&&!!(null===(t=window.navigator)||void 0===t?void 0:t.standalone)}(l)&&"_self"!==a)return function(e,t){const n=document.createElement("a");n.href=e,n.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t||"",a),new mu(null);const h=window.open(t||"",a,u);na(h,e,"popup-blocked");try{h.focus()}catch(e){}return new mu(h)}function vu(e,t,n,r,s,i){na(e.config.authDomain,e,"auth-domain-config-required"),na(e.config.apiKey,e,"invalid-api-key");const o={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:r,v:"9.8.4",eventId:s};if(t instanceof hc){t.setDefaultLanguage(e.languageCode),o.providerId=t.providerId||"",function(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}(t.getCustomParameters())||(o.customParameters=JSON.stringify(t.getCustomParameters()));for(const[e,t]of Object.entries(i||{}))o[e]=t}if(t instanceof dc){const e=t.getScopes().filter((e=>""!==e));e.length>0&&(o.scopes=e.join(","))}e.tenantId&&(o.tid=e.tenantId);const a=o;for(const e of Object.keys(a))void 0===a[e]&&delete a[e];return`${function({config:e}){if(!e.emulator)return`https://${e.authDomain}/__/auth/handler`;return ha(e,"emulator/auth/handler")}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e)}?${wi(a).slice(1)}`}const wu=class{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=cl,this._completeRedirectFn=Xl,this._overrideRedirectResult=Kl}async _openPopup(e,t,n,r){var s;sa(null===(s=this.eventManagers[e._key()])||void 0===s?void 0:s.manager,"_initialize() not called before _openPopup()");return yu(e,vu(e,t,n,aa(),r),ul())}async _openRedirect(e,t,n,r){var s;return await this._originValidation(e),s=vu(e,t,n,aa(),r),dl().location.href=s,new Promise((()=>{}))}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:e,promise:n}=this.eventManagers[t];return e?Promise.resolve(e):(sa(n,"If manager is not set, promise should be"),n)}const n=this.initAndGetManager(e);return this.eventManagers[t]={promise:n},n.catch((()=>{delete this.eventManagers[t]})),n}async initAndGetManager(e){const t=await async function(e){const t=await uu(e),n=dl().gapi;return na(n,e,"internal-error"),t.open({where:document.body,url:pu(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:du,dontclear:!0},(t=>new Promise((async(n,r)=>{await t.restyle({setHideOnLeave:!1});const s=Xo(e,"network-request-failed"),i=dl().setTimeout((()=>{r(s)}),hu.get());function o(){dl().clearTimeout(i),n(t)}t.ping(o).then(o,(()=>{r(s)}))}))))}(e),n=new eu(e);return t.register("authEvent",(t=>{na(null==t?void 0:t.authEvent,e,"invalid-auth-event");return{status:n.onEvent(t.authEvent)?"ACK":"ERROR"}}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:n},this.iframes[e._key()]=t,n}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send("webStorageSupport",{type:"webStorageSupport"},(n=>{var r;const s=null===(r=null==n?void 0:n[0])||void 0===r?void 0:r.webStorageSupport;void 0!==s&&t(!!s),Yo(e,"internal-error")}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=async function(e){if(e.config.emulator)return;const{authorizedDomains:t}=await ru(e);for(const e of t)try{if(ou(e))return}catch(e){}Yo(e,"unauthorized-domain")}(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Ga()||Va()||za()}};class bu extends class{constructor(e){this.factorId=e}_process(e,t,n){switch(t.type){case"enroll":return this._finalizeEnroll(e,t.credential,n);case"signin":return this._finalizeSignIn(e,t.credential);default:return ra("unexpected MultiFactorSessionType")}}}{constructor(e){super("phone"),this.credential=e}static _fromCredential(e){return new bu(e)}_finalizeEnroll(e,t,n){return function(e,t){return ma(e,"POST","/v2/accounts/mfaEnrollment:finalize",ga(e,t))}(e,{idToken:t,displayName:n,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(e,t){return function(e,t){return ma(e,"POST","/v2/accounts/mfaSignIn:finalize",ga(e,t))}(e,{mfaPendingCredential:t,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class _u{constructor(){}static assertion(e){return bu._fromCredential(e)}}_u.FACTOR_ID="phone";var Iu;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ku{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),(null===(e=this.auth.currentUser)||void 0===e?void 0:e.uid)||null}async getToken(e){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;return{accessToken:await this.auth.currentUser.getIdToken(e)}}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged((t=>{var n;e((null===(n=t)||void 0===n?void 0:n.stsTokenManager.accessToken)||null)}));this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){na(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Tu(){return window}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Iu="Browser",ao(new Si("auth",((e,{options:t})=>{const n=e.getProvider("app").getImmediate(),r=e.getProvider("heartbeat"),{apiKey:s,authDomain:i}=n.options;return((e,n)=>{na(s&&!s.includes(":"),"invalid-api-key",{appName:e.name}),na(!(null==i?void 0:i.includes(":")),"argument-error",{appName:e.name});const r={apiKey:s,authDomain:i,clientPlatform:Iu,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Ka(Iu)},o=new Ha(e,n,r);return function(e,t){const n=(null==t?void 0:t.persistence)||[],r=(Array.isArray(n)?n:[n]).map(oa);(null==t?void 0:t.errorMap)&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,null==t?void 0:t.popupRedirectResolver)}(o,t),o})(n,r)}),"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback(((e,t,n)=>{e.getProvider("auth-internal").initialize()}))),ao(new Si("auth-internal",(e=>{const t=Qa(e.getProvider("auth").getImmediate());return new ku(t)}),"PRIVATE").setInstantiationMode("EXPLICIT")),po("@firebase/auth","0.20.4",function(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}(Iu)),po("@firebase/auth","0.20.4","esm2017");async function Eu(e,t,n){var r;const{BuildInfo:s}=Tu();sa(t.sessionId,"AuthEvent did not contain a session ID");const i=await async function(e){const t=function(e){if(sa(/[0-9a-zA-Z]+/.test(e),"Can only convert alpha-numeric strings"),"undefined"!=typeof TextEncoder)return(new TextEncoder).encode(e);const t=new ArrayBuffer(e.length),n=new Uint8Array(t);for(let t=0;t<e.length;t++)n[t]=e.charCodeAt(t);return n}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e),n=await crypto.subtle.digest("SHA-256",t);return Array.from(new Uint8Array(n)).map((e=>e.toString(16).padStart(2,"0"))).join("")}(t.sessionId),o={};return za()?o.ibi=s.packageName:ja()?o.apn=s.packageName:Yo(e,"operation-not-supported-in-this-environment"),s.displayName&&(o.appDisplayName=s.displayName),o.sessionId=i,vu(e,n,t.type,void 0,null!==(r=t.eventId)&&void 0!==r?r:void 0,o)}function Su(e){const{cordova:t}=Tu();return new Promise((n=>{t.plugins.browsertab.isAvailable((r=>{let s=null;r?t.plugins.browsertab.openUrl(e):s=t.InAppBrowser.open(e,function(e=oi()){return/(iPad|iPhone|iPod).*OS 7_\d/i.test(e)||/(iPad|iPhone|iPod).*OS 8_\d/i.test(e)}()?"_blank":"_system","location=yes"),n(s)}))}))}class xu extends eu{constructor(){super(...arguments),this.passiveListeners=new Set,this.initPromise=new Promise((e=>{this.resolveInialized=e}))}addPassiveListener(e){this.passiveListeners.add(e)}removePassiveListener(e){this.passiveListeners.delete(e)}resetRedirect(){this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1}onEvent(e){return this.resolveInialized(),this.passiveListeners.forEach((t=>t(e))),super.onEvent(e)}async initialized(){await this.initPromise}}async function Au(e){const t=await Du()._get(Ru(e));return t&&await Du()._remove(Ru(e)),t}function Cu(e,t){var n,r;const s=function(e){const t=Ou(e),n=t.link?decodeURIComponent(t.link):void 0,r=Ou(n).link,s=t.deep_link_id?decodeURIComponent(t.deep_link_id):void 0;return Ou(s).link||s||r||n||e}(t);if(s.includes("/__/auth/callback")){const t=Ou(s),i=t.firebaseError?function(e){try{return JSON.parse(e)}catch(e){return null}}(decodeURIComponent(t.firebaseError)):null,o=null===(r=null===(n=null==i?void 0:i.code)||void 0===n?void 0:n.split("auth/"))||void 0===r?void 0:r[1],a=o?Xo(o):null;return a?{type:e.type,eventId:e.eventId,tenantId:e.tenantId,error:a,urlResponse:null,sessionId:null,postBody:null}:{type:e.type,eventId:e.eventId,tenantId:e.tenantId,sessionId:e.sessionId,urlResponse:s,postBody:null}}return null}function Nu(){const e=[],t="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let n=0;n<20;n++){const n=Math.floor(Math.random()*t.length);e.push(t.charAt(n))}return e.join("")}function Du(){return oa(ol)}function Ru(e){return Pa("authEvent",e.config.apiKey,e.name)}function Ou(e){if(!(null==e?void 0:e.includes("?")))return{};const[t,...n]=e.split("?");return bi(n.join("?"))}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pu=class{constructor(){this._redirectPersistence=cl,this._shouldInitProactively=!0,this.eventManagers=new Map,this.originValidationPromises={},this._completeRedirectFn=Xl,this._overrideRedirectResult=Kl}async _initialize(e){const t=e._key();let n=this.eventManagers.get(t);return n||(n=new xu(e),this.eventManagers.set(t,n),this.attachCallbackListeners(e,n)),n}_openPopup(e){Yo(e,"operation-not-supported-in-this-environment")}async _openRedirect(e,t,n,r){!function(e){var t,n,r,s,i,o,a,c,l,u;const h=Tu();na("function"==typeof(null===(t=null==h?void 0:h.universalLinks)||void 0===t?void 0:t.subscribe),e,"invalid-cordova-configuration",{missingPlugin:"cordova-universal-links-plugin-fix"}),na(void 0!==(null===(n=null==h?void 0:h.BuildInfo)||void 0===n?void 0:n.packageName),e,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-buildInfo"}),na("function"==typeof(null===(i=null===(s=null===(r=null==h?void 0:h.cordova)||void 0===r?void 0:r.plugins)||void 0===s?void 0:s.browsertab)||void 0===i?void 0:i.openUrl),e,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),na("function"==typeof(null===(c=null===(a=null===(o=null==h?void 0:h.cordova)||void 0===o?void 0:o.plugins)||void 0===a?void 0:a.browsertab)||void 0===c?void 0:c.isAvailable),e,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),na("function"==typeof(null===(u=null===(l=null==h?void 0:h.cordova)||void 0===l?void 0:l.InAppBrowser)||void 0===u?void 0:u.open),e,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-inappbrowser"})}(e);const s=await this._initialize(e);await s.initialized(),s.resetRedirect(),$l.clear(),await this._originValidation(e);const i=function(e,t,n=null){return{type:t,eventId:n,urlResponse:null,sessionId:Nu(),postBody:null,tenantId:e.tenantId,error:Xo(e,"no-auth-event")}}(e,n,r);await function(e,t){return Du()._set(Ru(e),t)}(e,i);const o=await Eu(e,i,t);return async function(e,t,n){const{cordova:r}=Tu();let s=()=>{};try{await new Promise(((i,o)=>{let a=null;function c(){var e;i();const t=null===(e=r.plugins.browsertab)||void 0===e?void 0:e.close;"function"==typeof t&&t(),"function"==typeof(null==n?void 0:n.close)&&n.close()}function l(){a||(a=window.setTimeout((()=>{o(Xo(e,"redirect-cancelled-by-user"))}),2e3))}function u(){"visible"===(null===document||void 0===document?void 0:document.visibilityState)&&l()}t.addPassiveListener(c),document.addEventListener("resume",l,!1),ja()&&document.addEventListener("visibilitychange",u,!1),s=()=>{t.removePassiveListener(c),document.removeEventListener("resume",l,!1),document.removeEventListener("visibilitychange",u,!1),a&&window.clearTimeout(a)}}))}finally{s()}}(e,s,await Su(o))}_isIframeWebStorageSupported(e,t){throw new Error("Method not implemented.")}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=async function(e){const{BuildInfo:t}=Tu(),n={};za()?n.iosBundleId=t.packageName:ja()?n.androidPackageName=t.packageName:Yo(e,"operation-not-supported-in-this-environment"),await ru(e,n)}(e)),this.originValidationPromises[t]}attachCallbackListeners(e,t){const{universalLinks:n,handleOpenURL:r,BuildInfo:s}=Tu(),i=setTimeout((async()=>{await Au(e),t.onEvent(Lu())}),500),o=async n=>{clearTimeout(i);const r=await Au(e);let s=null;r&&(null==n?void 0:n.url)&&(s=Cu(r,n.url)),t.onEvent(s||Lu())};void 0!==n&&"function"==typeof n.subscribe&&n.subscribe(null,o);const a=r,c=`${s.packageName.toLowerCase()}://`;Tu().handleOpenURL=async e=>{if(e.toLowerCase().startsWith(c)&&o({url:e}),"function"==typeof a)try{a(e)}catch(e){console.error(e)}}}};function Lu(){return{type:"unknown",eventId:null,sessionId:null,urlResponse:null,postBody:null,tenantId:null,error:Xo("no-auth-event")}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mu(){var e;return(null===(e=null===self||void 0===self?void 0:self.location)||void 0===e?void 0:e.protocol)||null}function Fu(e=oi()){return!("file:"!==Mu()&&"ionic:"!==Mu()&&"capacitor:"!==Mu()||!e.toLowerCase().match(/iphone|ipad|ipod|android/))}function Vu(e=oi()){return hi()&&11===(null===document||void 0===document?void 0:document.documentMode)||function(e=oi()){return/Edge\/\d+/.test(e)}(e)}function Uu(){try{const e=self.localStorage,t=ul();if(e)return e.setItem(t,"1"),e.removeItem(t),!Vu()||di()}catch(e){return Bu()&&di()}return!1}function Bu(){return"undefined"!=typeof global&&"WorkerGlobalScope"in global&&"importScripts"in global}function ju(){return("http:"===Mu()||"https:"===Mu()||li()||Fu())&&!(ui()||ci())&&Uu()&&!Bu()}function qu(){return Fu()&&"undefined"!=typeof document}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const $u={LOCAL:"local",NONE:"none",SESSION:"session"},zu=na;async function Gu(e){await e._initializationPromise;const t=Ku(),n=Pa("persistence",e.config.apiKey,e.name);t&&t.setItem(n,e._getPersistence())}function Ku(){var e;try{return(null===(e="undefined"!=typeof window?window:null)||void 0===e?void 0:e.sessionStorage)||null}catch(e){return null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wu=na;class Hu{constructor(){this.browserResolver=oa(wu),this.cordovaResolver=oa(Pu),this.underlyingResolver=null,this._redirectPersistence=cl,this._completeRedirectFn=Xl,this._overrideRedirectResult=Kl}async _initialize(e){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._initialize(e)}async _openPopup(e,t,n,r){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openPopup(e,t,n,r)}async _openRedirect(e,t,n,r){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openRedirect(e,t,n,r)}_isIframeWebStorageSupported(e,t){this.assertedUnderlyingResolver._isIframeWebStorageSupported(e,t)}_originValidation(e){return this.assertedUnderlyingResolver._originValidation(e)}get _shouldInitProactively(){return qu()||this.browserResolver._shouldInitProactively}get assertedUnderlyingResolver(){return Wu(this.underlyingResolver,"internal-error"),this.underlyingResolver}async selectUnderlyingResolver(){if(this.underlyingResolver)return;const e=await async function(){return!!qu()&&new Promise((e=>{const t=setTimeout((()=>{e(!1)}),1e3);document.addEventListener("deviceready",(()=>{clearTimeout(t),e(!0)}))}))}();this.underlyingResolver=e?this.cordovaResolver:this.browserResolver}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qu(e){return e.unwrap()}function Ju(e,t){var n,r;const s=null===(n=t.customData)||void 0===n?void 0:n._tokenResponse;if("auth/multi-factor-auth-required"===(null===(r=t)||void 0===r?void 0:r.code)){t.resolver=new eh(e,function(e,t){var n;const r=Ei(e),s=t;return na(t.customData.operationType,r,"argument-error"),na(null===(n=s.customData._serverResponse)||void 0===n?void 0:n.mfaPendingCredential,r,"argument-error"),tl._fromError(r,s)}(e,t))}else if(s){const e=Yu(t),n=t;e&&(n.credential=e,n.tenantId=s.tenantId||void 0,n.email=s.email||void 0,n.phoneNumber=s.phoneNumber||void 0)}}function Yu(e){const{_tokenResponse:t}=e instanceof fi?e.customData:e;if(!t)return null;if(!(e instanceof fi)&&"temporaryProof"in t&&"phoneNumber"in t)return Pl.credentialFromResult(e);const n=t.providerId;if(!n||n===Fo)return null;let r;switch(n){case Mo:r=gc;break;case Po:r=pc;break;case Lo:r=mc;break;case Vo:r=wc;break;default:const{oauthIdToken:e,oauthAccessToken:s,oauthTokenSecret:i,pendingToken:o,nonce:a}=t;return s||i||e||o?o?n.startsWith("saml.")?yc._create(n,o):oc._fromParams({providerId:n,signInMethod:n,pendingToken:o,idToken:e,accessToken:s}):new fc(n).credential({idToken:e,accessToken:s,rawNonce:a}):null}return e instanceof fi?r.credentialFromError(e):r.credentialFromResult(e)}function Xu(e,t){return t.catch((t=>{throw t instanceof fi&&Ju(e,t),t})).then((e=>{const t=e.operationType,n=e.user;return{operationType:t,credential:(r=e,Yu(r)),additionalUserInfo:Zc(e),user:th.getOrCreate(n)};
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var r}))}async function Zu(e,t){const n=await t;return{verificationId:n.verificationId,confirm:t=>Xu(e,n.confirm(t))}}class eh{constructor(e,t){this.resolver=t,this.auth=e.wrapped()}get session(){return this.resolver.session}get hints(){return this.resolver.hints}resolveSignIn(e){return Xu(Qu(this.auth),this.resolver.resolveSignIn(e))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class th{constructor(e){this._delegate=e,this.multiFactor=function(e){const t=Ei(e);return rl.has(t)||rl.set(t,nl._fromUser(t)),rl.get(t)}(e)}static getOrCreate(e){return th.USER_MAP.has(e)||th.USER_MAP.set(e,new th(e)),th.USER_MAP.get(e)}delete(){return this._delegate.delete()}reload(){return this._delegate.reload()}toJSON(){return this._delegate.toJSON()}getIdTokenResult(e){return this._delegate.getIdTokenResult(e)}getIdToken(e){return this._delegate.getIdToken(e)}linkAndRetrieveDataWithCredential(e){return this.linkWithCredential(e)}async linkWithCredential(e){return Xu(this.auth,Rc(this._delegate,e))}async linkWithPhoneNumber(e,t){return Zu(this.auth,async function(e,t,n){const r=Ei(e);await Ac(!1,r,"phone");const s=await Ol(r.auth,t,Ei(n));return new Rl(s,(e=>Rc(r,e)))}(this._delegate,e,t))}async linkWithPopup(e){return Xu(this.auth,async function(e,t,n){const r=Ei(e);ea(r.auth,t,hc);const s=Ll(r.auth,n);return new ql(r.auth,"linkViaPopup",t,s,r).executeNotNull()}(this._delegate,e,Hu))}async linkWithRedirect(e){return await Gu(Qa(this.auth)),Yl(this._delegate,e,Hu)}reauthenticateAndRetrieveDataWithCredential(e){return this.reauthenticateWithCredential(e)}async reauthenticateWithCredential(e){return Xu(this.auth,Oc(this._delegate,e))}reauthenticateWithPhoneNumber(e,t){return Zu(this.auth,async function(e,t,n){const r=Ei(e),s=await Ol(r.auth,t,Ei(n));return new Rl(s,(e=>Oc(r,e)))}(this._delegate,e,t))}reauthenticateWithPopup(e){return Xu(this.auth,async function(e,t,n){const r=Ei(e);ea(r.auth,t,hc);const s=Ll(r.auth,n);return new ql(r.auth,"reauthViaPopup",t,s,r).executeNotNull()}(this._delegate,e,Hu))}async reauthenticateWithRedirect(e){return await Gu(Qa(this.auth)),Jl(this._delegate,e,Hu)}sendEmailVerification(e){return $c(this._delegate,e)}async unlink(e){return await Sc(this._delegate,e),this}updateEmail(e){return function(e,t){return Kc(Ei(e),t,null)}(this._delegate,e)}updatePassword(e){return function(e,t){return Kc(Ei(e),null,t)}(this._delegate,e)}updatePhoneNumber(e){return async function(e,t){await xc(Ei(e),t)}(this._delegate,e)}updateProfile(e){return Gc(this._delegate,e)}verifyBeforeUpdateEmail(e,t){return zc(this._delegate,e,t)}get emailVerified(){return this._delegate.emailVerified}get isAnonymous(){return this._delegate.isAnonymous}get metadata(){return this._delegate.metadata}get phoneNumber(){return this._delegate.phoneNumber}get providerData(){return this._delegate.providerData}get refreshToken(){return this._delegate.refreshToken}get tenantId(){return this._delegate.tenantId}get displayName(){return this._delegate.displayName}get email(){return this._delegate.email}get photoURL(){return this._delegate.photoURL}get providerId(){return this._delegate.providerId}get uid(){return this._delegate.uid}get auth(){return this._delegate.auth}}th.USER_MAP=new WeakMap;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const nh=na;class rh{constructor(e,t){if(this.app=e,t.isInitialized())return this._delegate=t.getImmediate(),void this.linkUnderlyingAuth();const{apiKey:n}=e.options;nh(n,"invalid-api-key",{appName:e.name}),nh(n,"invalid-api-key",{appName:e.name});const r="undefined"!=typeof window?Hu:void 0;this._delegate=t.initialize({options:{persistence:ih(n,e.name),popupRedirectResolver:r}}),this._delegate._updateErrorMap(Ko),this.linkUnderlyingAuth()}get emulatorConfig(){return this._delegate.emulatorConfig}get currentUser(){return this._delegate.currentUser?th.getOrCreate(this._delegate.currentUser):null}get languageCode(){return this._delegate.languageCode}set languageCode(e){this._delegate.languageCode=e}get settings(){return this._delegate.settings}get tenantId(){return this._delegate.tenantId}set tenantId(e){this._delegate.tenantId=e}useDeviceLanguage(){this._delegate.useDeviceLanguage()}signOut(){return this._delegate.signOut()}useEmulator(e,t){Ya(this._delegate,e,t)}applyActionCode(e){return Uc(this._delegate,e)}checkActionCode(e){return Bc(this._delegate,e)}confirmPasswordReset(e,t){return async function(e,t,n){await tc(Ei(e),{oobCode:t,newPassword:n})}(this._delegate,e,t)}async createUserWithEmailAndPassword(e,t){return Xu(this._delegate,async function(e,t,n){const r=Qa(e),s=await bc(r,{returnSecureToken:!0,email:t,password:n}),i=await _c._fromIdTokenResponse(r,"signIn",s);return await r._updateCurrentUser(i.user),i}(this._delegate,e,t))}fetchProvidersForEmail(e){return this.fetchSignInMethodsForEmail(e)}fetchSignInMethodsForEmail(e){return qc(this._delegate,e)}isSignInWithEmailLink(e){return function(e,t){const n=lc.parseLink(t);return"EMAIL_SIGNIN"===(null==n?void 0:n.operation)}(this._delegate,e)}async getRedirectResult(){nh(ju(),this._delegate,"operation-not-supported-in-this-environment");const e=await async function(e,t){return await Qa(e)._initializationPromise,Xl(e,t,!1)}(this._delegate,Hu);return e?Xu(this._delegate,Promise.resolve(e)):{credential:null,user:null}}addFrameworkForLogging(e){!function(e,t){Qa(e)._logFramework(t)}(this._delegate,e)}onAuthStateChanged(e,t,n){const{next:r,error:s,complete:i}=sh(e,t,n);return this._delegate.onAuthStateChanged(r,s,i)}onIdTokenChanged(e,t,n){const{next:r,error:s,complete:i}=sh(e,t,n);return this._delegate.onIdTokenChanged(r,s,i)}sendSignInLinkToEmail(e,t){return jc(this._delegate,e,t)}sendPasswordResetEmail(e,t){return Vc(this._delegate,e,t||void 0)}async setPersistence(e){let t;switch(function(e,t){zu(Object.values($u).includes(t),e,"invalid-persistence-type"),ui()?zu(t!==$u.SESSION,e,"unsupported-persistence-type"):ci()?zu(t===$u.NONE,e,"unsupported-persistence-type"):Bu()?zu(t===$u.NONE||t===$u.LOCAL&&di(),e,"unsupported-persistence-type"):zu(t===$u.NONE||Uu(),e,"unsupported-persistence-type")}(this._delegate,e),e){case $u.SESSION:t=cl;break;case $u.LOCAL:t=await oa(_l)._isAvailable()?_l:ol;break;case $u.NONE:t=Oa;break;default:return Yo("argument-error",{appName:this._delegate.name})}return this._delegate.setPersistence(t)}signInAndRetrieveDataWithCredential(e){return this.signInWithCredential(e)}signInAnonymously(){return Xu(this._delegate,async function(e){var t;const n=Qa(e);if(await n._initializationPromise,null===(t=n.currentUser)||void 0===t?void 0:t.isAnonymous)return new _c({user:n.currentUser,providerId:null,operationType:"signIn"});const r=await bc(n,{returnSecureToken:!0}),s=await _c._fromIdTokenResponse(n,"signIn",r,!0);return await n._updateCurrentUser(s.user),s}(this._delegate))}signInWithCredential(e){return Xu(this._delegate,Dc(this._delegate,e))}signInWithCustomToken(e){return Xu(this._delegate,Pc(this._delegate,e))}signInWithEmailAndPassword(e,t){return Xu(this._delegate,function(e,t,n){return Dc(Ei(e),uc.credential(t,n))}(this._delegate,e,t))}signInWithEmailLink(e,t){return Xu(this._delegate,async function(e,t,n){const r=Ei(e),s=uc.credentialWithLink(t,n||aa());return na(s._tenantId===(r.tenantId||null),r,"tenant-id-mismatch"),Dc(r,s)}(this._delegate,e,t))}signInWithPhoneNumber(e,t){return Zu(this._delegate,async function(e,t,n){const r=Qa(e),s=await Ol(r,t,Ei(n));return new Rl(s,(e=>Dc(r,e)))}(this._delegate,e,t))}async signInWithPopup(e){return nh(ju(),this._delegate,"operation-not-supported-in-this-environment"),Xu(this._delegate,async function(e,t,n){const r=Qa(e);ea(e,t,hc);const s=Ll(r,n);return new ql(r,"signInViaPopup",t,s).executeNotNull()}(this._delegate,e,Hu))}async signInWithRedirect(e){return nh(ju(),this._delegate,"operation-not-supported-in-this-environment"),await Gu(this._delegate),Ql(this._delegate,e,Hu)}updateCurrentUser(e){return this._delegate.updateCurrentUser(e)}verifyPasswordResetCode(e){return async function(e,t){const{data:n}=await Bc(Ei(e),t);return n.email}(this._delegate,e)}unwrap(){return this._delegate}_delete(){return this._delegate._delete()}linkUnderlyingAuth(){this._delegate.wrapped=()=>this}}function sh(e,t,n){let r=e;"function"!=typeof e&&({next:r,error:t,complete:n}=e);const s=r;return{next:e=>s(e&&th.getOrCreate(e)),error:t,complete:n}}function ih(e,t){const n=function(e,t){const n=Ku();if(!n)return[];const r=Pa("persistence",e,t);switch(n.getItem(r)){case $u.NONE:return[Oa];case $u.LOCAL:return[_l,cl];case $u.SESSION:return[cl];default:return[]}}(e,t);if("undefined"==typeof self||n.includes(_l)||n.push(_l),"undefined"!=typeof window)for(const e of[ol,cl])n.includes(e)||n.push(e);return n.includes(Oa)||n.push(Oa),n}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */rh.Persistence=$u;class oh{constructor(){this.providerId="phone",this._delegate=new Pl(Qu(Ro.auth()))}static credential(e,t){return Pl.credential(e,t)}verifyPhoneNumber(e,t){return this._delegate.verifyPhoneNumber(e,t)}unwrap(){return this._delegate}}oh.PHONE_SIGN_IN_METHOD=Pl.PHONE_SIGN_IN_METHOD,oh.PROVIDER_ID=Pl.PROVIDER_ID;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const ah=na;class ch{constructor(e,t,n=Ro.app()){var r;ah(null===(r=n.options)||void 0===r?void 0:r.apiKey,"invalid-api-key",{appName:n.name}),this._delegate=new Dl(e,t,n.auth()),this.type=this._delegate.type}clear(){this._delegate.clear()}render(){return this._delegate.render()}verify(){return this._delegate.verify()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var lh;(lh=Ro).INTERNAL.registerComponent(new Si("auth-compat",(e=>{const t=e.getProvider("app-compat").getImmediate(),n=e.getProvider("auth");return new rh(t,n)}),"PUBLIC").setServiceProps({ActionCodeInfo:{Operation:{EMAIL_SIGNIN:Uo,PASSWORD_RESET:Bo,RECOVER_EMAIL:jo,REVERT_SECOND_FACTOR_ADDITION:qo,VERIFY_AND_CHANGE_EMAIL:$o,VERIFY_EMAIL:zo}},EmailAuthProvider:uc,FacebookAuthProvider:pc,GithubAuthProvider:mc,GoogleAuthProvider:gc,OAuthProvider:fc,SAMLAuthProvider:vc,PhoneAuthProvider:oh,PhoneMultiFactorGenerator:_u,RecaptchaVerifier:ch,TwitterAuthProvider:wc,Auth:rh,AuthCredential:ec,Error:fi}).setInstantiationMode("LAZY").setMultipleInstances(!1)),lh.registerVersion("@firebase/auth-compat","0.2.17");var uh,hh="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},dh=dh||{},fh=hh||self;function ph(){}function gh(e){var t=typeof e;return"array"==(t="object"!=t?t:e?Array.isArray(e)?"array":t:"null")||"object"==t&&"number"==typeof e.length}function mh(e){var t=typeof e;return"object"==t&&null!=e||"function"==t}var yh="closure_uid_"+(1e9*Math.random()>>>0),vh=0;function wh(e,t,n){return e.call.apply(e.bind,arguments)}function bh(e,t,n){if(!e)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,r),e.apply(t,n)}}return function(){return e.apply(t,arguments)}}function _h(e,t,n){return(_h=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?wh:bh).apply(null,arguments)}function Ih(e,t){var n=Array.prototype.slice.call(arguments,1);return function(){var t=n.slice();return t.push.apply(t,arguments),e.apply(this,t)}}function kh(e,t){function n(){}n.prototype=t.prototype,e.Z=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.Vb=function(e,n,r){for(var s=Array(arguments.length-2),i=2;i<arguments.length;i++)s[i-2]=arguments[i];return t.prototype[n].apply(e,s)}}function Th(){this.s=this.s,this.o=this.o}Th.prototype.s=!1,Th.prototype.na=function(){var e;!this.s&&(this.s=!0,this.M(),0)&&(e=this,Object.prototype.hasOwnProperty.call(e,yh)&&e[yh]||(e[yh]=++vh))},Th.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const Eh=Array.prototype.indexOf?function(e,t){return Array.prototype.indexOf.call(e,t,void 0)}:function(e,t){if("string"==typeof e)return"string"!=typeof t||1!=t.length?-1:e.indexOf(t,0);for(let n=0;n<e.length;n++)if(n in e&&e[n]===t)return n;return-1},Sh=Array.prototype.forEach?function(e,t,n){Array.prototype.forEach.call(e,t,n)}:function(e,t,n){const r=e.length,s="string"==typeof e?e.split(""):e;for(let i=0;i<r;i++)i in s&&t.call(n,s[i],i,e)};function xh(e){return Array.prototype.concat.apply([],arguments)}function Ah(e){const t=e.length;if(0<t){const n=Array(t);for(let r=0;r<t;r++)n[r]=e[r];return n}return[]}function Ch(e){return/^[\s\xa0]*$/.test(e)}var Nh,Dh=String.prototype.trim?function(e){return e.trim()}:function(e){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(e)[1]};function Rh(e,t){return-1!=e.indexOf(t)}function Oh(e,t){return e<t?-1:e>t?1:0}e:{var Ph=fh.navigator;if(Ph){var Lh=Ph.userAgent;if(Lh){Nh=Lh;break e}}Nh=""}function Mh(e,t,n){for(const r in e)t.call(n,e[r],r,e)}function Fh(e){const t={};for(const n in e)t[n]=e[n];return t}var Vh="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Uh(e,t){let n,r;for(let t=1;t<arguments.length;t++){for(n in r=arguments[t],r)e[n]=r[n];for(let t=0;t<Vh.length;t++)n=Vh[t],Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}}function Bh(e){return Bh[" "](e),e}Bh[" "]=ph;var jh,qh,$h=Rh(Nh,"Opera"),zh=Rh(Nh,"Trident")||Rh(Nh,"MSIE"),Gh=Rh(Nh,"Edge"),Kh=Gh||zh,Wh=Rh(Nh,"Gecko")&&!(Rh(Nh.toLowerCase(),"webkit")&&!Rh(Nh,"Edge"))&&!(Rh(Nh,"Trident")||Rh(Nh,"MSIE"))&&!Rh(Nh,"Edge"),Hh=Rh(Nh.toLowerCase(),"webkit")&&!Rh(Nh,"Edge");function Qh(){var e=fh.document;return e?e.documentMode:void 0}e:{var Jh="",Yh=(qh=Nh,Wh?/rv:([^\);]+)(\)|;)/.exec(qh):Gh?/Edge\/([\d\.]+)/.exec(qh):zh?/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(qh):Hh?/WebKit\/(\S+)/.exec(qh):$h?/(?:Version)[ \/]?(\S+)/.exec(qh):void 0);if(Yh&&(Jh=Yh?Yh[1]:""),zh){var Xh=Qh();if(null!=Xh&&Xh>parseFloat(Jh)){jh=String(Xh);break e}}jh=Jh}var Zh,ed={};function td(){return function(e){var t=ed;return Object.prototype.hasOwnProperty.call(t,9)?t[9]:t[9]=e(9)}((function(){let e=0;const t=Dh(String(jh)).split("."),n=Dh("9").split("."),r=Math.max(t.length,n.length);for(let o=0;0==e&&o<r;o++){var s=t[o]||"",i=n[o]||"";do{if(s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],0==s[0].length&&0==i[0].length)break;e=Oh(0==s[1].length?0:parseInt(s[1],10),0==i[1].length?0:parseInt(i[1],10))||Oh(0==s[2].length,0==i[2].length)||Oh(s[2],i[2]),s=s[3],i=i[3]}while(0==e)}return 0<=e}))}if(fh.document&&zh){var nd=Qh();Zh=nd||(parseInt(jh,10)||void 0)}else Zh=void 0;var rd=Zh,sd=function(){if(!fh.addEventListener||!Object.defineProperty)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}});try{fh.addEventListener("test",ph,t),fh.removeEventListener("test",ph,t)}catch(e){}return e}();function id(e,t){this.type=e,this.g=this.target=t,this.defaultPrevented=!1}function od(e,t){if(id.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e){var n=this.type=e.type,r=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;if(this.target=e.target||e.srcElement,this.g=t,t=e.relatedTarget){if(Wh){e:{try{Bh(t.nodeName);var s=!0;break e}catch(e){}s=!1}s||(t=null)}}else"mouseover"==n?t=e.fromElement:"mouseout"==n&&(t=e.toElement);this.relatedTarget=t,r?(this.clientX=void 0!==r.clientX?r.clientX:r.pageX,this.clientY=void 0!==r.clientY?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=void 0!==e.clientX?e.clientX:e.pageX,this.clientY=void 0!==e.clientY?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType="string"==typeof e.pointerType?e.pointerType:ad[e.pointerType]||"",this.state=e.state,this.i=e,e.defaultPrevented&&od.Z.h.call(this)}}id.prototype.h=function(){this.defaultPrevented=!0},kh(od,id);var ad={2:"touch",3:"pen",4:"mouse"};od.prototype.h=function(){od.Z.h.call(this);var e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var cd="closure_listenable_"+(1e6*Math.random()|0),ld=0;function ud(e,t,n,r,s){this.listener=e,this.proxy=null,this.src=t,this.type=n,this.capture=!!r,this.ia=s,this.key=++ld,this.ca=this.fa=!1}function hd(e){e.ca=!0,e.listener=null,e.proxy=null,e.src=null,e.ia=null}function dd(e){this.src=e,this.g={},this.h=0}function fd(e,t){var n=t.type;if(n in e.g){var r,s=e.g[n],i=Eh(s,t);(r=0<=i)&&Array.prototype.splice.call(s,i,1),r&&(hd(t),0==e.g[n].length&&(delete e.g[n],e.h--))}}function pd(e,t,n,r){for(var s=0;s<e.length;++s){var i=e[s];if(!i.ca&&i.listener==t&&i.capture==!!n&&i.ia==r)return s}return-1}dd.prototype.add=function(e,t,n,r,s){var i=e.toString();(e=this.g[i])||(e=this.g[i]=[],this.h++);var o=pd(e,t,r,s);return-1<o?(t=e[o],n||(t.fa=!1)):((t=new ud(t,this.src,i,!!r,s)).fa=n,e.push(t)),t};var gd="closure_lm_"+(1e6*Math.random()|0),md={};function yd(e,t,n,r,s){if(r&&r.once)return wd(e,t,n,r,s);if(Array.isArray(t)){for(var i=0;i<t.length;i++)yd(e,t[i],n,r,s);return null}return n=Sd(n),e&&e[cd]?e.N(t,n,mh(r)?!!r.capture:!!r,s):vd(e,t,n,!1,r,s)}function vd(e,t,n,r,s,i){if(!t)throw Error("Invalid event type");var o=mh(s)?!!s.capture:!!s,a=Td(e);if(a||(e[gd]=a=new dd(e)),(n=a.add(t,n,r,o,i)).proxy)return n;if(r=function(){function e(n){return t.call(e.src,e.listener,n)}var t=kd;return e}(),n.proxy=r,r.src=e,r.listener=n,e.addEventListener)sd||(s=o),void 0===s&&(s=!1),e.addEventListener(t.toString(),r,s);else if(e.attachEvent)e.attachEvent(Id(t.toString()),r);else{if(!e.addListener||!e.removeListener)throw Error("addEventListener and attachEvent are unavailable.");e.addListener(r)}return n}function wd(e,t,n,r,s){if(Array.isArray(t)){for(var i=0;i<t.length;i++)wd(e,t[i],n,r,s);return null}return n=Sd(n),e&&e[cd]?e.O(t,n,mh(r)?!!r.capture:!!r,s):vd(e,t,n,!0,r,s)}function bd(e,t,n,r,s){if(Array.isArray(t))for(var i=0;i<t.length;i++)bd(e,t[i],n,r,s);else r=mh(r)?!!r.capture:!!r,n=Sd(n),e&&e[cd]?(e=e.i,(t=String(t).toString())in e.g&&(-1<(n=pd(i=e.g[t],n,r,s))&&(hd(i[n]),Array.prototype.splice.call(i,n,1),0==i.length&&(delete e.g[t],e.h--)))):e&&(e=Td(e))&&(t=e.g[t.toString()],e=-1,t&&(e=pd(t,n,r,s)),(n=-1<e?t[e]:null)&&_d(n))}function _d(e){if("number"!=typeof e&&e&&!e.ca){var t=e.src;if(t&&t[cd])fd(t.i,e);else{var n=e.type,r=e.proxy;t.removeEventListener?t.removeEventListener(n,r,e.capture):t.detachEvent?t.detachEvent(Id(n),r):t.addListener&&t.removeListener&&t.removeListener(r),(n=Td(t))?(fd(n,e),0==n.h&&(n.src=null,t[gd]=null)):hd(e)}}}function Id(e){return e in md?md[e]:md[e]="on"+e}function kd(e,t){if(e.ca)e=!0;else{t=new od(t,this);var n=e.listener,r=e.ia||e.src;e.fa&&_d(e),e=n.call(r,t)}return e}function Td(e){return(e=e[gd])instanceof dd?e:null}var Ed="__closure_events_fn_"+(1e9*Math.random()>>>0);function Sd(e){return"function"==typeof e?e:(e[Ed]||(e[Ed]=function(t){return e.handleEvent(t)}),e[Ed])}function xd(){Th.call(this),this.i=new dd(this),this.P=this,this.I=null}function Ad(e,t){var n,r=e.I;if(r)for(n=[];r;r=r.I)n.push(r);if(e=e.P,r=t.type||t,"string"==typeof t)t=new id(t,e);else if(t instanceof id)t.target=t.target||e;else{var s=t;Uh(t=new id(r,e),s)}if(s=!0,n)for(var i=n.length-1;0<=i;i--){var o=t.g=n[i];s=Cd(o,r,!0,t)&&s}if(s=Cd(o=t.g=e,r,!0,t)&&s,s=Cd(o,r,!1,t)&&s,n)for(i=0;i<n.length;i++)s=Cd(o=t.g=n[i],r,!1,t)&&s}function Cd(e,t,n,r){if(!(t=e.i.g[String(t)]))return!0;t=t.concat();for(var s=!0,i=0;i<t.length;++i){var o=t[i];if(o&&!o.ca&&o.capture==n){var a=o.listener,c=o.ia||o.src;o.fa&&fd(e.i,o),s=!1!==a.call(c,r)&&s}}return s&&!r.defaultPrevented}kh(xd,Th),xd.prototype[cd]=!0,xd.prototype.removeEventListener=function(e,t,n,r){bd(this,e,t,n,r)},xd.prototype.M=function(){if(xd.Z.M.call(this),this.i){var e,t=this.i;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)hd(n[r]);delete t.g[e],t.h--}}this.I=null},xd.prototype.N=function(e,t,n,r){return this.i.add(String(e),t,!1,n,r)},xd.prototype.O=function(e,t,n,r){return this.i.add(String(e),t,!0,n,r)};var Nd=fh.JSON.stringify;function Dd(){var e=Vd;let t=null;return e.g&&(t=e.g,e.g=e.g.next,e.g||(e.h=null),t.next=null),t}var Rd,Od=new class{constructor(e,t){this.i=e,this.j=t,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}((()=>new Pd),(e=>e.reset()));class Pd{constructor(){this.next=this.g=this.h=null}set(e,t){this.h=e,this.g=t,this.next=null}reset(){this.next=this.g=this.h=null}}function Ld(e){fh.setTimeout((()=>{throw e}),0)}function Md(e,t){Rd||function(){var e=fh.Promise.resolve(void 0);Rd=function(){e.then(Ud)}}(),Fd||(Rd(),Fd=!0),Vd.add(e,t)}var Fd=!1,Vd=new class{constructor(){this.h=this.g=null}add(e,t){const n=Od.get();n.set(e,t),this.h?this.h.next=n:this.g=n,this.h=n}};function Ud(){for(var e;e=Dd();){try{e.h.call(e.g)}catch(e){Ld(e)}var t=Od;t.j(e),100>t.h&&(t.h++,e.next=t.g,t.g=e)}Fd=!1}function Bd(e,t){xd.call(this),this.h=e||1,this.g=t||fh,this.j=_h(this.kb,this),this.l=Date.now()}function jd(e){e.da=!1,e.S&&(e.g.clearTimeout(e.S),e.S=null)}function qd(e,t,n){if("function"==typeof e)n&&(e=_h(e,n));else{if(!e||"function"!=typeof e.handleEvent)throw Error("Invalid listener argument");e=_h(e.handleEvent,e)}return 2147483647<Number(t)?-1:fh.setTimeout(e,t||0)}function $d(e){e.g=qd((()=>{e.g=null,e.i&&(e.i=!1,$d(e))}),e.j);const t=e.h;e.h=null,e.m.apply(null,t)}kh(Bd,xd),(uh=Bd.prototype).da=!1,uh.S=null,uh.kb=function(){if(this.da){var e=Date.now()-this.l;0<e&&e<.8*this.h?this.S=this.g.setTimeout(this.j,this.h-e):(this.S&&(this.g.clearTimeout(this.S),this.S=null),Ad(this,"tick"),this.da&&(jd(this),this.start()))}},uh.start=function(){this.da=!0,this.S||(this.S=this.g.setTimeout(this.j,this.h),this.l=Date.now())},uh.M=function(){Bd.Z.M.call(this),jd(this),delete this.g};class zd extends Th{constructor(e,t){super(),this.m=e,this.j=t,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:$d(this)}M(){super.M(),this.g&&(fh.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Gd(e){Th.call(this),this.h=e,this.g={}}kh(Gd,Th);var Kd=[];function Wd(e,t,n,r){Array.isArray(n)||(n&&(Kd[0]=n.toString()),n=Kd);for(var s=0;s<n.length;s++){var i=yd(t,n[s],r||e.handleEvent,!1,e.h||e);if(!i)break;e.g[i.key]=i}}function Hd(e){Mh(e.g,(function(e,t){this.g.hasOwnProperty(t)&&_d(e)}),e),e.g={}}function Qd(){this.g=!0}function Jd(e,t,n,r){e.info((function(){return"XMLHTTP TEXT ("+t+"): "+function(e,t){if(!e.g)return t;if(!t)return null;try{var n=JSON.parse(t);if(n)for(e=0;e<n.length;e++)if(Array.isArray(n[e])){var r=n[e];if(!(2>r.length)){var s=r[1];if(Array.isArray(s)&&!(1>s.length)){var i=s[0];if("noop"!=i&&"stop"!=i&&"close"!=i)for(var o=1;o<s.length;o++)s[o]=""}}}return Nd(n)}catch(e){return t}}(e,n)+(r?" "+r:"")}))}Gd.prototype.M=function(){Gd.Z.M.call(this),Hd(this)},Gd.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")},Qd.prototype.Aa=function(){this.g=!1},Qd.prototype.info=function(){};var Yd={},Xd=null;function Zd(){return Xd=Xd||new xd}function ef(e){id.call(this,Yd.Ma,e)}function tf(e){const t=Zd();Ad(t,new ef(t))}function nf(e,t){id.call(this,Yd.STAT_EVENT,e),this.stat=t}function rf(e){const t=Zd();Ad(t,new nf(t,e))}function sf(e,t){id.call(this,Yd.Na,e),this.size=t}function of(e,t){if("function"!=typeof e)throw Error("Fn must not be null and must be a function");return fh.setTimeout((function(){e()}),t)}Yd.Ma="serverreachability",kh(ef,id),Yd.STAT_EVENT="statevent",kh(nf,id),Yd.Na="timingevent",kh(sf,id);var af={NO_ERROR:0,lb:1,yb:2,xb:3,sb:4,wb:5,zb:6,Ja:7,TIMEOUT:8,Cb:9},cf={qb:"complete",Mb:"success",Ka:"error",Ja:"abort",Eb:"ready",Fb:"readystatechange",TIMEOUT:"timeout",Ab:"incrementaldata",Db:"progress",tb:"downloadprogress",Ub:"uploadprogress"};function lf(){}function uf(e){return e.h||(e.h=e.i())}function hf(){}lf.prototype.h=null;var df,ff={OPEN:"a",pb:"b",Ka:"c",Bb:"d"};function pf(){id.call(this,"d")}function gf(){id.call(this,"c")}function mf(){}function yf(e,t,n,r){this.l=e,this.j=t,this.m=n,this.X=r||1,this.V=new Gd(this),this.P=wf,e=Kh?125:void 0,this.W=new Bd(e),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.Y=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.N=-1,this.I=!1,this.O=0,this.L=null,this.aa=this.J=this.$=this.U=!1,this.h=new vf}function vf(){this.i=null,this.g="",this.h=!1}kh(pf,id),kh(gf,id),kh(mf,lf),mf.prototype.g=function(){return new XMLHttpRequest},mf.prototype.i=function(){return{}},df=new mf;var wf=45e3,bf={},_f={};function If(e,t,n){e.K=1,e.v=Gf(Uf(t)),e.s=n,e.U=!0,kf(e,null)}function kf(e,t){e.F=Date.now(),xf(e),e.A=Uf(e.v);var n=e.A,r=e.X;Array.isArray(r)||(r=[String(r)]),sp(n.h,"t",r),e.C=0,n=e.l.H,e.h=new vf,e.g=sg(e.l,n?t:null,!e.s),0<e.O&&(e.L=new zd(_h(e.Ia,e,e.g),e.O)),Wd(e.V,e.g,"readystatechange",e.gb),t=e.H?Fh(e.H):{},e.s?(e.u||(e.u="POST"),t["Content-Type"]="application/x-www-form-urlencoded",e.g.ea(e.A,e.u,e.s,t)):(e.u="GET",e.g.ea(e.A,e.u,null,t)),tf(),function(e,t,n,r,s,i){e.info((function(){if(e.g)if(i)for(var o="",a=i.split("&"),c=0;c<a.length;c++){var l=a[c].split("=");if(1<l.length){var u=l[0];l=l[1];var h=u.split("_");o=2<=h.length&&"type"==h[1]?o+(u+"=")+l+"&":o+(u+"=redacted&")}}else o=null;else o=i;return"XMLHTTP REQ ("+r+") [attempt "+s+"]: "+t+"\n"+n+"\n"+o}))}(e.j,e.u,e.A,e.m,e.X,e.s)}function Tf(e){return!!e.g&&("GET"==e.u&&2!=e.K&&e.l.Ba)}function Ef(e,t,n){let r,s=!0;for(;!e.I&&e.C<n.length;){if(r=Sf(e,n),r==_f){4==t&&(e.o=4,rf(14),s=!1),Jd(e.j,e.m,null,"[Incomplete Response]");break}if(r==bf){e.o=4,rf(15),Jd(e.j,e.m,n,"[Invalid Chunk]"),s=!1;break}Jd(e.j,e.m,r,null),Rf(e,r)}Tf(e)&&r!=_f&&r!=bf&&(e.h.g="",e.C=0),4!=t||0!=n.length||e.h.h||(e.o=1,rf(16),s=!1),e.i=e.i&&s,s?0<n.length&&!e.aa&&(e.aa=!0,(t=e.l).g==e&&t.$&&!t.L&&(t.h.info("Great, no buffering proxy detected. Bytes received: "+n.length),Jp(t),t.L=!0,rf(11))):(Jd(e.j,e.m,n,"[Invalid Chunked Response]"),Df(e),Nf(e))}function Sf(e,t){var n=e.C,r=t.indexOf("\n",n);return-1==r?_f:(n=Number(t.substring(n,r)),isNaN(n)?bf:(r+=1)+n>t.length?_f:(t=t.substr(r,n),e.C=r+n,t))}function xf(e){e.Y=Date.now()+e.P,Af(e,e.P)}function Af(e,t){if(null!=e.B)throw Error("WatchDog timer not null");e.B=of(_h(e.eb,e),t)}function Cf(e){e.B&&(fh.clearTimeout(e.B),e.B=null)}function Nf(e){0==e.l.G||e.I||Zp(e.l,e)}function Df(e){Cf(e);var t=e.L;t&&"function"==typeof t.na&&t.na(),e.L=null,jd(e.W),Hd(e.V),e.g&&(t=e.g,e.g=null,t.abort(),t.na())}function Rf(e,t){try{var n=e.l;if(0!=n.G&&(n.g==e||up(n.i,e)))if(n.I=e.N,!e.J&&up(n.i,e)&&3==n.G){try{var r=n.Ca.g.parse(t)}catch(e){r=null}if(Array.isArray(r)&&3==r.length){var s=r;if(0==s[0]){e:if(!n.u){if(n.g){if(!(n.g.F+3e3<e.F))break e;Xp(n),jp(n)}Qp(n),rf(18)}}else n.ta=s[1],0<n.ta-n.U&&37500>s[2]&&n.N&&0==n.A&&!n.v&&(n.v=of(_h(n.ab,n),6e3));if(1>=lp(n.i)&&n.ka){try{n.ka()}catch(e){}n.ka=void 0}}else tg(n,11)}else if((e.J||n.g==e)&&Xp(n),!Ch(t))for(s=n.Ca.g.parse(t),t=0;t<s.length;t++){let l=s[t];if(n.U=l[0],l=l[1],2==n.G)if("c"==l[0]){n.J=l[1],n.la=l[2];const t=l[3];null!=t&&(n.ma=t,n.h.info("VER="+n.ma));const s=l[4];null!=s&&(n.za=s,n.h.info("SVER="+n.za));const u=l[5];null!=u&&"number"==typeof u&&0<u&&(r=1.5*u,n.K=r,n.h.info("backChannelRequestTimeoutMs_="+r)),r=n;const h=e.g;if(h){const e=h.g?h.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(e){var i=r.i;!i.g&&(Rh(e,"spdy")||Rh(e,"quic")||Rh(e,"h2"))&&(i.j=i.l,i.g=new Set,i.h&&(hp(i,i.h),i.h=null))}if(r.D){const e=h.g?h.g.getResponseHeader("X-HTTP-Session-Id"):null;e&&(r.sa=e,zf(r.F,r.D,e))}}n.G=3,n.j&&n.j.xa(),n.$&&(n.O=Date.now()-e.F,n.h.info("Handshake RTT: "+n.O+"ms"));var o=e;if((r=n).oa=rg(r,r.H?r.la:null,r.W),o.J){dp(r.i,o);var a=o,c=r.K;c&&a.setTimeout(c),a.B&&(Cf(a),xf(a)),r.g=o}else Hp(r);0<n.l.length&&zp(n)}else"stop"!=l[0]&&"close"!=l[0]||tg(n,7);else 3==n.G&&("stop"==l[0]||"close"==l[0]?"stop"==l[0]?tg(n,7):Bp(n):"noop"!=l[0]&&n.j&&n.j.wa(l),n.A=0)}tf()}catch(e){}}function Of(e,t){if(e.forEach&&"function"==typeof e.forEach)e.forEach(t,void 0);else if(gh(e)||"string"==typeof e)Sh(e,t,void 0);else{if(e.T&&"function"==typeof e.T)var n=e.T();else if(e.R&&"function"==typeof e.R)n=void 0;else if(gh(e)||"string"==typeof e){n=[];for(var r=e.length,s=0;s<r;s++)n.push(s)}else for(s in n=[],r=0,e)n[r++]=s;r=function(e){if(e.R&&"function"==typeof e.R)return e.R();if("string"==typeof e)return e.split("");if(gh(e)){for(var t=[],n=e.length,r=0;r<n;r++)t.push(e[r]);return t}for(r in t=[],n=0,e)t[n++]=e[r];return t}(e),s=r.length;for(var i=0;i<s;i++)t.call(void 0,r[i],n&&n[i],e)}}function Pf(e,t){this.h={},this.g=[],this.i=0;var n=arguments.length;if(1<n){if(n%2)throw Error("Uneven number of arguments");for(var r=0;r<n;r+=2)this.set(arguments[r],arguments[r+1])}else if(e)if(e instanceof Pf)for(n=e.T(),r=0;r<n.length;r++)this.set(n[r],e.get(n[r]));else for(r in e)this.set(r,e[r])}function Lf(e){if(e.i!=e.g.length){for(var t=0,n=0;t<e.g.length;){var r=e.g[t];Mf(e.h,r)&&(e.g[n++]=r),t++}e.g.length=n}if(e.i!=e.g.length){var s={};for(n=t=0;t<e.g.length;)Mf(s,r=e.g[t])||(e.g[n++]=r,s[r]=1),t++;e.g.length=n}}function Mf(e,t){return Object.prototype.hasOwnProperty.call(e,t)}(uh=yf.prototype).setTimeout=function(e){this.P=e},uh.gb=function(e){e=e.target;const t=this.L;t&&3==Lp(e)?t.l():this.Ia(e)},uh.Ia=function(e){try{if(e==this.g)e:{const u=Lp(this.g);var t=this.g.Da();this.g.ba();if(!(3>u)&&(3!=u||Kh||this.g&&(this.h.h||this.g.ga()||Mp(this.g)))){this.I||4!=u||7==t||tf(),Cf(this);var n=this.g.ba();this.N=n;t:if(Tf(this)){var r=Mp(this.g);e="";var s=r.length,i=4==Lp(this.g);if(!this.h.i){if("undefined"==typeof TextDecoder){Df(this),Nf(this);var o="";break t}this.h.i=new fh.TextDecoder}for(t=0;t<s;t++)this.h.h=!0,e+=this.h.i.decode(r[t],{stream:i&&t==s-1});r.splice(0,s),this.h.g+=e,this.C=0,o=this.h.g}else o=this.g.ga();if(this.i=200==n,function(e,t,n,r,s,i,o){e.info((function(){return"XMLHTTP RESP ("+r+") [ attempt "+s+"]: "+t+"\n"+n+"\n"+i+" "+o}))}(this.j,this.u,this.A,this.m,this.X,u,n),this.i){if(this.$&&!this.J){t:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Ch(a)){var l=a;break t}}l=null}if(!(n=l)){this.i=!1,this.o=3,rf(12),Df(this),Nf(this);break e}Jd(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,Rf(this,n)}this.U?(Ef(this,u,o),Kh&&this.i&&3==u&&(Wd(this.V,this.W,"tick",this.fb),this.W.start())):(Jd(this.j,this.m,o,null),Rf(this,o)),4==u&&Df(this),this.i&&!this.I&&(4==u?Zp(this.l,this):(this.i=!1,xf(this)))}else 400==n&&0<o.indexOf("Unknown SID")?(this.o=3,rf(12)):(this.o=0,rf(13)),Df(this),Nf(this)}}}catch(e){}},uh.fb=function(){if(this.g){var e=Lp(this.g),t=this.g.ga();this.C<t.length&&(Cf(this),Ef(this,e,t),this.i&&4!=e&&xf(this))}},uh.cancel=function(){this.I=!0,Df(this)},uh.eb=function(){this.B=null;const e=Date.now();0<=e-this.Y?(function(e,t){e.info((function(){return"TIMEOUT: "+t}))}(this.j,this.A),2!=this.K&&(tf(),rf(17)),Df(this),this.o=2,Nf(this)):Af(this,this.Y-e)},(uh=Pf.prototype).R=function(){Lf(this);for(var e=[],t=0;t<this.g.length;t++)e.push(this.h[this.g[t]]);return e},uh.T=function(){return Lf(this),this.g.concat()},uh.get=function(e,t){return Mf(this.h,e)?this.h[e]:t},uh.set=function(e,t){Mf(this.h,e)||(this.i++,this.g.push(e)),this.h[e]=t},uh.forEach=function(e,t){for(var n=this.T(),r=0;r<n.length;r++){var s=n[r],i=this.get(s);e.call(t,i,s,this)}};var Ff=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function Vf(e,t){if(this.i=this.s=this.j="",this.m=null,this.o=this.l="",this.g=!1,e instanceof Vf){this.g=void 0!==t?t:e.g,Bf(this,e.j),this.s=e.s,jf(this,e.i),qf(this,e.m),this.l=e.l,t=e.h;var n=new ep;n.i=t.i,t.g&&(n.g=new Pf(t.g),n.h=t.h),$f(this,n),this.o=e.o}else e&&(n=String(e).match(Ff))?(this.g=!!t,Bf(this,n[1]||"",!0),this.s=Kf(n[2]||""),jf(this,n[3]||"",!0),qf(this,n[4]),this.l=Kf(n[5]||"",!0),$f(this,n[6]||"",!0),this.o=Kf(n[7]||"")):(this.g=!!t,this.h=new ep(null,this.g))}function Uf(e){return new Vf(e)}function Bf(e,t,n){e.j=n?Kf(t,!0):t,e.j&&(e.j=e.j.replace(/:$/,""))}function jf(e,t,n){e.i=n?Kf(t,!0):t}function qf(e,t){if(t){if(t=Number(t),isNaN(t)||0>t)throw Error("Bad port number "+t);e.m=t}else e.m=null}function $f(e,t,n){t instanceof ep?(e.h=t,function(e,t){t&&!e.j&&(tp(e),e.i=null,e.g.forEach((function(e,t){var n=t.toLowerCase();t!=n&&(np(this,t),sp(this,n,e))}),e)),e.j=t}(e.h,e.g)):(n||(t=Wf(t,Xf)),e.h=new ep(t,e.g))}function zf(e,t,n){e.h.set(t,n)}function Gf(e){return zf(e,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),e}function Kf(e,t){return e?t?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function Wf(e,t,n){return"string"==typeof e?(e=encodeURI(e).replace(t,Hf),n&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function Hf(e){return"%"+((e=e.charCodeAt(0))>>4&15).toString(16)+(15&e).toString(16)}Vf.prototype.toString=function(){var e=[],t=this.j;t&&e.push(Wf(t,Qf,!0),":");var n=this.i;return(n||"file"==t)&&(e.push("//"),(t=this.s)&&e.push(Wf(t,Qf,!0),"@"),e.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),null!=(n=this.m)&&e.push(":",String(n))),(n=this.l)&&(this.i&&"/"!=n.charAt(0)&&e.push("/"),e.push(Wf(n,"/"==n.charAt(0)?Yf:Jf,!0))),(n=this.h.toString())&&e.push("?",n),(n=this.o)&&e.push("#",Wf(n,Zf)),e.join("")};var Qf=/[#\/\?@]/g,Jf=/[#\?:]/g,Yf=/[#\?]/g,Xf=/[#\?@]/g,Zf=/#/g;function ep(e,t){this.h=this.g=null,this.i=e||null,this.j=!!t}function tp(e){e.g||(e.g=new Pf,e.h=0,e.i&&function(e,t){if(e){e=e.split("&");for(var n=0;n<e.length;n++){var r=e[n].indexOf("="),s=null;if(0<=r){var i=e[n].substring(0,r);s=e[n].substring(r+1)}else i=e[n];t(i,s?decodeURIComponent(s.replace(/\+/g," ")):"")}}}(e.i,(function(t,n){e.add(decodeURIComponent(t.replace(/\+/g," ")),n)})))}function np(e,t){tp(e),t=ip(e,t),Mf(e.g.h,t)&&(e.i=null,e.h-=e.g.get(t).length,Mf((e=e.g).h,t)&&(delete e.h[t],e.i--,e.g.length>2*e.i&&Lf(e)))}function rp(e,t){return tp(e),t=ip(e,t),Mf(e.g.h,t)}function sp(e,t,n){np(e,t),0<n.length&&(e.i=null,e.g.set(ip(e,t),Ah(n)),e.h+=n.length)}function ip(e,t){return t=String(t),e.j&&(t=t.toLowerCase()),t}(uh=ep.prototype).add=function(e,t){tp(this),this.i=null,e=ip(this,e);var n=this.g.get(e);return n||this.g.set(e,n=[]),n.push(t),this.h+=1,this},uh.forEach=function(e,t){tp(this),this.g.forEach((function(n,r){Sh(n,(function(n){e.call(t,n,r,this)}),this)}),this)},uh.T=function(){tp(this);for(var e=this.g.R(),t=this.g.T(),n=[],r=0;r<t.length;r++)for(var s=e[r],i=0;i<s.length;i++)n.push(t[r]);return n},uh.R=function(e){tp(this);var t=[];if("string"==typeof e)rp(this,e)&&(t=xh(t,this.g.get(ip(this,e))));else{e=this.g.R();for(var n=0;n<e.length;n++)t=xh(t,e[n])}return t},uh.set=function(e,t){return tp(this),this.i=null,rp(this,e=ip(this,e))&&(this.h-=this.g.get(e).length),this.g.set(e,[t]),this.h+=1,this},uh.get=function(e,t){return e&&0<(e=this.R(e)).length?String(e[0]):t},uh.toString=function(){if(this.i)return this.i;if(!this.g)return"";for(var e=[],t=this.g.T(),n=0;n<t.length;n++){var r=t[n],s=encodeURIComponent(String(r));r=this.R(r);for(var i=0;i<r.length;i++){var o=s;""!==r[i]&&(o+="="+encodeURIComponent(String(r[i]))),e.push(o)}}return this.i=e.join("&")};function op(e){this.l=e||ap,fh.PerformanceNavigationTiming?e=0<(e=fh.performance.getEntriesByType("navigation")).length&&("hq"==e[0].nextHopProtocol||"h2"==e[0].nextHopProtocol):e=!!(fh.g&&fh.g.Ea&&fh.g.Ea()&&fh.g.Ea().Zb),this.j=e?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var ap=10;function cp(e){return!!e.h||!!e.g&&e.g.size>=e.j}function lp(e){return e.h?1:e.g?e.g.size:0}function up(e,t){return e.h?e.h==t:!!e.g&&e.g.has(t)}function hp(e,t){e.g?e.g.add(t):e.h=t}function dp(e,t){e.h&&e.h==t?e.h=null:e.g&&e.g.has(t)&&e.g.delete(t)}function fp(e){if(null!=e.h)return e.i.concat(e.h.D);if(null!=e.g&&0!==e.g.size){let t=e.i;for(const n of e.g.values())t=t.concat(n.D);return t}return Ah(e.i)}function pp(){}function gp(){this.g=new pp}function mp(e,t,n){const r=n||"";try{Of(e,(function(e,n){let s=e;mh(e)&&(s=Nd(e)),t.push(r+n+"="+encodeURIComponent(s))}))}catch(e){throw t.push(r+"type="+encodeURIComponent("_badmap")),e}}function yp(e,t,n,r,s){try{t.onload=null,t.onerror=null,t.onabort=null,t.ontimeout=null,s(r)}catch(e){}}function vp(e){this.l=e.$b||null,this.j=e.ib||!1}function wp(e,t){xd.call(this),this.D=e,this.u=t,this.m=void 0,this.readyState=bp,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}op.prototype.cancel=function(){if(this.i=fp(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(const e of this.g.values())e.cancel();this.g.clear()}},pp.prototype.stringify=function(e){return fh.JSON.stringify(e,void 0)},pp.prototype.parse=function(e){return fh.JSON.parse(e,void 0)},kh(vp,lf),vp.prototype.g=function(){return new wp(this.l,this.j)},vp.prototype.i=function(e){return function(){return e}}({}),kh(wp,xd);var bp=0;function _p(e){e.j.read().then(e.Sa.bind(e)).catch(e.ha.bind(e))}function Ip(e){e.readyState=4,e.l=null,e.j=null,e.A=null,kp(e)}function kp(e){e.onreadystatechange&&e.onreadystatechange.call(e)}(uh=wp.prototype).open=function(e,t){if(this.readyState!=bp)throw this.abort(),Error("Error reopening a connection");this.C=e,this.B=t,this.readyState=1,kp(this)},uh.send=function(e){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;const t={headers:this.v,method:this.C,credentials:this.m,cache:void 0};e&&(t.body=e),(this.D||fh).fetch(new Request(this.B,t)).then(this.Va.bind(this),this.ha.bind(this))},uh.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted."),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,Ip(this)),this.readyState=bp},uh.Va=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,kp(this)),this.g&&(this.readyState=3,kp(this),this.g)))if("arraybuffer"===this.responseType)e.arrayBuffer().then(this.Ta.bind(this),this.ha.bind(this));else if(void 0!==fh.ReadableStream&&"body"in e){if(this.j=e.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;_p(this)}else e.text().then(this.Ua.bind(this),this.ha.bind(this))},uh.Sa=function(e){if(this.g){if(this.u&&e.value)this.response.push(e.value);else if(!this.u){var t=e.value?e.value:new Uint8Array(0);(t=this.A.decode(t,{stream:!e.done}))&&(this.response=this.responseText+=t)}e.done?Ip(this):kp(this),3==this.readyState&&_p(this)}},uh.Ua=function(e){this.g&&(this.response=this.responseText=e,Ip(this))},uh.Ta=function(e){this.g&&(this.response=e,Ip(this))},uh.ha=function(){this.g&&Ip(this)},uh.setRequestHeader=function(e,t){this.v.append(e,t)},uh.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""},uh.getAllResponseHeaders=function(){if(!this.h)return"";const e=[],t=this.h.entries();for(var n=t.next();!n.done;)n=n.value,e.push(n[0]+": "+n[1]),n=t.next();return e.join("\r\n")},Object.defineProperty(wp.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(e){this.m=e?"include":"same-origin"}});var Tp=fh.JSON.parse;function Ep(e){xd.call(this),this.headers=new Pf,this.u=e||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=Sp,this.K=this.L=!1}kh(Ep,xd);var Sp="",xp=/^https?$/i,Ap=["POST","PUT"];function Cp(e){return"content-type"==e.toLowerCase()}function Np(e,t){e.h=!1,e.g&&(e.l=!0,e.g.abort(),e.l=!1),e.j=t,e.m=5,Dp(e),Op(e)}function Dp(e){e.D||(e.D=!0,Ad(e,"complete"),Ad(e,"error"))}function Rp(e){if(e.h&&void 0!==dh&&(!e.C[1]||4!=Lp(e)||2!=e.ba()))if(e.v&&4==Lp(e))qd(e.Fa,0,e);else if(Ad(e,"readystatechange"),4==Lp(e)){e.h=!1;try{const a=e.ba();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var t=!0;break e;default:t=!1}var n;if(!(n=t)){var r;if(r=0===a){var s=String(e.H).match(Ff)[1]||null;if(!s&&fh.self&&fh.self.location){var i=fh.self.location.protocol;s=i.substr(0,i.length-1)}r=!xp.test(s?s.toLowerCase():"")}n=r}if(n)Ad(e,"complete"),Ad(e,"success");else{e.m=6;try{var o=2<Lp(e)?e.g.statusText:""}catch(e){o=""}e.j=o+" ["+e.ba()+"]",Dp(e)}}finally{Op(e)}}}function Op(e,t){if(e.g){Pp(e);const n=e.g,r=e.C[0]?ph:null;e.g=null,e.C=null,t||Ad(e,"ready");try{n.onreadystatechange=r}catch(e){}}}function Pp(e){e.g&&e.K&&(e.g.ontimeout=null),e.A&&(fh.clearTimeout(e.A),e.A=null)}function Lp(e){return e.g?e.g.readyState:0}function Mp(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.J){case Sp:case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch(e){return null}}function Fp(e,t,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=function(e){let t="";return Mh(e,(function(e,n){t+=n,t+=":",t+=e,t+="\r\n"})),t}(n),"string"==typeof e?null!=n&&encodeURIComponent(String(n)):zf(e,t,n))}function Vp(e,t,n){return n&&n.internalChannelParams&&n.internalChannelParams[e]||t}function Up(e){this.za=0,this.l=[],this.h=new Qd,this.la=this.oa=this.F=this.W=this.g=this.sa=this.D=this.aa=this.o=this.P=this.s=null,this.Za=this.V=0,this.Xa=Vp("failFast",!1,e),this.N=this.v=this.u=this.m=this.j=null,this.X=!0,this.I=this.ta=this.U=-1,this.Y=this.A=this.C=0,this.Pa=Vp("baseRetryDelayMs",5e3,e),this.$a=Vp("retryDelaySeedMs",1e4,e),this.Ya=Vp("forwardChannelMaxRetries",2,e),this.ra=Vp("forwardChannelRequestTimeoutMs",2e4,e),this.qa=e&&e.xmlHttpFactory||void 0,this.Ba=e&&e.Yb||!1,this.K=void 0,this.H=e&&e.supportsCrossDomainXhr||!1,this.J="",this.i=new op(e&&e.concurrentRequestLimit),this.Ca=new gp,this.ja=e&&e.fastHandshake||!1,this.Ra=e&&e.Wb||!1,e&&e.Aa&&this.h.Aa(),e&&e.forceLongPolling&&(this.X=!1),this.$=!this.ja&&this.X&&e&&e.detectBufferingProxy||!1,this.ka=void 0,this.O=0,this.L=!1,this.B=null,this.Wa=!e||!1!==e.Xb}function Bp(e){if(qp(e),3==e.G){var t=e.V++,n=Uf(e.F);zf(n,"SID",e.J),zf(n,"RID",t),zf(n,"TYPE","terminate"),Kp(e,n),(t=new yf(e,e.h,t,void 0)).K=2,t.v=Gf(Uf(n)),n=!1,fh.navigator&&fh.navigator.sendBeacon&&(n=fh.navigator.sendBeacon(t.v.toString(),"")),!n&&fh.Image&&((new Image).src=t.v,n=!0),n||(t.g=sg(t.l,null),t.g.ea(t.v)),t.F=Date.now(),xf(t)}ng(e)}function jp(e){e.g&&(Jp(e),e.g.cancel(),e.g=null)}function qp(e){jp(e),e.u&&(fh.clearTimeout(e.u),e.u=null),Xp(e),e.i.cancel(),e.m&&("number"==typeof e.m&&fh.clearTimeout(e.m),e.m=null)}function $p(e,t){e.l.push(new class{constructor(e,t){this.h=e,this.g=t}}(e.Za++,t)),3==e.G&&zp(e)}function zp(e){cp(e.i)||e.m||(e.m=!0,Md(e.Ha,e),e.C=0)}function Gp(e,t){var n;n=t?t.m:e.V++;const r=Uf(e.F);zf(r,"SID",e.J),zf(r,"RID",n),zf(r,"AID",e.U),Kp(e,r),e.o&&e.s&&Fp(r,e.o,e.s),n=new yf(e,e.h,n,e.C+1),null===e.o&&(n.H=e.s),t&&(e.l=t.D.concat(e.l)),t=Wp(e,n,1e3),n.setTimeout(Math.round(.5*e.ra)+Math.round(.5*e.ra*Math.random())),hp(e.i,n),If(n,r,t)}function Kp(e,t){e.j&&Of({},(function(e,n){zf(t,n,e)}))}function Wp(e,t,n){n=Math.min(e.l.length,n);var r=e.j?_h(e.j.Oa,e.j,e):null;e:{var s=e.l;let t=-1;for(;;){const e=["count="+n];-1==t?0<n?(t=s[0].h,e.push("ofs="+t)):t=0:e.push("ofs="+t);let i=!0;for(let o=0;o<n;o++){let n=s[o].h;const a=s[o].g;if(n-=t,0>n)t=Math.max(0,s[o].h-100),i=!1;else try{mp(a,e,"req"+n+"_")}catch(e){r&&r(a)}}if(i){r=e.join("&");break e}}}return e=e.l.splice(0,n),t.D=e,r}function Hp(e){e.g||e.u||(e.Y=1,Md(e.Ga,e),e.A=0)}function Qp(e){return!(e.g||e.u||3<=e.A)&&(e.Y++,e.u=of(_h(e.Ga,e),eg(e,e.A)),e.A++,!0)}function Jp(e){null!=e.B&&(fh.clearTimeout(e.B),e.B=null)}function Yp(e){e.g=new yf(e,e.h,"rpc",e.Y),null===e.o&&(e.g.H=e.s),e.g.O=0;var t=Uf(e.oa);zf(t,"RID","rpc"),zf(t,"SID",e.J),zf(t,"CI",e.N?"0":"1"),zf(t,"AID",e.U),Kp(e,t),zf(t,"TYPE","xmlhttp"),e.o&&e.s&&Fp(t,e.o,e.s),e.K&&e.g.setTimeout(e.K);var n=e.g;e=e.la,n.K=1,n.v=Gf(Uf(t)),n.s=null,n.U=!0,kf(n,e)}function Xp(e){null!=e.v&&(fh.clearTimeout(e.v),e.v=null)}function Zp(e,t){var n=null;if(e.g==t){Xp(e),Jp(e),e.g=null;var r=2}else{if(!up(e.i,t))return;n=t.D,dp(e.i,t),r=1}if(e.I=t.N,0!=e.G)if(t.i)if(1==r){n=t.s?t.s.length:0,t=Date.now()-t.F;var s=e.C;Ad(r=Zd(),new sf(r,n)),zp(e)}else Hp(e);else if(3==(s=t.o)||0==s&&0<e.I||!(1==r&&function(e,t){return!(lp(e.i)>=e.i.j-(e.m?1:0)||(e.m?(e.l=t.D.concat(e.l),0):1==e.G||2==e.G||e.C>=(e.Xa?0:e.Ya)||(e.m=of(_h(e.Ha,e,t),eg(e,e.C)),e.C++,0)))}(e,t)||2==r&&Qp(e)))switch(n&&0<n.length&&(t=e.i,t.i=t.i.concat(n)),s){case 1:tg(e,5);break;case 4:tg(e,10);break;case 3:tg(e,6);break;default:tg(e,2)}}function eg(e,t){let n=e.Pa+Math.floor(Math.random()*e.$a);return e.j||(n*=2),n*t}function tg(e,t){if(e.h.info("Error code "+t),2==t){var n=null;e.j&&(n=null);var r=_h(e.jb,e);n||(n=new Vf("//www.google.com/images/cleardot.gif"),fh.location&&"http"==fh.location.protocol||Bf(n,"https"),Gf(n)),function(e,t){const n=new Qd;if(fh.Image){const r=new Image;r.onload=Ih(yp,n,r,"TestLoadImage: loaded",!0,t),r.onerror=Ih(yp,n,r,"TestLoadImage: error",!1,t),r.onabort=Ih(yp,n,r,"TestLoadImage: abort",!1,t),r.ontimeout=Ih(yp,n,r,"TestLoadImage: timeout",!1,t),fh.setTimeout((function(){r.ontimeout&&r.ontimeout()}),1e4),r.src=e}else t(!1)}(n.toString(),r)}else rf(2);e.G=0,e.j&&e.j.va(t),ng(e),qp(e)}function ng(e){e.G=0,e.I=-1,e.j&&(0==fp(e.i).length&&0==e.l.length||(e.i.i.length=0,Ah(e.l),e.l.length=0),e.j.ua())}function rg(e,t,n){let r=function(e){return e instanceof Vf?Uf(e):new Vf(e,void 0)}(n);if(""!=r.i)t&&jf(r,t+"."+r.i),qf(r,r.m);else{const e=fh.location;r=function(e,t,n,r){var s=new Vf(null,void 0);return e&&Bf(s,e),t&&jf(s,t),n&&qf(s,n),r&&(s.l=r),s}(e.protocol,t?t+"."+e.hostname:e.hostname,+e.port,n)}return e.aa&&Mh(e.aa,(function(e,t){zf(r,t,e)})),t=e.D,n=e.sa,t&&n&&zf(r,t,n),zf(r,"VER",e.ma),Kp(e,r),r}function sg(e,t,n){if(t&&!e.H)throw Error("Can't create secondary domain capable XhrIo object.");return(t=n&&e.Ba&&!e.qa?new Ep(new vp({ib:!0})):new Ep(e.qa)).L=e.H,t}function ig(){}function og(){if(zh&&!(10<=Number(rd)))throw Error("Environmental error: no available transport.")}function ag(e,t){xd.call(this),this.g=new Up(t),this.l=e,this.h=t&&t.messageUrlParams||null,e=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.s=e,e=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(e?e["X-WebChannel-Content-Type"]=t.messageContentType:e={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.ya&&(e?e["X-WebChannel-Client-Profile"]=t.ya:e={"X-WebChannel-Client-Profile":t.ya}),this.g.P=e,(e=t&&t.httpHeadersOverwriteParam)&&!Ch(e)&&(this.g.o=e),this.A=t&&t.supportsCrossDomainXhr||!1,this.v=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!Ch(t)&&(this.g.D=t,null!==(e=this.h)&&t in e&&(t in(e=this.h)&&delete e[t])),this.j=new ug(this)}function cg(e){pf.call(this);var t=e.__sm__;if(t){e:{for(const n in t){e=n;break e}e=void 0}(this.i=e)&&(e=this.i,t=null!==t&&e in t?t[e]:void 0),this.data=t}else this.data=e}function lg(){gf.call(this),this.status=1}function ug(e){this.g=e}(uh=Ep.prototype).ea=function(e,t,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+e);t=t?t.toUpperCase():"GET",this.H=e,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():df.g(),this.C=this.u?uf(this.u):uf(df),this.g.onreadystatechange=_h(this.Fa,this);try{this.F=!0,this.g.open(t,String(e),!0),this.F=!1}catch(e){return void Np(this,e)}e=n||"";const s=new Pf(this.headers);r&&Of(r,(function(e,t){s.set(t,e)})),r=function(e){e:{var t=Cp;const n=e.length,r="string"==typeof e?e.split(""):e;for(let s=0;s<n;s++)if(s in r&&t.call(void 0,r[s],s,e)){t=s;break e}t=-1}return 0>t?null:"string"==typeof e?e.charAt(t):e[t]}(s.T()),n=fh.FormData&&e instanceof fh.FormData,!(0<=Eh(Ap,t))||r||n||s.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),s.forEach((function(e,t){this.g.setRequestHeader(t,e)}),this),this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{Pp(this),0<this.B&&((this.K=function(e){return zh&&td()&&"number"==typeof e.timeout&&void 0!==e.ontimeout}(this.g))?(this.g.timeout=this.B,this.g.ontimeout=_h(this.pa,this)):this.A=qd(this.pa,this.B,this)),this.v=!0,this.g.send(e),this.v=!1}catch(e){Np(this,e)}},uh.pa=function(){void 0!==dh&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Ad(this,"timeout"),this.abort(8))},uh.abort=function(e){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=e||7,Ad(this,"complete"),Ad(this,"abort"),Op(this))},uh.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Op(this,!0)),Ep.Z.M.call(this)},uh.Fa=function(){this.s||(this.F||this.v||this.l?Rp(this):this.cb())},uh.cb=function(){Rp(this)},uh.ba=function(){try{return 2<Lp(this)?this.g.status:-1}catch(e){return-1}},uh.ga=function(){try{return this.g?this.g.responseText:""}catch(e){return""}},uh.Qa=function(e){if(this.g){var t=this.g.responseText;return e&&0==t.indexOf(e)&&(t=t.substring(e.length)),Tp(t)}},uh.Da=function(){return this.m},uh.La=function(){return"string"==typeof this.j?this.j:String(this.j)},(uh=Up.prototype).ma=8,uh.G=1,uh.hb=function(e){try{this.h.info("Origin Trials invoked: "+e)}catch(e){}},uh.Ha=function(e){if(this.m)if(this.m=null,1==this.G){if(!e){this.V=Math.floor(1e5*Math.random()),e=this.V++;const s=new yf(this,this.h,e,void 0);let i=this.s;if(this.P&&(i?(i=Fh(i),Uh(i,this.P)):i=this.P),null===this.o&&(s.H=i),this.ja)e:{for(var t=0,n=0;n<this.l.length;n++){var r=this.l[n];if(void 0===(r="__data__"in r.g&&"string"==typeof(r=r.g.__data__)?r.length:void 0))break;if(4096<(t+=r)){t=n;break e}if(4096===t||n===this.l.length-1){t=n+1;break e}}t=1e3}else t=1e3;t=Wp(this,s,t),zf(n=Uf(this.F),"RID",e),zf(n,"CVER",22),this.D&&zf(n,"X-HTTP-Session-Id",this.D),Kp(this,n),this.o&&i&&Fp(n,this.o,i),hp(this.i,s),this.Ra&&zf(n,"TYPE","init"),this.ja?(zf(n,"$req",t),zf(n,"SID","null"),s.$=!0,If(s,n,null)):If(s,n,t),this.G=2}}else 3==this.G&&(e?Gp(this,e):0==this.l.length||cp(this.i)||Gp(this))},uh.Ga=function(){if(this.u=null,Yp(this),this.$&&!(this.L||null==this.g||0>=this.O)){var e=2*this.O;this.h.info("BP detection timer enabled: "+e),this.B=of(_h(this.bb,this),e)}},uh.bb=function(){this.B&&(this.B=null,this.h.info("BP detection timeout reached."),this.h.info("Buffering proxy detected and switch to long-polling!"),this.N=!1,this.L=!0,rf(10),jp(this),Yp(this))},uh.ab=function(){null!=this.v&&(this.v=null,jp(this),Qp(this),rf(19))},uh.jb=function(e){e?(this.h.info("Successfully pinged google.com"),rf(2)):(this.h.info("Failed to ping google.com"),rf(1))},(uh=ig.prototype).xa=function(){},uh.wa=function(){},uh.va=function(){},uh.ua=function(){},uh.Oa=function(){},og.prototype.g=function(e,t){return new ag(e,t)},kh(ag,xd),ag.prototype.m=function(){this.g.j=this.j,this.A&&(this.g.H=!0);var e=this.g,t=this.l,n=this.h||void 0;e.Wa&&(e.h.info("Origin Trials enabled."),Md(_h(e.hb,e,t))),rf(0),e.W=t,e.aa=n||{},e.N=e.X,e.F=rg(e,null,e.W),zp(e)},ag.prototype.close=function(){Bp(this.g)},ag.prototype.u=function(e){if("string"==typeof e){var t={};t.__data__=e,$p(this.g,t)}else this.v?((t={}).__data__=Nd(e),$p(this.g,t)):$p(this.g,e)},ag.prototype.M=function(){this.g.j=null,delete this.j,Bp(this.g),delete this.g,ag.Z.M.call(this)},kh(cg,pf),kh(lg,gf),kh(ug,ig),ug.prototype.xa=function(){Ad(this.g,"a")},ug.prototype.wa=function(e){Ad(this.g,new cg(e))},ug.prototype.va=function(e){Ad(this.g,new lg)},ug.prototype.ua=function(){Ad(this.g,"b")},og.prototype.createWebChannel=og.prototype.g,ag.prototype.send=ag.prototype.u,ag.prototype.open=ag.prototype.m,ag.prototype.close=ag.prototype.close,af.NO_ERROR=0,af.TIMEOUT=8,af.HTTP_ERROR=6,cf.COMPLETE="complete",hf.EventType=ff,ff.OPEN="a",ff.CLOSE="b",ff.ERROR="c",ff.MESSAGE="d",xd.prototype.listen=xd.prototype.N,Ep.prototype.listenOnce=Ep.prototype.O,Ep.prototype.getLastError=Ep.prototype.La,Ep.prototype.getLastErrorCode=Ep.prototype.Da,Ep.prototype.getStatus=Ep.prototype.ba,Ep.prototype.getResponseJson=Ep.prototype.Qa,Ep.prototype.getResponseText=Ep.prototype.ga,Ep.prototype.send=Ep.prototype.ea;var hg=af,dg=cf,fg=Yd,pg=10,gg=11,mg=vp,yg=hf,vg=Ep;const wg="@firebase/firestore";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bg{constructor(e){this.uid=e}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}bg.UNAUTHENTICATED=new bg(null),bg.GOOGLE_CREDENTIALS=new bg("google-credentials-uid"),bg.FIRST_PARTY=new bg("first-party-uid"),bg.MOCK_USER=new bg("mock-user");
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let _g="9.8.4";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ig=new Mi("@firebase/firestore");function kg(){return Ig.logLevel}function Tg(e,...t){if(Ig.logLevel<=Ni.DEBUG){const n=t.map(xg);Ig.debug(`Firestore (${_g}): ${e}`,...n)}}function Eg(e,...t){if(Ig.logLevel<=Ni.ERROR){const n=t.map(xg);Ig.error(`Firestore (${_g}): ${e}`,...n)}}function Sg(e,...t){if(Ig.logLevel<=Ni.WARN){const n=t.map(xg);Ig.warn(`Firestore (${_g}): ${e}`,...n)}}function xg(e){if("string"==typeof e)return e;try{return t=e,JSON.stringify(t)}catch(t){return e}
/**
  * @license
  * Copyright 2020 Google LLC
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *   http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  */var t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ag(e="Unexpected state"){const t=`FIRESTORE (${_g}) INTERNAL ASSERTION FAILED: `+e;throw Eg(t),new Error(t)}function Cg(e,t){e||Ag()}function Ng(e,t){return e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dg={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class Rg extends fi{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Og{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pg{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Lg{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(bg.UNAUTHENTICATED)))}shutdown(){}}class Mg{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable((()=>t(this.token.user)))}shutdown(){this.changeListener=null}}class Fg{constructor(e){this.t=e,this.currentUser=bg.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){let n=this.i;const r=e=>this.i!==n?(n=this.i,t(e)):Promise.resolve();let s=new Og;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new Og,e.enqueueRetryable((()=>r(this.currentUser)))};const i=()=>{const t=s;e.enqueueRetryable((async()=>{await t.promise,await r(this.currentUser)}))},o=e=>{Tg("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=e,this.auth.addAuthTokenListener(this.o),i()};this.t.onInit((e=>o(e))),setTimeout((()=>{if(!this.auth){const e=this.t.getImmediate({optional:!0});e?o(e):(Tg("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new Og)}}),0),i()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((t=>this.i!==e?(Tg("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):t?(Cg("string"==typeof t.accessToken),new Pg(t.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return Cg(null===e||"string"==typeof e),new bg(e)}}class Vg{constructor(e,t,n){this.type="FirstParty",this.user=bg.FIRST_PARTY,this.headers=new Map,this.headers.set("X-Goog-AuthUser",t);const r=e.auth.getAuthHeaderValueForFirstParty([]);r&&this.headers.set("Authorization",r),n&&this.headers.set("X-Goog-Iam-Authorization-Token",n)}}class Ug{constructor(e,t,n){this.h=e,this.l=t,this.m=n}getToken(){return Promise.resolve(new Vg(this.h,this.l,this.m))}start(e,t){e.enqueueRetryable((()=>t(bg.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class Bg{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class jg{constructor(e){this.g=e,this.forceRefresh=!1,this.appCheck=null,this.p=null}start(e,t){const n=e=>{null!=e.error&&Tg("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${e.error.message}`);const n=e.token!==this.p;return this.p=e.token,Tg("FirebaseAppCheckTokenProvider",`Received ${n?"new":"existing"} token.`),n?t(e.token):Promise.resolve()};this.o=t=>{e.enqueueRetryable((()=>n(t)))};const r=e=>{Tg("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=e,this.appCheck.addTokenListener(this.o)};this.g.onInit((e=>r(e))),setTimeout((()=>{if(!this.appCheck){const e=this.g.getImmediate({optional:!0});e?r(e):Tg("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((e=>e?(Cg("string"==typeof e.token),this.p=e.token,new Bg(e.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qg(e){const t="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&"function"==typeof t.getRandomValues)t.getRandomValues(n);else for(let t=0;t<e;t++)n[t]=Math.floor(256*Math.random());return n}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $g{static I(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let n="";for(;n.length<20;){const r=qg(40);for(let s=0;s<r.length;++s)n.length<20&&r[s]<t&&(n+=e.charAt(r[s]%e.length))}return n}}function zg(e,t){return e<t?-1:e>t?1:0}function Gg(e,t,n){return e.length===t.length&&e.every(((e,r)=>n(e,t[r])))}function Kg(e){return e+"\0"}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wg{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new Rg(Dg.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new Rg(Dg.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new Rg(Dg.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new Rg(Dg.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Wg.fromMillis(Date.now())}static fromDate(e){return Wg.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),n=Math.floor(1e6*(e-1e3*t));return new Wg(t,n)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?zg(this.nanoseconds,e.nanoseconds):zg(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hg{constructor(e){this.timestamp=e}static fromTimestamp(e){return new Hg(e)}static min(){return new Hg(new Wg(0,0))}static max(){return new Hg(new Wg(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qg{constructor(e,t,n){void 0===t?t=0:t>e.length&&Ag(),void 0===n?n=e.length-t:n>e.length-t&&Ag(),this.segments=e,this.offset=t,this.len=n}get length(){return this.len}isEqual(e){return 0===Qg.comparator(this,e)}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Qg?e.forEach((e=>{t.push(e)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=void 0===e?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return 0===this.length}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,n=this.limit();t<n;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const n=Math.min(e.length,t.length);for(let r=0;r<n;r++){const n=e.get(r),s=t.get(r);if(n<s)return-1;if(n>s)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class Jg extends Qg{construct(e,t,n){return new Jg(e,t,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const t=[];for(const n of e){if(n.indexOf("//")>=0)throw new Rg(Dg.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);t.push(...n.split("/").filter((e=>e.length>0)))}return new Jg(t)}static emptyPath(){return new Jg([])}}const Yg=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Xg extends Qg{construct(e,t,n){return new Xg(e,t,n)}static isValidIdentifier(e){return Yg.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Xg.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&"__name__"===this.get(0)}static keyField(){return new Xg(["__name__"])}static fromServerFormat(e){const t=[];let n="",r=0;const s=()=>{if(0===n.length)throw new Rg(Dg.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(n),n=""};let i=!1;for(;r<e.length;){const t=e[r];if("\\"===t){if(r+1===e.length)throw new Rg(Dg.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const t=e[r+1];if("\\"!==t&&"."!==t&&"`"!==t)throw new Rg(Dg.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);n+=t,r+=2}else"`"===t?(i=!i,r++):"."!==t||i?(n+=t,r++):(s(),r++)}if(s(),i)throw new Rg(Dg.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Xg(t)}static emptyPath(){return new Xg([])}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zg{constructor(e){this.path=e}static fromPath(e){return new Zg(Jg.fromString(e))}static fromName(e){return new Zg(Jg.fromString(e).popFirst(5))}static empty(){return new Zg(Jg.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return null!==e&&0===Jg.comparator(this.path,e.path)}toString(){return this.path.toString()}static comparator(e,t){return Jg.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new Zg(new Jg(e.slice()))}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class em{constructor(e,t,n,r){this.indexId=e,this.collectionGroup=t,this.fields=n,this.indexState=r}}function tm(e){return e.fields.find((e=>2===e.kind))}function nm(e){return e.fields.filter((e=>2!==e.kind))}em.UNKNOWN_ID=-1;class rm{constructor(e,t){this.fieldPath=e,this.kind=t}}class sm{constructor(e,t){this.sequenceNumber=e,this.offset=t}static empty(){return new sm(0,am.min())}}function im(e,t){const n=e.toTimestamp().seconds,r=e.toTimestamp().nanoseconds+1,s=Hg.fromTimestamp(1e9===r?new Wg(n+1,0):new Wg(n,r));return new am(s,Zg.empty(),t)}function om(e){return new am(e.readTime,e.key,-1)}class am{constructor(e,t,n){this.readTime=e,this.documentKey=t,this.largestBatchId=n}static min(){return new am(Hg.min(),Zg.empty(),-1)}static max(){return new am(Hg.max(),Zg.empty(),-1)}}function cm(e,t){let n=e.readTime.compareTo(t.readTime);return 0!==n?n:(n=Zg.comparator(e.documentKey,t.documentKey),0!==n?n:zg(e.largestBatchId,t.largestBatchId))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lm="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class um{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hm(e){if(e.code!==Dg.FAILED_PRECONDITION||e.message!==lm)throw e;Tg("LocalStore","Unexpectedly lost primary lease")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dm{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)}),(e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)}))}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&Ag(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new dm(((n,r)=>{this.nextCallback=t=>{this.wrapSuccess(e,t).next(n,r)},this.catchCallback=e=>{this.wrapFailure(t,e).next(n,r)}}))}toPromise(){return new Promise(((e,t)=>{this.next(e,t)}))}wrapUserFunction(e){try{const t=e();return t instanceof dm?t:dm.resolve(t)}catch(e){return dm.reject(e)}}wrapSuccess(e,t){return e?this.wrapUserFunction((()=>e(t))):dm.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction((()=>e(t))):dm.reject(t)}static resolve(e){return new dm(((t,n)=>{t(e)}))}static reject(e){return new dm(((t,n)=>{n(e)}))}static waitFor(e){return new dm(((t,n)=>{let r=0,s=0,i=!1;e.forEach((e=>{++r,e.next((()=>{++s,i&&s===r&&t()}),(e=>n(e)))})),i=!0,s===r&&t()}))}static or(e){let t=dm.resolve(!1);for(const n of e)t=t.next((e=>e?dm.resolve(e):n()));return t}static forEach(e,t){const n=[];return e.forEach(((e,r)=>{n.push(t.call(this,e,r))})),this.waitFor(n)}static mapArray(e,t){return new dm(((n,r)=>{const s=e.length,i=new Array(s);let o=0;for(let a=0;a<s;a++){const c=a;t(e[c]).next((e=>{i[c]=e,++o,o===s&&n(i)}),(e=>r(e)))}}))}static doWhile(e,t){return new dm(((n,r)=>{const s=()=>{!0===e()?t().next((()=>{s()}),r):n()};s()}))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fm{constructor(e,t){this.action=e,this.transaction=t,this.aborted=!1,this.T=new Og,this.transaction.oncomplete=()=>{this.T.resolve()},this.transaction.onabort=()=>{t.error?this.T.reject(new mm(e,t.error)):this.T.resolve()},this.transaction.onerror=t=>{const n=_m(t.target.error);this.T.reject(new mm(e,n))}}static open(e,t,n,r){try{return new fm(t,e.transaction(r,n))}catch(e){throw new mm(t,e)}}get A(){return this.T.promise}abort(e){e&&this.T.reject(e),this.aborted||(Tg("SimpleDb","Aborting transaction:",e?e.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}R(){const e=this.transaction;this.aborted||"function"!=typeof e.commit||e.commit()}store(e){const t=this.transaction.objectStore(e);return new vm(t)}}class pm{constructor(e,t,n){this.name=e,this.version=t,this.P=n,12.2===pm.v(oi())&&Eg("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}static delete(e){return Tg("SimpleDb","Removing database:",e),wm(window.indexedDB.deleteDatabase(e)).toPromise()}static V(){if(!di())return!1;if(pm.S())return!0;const e=oi(),t=pm.v(e),n=0<t&&t<10,r=pm.D(e),s=0<r&&r<4.5;return!(e.indexOf("MSIE ")>0||e.indexOf("Trident/")>0||e.indexOf("Edge/")>0||n||s)}static S(){var e;return"undefined"!=typeof process&&"YES"===(null===(e={NODE_ENV:"production"})||void 0===e?void 0:e.C)}static N(e,t){return e.store(t)}static v(e){const t=e.match(/i(?:phone|pad|pod) os ([\d_]+)/i),n=t?t[1].split("_").slice(0,2).join("."):"-1";return Number(n)}static D(e){const t=e.match(/Android ([\d.]+)/i),n=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(n)}async k(e){return this.db||(Tg("SimpleDb","Opening database:",this.name),this.db=await new Promise(((t,n)=>{const r=indexedDB.open(this.name,this.version);r.onsuccess=e=>{const n=e.target.result;t(n)},r.onblocked=()=>{n(new mm(e,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},r.onerror=t=>{const r=t.target.error;"VersionError"===r.name?n(new Rg(Dg.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):"InvalidStateError"===r.name?n(new Rg(Dg.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+r)):n(new mm(e,r))},r.onupgradeneeded=e=>{Tg("SimpleDb",'Database "'+this.name+'" requires upgrade from version:',e.oldVersion);const t=e.target.result;this.P.O(t,r.transaction,e.oldVersion,this.version).next((()=>{Tg("SimpleDb","Database upgrade to version "+this.version+" complete")}))}}))),this.M&&(this.db.onversionchange=e=>this.M(e)),this.db}F(e){this.M=e,this.db&&(this.db.onversionchange=t=>e(t))}async runTransaction(e,t,n,r){const s="readonly"===t;let i=0;for(;;){++i;try{this.db=await this.k(e);const t=fm.open(this.db,e,s?"readonly":"readwrite",n),i=r(t).next((e=>(t.R(),e))).catch((e=>(t.abort(e),dm.reject(e)))).toPromise();return i.catch((()=>{})),await t.A,i}catch(e){const t=e,n="FirebaseError"!==t.name&&i<3;if(Tg("SimpleDb","Transaction failed with error:",t.message,"Retrying:",n),this.close(),!n)return Promise.reject(t)}}}close(){this.db&&this.db.close(),this.db=void 0}}class gm{constructor(e){this.$=e,this.B=!1,this.L=null}get isDone(){return this.B}get U(){return this.L}set cursor(e){this.$=e}done(){this.B=!0}q(e){this.L=e}delete(){return wm(this.$.delete())}}class mm extends Rg{constructor(e,t){super(Dg.UNAVAILABLE,`IndexedDB transaction '${e}' failed: ${t}`),this.name="IndexedDbTransactionError"}}function ym(e){return"IndexedDbTransactionError"===e.name}class vm{constructor(e){this.store=e}put(e,t){let n;return void 0!==t?(Tg("SimpleDb","PUT",this.store.name,e,t),n=this.store.put(t,e)):(Tg("SimpleDb","PUT",this.store.name,"<auto-key>",e),n=this.store.put(e)),wm(n)}add(e){return Tg("SimpleDb","ADD",this.store.name,e,e),wm(this.store.add(e))}get(e){return wm(this.store.get(e)).next((t=>(void 0===t&&(t=null),Tg("SimpleDb","GET",this.store.name,e,t),t)))}delete(e){return Tg("SimpleDb","DELETE",this.store.name,e),wm(this.store.delete(e))}count(){return Tg("SimpleDb","COUNT",this.store.name),wm(this.store.count())}K(e,t){const n=this.options(e,t);if(n.index||"function"!=typeof this.store.getAll){const e=this.cursor(n),t=[];return this.G(e,((e,n)=>{t.push(n)})).next((()=>t))}{const e=this.store.getAll(n.range);return new dm(((t,n)=>{e.onerror=e=>{n(e.target.error)},e.onsuccess=e=>{t(e.target.result)}}))}}j(e,t){const n=this.store.getAll(e,null===t?void 0:t);return new dm(((e,t)=>{n.onerror=e=>{t(e.target.error)},n.onsuccess=t=>{e(t.target.result)}}))}W(e,t){Tg("SimpleDb","DELETE ALL",this.store.name);const n=this.options(e,t);n.H=!1;const r=this.cursor(n);return this.G(r,((e,t,n)=>n.delete()))}J(e,t){let n;t?n=e:(n={},t=e);const r=this.cursor(n);return this.G(r,t)}Y(e){const t=this.cursor({});return new dm(((n,r)=>{t.onerror=e=>{const t=_m(e.target.error);r(t)},t.onsuccess=t=>{const r=t.target.result;r?e(r.primaryKey,r.value).next((e=>{e?r.continue():n()})):n()}}))}G(e,t){const n=[];return new dm(((r,s)=>{e.onerror=e=>{s(e.target.error)},e.onsuccess=e=>{const s=e.target.result;if(!s)return void r();const i=new gm(s),o=t(s.primaryKey,s.value,i);if(o instanceof dm){const e=o.catch((e=>(i.done(),dm.reject(e))));n.push(e)}i.isDone?r():null===i.U?s.continue():s.continue(i.U)}})).next((()=>dm.waitFor(n)))}options(e,t){let n;return void 0!==e&&("string"==typeof e?n=e:t=e),{index:n,range:t}}cursor(e){let t="next";if(e.reverse&&(t="prev"),e.index){const n=this.store.index(e.index);return e.H?n.openKeyCursor(e.range,t):n.openCursor(e.range,t)}return this.store.openCursor(e.range,t)}}function wm(e){return new dm(((t,n)=>{e.onsuccess=e=>{const n=e.target.result;t(n)},e.onerror=e=>{const t=_m(e.target.error);n(t)}}))}let bm=!1;function _m(e){const t=pm.v(oi());if(t>=12.2&&t<13){const t="An internal error was encountered in the Indexed Database server";if(e.message.indexOf(t)>=0){const e=new Rg("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${t}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return bm||(bm=!0,setTimeout((()=>{throw e}),0)),e}}return e}class Im{constructor(e,t){this.asyncQueue=e,this.X=t,this.task=null}start(){}stop(){this.task&&(this.task.cancel(),this.task=null)}get started(){return null!==this.task}Z(e){Tg("IndexBackiller",`Scheduled in ${e}ms`),this.task=this.asyncQueue.enqueueAfterDelay("index_backfill",e,(async()=>{this.task=null;try{Tg("IndexBackiller",`Documents written: ${await this.X.tt()}`)}catch(e){ym(e)?Tg("IndexBackiller","Ignoring IndexedDB error during index backfill: ",e):await hm(e)}await this.Z(1)}))}}class km{constructor(e,t){this.localStore=e,this.persistence=t}async tt(e=50){return this.persistence.runTransaction("Backfill Indexes","readwrite-primary",(t=>this.et(t,e)))}et(e,t){const n=new Set;let r=t,s=!0;return dm.doWhile((()=>!0===s&&r>0),(()=>this.localStore.indexManager.getNextCollectionGroupToUpdate(e).next((t=>{if(null!==t&&!n.has(t))return Tg("IndexBackiller",`Processing collection: ${t}`),this.nt(e,t,r).next((e=>{r-=e,n.add(t)}));s=!1})))).next((()=>t-r))}nt(e,t,n){return this.localStore.indexManager.getMinOffsetFromCollectionGroup(e,t).next((r=>this.localStore.localDocuments.getNextDocuments(e,t,r,n).next((n=>{const s=n.changes;return this.localStore.indexManager.updateIndexEntries(e,s).next((()=>this.st(r,n))).next((n=>(Tg("IndexBackiller",`Updating offset: ${n}`),this.localStore.indexManager.updateCollectionGroup(e,t,n)))).next((()=>s.size))}))))}st(e,t){let n=e;return t.changes.forEach(((e,t)=>{const r=om(t);cm(r,n)>0&&(n=r)})),new am(n.readTime,n.documentKey,Math.max(t.batchId,e.largestBatchId))}}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tm{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=e=>this.it(e),this.rt=e=>t.writeSequenceNumber(e))}it(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.rt&&this.rt(e),e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Em(e){let t=0;for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t++;return t}function Sm(e,t){for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t(n,e[n])}function xm(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Tm.ot=-1;class Am{constructor(e,t){this.comparator=e,this.root=t||Nm.EMPTY}insert(e,t){return new Am(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Nm.BLACK,null,null))}remove(e){return new Am(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Nm.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const n=this.comparator(e,t.key);if(0===n)return t.value;n<0?t=t.left:n>0&&(t=t.right)}return null}indexOf(e){let t=0,n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(0===r)return t+n.left.size;r<0?n=n.left:(t+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,n)=>(e(t,n),!1)))}toString(){const e=[];return this.inorderTraversal(((t,n)=>(e.push(`${t}:${n}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Cm(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Cm(this.root,e,this.comparator,!1)}getReverseIterator(){return new Cm(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Cm(this.root,e,this.comparator,!0)}}class Cm{constructor(e,t,n,r){this.isReverse=r,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=t?n(e.key,t):1,t&&r&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(0===s){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Nm{constructor(e,t,n,r,s){this.key=e,this.value=t,this.color=null!=n?n:Nm.RED,this.left=null!=r?r:Nm.EMPTY,this.right=null!=s?s:Nm.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,n,r,s){return new Nm(null!=e?e:this.key,null!=t?t:this.value,null!=n?n:this.color,null!=r?r:this.left,null!=s?s:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let r=this;const s=n(e,r.key);return r=s<0?r.copy(null,null,null,r.left.insert(e,t,n),null):0===s?r.copy(null,t,null,null,null):r.copy(null,null,null,null,r.right.insert(e,t,n)),r.fixUp()}removeMin(){if(this.left.isEmpty())return Nm.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let n,r=this;if(t(e,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,t),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),0===t(e,r.key)){if(r.right.isEmpty())return Nm.EMPTY;n=r.right.min(),r=r.copy(n.key,n.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,t))}return r.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Nm.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Nm.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw Ag();if(this.right.isRed())throw Ag();const e=this.left.check();if(e!==this.right.check())throw Ag();return e+(this.isRed()?0:1)}}Nm.EMPTY=null,Nm.RED=!0,Nm.BLACK=!1,Nm.EMPTY=new class{constructor(){this.size=0}get key(){throw Ag()}get value(){throw Ag()}get color(){throw Ag()}get left(){throw Ag()}get right(){throw Ag()}copy(e,t,n,r,s){return this}insert(e,t,n){return new Nm(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Dm{constructor(e){this.comparator=e,this.data=new Am(this.comparator)}has(e){return null!==this.data.get(e)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,n)=>(e(t),!1)))}forEachInRange(e,t){const n=this.data.getIteratorFrom(e[0]);for(;n.hasNext();){const r=n.getNext();if(this.comparator(r.key,e[1])>=0)return;t(r.key)}}forEachWhile(e,t){let n;for(n=void 0!==t?this.data.getIteratorFrom(t):this.data.getIterator();n.hasNext();)if(!e(n.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Rm(this.data.getIterator())}getIteratorFrom(e){return new Rm(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((e=>{t=t.add(e)})),t}isEqual(e){if(!(e instanceof Dm))return!1;if(this.size!==e.size)return!1;const t=this.data.getIterator(),n=e.data.getIterator();for(;t.hasNext();){const e=t.getNext().key,r=n.getNext().key;if(0!==this.comparator(e,r))return!1}return!0}toArray(){const e=[];return this.forEach((t=>{e.push(t)})),e}toString(){const e=[];return this.forEach((t=>e.push(t))),"SortedSet("+e.toString()+")"}copy(e){const t=new Dm(this.comparator);return t.data=e,t}}class Rm{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}function Om(e){return e.hasNext()?e.getNext():void 0}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pm{constructor(e){this.fields=e,e.sort(Xg.comparator)}static empty(){return new Pm([])}unionWith(e){let t=new Dm(Xg.comparator);for(const e of this.fields)t=t.add(e);for(const n of e)t=t.add(n);return new Pm(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Gg(this.fields,e.fields,((e,t)=>e.isEqual(t)))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Lm{constructor(e){this.binaryString=e}static fromBase64String(e){const t=atob(e);return new Lm(t)}static fromUint8Array(e){const t=function(e){let t="";for(let n=0;n<e.length;++n)t+=String.fromCharCode(e[n]);return t}(e);return new Lm(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const t=new Uint8Array(e.length);for(let n=0;n<e.length;n++)t[n]=e.charCodeAt(n);return t}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return zg(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Lm.EMPTY_BYTE_STRING=new Lm("");const Mm=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Fm(e){if(Cg(!!e),"string"==typeof e){let t=0;const n=Mm.exec(e);if(Cg(!!n),n[1]){let e=n[1];e=(e+"000000000").substr(0,9),t=Number(e)}const r=new Date(e);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:Vm(e.seconds),nanos:Vm(e.nanos)}}function Vm(e){return"number"==typeof e?e:"string"==typeof e?Number(e):0}function Um(e){return"string"==typeof e?Lm.fromBase64String(e):Lm.fromUint8Array(e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bm(e){var t,n;return"server_timestamp"===(null===(n=((null===(t=null==e?void 0:e.mapValue)||void 0===t?void 0:t.fields)||{}).__type__)||void 0===n?void 0:n.stringValue)}function jm(e){const t=e.mapValue.fields.__previous_value__;return Bm(t)?jm(t):t}function qm(e){const t=Fm(e.mapValue.fields.__local_write_time__.timestampValue);return new Wg(t.seconds,t.nanos)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $m{constructor(e,t,n,r,s,i,o,a){this.databaseId=e,this.appId=t,this.persistenceKey=n,this.host=r,this.ssl=s,this.forceLongPolling=i,this.autoDetectLongPolling=o,this.useFetchStreams=a}}class zm{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new zm("","")}get isDefaultDatabase(){return"(default)"===this.database}isEqual(e){return e instanceof zm&&e.projectId===this.projectId&&e.database===this.database}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gm(e){return null==e}function Km(e){return 0===e&&1/e==-1/0}function Wm(e){return"number"==typeof e&&Number.isInteger(e)&&!Km(e)&&e<=Number.MAX_SAFE_INTEGER&&e>=Number.MIN_SAFE_INTEGER}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hm={mapValue:{fields:{__type__:{stringValue:"__max__"}}}},Qm={nullValue:"NULL_VALUE"};function Jm(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?Bm(e)?4:uy(e)?9007199254740991:10:Ag()}function Ym(e,t){if(e===t)return!0;const n=Jm(e);if(n!==Jm(t))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return qm(e).isEqual(qm(t));case 3:return function(e,t){if("string"==typeof e.timestampValue&&"string"==typeof t.timestampValue&&e.timestampValue.length===t.timestampValue.length)return e.timestampValue===t.timestampValue;const n=Fm(e.timestampValue),r=Fm(t.timestampValue);return n.seconds===r.seconds&&n.nanos===r.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return r=t,Um(e.bytesValue).isEqual(Um(r.bytesValue));case 7:return e.referenceValue===t.referenceValue;case 8:return function(e,t){return Vm(e.geoPointValue.latitude)===Vm(t.geoPointValue.latitude)&&Vm(e.geoPointValue.longitude)===Vm(t.geoPointValue.longitude)}(e,t);case 2:return function(e,t){if("integerValue"in e&&"integerValue"in t)return Vm(e.integerValue)===Vm(t.integerValue);if("doubleValue"in e&&"doubleValue"in t){const n=Vm(e.doubleValue),r=Vm(t.doubleValue);return n===r?Km(n)===Km(r):isNaN(n)&&isNaN(r)}return!1}(e,t);case 9:return Gg(e.arrayValue.values||[],t.arrayValue.values||[],Ym);case 10:return function(e,t){const n=e.mapValue.fields||{},r=t.mapValue.fields||{};if(Em(n)!==Em(r))return!1;for(const e in n)if(n.hasOwnProperty(e)&&(void 0===r[e]||!Ym(n[e],r[e])))return!1;return!0}(e,t);default:return Ag()}var r}function Xm(e,t){return void 0!==(e.values||[]).find((e=>Ym(e,t)))}function Zm(e,t){if(e===t)return 0;const n=Jm(e),r=Jm(t);if(n!==r)return zg(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return zg(e.booleanValue,t.booleanValue);case 2:return function(e,t){const n=Vm(e.integerValue||e.doubleValue),r=Vm(t.integerValue||t.doubleValue);return n<r?-1:n>r?1:n===r?0:isNaN(n)?isNaN(r)?0:-1:1}(e,t);case 3:return ey(e.timestampValue,t.timestampValue);case 4:return ey(qm(e),qm(t));case 5:return zg(e.stringValue,t.stringValue);case 6:return function(e,t){const n=Um(e),r=Um(t);return n.compareTo(r)}(e.bytesValue,t.bytesValue);case 7:return function(e,t){const n=e.split("/"),r=t.split("/");for(let e=0;e<n.length&&e<r.length;e++){const t=zg(n[e],r[e]);if(0!==t)return t}return zg(n.length,r.length)}(e.referenceValue,t.referenceValue);case 8:return function(e,t){const n=zg(Vm(e.latitude),Vm(t.latitude));return 0!==n?n:zg(Vm(e.longitude),Vm(t.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return function(e,t){const n=e.values||[],r=t.values||[];for(let e=0;e<n.length&&e<r.length;++e){const t=Zm(n[e],r[e]);if(t)return t}return zg(n.length,r.length)}(e.arrayValue,t.arrayValue);case 10:return function(e,t){if(e===Hm.mapValue&&t===Hm.mapValue)return 0;if(e===Hm.mapValue)return 1;if(t===Hm.mapValue)return-1;const n=e.fields||{},r=Object.keys(n),s=t.fields||{},i=Object.keys(s);r.sort(),i.sort();for(let e=0;e<r.length&&e<i.length;++e){const t=zg(r[e],i[e]);if(0!==t)return t;const o=Zm(n[r[e]],s[i[e]]);if(0!==o)return o}return zg(r.length,i.length)}(e.mapValue,t.mapValue);default:throw Ag()}}function ey(e,t){if("string"==typeof e&&"string"==typeof t&&e.length===t.length)return zg(e,t);const n=Fm(e),r=Fm(t),s=zg(n.seconds,r.seconds);return 0!==s?s:zg(n.nanos,r.nanos)}function ty(e){return ny(e)}function ny(e){return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(e){const t=Fm(e);return`time(${t.seconds},${t.nanos})`}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?Um(e.bytesValue).toBase64():"referenceValue"in e?(n=e.referenceValue,Zg.fromName(n).toString()):"geoPointValue"in e?`geo(${(t=e.geoPointValue).latitude},${t.longitude})`:"arrayValue"in e?function(e){let t="[",n=!0;for(const r of e.values||[])n?n=!1:t+=",",t+=ny(r);return t+"]"}(e.arrayValue):"mapValue"in e?function(e){const t=Object.keys(e.fields||{}).sort();let n="{",r=!0;for(const s of t)r?r=!1:n+=",",n+=`${s}:${ny(e.fields[s])}`;return n+"}"}(e.mapValue):Ag();var t,n}function ry(e,t){return{referenceValue:`projects/${e.projectId}/databases/${e.database}/documents/${t.path.canonicalString()}`}}function sy(e){return!!e&&"integerValue"in e}function iy(e){return!!e&&"arrayValue"in e}function oy(e){return!!e&&"nullValue"in e}function ay(e){return!!e&&"doubleValue"in e&&isNaN(Number(e.doubleValue))}function cy(e){return!!e&&"mapValue"in e}function ly(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&"object"==typeof e.timestampValue)return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){const t={mapValue:{fields:{}}};return Sm(e.mapValue.fields,((e,n)=>t.mapValue.fields[e]=ly(n))),t}if(e.arrayValue){const t={arrayValue:{values:[]}};for(let n=0;n<(e.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=ly(e.arrayValue.values[n]);return t}return Object.assign({},e)}function uy(e){return"__max__"===(((e.mapValue||{}).fields||{}).__type__||{}).stringValue}function hy(e){return"nullValue"in e?Qm:"booleanValue"in e?{booleanValue:!1}:"integerValue"in e||"doubleValue"in e?{doubleValue:NaN}:"timestampValue"in e?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"stringValue"in e?{stringValue:""}:"bytesValue"in e?{bytesValue:""}:"referenceValue"in e?ry(zm.empty(),Zg.empty()):"geoPointValue"in e?{geoPointValue:{latitude:-90,longitude:-180}}:"arrayValue"in e?{arrayValue:{}}:"mapValue"in e?{mapValue:{}}:Ag()}function dy(e){return"nullValue"in e?{booleanValue:!1}:"booleanValue"in e?{doubleValue:NaN}:"integerValue"in e||"doubleValue"in e?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"timestampValue"in e?{stringValue:""}:"stringValue"in e?{bytesValue:""}:"bytesValue"in e?ry(zm.empty(),Zg.empty()):"referenceValue"in e?{geoPointValue:{latitude:-90,longitude:-180}}:"geoPointValue"in e?{arrayValue:{}}:"arrayValue"in e?{mapValue:{}}:"mapValue"in e?Hm:Ag()}function fy(e,t){const n=Zm(e.value,t.value);return 0!==n?n:e.inclusive&&!t.inclusive?-1:!e.inclusive&&t.inclusive?1:0}function py(e,t){const n=Zm(e.value,t.value);return 0!==n?n:e.inclusive&&!t.inclusive?1:!e.inclusive&&t.inclusive?-1:0}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gy{constructor(e){this.value=e}static empty(){return new gy({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let n=0;n<e.length-1;++n)if(t=(t.mapValue.fields||{})[e.get(n)],!cy(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=ly(t)}setAll(e){let t=Xg.emptyPath(),n={},r=[];e.forEach(((e,s)=>{if(!t.isImmediateParentOf(s)){const e=this.getFieldsMap(t);this.applyChanges(e,n,r),n={},r=[],t=s.popLast()}e?n[s.lastSegment()]=ly(e):r.push(s.lastSegment())}));const s=this.getFieldsMap(t);this.applyChanges(s,n,r)}delete(e){const t=this.field(e.popLast());cy(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return Ym(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let n=0;n<e.length;++n){let r=t.mapValue.fields[e.get(n)];cy(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},t.mapValue.fields[e.get(n)]=r),t=r}return t.mapValue.fields}applyChanges(e,t,n){Sm(t,((t,n)=>e[t]=n));for(const t of n)delete e[t]}clone(){return new gy(ly(this.value))}}function my(e){const t=[];return Sm(e.fields,((e,n)=>{const r=new Xg([e]);if(cy(n)){const e=my(n.mapValue).fields;if(0===e.length)t.push(r);else for(const n of e)t.push(r.child(n))}else t.push(r)})),new Pm(t)
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class yy{constructor(e,t,n,r,s,i){this.key=e,this.documentType=t,this.version=n,this.readTime=r,this.data=s,this.documentState=i}static newInvalidDocument(e){return new yy(e,0,Hg.min(),Hg.min(),gy.empty(),0)}static newFoundDocument(e,t,n){return new yy(e,1,t,Hg.min(),n,0)}static newNoDocument(e,t){return new yy(e,2,t,Hg.min(),gy.empty(),0)}static newUnknownDocument(e,t){return new yy(e,3,t,Hg.min(),gy.empty(),2)}convertToFoundDocument(e,t){return this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=gy.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=gy.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Hg.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(e){return e instanceof yy&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new yy(this.key,this.documentType,this.version,this.readTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vy{constructor(e,t=null,n=[],r=[],s=null,i=null,o=null){this.path=e,this.collectionGroup=t,this.orderBy=n,this.filters=r,this.limit=s,this.startAt=i,this.endAt=o,this.ut=null}}function wy(e,t=null,n=[],r=[],s=null,i=null,o=null){return new vy(e,t,n,r,s,i,o)}function by(e){const t=Ng(e);if(null===t.ut){let e=t.path.canonicalString();null!==t.collectionGroup&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map((e=>{return(t=e).field.canonicalString()+t.op.toString()+ty(t.value);var t})).join(","),e+="|ob:",e+=t.orderBy.map((e=>{return(t=e).field.canonicalString()+t.dir;var t})).join(","),Gm(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map((e=>ty(e))).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map((e=>ty(e))).join(",")),t.ut=e}return t.ut}function _y(e,t){if(e.limit!==t.limit)return!1;if(e.orderBy.length!==t.orderBy.length)return!1;for(let n=0;n<e.orderBy.length;n++)if(!Fy(e.orderBy[n],t.orderBy[n]))return!1;if(e.filters.length!==t.filters.length)return!1;for(let s=0;s<e.filters.length;s++)if(n=e.filters[s],r=t.filters[s],n.op!==r.op||!n.field.isEqual(r.field)||!Ym(n.value,r.value))return!1;var n,r;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!Uy(e.startAt,t.startAt)&&Uy(e.endAt,t.endAt)}function Iy(e){return Zg.isDocumentKey(e.path)&&null===e.collectionGroup&&0===e.filters.length}function ky(e,t){return e.filters.filter((e=>e instanceof Sy&&e.field.isEqual(t)))}function Ty(e,t,n){let r=Qm,s=!0;for(const n of ky(e,t)){let e=Qm,t=!0;switch(n.op){case"<":case"<=":e=hy(n.value);break;case"==":case"in":case">=":e=n.value;break;case">":e=n.value,t=!1;break;case"!=":case"not-in":e=Qm}fy({value:r,inclusive:s},{value:e,inclusive:t})<0&&(r=e,s=t)}if(null!==n)for(let i=0;i<e.orderBy.length;++i)if(e.orderBy[i].field.isEqual(t)){const e=n.position[i];fy({value:r,inclusive:s},{value:e,inclusive:n.inclusive})<0&&(r=e,s=n.inclusive);break}return{value:r,inclusive:s}}function Ey(e,t,n){let r=Hm,s=!0;for(const n of ky(e,t)){let e=Hm,t=!0;switch(n.op){case">=":case">":e=dy(n.value),t=!1;break;case"==":case"in":case"<=":e=n.value;break;case"<":e=n.value,t=!1;break;case"!=":case"not-in":e=Hm}py({value:r,inclusive:s},{value:e,inclusive:t})>0&&(r=e,s=t)}if(null!==n)for(let i=0;i<e.orderBy.length;++i)if(e.orderBy[i].field.isEqual(t)){const e=n.position[i];py({value:r,inclusive:s},{value:e,inclusive:n.inclusive})>0&&(r=e,s=n.inclusive);break}return{value:r,inclusive:s}}class Sy extends class{}{constructor(e,t,n){super(),this.field=e,this.op=t,this.value=n}static create(e,t,n){return e.isKeyField()?"in"===t||"not-in"===t?this.ct(e,t,n):new xy(e,t,n):"array-contains"===t?new Dy(e,n):"in"===t?new Ry(e,n):"not-in"===t?new Oy(e,n):"array-contains-any"===t?new Py(e,n):new Sy(e,t,n)}static ct(e,t,n){return"in"===t?new Ay(e,n):new Cy(e,n)}matches(e){const t=e.data.field(this.field);return"!="===this.op?null!==t&&this.at(Zm(t,this.value)):null!==t&&Jm(this.value)===Jm(t)&&this.at(Zm(t,this.value))}at(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return 0===e;case"!=":return 0!==e;case">":return e>0;case">=":return e>=0;default:return Ag()}}ht(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}class xy extends Sy{constructor(e,t,n){super(e,t,n),this.key=Zg.fromName(n.referenceValue)}matches(e){const t=Zg.comparator(e.key,this.key);return this.at(t)}}class Ay extends Sy{constructor(e,t){super(e,"in",t),this.keys=Ny("in",t)}matches(e){return this.keys.some((t=>t.isEqual(e.key)))}}class Cy extends Sy{constructor(e,t){super(e,"not-in",t),this.keys=Ny("not-in",t)}matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}}function Ny(e,t){var n;return((null===(n=t.arrayValue)||void 0===n?void 0:n.values)||[]).map((e=>Zg.fromName(e.referenceValue)))}class Dy extends Sy{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return iy(t)&&Xm(t.arrayValue,this.value)}}class Ry extends Sy{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return null!==t&&Xm(this.value.arrayValue,t)}}class Oy extends Sy{constructor(e,t){super(e,"not-in",t)}matches(e){if(Xm(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return null!==t&&!Xm(this.value.arrayValue,t)}}class Py extends Sy{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!iy(t)||!t.arrayValue.values)&&t.arrayValue.values.some((e=>Xm(this.value.arrayValue,e)))}}class Ly{constructor(e,t){this.position=e,this.inclusive=t}}class My{constructor(e,t="asc"){this.field=e,this.dir=t}}function Fy(e,t){return e.dir===t.dir&&e.field.isEqual(t.field)}function Vy(e,t,n){let r=0;for(let s=0;s<e.position.length;s++){const i=t[s],o=e.position[s];if(r=i.field.isKeyField()?Zg.comparator(Zg.fromName(o.referenceValue),n.key):Zm(o,n.data.field(i.field)),"desc"===i.dir&&(r*=-1),0!==r)break}return r}function Uy(e,t){if(null===e)return null===t;if(null===t)return!1;if(e.inclusive!==t.inclusive||e.position.length!==t.position.length)return!1;for(let n=0;n<e.position.length;n++)if(!Ym(e.position[n],t.position[n]))return!1;return!0}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class By{constructor(e,t=null,n=[],r=[],s=null,i="F",o=null,a=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=n,this.filters=r,this.limit=s,this.limitType=i,this.startAt=o,this.endAt=a,this.lt=null,this.ft=null,this.startAt,this.endAt}}function jy(e,t,n,r,s,i,o,a){return new By(e,t,n,r,s,i,o,a)}function qy(e){return new By(e)}function $y(e){return e.explicitOrderBy.length>0?e.explicitOrderBy[0].field:null}function zy(e){for(const t of e.filters)if(t.ht())return t.field;return null}function Gy(e){return null!==e.collectionGroup}function Ky(e){const t=Ng(e);if(null===t.lt){t.lt=[];const e=zy(t),n=$y(t);if(null!==e&&null===n)e.isKeyField()||t.lt.push(new My(e)),t.lt.push(new My(Xg.keyField(),"asc"));else{let e=!1;for(const n of t.explicitOrderBy)t.lt.push(n),n.field.isKeyField()&&(e=!0);if(!e){const e=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";t.lt.push(new My(Xg.keyField(),e))}}}return t.lt}function Wy(e){const t=Ng(e);if(!t.ft)if("F"===t.limitType)t.ft=wy(t.path,t.collectionGroup,Ky(t),t.filters,t.limit,t.startAt,t.endAt);else{const e=[];for(const n of Ky(t)){const t="desc"===n.dir?"asc":"desc";e.push(new My(n.field,t))}const n=t.endAt?new Ly(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Ly(t.startAt.position,t.startAt.inclusive):null;t.ft=wy(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}return t.ft}function Hy(e,t,n){return new By(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,n,e.startAt,e.endAt)}function Qy(e,t){return _y(Wy(e),Wy(t))&&e.limitType===t.limitType}function Jy(e){return`${by(Wy(e))}|lt:${e.limitType}`}function Yy(e){return`Query(target=${function(e){let t=e.path.canonicalString();return null!==e.collectionGroup&&(t+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(t+=`, filters: [${e.filters.map((e=>{return`${(t=e).field.canonicalString()} ${t.op} ${ty(t.value)}`;var t})).join(", ")}]`),Gm(e.limit)||(t+=", limit: "+e.limit),e.orderBy.length>0&&(t+=`, orderBy: [${e.orderBy.map((e=>{return`${(t=e).field.canonicalString()} (${t.dir})`;var t})).join(", ")}]`),e.startAt&&(t+=", startAt: ",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((e=>ty(e))).join(",")),e.endAt&&(t+=", endAt: ",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((e=>ty(e))).join(",")),`Target(${t})`}(Wy(e))}; limitType=${e.limitType})`}function Xy(e,t){return t.isFoundDocument()&&function(e,t){const n=t.key.path;return null!==e.collectionGroup?t.key.hasCollectionId(e.collectionGroup)&&e.path.isPrefixOf(n):Zg.isDocumentKey(e.path)?e.path.isEqual(n):e.path.isImmediateParentOf(n)}(e,t)&&function(e,t){for(const n of e.explicitOrderBy)if(!n.field.isKeyField()&&null===t.data.field(n.field))return!1;return!0}(e,t)&&function(e,t){for(const n of e.filters)if(!n.matches(t))return!1;return!0}(e,t)&&(r=t,!((n=e).startAt&&!function(e,t,n){const r=Vy(e,t,n);return e.inclusive?r<=0:r<0}(n.startAt,Ky(n),r)||n.endAt&&!function(e,t,n){const r=Vy(e,t,n);return e.inclusive?r>=0:r>0}(n.endAt,Ky(n),r)));var n,r}function Zy(e){return e.collectionGroup||(e.path.length%2==1?e.path.lastSegment():e.path.get(e.path.length-2))}function ev(e){return(t,n)=>{let r=!1;for(const s of Ky(e)){const e=tv(s,t,n);if(0!==e)return e;r=r||s.field.isKeyField()}return 0}}function tv(e,t,n){const r=e.field.isKeyField()?Zg.comparator(t.key,n.key):function(e,t,n){const r=t.data.field(e),s=n.data.field(e);return null!==r&&null!==s?Zm(r,s):Ag()}(e.field,t,n);switch(e.dir){case"asc":return r;case"desc":return-1*r;default:return Ag()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nv(e,t){if(e.dt){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Km(t)?"-0":t}}function rv(e){return{integerValue:""+e}}function sv(e,t){return Wm(t)?rv(t):nv(e,t)}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iv{constructor(){this._=void 0}}function ov(e,t,n){return e instanceof lv?function(e,t){const n={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:e.seconds,nanos:e.nanoseconds}}}};return t&&(n.fields.__previous_value__=t),{mapValue:n}}(n,t):e instanceof uv?hv(e,t):e instanceof dv?fv(e,t):function(e,t){const n=cv(e,t),r=gv(n)+gv(e._t);return sy(n)&&sy(e._t)?rv(r):nv(e.wt,r)}(e,t)}function av(e,t,n){return e instanceof uv?hv(e,t):e instanceof dv?fv(e,t):n}function cv(e,t){return e instanceof pv?sy(r=t)||(n=r)&&"doubleValue"in n?t:{integerValue:0}:null;var n,r}class lv extends iv{}class uv extends iv{constructor(e){super(),this.elements=e}}function hv(e,t){const n=mv(t);for(const t of e.elements)n.some((e=>Ym(e,t)))||n.push(t);return{arrayValue:{values:n}}}class dv extends iv{constructor(e){super(),this.elements=e}}function fv(e,t){let n=mv(t);for(const t of e.elements)n=n.filter((e=>!Ym(e,t)));return{arrayValue:{values:n}}}class pv extends iv{constructor(e,t){super(),this.wt=e,this._t=t}}function gv(e){return Vm(e.integerValue||e.doubleValue)}function mv(e){return iy(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yv{constructor(e,t){this.field=e,this.transform=t}}class vv{constructor(e,t){this.version=e,this.transformResults=t}}class wv{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new wv}static exists(e){return new wv(void 0,e)}static updateTime(e){return new wv(e)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function bv(e,t){return void 0!==e.updateTime?t.isFoundDocument()&&t.version.isEqual(e.updateTime):void 0===e.exists||e.exists===t.isFoundDocument()}class _v{}function Iv(e,t){if(!e.hasLocalMutations||t&&0===t.fields.length)return null;if(null===t)return e.isNoDocument()?new Rv(e.key,wv.none()):new xv(e.key,e.data,wv.none());{const n=e.data,r=gy.empty();let s=new Dm(Xg.comparator);for(let e of t.fields)if(!s.has(e)){let t=n.field(e);null===t&&e.length>1&&(e=e.popLast(),t=n.field(e)),null===t?r.delete(e):r.set(e,t),s=s.add(e)}return new Av(e.key,r,new Pm(s.toArray()),wv.none())}}function kv(e,t,n){var r;e instanceof xv?function(e,t,n){const r=e.value.clone(),s=Nv(e.fieldTransforms,t,n.transformResults);r.setAll(s),t.convertToFoundDocument(n.version,r).setHasCommittedMutations()}(e,t,n):e instanceof Av?function(e,t,n){if(!bv(e.precondition,t))return void t.convertToUnknownDocument(n.version);const r=Nv(e.fieldTransforms,t,n.transformResults),s=t.data;s.setAll(Cv(e)),s.setAll(r),t.convertToFoundDocument(n.version,s).setHasCommittedMutations()}(e,t,n):(r=n,t.convertToNoDocument(r.version).setHasCommittedMutations())}function Tv(e,t,n,r){return e instanceof xv?function(e,t,n,r){if(!bv(e.precondition,t))return n;const s=e.value.clone(),i=Dv(e.fieldTransforms,r,t);return s.setAll(i),t.convertToFoundDocument(t.version,s).setHasLocalMutations(),null}(e,t,n,r):e instanceof Av?function(e,t,n,r){if(!bv(e.precondition,t))return n;const s=Dv(e.fieldTransforms,r,t),i=t.data;return i.setAll(Cv(e)),i.setAll(s),t.convertToFoundDocument(t.version,i).setHasLocalMutations(),null===n?null:n.unionWith(e.fieldMask.fields).unionWith(e.fieldTransforms.map((e=>e.field)))}(e,t,n,r):(s=t,i=n,bv(e.precondition,s)?(s.convertToNoDocument(s.version).setHasLocalMutations(),null):i);var s,i}function Ev(e,t){let n=null;for(const r of e.fieldTransforms){const e=t.data.field(r.field),s=cv(r.transform,e||null);null!=s&&(null===n&&(n=gy.empty()),n.set(r.field,s))}return n||null}function Sv(e,t){return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&(n=e.fieldTransforms,r=t.fieldTransforms,!!(void 0===n&&void 0===r||n&&r&&Gg(n,r,((e,t)=>function(e,t){return e.field.isEqual(t.field)&&(n=e.transform,r=t.transform,n instanceof uv&&r instanceof uv||n instanceof dv&&r instanceof dv?Gg(n.elements,r.elements,Ym):n instanceof pv&&r instanceof pv?Ym(n._t,r._t):n instanceof lv&&r instanceof lv);var n,r}(e,t))))&&(0===e.type?e.value.isEqual(t.value):1!==e.type||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask)));var n,r}class xv extends _v{constructor(e,t,n,r=[]){super(),this.key=e,this.value=t,this.precondition=n,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class Av extends _v{constructor(e,t,n,r,s=[]){super(),this.key=e,this.data=t,this.fieldMask=n,this.precondition=r,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function Cv(e){const t=new Map;return e.fieldMask.fields.forEach((n=>{if(!n.isEmpty()){const r=e.data.field(n);t.set(n,r)}})),t}function Nv(e,t,n){const r=new Map;Cg(e.length===n.length);for(let s=0;s<n.length;s++){const i=e[s],o=i.transform,a=t.data.field(i.field);r.set(i.field,av(o,a,n[s]))}return r}function Dv(e,t,n){const r=new Map;for(const s of e){const e=s.transform,i=n.data.field(s.field);r.set(s.field,ov(e,i,t))}return r}class Rv extends _v{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Ov extends _v{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pv{constructor(e){this.count=e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Lv,Mv;function Fv(e){switch(e){default:return Ag();case Dg.CANCELLED:case Dg.UNKNOWN:case Dg.DEADLINE_EXCEEDED:case Dg.RESOURCE_EXHAUSTED:case Dg.INTERNAL:case Dg.UNAVAILABLE:case Dg.UNAUTHENTICATED:return!1;case Dg.INVALID_ARGUMENT:case Dg.NOT_FOUND:case Dg.ALREADY_EXISTS:case Dg.PERMISSION_DENIED:case Dg.FAILED_PRECONDITION:case Dg.ABORTED:case Dg.OUT_OF_RANGE:case Dg.UNIMPLEMENTED:case Dg.DATA_LOSS:return!0}}function Vv(e){if(void 0===e)return Eg("GRPC error has no .code"),Dg.UNKNOWN;switch(e){case Lv.OK:return Dg.OK;case Lv.CANCELLED:return Dg.CANCELLED;case Lv.UNKNOWN:return Dg.UNKNOWN;case Lv.DEADLINE_EXCEEDED:return Dg.DEADLINE_EXCEEDED;case Lv.RESOURCE_EXHAUSTED:return Dg.RESOURCE_EXHAUSTED;case Lv.INTERNAL:return Dg.INTERNAL;case Lv.UNAVAILABLE:return Dg.UNAVAILABLE;case Lv.UNAUTHENTICATED:return Dg.UNAUTHENTICATED;case Lv.INVALID_ARGUMENT:return Dg.INVALID_ARGUMENT;case Lv.NOT_FOUND:return Dg.NOT_FOUND;case Lv.ALREADY_EXISTS:return Dg.ALREADY_EXISTS;case Lv.PERMISSION_DENIED:return Dg.PERMISSION_DENIED;case Lv.FAILED_PRECONDITION:return Dg.FAILED_PRECONDITION;case Lv.ABORTED:return Dg.ABORTED;case Lv.OUT_OF_RANGE:return Dg.OUT_OF_RANGE;case Lv.UNIMPLEMENTED:return Dg.UNIMPLEMENTED;case Lv.DATA_LOSS:return Dg.DATA_LOSS;default:return Ag()}}(Mv=Lv||(Lv={}))[Mv.OK=0]="OK",Mv[Mv.CANCELLED=1]="CANCELLED",Mv[Mv.UNKNOWN=2]="UNKNOWN",Mv[Mv.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Mv[Mv.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Mv[Mv.NOT_FOUND=5]="NOT_FOUND",Mv[Mv.ALREADY_EXISTS=6]="ALREADY_EXISTS",Mv[Mv.PERMISSION_DENIED=7]="PERMISSION_DENIED",Mv[Mv.UNAUTHENTICATED=16]="UNAUTHENTICATED",Mv[Mv.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Mv[Mv.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Mv[Mv.ABORTED=10]="ABORTED",Mv[Mv.OUT_OF_RANGE=11]="OUT_OF_RANGE",Mv[Mv.UNIMPLEMENTED=12]="UNIMPLEMENTED",Mv[Mv.INTERNAL=13]="INTERNAL",Mv[Mv.UNAVAILABLE=14]="UNAVAILABLE",Mv[Mv.DATA_LOSS=15]="DATA_LOSS";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Uv{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),n=this.inner[t];if(void 0!==n)for(const[t,r]of n)if(this.equalsFn(t,e))return r}has(e){return void 0!==this.get(e)}set(e,t){const n=this.mapKeyFn(e),r=this.inner[n];if(void 0===r)return this.inner[n]=[[e,t]],void this.innerSize++;for(let n=0;n<r.length;n++)if(this.equalsFn(r[n][0],e))return void(r[n]=[e,t]);r.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),n=this.inner[t];if(void 0===n)return!1;for(let r=0;r<n.length;r++)if(this.equalsFn(n[r][0],e))return 1===n.length?delete this.inner[t]:n.splice(r,1),this.innerSize--,!0;return!1}forEach(e){Sm(this.inner,((t,n)=>{for(const[t,r]of n)e(t,r)}))}isEmpty(){return xm(this.inner)}size(){return this.innerSize}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bv=new Am(Zg.comparator);function jv(){return Bv}const qv=new Am(Zg.comparator);function $v(...e){let t=qv;for(const n of e)t=t.insert(n.key,n);return t}function zv(e){let t=qv;return e.forEach(((e,n)=>t=t.insert(e,n.overlayedDocument))),t}function Gv(){return Wv()}function Kv(){return Wv()}function Wv(){return new Uv((e=>e.toString()),((e,t)=>e.isEqual(t)))}const Hv=new Am(Zg.comparator),Qv=new Dm(Zg.comparator);function Jv(...e){let t=Qv;for(const n of e)t=t.add(n);return t}const Yv=new Dm(zg);function Xv(){return Yv}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zv{constructor(e,t,n,r,s){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=n,this.documentUpdates=r,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,t){const n=new Map;return n.set(e,ew.createSynthesizedTargetChangeForCurrentChange(e,t)),new Zv(Hg.min(),n,Xv(),jv(),Jv())}}class ew{constructor(e,t,n,r,s){this.resumeToken=e,this.current=t,this.addedDocuments=n,this.modifiedDocuments=r,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,t){return new ew(Lm.EMPTY_BYTE_STRING,t,Jv(),Jv(),Jv())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tw{constructor(e,t,n,r){this.gt=e,this.removedTargetIds=t,this.key=n,this.yt=r}}class nw{constructor(e,t){this.targetId=e,this.It=t}}class rw{constructor(e,t,n=Lm.EMPTY_BYTE_STRING,r=null){this.state=e,this.targetIds=t,this.resumeToken=n,this.cause=r}}class sw{constructor(){this.Tt=0,this.Et=aw(),this.At=Lm.EMPTY_BYTE_STRING,this.Rt=!1,this.bt=!0}get current(){return this.Rt}get resumeToken(){return this.At}get Pt(){return 0!==this.Tt}get vt(){return this.bt}Vt(e){e.approximateByteSize()>0&&(this.bt=!0,this.At=e)}St(){let e=Jv(),t=Jv(),n=Jv();return this.Et.forEach(((r,s)=>{switch(s){case 0:e=e.add(r);break;case 2:t=t.add(r);break;case 1:n=n.add(r);break;default:Ag()}})),new ew(this.At,this.Rt,e,t,n)}Dt(){this.bt=!1,this.Et=aw()}Ct(e,t){this.bt=!0,this.Et=this.Et.insert(e,t)}xt(e){this.bt=!0,this.Et=this.Et.remove(e)}Nt(){this.Tt+=1}kt(){this.Tt-=1}Ot(){this.bt=!0,this.Rt=!0}}class iw{constructor(e){this.Mt=e,this.Ft=new Map,this.$t=jv(),this.Bt=ow(),this.Lt=new Dm(zg)}Ut(e){for(const t of e.gt)e.yt&&e.yt.isFoundDocument()?this.qt(t,e.yt):this.Kt(t,e.key,e.yt);for(const t of e.removedTargetIds)this.Kt(t,e.key,e.yt)}Gt(e){this.forEachTarget(e,(t=>{const n=this.Qt(t);switch(e.state){case 0:this.jt(t)&&n.Vt(e.resumeToken);break;case 1:n.kt(),n.Pt||n.Dt(),n.Vt(e.resumeToken);break;case 2:n.kt(),n.Pt||this.removeTarget(t);break;case 3:this.jt(t)&&(n.Ot(),n.Vt(e.resumeToken));break;case 4:this.jt(t)&&(this.Wt(t),n.Vt(e.resumeToken));break;default:Ag()}}))}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Ft.forEach(((e,n)=>{this.jt(n)&&t(n)}))}zt(e){const t=e.targetId,n=e.It.count,r=this.Ht(t);if(r){const e=r.target;if(Iy(e))if(0===n){const n=new Zg(e.path);this.Kt(t,n,yy.newNoDocument(n,Hg.min()))}else Cg(1===n);else this.Jt(t)!==n&&(this.Wt(t),this.Lt=this.Lt.add(t))}}Yt(e){const t=new Map;this.Ft.forEach(((n,r)=>{const s=this.Ht(r);if(s){if(n.current&&Iy(s.target)){const t=new Zg(s.target.path);null!==this.$t.get(t)||this.Xt(r,t)||this.Kt(r,t,yy.newNoDocument(t,e))}n.vt&&(t.set(r,n.St()),n.Dt())}}));let n=Jv();this.Bt.forEach(((e,t)=>{let r=!0;t.forEachWhile((e=>{const t=this.Ht(e);return!t||2===t.purpose||(r=!1,!1)})),r&&(n=n.add(e))})),this.$t.forEach(((t,n)=>n.setReadTime(e)));const r=new Zv(e,t,this.Lt,this.$t,n);return this.$t=jv(),this.Bt=ow(),this.Lt=new Dm(zg),r}qt(e,t){if(!this.jt(e))return;const n=this.Xt(e,t.key)?2:0;this.Qt(e).Ct(t.key,n),this.$t=this.$t.insert(t.key,t),this.Bt=this.Bt.insert(t.key,this.Zt(t.key).add(e))}Kt(e,t,n){if(!this.jt(e))return;const r=this.Qt(e);this.Xt(e,t)?r.Ct(t,1):r.xt(t),this.Bt=this.Bt.insert(t,this.Zt(t).delete(e)),n&&(this.$t=this.$t.insert(t,n))}removeTarget(e){this.Ft.delete(e)}Jt(e){const t=this.Qt(e).St();return this.Mt.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Nt(e){this.Qt(e).Nt()}Qt(e){let t=this.Ft.get(e);return t||(t=new sw,this.Ft.set(e,t)),t}Zt(e){let t=this.Bt.get(e);return t||(t=new Dm(zg),this.Bt=this.Bt.insert(e,t)),t}jt(e){const t=null!==this.Ht(e);return t||Tg("WatchChangeAggregator","Detected inactive target",e),t}Ht(e){const t=this.Ft.get(e);return t&&t.Pt?null:this.Mt.te(e)}Wt(e){this.Ft.set(e,new sw),this.Mt.getRemoteKeysForTarget(e).forEach((t=>{this.Kt(e,t,null)}))}Xt(e,t){return this.Mt.getRemoteKeysForTarget(e).has(t)}}function ow(){return new Am(Zg.comparator)}function aw(){return new Am(Zg.comparator)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cw={asc:"ASCENDING",desc:"DESCENDING"},lw={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"};class uw{constructor(e,t){this.databaseId=e,this.dt=t}}function hw(e,t){return e.dt?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function dw(e,t){return e.dt?t.toBase64():t.toUint8Array()}function fw(e,t){return hw(e,t.toTimestamp())}function pw(e){return Cg(!!e),Hg.fromTimestamp(function(e){const t=Fm(e);return new Wg(t.seconds,t.nanos)}(e))}function gw(e,t){return(n=e,new Jg(["projects",n.projectId,"databases",n.database])).child("documents").child(t).canonicalString();var n}function mw(e){const t=Jg.fromString(e);return Cg(Vw(t)),t}function yw(e,t){return gw(e.databaseId,t.path)}function vw(e,t){const n=mw(t);if(n.get(1)!==e.databaseId.projectId)throw new Rg(Dg.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+e.databaseId.projectId);if(n.get(3)!==e.databaseId.database)throw new Rg(Dg.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+e.databaseId.database);return new Zg(Iw(n))}function ww(e,t){return gw(e.databaseId,t)}function bw(e){const t=mw(e);return 4===t.length?Jg.emptyPath():Iw(t)}function _w(e){return new Jg(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function Iw(e){return Cg(e.length>4&&"documents"===e.get(4)),e.popFirst(5)}function kw(e,t,n){return{name:yw(e,t),fields:n.value.mapValue.fields}}function Tw(e,t,n){const r=vw(e,t.name),s=pw(t.updateTime),i=new gy({mapValue:{fields:t.fields}}),o=yy.newFoundDocument(r,s,i);return n&&o.setHasCommittedMutations(),n?o.setHasCommittedMutations():o}function Ew(e,t){let n;if(t instanceof xv)n={update:kw(e,t.key,t.value)};else if(t instanceof Rv)n={delete:yw(e,t.key)};else if(t instanceof Av)n={update:kw(e,t.key,t.data),updateMask:Fw(t.fieldMask)};else{if(!(t instanceof Ov))return Ag();n={verify:yw(e,t.key)}}return t.fieldTransforms.length>0&&(n.updateTransforms=t.fieldTransforms.map((e=>function(e,t){const n=t.transform;if(n instanceof lv)return{fieldPath:t.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(n instanceof uv)return{fieldPath:t.field.canonicalString(),appendMissingElements:{values:n.elements}};if(n instanceof dv)return{fieldPath:t.field.canonicalString(),removeAllFromArray:{values:n.elements}};if(n instanceof pv)return{fieldPath:t.field.canonicalString(),increment:n._t};throw Ag()}(0,e)))),t.precondition.isNone||(n.currentDocument=(r=e,void 0!==(s=t.precondition).updateTime?{updateTime:fw(r,s.updateTime)}:void 0!==s.exists?{exists:s.exists}:Ag())),n;var r,s}function Sw(e,t){const n=t.currentDocument?void 0!==(s=t.currentDocument).updateTime?wv.updateTime(pw(s.updateTime)):void 0!==s.exists?wv.exists(s.exists):wv.none():wv.none(),r=t.updateTransforms?t.updateTransforms.map((t=>function(e,t){let n=null;if("setToServerValue"in t)Cg("REQUEST_TIME"===t.setToServerValue),n=new lv;else if("appendMissingElements"in t){const e=t.appendMissingElements.values||[];n=new uv(e)}else if("removeAllFromArray"in t){const e=t.removeAllFromArray.values||[];n=new dv(e)}else"increment"in t?n=new pv(e,t.increment):Ag();const r=Xg.fromServerFormat(t.fieldPath);return new yv(r,n)}(e,t))):[];var s;if(t.update){t.update.name;const s=vw(e,t.update.name),i=new gy({mapValue:{fields:t.update.fields}});if(t.updateMask){const e=function(e){const t=e.fieldPaths||[];return new Pm(t.map((e=>Xg.fromServerFormat(e))))}(t.updateMask);return new Av(s,i,e,n,r)}return new xv(s,i,n,r)}if(t.delete){const r=vw(e,t.delete);return new Rv(r,n)}if(t.verify){const r=vw(e,t.verify);return new Ov(r,n)}return Ag()}function xw(e,t){return{documents:[ww(e,t.path)]}}function Aw(e,t){const n={structuredQuery:{}},r=t.path;null!==t.collectionGroup?(n.parent=ww(e,r),n.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(n.parent=ww(e,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const s=function(e){if(0===e.length)return;const t=e.map((e=>function(e){if("=="===e.op){if(ay(e.value))return{unaryFilter:{field:Ow(e.field),op:"IS_NAN"}};if(oy(e.value))return{unaryFilter:{field:Ow(e.field),op:"IS_NULL"}}}else if("!="===e.op){if(ay(e.value))return{unaryFilter:{field:Ow(e.field),op:"IS_NOT_NAN"}};if(oy(e.value))return{unaryFilter:{field:Ow(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Ow(e.field),op:Rw(e.op),value:e.value}}}(e)));return 1===t.length?t[0]:{compositeFilter:{op:"AND",filters:t}}}(t.filters);s&&(n.structuredQuery.where=s);const i=function(e){if(0!==e.length)return e.map((e=>{return{field:Ow((t=e).field),direction:Dw(t.dir)};var t}))}(t.orderBy);i&&(n.structuredQuery.orderBy=i);const o=(a=e,c=t.limit,a.dt||Gm(c)?c:{value:c});var a,c,l;return null!==o&&(n.structuredQuery.limit=o),t.startAt&&(n.structuredQuery.startAt={before:(l=t.startAt).inclusive,values:l.position}),t.endAt&&(n.structuredQuery.endAt=function(e){return{before:!e.inclusive,values:e.position}}(t.endAt)),n}function Cw(e){let t=bw(e.parent);const n=e.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){Cg(1===r);const e=n.from[0];e.allDescendants?s=e.collectionId:t=t.child(e.collectionId)}let i=[];n.where&&(i=Nw(n.where));let o=[];n.orderBy&&(o=n.orderBy.map((e=>{return new My(Pw((t=e).field),function(e){switch(e){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(t.direction));var t})));let a=null;n.limit&&(a=function(e){let t;return t="object"==typeof e?e.value:e,Gm(t)?null:t}(n.limit));let c=null;n.startAt&&(c=function(e){const t=!!e.before,n=e.values||[];return new Ly(n,t)}(n.startAt));let l=null;return n.endAt&&(l=function(e){const t=!e.before,n=e.values||[];return new Ly(n,t)}(n.endAt)),jy(t,s,o,i,a,"F",c,l)}function Nw(e){return e?void 0!==e.unaryFilter?[Mw(e)]:void 0!==e.fieldFilter?[Lw(e)]:void 0!==e.compositeFilter?e.compositeFilter.filters.map((e=>Nw(e))).reduce(((e,t)=>e.concat(t))):Ag():[]}function Dw(e){return cw[e]}function Rw(e){return lw[e]}function Ow(e){return{fieldPath:e.canonicalString()}}function Pw(e){return Xg.fromServerFormat(e.fieldPath)}function Lw(e){return Sy.create(Pw(e.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return Ag()}}(e.fieldFilter.op),e.fieldFilter.value)}function Mw(e){switch(e.unaryFilter.op){case"IS_NAN":const t=Pw(e.unaryFilter.field);return Sy.create(t,"==",{doubleValue:NaN});case"IS_NULL":const n=Pw(e.unaryFilter.field);return Sy.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=Pw(e.unaryFilter.field);return Sy.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const s=Pw(e.unaryFilter.field);return Sy.create(s,"!=",{nullValue:"NULL_VALUE"});default:return Ag()}}function Fw(e){const t=[];return e.fields.forEach((e=>t.push(e.canonicalString()))),{fieldPaths:t}}function Vw(e){return e.length>=4&&"projects"===e.get(0)&&"databases"===e.get(2)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Uw(e){let t="";for(let n=0;n<e.length;n++)t.length>0&&(t=jw(t)),t=Bw(e.get(n),t);return jw(t)}function Bw(e,t){let n=t;const r=e.length;for(let t=0;t<r;t++){const r=e.charAt(t);switch(r){case"\0":n+="";break;case"":n+="";break;default:n+=r}}return n}function jw(e){return e+""}function qw(e){const t=e.length;if(Cg(t>=2),2===t)return Cg(""===e.charAt(0)&&""===e.charAt(1)),Jg.emptyPath();const n=t-2,r=[];let s="";for(let i=0;i<t;){const t=e.indexOf("",i);switch((t<0||t>n)&&Ag(),e.charAt(t+1)){case"":const n=e.substring(i,t);let o;0===s.length?o=n:(s+=n,o=s,s=""),r.push(o);break;case"":s+=e.substring(i,t),s+="\0";break;case"":s+=e.substring(i,t+1);break;default:Ag()}i=t+2}return new Jg(r)}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $w=["userId","batchId"];
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zw(e,t){return[e,Uw(t)]}function Gw(e,t,n){return[e,Uw(t),n]}const Kw={},Ww=["prefixPath","collectionGroup","readTime","documentId"],Hw=["prefixPath","collectionGroup","documentId"],Qw=["collectionGroup","readTime","prefixPath","documentId"],Jw=["canonicalId","targetId"],Yw=["targetId","path"],Xw=["path","targetId"],Zw=["collectionId","parent"],eb=["indexId","uid"],tb=["uid","sequenceNumber"],nb=["indexId","uid","arrayValue","directionalValue","orderedDocumentKey","documentKey"],rb=["indexId","uid","orderedDocumentKey"],sb=["userId","collectionPath","documentId"],ib=["userId","collectionPath","largestBatchId"],ob=["userId","collectionGroup","largestBatchId"],ab=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],cb=[...ab,"documentOverlays"],lb=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],ub=lb,hb=[...ub,"indexConfiguration","indexState","indexEntries"];
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class db extends um{constructor(e,t){super(),this.ee=e,this.currentSequenceNumber=t}}function fb(e,t){const n=Ng(e);return pm.N(n.ee,t)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pb{constructor(e,t,n,r){this.batchId=e,this.localWriteTime=t,this.baseMutations=n,this.mutations=r}applyToRemoteDocument(e,t){const n=t.mutationResults;for(let t=0;t<this.mutations.length;t++){const r=this.mutations[t];r.key.isEqual(e.key)&&kv(r,e,n[t])}}applyToLocalView(e,t){for(const n of this.baseMutations)n.key.isEqual(e.key)&&(t=Tv(n,e,t,this.localWriteTime));for(const n of this.mutations)n.key.isEqual(e.key)&&(t=Tv(n,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const n=Kv();return this.mutations.forEach((r=>{const s=e.get(r.key),i=s.overlayedDocument;let o=this.applyToLocalView(i,s.mutatedFields);o=t.has(r.key)?null:o;const a=Iv(i,o);null!==a&&n.set(r.key,a),i.isValidDocument()||i.convertToNoDocument(Hg.min())})),n}keys(){return this.mutations.reduce(((e,t)=>e.add(t.key)),Jv())}isEqual(e){return this.batchId===e.batchId&&Gg(this.mutations,e.mutations,((e,t)=>Sv(e,t)))&&Gg(this.baseMutations,e.baseMutations,((e,t)=>Sv(e,t)))}}class gb{constructor(e,t,n,r){this.batch=e,this.commitVersion=t,this.mutationResults=n,this.docVersions=r}static from(e,t,n){Cg(e.mutations.length===n.length);let r=Hv;const s=e.mutations;for(let e=0;e<s.length;e++)r=r.insert(s[e].key,n[e].version);return new gb(e,t,n,r)}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mb{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return null!==e&&this.mutation===e.mutation}toString(){return`Overlay{\n      largestBatchId: ${this.largestBatchId},\n      mutation: ${this.mutation.toString()}\n    }`}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yb{constructor(e,t,n,r,s=Hg.min(),i=Hg.min(),o=Lm.EMPTY_BYTE_STRING){this.target=e,this.targetId=t,this.purpose=n,this.sequenceNumber=r,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=i,this.resumeToken=o}withSequenceNumber(e){return new yb(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,t){return new yb(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new yb(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vb{constructor(e){this.ne=e}}function wb(e,t){const n=t.key,r={prefixPath:n.getCollectionPath().popLast().toArray(),collectionGroup:n.collectionGroup,documentId:n.path.lastSegment(),readTime:bb(t.readTime),hasCommittedMutations:t.hasCommittedMutations};if(t.isFoundDocument())r.document={name:yw(s=e.ne,(i=t).key),fields:i.data.value.mapValue.fields,updateTime:hw(s,i.version.toTimestamp())};else if(t.isNoDocument())r.noDocument={path:n.path.toArray(),readTime:_b(t.version)};else{if(!t.isUnknownDocument())return Ag();r.unknownDocument={path:n.path.toArray(),version:_b(t.version)}}var s,i;return r}function bb(e){const t=e.toTimestamp();return[t.seconds,t.nanoseconds]}function _b(e){const t=e.toTimestamp();return{seconds:t.seconds,nanoseconds:t.nanoseconds}}function Ib(e){const t=new Wg(e.seconds,e.nanoseconds);return Hg.fromTimestamp(t)}function kb(e,t){const n=(t.baseMutations||[]).map((t=>Sw(e.ne,t)));for(let e=0;e<t.mutations.length-1;++e){const n=t.mutations[e];if(e+1<t.mutations.length&&void 0!==t.mutations[e+1].transform){const r=t.mutations[e+1];n.updateTransforms=r.transform.fieldTransforms,t.mutations.splice(e+1,1),++e}}const r=t.mutations.map((t=>Sw(e.ne,t))),s=Wg.fromMillis(t.localWriteTimeMs);return new pb(t.batchId,s,n,r)}function Tb(e){const t=Ib(e.readTime),n=void 0!==e.lastLimboFreeSnapshotVersion?Ib(e.lastLimboFreeSnapshotVersion):Hg.min();let r;var s;return void 0!==e.query.documents?(Cg(1===(s=e.query).documents.length),r=Wy(qy(bw(s.documents[0])))):r=Wy(Cw(e.query)),new yb(r,e.targetId,0,e.lastListenSequenceNumber,t,n,Lm.fromBase64String(e.resumeToken))}function Eb(e,t){const n=_b(t.snapshotVersion),r=_b(t.lastLimboFreeSnapshotVersion);let s;s=Iy(t.target)?xw(e.ne,t.target):Aw(e.ne,t.target);const i=t.resumeToken.toBase64();return{targetId:t.targetId,canonicalId:by(t.target),readTime:n,resumeToken:i,lastListenSequenceNumber:t.sequenceNumber,lastLimboFreeSnapshotVersion:r,query:s}}function Sb(e){const t=Cw({parent:e.parent,structuredQuery:e.structuredQuery});return"LAST"===e.limitType?Hy(t,t.limit,"L"):t}function xb(e,t){return new mb(t.largestBatchId,Sw(e.ne,t.overlayMutation))}function Ab(e,t){const n=t.path.lastSegment();return[e,Uw(t.path.popLast()),n]}function Cb(e,t,n,r){return{indexId:e,uid:t.uid||"",sequenceNumber:n,readTime:_b(r.readTime),documentKey:Uw(r.documentKey.path),largestBatchId:r.largestBatchId}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nb{getBundleMetadata(e,t){return Db(e).get(t).next((e=>{if(e)return{id:(t=e).bundleId,createTime:Ib(t.createTime),version:t.version};var t}))}saveBundleMetadata(e,t){return Db(e).put({bundleId:(n=t).id,createTime:_b(pw(n.createTime)),version:n.version});var n}getNamedQuery(e,t){return Rb(e).get(t).next((e=>{if(e)return{name:(t=e).name,query:Sb(t.bundledQuery),readTime:Ib(t.readTime)};var t}))}saveNamedQuery(e,t){return Rb(e).put({name:(n=t).name,readTime:_b(pw(n.readTime)),bundledQuery:n.bundledQuery});var n}}function Db(e){return fb(e,"bundles")}function Rb(e){return fb(e,"namedQueries")}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ob{constructor(e,t){this.wt=e,this.userId=t}static se(e,t){const n=t.uid||"";return new Ob(e,n)}getOverlay(e,t){return Pb(e).get(Ab(this.userId,t)).next((e=>e?xb(this.wt,e):null))}getOverlays(e,t){const n=Gv();return dm.forEach(t,(t=>this.getOverlay(e,t).next((e=>{null!==e&&n.set(t,e)})))).next((()=>n))}saveOverlays(e,t,n){const r=[];return n.forEach(((n,s)=>{const i=new mb(t,s);r.push(this.ie(e,i))})),dm.waitFor(r)}removeOverlaysForBatchId(e,t,n){const r=new Set;t.forEach((e=>r.add(Uw(e.getCollectionPath()))));const s=[];return r.forEach((t=>{const r=IDBKeyRange.bound([this.userId,t,n],[this.userId,t,n+1],!1,!0);s.push(Pb(e).W("collectionPathOverlayIndex",r))})),dm.waitFor(s)}getOverlaysForCollection(e,t,n){const r=Gv(),s=Uw(t),i=IDBKeyRange.bound([this.userId,s,n],[this.userId,s,Number.POSITIVE_INFINITY],!0);return Pb(e).K("collectionPathOverlayIndex",i).next((e=>{for(const t of e){const e=xb(this.wt,t);r.set(e.getKey(),e)}return r}))}getOverlaysForCollectionGroup(e,t,n,r){const s=Gv();let i;const o=IDBKeyRange.bound([this.userId,t,n],[this.userId,t,Number.POSITIVE_INFINITY],!0);return Pb(e).J({index:"collectionGroupOverlayIndex",range:o},((e,t,n)=>{const o=xb(this.wt,t);s.size()<r||o.largestBatchId===i?(s.set(o.getKey(),o),i=o.largestBatchId):n.done()})).next((()=>s))}ie(e,t){return Pb(e).put(function(e,t,n){const[r,s,i]=Ab(t,n.mutation.key);return{userId:t,collectionPath:s,documentId:i,collectionGroup:n.mutation.key.getCollectionGroup(),largestBatchId:n.largestBatchId,overlayMutation:Ew(e.ne,n.mutation)}}(this.wt,this.userId,t))}}function Pb(e){return fb(e,"documentOverlays")}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lb{constructor(){}re(e,t){this.oe(e,t),t.ue()}oe(e,t){if("nullValue"in e)this.ce(t,5);else if("booleanValue"in e)this.ce(t,10),t.ae(e.booleanValue?1:0);else if("integerValue"in e)this.ce(t,15),t.ae(Vm(e.integerValue));else if("doubleValue"in e){const n=Vm(e.doubleValue);isNaN(n)?this.ce(t,13):(this.ce(t,15),Km(n)?t.ae(0):t.ae(n))}else if("timestampValue"in e){const n=e.timestampValue;this.ce(t,20),"string"==typeof n?t.he(n):(t.he(`${n.seconds||""}`),t.ae(n.nanos||0))}else if("stringValue"in e)this.le(e.stringValue,t),this.fe(t);else if("bytesValue"in e)this.ce(t,30),t.de(Um(e.bytesValue)),this.fe(t);else if("referenceValue"in e)this._e(e.referenceValue,t);else if("geoPointValue"in e){const n=e.geoPointValue;this.ce(t,45),t.ae(n.latitude||0),t.ae(n.longitude||0)}else"mapValue"in e?uy(e)?this.ce(t,Number.MAX_SAFE_INTEGER):(this.we(e.mapValue,t),this.fe(t)):"arrayValue"in e?(this.me(e.arrayValue,t),this.fe(t)):Ag()}le(e,t){this.ce(t,25),this.ge(e,t)}ge(e,t){t.he(e)}we(e,t){const n=e.fields||{};this.ce(t,55);for(const e of Object.keys(n))this.le(e,t),this.oe(n[e],t)}me(e,t){const n=e.values||[];this.ce(t,50);for(const e of n)this.oe(e,t)}_e(e,t){this.ce(t,37),Zg.fromName(e).path.forEach((e=>{this.ce(t,60),this.ge(e,t)}))}ce(e,t){e.ae(t)}fe(e){e.ae(2)}}function Mb(e){if(0===e)return 8;let t=0;return e>>4==0&&(t+=4,e<<=4),e>>6==0&&(t+=2,e<<=2),e>>7==0&&(t+=1),t}function Fb(e){const t=64-function(e){let t=0;for(let n=0;n<8;++n){const r=Mb(255&e[n]);if(t+=r,8!==r)break}return t}(e);return Math.ceil(t/8)}Lb.ye=new Lb;class Vb{constructor(){this.buffer=new Uint8Array(1024),this.position=0}pe(e){const t=e[Symbol.iterator]();let n=t.next();for(;!n.done;)this.Ie(n.value),n=t.next();this.Te()}Ee(e){const t=e[Symbol.iterator]();let n=t.next();for(;!n.done;)this.Ae(n.value),n=t.next();this.Re()}be(e){for(const t of e){const e=t.charCodeAt(0);if(e<128)this.Ie(e);else if(e<2048)this.Ie(960|e>>>6),this.Ie(128|63&e);else if(t<"\ud800"||"\udbff"<t)this.Ie(480|e>>>12),this.Ie(128|63&e>>>6),this.Ie(128|63&e);else{const e=t.codePointAt(0);this.Ie(240|e>>>18),this.Ie(128|63&e>>>12),this.Ie(128|63&e>>>6),this.Ie(128|63&e)}}this.Te()}Pe(e){for(const t of e){const e=t.charCodeAt(0);if(e<128)this.Ae(e);else if(e<2048)this.Ae(960|e>>>6),this.Ae(128|63&e);else if(t<"\ud800"||"\udbff"<t)this.Ae(480|e>>>12),this.Ae(128|63&e>>>6),this.Ae(128|63&e);else{const e=t.codePointAt(0);this.Ae(240|e>>>18),this.Ae(128|63&e>>>12),this.Ae(128|63&e>>>6),this.Ae(128|63&e)}}this.Re()}ve(e){const t=this.Ve(e),n=Fb(t);this.Se(1+n),this.buffer[this.position++]=255&n;for(let e=t.length-n;e<t.length;++e)this.buffer[this.position++]=255&t[e]}De(e){const t=this.Ve(e),n=Fb(t);this.Se(1+n),this.buffer[this.position++]=~(255&n);for(let e=t.length-n;e<t.length;++e)this.buffer[this.position++]=~(255&t[e])}Ce(){this.xe(255),this.xe(255)}Ne(){this.ke(255),this.ke(255)}reset(){this.position=0}seed(e){this.Se(e.length),this.buffer.set(e,this.position),this.position+=e.length}Oe(){return this.buffer.slice(0,this.position)}Ve(e){const t=function(e){const t=new DataView(new ArrayBuffer(8));return t.setFloat64(0,e,!1),new Uint8Array(t.buffer)}(e),n=0!=(128&t[0]);t[0]^=n?255:128;for(let e=1;e<t.length;++e)t[e]^=n?255:0;return t}Ie(e){const t=255&e;0===t?(this.xe(0),this.xe(255)):255===t?(this.xe(255),this.xe(0)):this.xe(t)}Ae(e){const t=255&e;0===t?(this.ke(0),this.ke(255)):255===t?(this.ke(255),this.ke(0)):this.ke(e)}Te(){this.xe(0),this.xe(1)}Re(){this.ke(0),this.ke(1)}xe(e){this.Se(1),this.buffer[this.position++]=e}ke(e){this.Se(1),this.buffer[this.position++]=~e}Se(e){const t=e+this.position;if(t<=this.buffer.length)return;let n=2*this.buffer.length;n<t&&(n=t);const r=new Uint8Array(n);r.set(this.buffer),this.buffer=r}}class Ub{constructor(e){this.Me=e}de(e){this.Me.pe(e)}he(e){this.Me.be(e)}ae(e){this.Me.ve(e)}ue(){this.Me.Ce()}}class Bb{constructor(e){this.Me=e}de(e){this.Me.Ee(e)}he(e){this.Me.Pe(e)}ae(e){this.Me.De(e)}ue(){this.Me.Ne()}}class jb{constructor(){this.Me=new Vb,this.Fe=new Ub(this.Me),this.$e=new Bb(this.Me)}seed(e){this.Me.seed(e)}Be(e){return 0===e?this.Fe:this.$e}Oe(){return this.Me.Oe()}reset(){this.Me.reset()}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qb{constructor(e,t,n,r){this.indexId=e,this.documentKey=t,this.arrayValue=n,this.directionalValue=r}Le(){const e=this.directionalValue.length,t=0===e||255===this.directionalValue[e-1]?e+1:e,n=new Uint8Array(t);return n.set(this.directionalValue,0),t!==e?n.set([0],this.directionalValue.length):++n[n.length-1],new qb(this.indexId,this.documentKey,this.arrayValue,n)}}function $b(e,t){let n=e.indexId-t.indexId;return 0!==n?n:(n=zb(e.arrayValue,t.arrayValue),0!==n?n:(n=zb(e.directionalValue,t.directionalValue),0!==n?n:Zg.comparator(e.documentKey,t.documentKey)))}function zb(e,t){for(let n=0;n<e.length&&n<t.length;++n){const r=e[n]-t[n];if(0!==r)return r}return e.length-t.length}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gb{constructor(e){this.collectionId=null!=e.collectionGroup?e.collectionGroup:e.path.lastSegment(),this.Ue=e.orderBy,this.qe=[];for(const t of e.filters){const e=t;e.ht()?this.Ke=e:this.qe.push(e)}}Ge(e){const t=tm(e);if(void 0!==t&&!this.Qe(t))return!1;const n=nm(e);let r=0,s=0;for(;r<n.length&&this.Qe(n[r]);++r);if(r===n.length)return!0;if(void 0!==this.Ke){const e=n[r];if(!this.je(this.Ke,e)||!this.We(this.Ue[s++],e))return!1;++r}for(;r<n.length;++r){const e=n[r];if(s>=this.Ue.length||!this.We(this.Ue[s++],e))return!1}return!0}Qe(e){for(const t of this.qe)if(this.je(t,e))return!0;return!1}je(e,t){if(void 0===e||!e.field.isEqual(t.fieldPath))return!1;const n="array-contains"===e.op||"array-contains-any"===e.op;return 2===t.kind===n}We(e,t){return!!e.field.isEqual(t.fieldPath)&&(0===t.kind&&"asc"===e.dir||1===t.kind&&"desc"===e.dir)}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kb{constructor(){this.ze=new Wb}addToCollectionParentIndex(e,t){return this.ze.add(t),dm.resolve()}getCollectionParents(e,t){return dm.resolve(this.ze.getEntries(t))}addFieldIndex(e,t){return dm.resolve()}deleteFieldIndex(e,t){return dm.resolve()}getDocumentsMatchingTarget(e,t){return dm.resolve(null)}getIndexType(e,t){return dm.resolve(0)}getFieldIndexes(e,t){return dm.resolve([])}getNextCollectionGroupToUpdate(e){return dm.resolve(null)}getMinOffset(e,t){return dm.resolve(am.min())}getMinOffsetFromCollectionGroup(e,t){return dm.resolve(am.min())}updateCollectionGroup(e,t,n){return dm.resolve()}updateIndexEntries(e,t){return dm.resolve()}}class Wb{constructor(){this.index={}}add(e){const t=e.lastSegment(),n=e.popLast(),r=this.index[t]||new Dm(Jg.comparator),s=!r.has(n);return this.index[t]=r.add(n),s}has(e){const t=e.lastSegment(),n=e.popLast(),r=this.index[t];return r&&r.has(n)}getEntries(e){return(this.index[e]||new Dm(Jg.comparator)).toArray()}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hb=new Uint8Array(0);class Qb{constructor(e,t){this.user=e,this.databaseId=t,this.He=new Wb,this.Je=new Uv((e=>by(e)),((e,t)=>_y(e,t))),this.uid=e.uid||""}addToCollectionParentIndex(e,t){if(!this.He.has(t)){const n=t.lastSegment(),r=t.popLast();e.addOnCommittedListener((()=>{this.He.add(t)}));const s={collectionId:n,parent:Uw(r)};return Jb(e).put(s)}return dm.resolve()}getCollectionParents(e,t){const n=[],r=IDBKeyRange.bound([t,""],[Kg(t),""],!1,!0);return Jb(e).K(r).next((e=>{for(const r of e){if(r.collectionId!==t)break;n.push(qw(r.parent))}return n}))}addFieldIndex(e,t){const n=Xb(e),r={indexId:(s=t).indexId,collectionGroup:s.collectionGroup,fields:s.fields.map((e=>[e.fieldPath.canonicalString(),e.kind]))};var s;delete r.indexId;const i=n.add(r);if(t.indexState){const n=Zb(e);return i.next((e=>{n.put(Cb(e,this.user,t.indexState.sequenceNumber,t.indexState.offset))}))}return i.next()}deleteFieldIndex(e,t){const n=Xb(e),r=Zb(e),s=Yb(e);return n.delete(t.indexId).next((()=>r.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0)))).next((()=>s.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0))))}getDocumentsMatchingTarget(e,t){const n=Yb(e);let r=!0;const s=new Map;return dm.forEach(this.Ye(t),(t=>this.Xe(e,t).next((e=>{r&&(r=!!e),s.set(t,e)})))).next((()=>{if(r){let e=Jv();const r=[];return dm.forEach(s,((s,i)=>{var o;Tg("IndexedDbIndexManager",`Using index ${o=s,`id=${o.indexId}|cg=${o.collectionGroup}|f=${o.fields.map((e=>`${e.fieldPath}:${e.kind}`)).join(",")}`} to execute ${by(t)}`);const a=function(e,t){const n=tm(t);if(void 0===n)return null;for(const t of ky(e,n.fieldPath))switch(t.op){case"array-contains-any":return t.value.arrayValue.values||[];case"array-contains":return[t.value]}return null}(i,s),c=function(e,t){const n=new Map;for(const r of nm(t))for(const t of ky(e,r.fieldPath))switch(t.op){case"==":case"in":n.set(r.fieldPath.canonicalString(),t.value);break;case"not-in":case"!=":return n.set(r.fieldPath.canonicalString(),t.value),Array.from(n.values())}return null}(i,s),l=function(e,t){const n=[];let r=!0;for(const s of nm(t)){const t=0===s.kind?Ty(e,s.fieldPath,e.startAt):Ey(e,s.fieldPath,e.startAt);n.push(t.value),r&&(r=t.inclusive)}return new Ly(n,r)}(i,s),u=function(e,t){const n=[];let r=!0;for(const s of nm(t)){const t=0===s.kind?Ey(e,s.fieldPath,e.endAt):Ty(e,s.fieldPath,e.endAt);n.push(t.value),r&&(r=t.inclusive)}return new Ly(n,r)}(i,s),h=this.Ze(s,i,l),d=this.Ze(s,i,u),f=this.tn(s,i,c),p=this.en(s.indexId,a,h,l.inclusive,d,u.inclusive,f);return dm.forEach(p,(s=>n.j(s,t.limit).next((t=>{t.forEach((t=>{const n=Zg.fromSegments(t.documentKey);e.has(n)||(e=e.add(n),r.push(n))}))}))))})).next((()=>r))}return dm.resolve(null)}))}Ye(e){let t=this.Je.get(e);return t||(t=[e],this.Je.set(e,t),t)}en(e,t,n,r,s,i,o){const a=(null!=t?t.length:1)*Math.max(n.length,s.length),c=a/(null!=t?t.length:1),l=[];for(let u=0;u<a;++u){const a=t?this.nn(t[u/c]):Hb,h=this.sn(e,a,n[u%c],r),d=this.rn(e,a,s[u%c],i),f=o.map((t=>this.sn(e,a,t,!0)));l.push(...this.createRange(h,d,f))}return l}sn(e,t,n,r){const s=new qb(e,Zg.empty(),t,n);return r?s:s.Le()}rn(e,t,n,r){const s=new qb(e,Zg.empty(),t,n);return r?s.Le():s}Xe(e,t){const n=new Gb(t),r=null!=t.collectionGroup?t.collectionGroup:t.path.lastSegment();return this.getFieldIndexes(e,r).next((e=>{let t=null;for(const r of e)n.Ge(r)&&(!t||r.fields.length>t.fields.length)&&(t=r);return t}))}getIndexType(e,t){let n=2;return dm.forEach(this.Ye(t),(t=>this.Xe(e,t).next((e=>{e?0!==n&&e.fields.length<function(e){let t=new Dm(Xg.comparator),n=!1;for(const r of e.filters){const e=r;e.field.isKeyField()||("array-contains"===e.op||"array-contains-any"===e.op?n=!0:t=t.add(e.field))}for(const n of e.orderBy)n.field.isKeyField()||(t=t.add(n.field));return t.size+(n?1:0)}(t)&&(n=1):n=0})))).next((()=>n))}on(e,t){const n=new jb;for(const r of nm(e)){const e=t.data.field(r.fieldPath);if(null==e)return null;const s=n.Be(r.kind);Lb.ye.re(e,s)}return n.Oe()}nn(e){const t=new jb;return Lb.ye.re(e,t.Be(0)),t.Oe()}un(e,t){const n=new jb;return Lb.ye.re(ry(this.databaseId,t),n.Be(function(e){const t=nm(e);return 0===t.length?0:t[t.length-1].kind}(e))),n.Oe()}tn(e,t,n){if(null===n)return[];let r=[];r.push(new jb);let s=0;for(const i of nm(e)){const e=n[s++];for(const n of r)if(this.cn(t,i.fieldPath)&&iy(e))r=this.an(r,i,e);else{const t=n.Be(i.kind);Lb.ye.re(e,t)}}return this.hn(r)}Ze(e,t,n){return this.tn(e,t,n.position)}hn(e){const t=[];for(let n=0;n<e.length;++n)t[n]=e[n].Oe();return t}an(e,t,n){const r=[...e],s=[];for(const e of n.arrayValue.values||[])for(const n of r){const r=new jb;r.seed(n.Oe()),Lb.ye.re(e,r.Be(t.kind)),s.push(r)}return s}cn(e,t){return!!e.filters.find((e=>e instanceof Sy&&e.field.isEqual(t)&&("in"===e.op||"not-in"===e.op)))}getFieldIndexes(e,t){const n=Xb(e),r=Zb(e);return(t?n.K("collectionGroupIndex",IDBKeyRange.bound(t,t)):n.K()).next((e=>{const t=[];return dm.forEach(e,(e=>r.get([e.indexId,this.uid]).next((n=>{t.push(function(e,t){const n=t?new sm(t.sequenceNumber,new am(Ib(t.readTime),new Zg(qw(t.documentKey)),t.largestBatchId)):sm.empty(),r=e.fields.map((([e,t])=>new rm(Xg.fromServerFormat(e),t)));return new em(e.indexId,e.collectionGroup,r,n)}(e,n))})))).next((()=>t))}))}getNextCollectionGroupToUpdate(e){return this.getFieldIndexes(e).next((e=>0===e.length?null:(e.sort(((e,t)=>{const n=e.indexState.sequenceNumber-t.indexState.sequenceNumber;return 0!==n?n:zg(e.collectionGroup,t.collectionGroup)})),e[0].collectionGroup)))}updateCollectionGroup(e,t,n){const r=Xb(e),s=Zb(e);return this.ln(e).next((e=>r.K("collectionGroupIndex",IDBKeyRange.bound(t,t)).next((t=>dm.forEach(t,(t=>s.put(Cb(t.indexId,this.user,e,n))))))))}updateIndexEntries(e,t){const n=new Map;return dm.forEach(t,((t,r)=>{const s=n.get(t.collectionGroup);return(s?dm.resolve(s):this.getFieldIndexes(e,t.collectionGroup)).next((s=>(n.set(t.collectionGroup,s),dm.forEach(s,(n=>this.fn(e,t,n).next((t=>{const s=this.dn(r,n);return t.isEqual(s)?dm.resolve():this._n(e,r,n,t,s)})))))))}))}wn(e,t,n,r){return Yb(e).put({indexId:r.indexId,uid:this.uid,arrayValue:r.arrayValue,directionalValue:r.directionalValue,orderedDocumentKey:this.un(n,t.key),documentKey:t.key.path.toArray()})}mn(e,t,n,r){return Yb(e).delete([r.indexId,this.uid,r.arrayValue,r.directionalValue,this.un(n,t.key),t.key.path.toArray()])}fn(e,t,n){const r=Yb(e);let s=new Dm($b);return r.J({index:"documentKeyIndex",range:IDBKeyRange.only([n.indexId,this.uid,this.un(n,t)])},((e,r)=>{s=s.add(new qb(n.indexId,t,r.arrayValue,r.directionalValue))})).next((()=>s))}dn(e,t){let n=new Dm($b);const r=this.on(t,e);if(null==r)return n;const s=tm(t);if(null!=s){const i=e.data.field(s.fieldPath);if(iy(i))for(const s of i.arrayValue.values||[])n=n.add(new qb(t.indexId,e.key,this.nn(s),r))}else n=n.add(new qb(t.indexId,e.key,Hb,r));return n}_n(e,t,n,r,s){Tg("IndexedDbIndexManager","Updating index entries for document '%s'",t.key);const i=[];return function(e,t,n,r,s){const i=e.getIterator(),o=t.getIterator();let a=Om(i),c=Om(o);for(;a||c;){let e=!1,t=!1;if(a&&c){const r=n(a,c);r<0?t=!0:r>0&&(e=!0)}else null!=a?t=!0:e=!0;e?(r(c),c=Om(o)):t?(s(a),a=Om(i)):(a=Om(i),c=Om(o))}}(r,s,$b,(r=>{i.push(this.wn(e,t,n,r))}),(r=>{i.push(this.mn(e,t,n,r))})),dm.waitFor(i)}ln(e){let t=1;return Zb(e).J({index:"sequenceNumberIndex",reverse:!0,range:IDBKeyRange.upperBound([this.uid,Number.MAX_SAFE_INTEGER])},((e,n,r)=>{r.done(),t=n.sequenceNumber+1})).next((()=>t))}createRange(e,t,n){n=n.sort(((e,t)=>$b(e,t))).filter(((e,t,n)=>!t||0!==$b(e,n[t-1])));const r=[];r.push(e);for(const s of n){const n=$b(s,e),i=$b(s,t);if(0===n)r[0]=e.Le();else if(n>0&&i<0)r.push(s),r.push(s.Le());else if(i>0)break}r.push(t);const s=[];for(let e=0;e<r.length;e+=2)s.push(IDBKeyRange.bound([r[e].indexId,this.uid,r[e].arrayValue,r[e].directionalValue,Hb,[]],[r[e+1].indexId,this.uid,r[e+1].arrayValue,r[e+1].directionalValue,Hb,[]]));return s}getMinOffsetFromCollectionGroup(e,t){return this.getFieldIndexes(e,t).next(e_)}getMinOffset(e,t){return dm.mapArray(this.Ye(t),(t=>this.Xe(e,t).next((e=>e||Ag())))).next(e_)}}function Jb(e){return fb(e,"collectionParents")}function Yb(e){return fb(e,"indexEntries")}function Xb(e){return fb(e,"indexConfiguration")}function Zb(e){return fb(e,"indexState")}function e_(e){Cg(0!==e.length);let t=e[0].indexState.offset,n=t.largestBatchId;for(let r=1;r<e.length;r++){const s=e[r].indexState.offset;cm(s,t)<0&&(t=s),n<s.largestBatchId&&(n=s.largestBatchId)}return new am(t.readTime,t.documentKey,n)}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const t_={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class n_{constructor(e,t,n){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=n}static withCacheSize(e){return new n_(e,n_.DEFAULT_COLLECTION_PERCENTILE,n_.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function r_(e,t,n){const r=e.store("mutations"),s=e.store("documentMutations"),i=[],o=IDBKeyRange.only(n.batchId);let a=0;const c=r.J({range:o},((e,t,n)=>(a++,n.delete())));i.push(c.next((()=>{Cg(1===a)})));const l=[];for(const e of n.mutations){const r=Gw(t,e.key.path,n.batchId);i.push(s.delete(r)),l.push(e.key)}return dm.waitFor(i).next((()=>l))}function s_(e){if(!e)return 0;let t;if(e.document)t=e.document;else if(e.unknownDocument)t=e.unknownDocument;else{if(!e.noDocument)throw Ag();t=e.noDocument}return JSON.stringify(t).length}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */n_.DEFAULT_COLLECTION_PERCENTILE=10,n_.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,n_.DEFAULT=new n_(41943040,n_.DEFAULT_COLLECTION_PERCENTILE,n_.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),n_.DISABLED=new n_(-1,0,0);class i_{constructor(e,t,n,r){this.userId=e,this.wt=t,this.indexManager=n,this.referenceDelegate=r,this.gn={}}static se(e,t,n,r){Cg(""!==e.uid);const s=e.isAuthenticated()?e.uid:"";return new i_(s,t,n,r)}checkEmpty(e){let t=!0;const n=IDBKeyRange.bound([this.userId,Number.NEGATIVE_INFINITY],[this.userId,Number.POSITIVE_INFINITY]);return a_(e).J({index:"userMutationsIndex",range:n},((e,n,r)=>{t=!1,r.done()})).next((()=>t))}addMutationBatch(e,t,n,r){const s=c_(e),i=a_(e);return i.add({}).next((o=>{Cg("number"==typeof o);const a=new pb(o,t,n,r),c=function(e,t,n){const r=n.baseMutations.map((t=>Ew(e.ne,t))),s=n.mutations.map((t=>Ew(e.ne,t)));return{userId:t,batchId:n.batchId,localWriteTimeMs:n.localWriteTime.toMillis(),baseMutations:r,mutations:s}}(this.wt,this.userId,a),l=[];let u=new Dm(((e,t)=>zg(e.canonicalString(),t.canonicalString())));for(const e of r){const t=Gw(this.userId,e.key.path,o);u=u.add(e.key.path.popLast()),l.push(i.put(c)),l.push(s.put(t,Kw))}return u.forEach((t=>{l.push(this.indexManager.addToCollectionParentIndex(e,t))})),e.addOnCommittedListener((()=>{this.gn[o]=a.keys()})),dm.waitFor(l).next((()=>a))}))}lookupMutationBatch(e,t){return a_(e).get(t).next((e=>e?(Cg(e.userId===this.userId),kb(this.wt,e)):null))}yn(e,t){return this.gn[t]?dm.resolve(this.gn[t]):this.lookupMutationBatch(e,t).next((e=>{if(e){const n=e.keys();return this.gn[t]=n,n}return null}))}getNextMutationBatchAfterBatchId(e,t){const n=t+1,r=IDBKeyRange.lowerBound([this.userId,n]);let s=null;return a_(e).J({index:"userMutationsIndex",range:r},((e,t,r)=>{t.userId===this.userId&&(Cg(t.batchId>=n),s=kb(this.wt,t)),r.done()})).next((()=>s))}getHighestUnacknowledgedBatchId(e){const t=IDBKeyRange.upperBound([this.userId,Number.POSITIVE_INFINITY]);let n=-1;return a_(e).J({index:"userMutationsIndex",range:t,reverse:!0},((e,t,r)=>{n=t.batchId,r.done()})).next((()=>n))}getAllMutationBatches(e){const t=IDBKeyRange.bound([this.userId,-1],[this.userId,Number.POSITIVE_INFINITY]);return a_(e).K("userMutationsIndex",t).next((e=>e.map((e=>kb(this.wt,e)))))}getAllMutationBatchesAffectingDocumentKey(e,t){const n=zw(this.userId,t.path),r=IDBKeyRange.lowerBound(n),s=[];return c_(e).J({range:r},((n,r,i)=>{const[o,a,c]=n,l=qw(a);if(o===this.userId&&t.path.isEqual(l))return a_(e).get(c).next((e=>{if(!e)throw Ag();Cg(e.userId===this.userId),s.push(kb(this.wt,e))}));i.done()})).next((()=>s))}getAllMutationBatchesAffectingDocumentKeys(e,t){let n=new Dm(zg);const r=[];return t.forEach((t=>{const s=zw(this.userId,t.path),i=IDBKeyRange.lowerBound(s),o=c_(e).J({range:i},((e,r,s)=>{const[i,o,a]=e,c=qw(o);i===this.userId&&t.path.isEqual(c)?n=n.add(a):s.done()}));r.push(o)})),dm.waitFor(r).next((()=>this.pn(e,n)))}getAllMutationBatchesAffectingQuery(e,t){const n=t.path,r=n.length+1,s=zw(this.userId,n),i=IDBKeyRange.lowerBound(s);let o=new Dm(zg);return c_(e).J({range:i},((e,t,s)=>{const[i,a,c]=e,l=qw(a);i===this.userId&&n.isPrefixOf(l)?l.length===r&&(o=o.add(c)):s.done()})).next((()=>this.pn(e,o)))}pn(e,t){const n=[],r=[];return t.forEach((t=>{r.push(a_(e).get(t).next((e=>{if(null===e)throw Ag();Cg(e.userId===this.userId),n.push(kb(this.wt,e))})))})),dm.waitFor(r).next((()=>n))}removeMutationBatch(e,t){return r_(e.ee,this.userId,t).next((n=>(e.addOnCommittedListener((()=>{this.In(t.batchId)})),dm.forEach(n,(t=>this.referenceDelegate.markPotentiallyOrphaned(e,t))))))}In(e){delete this.gn[e]}performConsistencyCheck(e){return this.checkEmpty(e).next((t=>{if(!t)return dm.resolve();const n=IDBKeyRange.lowerBound([this.userId]),r=[];return c_(e).J({range:n},((e,t,n)=>{if(e[0]===this.userId){const t=qw(e[1]);r.push(t)}else n.done()})).next((()=>{Cg(0===r.length)}))}))}containsKey(e,t){return o_(e,this.userId,t)}Tn(e){return l_(e).get(this.userId).next((e=>e||{userId:this.userId,lastAcknowledgedBatchId:-1,lastStreamToken:""}))}}function o_(e,t,n){const r=zw(t,n.path),s=r[1],i=IDBKeyRange.lowerBound(r);let o=!1;return c_(e).J({range:i,H:!0},((e,n,r)=>{const[i,a,c]=e;i===t&&a===s&&(o=!0),r.done()})).next((()=>o))}function a_(e){return fb(e,"mutations")}function c_(e){return fb(e,"documentMutations")}function l_(e){return fb(e,"mutationQueues")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u_{constructor(e){this.En=e}next(){return this.En+=2,this.En}static An(){return new u_(0)}static Rn(){return new u_(-1)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class h_{constructor(e,t){this.referenceDelegate=e,this.wt=t}allocateTargetId(e){return this.bn(e).next((t=>{const n=new u_(t.highestTargetId);return t.highestTargetId=n.next(),this.Pn(e,t).next((()=>t.highestTargetId))}))}getLastRemoteSnapshotVersion(e){return this.bn(e).next((e=>Hg.fromTimestamp(new Wg(e.lastRemoteSnapshotVersion.seconds,e.lastRemoteSnapshotVersion.nanoseconds))))}getHighestSequenceNumber(e){return this.bn(e).next((e=>e.highestListenSequenceNumber))}setTargetsMetadata(e,t,n){return this.bn(e).next((r=>(r.highestListenSequenceNumber=t,n&&(r.lastRemoteSnapshotVersion=n.toTimestamp()),t>r.highestListenSequenceNumber&&(r.highestListenSequenceNumber=t),this.Pn(e,r))))}addTargetData(e,t){return this.vn(e,t).next((()=>this.bn(e).next((n=>(n.targetCount+=1,this.Vn(t,n),this.Pn(e,n))))))}updateTargetData(e,t){return this.vn(e,t)}removeTargetData(e,t){return this.removeMatchingKeysForTargetId(e,t.targetId).next((()=>d_(e).delete(t.targetId))).next((()=>this.bn(e))).next((t=>(Cg(t.targetCount>0),t.targetCount-=1,this.Pn(e,t))))}removeTargets(e,t,n){let r=0;const s=[];return d_(e).J(((i,o)=>{const a=Tb(o);a.sequenceNumber<=t&&null===n.get(a.targetId)&&(r++,s.push(this.removeTargetData(e,a)))})).next((()=>dm.waitFor(s))).next((()=>r))}forEachTarget(e,t){return d_(e).J(((e,n)=>{const r=Tb(n);t(r)}))}bn(e){return f_(e).get("targetGlobalKey").next((e=>(Cg(null!==e),e)))}Pn(e,t){return f_(e).put("targetGlobalKey",t)}vn(e,t){return d_(e).put(Eb(this.wt,t))}Vn(e,t){let n=!1;return e.targetId>t.highestTargetId&&(t.highestTargetId=e.targetId,n=!0),e.sequenceNumber>t.highestListenSequenceNumber&&(t.highestListenSequenceNumber=e.sequenceNumber,n=!0),n}getTargetCount(e){return this.bn(e).next((e=>e.targetCount))}getTargetData(e,t){const n=by(t),r=IDBKeyRange.bound([n,Number.NEGATIVE_INFINITY],[n,Number.POSITIVE_INFINITY]);let s=null;return d_(e).J({range:r,index:"queryTargetsIndex"},((e,n,r)=>{const i=Tb(n);_y(t,i.target)&&(s=i,r.done())})).next((()=>s))}addMatchingKeys(e,t,n){const r=[],s=p_(e);return t.forEach((t=>{const i=Uw(t.path);r.push(s.put({targetId:n,path:i})),r.push(this.referenceDelegate.addReference(e,n,t))})),dm.waitFor(r)}removeMatchingKeys(e,t,n){const r=p_(e);return dm.forEach(t,(t=>{const s=Uw(t.path);return dm.waitFor([r.delete([n,s]),this.referenceDelegate.removeReference(e,n,t)])}))}removeMatchingKeysForTargetId(e,t){const n=p_(e),r=IDBKeyRange.bound([t],[t+1],!1,!0);return n.delete(r)}getMatchingKeysForTargetId(e,t){const n=IDBKeyRange.bound([t],[t+1],!1,!0),r=p_(e);let s=Jv();return r.J({range:n,H:!0},((e,t,n)=>{const r=qw(e[1]),i=new Zg(r);s=s.add(i)})).next((()=>s))}containsKey(e,t){const n=Uw(t.path),r=IDBKeyRange.bound([n],[Kg(n)],!1,!0);let s=0;return p_(e).J({index:"documentTargetsIndex",H:!0,range:r},(([e,t],n,r)=>{0!==e&&(s++,r.done())})).next((()=>s>0))}te(e,t){return d_(e).get(t).next((e=>e?Tb(e):null))}}function d_(e){return fb(e,"targets")}function f_(e){return fb(e,"targetGlobal")}function p_(e){return fb(e,"targetDocuments")}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function g_([e,t],[n,r]){const s=zg(e,n);return 0===s?zg(t,r):s}class m_{constructor(e){this.Sn=e,this.buffer=new Dm(g_),this.Dn=0}Cn(){return++this.Dn}xn(e){const t=[e,this.Cn()];if(this.buffer.size<this.Sn)this.buffer=this.buffer.add(t);else{const e=this.buffer.last();g_(t,e)<0&&(this.buffer=this.buffer.delete(e).add(t))}}get maxValue(){return this.buffer.last()[0]}}class y_{constructor(e,t,n){this.garbageCollector=e,this.asyncQueue=t,this.localStore=n,this.Nn=null}start(){-1!==this.garbageCollector.params.cacheSizeCollectionThreshold&&this.kn(6e4)}stop(){this.Nn&&(this.Nn.cancel(),this.Nn=null)}get started(){return null!==this.Nn}kn(e){Tg("LruGarbageCollector",`Garbage collection scheduled in ${e}ms`),this.Nn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,(async()=>{this.Nn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(e){ym(e)?Tg("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",e):await hm(e)}await this.kn(3e5)}))}}class v_{constructor(e,t){this.On=e,this.params=t}calculateTargetCount(e,t){return this.On.Mn(e).next((e=>Math.floor(t/100*e)))}nthSequenceNumber(e,t){if(0===t)return dm.resolve(Tm.ot);const n=new m_(t);return this.On.forEachTarget(e,(e=>n.xn(e.sequenceNumber))).next((()=>this.On.Fn(e,(e=>n.xn(e))))).next((()=>n.maxValue))}removeTargets(e,t,n){return this.On.removeTargets(e,t,n)}removeOrphanedDocuments(e,t){return this.On.removeOrphanedDocuments(e,t)}collect(e,t){return-1===this.params.cacheSizeCollectionThreshold?(Tg("LruGarbageCollector","Garbage collection skipped; disabled"),dm.resolve(t_)):this.getCacheSize(e).next((n=>n<this.params.cacheSizeCollectionThreshold?(Tg("LruGarbageCollector",`Garbage collection skipped; Cache size ${n} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),t_):this.$n(e,t)))}getCacheSize(e){return this.On.getCacheSize(e)}$n(e,t){let n,r,s,i,o,a,c;const l=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next((t=>(t>this.params.maximumSequenceNumbersToCollect?(Tg("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${t}`),r=this.params.maximumSequenceNumbersToCollect):r=t,i=Date.now(),this.nthSequenceNumber(e,r)))).next((r=>(n=r,o=Date.now(),this.removeTargets(e,n,t)))).next((t=>(s=t,a=Date.now(),this.removeOrphanedDocuments(e,n)))).next((e=>(c=Date.now(),kg()<=Ni.DEBUG&&Tg("LruGarbageCollector",`LRU Garbage Collection\n\tCounted targets in ${i-l}ms\n\tDetermined least recently used ${r} in `+(o-i)+`ms\n\tRemoved ${s} targets in `+(a-o)+`ms\n\tRemoved ${e} documents in `+(c-a)+`ms\nTotal Duration: ${c-l}ms`),dm.resolve({didRun:!0,sequenceNumbersCollected:r,targetsRemoved:s,documentsRemoved:e}))))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class w_{constructor(e,t){this.db=e,this.garbageCollector=new v_(this,t)}Mn(e){const t=this.Bn(e);return this.db.getTargetCache().getTargetCount(e).next((e=>t.next((t=>e+t))))}Bn(e){let t=0;return this.Fn(e,(e=>{t++})).next((()=>t))}forEachTarget(e,t){return this.db.getTargetCache().forEachTarget(e,t)}Fn(e,t){return this.Ln(e,((e,n)=>t(n)))}addReference(e,t,n){return b_(e,n)}removeReference(e,t,n){return b_(e,n)}removeTargets(e,t,n){return this.db.getTargetCache().removeTargets(e,t,n)}markPotentiallyOrphaned(e,t){return b_(e,t)}Un(e,t){return function(e,t){let n=!1;return l_(e).Y((r=>o_(e,r,t).next((e=>(e&&(n=!0),dm.resolve(!e)))))).next((()=>n))}(e,t)}removeOrphanedDocuments(e,t){const n=this.db.getRemoteDocumentCache().newChangeBuffer(),r=[];let s=0;return this.Ln(e,((i,o)=>{if(o<=t){const t=this.Un(e,i).next((t=>{if(!t)return s++,n.getEntry(e,i).next((()=>(n.removeEntry(i,Hg.min()),p_(e).delete([0,Uw(i.path)]))))}));r.push(t)}})).next((()=>dm.waitFor(r))).next((()=>n.apply(e))).next((()=>s))}removeTarget(e,t){const n=t.withSequenceNumber(e.currentSequenceNumber);return this.db.getTargetCache().updateTargetData(e,n)}updateLimboDocument(e,t){return b_(e,t)}Ln(e,t){const n=p_(e);let r,s=Tm.ot;return n.J({index:"documentTargetsIndex"},(([e,n],{path:i,sequenceNumber:o})=>{0===e?(s!==Tm.ot&&t(new Zg(qw(r)),s),s=o,r=i):s=Tm.ot})).next((()=>{s!==Tm.ot&&t(new Zg(qw(r)),s)}))}getCacheSize(e){return this.db.getRemoteDocumentCache().getSize(e)}}function b_(e,t){return p_(e).put((n=t,r=e.currentSequenceNumber,{targetId:0,path:Uw(n.path),sequenceNumber:r}));var n,r}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class __{constructor(){this.changes=new Uv((e=>e.toString()),((e,t)=>e.isEqual(t))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,yy.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const n=this.changes.get(t);return void 0!==n?dm.resolve(n):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I_{constructor(e){this.wt=e}setIndexManager(e){this.indexManager=e}addEntry(e,t,n){return S_(e).put(n)}removeEntry(e,t,n){return S_(e).delete(function(e,t){const n=e.path.toArray();return[n.slice(0,n.length-2),n[n.length-2],bb(t),n[n.length-1]]}(t,n))}updateMetadata(e,t){return this.getMetadata(e).next((n=>(n.byteSize+=t,this.qn(e,n))))}getEntry(e,t){let n=yy.newInvalidDocument(t);return S_(e).J({index:"documentKeyIndex",range:IDBKeyRange.only(x_(t))},((e,r)=>{n=this.Kn(t,r)})).next((()=>n))}Gn(e,t){let n={size:0,document:yy.newInvalidDocument(t)};return S_(e).J({index:"documentKeyIndex",range:IDBKeyRange.only(x_(t))},((e,r)=>{n={document:this.Kn(t,r),size:s_(r)}})).next((()=>n))}getEntries(e,t){let n=jv();return this.Qn(e,t,((e,t)=>{const r=this.Kn(e,t);n=n.insert(e,r)})).next((()=>n))}jn(e,t){let n=jv(),r=new Am(Zg.comparator);return this.Qn(e,t,((e,t)=>{const s=this.Kn(e,t);n=n.insert(e,s),r=r.insert(e,s_(t))})).next((()=>({documents:n,Wn:r})))}Qn(e,t,n){if(t.isEmpty())return dm.resolve();let r=new Dm(C_);t.forEach((e=>r=r.add(e)));const s=IDBKeyRange.bound(x_(r.first()),x_(r.last())),i=r.getIterator();let o=i.getNext();return S_(e).J({index:"documentKeyIndex",range:s},((e,t,r)=>{const s=Zg.fromSegments([...t.prefixPath,t.collectionGroup,t.documentId]);for(;o&&C_(o,s)<0;)n(o,null),o=i.getNext();o&&o.isEqual(s)&&(n(o,t),o=i.hasNext()?i.getNext():null),o?r.q(x_(o)):r.done()})).next((()=>{for(;o;)n(o,null),o=i.hasNext()?i.getNext():null}))}getAllFromCollection(e,t,n){const r=[t.popLast().toArray(),t.lastSegment(),bb(n.readTime),n.documentKey.path.isEmpty()?"":n.documentKey.path.lastSegment()],s=[t.popLast().toArray(),t.lastSegment(),[Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER],""];return S_(e).K(IDBKeyRange.bound(r,s,!0)).next((e=>{let t=jv();for(const n of e){const e=this.Kn(Zg.fromSegments(n.prefixPath.concat(n.collectionGroup,n.documentId)),n);t=t.insert(e.key,e)}return t}))}getAllFromCollectionGroup(e,t,n,r){let s=jv();const i=A_(t,n),o=A_(t,am.max());return S_(e).J({index:"collectionGroupIndex",range:IDBKeyRange.bound(i,o,!0)},((e,t,n)=>{const i=this.Kn(Zg.fromSegments(t.prefixPath.concat(t.collectionGroup,t.documentId)),t);s=s.insert(i.key,i),s.size===r&&n.done()})).next((()=>s))}newChangeBuffer(e){return new T_(this,!!e&&e.trackRemovals)}getSize(e){return this.getMetadata(e).next((e=>e.byteSize))}getMetadata(e){return E_(e).get("remoteDocumentGlobalKey").next((e=>(Cg(!!e),e)))}qn(e,t){return E_(e).put("remoteDocumentGlobalKey",t)}Kn(e,t){if(t){const e=function(e,t){let n;if(t.document)n=Tw(e.ne,t.document,!!t.hasCommittedMutations);else if(t.noDocument){const e=Zg.fromSegments(t.noDocument.path),r=Ib(t.noDocument.readTime);n=yy.newNoDocument(e,r),t.hasCommittedMutations&&n.setHasCommittedMutations()}else{if(!t.unknownDocument)return Ag();{const e=Zg.fromSegments(t.unknownDocument.path),r=Ib(t.unknownDocument.version);n=yy.newUnknownDocument(e,r)}}return t.readTime&&n.setReadTime(function(e){const t=new Wg(e[0],e[1]);return Hg.fromTimestamp(t)}(t.readTime)),n}(this.wt,t);if(!e.isNoDocument()||!e.version.isEqual(Hg.min()))return e}return yy.newInvalidDocument(e)}}function k_(e){return new I_(e)}class T_ extends __{constructor(e,t){super(),this.zn=e,this.trackRemovals=t,this.Hn=new Uv((e=>e.toString()),((e,t)=>e.isEqual(t)))}applyChanges(e){const t=[];let n=0,r=new Dm(((e,t)=>zg(e.canonicalString(),t.canonicalString())));return this.changes.forEach(((s,i)=>{const o=this.Hn.get(s);if(t.push(this.zn.removeEntry(e,s,o.readTime)),i.isValidDocument()){const a=wb(this.zn.wt,i);r=r.add(s.path.popLast());const c=s_(a);n+=c-o.size,t.push(this.zn.addEntry(e,s,a))}else if(n-=o.size,this.trackRemovals){const n=wb(this.zn.wt,i.convertToNoDocument(Hg.min()));t.push(this.zn.addEntry(e,s,n))}})),r.forEach((n=>{t.push(this.zn.indexManager.addToCollectionParentIndex(e,n))})),t.push(this.zn.updateMetadata(e,n)),dm.waitFor(t)}getFromCache(e,t){return this.zn.Gn(e,t).next((e=>(this.Hn.set(t,{size:e.size,readTime:e.document.readTime}),e.document)))}getAllFromCache(e,t){return this.zn.jn(e,t).next((({documents:e,Wn:t})=>(t.forEach(((t,n)=>{this.Hn.set(t,{size:n,readTime:e.get(t).readTime})})),e)))}}function E_(e){return fb(e,"remoteDocumentGlobal")}function S_(e){return fb(e,"remoteDocumentsV14")}function x_(e){const t=e.path.toArray();return[t.slice(0,t.length-2),t[t.length-2],t[t.length-1]]}function A_(e,t){const n=t.documentKey.path.toArray();return[e,bb(t.readTime),n.slice(0,n.length-2),n.length>0?n[n.length-1]:""]}function C_(e,t){const n=e.path.toArray(),r=t.path.toArray();let s=0;for(let e=0;e<n.length-2&&e<r.length-2;++e)if(s=zg(n[e],r[e]),s)return s;return s=zg(n.length,r.length),s||(s=zg(n[n.length-2],r[r.length-2]),s||zg(n[n.length-1],r[r.length-1]))
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class N_{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class D_{constructor(e,t,n,r){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=n,this.indexManager=r}getDocument(e,t){let n=null;return this.documentOverlayCache.getOverlay(e,t).next((r=>(n=r,this.getBaseDocument(e,t,n)))).next((e=>(null!==n&&Tv(n.mutation,e,Pm.empty(),Wg.now()),e)))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next((t=>this.getLocalViewOfDocuments(e,t,Jv()).next((()=>t))))}getLocalViewOfDocuments(e,t,n=Jv()){const r=Gv();return this.populateOverlays(e,r,t).next((()=>this.computeViews(e,t,r,n).next((e=>{let t=$v();return e.forEach(((e,n)=>{t=t.insert(e,n.overlayedDocument)})),t}))))}getOverlayedDocuments(e,t){const n=Gv();return this.populateOverlays(e,n,t).next((()=>this.computeViews(e,t,n,Jv())))}populateOverlays(e,t,n){const r=[];return n.forEach((e=>{t.has(e)||r.push(e)})),this.documentOverlayCache.getOverlays(e,r).next((e=>{e.forEach(((e,n)=>{t.set(e,n)}))}))}computeViews(e,t,n,r){let s=jv();const i=Wv(),o=Wv();return t.forEach(((e,t)=>{const o=n.get(t.key);r.has(t.key)&&(void 0===o||o.mutation instanceof Av)?s=s.insert(t.key,t):void 0!==o&&(i.set(t.key,o.mutation.getFieldMask()),Tv(o.mutation,t,o.mutation.getFieldMask(),Wg.now()))})),this.recalculateAndSaveOverlays(e,s).next((e=>(e.forEach(((e,t)=>i.set(e,t))),t.forEach(((e,t)=>{var n;return o.set(e,new N_(t,null!==(n=i.get(e))&&void 0!==n?n:null))})),o)))}recalculateAndSaveOverlays(e,t){const n=Wv();let r=new Am(((e,t)=>e-t)),s=Jv();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next((e=>{for(const s of e)s.keys().forEach((e=>{const i=t.get(e);if(null===i)return;let o=n.get(e)||Pm.empty();o=s.applyToLocalView(i,o),n.set(e,o);const a=(r.get(s.batchId)||Jv()).add(e);r=r.insert(s.batchId,a)}))})).next((()=>{const i=[],o=r.getReverseIterator();for(;o.hasNext();){const r=o.getNext(),a=r.key,c=r.value,l=Kv();c.forEach((e=>{if(!s.has(e)){const r=Iv(t.get(e),n.get(e));null!==r&&l.set(e,r),s=s.add(e)}})),i.push(this.documentOverlayCache.saveOverlays(e,a,l))}return dm.waitFor(i)})).next((()=>n))}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next((t=>this.recalculateAndSaveOverlays(e,t)))}getDocumentsMatchingQuery(e,t,n){return r=t,Zg.isDocumentKey(r.path)&&null===r.collectionGroup&&0===r.filters.length?this.getDocumentsMatchingDocumentQuery(e,t.path):Gy(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,n):this.getDocumentsMatchingCollectionQuery(e,t,n);var r}getNextDocuments(e,t,n,r){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,n,r).next((s=>{const i=r-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,n.largestBatchId,r-s.size):dm.resolve(Gv());let o=-1,a=s;return i.next((t=>dm.forEach(t,((t,n)=>(o<n.largestBatchId&&(o=n.largestBatchId),s.get(t)?dm.resolve():this.getBaseDocument(e,t,n).next((e=>{a=a.insert(t,e)}))))).next((()=>this.populateOverlays(e,t,s))).next((()=>this.computeViews(e,a,t,Jv()))).next((e=>({batchId:o,changes:zv(e)})))))}))}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new Zg(t)).next((e=>{let t=$v();return e.isFoundDocument()&&(t=t.insert(e.key,e)),t}))}getDocumentsMatchingCollectionGroupQuery(e,t,n){const r=t.collectionGroup;let s=$v();return this.indexManager.getCollectionParents(e,r).next((i=>dm.forEach(i,(i=>{const o=(a=t,c=i.child(r),new By(c,null,a.explicitOrderBy.slice(),a.filters.slice(),a.limit,a.limitType,a.startAt,a.endAt));var a,c;return this.getDocumentsMatchingCollectionQuery(e,o,n).next((e=>{e.forEach(((e,t)=>{s=s.insert(e,t)}))}))})).next((()=>s))))}getDocumentsMatchingCollectionQuery(e,t,n){let r;return this.remoteDocumentCache.getAllFromCollection(e,t.path,n).next((s=>(r=s,this.documentOverlayCache.getOverlaysForCollection(e,t.path,n.largestBatchId)))).next((e=>{e.forEach(((e,t)=>{const n=t.getKey();null===r.get(n)&&(r=r.insert(n,yy.newInvalidDocument(n)))}));let n=$v();return r.forEach(((r,s)=>{const i=e.get(r);void 0!==i&&Tv(i.mutation,s,Pm.empty(),Wg.now()),Xy(t,s)&&(n=n.insert(r,s))})),n}))}getBaseDocument(e,t,n){return null===n||1===n.mutation.type?this.remoteDocumentCache.getEntry(e,t):dm.resolve(yy.newInvalidDocument(t))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R_{constructor(e){this.wt=e,this.Jn=new Map,this.Yn=new Map}getBundleMetadata(e,t){return dm.resolve(this.Jn.get(t))}saveBundleMetadata(e,t){var n;return this.Jn.set(t.id,{id:(n=t).id,version:n.version,createTime:pw(n.createTime)}),dm.resolve()}getNamedQuery(e,t){return dm.resolve(this.Yn.get(t))}saveNamedQuery(e,t){return this.Yn.set(t.name,{name:(n=t).name,query:Sb(n.bundledQuery),readTime:pw(n.readTime)}),dm.resolve();var n}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O_{constructor(){this.overlays=new Am(Zg.comparator),this.Xn=new Map}getOverlay(e,t){return dm.resolve(this.overlays.get(t))}getOverlays(e,t){const n=Gv();return dm.forEach(t,(t=>this.getOverlay(e,t).next((e=>{null!==e&&n.set(t,e)})))).next((()=>n))}saveOverlays(e,t,n){return n.forEach(((n,r)=>{this.ie(e,t,r)})),dm.resolve()}removeOverlaysForBatchId(e,t,n){const r=this.Xn.get(n);return void 0!==r&&(r.forEach((e=>this.overlays=this.overlays.remove(e))),this.Xn.delete(n)),dm.resolve()}getOverlaysForCollection(e,t,n){const r=Gv(),s=t.length+1,i=new Zg(t.child("")),o=this.overlays.getIteratorFrom(i);for(;o.hasNext();){const e=o.getNext().value,i=e.getKey();if(!t.isPrefixOf(i.path))break;i.path.length===s&&e.largestBatchId>n&&r.set(e.getKey(),e)}return dm.resolve(r)}getOverlaysForCollectionGroup(e,t,n,r){let s=new Am(((e,t)=>e-t));const i=this.overlays.getIterator();for(;i.hasNext();){const e=i.getNext().value;if(e.getKey().getCollectionGroup()===t&&e.largestBatchId>n){let t=s.get(e.largestBatchId);null===t&&(t=Gv(),s=s.insert(e.largestBatchId,t)),t.set(e.getKey(),e)}}const o=Gv(),a=s.getIterator();for(;a.hasNext()&&(a.getNext().value.forEach(((e,t)=>o.set(e,t))),!(o.size()>=r)););return dm.resolve(o)}ie(e,t,n){const r=this.overlays.get(n.key);if(null!==r){const e=this.Xn.get(r.largestBatchId).delete(n.key);this.Xn.set(r.largestBatchId,e)}this.overlays=this.overlays.insert(n.key,new mb(t,n));let s=this.Xn.get(t);void 0===s&&(s=Jv(),this.Xn.set(t,s)),this.Xn.set(t,s.add(n.key))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P_{constructor(){this.Zn=new Dm(L_.ts),this.es=new Dm(L_.ns)}isEmpty(){return this.Zn.isEmpty()}addReference(e,t){const n=new L_(e,t);this.Zn=this.Zn.add(n),this.es=this.es.add(n)}ss(e,t){e.forEach((e=>this.addReference(e,t)))}removeReference(e,t){this.rs(new L_(e,t))}os(e,t){e.forEach((e=>this.removeReference(e,t)))}us(e){const t=new Zg(new Jg([])),n=new L_(t,e),r=new L_(t,e+1),s=[];return this.es.forEachInRange([n,r],(e=>{this.rs(e),s.push(e.key)})),s}cs(){this.Zn.forEach((e=>this.rs(e)))}rs(e){this.Zn=this.Zn.delete(e),this.es=this.es.delete(e)}hs(e){const t=new Zg(new Jg([])),n=new L_(t,e),r=new L_(t,e+1);let s=Jv();return this.es.forEachInRange([n,r],(e=>{s=s.add(e.key)})),s}containsKey(e){const t=new L_(e,0),n=this.Zn.firstAfterOrEqual(t);return null!==n&&e.isEqual(n.key)}}class L_{constructor(e,t){this.key=e,this.ls=t}static ts(e,t){return Zg.comparator(e.key,t.key)||zg(e.ls,t.ls)}static ns(e,t){return zg(e.ls,t.ls)||Zg.comparator(e.key,t.key)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M_{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.fs=1,this.ds=new Dm(L_.ts)}checkEmpty(e){return dm.resolve(0===this.mutationQueue.length)}addMutationBatch(e,t,n,r){const s=this.fs;this.fs++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const i=new pb(s,t,n,r);this.mutationQueue.push(i);for(const t of r)this.ds=this.ds.add(new L_(t.key,s)),this.indexManager.addToCollectionParentIndex(e,t.key.path.popLast());return dm.resolve(i)}lookupMutationBatch(e,t){return dm.resolve(this._s(t))}getNextMutationBatchAfterBatchId(e,t){const n=t+1,r=this.ws(n),s=r<0?0:r;return dm.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return dm.resolve(0===this.mutationQueue.length?-1:this.fs-1)}getAllMutationBatches(e){return dm.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const n=new L_(t,0),r=new L_(t,Number.POSITIVE_INFINITY),s=[];return this.ds.forEachInRange([n,r],(e=>{const t=this._s(e.ls);s.push(t)})),dm.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,t){let n=new Dm(zg);return t.forEach((e=>{const t=new L_(e,0),r=new L_(e,Number.POSITIVE_INFINITY);this.ds.forEachInRange([t,r],(e=>{n=n.add(e.ls)}))})),dm.resolve(this.gs(n))}getAllMutationBatchesAffectingQuery(e,t){const n=t.path,r=n.length+1;let s=n;Zg.isDocumentKey(s)||(s=s.child(""));const i=new L_(new Zg(s),0);let o=new Dm(zg);return this.ds.forEachWhile((e=>{const t=e.key.path;return!!n.isPrefixOf(t)&&(t.length===r&&(o=o.add(e.ls)),!0)}),i),dm.resolve(this.gs(o))}gs(e){const t=[];return e.forEach((e=>{const n=this._s(e);null!==n&&t.push(n)})),t}removeMutationBatch(e,t){Cg(0===this.ys(t.batchId,"removed")),this.mutationQueue.shift();let n=this.ds;return dm.forEach(t.mutations,(r=>{const s=new L_(r.key,t.batchId);return n=n.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,r.key)})).next((()=>{this.ds=n}))}In(e){}containsKey(e,t){const n=new L_(t,0),r=this.ds.firstAfterOrEqual(n);return dm.resolve(t.isEqual(r&&r.key))}performConsistencyCheck(e){return this.mutationQueue.length,dm.resolve()}ys(e,t){return this.ws(e)}ws(e){return 0===this.mutationQueue.length?0:e-this.mutationQueue[0].batchId}_s(e){const t=this.ws(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F_{constructor(e){this.ps=e,this.docs=new Am(Zg.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const n=t.key,r=this.docs.get(n),s=r?r.size:0,i=this.ps(t);return this.docs=this.docs.insert(n,{document:t.mutableCopy(),size:i}),this.size+=i-s,this.indexManager.addToCollectionParentIndex(e,n.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const n=this.docs.get(t);return dm.resolve(n?n.document.mutableCopy():yy.newInvalidDocument(t))}getEntries(e,t){let n=jv();return t.forEach((e=>{const t=this.docs.get(e);n=n.insert(e,t?t.document.mutableCopy():yy.newInvalidDocument(e))})),dm.resolve(n)}getAllFromCollection(e,t,n){let r=jv();const s=new Zg(t.child("")),i=this.docs.getIteratorFrom(s);for(;i.hasNext();){const{key:e,value:{document:s}}=i.getNext();if(!t.isPrefixOf(e.path))break;e.path.length>t.length+1||cm(om(s),n)<=0||(r=r.insert(s.key,s.mutableCopy()))}return dm.resolve(r)}getAllFromCollectionGroup(e,t,n,r){Ag()}Is(e,t){return dm.forEach(this.docs,(e=>t(e)))}newChangeBuffer(e){return new V_(this)}getSize(e){return dm.resolve(this.size)}}class V_ extends __{constructor(e){super(),this.zn=e}applyChanges(e){const t=[];return this.changes.forEach(((n,r)=>{r.isValidDocument()?t.push(this.zn.addEntry(e,r)):this.zn.removeEntry(n)})),dm.waitFor(t)}getFromCache(e,t){return this.zn.getEntry(e,t)}getAllFromCache(e,t){return this.zn.getEntries(e,t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U_{constructor(e){this.persistence=e,this.Ts=new Uv((e=>by(e)),_y),this.lastRemoteSnapshotVersion=Hg.min(),this.highestTargetId=0,this.Es=0,this.As=new P_,this.targetCount=0,this.Rs=u_.An()}forEachTarget(e,t){return this.Ts.forEach(((e,n)=>t(n))),dm.resolve()}getLastRemoteSnapshotVersion(e){return dm.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return dm.resolve(this.Es)}allocateTargetId(e){return this.highestTargetId=this.Rs.next(),dm.resolve(this.highestTargetId)}setTargetsMetadata(e,t,n){return n&&(this.lastRemoteSnapshotVersion=n),t>this.Es&&(this.Es=t),dm.resolve()}vn(e){this.Ts.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.Rs=new u_(t),this.highestTargetId=t),e.sequenceNumber>this.Es&&(this.Es=e.sequenceNumber)}addTargetData(e,t){return this.vn(t),this.targetCount+=1,dm.resolve()}updateTargetData(e,t){return this.vn(t),dm.resolve()}removeTargetData(e,t){return this.Ts.delete(t.target),this.As.us(t.targetId),this.targetCount-=1,dm.resolve()}removeTargets(e,t,n){let r=0;const s=[];return this.Ts.forEach(((i,o)=>{o.sequenceNumber<=t&&null===n.get(o.targetId)&&(this.Ts.delete(i),s.push(this.removeMatchingKeysForTargetId(e,o.targetId)),r++)})),dm.waitFor(s).next((()=>r))}getTargetCount(e){return dm.resolve(this.targetCount)}getTargetData(e,t){const n=this.Ts.get(t)||null;return dm.resolve(n)}addMatchingKeys(e,t,n){return this.As.ss(t,n),dm.resolve()}removeMatchingKeys(e,t,n){this.As.os(t,n);const r=this.persistence.referenceDelegate,s=[];return r&&t.forEach((t=>{s.push(r.markPotentiallyOrphaned(e,t))})),dm.waitFor(s)}removeMatchingKeysForTargetId(e,t){return this.As.us(t),dm.resolve()}getMatchingKeysForTargetId(e,t){const n=this.As.hs(t);return dm.resolve(n)}containsKey(e,t){return dm.resolve(this.As.containsKey(t))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B_{constructor(e,t){this.bs={},this.overlays={},this.Ps=new Tm(0),this.vs=!1,this.vs=!0,this.referenceDelegate=e(this),this.Vs=new U_(this),this.indexManager=new Kb,this.remoteDocumentCache=new F_((e=>this.referenceDelegate.Ss(e))),this.wt=new vb(t),this.Ds=new R_(this.wt)}start(){return Promise.resolve()}shutdown(){return this.vs=!1,Promise.resolve()}get started(){return this.vs}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new O_,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let n=this.bs[e.toKey()];return n||(n=new M_(t,this.referenceDelegate),this.bs[e.toKey()]=n),n}getTargetCache(){return this.Vs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ds}runTransaction(e,t,n){Tg("MemoryPersistence","Starting transaction:",e);const r=new j_(this.Ps.next());return this.referenceDelegate.Cs(),n(r).next((e=>this.referenceDelegate.xs(r).next((()=>e)))).toPromise().then((e=>(r.raiseOnCommittedEvent(),e)))}Ns(e,t){return dm.or(Object.values(this.bs).map((n=>()=>n.containsKey(e,t))))}}class j_ extends um{constructor(e){super(),this.currentSequenceNumber=e}}class q_{constructor(e){this.persistence=e,this.ks=new P_,this.Os=null}static Ms(e){return new q_(e)}get Fs(){if(this.Os)return this.Os;throw Ag()}addReference(e,t,n){return this.ks.addReference(n,t),this.Fs.delete(n.toString()),dm.resolve()}removeReference(e,t,n){return this.ks.removeReference(n,t),this.Fs.add(n.toString()),dm.resolve()}markPotentiallyOrphaned(e,t){return this.Fs.add(t.toString()),dm.resolve()}removeTarget(e,t){this.ks.us(t.targetId).forEach((e=>this.Fs.add(e.toString())));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(e,t.targetId).next((e=>{e.forEach((e=>this.Fs.add(e.toString())))})).next((()=>n.removeTargetData(e,t)))}Cs(){this.Os=new Set}xs(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return dm.forEach(this.Fs,(n=>{const r=Zg.fromPath(n);return this.$s(e,r).next((e=>{e||t.removeEntry(r,Hg.min())}))})).next((()=>(this.Os=null,t.apply(e))))}updateLimboDocument(e,t){return this.$s(e,t).next((e=>{e?this.Fs.delete(t.toString()):this.Fs.add(t.toString())}))}Ss(e){return 0}$s(e,t){return dm.or([()=>dm.resolve(this.ks.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ns(e,t)])}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $_{constructor(e){this.wt=e}O(e,t,n,r){const s=new fm("createOrUpgrade",t);n<1&&r>=1&&(e.createObjectStore("owner"),function(e){e.createObjectStore("mutationQueues",{keyPath:"userId"}),e.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",$w,{unique:!0}),e.createObjectStore("documentMutations")}(e),z_(e),function(e){e.createObjectStore("remoteDocuments")}(e));let i=dm.resolve();return n<3&&r>=3&&(0!==n&&(function(e){e.deleteObjectStore("targetDocuments"),e.deleteObjectStore("targets"),e.deleteObjectStore("targetGlobal")}(e),z_(e)),i=i.next((()=>function(e){const t=e.store("targetGlobal"),n={highestTargetId:0,highestListenSequenceNumber:0,lastRemoteSnapshotVersion:Hg.min().toTimestamp(),targetCount:0};return t.put("targetGlobalKey",n)}(s)))),n<4&&r>=4&&(0!==n&&(i=i.next((()=>function(e,t){return t.store("mutations").K().next((n=>{e.deleteObjectStore("mutations"),e.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",$w,{unique:!0});const r=t.store("mutations"),s=n.map((e=>r.put(e)));return dm.waitFor(s)}))}(e,s)))),i=i.next((()=>{!function(e){e.createObjectStore("clientMetadata",{keyPath:"clientId"})}(e)}))),n<5&&r>=5&&(i=i.next((()=>this.Bs(s)))),n<6&&r>=6&&(i=i.next((()=>(function(e){e.createObjectStore("remoteDocumentGlobal")}(e),this.Ls(s))))),n<7&&r>=7&&(i=i.next((()=>this.Us(s)))),n<8&&r>=8&&(i=i.next((()=>this.qs(e,s)))),n<9&&r>=9&&(i=i.next((()=>{!function(e){e.objectStoreNames.contains("remoteDocumentChanges")&&e.deleteObjectStore("remoteDocumentChanges")}(e)}))),n<10&&r>=10&&(i=i.next((()=>this.Ks(s)))),n<11&&r>=11&&(i=i.next((()=>{!function(e){e.createObjectStore("bundles",{keyPath:"bundleId"})}(e),function(e){e.createObjectStore("namedQueries",{keyPath:"name"})}(e)}))),n<12&&r>=12&&(i=i.next((()=>{!function(e){const t=e.createObjectStore("documentOverlays",{keyPath:sb});t.createIndex("collectionPathOverlayIndex",ib,{unique:!1}),t.createIndex("collectionGroupOverlayIndex",ob,{unique:!1})}(e)}))),n<13&&r>=13&&(i=i.next((()=>function(e){const t=e.createObjectStore("remoteDocumentsV14",{keyPath:Ww});t.createIndex("documentKeyIndex",Hw),t.createIndex("collectionGroupIndex",Qw)}(e))).next((()=>this.Gs(e,s))).next((()=>e.deleteObjectStore("remoteDocuments")))),n<14&&r>=14&&(i=i.next((()=>this.Qs(e,s)))),n<15&&r>=15&&(i=i.next((()=>function(e){e.createObjectStore("indexConfiguration",{keyPath:"indexId",autoIncrement:!0}).createIndex("collectionGroupIndex","collectionGroup",{unique:!1}),e.createObjectStore("indexState",{keyPath:eb}).createIndex("sequenceNumberIndex",tb,{unique:!1}),e.createObjectStore("indexEntries",{keyPath:nb}).createIndex("documentKeyIndex",rb,{unique:!1})}(e)))),i}Ls(e){let t=0;return e.store("remoteDocuments").J(((e,n)=>{t+=s_(n)})).next((()=>{const n={byteSize:t};return e.store("remoteDocumentGlobal").put("remoteDocumentGlobalKey",n)}))}Bs(e){const t=e.store("mutationQueues"),n=e.store("mutations");return t.K().next((t=>dm.forEach(t,(t=>{const r=IDBKeyRange.bound([t.userId,-1],[t.userId,t.lastAcknowledgedBatchId]);return n.K("userMutationsIndex",r).next((n=>dm.forEach(n,(n=>{Cg(n.userId===t.userId);const r=kb(this.wt,n);return r_(e,t.userId,r).next((()=>{}))}))))}))))}Us(e){const t=e.store("targetDocuments"),n=e.store("remoteDocuments");return e.store("targetGlobal").get("targetGlobalKey").next((e=>{const r=[];return n.J(((n,s)=>{const i=new Jg(n),o=[0,Uw(i)];r.push(t.get(o).next((n=>{return n?dm.resolve():(r=i,t.put({targetId:0,path:Uw(r),sequenceNumber:e.highestListenSequenceNumber}));var r})))})).next((()=>dm.waitFor(r)))}))}qs(e,t){e.createObjectStore("collectionParents",{keyPath:Zw});const n=t.store("collectionParents"),r=new Wb,s=e=>{if(r.add(e)){const t=e.lastSegment(),r=e.popLast();return n.put({collectionId:t,parent:Uw(r)})}};return t.store("remoteDocuments").J({H:!0},((e,t)=>{const n=new Jg(e);return s(n.popLast())})).next((()=>t.store("documentMutations").J({H:!0},(([e,t,n],r)=>{const i=qw(t);return s(i.popLast())}))))}Ks(e){const t=e.store("targets");return t.J(((e,n)=>{const r=Tb(n),s=Eb(this.wt,r);return t.put(s)}))}Gs(e,t){const n=t.store("remoteDocuments"),r=[];return n.J(((e,n)=>{const s=t.store("remoteDocumentsV14"),i=(o=n,o.document?new Zg(Jg.fromString(o.document.name).popFirst(5)):o.noDocument?Zg.fromSegments(o.noDocument.path):o.unknownDocument?Zg.fromSegments(o.unknownDocument.path):Ag()).path.toArray();var o;
/**
      * @license
      * Copyright 2017 Google LLC
      *
      * Licensed under the Apache License, Version 2.0 (the "License");
      * you may not use this file except in compliance with the License.
      * You may obtain a copy of the License at
      *
      *   http://www.apache.org/licenses/LICENSE-2.0
      *
      * Unless required by applicable law or agreed to in writing, software
      * distributed under the License is distributed on an "AS IS" BASIS,
      * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
      * See the License for the specific language governing permissions and
      * limitations under the License.
      */const a={prefixPath:i.slice(0,i.length-2),collectionGroup:i[i.length-2],documentId:i[i.length-1],readTime:n.readTime||[0,0],unknownDocument:n.unknownDocument,noDocument:n.noDocument,document:n.document,hasCommittedMutations:!!n.hasCommittedMutations};r.push(s.put(a))})).next((()=>dm.waitFor(r)))}Qs(e,t){const n=t.store("mutations"),r=k_(this.wt),s=new B_(q_.Ms,this.wt.ne);return n.K().next((e=>{const n=new Map;return e.forEach((e=>{var t;let r=null!==(t=n.get(e.userId))&&void 0!==t?t:Jv();kb(this.wt,e).keys().forEach((e=>r=r.add(e))),n.set(e.userId,r)})),dm.forEach(n,((e,n)=>{const i=new bg(n),o=Ob.se(this.wt,i),a=s.getIndexManager(i),c=i_.se(i,this.wt,a,s.referenceDelegate);return new D_(r,c,o,a).recalculateAndSaveOverlaysForDocumentKeys(new db(t,Tm.ot),e).next()}))}))}}function z_(e){e.createObjectStore("targetDocuments",{keyPath:Yw}).createIndex("documentTargetsIndex",Xw,{unique:!0}),e.createObjectStore("targets",{keyPath:"targetId"}).createIndex("queryTargetsIndex",Jw,{unique:!0}),e.createObjectStore("targetGlobal")}const G_="Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.";class K_{constructor(e,t,n,r,s,i,o,a,c,l,u=14){if(this.allowTabSynchronization=e,this.persistenceKey=t,this.clientId=n,this.js=s,this.window=i,this.document=o,this.Ws=c,this.zs=l,this.Hs=u,this.Ps=null,this.vs=!1,this.isPrimary=!1,this.networkEnabled=!0,this.Js=null,this.inForeground=!1,this.Ys=null,this.Xs=null,this.Zs=Number.NEGATIVE_INFINITY,this.ti=e=>Promise.resolve(),!K_.V())throw new Rg(Dg.UNIMPLEMENTED,"This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");this.referenceDelegate=new w_(this,r),this.ei=t+"main",this.wt=new vb(a),this.ni=new pm(this.ei,this.Hs,new $_(this.wt)),this.Vs=new h_(this.referenceDelegate,this.wt),this.remoteDocumentCache=k_(this.wt),this.Ds=new Nb,this.window&&this.window.localStorage?this.si=this.window.localStorage:(this.si=null,!1===l&&Eg("IndexedDbPersistence","LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."))}start(){return this.ii().then((()=>{if(!this.isPrimary&&!this.allowTabSynchronization)throw new Rg(Dg.FAILED_PRECONDITION,G_);return this.ri(),this.oi(),this.ui(),this.runTransaction("getHighestListenSequenceNumber","readonly",(e=>this.Vs.getHighestSequenceNumber(e)))})).then((e=>{this.Ps=new Tm(e,this.Ws)})).then((()=>{this.vs=!0})).catch((e=>(this.ni&&this.ni.close(),Promise.reject(e))))}ci(e){return this.ti=async t=>{if(this.started)return e(t)},e(this.isPrimary)}setDatabaseDeletedListener(e){this.ni.F((async t=>{null===t.newVersion&&await e()}))}setNetworkEnabled(e){this.networkEnabled!==e&&(this.networkEnabled=e,this.js.enqueueAndForget((async()=>{this.started&&await this.ii()})))}ii(){return this.runTransaction("updateClientMetadataAndTryBecomePrimary","readwrite",(e=>H_(e).put({clientId:this.clientId,updateTimeMs:Date.now(),networkEnabled:this.networkEnabled,inForeground:this.inForeground}).next((()=>{if(this.isPrimary)return this.ai(e).next((e=>{e||(this.isPrimary=!1,this.js.enqueueRetryable((()=>this.ti(!1))))}))})).next((()=>this.hi(e))).next((t=>this.isPrimary&&!t?this.li(e).next((()=>!1)):!!t&&this.fi(e).next((()=>!0)))))).catch((e=>{if(ym(e))return Tg("IndexedDbPersistence","Failed to extend owner lease: ",e),this.isPrimary;if(!this.allowTabSynchronization)throw e;return Tg("IndexedDbPersistence","Releasing owner lease after error during lease refresh",e),!1})).then((e=>{this.isPrimary!==e&&this.js.enqueueRetryable((()=>this.ti(e))),this.isPrimary=e}))}ai(e){return W_(e).get("owner").next((e=>dm.resolve(this.di(e))))}_i(e){return H_(e).delete(this.clientId)}async wi(){if(this.isPrimary&&!this.mi(this.Zs,18e5)){this.Zs=Date.now();const e=await this.runTransaction("maybeGarbageCollectMultiClientState","readwrite-primary",(e=>{const t=fb(e,"clientMetadata");return t.K().next((e=>{const n=this.gi(e,18e5),r=e.filter((e=>-1===n.indexOf(e)));return dm.forEach(r,(e=>t.delete(e.clientId))).next((()=>r))}))})).catch((()=>[]));if(this.si)for(const t of e)this.si.removeItem(this.yi(t.clientId))}}ui(){this.Xs=this.js.enqueueAfterDelay("client_metadata_refresh",4e3,(()=>this.ii().then((()=>this.wi())).then((()=>this.ui()))))}di(e){return!!e&&e.ownerId===this.clientId}hi(e){return this.zs?dm.resolve(!0):W_(e).get("owner").next((t=>{if(null!==t&&this.mi(t.leaseTimestampMs,5e3)&&!this.pi(t.ownerId)){if(this.di(t)&&this.networkEnabled)return!0;if(!this.di(t)){if(!t.allowTabSynchronization)throw new Rg(Dg.FAILED_PRECONDITION,G_);return!1}}return!(!this.networkEnabled||!this.inForeground)||H_(e).K().next((e=>void 0===this.gi(e,5e3).find((e=>{if(this.clientId!==e.clientId){const t=!this.networkEnabled&&e.networkEnabled,n=!this.inForeground&&e.inForeground,r=this.networkEnabled===e.networkEnabled;if(t||n&&r)return!0}return!1}))))})).next((e=>(this.isPrimary!==e&&Tg("IndexedDbPersistence",`Client ${e?"is":"is not"} eligible for a primary lease.`),e)))}async shutdown(){this.vs=!1,this.Ii(),this.Xs&&(this.Xs.cancel(),this.Xs=null),this.Ti(),this.Ei(),await this.ni.runTransaction("shutdown","readwrite",["owner","clientMetadata"],(e=>{const t=new db(e,Tm.ot);return this.li(t).next((()=>this._i(t)))})),this.ni.close(),this.Ai()}gi(e,t){return e.filter((e=>this.mi(e.updateTimeMs,t)&&!this.pi(e.clientId)))}Ri(){return this.runTransaction("getActiveClients","readonly",(e=>H_(e).K().next((e=>this.gi(e,18e5).map((e=>e.clientId))))))}get started(){return this.vs}getMutationQueue(e,t){return i_.se(e,this.wt,t,this.referenceDelegate)}getTargetCache(){return this.Vs}getRemoteDocumentCache(){return this.remoteDocumentCache}getIndexManager(e){return new Qb(e,this.wt.ne.databaseId)}getDocumentOverlayCache(e){return Ob.se(this.wt,e)}getBundleCache(){return this.Ds}runTransaction(e,t,n){Tg("IndexedDbPersistence","Starting transaction:",e);const r="readonly"===t?"readonly":"readwrite",s=15===(i=this.Hs)?hb:14===i?ub:13===i?lb:12===i?cb:11===i?ab:void Ag();var i;let o;return this.ni.runTransaction(e,r,s,(r=>(o=new db(r,this.Ps?this.Ps.next():Tm.ot),"readwrite-primary"===t?this.ai(o).next((e=>!!e||this.hi(o))).next((t=>{if(!t)throw Eg(`Failed to obtain primary lease for action '${e}'.`),this.isPrimary=!1,this.js.enqueueRetryable((()=>this.ti(!1))),new Rg(Dg.FAILED_PRECONDITION,lm);return n(o)})).next((e=>this.fi(o).next((()=>e)))):this.bi(o).next((()=>n(o)))))).then((e=>(o.raiseOnCommittedEvent(),e)))}bi(e){return W_(e).get("owner").next((e=>{if(null!==e&&this.mi(e.leaseTimestampMs,5e3)&&!this.pi(e.ownerId)&&!this.di(e)&&!(this.zs||this.allowTabSynchronization&&e.allowTabSynchronization))throw new Rg(Dg.FAILED_PRECONDITION,G_)}))}fi(e){const t={ownerId:this.clientId,allowTabSynchronization:this.allowTabSynchronization,leaseTimestampMs:Date.now()};return W_(e).put("owner",t)}static V(){return pm.V()}li(e){const t=W_(e);return t.get("owner").next((e=>this.di(e)?(Tg("IndexedDbPersistence","Releasing primary lease."),t.delete("owner")):dm.resolve()))}mi(e,t){const n=Date.now();return!(e<n-t||e>n&&(Eg(`Detected an update time that is in the future: ${e} > ${n}`),1))}ri(){null!==this.document&&"function"==typeof this.document.addEventListener&&(this.Ys=()=>{this.js.enqueueAndForget((()=>(this.inForeground="visible"===this.document.visibilityState,this.ii())))},this.document.addEventListener("visibilitychange",this.Ys),this.inForeground="visible"===this.document.visibilityState)}Ti(){this.Ys&&(this.document.removeEventListener("visibilitychange",this.Ys),this.Ys=null)}oi(){var e;"function"==typeof(null===(e=this.window)||void 0===e?void 0:e.addEventListener)&&(this.Js=()=>{this.Ii(),!ci()&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")&&navigator.appVersion.match(/Version\/1[45]/)&&this.js.enterRestrictedMode(!0),this.js.enqueueAndForget((()=>this.shutdown()))},this.window.addEventListener("pagehide",this.Js))}Ei(){this.Js&&(this.window.removeEventListener("pagehide",this.Js),this.Js=null)}pi(e){var t;try{const n=null!==(null===(t=this.si)||void 0===t?void 0:t.getItem(this.yi(e)));return Tg("IndexedDbPersistence",`Client '${e}' ${n?"is":"is not"} zombied in LocalStorage`),n}catch(e){return Eg("IndexedDbPersistence","Failed to get zombied client id.",e),!1}}Ii(){if(this.si)try{this.si.setItem(this.yi(this.clientId),String(Date.now()))}catch(e){Eg("Failed to set zombie client id.",e)}}Ai(){if(this.si)try{this.si.removeItem(this.yi(this.clientId))}catch(e){}}yi(e){return`firestore_zombie_${this.persistenceKey}_${e}`}}function W_(e){return fb(e,"owner")}function H_(e){return fb(e,"clientMetadata")}function Q_(e,t){let n=e.projectId;return e.isDefaultDatabase||(n+="."+e.database),"firestore/"+t+"/"+n+"/"
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class J_{constructor(e,t,n,r){this.targetId=e,this.fromCache=t,this.Pi=n,this.vi=r}static Vi(e,t){let n=Jv(),r=Jv();for(const e of t.docChanges)switch(e.type){case 0:n=n.add(e.doc.key);break;case 1:r=r.add(e.doc.key)}return new J_(e,t.fromCache,n,r)}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y_{constructor(){this.Si=!1}initialize(e,t){this.Di=e,this.indexManager=t,this.Si=!0}getDocumentsMatchingQuery(e,t,n,r){return this.Ci(e,t).next((s=>s||this.xi(e,t,r,n))).next((n=>n||this.Ni(e,t)))}Ci(e,t){return dm.resolve(null)}xi(e,t,n,r){return function(e){return 0===e.filters.length&&null===e.limit&&null==e.startAt&&null==e.endAt&&(0===e.explicitOrderBy.length||1===e.explicitOrderBy.length&&e.explicitOrderBy[0].field.isKeyField())}(t)||r.isEqual(Hg.min())?this.Ni(e,t):this.Di.getDocuments(e,n).next((s=>{const i=this.ki(t,s);return this.Oi(t,i,n,r)?this.Ni(e,t):(kg()<=Ni.DEBUG&&Tg("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),Yy(t)),this.Mi(e,i,t,im(r,-1)))}))}ki(e,t){let n=new Dm(ev(e));return t.forEach(((t,r)=>{Xy(e,r)&&(n=n.add(r))})),n}Oi(e,t,n,r){if(null===e.limit)return!1;if(n.size!==t.size)return!0;const s="F"===e.limitType?t.last():t.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(r)>0)}Ni(e,t){return kg()<=Ni.DEBUG&&Tg("QueryEngine","Using full collection scan to execute query:",Yy(t)),this.Di.getDocumentsMatchingQuery(e,t,am.min())}Mi(e,t,n,r){return this.Di.getDocumentsMatchingQuery(e,n,r).next((e=>(t.forEach((t=>{e=e.insert(t.key,t)})),e)))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X_{constructor(e,t,n,r){this.persistence=e,this.Fi=t,this.wt=r,this.$i=new Am(zg),this.Bi=new Uv((e=>by(e)),_y),this.Li=new Map,this.Ui=e.getRemoteDocumentCache(),this.Vs=e.getTargetCache(),this.Ds=e.getBundleCache(),this.qi(n)}qi(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new D_(this.Ui,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ui.setIndexManager(this.indexManager),this.Fi.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(t=>e.collect(t,this.$i)))}}function Z_(e,t,n,r){return new X_(e,t,n,r)}async function eI(e,t){const n=Ng(e);return await n.persistence.runTransaction("Handle user change","readonly",(e=>{let r;return n.mutationQueue.getAllMutationBatches(e).next((s=>(r=s,n.qi(t),n.mutationQueue.getAllMutationBatches(e)))).next((t=>{const s=[],i=[];let o=Jv();for(const e of r){s.push(e.batchId);for(const t of e.mutations)o=o.add(t.key)}for(const e of t){i.push(e.batchId);for(const t of e.mutations)o=o.add(t.key)}return n.localDocuments.getDocuments(e,o).next((e=>({Ki:e,removedBatchIds:s,addedBatchIds:i})))}))}))}function tI(e){const t=Ng(e);return t.persistence.runTransaction("Get last remote snapshot version","readonly",(e=>t.Vs.getLastRemoteSnapshotVersion(e)))}function nI(e,t,n){let r=Jv(),s=Jv();return n.forEach((e=>r=r.add(e))),t.getEntries(e,r).next((e=>{let r=jv();return n.forEach(((n,i)=>{const o=e.get(n);i.isFoundDocument()!==o.isFoundDocument()&&(s=s.add(n)),i.isNoDocument()&&i.version.isEqual(Hg.min())?(t.removeEntry(n,i.readTime),r=r.insert(n,i)):!o.isValidDocument()||i.version.compareTo(o.version)>0||0===i.version.compareTo(o.version)&&o.hasPendingWrites?(t.addEntry(i),r=r.insert(n,i)):Tg("LocalStore","Ignoring outdated watch update for ",n,". Current version:",o.version," Watch version:",i.version)})),{Gi:r,Qi:s}}))}function rI(e,t){const n=Ng(e);return n.persistence.runTransaction("Get next mutation batch","readonly",(e=>(void 0===t&&(t=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(e,t))))}function sI(e,t){const n=Ng(e);return n.persistence.runTransaction("Allocate target","readwrite",(e=>{let r;return n.Vs.getTargetData(e,t).next((s=>s?(r=s,dm.resolve(r)):n.Vs.allocateTargetId(e).next((s=>(r=new yb(t,s,0,e.currentSequenceNumber),n.Vs.addTargetData(e,r).next((()=>r)))))))})).then((e=>{const r=n.$i.get(e.targetId);return(null===r||e.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.$i=n.$i.insert(e.targetId,e),n.Bi.set(t,e.targetId)),e}))}async function iI(e,t,n){const r=Ng(e),s=r.$i.get(t),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,(e=>r.persistence.referenceDelegate.removeTarget(e,s)))}catch(e){if(!ym(e))throw e;Tg("LocalStore",`Failed to update sequence numbers for target ${t}: ${e}`)}r.$i=r.$i.remove(t),r.Bi.delete(s.target)}function oI(e,t,n){const r=Ng(e);let s=Hg.min(),i=Jv();return r.persistence.runTransaction("Execute query","readonly",(e=>function(e,t,n){const r=Ng(e),s=r.Bi.get(n);return void 0!==s?dm.resolve(r.$i.get(s)):r.Vs.getTargetData(t,n)}(r,e,Wy(t)).next((t=>{if(t)return s=t.lastLimboFreeSnapshotVersion,r.Vs.getMatchingKeysForTargetId(e,t.targetId).next((e=>{i=e}))})).next((()=>r.Fi.getDocumentsMatchingQuery(e,t,n?s:Hg.min(),n?i:Jv()))).next((e=>(lI(r,Zy(t),e),{documents:e,ji:i})))))}function aI(e,t){const n=Ng(e),r=Ng(n.Vs),s=n.$i.get(t);return s?Promise.resolve(s.target):n.persistence.runTransaction("Get target data","readonly",(e=>r.te(e,t).next((e=>e?e.target:null))))}function cI(e,t){const n=Ng(e),r=n.Li.get(t)||Hg.min();return n.persistence.runTransaction("Get new document changes","readonly",(e=>n.Ui.getAllFromCollectionGroup(e,t,im(r,-1),Number.MAX_SAFE_INTEGER))).then((e=>(lI(n,t,e),e)))}function lI(e,t,n){let r=Hg.min();n.forEach(((e,t)=>{t.readTime.compareTo(r)>0&&(r=t.readTime)})),e.Li.set(t,r)}async function uI(e,t,n=Jv()){const r=await sI(e,Wy(Sb(t.bundledQuery))),s=Ng(e);return s.persistence.runTransaction("Save named query","readwrite",(e=>{const i=pw(t.readTime);if(r.snapshotVersion.compareTo(i)>=0)return s.Ds.saveNamedQuery(e,t);const o=r.withResumeToken(Lm.EMPTY_BYTE_STRING,i);return s.$i=s.$i.insert(o.targetId,o),s.Vs.updateTargetData(e,o).next((()=>s.Vs.removeMatchingKeysForTargetId(e,r.targetId))).next((()=>s.Vs.addMatchingKeys(e,n,r.targetId))).next((()=>s.Ds.saveNamedQuery(e,t)))}))}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hI(e,t){return`firestore_clients_${e}_${t}`}function dI(e,t,n){let r=`firestore_mutations_${e}_${n}`;return t.isAuthenticated()&&(r+=`_${t.uid}`),r}function fI(e,t){return`firestore_targets_${e}_${t}`}class pI{constructor(e,t,n,r){this.user=e,this.batchId=t,this.state=n,this.error=r}static Ji(e,t,n){const r=JSON.parse(n);let s,i="object"==typeof r&&-1!==["pending","acknowledged","rejected"].indexOf(r.state)&&(void 0===r.error||"object"==typeof r.error);return i&&r.error&&(i="string"==typeof r.error.message&&"string"==typeof r.error.code,i&&(s=new Rg(r.error.code,r.error.message))),i?new pI(e,t,r.state,s):(Eg("SharedClientState",`Failed to parse mutation state for ID '${t}': ${n}`),null)}Yi(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class gI{constructor(e,t,n){this.targetId=e,this.state=t,this.error=n}static Ji(e,t){const n=JSON.parse(t);let r,s="object"==typeof n&&-1!==["not-current","current","rejected"].indexOf(n.state)&&(void 0===n.error||"object"==typeof n.error);return s&&n.error&&(s="string"==typeof n.error.message&&"string"==typeof n.error.code,s&&(r=new Rg(n.error.code,n.error.message))),s?new gI(e,n.state,r):(Eg("SharedClientState",`Failed to parse target state for ID '${e}': ${t}`),null)}Yi(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class mI{constructor(e,t){this.clientId=e,this.activeTargetIds=t}static Ji(e,t){const n=JSON.parse(t);let r="object"==typeof n&&n.activeTargetIds instanceof Array,s=Xv();for(let e=0;r&&e<n.activeTargetIds.length;++e)r=Wm(n.activeTargetIds[e]),s=s.add(n.activeTargetIds[e]);return r?new mI(e,s):(Eg("SharedClientState",`Failed to parse client data for instance '${e}': ${t}`),null)}}class yI{constructor(e,t){this.clientId=e,this.onlineState=t}static Ji(e){const t=JSON.parse(e);return"object"==typeof t&&-1!==["Unknown","Online","Offline"].indexOf(t.onlineState)&&"string"==typeof t.clientId?new yI(t.clientId,t.onlineState):(Eg("SharedClientState",`Failed to parse online state: ${e}`),null)}}class vI{constructor(){this.activeTargetIds=Xv()}Xi(e){this.activeTargetIds=this.activeTargetIds.add(e)}Zi(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Yi(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class wI{constructor(e,t,n,r,s){this.window=e,this.js=t,this.persistenceKey=n,this.tr=r,this.syncEngine=null,this.onlineStateHandler=null,this.sequenceNumberHandler=null,this.er=this.nr.bind(this),this.sr=new Am(zg),this.started=!1,this.ir=[];const i=n.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");this.storage=this.window.localStorage,this.currentUser=s,this.rr=hI(this.persistenceKey,this.tr),this.ur=`firestore_sequence_number_${this.persistenceKey}`,this.sr=this.sr.insert(this.tr,new vI),this.cr=new RegExp(`^firestore_clients_${i}_([^_]*)$`),this.ar=new RegExp(`^firestore_mutations_${i}_(\\d+)(?:_(.*))?$`),this.hr=new RegExp(`^firestore_targets_${i}_(\\d+)$`),this.lr=function(e){return`firestore_online_state_${e}`}(this.persistenceKey),this.dr=function(e){return`firestore_bundle_loaded_v2_${e}`}(this.persistenceKey),this.window.addEventListener("storage",this.er)}static V(e){return!(!e||!e.localStorage)}async start(){const e=await this.syncEngine.Ri();for(const t of e){if(t===this.tr)continue;const e=this.getItem(hI(this.persistenceKey,t));if(e){const n=mI.Ji(t,e);n&&(this.sr=this.sr.insert(n.clientId,n))}}this._r();const t=this.storage.getItem(this.lr);if(t){const e=this.wr(t);e&&this.mr(e)}for(const e of this.ir)this.nr(e);this.ir=[],this.window.addEventListener("pagehide",(()=>this.shutdown())),this.started=!0}writeSequenceNumber(e){this.setItem(this.ur,JSON.stringify(e))}getAllActiveQueryTargets(){return this.gr(this.sr)}isActiveQueryTarget(e){let t=!1;return this.sr.forEach(((n,r)=>{r.activeTargetIds.has(e)&&(t=!0)})),t}addPendingMutation(e){this.yr(e,"pending")}updateMutationState(e,t,n){this.yr(e,t,n),this.pr(e)}addLocalQueryTarget(e){let t="not-current";if(this.isActiveQueryTarget(e)){const n=this.storage.getItem(fI(this.persistenceKey,e));if(n){const r=gI.Ji(e,n);r&&(t=r.state)}}return this.Ir.Xi(e),this._r(),t}removeLocalQueryTarget(e){this.Ir.Zi(e),this._r()}isLocalQueryTarget(e){return this.Ir.activeTargetIds.has(e)}clearQueryState(e){this.removeItem(fI(this.persistenceKey,e))}updateQueryState(e,t,n){this.Tr(e,t,n)}handleUserChange(e,t,n){t.forEach((e=>{this.pr(e)})),this.currentUser=e,n.forEach((e=>{this.addPendingMutation(e)}))}setOnlineState(e){this.Er(e)}notifyBundleLoaded(e){this.Ar(e)}shutdown(){this.started&&(this.window.removeEventListener("storage",this.er),this.removeItem(this.rr),this.started=!1)}getItem(e){const t=this.storage.getItem(e);return Tg("SharedClientState","READ",e,t),t}setItem(e,t){Tg("SharedClientState","SET",e,t),this.storage.setItem(e,t)}removeItem(e){Tg("SharedClientState","REMOVE",e),this.storage.removeItem(e)}nr(e){const t=e;if(t.storageArea===this.storage){if(Tg("SharedClientState","EVENT",t.key,t.newValue),t.key===this.rr)return void Eg("Received WebStorage notification for local change. Another client might have garbage-collected our state");this.js.enqueueRetryable((async()=>{if(this.started){if(null!==t.key)if(this.cr.test(t.key)){if(null==t.newValue){const e=this.Rr(t.key);return this.br(e,null)}{const e=this.Pr(t.key,t.newValue);if(e)return this.br(e.clientId,e)}}else if(this.ar.test(t.key)){if(null!==t.newValue){const e=this.vr(t.key,t.newValue);if(e)return this.Vr(e)}}else if(this.hr.test(t.key)){if(null!==t.newValue){const e=this.Sr(t.key,t.newValue);if(e)return this.Dr(e)}}else if(t.key===this.lr){if(null!==t.newValue){const e=this.wr(t.newValue);if(e)return this.mr(e)}}else if(t.key===this.ur){const e=function(e){let t=Tm.ot;if(null!=e)try{const n=JSON.parse(e);Cg("number"==typeof n),t=n}catch(e){Eg("SharedClientState","Failed to read sequence number from WebStorage",e)}return t}(t.newValue);e!==Tm.ot&&this.sequenceNumberHandler(e)}else if(t.key===this.dr){const e=this.Cr(t.newValue);await Promise.all(e.map((e=>this.syncEngine.Nr(e))))}}else this.ir.push(t)}))}}get Ir(){return this.sr.get(this.tr)}_r(){this.setItem(this.rr,this.Ir.Yi())}yr(e,t,n){const r=new pI(this.currentUser,e,t,n),s=dI(this.persistenceKey,this.currentUser,e);this.setItem(s,r.Yi())}pr(e){const t=dI(this.persistenceKey,this.currentUser,e);this.removeItem(t)}Er(e){const t={clientId:this.tr,onlineState:e};this.storage.setItem(this.lr,JSON.stringify(t))}Tr(e,t,n){const r=fI(this.persistenceKey,e),s=new gI(e,t,n);this.setItem(r,s.Yi())}Ar(e){const t=JSON.stringify(Array.from(e));this.setItem(this.dr,t)}Rr(e){const t=this.cr.exec(e);return t?t[1]:null}Pr(e,t){const n=this.Rr(e);return mI.Ji(n,t)}vr(e,t){const n=this.ar.exec(e),r=Number(n[1]),s=void 0!==n[2]?n[2]:null;return pI.Ji(new bg(s),r,t)}Sr(e,t){const n=this.hr.exec(e),r=Number(n[1]);return gI.Ji(r,t)}wr(e){return yI.Ji(e)}Cr(e){return JSON.parse(e)}async Vr(e){if(e.user.uid===this.currentUser.uid)return this.syncEngine.kr(e.batchId,e.state,e.error);Tg("SharedClientState",`Ignoring mutation for non-active user ${e.user.uid}`)}Dr(e){return this.syncEngine.Or(e.targetId,e.state,e.error)}br(e,t){const n=t?this.sr.insert(e,t):this.sr.remove(e),r=this.gr(this.sr),s=this.gr(n),i=[],o=[];return s.forEach((e=>{r.has(e)||i.push(e)})),r.forEach((e=>{s.has(e)||o.push(e)})),this.syncEngine.Mr(i,o).then((()=>{this.sr=n}))}mr(e){this.sr.get(e.clientId)&&this.onlineStateHandler(e.onlineState)}gr(e){let t=Xv();return e.forEach(((e,n)=>{t=t.unionWith(n.activeTargetIds)})),t}}class bI{constructor(){this.Fr=new vI,this.$r={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,n){}addLocalQueryTarget(e){return this.Fr.Xi(e),this.$r[e]||"not-current"}updateQueryState(e,t,n){this.$r[e]=t}removeLocalQueryTarget(e){this.Fr.Zi(e)}isLocalQueryTarget(e){return this.Fr.activeTargetIds.has(e)}clearQueryState(e){delete this.$r[e]}getAllActiveQueryTargets(){return this.Fr.activeTargetIds}isActiveQueryTarget(e){return this.Fr.activeTargetIds.has(e)}start(){return this.Fr=new vI,Promise.resolve()}handleUserChange(e,t,n){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _I{Br(e){}shutdown(){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class II{constructor(){this.Lr=()=>this.Ur(),this.qr=()=>this.Kr(),this.Gr=[],this.Qr()}Br(e){this.Gr.push(e)}shutdown(){window.removeEventListener("online",this.Lr),window.removeEventListener("offline",this.qr)}Qr(){window.addEventListener("online",this.Lr),window.addEventListener("offline",this.qr)}Ur(){Tg("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.Gr)e(0)}Kr(){Tg("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.Gr)e(1)}static V(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kI={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery"};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TI{constructor(e){this.jr=e.jr,this.Wr=e.Wr}zr(e){this.Hr=e}Jr(e){this.Yr=e}onMessage(e){this.Xr=e}close(){this.Wr()}send(e){this.jr(e)}Zr(){this.Hr()}eo(e){this.Yr(e)}no(e){this.Xr(e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EI extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http";this.so=t+"://"+e.host,this.io="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}ro(e,t,n,r,s){const i=this.oo(e,t);Tg("RestConnection","Sending: ",i,n);const o={};return this.uo(o,r,s),this.co(e,i,o,n).then((e=>(Tg("RestConnection","Received: ",e),e)),(t=>{throw Sg("RestConnection",`${e} failed with error: `,t,"url: ",i,"request:",n),t}))}ao(e,t,n,r,s,i){return this.ro(e,t,n,r,s)}uo(e,t,n){e["X-Goog-Api-Client"]="gl-js/ fire/"+_g,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach(((t,n)=>e[n]=t)),n&&n.headers.forEach(((t,n)=>e[n]=t))}oo(e,t){const n=kI[e];return`${this.so}/v1/${t}:${n}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}co(e,t,n,r){return new Promise(((s,i)=>{const o=new vg;o.listenOnce(dg.COMPLETE,(()=>{try{switch(o.getLastErrorCode()){case hg.NO_ERROR:const t=o.getResponseJson();Tg("Connection","XHR received:",JSON.stringify(t)),s(t);break;case hg.TIMEOUT:Tg("Connection",'RPC "'+e+'" timed out'),i(new Rg(Dg.DEADLINE_EXCEEDED,"Request time out"));break;case hg.HTTP_ERROR:const n=o.getStatus();if(Tg("Connection",'RPC "'+e+'" failed with status:',n,"response text:",o.getResponseText()),n>0){const e=o.getResponseJson().error;if(e&&e.status&&e.message){const t=function(e){const t=e.toLowerCase().replace(/_/g,"-");return Object.values(Dg).indexOf(t)>=0?t:Dg.UNKNOWN}(e.status);i(new Rg(t,e.message))}else i(new Rg(Dg.UNKNOWN,"Server responded with status "+o.getStatus()))}else i(new Rg(Dg.UNAVAILABLE,"Connection failed."));break;default:Ag()}}finally{Tg("Connection",'RPC "'+e+'" completed.')}}));const a=JSON.stringify(r);o.send(t,"POST",a,n,15)}))}ho(e,t,n){const r=[this.so,"/","google.firestore.v1.Firestore","/",e,"/channel"],s=new og,i=Zd(),o={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(o.xmlHttpFactory=new mg({})),this.uo(o.initMessageHeaders,t,n),ai()||ui()||oi().indexOf("Electron/")>=0||hi()||oi().indexOf("MSAppHost/")>=0||li()||(o.httpHeadersOverwriteParam="$httpHeaders");const a=r.join("");Tg("Connection","Creating WebChannel: "+a,o);const c=s.createWebChannel(a,o);let l=!1,u=!1;const h=new TI({jr:e=>{u?Tg("Connection","Not sending because WebChannel is closed:",e):(l||(Tg("Connection","Opening WebChannel transport."),c.open(),l=!0),Tg("Connection","WebChannel sending:",e),c.send(e))},Wr:()=>c.close()}),d=(e,t,n)=>{e.listen(t,(e=>{try{n(e)}catch(e){setTimeout((()=>{throw e}),0)}}))};return d(c,yg.EventType.OPEN,(()=>{u||Tg("Connection","WebChannel transport opened.")})),d(c,yg.EventType.CLOSE,(()=>{u||(u=!0,Tg("Connection","WebChannel transport closed"),h.eo())})),d(c,yg.EventType.ERROR,(e=>{u||(u=!0,Sg("Connection","WebChannel transport errored:",e),h.eo(new Rg(Dg.UNAVAILABLE,"The operation could not be completed")))})),d(c,yg.EventType.MESSAGE,(e=>{var t;if(!u){const n=e.data[0];Cg(!!n);const r=n,s=r.error||(null===(t=r[0])||void 0===t?void 0:t.error);if(s){Tg("Connection","WebChannel received error:",s);const e=s.status;let t=function(e){const t=Lv[e];if(void 0!==t)return Vv(t)}(e),n=s.message;void 0===t&&(t=Dg.INTERNAL,n="Unknown error status: "+e+" with message "+s.message),u=!0,h.eo(new Rg(t,n)),c.close()}else Tg("Connection","WebChannel received:",n),h.no(n)}})),d(i,fg.STAT_EVENT,(e=>{e.stat===pg?Tg("Connection","Detected buffering proxy"):e.stat===gg&&Tg("Connection","Detected no buffering proxy")})),setTimeout((()=>{h.Zr()}),0),h}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function SI(){return"undefined"!=typeof window?window:null}function xI(){return"undefined"!=typeof document?document:null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function AI(e){return new uw(e,!0)}class CI{constructor(e,t,n=1e3,r=1.5,s=6e4){this.js=e,this.timerId=t,this.lo=n,this.fo=r,this._o=s,this.wo=0,this.mo=null,this.yo=Date.now(),this.reset()}reset(){this.wo=0}po(){this.wo=this._o}Io(e){this.cancel();const t=Math.floor(this.wo+this.To()),n=Math.max(0,Date.now()-this.yo),r=Math.max(0,t-n);r>0&&Tg("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.wo} ms, delay with jitter: ${t} ms, last attempt: ${n} ms ago)`),this.mo=this.js.enqueueAfterDelay(this.timerId,r,(()=>(this.yo=Date.now(),e()))),this.wo*=this.fo,this.wo<this.lo&&(this.wo=this.lo),this.wo>this._o&&(this.wo=this._o)}Eo(){null!==this.mo&&(this.mo.skipDelay(),this.mo=null)}cancel(){null!==this.mo&&(this.mo.cancel(),this.mo=null)}To(){return(Math.random()-.5)*this.wo}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NI{constructor(e,t,n,r,s,i,o,a){this.js=e,this.Ao=n,this.Ro=r,this.bo=s,this.authCredentialsProvider=i,this.appCheckCredentialsProvider=o,this.listener=a,this.state=0,this.Po=0,this.vo=null,this.Vo=null,this.stream=null,this.So=new CI(e,t)}Do(){return 1===this.state||5===this.state||this.Co()}Co(){return 2===this.state||3===this.state}start(){4!==this.state?this.auth():this.xo()}async stop(){this.Do()&&await this.close(0)}No(){this.state=0,this.So.reset()}ko(){this.Co()&&null===this.vo&&(this.vo=this.js.enqueueAfterDelay(this.Ao,6e4,(()=>this.Oo())))}Mo(e){this.Fo(),this.stream.send(e)}async Oo(){if(this.Co())return this.close(0)}Fo(){this.vo&&(this.vo.cancel(),this.vo=null)}$o(){this.Vo&&(this.Vo.cancel(),this.Vo=null)}async close(e,t){this.Fo(),this.$o(),this.So.cancel(),this.Po++,4!==e?this.So.reset():t&&t.code===Dg.RESOURCE_EXHAUSTED?(Eg(t.toString()),Eg("Using maximum backoff delay to prevent overloading the backend."),this.So.po()):t&&t.code===Dg.UNAUTHENTICATED&&3!==this.state&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),null!==this.stream&&(this.Bo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Jr(t)}Bo(){}auth(){this.state=1;const e=this.Lo(this.Po),t=this.Po;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([e,n])=>{this.Po===t&&this.Uo(e,n)}),(t=>{e((()=>{const e=new Rg(Dg.UNKNOWN,"Fetching auth token failed: "+t.message);return this.qo(e)}))}))}Uo(e,t){const n=this.Lo(this.Po);this.stream=this.Ko(e,t),this.stream.zr((()=>{n((()=>(this.state=2,this.Vo=this.js.enqueueAfterDelay(this.Ro,1e4,(()=>(this.Co()&&(this.state=3),Promise.resolve()))),this.listener.zr())))})),this.stream.Jr((e=>{n((()=>this.qo(e)))})),this.stream.onMessage((e=>{n((()=>this.onMessage(e)))}))}xo(){this.state=5,this.So.Io((async()=>{this.state=0,this.start()}))}qo(e){return Tg("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Lo(e){return t=>{this.js.enqueueAndForget((()=>this.Po===e?t():(Tg("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class DI extends NI{constructor(e,t,n,r,s,i){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,n,r,i),this.wt=s}Ko(e,t){return this.bo.ho("Listen",e,t)}onMessage(e){this.So.reset();const t=function(e,t){let n;if("targetChange"in t){t.targetChange;const s="NO_CHANGE"===(r=t.targetChange.targetChangeType||"NO_CHANGE")?0:"ADD"===r?1:"REMOVE"===r?2:"CURRENT"===r?3:"RESET"===r?4:Ag(),i=t.targetChange.targetIds||[],o=function(e,t){return e.dt?(Cg(void 0===t||"string"==typeof t),Lm.fromBase64String(t||"")):(Cg(void 0===t||t instanceof Uint8Array),Lm.fromUint8Array(t||new Uint8Array))}(e,t.targetChange.resumeToken),a=t.targetChange.cause,c=a&&function(e){const t=void 0===e.code?Dg.UNKNOWN:Vv(e.code);return new Rg(t,e.message||"")}(a);n=new rw(s,i,o,c||null)}else if("documentChange"in t){t.documentChange;const r=t.documentChange;r.document,r.document.name,r.document.updateTime;const s=vw(e,r.document.name),i=pw(r.document.updateTime),o=new gy({mapValue:{fields:r.document.fields}}),a=yy.newFoundDocument(s,i,o),c=r.targetIds||[],l=r.removedTargetIds||[];n=new tw(c,l,a.key,a)}else if("documentDelete"in t){t.documentDelete;const r=t.documentDelete;r.document;const s=vw(e,r.document),i=r.readTime?pw(r.readTime):Hg.min(),o=yy.newNoDocument(s,i),a=r.removedTargetIds||[];n=new tw([],a,o.key,o)}else if("documentRemove"in t){t.documentRemove;const r=t.documentRemove;r.document;const s=vw(e,r.document),i=r.removedTargetIds||[];n=new tw([],i,s,null)}else{if(!("filter"in t))return Ag();{t.filter;const e=t.filter;e.targetId;const r=e.count||0,s=new Pv(r),i=e.targetId;n=new nw(i,s)}}var r;return n}(this.wt,e),n=function(e){if(!("targetChange"in e))return Hg.min();const t=e.targetChange;return t.targetIds&&t.targetIds.length?Hg.min():t.readTime?pw(t.readTime):Hg.min()}(e);return this.listener.Go(t,n)}Qo(e){const t={};t.database=_w(this.wt),t.addTarget=function(e,t){let n;const r=t.target;return n=Iy(r)?{documents:xw(e,r)}:{query:Aw(e,r)},n.targetId=t.targetId,t.resumeToken.approximateByteSize()>0?n.resumeToken=dw(e,t.resumeToken):t.snapshotVersion.compareTo(Hg.min())>0&&(n.readTime=hw(e,t.snapshotVersion.toTimestamp())),n}(this.wt,e);const n=function(e,t){const n=function(e,t){switch(t){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return Ag()}}(0,t.purpose);return null==n?null:{"goog-listen-tags":n}}(this.wt,e);n&&(t.labels=n),this.Mo(t)}jo(e){const t={};t.database=_w(this.wt),t.removeTarget=e,this.Mo(t)}}class RI extends NI{constructor(e,t,n,r,s,i){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,n,r,i),this.wt=s,this.Wo=!1}get zo(){return this.Wo}start(){this.Wo=!1,this.lastStreamToken=void 0,super.start()}Bo(){this.Wo&&this.Ho([])}Ko(e,t){return this.bo.ho("Write",e,t)}onMessage(e){if(Cg(!!e.streamToken),this.lastStreamToken=e.streamToken,this.Wo){this.So.reset();const t=function(e,t){return e&&e.length>0?(Cg(void 0!==t),e.map((e=>function(e,t){let n=e.updateTime?pw(e.updateTime):pw(t);return n.isEqual(Hg.min())&&(n=pw(t)),new vv(n,e.transformResults||[])}(e,t)))):[]}(e.writeResults,e.commitTime),n=pw(e.commitTime);return this.listener.Jo(n,t)}return Cg(!e.writeResults||0===e.writeResults.length),this.Wo=!0,this.listener.Yo()}Xo(){const e={};e.database=_w(this.wt),this.Mo(e)}Ho(e){const t={streamToken:this.lastStreamToken,writes:e.map((e=>Ew(this.wt,e)))};this.Mo(t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OI extends class{}{constructor(e,t,n,r){super(),this.authCredentials=e,this.appCheckCredentials=t,this.bo=n,this.wt=r,this.Zo=!1}tu(){if(this.Zo)throw new Rg(Dg.FAILED_PRECONDITION,"The client has already been terminated.")}ro(e,t,n){return this.tu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([r,s])=>this.bo.ro(e,t,n,r,s))).catch((e=>{throw"FirebaseError"===e.name?(e.code===Dg.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new Rg(Dg.UNKNOWN,e.toString())}))}ao(e,t,n,r){return this.tu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([s,i])=>this.bo.ao(e,t,n,s,i,r))).catch((e=>{throw"FirebaseError"===e.name?(e.code===Dg.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new Rg(Dg.UNKNOWN,e.toString())}))}terminate(){this.Zo=!0}}class PI{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.eu=0,this.nu=null,this.su=!0}iu(){0===this.eu&&(this.ru("Unknown"),this.nu=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this.nu=null,this.ou("Backend didn't respond within 10 seconds."),this.ru("Offline"),Promise.resolve()))))}uu(e){"Online"===this.state?this.ru("Unknown"):(this.eu++,this.eu>=1&&(this.cu(),this.ou(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ru("Offline")))}set(e){this.cu(),this.eu=0,"Online"===e&&(this.su=!1),this.ru(e)}ru(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}ou(e){const t=`Could not reach Cloud Firestore backend. ${e}\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.su?(Eg(t),this.su=!1):Tg("OnlineStateTracker",t)}cu(){null!==this.nu&&(this.nu.cancel(),this.nu=null)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LI{constructor(e,t,n,r,s){this.localStore=e,this.datastore=t,this.asyncQueue=n,this.remoteSyncer={},this.au=[],this.hu=new Map,this.lu=new Set,this.fu=[],this.du=s,this.du.Br((e=>{n.enqueueAndForget((async()=>{zI(this)&&(Tg("RemoteStore","Restarting streams for network reachability change."),await async function(e){const t=Ng(e);t.lu.add(4),await FI(t),t._u.set("Unknown"),t.lu.delete(4),await MI(t)}(this))}))})),this._u=new PI(n,r)}}async function MI(e){if(zI(e))for(const t of e.fu)await t(!0)}async function FI(e){for(const t of e.fu)await t(!1)}function VI(e,t){const n=Ng(e);n.hu.has(t.targetId)||(n.hu.set(t.targetId,t),$I(n)?qI(n):ck(n).Co()&&BI(n,t))}function UI(e,t){const n=Ng(e),r=ck(n);n.hu.delete(t),r.Co()&&jI(n,t),0===n.hu.size&&(r.Co()?r.ko():zI(n)&&n._u.set("Unknown"))}function BI(e,t){e.wu.Nt(t.targetId),ck(e).Qo(t)}function jI(e,t){e.wu.Nt(t),ck(e).jo(t)}function qI(e){e.wu=new iw({getRemoteKeysForTarget:t=>e.remoteSyncer.getRemoteKeysForTarget(t),te:t=>e.hu.get(t)||null}),ck(e).start(),e._u.iu()}function $I(e){return zI(e)&&!ck(e).Do()&&e.hu.size>0}function zI(e){return 0===Ng(e).lu.size}function GI(e){e.wu=void 0}async function KI(e){e.hu.forEach(((t,n)=>{BI(e,t)}))}async function WI(e,t){GI(e),$I(e)?(e._u.uu(t),qI(e)):e._u.set("Unknown")}async function HI(e,t,n){if(e._u.set("Online"),t instanceof rw&&2===t.state&&t.cause)try{await async function(e,t){const n=t.cause;for(const r of t.targetIds)e.hu.has(r)&&(await e.remoteSyncer.rejectListen(r,n),e.hu.delete(r),e.wu.removeTarget(r))}(e,t)}catch(n){Tg("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),n),await QI(e,n)}else if(t instanceof tw?e.wu.Ut(t):t instanceof nw?e.wu.zt(t):e.wu.Gt(t),!n.isEqual(Hg.min()))try{const t=await tI(e.localStore);n.compareTo(t)>=0&&await function(e,t){const n=e.wu.Yt(t);return n.targetChanges.forEach(((n,r)=>{if(n.resumeToken.approximateByteSize()>0){const s=e.hu.get(r);s&&e.hu.set(r,s.withResumeToken(n.resumeToken,t))}})),n.targetMismatches.forEach((t=>{const n=e.hu.get(t);if(!n)return;e.hu.set(t,n.withResumeToken(Lm.EMPTY_BYTE_STRING,n.snapshotVersion)),jI(e,t);const r=new yb(n.target,t,1,n.sequenceNumber);BI(e,r)})),e.remoteSyncer.applyRemoteEvent(n)}(e,n)}catch(t){Tg("RemoteStore","Failed to raise snapshot:",t),await QI(e,t)}}async function QI(e,t,n){if(!ym(t))throw t;e.lu.add(1),await FI(e),e._u.set("Offline"),n||(n=()=>tI(e.localStore)),e.asyncQueue.enqueueRetryable((async()=>{Tg("RemoteStore","Retrying IndexedDB access"),await n(),e.lu.delete(1),await MI(e)}))}function JI(e,t){return t().catch((n=>QI(e,n,t)))}async function YI(e){const t=Ng(e),n=lk(t);let r=t.au.length>0?t.au[t.au.length-1].batchId:-1;for(;XI(t);)try{const e=await rI(t.localStore,r);if(null===e){0===t.au.length&&n.ko();break}r=e.batchId,ZI(t,e)}catch(e){await QI(t,e)}ek(t)&&tk(t)}function XI(e){return zI(e)&&e.au.length<10}function ZI(e,t){e.au.push(t);const n=lk(e);n.Co()&&n.zo&&n.Ho(t.mutations)}function ek(e){return zI(e)&&!lk(e).Do()&&e.au.length>0}function tk(e){lk(e).start()}async function nk(e){lk(e).Xo()}async function rk(e){const t=lk(e);for(const n of e.au)t.Ho(n.mutations)}async function sk(e,t,n){const r=e.au.shift(),s=gb.from(r,t,n);await JI(e,(()=>e.remoteSyncer.applySuccessfulWrite(s))),await YI(e)}async function ik(e,t){t&&lk(e).zo&&await async function(e,t){if(Fv(n=t.code)&&n!==Dg.ABORTED){const n=e.au.shift();lk(e).No(),await JI(e,(()=>e.remoteSyncer.rejectFailedWrite(n.batchId,t))),await YI(e)}var n}(e,t),ek(e)&&tk(e)}async function ok(e,t){const n=Ng(e);n.asyncQueue.verifyOperationInProgress(),Tg("RemoteStore","RemoteStore received new credentials");const r=zI(n);n.lu.add(3),await FI(n),r&&n._u.set("Unknown"),await n.remoteSyncer.handleCredentialChange(t),n.lu.delete(3),await MI(n)}async function ak(e,t){const n=Ng(e);t?(n.lu.delete(2),await MI(n)):t||(n.lu.add(2),await FI(n),n._u.set("Unknown"))}function ck(e){return e.mu||(e.mu=function(e,t,n){const r=Ng(e);return r.tu(),new DI(t,r.bo,r.authCredentials,r.appCheckCredentials,r.wt,n)}(e.datastore,e.asyncQueue,{zr:KI.bind(null,e),Jr:WI.bind(null,e),Go:HI.bind(null,e)}),e.fu.push((async t=>{t?(e.mu.No(),$I(e)?qI(e):e._u.set("Unknown")):(await e.mu.stop(),GI(e))}))),e.mu}function lk(e){return e.gu||(e.gu=function(e,t,n){const r=Ng(e);return r.tu(),new RI(t,r.bo,r.authCredentials,r.appCheckCredentials,r.wt,n)}(e.datastore,e.asyncQueue,{zr:nk.bind(null,e),Jr:ik.bind(null,e),Yo:rk.bind(null,e),Jo:sk.bind(null,e)}),e.fu.push((async t=>{t?(e.gu.No(),await YI(e)):(await e.gu.stop(),e.au.length>0&&(Tg("RemoteStore",`Stopping write stream with ${e.au.length} pending writes`),e.au=[]))}))),e.gu
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class uk{constructor(e,t,n,r,s){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=n,this.op=r,this.removalCallback=s,this.deferred=new Og,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((e=>{}))}static createAndSchedule(e,t,n,r,s){const i=Date.now()+n,o=new uk(e,t,i,r,s);return o.start(n),o}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new Rg(Dg.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function hk(e,t){if(Eg("AsyncQueue",`${t}: ${e}`),ym(e))return new Rg(Dg.UNAVAILABLE,`${t}: ${e}`);throw e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dk{constructor(e){this.comparator=e?(t,n)=>e(t,n)||Zg.comparator(t.key,n.key):(e,t)=>Zg.comparator(e.key,t.key),this.keyedMap=$v(),this.sortedSet=new Am(this.comparator)}static emptySet(e){return new dk(e.comparator)}has(e){return null!=this.keyedMap.get(e)}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((t,n)=>(e(t),!1)))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof dk))return!1;if(this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),n=e.sortedSet.getIterator();for(;t.hasNext();){const e=t.getNext().key,r=n.getNext().key;if(!e.isEqual(r))return!1}return!0}toString(){const e=[];return this.forEach((t=>{e.push(t.toString())})),0===e.length?"DocumentSet ()":"DocumentSet (\n  "+e.join("  \n")+"\n)"}copy(e,t){const n=new dk;return n.comparator=this.comparator,n.keyedMap=e,n.sortedSet=t,n}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fk{constructor(){this.yu=new Am(Zg.comparator)}track(e){const t=e.doc.key,n=this.yu.get(t);n?0!==e.type&&3===n.type?this.yu=this.yu.insert(t,e):3===e.type&&1!==n.type?this.yu=this.yu.insert(t,{type:n.type,doc:e.doc}):2===e.type&&2===n.type?this.yu=this.yu.insert(t,{type:2,doc:e.doc}):2===e.type&&0===n.type?this.yu=this.yu.insert(t,{type:0,doc:e.doc}):1===e.type&&0===n.type?this.yu=this.yu.remove(t):1===e.type&&2===n.type?this.yu=this.yu.insert(t,{type:1,doc:n.doc}):0===e.type&&1===n.type?this.yu=this.yu.insert(t,{type:2,doc:e.doc}):Ag():this.yu=this.yu.insert(t,e)}pu(){const e=[];return this.yu.inorderTraversal(((t,n)=>{e.push(n)})),e}}class pk{constructor(e,t,n,r,s,i,o,a){this.query=e,this.docs=t,this.oldDocs=n,this.docChanges=r,this.mutatedKeys=s,this.fromCache=i,this.syncStateChanged=o,this.excludesMetadataChanges=a}static fromInitialDocuments(e,t,n,r){const s=[];return t.forEach((e=>{s.push({type:0,doc:e})})),new pk(e,t,dk.emptySet(t),s,n,r,!0,!1)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Qy(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,n=e.docChanges;if(t.length!==n.length)return!1;for(let e=0;e<t.length;e++)if(t[e].type!==n[e].type||!t[e].doc.isEqual(n[e].doc))return!1;return!0}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gk{constructor(){this.Iu=void 0,this.listeners=[]}}class mk{constructor(){this.queries=new Uv((e=>Jy(e)),Qy),this.onlineState="Unknown",this.Tu=new Set}}async function yk(e,t){const n=Ng(e),r=t.query;let s=!1,i=n.queries.get(r);if(i||(s=!0,i=new gk),s)try{i.Iu=await n.onListen(r)}catch(e){const n=hk(e,`Initialization of query '${Yy(t.query)}' failed`);return void t.onError(n)}n.queries.set(r,i),i.listeners.push(t),t.Eu(n.onlineState),i.Iu&&t.Au(i.Iu)&&_k(n)}async function vk(e,t){const n=Ng(e),r=t.query;let s=!1;const i=n.queries.get(r);if(i){const e=i.listeners.indexOf(t);e>=0&&(i.listeners.splice(e,1),s=0===i.listeners.length)}if(s)return n.queries.delete(r),n.onUnlisten(r)}function wk(e,t){const n=Ng(e);let r=!1;for(const e of t){const t=e.query,s=n.queries.get(t);if(s){for(const t of s.listeners)t.Au(e)&&(r=!0);s.Iu=e}}r&&_k(n)}function bk(e,t,n){const r=Ng(e),s=r.queries.get(t);if(s)for(const e of s.listeners)e.onError(n);r.queries.delete(t)}function _k(e){e.Tu.forEach((e=>{e.next()}))}class Ik{constructor(e,t,n){this.query=e,this.Ru=t,this.bu=!1,this.Pu=null,this.onlineState="Unknown",this.options=n||{}}Au(e){if(!this.options.includeMetadataChanges){const t=[];for(const n of e.docChanges)3!==n.type&&t.push(n);e=new pk(e.query,e.docs,e.oldDocs,t,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0)}let t=!1;return this.bu?this.vu(e)&&(this.Ru.next(e),t=!0):this.Vu(e,this.onlineState)&&(this.Su(e),t=!0),this.Pu=e,t}onError(e){this.Ru.error(e)}Eu(e){this.onlineState=e;let t=!1;return this.Pu&&!this.bu&&this.Vu(this.Pu,e)&&(this.Su(this.Pu),t=!0),t}Vu(e,t){if(!e.fromCache)return!0;const n="Offline"!==t;return!(this.options.Du&&n||e.docs.isEmpty()&&"Offline"!==t)}vu(e){if(e.docChanges.length>0)return!0;const t=this.Pu&&this.Pu.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&!0===this.options.includeMetadataChanges}Su(e){e=pk.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache),this.bu=!0,this.Ru.next(e)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kk{constructor(e,t){this.payload=e,this.byteLength=t}Cu(){return"metadata"in this.payload}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tk{constructor(e){this.wt=e}Wi(e){return vw(this.wt,e)}zi(e){return e.metadata.exists?Tw(this.wt,e.document,!1):yy.newNoDocument(this.Wi(e.metadata.name),this.Hi(e.metadata.readTime))}Hi(e){return pw(e)}}class Ek{constructor(e,t,n){this.xu=e,this.localStore=t,this.wt=n,this.queries=[],this.documents=[],this.collectionGroups=new Set,this.progress=Sk(e)}Nu(e){this.progress.bytesLoaded+=e.byteLength;let t=this.progress.documentsLoaded;if(e.payload.namedQuery)this.queries.push(e.payload.namedQuery);else if(e.payload.documentMetadata){this.documents.push({metadata:e.payload.documentMetadata}),e.payload.documentMetadata.exists||++t;const n=Jg.fromString(e.payload.documentMetadata.name);this.collectionGroups.add(n.get(n.length-2))}else e.payload.document&&(this.documents[this.documents.length-1].document=e.payload.document,++t);return t!==this.progress.documentsLoaded?(this.progress.documentsLoaded=t,Object.assign({},this.progress)):null}ku(e){const t=new Map,n=new Tk(this.wt);for(const r of e)if(r.metadata.queries){const e=n.Wi(r.metadata.name);for(const n of r.metadata.queries){const r=(t.get(n)||Jv()).add(e);t.set(n,r)}}return t}async complete(){const e=await async function(e,t,n,r){const s=Ng(e);let i=Jv(),o=jv();for(const e of n){const n=t.Wi(e.metadata.name);e.document&&(i=i.add(n));const r=t.zi(e);r.setReadTime(t.Hi(e.metadata.readTime)),o=o.insert(n,r)}const a=s.Ui.newChangeBuffer({trackRemovals:!0}),c=await sI(s,(l=r,Wy(qy(Jg.fromString(`__bundle__/docs/${l}`)))));var l;return s.persistence.runTransaction("Apply bundle documents","readwrite",(e=>nI(e,a,o).next((t=>(a.apply(e),t))).next((t=>s.Vs.removeMatchingKeysForTargetId(e,c.targetId).next((()=>s.Vs.addMatchingKeys(e,i,c.targetId))).next((()=>s.localDocuments.getLocalViewOfDocuments(e,t.Gi,t.Qi))).next((()=>t.Gi))))))}(this.localStore,new Tk(this.wt),this.documents,this.xu.id),t=this.ku(this.documents);for(const e of this.queries)await uI(this.localStore,e,t.get(e.name));return this.progress.taskState="Success",{progress:this.progress,Ou:this.collectionGroups,Mu:e}}}function Sk(e){return{taskState:"Running",documentsLoaded:0,bytesLoaded:0,totalDocuments:e.totalDocuments,totalBytes:e.totalBytes}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xk{constructor(e){this.key=e}}class Ak{constructor(e){this.key=e}}class Ck{constructor(e,t){this.query=e,this.Fu=t,this.$u=null,this.current=!1,this.Bu=Jv(),this.mutatedKeys=Jv(),this.Lu=ev(e),this.Uu=new dk(this.Lu)}get qu(){return this.Fu}Ku(e,t){const n=t?t.Gu:new fk,r=t?t.Uu:this.Uu;let s=t?t.mutatedKeys:this.mutatedKeys,i=r,o=!1;const a="F"===this.query.limitType&&r.size===this.query.limit?r.last():null,c="L"===this.query.limitType&&r.size===this.query.limit?r.first():null;if(e.inorderTraversal(((e,t)=>{const l=r.get(e),u=Xy(this.query,t)?t:null,h=!!l&&this.mutatedKeys.has(l.key),d=!!u&&(u.hasLocalMutations||this.mutatedKeys.has(u.key)&&u.hasCommittedMutations);let f=!1;l&&u?l.data.isEqual(u.data)?h!==d&&(n.track({type:3,doc:u}),f=!0):this.Qu(l,u)||(n.track({type:2,doc:u}),f=!0,(a&&this.Lu(u,a)>0||c&&this.Lu(u,c)<0)&&(o=!0)):!l&&u?(n.track({type:0,doc:u}),f=!0):l&&!u&&(n.track({type:1,doc:l}),f=!0,(a||c)&&(o=!0)),f&&(u?(i=i.add(u),s=d?s.add(e):s.delete(e)):(i=i.delete(e),s=s.delete(e)))})),null!==this.query.limit)for(;i.size>this.query.limit;){const e="F"===this.query.limitType?i.last():i.first();i=i.delete(e.key),s=s.delete(e.key),n.track({type:1,doc:e})}return{Uu:i,Gu:n,Oi:o,mutatedKeys:s}}Qu(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,n){const r=this.Uu;this.Uu=e.Uu,this.mutatedKeys=e.mutatedKeys;const s=e.Gu.pu();s.sort(((e,t)=>function(e,t){const n=e=>{switch(e){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Ag()}};return n(e)-n(t)}(e.type,t.type)||this.Lu(e.doc,t.doc))),this.ju(n);const i=t?this.Wu():[],o=0===this.Bu.size&&this.current?1:0,a=o!==this.$u;return this.$u=o,0!==s.length||a?{snapshot:new pk(this.query,e.Uu,r,s,e.mutatedKeys,0===o,a,!1),zu:i}:{zu:i}}Eu(e){return this.current&&"Offline"===e?(this.current=!1,this.applyChanges({Uu:this.Uu,Gu:new fk,mutatedKeys:this.mutatedKeys,Oi:!1},!1)):{zu:[]}}Hu(e){return!this.Fu.has(e)&&!!this.Uu.has(e)&&!this.Uu.get(e).hasLocalMutations}ju(e){e&&(e.addedDocuments.forEach((e=>this.Fu=this.Fu.add(e))),e.modifiedDocuments.forEach((e=>{})),e.removedDocuments.forEach((e=>this.Fu=this.Fu.delete(e))),this.current=e.current)}Wu(){if(!this.current)return[];const e=this.Bu;this.Bu=Jv(),this.Uu.forEach((e=>{this.Hu(e.key)&&(this.Bu=this.Bu.add(e.key))}));const t=[];return e.forEach((e=>{this.Bu.has(e)||t.push(new Ak(e))})),this.Bu.forEach((n=>{e.has(n)||t.push(new xk(n))})),t}Ju(e){this.Fu=e.ji,this.Bu=Jv();const t=this.Ku(e.documents);return this.applyChanges(t,!0)}Yu(){return pk.fromInitialDocuments(this.query,this.Uu,this.mutatedKeys,0===this.$u)}}class Nk{constructor(e,t,n){this.query=e,this.targetId=t,this.view=n}}class Dk{constructor(e){this.key=e,this.Xu=!1}}class Rk{constructor(e,t,n,r,s,i){this.localStore=e,this.remoteStore=t,this.eventManager=n,this.sharedClientState=r,this.currentUser=s,this.maxConcurrentLimboResolutions=i,this.Zu={},this.tc=new Uv((e=>Jy(e)),Qy),this.ec=new Map,this.nc=new Set,this.sc=new Am(Zg.comparator),this.ic=new Map,this.rc=new P_,this.oc={},this.uc=new Map,this.cc=u_.Rn(),this.onlineState="Unknown",this.ac=void 0}get isPrimaryClient(){return!0===this.ac}}async function Ok(e,t){const n=iT(e);let r,s;const i=n.tc.get(t);if(i)r=i.targetId,n.sharedClientState.addLocalQueryTarget(r),s=i.view.Yu();else{const e=await sI(n.localStore,Wy(t));n.isPrimaryClient&&VI(n.remoteStore,e);const i=n.sharedClientState.addLocalQueryTarget(e.targetId);r=e.targetId,s=await Pk(n,t,r,"current"===i)}return s}async function Pk(e,t,n,r){e.hc=(t,n,r)=>async function(e,t,n,r){let s=t.view.Ku(n);s.Oi&&(s=await oI(e.localStore,t.query,!1).then((({documents:e})=>t.view.Ku(e,s))));const i=r&&r.targetChanges.get(t.targetId),o=t.view.applyChanges(s,e.isPrimaryClient,i);return Gk(e,t.targetId,o.zu),o.snapshot}(e,t,n,r);const s=await oI(e.localStore,t,!0),i=new Ck(t,s.ji),o=i.Ku(s.documents),a=ew.createSynthesizedTargetChangeForCurrentChange(n,r&&"Offline"!==e.onlineState),c=i.applyChanges(o,e.isPrimaryClient,a);Gk(e,n,c.zu);const l=new Nk(t,n,i);return e.tc.set(t,l),e.ec.has(n)?e.ec.get(n).push(t):e.ec.set(n,[t]),c.snapshot}async function Lk(e,t){const n=Ng(e),r=n.tc.get(t),s=n.ec.get(r.targetId);if(s.length>1)return n.ec.set(r.targetId,s.filter((e=>!Qy(e,t)))),void n.tc.delete(t);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await iI(n.localStore,r.targetId,!1).then((()=>{n.sharedClientState.clearQueryState(r.targetId),UI(n.remoteStore,r.targetId),$k(n,r.targetId)})).catch(hm)):($k(n,r.targetId),await iI(n.localStore,r.targetId,!0))}async function Mk(e,t){const n=Ng(e);try{const e=await function(e,t){const n=Ng(e),r=t.snapshotVersion;let s=n.$i;return n.persistence.runTransaction("Apply remote event","readwrite-primary",(e=>{const i=n.Ui.newChangeBuffer({trackRemovals:!0});s=n.$i;const o=[];t.targetChanges.forEach(((i,a)=>{const c=s.get(a);if(!c)return;o.push(n.Vs.removeMatchingKeys(e,i.removedDocuments,a).next((()=>n.Vs.addMatchingKeys(e,i.addedDocuments,a))));let l=c.withSequenceNumber(e.currentSequenceNumber);var u,h,d;t.targetMismatches.has(a)?l=l.withResumeToken(Lm.EMPTY_BYTE_STRING,Hg.min()).withLastLimboFreeSnapshotVersion(Hg.min()):i.resumeToken.approximateByteSize()>0&&(l=l.withResumeToken(i.resumeToken,r)),s=s.insert(a,l),h=l,d=i,(0===(u=c).resumeToken.approximateByteSize()||h.snapshotVersion.toMicroseconds()-u.snapshotVersion.toMicroseconds()>=3e8||d.addedDocuments.size+d.modifiedDocuments.size+d.removedDocuments.size>0)&&o.push(n.Vs.updateTargetData(e,l))}));let a=jv(),c=Jv();if(t.documentUpdates.forEach((r=>{t.resolvedLimboDocuments.has(r)&&o.push(n.persistence.referenceDelegate.updateLimboDocument(e,r))})),o.push(nI(e,i,t.documentUpdates).next((e=>{a=e.Gi,c=e.Qi}))),!r.isEqual(Hg.min())){const t=n.Vs.getLastRemoteSnapshotVersion(e).next((t=>n.Vs.setTargetsMetadata(e,e.currentSequenceNumber,r)));o.push(t)}return dm.waitFor(o).next((()=>i.apply(e))).next((()=>n.localDocuments.getLocalViewOfDocuments(e,a,c))).next((()=>a))})).then((e=>(n.$i=s,e)))}(n.localStore,t);t.targetChanges.forEach(((e,t)=>{const r=n.ic.get(t);r&&(Cg(e.addedDocuments.size+e.modifiedDocuments.size+e.removedDocuments.size<=1),e.addedDocuments.size>0?r.Xu=!0:e.modifiedDocuments.size>0?Cg(r.Xu):e.removedDocuments.size>0&&(Cg(r.Xu),r.Xu=!1))})),await Hk(n,e,t)}catch(e){await hm(e)}}function Fk(e,t,n){const r=Ng(e);if(r.isPrimaryClient&&0===n||!r.isPrimaryClient&&1===n){const e=[];r.tc.forEach(((n,r)=>{const s=r.view.Eu(t);s.snapshot&&e.push(s.snapshot)})),function(e,t){const n=Ng(e);n.onlineState=t;let r=!1;n.queries.forEach(((e,n)=>{for(const e of n.listeners)e.Eu(t)&&(r=!0)})),r&&_k(n)}(r.eventManager,t),e.length&&r.Zu.Go(e),r.onlineState=t,r.isPrimaryClient&&r.sharedClientState.setOnlineState(t)}}async function Vk(e,t,n){const r=Ng(e);r.sharedClientState.updateQueryState(t,"rejected",n);const s=r.ic.get(t),i=s&&s.key;if(i){let e=new Am(Zg.comparator);e=e.insert(i,yy.newNoDocument(i,Hg.min()));const n=Jv().add(i),s=new Zv(Hg.min(),new Map,new Dm(zg),e,n);await Mk(r,s),r.sc=r.sc.remove(i),r.ic.delete(t),Wk(r)}else await iI(r.localStore,t,!1).then((()=>$k(r,t,n))).catch(hm)}async function Uk(e,t){const n=Ng(e),r=t.batch.batchId;try{const e=await function(e,t){const n=Ng(e);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",(e=>{const r=t.batch.keys(),s=n.Ui.newChangeBuffer({trackRemovals:!0});return function(e,t,n,r){const s=n.batch,i=s.keys();let o=dm.resolve();return i.forEach((e=>{o=o.next((()=>r.getEntry(t,e))).next((t=>{const i=n.docVersions.get(e);Cg(null!==i),t.version.compareTo(i)<0&&(s.applyToRemoteDocument(t,n),t.isValidDocument()&&(t.setReadTime(n.commitVersion),r.addEntry(t)))}))})),o.next((()=>e.mutationQueue.removeMutationBatch(t,s)))}(n,e,t,s).next((()=>s.apply(e))).next((()=>n.mutationQueue.performConsistencyCheck(e))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(e,r,t.batch.batchId))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(e,function(e){let t=Jv();for(let n=0;n<e.mutationResults.length;++n)e.mutationResults[n].transformResults.length>0&&(t=t.add(e.batch.mutations[n].key));return t}(t)))).next((()=>n.localDocuments.getDocuments(e,r)))}))}(n.localStore,t);qk(n,r,null),jk(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Hk(n,e)}catch(e){await hm(e)}}async function Bk(e,t,n){const r=Ng(e);try{const e=await function(e,t){const n=Ng(e);return n.persistence.runTransaction("Reject batch","readwrite-primary",(e=>{let r;return n.mutationQueue.lookupMutationBatch(e,t).next((t=>(Cg(null!==t),r=t.keys(),n.mutationQueue.removeMutationBatch(e,t)))).next((()=>n.mutationQueue.performConsistencyCheck(e))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(e,r,t))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(e,r))).next((()=>n.localDocuments.getDocuments(e,r)))}))}(r.localStore,t);qk(r,t,n),jk(r,t),r.sharedClientState.updateMutationState(t,"rejected",n),await Hk(r,e)}catch(e){await hm(e)}}function jk(e,t){(e.uc.get(t)||[]).forEach((e=>{e.resolve()})),e.uc.delete(t)}function qk(e,t,n){const r=Ng(e);let s=r.oc[r.currentUser.toKey()];if(s){const e=s.get(t);e&&(n?e.reject(n):e.resolve(),s=s.remove(t)),r.oc[r.currentUser.toKey()]=s}}function $k(e,t,n=null){e.sharedClientState.removeLocalQueryTarget(t);for(const r of e.ec.get(t))e.tc.delete(r),n&&e.Zu.lc(r,n);e.ec.delete(t),e.isPrimaryClient&&e.rc.us(t).forEach((t=>{e.rc.containsKey(t)||zk(e,t)}))}function zk(e,t){e.nc.delete(t.path.canonicalString());const n=e.sc.get(t);null!==n&&(UI(e.remoteStore,n),e.sc=e.sc.remove(t),e.ic.delete(n),Wk(e))}function Gk(e,t,n){for(const r of n)r instanceof xk?(e.rc.addReference(r.key,t),Kk(e,r)):r instanceof Ak?(Tg("SyncEngine","Document no longer in limbo: "+r.key),e.rc.removeReference(r.key,t),e.rc.containsKey(r.key)||zk(e,r.key)):Ag()}function Kk(e,t){const n=t.key,r=n.path.canonicalString();e.sc.get(n)||e.nc.has(r)||(Tg("SyncEngine","New document in limbo: "+n),e.nc.add(r),Wk(e))}function Wk(e){for(;e.nc.size>0&&e.sc.size<e.maxConcurrentLimboResolutions;){const t=e.nc.values().next().value;e.nc.delete(t);const n=new Zg(Jg.fromString(t)),r=e.cc.next();e.ic.set(r,new Dk(n)),e.sc=e.sc.insert(n,r),VI(e.remoteStore,new yb(Wy(qy(n.path)),r,2,Tm.ot))}}async function Hk(e,t,n){const r=Ng(e),s=[],i=[],o=[];r.tc.isEmpty()||(r.tc.forEach(((e,a)=>{o.push(r.hc(a,t,n).then((e=>{if(e){r.isPrimaryClient&&r.sharedClientState.updateQueryState(a.targetId,e.fromCache?"not-current":"current"),s.push(e);const t=J_.Vi(a.targetId,e);i.push(t)}})))})),await Promise.all(o),r.Zu.Go(s),await async function(e,t){const n=Ng(e);try{await n.persistence.runTransaction("notifyLocalViewChanges","readwrite",(e=>dm.forEach(t,(t=>dm.forEach(t.Pi,(r=>n.persistence.referenceDelegate.addReference(e,t.targetId,r))).next((()=>dm.forEach(t.vi,(r=>n.persistence.referenceDelegate.removeReference(e,t.targetId,r)))))))))}catch(e){if(!ym(e))throw e;Tg("LocalStore","Failed to update sequence numbers: "+e)}for(const e of t){const t=e.targetId;if(!e.fromCache){const e=n.$i.get(t),r=e.snapshotVersion,s=e.withLastLimboFreeSnapshotVersion(r);n.$i=n.$i.insert(t,s)}}}(r.localStore,i))}async function Qk(e,t){const n=Ng(e);if(!n.currentUser.isEqual(t)){Tg("SyncEngine","User change. New user:",t.toKey());const e=await eI(n.localStore,t);n.currentUser=t,(r=n).uc.forEach((e=>{e.forEach((e=>{e.reject(new Rg(Dg.CANCELLED,"'waitForPendingWrites' promise is rejected due to a user change."))}))})),r.uc.clear(),n.sharedClientState.handleUserChange(t,e.removedBatchIds,e.addedBatchIds),await Hk(n,e.Ki)}var r}function Jk(e,t){const n=Ng(e),r=n.ic.get(t);if(r&&r.Xu)return Jv().add(r.key);{let e=Jv();const r=n.ec.get(t);if(!r)return e;for(const t of r){const r=n.tc.get(t);e=e.unionWith(r.view.qu)}return e}}async function Yk(e,t){const n=Ng(e),r=await oI(n.localStore,t.query,!0),s=t.view.Ju(r);return n.isPrimaryClient&&Gk(n,t.targetId,s.zu),s}async function Xk(e,t){const n=Ng(e);return cI(n.localStore,t).then((e=>Hk(n,e)))}async function Zk(e,t,n,r){const s=Ng(e),i=await function(e,t){const n=Ng(e),r=Ng(n.mutationQueue);return n.persistence.runTransaction("Lookup mutation documents","readonly",(e=>r.yn(e,t).next((t=>t?n.localDocuments.getDocuments(e,t):dm.resolve(null)))))}(s.localStore,t);var o,a;null!==i?("pending"===n?await YI(s.remoteStore):"acknowledged"===n||"rejected"===n?(qk(s,t,r||null),jk(s,t),o=s.localStore,a=t,Ng(Ng(o).mutationQueue).In(a)):Ag(),await Hk(s,i)):Tg("SyncEngine","Cannot apply mutation batch with id: "+t)}async function eT(e,t,n){const r=Ng(e),s=[],i=[];for(const e of t){let t;const n=r.ec.get(e);if(n&&0!==n.length){t=await sI(r.localStore,Wy(n[0]));for(const e of n){const t=r.tc.get(e),n=await Yk(r,t);n.snapshot&&i.push(n.snapshot)}}else{const n=await aI(r.localStore,e);t=await sI(r.localStore,n),await Pk(r,tT(n),e,!1)}s.push(t)}return r.Zu.Go(i),s}function tT(e){return jy(e.path,e.collectionGroup,e.orderBy,e.filters,e.limit,"F",e.startAt,e.endAt)}function nT(e){const t=Ng(e);return Ng(Ng(t.localStore).persistence).Ri()}async function rT(e,t,n,r){const s=Ng(e);if(s.ac)return void Tg("SyncEngine","Ignoring unexpected query state notification.");const i=s.ec.get(t);if(i&&i.length>0)switch(n){case"current":case"not-current":{const e=await cI(s.localStore,Zy(i[0])),r=Zv.createSynthesizedRemoteEventForCurrentChange(t,"current"===n);await Hk(s,e,r);break}case"rejected":await iI(s.localStore,t,!0),$k(s,t,r);break;default:Ag()}}async function sT(e,t,n){const r=iT(e);if(r.ac){for(const e of t){if(r.ec.has(e)){Tg("SyncEngine","Adding an already active target "+e);continue}const t=await aI(r.localStore,e),n=await sI(r.localStore,t);await Pk(r,tT(t),n.targetId,!1),VI(r.remoteStore,n)}for(const e of n)r.ec.has(e)&&await iI(r.localStore,e,!1).then((()=>{UI(r.remoteStore,e),$k(r,e)})).catch(hm)}}function iT(e){const t=Ng(e);return t.remoteStore.remoteSyncer.applyRemoteEvent=Mk.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=Jk.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=Vk.bind(null,t),t.Zu.Go=wk.bind(null,t.eventManager),t.Zu.lc=bk.bind(null,t.eventManager),t}function oT(e){const t=Ng(e);return t.remoteStore.remoteSyncer.applySuccessfulWrite=Uk.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=Bk.bind(null,t),t}class aT{constructor(){this.synchronizeTabs=!1}async initialize(e){this.wt=AI(e.databaseInfo.databaseId),this.sharedClientState=this.dc(e),this.persistence=this._c(e),await this.persistence.start(),this.localStore=this.wc(e),this.gcScheduler=this.mc(e,this.localStore),this.indexBackfillerScheduler=this.gc(e,this.localStore)}mc(e,t){return null}gc(e,t){return null}wc(e){return Z_(this.persistence,new Y_,e.initialUser,this.wt)}_c(e){return new B_(q_.Ms,this.wt)}dc(e){return new bI}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class cT extends aT{constructor(e,t,n){super(),this.yc=e,this.cacheSizeBytes=t,this.forceOwnership=n,this.synchronizeTabs=!1}async initialize(e){await super.initialize(e),await this.yc.initialize(this,e),await oT(this.yc.syncEngine),await YI(this.yc.remoteStore),await this.persistence.ci((()=>(this.gcScheduler&&!this.gcScheduler.started&&this.gcScheduler.start(),this.indexBackfillerScheduler&&!this.indexBackfillerScheduler.started&&this.indexBackfillerScheduler.start(),Promise.resolve())))}wc(e){return Z_(this.persistence,new Y_,e.initialUser,this.wt)}mc(e,t){const n=this.persistence.referenceDelegate.garbageCollector;return new y_(n,e.asyncQueue,t)}gc(e,t){const n=new km(t,this.persistence);return new Im(e.asyncQueue,n)}_c(e){const t=Q_(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey),n=void 0!==this.cacheSizeBytes?n_.withCacheSize(this.cacheSizeBytes):n_.DEFAULT;return new K_(this.synchronizeTabs,t,e.clientId,n,e.asyncQueue,SI(),xI(),this.wt,this.sharedClientState,!!this.forceOwnership)}dc(e){return new bI}}class lT extends cT{constructor(e,t){super(e,t,!1),this.yc=e,this.cacheSizeBytes=t,this.synchronizeTabs=!0}async initialize(e){await super.initialize(e);const t=this.yc.syncEngine;this.sharedClientState instanceof wI&&(this.sharedClientState.syncEngine={kr:Zk.bind(null,t),Or:rT.bind(null,t),Mr:sT.bind(null,t),Ri:nT.bind(null,t),Nr:Xk.bind(null,t)},await this.sharedClientState.start()),await this.persistence.ci((async e=>{await async function(e,t){const n=Ng(e);if(iT(n),oT(n),!0===t&&!0!==n.ac){const e=n.sharedClientState.getAllActiveQueryTargets(),t=await eT(n,e.toArray());n.ac=!0,await ak(n.remoteStore,!0);for(const e of t)VI(n.remoteStore,e)}else if(!1===t&&!1!==n.ac){const e=[];let t=Promise.resolve();n.ec.forEach(((r,s)=>{n.sharedClientState.isLocalQueryTarget(s)?e.push(s):t=t.then((()=>($k(n,s),iI(n.localStore,s,!0)))),UI(n.remoteStore,s)})),await t,await eT(n,e),function(e){const t=Ng(e);t.ic.forEach(((e,n)=>{UI(t.remoteStore,n)})),t.rc.cs(),t.ic=new Map,t.sc=new Am(Zg.comparator)}(n),n.ac=!1,await ak(n.remoteStore,!1)}}(this.yc.syncEngine,e),this.gcScheduler&&(e&&!this.gcScheduler.started?this.gcScheduler.start():e||this.gcScheduler.stop()),this.indexBackfillerScheduler&&(e&&!this.indexBackfillerScheduler.started?this.indexBackfillerScheduler.start():e||this.indexBackfillerScheduler.stop())}))}dc(e){const t=SI();if(!wI.V(t))throw new Rg(Dg.UNIMPLEMENTED,"IndexedDB persistence is only available on platforms that support LocalStorage.");const n=Q_(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey);return new wI(t,e.asyncQueue,n,e.clientId,e.initialUser)}}class uT{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=e=>Fk(this.syncEngine,e,1),this.remoteStore.remoteSyncer.handleCredentialChange=Qk.bind(null,this.syncEngine),await ak(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new mk}createDatastore(e){const t=AI(e.databaseInfo.databaseId),n=(r=e.databaseInfo,new EI(r));var r,s,i;return s=e.authCredentials,i=e.appCheckCredentials,new OI(s,i,n,t)}createRemoteStore(e){return t=this.localStore,n=this.datastore,r=e.asyncQueue,s=e=>Fk(this.syncEngine,e,0),i=II.V()?new II:new _I,new LI(t,n,r,s,i);var t,n,r,s,i}createSyncEngine(e,t){return function(e,t,n,r,s,i,o){const a=new Rk(e,t,n,r,s,i);return o&&(a.ac=!0),a}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}terminate(){return async function(e){const t=Ng(e);Tg("RemoteStore","RemoteStore shutting down."),t.lu.add(5),await FI(t),t.du.shutdown(),t._u.set("Unknown")}(this.remoteStore)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hT(e,t=10240){let n=0;return{async read(){if(n<e.byteLength){const r={value:e.slice(n,n+t),done:!1};return n+=t,r}return{done:!0}},async cancel(){},releaseLock(){},closed:Promise.reject("unimplemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dT{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Ic(this.observer.next,e)}error(e){this.observer.error?this.Ic(this.observer.error,e):console.error("Uncaught Error in snapshot listener:",e)}Tc(){this.muted=!0}Ic(e,t){this.muted||setTimeout((()=>{this.muted||e(t)}),0)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fT{constructor(e,t){this.Ec=e,this.wt=t,this.metadata=new Og,this.buffer=new Uint8Array,this.Ac=new TextDecoder("utf-8"),this.Rc().then((e=>{e&&e.Cu()?this.metadata.resolve(e.payload.metadata):this.metadata.reject(new Error(`The first element of the bundle is not a metadata, it is\n             ${JSON.stringify(null==e?void 0:e.payload)}`))}),(e=>this.metadata.reject(e)))}close(){return this.Ec.cancel()}async getMetadata(){return this.metadata.promise}async fc(){return await this.getMetadata(),this.Rc()}async Rc(){const e=await this.bc();if(null===e)return null;const t=this.Ac.decode(e),n=Number(t);isNaN(n)&&this.Pc(`length string (${t}) is not valid number`);const r=await this.vc(n);return new kk(JSON.parse(r),e.length+n)}Vc(){return this.buffer.findIndex((e=>e==="{".charCodeAt(0)))}async bc(){for(;this.Vc()<0&&!await this.Sc(););if(0===this.buffer.length)return null;const e=this.Vc();e<0&&this.Pc("Reached the end of bundle when a length string is expected.");const t=this.buffer.slice(0,e);return this.buffer=this.buffer.slice(e),t}async vc(e){for(;this.buffer.length<e;)await this.Sc()&&this.Pc("Reached the end of bundle when more is expected.");const t=this.Ac.decode(this.buffer.slice(0,e));return this.buffer=this.buffer.slice(e),t}Pc(e){throw this.Ec.cancel(),new Error(`Invalid bundle format: ${e}`)}async Sc(){const e=await this.Ec.read();if(!e.done){const t=new Uint8Array(this.buffer.length+e.value.length);t.set(this.buffer),t.set(e.value,this.buffer.length),this.buffer=t}return e.done}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pT{constructor(e){this.datastore=e,this.readVersions=new Map,this.mutations=[],this.committed=!1,this.lastWriteError=null,this.writtenDocs=new Set}async lookup(e){if(this.ensureCommitNotCalled(),this.mutations.length>0)throw new Rg(Dg.INVALID_ARGUMENT,"Firestore transactions require all reads to be executed before all writes.");const t=await async function(e,t){const n=Ng(e),r=_w(n.wt)+"/documents",s={documents:t.map((e=>yw(n.wt,e)))},i=await n.ao("BatchGetDocuments",r,s,t.length),o=new Map;i.forEach((e=>{const t=function(e,t){return"found"in t?function(e,t){Cg(!!t.found),t.found.name,t.found.updateTime;const n=vw(e,t.found.name),r=pw(t.found.updateTime),s=new gy({mapValue:{fields:t.found.fields}});return yy.newFoundDocument(n,r,s)}(e,t):"missing"in t?function(e,t){Cg(!!t.missing),Cg(!!t.readTime);const n=vw(e,t.missing),r=pw(t.readTime);return yy.newNoDocument(n,r)}(e,t):Ag()}(n.wt,e);o.set(t.key.toString(),t)}));const a=[];return t.forEach((e=>{const t=o.get(e.toString());Cg(!!t),a.push(t)})),a}(this.datastore,e);return t.forEach((e=>this.recordVersion(e))),t}set(e,t){this.write(t.toMutation(e,this.precondition(e))),this.writtenDocs.add(e.toString())}update(e,t){try{this.write(t.toMutation(e,this.preconditionForUpdate(e)))}catch(e){this.lastWriteError=e}this.writtenDocs.add(e.toString())}delete(e){this.write(new Rv(e,this.precondition(e))),this.writtenDocs.add(e.toString())}async commit(){if(this.ensureCommitNotCalled(),this.lastWriteError)throw this.lastWriteError;const e=this.readVersions;this.mutations.forEach((t=>{e.delete(t.key.toString())})),e.forEach(((e,t)=>{const n=Zg.fromPath(t);this.mutations.push(new Ov(n,this.precondition(n)))})),await async function(e,t){const n=Ng(e),r=_w(n.wt)+"/documents",s={writes:t.map((e=>Ew(n.wt,e)))};await n.ro("Commit",r,s)}(this.datastore,this.mutations),this.committed=!0}recordVersion(e){let t;if(e.isFoundDocument())t=e.version;else{if(!e.isNoDocument())throw Ag();t=Hg.min()}const n=this.readVersions.get(e.key.toString());if(n){if(!t.isEqual(n))throw new Rg(Dg.ABORTED,"Document version changed between two reads.")}else this.readVersions.set(e.key.toString(),t)}precondition(e){const t=this.readVersions.get(e.toString());return!this.writtenDocs.has(e.toString())&&t?wv.updateTime(t):wv.none()}preconditionForUpdate(e){const t=this.readVersions.get(e.toString());if(!this.writtenDocs.has(e.toString())&&t){if(t.isEqual(Hg.min()))throw new Rg(Dg.INVALID_ARGUMENT,"Can't update a document that doesn't exist.");return wv.updateTime(t)}return wv.exists(!0)}write(e){this.ensureCommitNotCalled(),this.mutations.push(e)}ensureCommitNotCalled(){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gT{constructor(e,t,n,r,s){this.asyncQueue=e,this.datastore=t,this.options=n,this.updateFunction=r,this.deferred=s,this.Dc=n.maxAttempts,this.So=new CI(this.asyncQueue,"transaction_retry")}run(){this.Dc-=1,this.Cc()}Cc(){this.So.Io((async()=>{const e=new pT(this.datastore),t=this.xc(e);t&&t.then((t=>{this.asyncQueue.enqueueAndForget((()=>e.commit().then((()=>{this.deferred.resolve(t)})).catch((e=>{this.Nc(e)}))))})).catch((e=>{this.Nc(e)}))}))}xc(e){try{const t=this.updateFunction(e);return!Gm(t)&&t.catch&&t.then?t:(this.deferred.reject(Error("Transaction callback must return a Promise")),null)}catch(e){return this.deferred.reject(e),null}}Nc(e){this.Dc>0&&this.kc(e)?(this.Dc-=1,this.asyncQueue.enqueueAndForget((()=>(this.Cc(),Promise.resolve())))):this.deferred.reject(e)}kc(e){if("FirebaseError"===e.name){const t=e.code;return"aborted"===t||"failed-precondition"===t||!Fv(t)}return!1}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mT{constructor(e,t,n,r){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=n,this.databaseInfo=r,this.user=bg.UNAUTHENTICATED,this.clientId=$g.I(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(n,(async e=>{Tg("FirestoreClient","Received user=",e.uid),await this.authCredentialListener(e),this.user=e})),this.appCheckCredentials.start(n,(e=>(Tg("FirestoreClient","Received new app check token=",e),this.appCheckCredentialListener(e,this.user))))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new Rg(Dg.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Og;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const n=hk(t,"Failed to shutdown persistence");e.reject(n)}})),e.promise}}async function yT(e,t){e.asyncQueue.verifyOperationInProgress(),Tg("FirestoreClient","Initializing OfflineComponentProvider");const n=await e.getConfiguration();await t.initialize(n);let r=n.initialUser;e.setCredentialChangeListener((async e=>{r.isEqual(e)||(await eI(t.localStore,e),r=e)})),t.persistence.setDatabaseDeletedListener((()=>e.terminate())),e.offlineComponents=t}async function vT(e,t){e.asyncQueue.verifyOperationInProgress();const n=await wT(e);Tg("FirestoreClient","Initializing OnlineComponentProvider");const r=await e.getConfiguration();await t.initialize(n,r),e.setCredentialChangeListener((e=>ok(t.remoteStore,e))),e.setAppCheckTokenChangeListener(((e,n)=>ok(t.remoteStore,n))),e.onlineComponents=t}async function wT(e){return e.offlineComponents||(Tg("FirestoreClient","Using default OfflineComponentProvider"),await yT(e,new aT)),e.offlineComponents}async function bT(e){return e.onlineComponents||(Tg("FirestoreClient","Using default OnlineComponentProvider"),await vT(e,new uT)),e.onlineComponents}function _T(e){return wT(e).then((e=>e.persistence))}function IT(e){return wT(e).then((e=>e.localStore))}function kT(e){return bT(e).then((e=>e.remoteStore))}function TT(e){return bT(e).then((e=>e.syncEngine))}async function ET(e){const t=await bT(e),n=t.eventManager;return n.onListen=Ok.bind(null,t.syncEngine),n.onUnlisten=Lk.bind(null,t.syncEngine),n}function ST(e,t,n={}){const r=new Og;return e.asyncQueue.enqueueAndForget((async()=>function(e,t,n,r,s){const i=new dT({next:i=>{t.enqueueAndForget((()=>vk(e,o)));const a=i.docs.has(n);!a&&i.fromCache?s.reject(new Rg(Dg.UNAVAILABLE,"Failed to get document because the client is offline.")):a&&i.fromCache&&r&&"server"===r.source?s.reject(new Rg(Dg.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):s.resolve(i)},error:e=>s.reject(e)}),o=new Ik(qy(n.path),i,{includeMetadataChanges:!0,Du:!0});return yk(e,o)}(await ET(e),e.asyncQueue,t,n,r))),r.promise}function xT(e,t,n={}){const r=new Og;return e.asyncQueue.enqueueAndForget((async()=>function(e,t,n,r,s){const i=new dT({next:n=>{t.enqueueAndForget((()=>vk(e,o))),n.fromCache&&"server"===r.source?s.reject(new Rg(Dg.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):s.resolve(n)},error:e=>s.reject(e)}),o=new Ik(n,i,{includeMetadataChanges:!0,Du:!0});return yk(e,o)}(await ET(e),e.asyncQueue,t,n,r))),r.promise}function AT(e,t,n,r){const s=function(e,t){let n;return n="string"==typeof e?(new TextEncoder).encode(e):e,r=function(e,t){if(e instanceof Uint8Array)return hT(e,t);if(e instanceof ArrayBuffer)return hT(new Uint8Array(e),t);if(e instanceof ReadableStream)return e.getReader();throw new Error("Source of `toByteStreamReader` has to be a ArrayBuffer or ReadableStream")}(n),new fT(r,t);var r}(n,AI(t));e.asyncQueue.enqueueAndForget((async()=>{!function(e,t,n){const r=Ng(e);(async function(e,t,n){try{const s=await t.getMetadata();if(await function(e,t){const n=Ng(e),r=pw(t.createTime);return n.persistence.runTransaction("hasNewerBundle","readonly",(e=>n.Ds.getBundleMetadata(e,t.id))).then((e=>!!e&&e.createTime.compareTo(r)>=0))}(e.localStore,s))return await t.close(),n._completeWith({taskState:"Success",documentsLoaded:(r=s).totalDocuments,bytesLoaded:r.totalBytes,totalDocuments:r.totalDocuments,totalBytes:r.totalBytes}),Promise.resolve(new Set);n._updateProgress(Sk(s));const i=new Ek(s,e.localStore,t.wt);let o=await t.fc();for(;o;){const e=await i.Nu(o);e&&n._updateProgress(e),o=await t.fc()}const a=await i.complete();return await Hk(e,a.Mu,void 0),await function(e,t){const n=Ng(e);return n.persistence.runTransaction("Save bundle","readwrite",(e=>n.Ds.saveBundleMetadata(e,t)))}(e.localStore,s),n._completeWith(a.progress),Promise.resolve(a.Ou)}catch(r){return Sg("SyncEngine",`Loading bundle failed with ${r}`),n._failWith(r),Promise.resolve(new Set)}var r})(r,t,n).then((e=>{r.sharedClientState.notifyBundleLoaded(e)}))}(await TT(e),s,r)}))}const CT=new Map;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function NT(e,t,n){if(!n)throw new Rg(Dg.INVALID_ARGUMENT,`Function ${e}() cannot be called with an empty ${t}.`)}function DT(e,t,n,r){if(!0===t&&!0===r)throw new Rg(Dg.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)}function RT(e){if(!Zg.isDocumentKey(e))throw new Rg(Dg.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${e} has ${e.length}.`)}function OT(e){if(Zg.isDocumentKey(e))throw new Rg(Dg.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${e} has ${e.length}.`)}function PT(e){if(void 0===e)return"undefined";if(null===e)return"null";if("string"==typeof e)return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if("number"==typeof e||"boolean"==typeof e)return""+e;if("object"==typeof e){if(e instanceof Array)return"an array";{const n=(t=e).constructor?t.constructor.name:null;return n?`a custom ${n} object`:"an object"}}var t;return"function"==typeof e?"a function":Ag()}function LT(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new Rg(Dg.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=PT(e);throw new Rg(Dg.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}function MT(e,t){if(t<=0)throw new Rg(Dg.INVALID_ARGUMENT,`Function ${e}() requires a positive number, but it was: ${t}.`)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FT{constructor(e){var t;if(void 0===e.host){if(void 0!==e.ssl)throw new Rg(Dg.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=null===(t=e.ssl)||void 0===t||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,void 0===e.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==e.cacheSizeBytes&&e.cacheSizeBytes<1048576)throw new Rg(Dg.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,DT("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VT{constructor(e,t,n){this._authCredentials=t,this._appCheckCredentials=n,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new FT({}),this._settingsFrozen=!1,e instanceof zm?this._databaseId=e:(this._app=e,this._databaseId=function(e){if(!Object.prototype.hasOwnProperty.apply(e.options,["projectId"]))throw new Rg(Dg.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new zm(e.options.projectId)}(e))}get app(){if(!this._app)throw new Rg(Dg.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(e){if(this._settingsFrozen)throw new Rg(Dg.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new FT(e),void 0!==e.credentials&&(this._authCredentials=function(e){if(!e)return new Lg;switch(e.type){case"gapi":const t=e.client;return Cg(!("object"!=typeof t||null===t||!t.auth||!t.auth.getAuthHeaderValueForFirstParty)),new Ug(t,e.sessionIndex||"0",e.iamToken||null);case"provider":return e.client;default:throw new Rg(Dg.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const t=CT.get(e);t&&(Tg("ComponentProvider","Removing Datastore"),CT.delete(e),t.terminate())}(this),Promise.resolve()}}function UT(e,t,n,r={}){var s;const i=(e=LT(e,VT))._getSettings();if("firestore.googleapis.com"!==i.host&&i.host!==t&&Sg("Host has been set in both settings() and useEmulator(), emulator host will be used"),e._setSettings(Object.assign(Object.assign({},i),{host:`${t}:${n}`,ssl:!1})),r.mockUserToken){let t,n;if("string"==typeof r.mockUserToken)t=r.mockUserToken,n=bg.MOCK_USER;else{t=function(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n=t||"demo-project",r=e.iat||0,s=e.sub||e.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const i=Object.assign({iss:`https://securetoken.google.com/${n}`,aud:n,iat:r,exp:r+3600,auth_time:r,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},e);return[ri(JSON.stringify({alg:"none",type:"JWT"})),ri(JSON.stringify(i)),""].join(".")}(r.mockUserToken,null===(s=e._app)||void 0===s?void 0:s.options.projectId);const i=r.mockUserToken.sub||r.mockUserToken.user_id;if(!i)throw new Rg(Dg.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");n=new bg(i)}e._authCredentials=new Mg(new Pg(t,n))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BT{constructor(e,t,n){this.converter=t,this._key=n,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new qT(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new BT(this.firestore,e,this._key)}}class jT{constructor(e,t,n){this.converter=t,this._query=n,this.type="query",this.firestore=e}withConverter(e){return new jT(this.firestore,e,this._query)}}class qT extends jT{constructor(e,t,n){super(e,t,qy(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new BT(this.firestore,null,new Zg(e))}withConverter(e){return new qT(this.firestore,e,this._path)}}function $T(e,t,...n){if(e=Ei(e),NT("collection","path",t),e instanceof VT){const r=Jg.fromString(t,...n);return OT(r),new qT(e,null,r)}{if(!(e instanceof BT||e instanceof qT))throw new Rg(Dg.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=e._path.child(Jg.fromString(t,...n));return OT(r),new qT(e.firestore,null,r)}}function zT(e,t,...n){if(e=Ei(e),1===arguments.length&&(t=$g.I()),NT("doc","path",t),e instanceof VT){const r=Jg.fromString(t,...n);return RT(r),new BT(e,null,new Zg(r))}{if(!(e instanceof BT||e instanceof qT))throw new Rg(Dg.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=e._path.child(Jg.fromString(t,...n));return RT(r),new BT(e.firestore,e instanceof qT?e.converter:null,new Zg(r))}}function GT(e,t){return e=Ei(e),t=Ei(t),(e instanceof BT||e instanceof qT)&&(t instanceof BT||t instanceof qT)&&e.firestore===t.firestore&&e.path===t.path&&e.converter===t.converter}function KT(e,t){return e=Ei(e),t=Ei(t),e instanceof jT&&t instanceof jT&&e.firestore===t.firestore&&Qy(e._query,t._query)&&e.converter===t.converter
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class WT{constructor(){this.Oc=Promise.resolve(),this.Mc=[],this.Fc=!1,this.$c=[],this.Bc=null,this.Lc=!1,this.Uc=!1,this.qc=[],this.So=new CI(this,"async_queue_retry"),this.Kc=()=>{const e=xI();e&&Tg("AsyncQueue","Visibility state changed to "+e.visibilityState),this.So.Eo()};const e=xI();e&&"function"==typeof e.addEventListener&&e.addEventListener("visibilitychange",this.Kc)}get isShuttingDown(){return this.Fc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Gc(),this.Qc(e)}enterRestrictedMode(e){if(!this.Fc){this.Fc=!0,this.Uc=e||!1;const t=xI();t&&"function"==typeof t.removeEventListener&&t.removeEventListener("visibilitychange",this.Kc)}}enqueue(e){if(this.Gc(),this.Fc)return new Promise((()=>{}));const t=new Og;return this.Qc((()=>this.Fc&&this.Uc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Mc.push(e),this.jc())))}async jc(){if(0!==this.Mc.length){try{await this.Mc[0](),this.Mc.shift(),this.So.reset()}catch(e){if(!ym(e))throw e;Tg("AsyncQueue","Operation failed with retryable error: "+e)}this.Mc.length>0&&this.So.Io((()=>this.jc()))}}Qc(e){const t=this.Oc.then((()=>(this.Lc=!0,e().catch((e=>{this.Bc=e,this.Lc=!1;throw Eg("INTERNAL UNHANDLED ERROR: ",function(e){let t=e.message||"";return e.stack&&(t=e.stack.includes(e.message)?e.stack:e.message+"\n"+e.stack),t}(e)),e})).then((e=>(this.Lc=!1,e))))));return this.Oc=t,t}enqueueAfterDelay(e,t,n){this.Gc(),this.qc.indexOf(e)>-1&&(t=0);const r=uk.createAndSchedule(this,e,t,n,(e=>this.Wc(e)));return this.$c.push(r),r}Gc(){this.Bc&&Ag()}verifyOperationInProgress(){}async zc(){let e;do{e=this.Oc,await e}while(e!==this.Oc)}Hc(e){for(const t of this.$c)if(t.timerId===e)return!0;return!1}Jc(e){return this.zc().then((()=>{this.$c.sort(((e,t)=>e.targetTimeMs-t.targetTimeMs));for(const t of this.$c)if(t.skipDelay(),"all"!==e&&t.timerId===e)break;return this.zc()}))}Yc(e){this.qc.push(e)}Wc(e){const t=this.$c.indexOf(e);this.$c.splice(t,1)}}function HT(e){return function(e,t){if("object"!=typeof e||null===e)return!1;const n=e;for(const e of["next","error","complete"])if(e in n&&"function"==typeof n[e])return!0;return!1}(e)}class QT{constructor(){this._progressObserver={},this._taskCompletionResolver=new Og,this._lastProgress={taskState:"Running",totalBytes:0,totalDocuments:0,bytesLoaded:0,documentsLoaded:0}}onProgress(e,t,n){this._progressObserver={next:e,error:t,complete:n}}catch(e){return this._taskCompletionResolver.promise.catch(e)}then(e,t){return this._taskCompletionResolver.promise.then(e,t)}_completeWith(e){this._updateProgress(e),this._progressObserver.complete&&this._progressObserver.complete(),this._taskCompletionResolver.resolve(e)}_failWith(e){this._lastProgress.taskState="Error",this._progressObserver.next&&this._progressObserver.next(this._lastProgress),this._progressObserver.error&&this._progressObserver.error(e),this._taskCompletionResolver.reject(e)}_updateProgress(e){this._lastProgress=e,this._progressObserver.next&&this._progressObserver.next(e)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JT extends VT{constructor(e,t,n){super(e,t,n),this.type="firestore",this._queue=new WT,this._persistenceKey="name"in e?e.name:"[DEFAULT]"}_terminate(){return this._firestoreClient||XT(this),this._firestoreClient.terminate()}}function YT(e){return e._firestoreClient||XT(e),e._firestoreClient.verifyNotTerminated(),e._firestoreClient}function XT(e){var t;const n=e._freezeSettings(),r=(s=e._databaseId,i=(null===(t=e._app)||void 0===t?void 0:t.options.appId)||"",o=e._persistenceKey,new $m(s,i,o,(a=n).host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams));var s,i,o,a;e._firestoreClient=new mT(e._authCredentials,e._appCheckCredentials,e._queue,r)}function ZT(e,t,n){const r=new Og;return e.asyncQueue.enqueue((async()=>{try{await yT(e,n),await vT(e,t),r.resolve()}catch(e){const t=e;if(!("FirebaseError"===(s=t).name?s.code===Dg.FAILED_PRECONDITION||s.code===Dg.UNIMPLEMENTED:!("undefined"!=typeof DOMException&&s instanceof DOMException)||22===s.code||20===s.code||11===s.code))throw t;console.warn("Error enabling offline persistence. Falling back to persistence disabled: "+t),r.reject(t)}var s})).then((()=>r.promise))}function eE(e){return function(e){const t=new Og;return e.asyncQueue.enqueueAndForget((async()=>async function(e,t){const n=Ng(e);zI(n.remoteStore)||Tg("SyncEngine","The network is disabled. The task returned by 'awaitPendingWrites()' will not complete until the network is enabled.");try{const e=await function(e){const t=Ng(e);return t.persistence.runTransaction("Get highest unacknowledged batch id","readonly",(e=>t.mutationQueue.getHighestUnacknowledgedBatchId(e)))}(n.localStore);if(-1===e)return void t.resolve();const r=n.uc.get(e)||[];r.push(t),n.uc.set(e,r)}catch(e){const n=hk(e,"Initialization of waitForPendingWrites() operation failed");t.reject(n)}}(await TT(e),t))),t.promise}(YT(e=LT(e,JT)))}function tE(e){return function(e){return e.asyncQueue.enqueue((async()=>{const t=await _T(e),n=await kT(e);return t.setNetworkEnabled(!0),function(e){const t=Ng(e);return t.lu.delete(0),MI(t)}(n)}))}(YT(e=LT(e,JT)))}function nE(e){return function(e){return e.asyncQueue.enqueue((async()=>{const t=await _T(e),n=await kT(e);return t.setNetworkEnabled(!1),async function(e){const t=Ng(e);t.lu.add(0),await FI(t),t._u.set("Offline")}(n)}))}(YT(e=LT(e,JT)))}function rE(e,t){return function(e,t){return e.asyncQueue.enqueue((async()=>function(e,t){const n=Ng(e);return n.persistence.runTransaction("Get named query","readonly",(e=>n.Ds.getNamedQuery(e,t)))}(await IT(e),t)))}(YT(e=LT(e,JT)),t).then((t=>t?new jT(e,null,t.query):null))}function sE(e){if(e._initialized||e._terminated)throw new Rg(Dg.FAILED_PRECONDITION,"Firestore has already been started and persistence can no longer be enabled. You can only enable persistence before calling any other methods on a Firestore object.")}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iE{constructor(...e){for(let t=0;t<e.length;++t)if(0===e[t].length)throw new Rg(Dg.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Xg(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oE{constructor(e){this._byteString=e}static fromBase64String(e){try{return new oE(Lm.fromBase64String(e))}catch(e){throw new Rg(Dg.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(e){return new oE(Lm.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aE{constructor(e){this._methodName=e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cE{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new Rg(Dg.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new Rg(Dg.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return zg(this._lat,e._lat)||zg(this._long,e._long)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lE=/^__.*__$/;class uE{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return null!==this.fieldMask?new Av(e,this.data,this.fieldMask,t,this.fieldTransforms):new xv(e,this.data,t,this.fieldTransforms)}}class hE{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return new Av(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function dE(e){switch(e){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Ag()}}class fE{constructor(e,t,n,r,s,i){this.settings=e,this.databaseId=t,this.wt=n,this.ignoreUndefinedProperties=r,void 0===s&&this.Xc(),this.fieldTransforms=s||[],this.fieldMask=i||[]}get path(){return this.settings.path}get Zc(){return this.settings.Zc}ta(e){return new fE(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.wt,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ea(e){var t;const n=null===(t=this.path)||void 0===t?void 0:t.child(e),r=this.ta({path:n,na:!1});return r.sa(e),r}ia(e){var t;const n=null===(t=this.path)||void 0===t?void 0:t.child(e),r=this.ta({path:n,na:!1});return r.Xc(),r}ra(e){return this.ta({path:void 0,na:!0})}oa(e){return OE(e,this.settings.methodName,this.settings.ua||!1,this.path,this.settings.ca)}contains(e){return void 0!==this.fieldMask.find((t=>e.isPrefixOf(t)))||void 0!==this.fieldTransforms.find((t=>e.isPrefixOf(t.field)))}Xc(){if(this.path)for(let e=0;e<this.path.length;e++)this.sa(this.path.get(e))}sa(e){if(0===e.length)throw this.oa("Document fields must not be empty");if(dE(this.Zc)&&lE.test(e))throw this.oa('Document fields cannot begin and end with "__"')}}class pE{constructor(e,t,n){this.databaseId=e,this.ignoreUndefinedProperties=t,this.wt=n||AI(e)}aa(e,t,n,r=!1){return new fE({Zc:e,methodName:t,ca:n,path:Xg.emptyPath(),na:!1,ua:r},this.databaseId,this.wt,this.ignoreUndefinedProperties)}}function gE(e){const t=e._freezeSettings(),n=AI(e._databaseId);return new pE(e._databaseId,!!t.ignoreUndefinedProperties,n)}function mE(e,t,n,r,s,i={}){const o=e.aa(i.merge||i.mergeFields?2:0,t,n,s);CE("Data must be an object, but it was:",o,r);const a=xE(r,o);let c,l;if(i.merge)c=new Pm(o.fieldMask),l=o.fieldTransforms;else if(i.mergeFields){const e=[];for(const r of i.mergeFields){const s=NE(t,r,n);if(!o.contains(s))throw new Rg(Dg.INVALID_ARGUMENT,`Field '${s}' is specified in your field mask but missing from your input data.`);PE(e,s)||e.push(s)}c=new Pm(e),l=o.fieldTransforms.filter((e=>c.covers(e.field)))}else c=null,l=o.fieldTransforms;return new uE(new gy(a),c,l)}class yE extends aE{_toFieldTransform(e){if(2!==e.Zc)throw 1===e.Zc?e.oa(`${this._methodName}() can only appear at the top level of your update data`):e.oa(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof yE}}function vE(e,t,n){return new fE({Zc:3,ca:t.settings.ca,methodName:e._methodName,na:n},t.databaseId,t.wt,t.ignoreUndefinedProperties)}class wE extends aE{_toFieldTransform(e){return new yv(e.path,new lv)}isEqual(e){return e instanceof wE}}class bE extends aE{constructor(e,t){super(e),this.ha=t}_toFieldTransform(e){const t=vE(this,e,!0),n=this.ha.map((e=>SE(e,t))),r=new uv(n);return new yv(e.path,r)}isEqual(e){return this===e}}class _E extends aE{constructor(e,t){super(e),this.ha=t}_toFieldTransform(e){const t=vE(this,e,!0),n=this.ha.map((e=>SE(e,t))),r=new dv(n);return new yv(e.path,r)}isEqual(e){return this===e}}class IE extends aE{constructor(e,t){super(e),this.la=t}_toFieldTransform(e){const t=new pv(e.wt,sv(e.wt,this.la));return new yv(e.path,t)}isEqual(e){return this===e}}function kE(e,t,n,r){const s=e.aa(1,t,n);CE("Data must be an object, but it was:",s,r);const i=[],o=gy.empty();Sm(r,((e,r)=>{const a=RE(t,e,n);r=Ei(r);const c=s.ia(a);if(r instanceof yE)i.push(a);else{const e=SE(r,c);null!=e&&(i.push(a),o.set(a,e))}}));const a=new Pm(i);return new hE(o,a,s.fieldTransforms)}function TE(e,t,n,r,s,i){const o=e.aa(1,t,n),a=[NE(t,r,n)],c=[s];if(i.length%2!=0)throw new Rg(Dg.INVALID_ARGUMENT,`Function ${t}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let e=0;e<i.length;e+=2)a.push(NE(t,i[e])),c.push(i[e+1]);const l=[],u=gy.empty();for(let e=a.length-1;e>=0;--e)if(!PE(l,a[e])){const t=a[e];let n=c[e];n=Ei(n);const r=o.ia(t);if(n instanceof yE)l.push(t);else{const e=SE(n,r);null!=e&&(l.push(t),u.set(t,e))}}const h=new Pm(l);return new hE(u,h,o.fieldTransforms)}function EE(e,t,n,r=!1){return SE(n,e.aa(r?4:3,t))}function SE(e,t){if(AE(e=Ei(e)))return CE("Unsupported field value:",t,e),xE(e,t);if(e instanceof aE)return function(e,t){if(!dE(t.Zc))throw t.oa(`${e._methodName}() can only be used with update() and set()`);if(!t.path)throw t.oa(`${e._methodName}() is not currently supported inside arrays`);const n=e._toFieldTransform(t);n&&t.fieldTransforms.push(n)}(e,t),null;if(void 0===e&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),e instanceof Array){if(t.settings.na&&4!==t.Zc)throw t.oa("Nested arrays are not supported");return function(e,t){const n=[];let r=0;for(const s of e){let e=SE(s,t.ra(r));null==e&&(e={nullValue:"NULL_VALUE"}),n.push(e),r++}return{arrayValue:{values:n}}}(e,t)}return function(e,t){if(null===(e=Ei(e)))return{nullValue:"NULL_VALUE"};if("number"==typeof e)return sv(t.wt,e);if("boolean"==typeof e)return{booleanValue:e};if("string"==typeof e)return{stringValue:e};if(e instanceof Date){const n=Wg.fromDate(e);return{timestampValue:hw(t.wt,n)}}if(e instanceof Wg){const n=new Wg(e.seconds,1e3*Math.floor(e.nanoseconds/1e3));return{timestampValue:hw(t.wt,n)}}if(e instanceof cE)return{geoPointValue:{latitude:e.latitude,longitude:e.longitude}};if(e instanceof oE)return{bytesValue:dw(t.wt,e._byteString)};if(e instanceof BT){const n=t.databaseId,r=e.firestore._databaseId;if(!r.isEqual(n))throw t.oa(`Document reference is for database ${r.projectId}/${r.database} but should be for database ${n.projectId}/${n.database}`);return{referenceValue:gw(e.firestore._databaseId||t.databaseId,e._key.path)}}throw t.oa(`Unsupported field value: ${PT(e)}`)}(e,t)}function xE(e,t){const n={};return xm(e)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):Sm(e,((e,r)=>{const s=SE(r,t.ea(e));null!=s&&(n[e]=s)})),{mapValue:{fields:n}}}function AE(e){return!("object"!=typeof e||null===e||e instanceof Array||e instanceof Date||e instanceof Wg||e instanceof cE||e instanceof oE||e instanceof BT||e instanceof aE)}function CE(e,t,n){if(!AE(n)||("object"!=typeof(r=n)||null===r||Object.getPrototypeOf(r)!==Object.prototype&&null!==Object.getPrototypeOf(r))){const r=PT(n);throw"an object"===r?t.oa(e+" a custom object"):t.oa(e+" "+r)}var r}function NE(e,t,n){if((t=Ei(t))instanceof iE)return t._internalPath;if("string"==typeof t)return RE(e,t);throw OE("Field path arguments must be of type string or ",e,!1,void 0,n)}const DE=new RegExp("[~\\*/\\[\\]]");function RE(e,t,n){if(t.search(DE)>=0)throw OE(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,n);try{return new iE(...t.split("."))._internalPath}catch(r){throw OE(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,n)}}function OE(e,t,n,r,s){const i=r&&!r.isEmpty(),o=void 0!==s;let a=`Function ${t}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${r}`),o&&(c+=` in document ${s}`),c+=")"),new Rg(Dg.INVALID_ARGUMENT,a+e+c)}function PE(e,t){return e.some((e=>e.isEqual(t)))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LE{constructor(e,t,n,r,s){this._firestore=e,this._userDataWriter=t,this._key=n,this._document=r,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new BT(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){const e=new ME(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(FE("DocumentSnapshot.get",e));if(null!==t)return this._userDataWriter.convertValue(t)}}}class ME extends LE{data(){return super.data()}}function FE(e,t){return"string"==typeof t?RE(e,t):t instanceof iE?t._internalPath:t._delegate._internalPath}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VE{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class UE extends LE{constructor(e,t,n,r,s,i){super(e,t,n,r,i),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new BE(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const n=this._document.data.field(FE("DocumentSnapshot.get",e));if(null!==n)return this._userDataWriter.convertValue(n,t.serverTimestamps)}}}class BE extends UE{data(e={}){return super.data(e)}}class jE{constructor(e,t,n,r){this._firestore=e,this._userDataWriter=t,this._snapshot=r,this.metadata=new VE(r.hasPendingWrites,r.fromCache),this.query=n}get docs(){const e=[];return this.forEach((t=>e.push(t))),e}get size(){return this._snapshot.docs.size}get empty(){return 0===this.size}forEach(e,t){this._snapshot.docs.forEach((n=>{e.call(t,new BE(this._firestore,this._userDataWriter,n.key,n,new VE(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new Rg(Dg.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(e,t){if(e._snapshot.oldDocs.isEmpty()){let t=0;return e._snapshot.docChanges.map((n=>({type:"added",doc:new BE(e._firestore,e._userDataWriter,n.doc.key,n.doc,new VE(e._snapshot.mutatedKeys.has(n.doc.key),e._snapshot.fromCache),e.query.converter),oldIndex:-1,newIndex:t++})))}{let n=e._snapshot.oldDocs;return e._snapshot.docChanges.filter((e=>t||3!==e.type)).map((t=>{const r=new BE(e._firestore,e._userDataWriter,t.doc.key,t.doc,new VE(e._snapshot.mutatedKeys.has(t.doc.key),e._snapshot.fromCache),e.query.converter);let s=-1,i=-1;return 0!==t.type&&(s=n.indexOf(t.doc.key),n=n.delete(t.doc.key)),1!==t.type&&(n=n.add(t.doc),i=n.indexOf(t.doc.key)),{type:qE(t.type),doc:r,oldIndex:s,newIndex:i}}))}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function qE(e){switch(e){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Ag()}}function $E(e,t){return e instanceof UE&&t instanceof UE?e._firestore===t._firestore&&e._key.isEqual(t._key)&&(null===e._document?null===t._document:e._document.isEqual(t._document))&&e._converter===t._converter:e instanceof jE&&t instanceof jE&&e._firestore===t._firestore&&KT(e.query,t.query)&&e.metadata.isEqual(t.metadata)&&e._snapshot.isEqual(t._snapshot)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zE(e){if("L"===e.limitType&&0===e.explicitOrderBy.length)throw new Rg(Dg.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class GE{}function KE(e,...t){for(const n of t)e=n._apply(e);return e}class WE extends GE{constructor(e,t,n){super(),this.fa=e,this.da=t,this._a=n,this.type="where"}_apply(e){const t=gE(e.firestore),n=function(e,t,n,r,s,i,o){let a;if(s.isKeyField()){if("array-contains"===i||"array-contains-any"===i)throw new Rg(Dg.INVALID_ARGUMENT,`Invalid Query. You can't perform '${i}' queries on documentId().`);if("in"===i||"not-in"===i){eS(o,i);const t=[];for(const n of o)t.push(ZE(r,e,n));a={arrayValue:{values:t}}}else a=ZE(r,e,o)}else"in"!==i&&"not-in"!==i&&"array-contains-any"!==i||eS(o,i),a=EE(n,"where",o,"in"===i||"not-in"===i);const c=Sy.create(s,i,a);return function(e,t){if(t.ht()){const n=zy(e);if(null!==n&&!n.isEqual(t.field))throw new Rg(Dg.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${n.toString()}' and '${t.field.toString()}'`);const r=$y(e);null!==r&&tS(e,t.field,r)}const n=function(e,t){for(const n of e.filters)if(t.indexOf(n.op)>=0)return n.op;return null}(e,function(e){switch(e){case"!=":return["!=","not-in"];case"array-contains":return["array-contains","array-contains-any","not-in"];case"in":return["array-contains-any","in","not-in"];case"array-contains-any":return["array-contains","array-contains-any","in","not-in"];case"not-in":return["array-contains","array-contains-any","in","not-in","!="];default:return[]}}(t.op));if(null!==n)throw n===t.op?new Rg(Dg.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${t.op.toString()}' filter.`):new Rg(Dg.INVALID_ARGUMENT,`Invalid query. You cannot use '${t.op.toString()}' filters with '${n.toString()}' filters.`)}(e,c),c}(e._query,0,t,e.firestore._databaseId,this.fa,this.da,this._a);return new jT(e.firestore,e.converter,function(e,t){const n=e.filters.concat([t]);return new By(e.path,e.collectionGroup,e.explicitOrderBy.slice(),n,e.limit,e.limitType,e.startAt,e.endAt)}(e._query,n))}}class HE extends GE{constructor(e,t){super(),this.fa=e,this.wa=t,this.type="orderBy"}_apply(e){const t=function(e,t,n){if(null!==e.startAt)throw new Rg(Dg.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(null!==e.endAt)throw new Rg(Dg.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");const r=new My(t,n);return function(e,t){if(null===$y(e)){const n=zy(e);null!==n&&tS(e,n,t.field)}}(e,r),r}(e._query,this.fa,this.wa);return new jT(e.firestore,e.converter,function(e,t){const n=e.explicitOrderBy.concat([t]);return new By(e.path,e.collectionGroup,n,e.filters.slice(),e.limit,e.limitType,e.startAt,e.endAt)}(e._query,t))}}class QE extends GE{constructor(e,t,n){super(),this.type=e,this.ma=t,this.ga=n}_apply(e){return new jT(e.firestore,e.converter,Hy(e._query,this.ma,this.ga))}}class JE extends GE{constructor(e,t,n){super(),this.type=e,this.ya=t,this.pa=n}_apply(e){const t=XE(e,this.type,this.ya,this.pa);return new jT(e.firestore,e.converter,(n=e._query,r=t,new By(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),n.limit,n.limitType,r,n.endAt)));var n,r}}class YE extends GE{constructor(e,t,n){super(),this.type=e,this.ya=t,this.pa=n}_apply(e){const t=XE(e,this.type,this.ya,this.pa);return new jT(e.firestore,e.converter,(n=e._query,r=t,new By(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),n.limit,n.limitType,n.startAt,r)));var n,r}}function XE(e,t,n,r){if(n[0]=Ei(n[0]),n[0]instanceof LE)return function(e,t,n,r,s){if(!r)throw new Rg(Dg.NOT_FOUND,`Can't use a DocumentSnapshot that doesn't exist for ${n}().`);const i=[];for(const n of Ky(e))if(n.field.isKeyField())i.push(ry(t,r.key));else{const e=r.data.field(n.field);if(Bm(e))throw new Rg(Dg.INVALID_ARGUMENT,'Invalid query. You are trying to start or end a query using a document for which the field "'+n.field+'" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');if(null===e){const e=n.field.canonicalString();throw new Rg(Dg.INVALID_ARGUMENT,`Invalid query. You are trying to start or end a query using a document for which the field '${e}' (used as the orderBy) does not exist.`)}i.push(e)}return new Ly(i,s)}(e._query,e.firestore._databaseId,t,n[0]._document,r);{const s=gE(e.firestore);return function(e,t,n,r,s,i){const o=e.explicitOrderBy;if(s.length>o.length)throw new Rg(Dg.INVALID_ARGUMENT,`Too many arguments provided to ${r}(). The number of arguments must be less than or equal to the number of orderBy() clauses`);const a=[];for(let i=0;i<s.length;i++){const c=s[i];if(o[i].field.isKeyField()){if("string"!=typeof c)throw new Rg(Dg.INVALID_ARGUMENT,`Invalid query. Expected a string for document ID in ${r}(), but got a ${typeof c}`);if(!Gy(e)&&-1!==c.indexOf("/"))throw new Rg(Dg.INVALID_ARGUMENT,`Invalid query. When querying a collection and ordering by documentId(), the value passed to ${r}() must be a plain document ID, but '${c}' contains a slash.`);const n=e.path.child(Jg.fromString(c));if(!Zg.isDocumentKey(n))throw new Rg(Dg.INVALID_ARGUMENT,`Invalid query. When querying a collection group and ordering by documentId(), the value passed to ${r}() must result in a valid document path, but '${n}' is not because it contains an odd number of segments.`);const s=new Zg(n);a.push(ry(t,s))}else{const e=EE(n,r,c);a.push(e)}}return new Ly(a,i)}(e._query,e.firestore._databaseId,s,t,n,r)}}function ZE(e,t,n){if("string"==typeof(n=Ei(n))){if(""===n)throw new Rg(Dg.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Gy(t)&&-1!==n.indexOf("/"))throw new Rg(Dg.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=t.path.child(Jg.fromString(n));if(!Zg.isDocumentKey(r))throw new Rg(Dg.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return ry(e,new Zg(r))}if(n instanceof BT)return ry(e,n._key);throw new Rg(Dg.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${PT(n)}.`)}function eS(e,t){if(!Array.isArray(e)||0===e.length)throw new Rg(Dg.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${t.toString()}' filters.`);if(e.length>10)throw new Rg(Dg.INVALID_ARGUMENT,`Invalid Query. '${t.toString()}' filters support a maximum of 10 elements in the value array.`)}function tS(e,t,n){if(!n.isEqual(t))throw new Rg(Dg.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${t.toString()}' and so you must also use '${t.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nS={maxAttempts:5};
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rS{convertValue(e,t="none"){switch(Jm(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Vm(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Um(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 10:return this.convertObject(e.mapValue,t);default:throw Ag()}}convertObject(e,t){const n={};return Sm(e.fields,((e,r)=>{n[e]=this.convertValue(r,t)})),n}convertGeoPoint(e){return new cE(Vm(e.latitude),Vm(e.longitude))}convertArray(e,t){return(e.values||[]).map((e=>this.convertValue(e,t)))}convertServerTimestamp(e,t){switch(t){case"previous":const n=jm(e);return null==n?null:this.convertValue(n,t);case"estimate":return this.convertTimestamp(qm(e));default:return null}}convertTimestamp(e){const t=Fm(e);return new Wg(t.seconds,t.nanos)}convertDocumentKey(e,t){const n=Jg.fromString(e);Cg(Vw(n));const r=new zm(n.get(1),n.get(3)),s=new Zg(n.popFirst(5));return r.isEqual(t)||Eg(`Document ${s} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),s}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sS(e,t,n){let r;return r=e?n&&(n.merge||n.mergeFields)?e.toFirestore(t,n):e.toFirestore(t):t,r}class iS extends rS{constructor(e){super(),this.firestore=e}convertBytes(e){return new oE(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new BT(this.firestore,null,t)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oS{constructor(e,t){this._firestore=e,this._commitHandler=t,this._mutations=[],this._committed=!1,this._dataReader=gE(e)}set(e,t,n){this._verifyNotCommitted();const r=aS(e,this._firestore),s=sS(r.converter,t,n),i=mE(this._dataReader,"WriteBatch.set",r._key,s,null!==r.converter,n);return this._mutations.push(i.toMutation(r._key,wv.none())),this}update(e,t,n,...r){this._verifyNotCommitted();const s=aS(e,this._firestore);let i;return i="string"==typeof(t=Ei(t))||t instanceof iE?TE(this._dataReader,"WriteBatch.update",s._key,t,n,r):kE(this._dataReader,"WriteBatch.update",s._key,t),this._mutations.push(i.toMutation(s._key,wv.exists(!0))),this}delete(e){this._verifyNotCommitted();const t=aS(e,this._firestore);return this._mutations=this._mutations.concat(new Rv(t._key,wv.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new Rg(Dg.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function aS(e,t){if((e=Ei(e)).firestore!==t)throw new Rg(Dg.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cS extends rS{constructor(e){super(),this.firestore=e}convertBytes(e){return new oE(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new BT(this.firestore,null,t)}}function lS(e){e=LT(e,BT);const t=LT(e.firestore,JT),n=YT(t),r=new cS(t);return function(e,t){const n=new Og;return e.asyncQueue.enqueueAndForget((async()=>async function(e,t,n){try{const r=await function(e,t){const n=Ng(e);return n.persistence.runTransaction("read document","readonly",(e=>n.localDocuments.getDocument(e,t)))}(e,t);r.isFoundDocument()?n.resolve(r):r.isNoDocument()?n.resolve(null):n.reject(new Rg(Dg.UNAVAILABLE,"Failed to get document from cache. (However, this document may exist on the server. Run again without setting 'source' in the GetOptions to attempt to retrieve the document from the server.)"))}catch(e){const r=hk(e,`Failed to get document '${t} from cache`);n.reject(r)}}(await IT(e),t,n))),n.promise}(n,e._key).then((n=>new UE(t,r,e._key,n,new VE(null!==n&&n.hasLocalMutations,!0),e.converter)))}function uS(e){e=LT(e,jT);const t=LT(e.firestore,JT),n=YT(t),r=new cS(t);return function(e,t){const n=new Og;return e.asyncQueue.enqueueAndForget((async()=>async function(e,t,n){try{const r=await oI(e,t,!0),s=new Ck(t,r.ji),i=s.Ku(r.documents),o=s.applyChanges(i,!1);n.resolve(o.snapshot)}catch(e){const r=hk(e,`Failed to execute query '${t} against cache`);n.reject(r)}}(await IT(e),t,n))),n.promise}(n,e._query).then((n=>new jE(t,r,e,n)))}function hS(e,t,n){e=LT(e,BT);const r=LT(e.firestore,JT),s=sS(e.converter,t,n);return gS(r,[mE(gE(r),"setDoc",e._key,s,null!==e.converter,n).toMutation(e._key,wv.none())])}function dS(e,t,n,...r){e=LT(e,BT);const s=LT(e.firestore,JT),i=gE(s);let o;return o="string"==typeof(t=Ei(t))||t instanceof iE?TE(i,"updateDoc",e._key,t,n,r):kE(i,"updateDoc",e._key,t),gS(s,[o.toMutation(e._key,wv.exists(!0))])}function fS(e,...t){var n,r,s;e=Ei(e);let i={includeMetadataChanges:!1},o=0;"object"!=typeof t[o]||HT(t[o])||(i=t[o],o++);const a={includeMetadataChanges:i.includeMetadataChanges};if(HT(t[o])){const e=t[o];t[o]=null===(n=e.next)||void 0===n?void 0:n.bind(e),t[o+1]=null===(r=e.error)||void 0===r?void 0:r.bind(e),t[o+2]=null===(s=e.complete)||void 0===s?void 0:s.bind(e)}let c,l,u;if(e instanceof BT)l=LT(e.firestore,JT),u=qy(e._key.path),c={next:n=>{t[o]&&t[o](mS(l,e,n))},error:t[o+1],complete:t[o+2]};else{const n=LT(e,jT);l=LT(n.firestore,JT),u=n._query;const r=new cS(l);c={next:e=>{t[o]&&t[o](new jE(l,r,n,e))},error:t[o+1],complete:t[o+2]},zE(e._query)}return function(e,t,n,r){const s=new dT(r),i=new Ik(t,s,n);return e.asyncQueue.enqueueAndForget((async()=>yk(await ET(e),i))),()=>{s.Tc(),e.asyncQueue.enqueueAndForget((async()=>vk(await ET(e),i)))}}(YT(l),u,a,c)}function pS(e,t){return function(e,t){const n=new dT(t);return e.asyncQueue.enqueueAndForget((async()=>{return t=await ET(e),r=n,Ng(t).Tu.add(r),void r.next();var t,r})),()=>{n.Tc(),e.asyncQueue.enqueueAndForget((async()=>{return t=await ET(e),r=n,void Ng(t).Tu.delete(r);var t,r}))}}(YT(e=LT(e,JT)),HT(t)?t:{next:t})}function gS(e,t){return function(e,t){const n=new Og;return e.asyncQueue.enqueueAndForget((async()=>async function(e,t,n){const r=oT(e);try{const e=await function(e,t){const n=Ng(e),r=Wg.now(),s=t.reduce(((e,t)=>e.add(t.key)),Jv());let i,o;return n.persistence.runTransaction("Locally write mutations","readwrite",(e=>{let a=jv(),c=Jv();return n.Ui.getEntries(e,s).next((e=>{a=e,a.forEach(((e,t)=>{t.isValidDocument()||(c=c.add(e))}))})).next((()=>n.localDocuments.getOverlayedDocuments(e,a))).next((s=>{i=s;const o=[];for(const e of t){const t=Ev(e,i.get(e.key).overlayedDocument);null!=t&&o.push(new Av(e.key,t,my(t.value.mapValue),wv.exists(!0)))}return n.mutationQueue.addMutationBatch(e,r,o,t)})).next((t=>{o=t;const r=t.applyToLocalDocumentSet(i,c);return n.documentOverlayCache.saveOverlays(e,t.batchId,r)}))})).then((()=>({batchId:o.batchId,changes:zv(i)})))}(r.localStore,t);r.sharedClientState.addPendingMutation(e.batchId),function(e,t,n){let r=e.oc[e.currentUser.toKey()];r||(r=new Am(zg)),r=r.insert(t,n),e.oc[e.currentUser.toKey()]=r}(r,e.batchId,n),await Hk(r,e.changes),await YI(r.remoteStore)}catch(e){const t=hk(e,"Failed to persist write");n.reject(t)}}(await TT(e),t,n))),n.promise}(YT(e),t)}function mS(e,t,n){const r=n.docs.get(t._key),s=new cS(e);return new UE(e,s,t._key,r,new VE(n.hasPendingWrites,n.fromCache),t.converter)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yS extends class{constructor(e,t){this._firestore=e,this._transaction=t,this._dataReader=gE(e)}get(e){const t=aS(e,this._firestore),n=new iS(this._firestore);return this._transaction.lookup([t._key]).then((e=>{if(!e||1!==e.length)return Ag();const r=e[0];if(r.isFoundDocument())return new LE(this._firestore,n,r.key,r,t.converter);if(r.isNoDocument())return new LE(this._firestore,n,t._key,null,t.converter);throw Ag()}))}set(e,t,n){const r=aS(e,this._firestore),s=sS(r.converter,t,n),i=mE(this._dataReader,"Transaction.set",r._key,s,null!==r.converter,n);return this._transaction.set(r._key,i),this}update(e,t,n,...r){const s=aS(e,this._firestore);let i;return i="string"==typeof(t=Ei(t))||t instanceof iE?TE(this._dataReader,"Transaction.update",s._key,t,n,r):kE(this._dataReader,"Transaction.update",s._key,t),this._transaction.update(s._key,i),this}delete(e){const t=aS(e,this._firestore);return this._transaction.delete(t._key),this}}{constructor(e,t){super(e,t),this._firestore=e}get(e){const t=aS(e,this._firestore),n=new cS(this._firestore);return super.get(e).then((e=>new UE(this._firestore,n,t._key,e._document,new VE(!1,!1),t.converter)))}}function vS(e,t,n){e=LT(e,JT);const r=Object.assign(Object.assign({},nS),n);return function(e){if(e.maxAttempts<1)throw new Rg(Dg.INVALID_ARGUMENT,"Max attempts must be at least 1")}(r),function(e,t,n){const r=new Og;return e.asyncQueue.enqueueAndForget((async()=>{const s=await(i=e,bT(i).then((e=>e.datastore)));var i;new gT(e.asyncQueue,s,n,t,r).run()})),r.promise}(YT(e),(n=>t(new yS(e,n))),r)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */!function(e,t=!0){_g="9.8.4",ao(new Si("firestore",((e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=new JT(r,new Fg(e.getProvider("auth-internal")),new jg(e.getProvider("app-check-internal")));return n=Object.assign({useFetchStreams:t},n),s._setSettings(n),s}),"PUBLIC")),po(wg,"3.4.11",e),po(wg,"3.4.11","esm2017")}();
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function wS(e,t){if(void 0===t)return{merge:!1};if(void 0!==t.mergeFields&&void 0!==t.merge)throw new Rg("invalid-argument",`Invalid options passed to function ${e}(): You cannot specify both "merge" and "mergeFields".`);return t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bS(){if("undefined"==typeof Uint8Array)throw new Rg("unimplemented","Uint8Arrays are not available in this environment.")}function _S(){if("undefined"==typeof atob)throw new Rg("unimplemented","Blobs are unavailable in Firestore in this environment.")}class IS{constructor(e){this._delegate=e}static fromBase64String(e){return _S(),new IS(oE.fromBase64String(e))}static fromUint8Array(e){return bS(),new IS(oE.fromUint8Array(e))}toBase64(){return _S(),this._delegate.toBase64()}toUint8Array(){return bS(),this._delegate.toUint8Array()}isEqual(e){return this._delegate.isEqual(e._delegate)}toString(){return"Blob(base64: "+this.toBase64()+")"}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kS(e){return function(e,t){if("object"!=typeof e||null===e)return!1;const n=e;for(const e of t)if(e in n&&"function"==typeof n[e])return!0;return!1}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e,["next","error","complete"])}class TS{enableIndexedDbPersistence(e,t){return function(e,t){sE(e=LT(e,JT));const n=YT(e),r=e._freezeSettings(),s=new uT;return ZT(n,s,new cT(s,r.cacheSizeBytes,null==t?void 0:t.forceOwnership))}(e._delegate,{forceOwnership:t})}enableMultiTabIndexedDbPersistence(e){return function(e){sE(e=LT(e,JT));const t=YT(e),n=e._freezeSettings(),r=new uT;return ZT(t,r,new lT(r,n.cacheSizeBytes))}(e._delegate)}clearIndexedDbPersistence(e){return function(e){if(e._initialized&&!e._terminated)throw new Rg(Dg.FAILED_PRECONDITION,"Persistence can only be cleared before a Firestore instance is initialized or after it is terminated.");const t=new Og;return e._queue.enqueueAndForgetEvenWhileRestricted((async()=>{try{await async function(e){if(!pm.V())return Promise.resolve();const t=e+"main";await pm.delete(t)}(Q_(e._databaseId,e._persistenceKey)),t.resolve()}catch(e){t.reject(e)}})),t.promise}(e._delegate)}}class ES{constructor(e,t,n){this._delegate=t,this._persistenceProvider=n,this.INTERNAL={delete:()=>this.terminate()},e instanceof zm||(this._appCompat=e)}get _databaseId(){return this._delegate._databaseId}settings(e){const t=this._delegate._getSettings();e.merge||t.host===e.host||Sg("You are overriding the original host. If you did not intend to override your settings, use {merge: true}."),e.merge&&delete(e=Object.assign(Object.assign({},t),e)).merge,this._delegate._setSettings(e)}useEmulator(e,t,n={}){UT(this._delegate,e,t,n)}enableNetwork(){return tE(this._delegate)}disableNetwork(){return nE(this._delegate)}enablePersistence(e){let t=!1,n=!1;return e&&(t=!!e.synchronizeTabs,n=!!e.experimentalForceOwningTab,DT("synchronizeTabs",t,"experimentalForceOwningTab",n)),t?this._persistenceProvider.enableMultiTabIndexedDbPersistence(this):this._persistenceProvider.enableIndexedDbPersistence(this,n)}clearPersistence(){return this._persistenceProvider.clearIndexedDbPersistence(this)}terminate(){return this._appCompat&&(this._appCompat._removeServiceInstance("firestore-compat"),this._appCompat._removeServiceInstance("firestore")),this._delegate._delete()}waitForPendingWrites(){return eE(this._delegate)}onSnapshotsInSync(e){return pS(this._delegate,e)}get app(){if(!this._appCompat)throw new Rg("failed-precondition","Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._appCompat}collection(e){try{return new US(this,$T(this._delegate,e))}catch(e){throw DS(e,"collection()","Firestore.collection()")}}doc(e){try{return new NS(this,zT(this._delegate,e))}catch(e){throw DS(e,"doc()","Firestore.doc()")}}collectionGroup(e){try{return new MS(this,function(e,t){if(e=LT(e,VT),NT("collectionGroup","collection id",t),t.indexOf("/")>=0)throw new Rg(Dg.INVALID_ARGUMENT,`Invalid collection ID '${t}' passed to function collectionGroup(). Collection IDs must not contain '/'.`);return new jT(e,null,(n=t,new By(Jg.emptyPath(),n)));var n}(this._delegate,e))}catch(e){throw DS(e,"collectionGroup()","Firestore.collectionGroup()")}}runTransaction(e){return vS(this._delegate,(t=>e(new xS(this,t))))}batch(){return YT(this._delegate),new AS(new oS(this._delegate,(e=>gS(this._delegate,e))))}loadBundle(e){return function(e,t){const n=YT(e=LT(e,JT)),r=new QT;return AT(n,e._databaseId,t,r),r}(this._delegate,e)}namedQuery(e){return rE(this._delegate,e).then((e=>e?new MS(this,e):null))}}class SS extends rS{constructor(e){super(),this.firestore=e}convertBytes(e){return new IS(new oE(e))}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return NS.forKey(t,this.firestore,null)}}class xS{constructor(e,t){this._firestore=e,this._delegate=t,this._userDataWriter=new SS(e)}get(e){const t=BS(e);return this._delegate.get(t).then((e=>new PS(this._firestore,new UE(this._firestore._delegate,this._userDataWriter,e._key,e._document,e.metadata,t.converter))))}set(e,t,n){const r=BS(e);return n?(wS("Transaction.set",n),this._delegate.set(r,t,n)):this._delegate.set(r,t),this}update(e,t,n,...r){const s=BS(e);return 2===arguments.length?this._delegate.update(s,t):this._delegate.update(s,t,n,...r),this}delete(e){const t=BS(e);return this._delegate.delete(t),this}}class AS{constructor(e){this._delegate=e}set(e,t,n){const r=BS(e);return n?(wS("WriteBatch.set",n),this._delegate.set(r,t,n)):this._delegate.set(r,t),this}update(e,t,n,...r){const s=BS(e);return 2===arguments.length?this._delegate.update(s,t):this._delegate.update(s,t,n,...r),this}delete(e){const t=BS(e);return this._delegate.delete(t),this}commit(){return this._delegate.commit()}}class CS{constructor(e,t,n){this._firestore=e,this._userDataWriter=t,this._delegate=n}fromFirestore(e,t){const n=new BE(this._firestore._delegate,this._userDataWriter,e._key,e._document,e.metadata,null);return this._delegate.fromFirestore(new LS(this._firestore,n),null!=t?t:{})}toFirestore(e,t){return t?this._delegate.toFirestore(e,t):this._delegate.toFirestore(e)}static getInstance(e,t){const n=CS.INSTANCES;let r=n.get(e);r||(r=new WeakMap,n.set(e,r));let s=r.get(t);return s||(s=new CS(e,new SS(e),t),r.set(t,s)),s}}CS.INSTANCES=new WeakMap;class NS{constructor(e,t){this.firestore=e,this._delegate=t,this._userDataWriter=new SS(e)}static forPath(e,t,n){if(e.length%2!=0)throw new Rg("invalid-argument",`Invalid document reference. Document references must have an even number of segments, but ${e.canonicalString()} has ${e.length}`);return new NS(t,new BT(t._delegate,n,new Zg(e)))}static forKey(e,t,n){return new NS(t,new BT(t._delegate,n,e))}get id(){return this._delegate.id}get parent(){return new US(this.firestore,this._delegate.parent)}get path(){return this._delegate.path}collection(e){try{return new US(this.firestore,$T(this._delegate,e))}catch(e){throw DS(e,"collection()","DocumentReference.collection()")}}isEqual(e){return(e=Ei(e))instanceof BT&&GT(this._delegate,e)}set(e,t){t=wS("DocumentReference.set",t);try{return t?hS(this._delegate,e,t):hS(this._delegate,e)}catch(e){throw DS(e,"setDoc()","DocumentReference.set()")}}update(e,t,...n){try{return 1===arguments.length?dS(this._delegate,e):dS(this._delegate,e,t,...n)}catch(e){throw DS(e,"updateDoc()","DocumentReference.update()")}}delete(){return gS(LT((e=this._delegate).firestore,JT),[new Rv(e._key,wv.none())]);var e}onSnapshot(...e){const t=RS(e),n=OS(e,(e=>new PS(this.firestore,new UE(this.firestore._delegate,this._userDataWriter,e._key,e._document,e.metadata,this._delegate.converter))));return fS(this._delegate,t,n)}get(e){let t;return t="cache"===(null==e?void 0:e.source)?lS(this._delegate):"server"===(null==e?void 0:e.source)?function(e){e=LT(e,BT);const t=LT(e.firestore,JT);return ST(YT(t),e._key,{source:"server"}).then((n=>mS(t,e,n)))}(this._delegate):function(e){e=LT(e,BT);const t=LT(e.firestore,JT);return ST(YT(t),e._key).then((n=>mS(t,e,n)))}(this._delegate),t.then((e=>new PS(this.firestore,new UE(this.firestore._delegate,this._userDataWriter,e._key,e._document,e.metadata,this._delegate.converter))))}withConverter(e){return new NS(this.firestore,e?this._delegate.withConverter(CS.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}function DS(e,t,n){return e.message=e.message.replace(t,n),e}function RS(e){for(const t of e)if("object"==typeof t&&!kS(t))return t;return{}}function OS(e,t){var n,r;let s;return s=kS(e[0])?e[0]:kS(e[1])?e[1]:"function"==typeof e[0]?{next:e[0],error:e[1],complete:e[2]}:{next:e[1],error:e[2],complete:e[3]},{next:e=>{s.next&&s.next(t(e))},error:null===(n=s.error)||void 0===n?void 0:n.bind(s),complete:null===(r=s.complete)||void 0===r?void 0:r.bind(s)}}class PS{constructor(e,t){this._firestore=e,this._delegate=t}get ref(){return new NS(this._firestore,this._delegate.ref)}get id(){return this._delegate.id}get metadata(){return this._delegate.metadata}get exists(){return this._delegate.exists()}data(e){return this._delegate.data(e)}get(e,t){return this._delegate.get(e,t)}isEqual(e){return $E(this._delegate,e._delegate)}}class LS extends PS{data(e){const t=this._delegate.data(e);return void 0!==t||Ag(),t}}class MS{constructor(e,t){this.firestore=e,this._delegate=t,this._userDataWriter=new SS(e)}where(e,t,n){try{return new MS(this.firestore,KE(this._delegate,function(e,t,n){const r=t,s=FE("where",e);return new WE(s,r,n)}(e,t,n)))}catch(e){throw DS(e,/(orderBy|where)\(\)/,"Query.$1()")}}orderBy(e,t){try{return new MS(this.firestore,KE(this._delegate,function(e,t="asc"){const n=t,r=FE("orderBy",e);return new HE(r,n)}(e,t)))}catch(e){throw DS(e,/(orderBy|where)\(\)/,"Query.$1()")}}limit(e){try{return new MS(this.firestore,KE(this._delegate,(MT("limit",t=e),new QE("limit",t,"F"))))}catch(e){throw DS(e,"limit()","Query.limit()")}var t}limitToLast(e){try{return new MS(this.firestore,KE(this._delegate,(MT("limitToLast",t=e),new QE("limitToLast",t,"L"))))}catch(e){throw DS(e,"limitToLast()","Query.limitToLast()")}var t}startAt(...e){try{return new MS(this.firestore,KE(this._delegate,function(...e){return new JE("startAt",e,!0)}(...e)))}catch(e){throw DS(e,"startAt()","Query.startAt()")}}startAfter(...e){try{return new MS(this.firestore,KE(this._delegate,function(...e){return new JE("startAfter",e,!1)}(...e)))}catch(e){throw DS(e,"startAfter()","Query.startAfter()")}}endBefore(...e){try{return new MS(this.firestore,KE(this._delegate,function(...e){return new YE("endBefore",e,!1)}(...e)))}catch(e){throw DS(e,"endBefore()","Query.endBefore()")}}endAt(...e){try{return new MS(this.firestore,KE(this._delegate,function(...e){return new YE("endAt",e,!0)}(...e)))}catch(e){throw DS(e,"endAt()","Query.endAt()")}}isEqual(e){return KT(this._delegate,e._delegate)}get(e){let t;return t="cache"===(null==e?void 0:e.source)?uS(this._delegate):"server"===(null==e?void 0:e.source)?function(e){e=LT(e,jT);const t=LT(e.firestore,JT),n=YT(t),r=new cS(t);return xT(n,e._query,{source:"server"}).then((n=>new jE(t,r,e,n)))}(this._delegate):function(e){e=LT(e,jT);const t=LT(e.firestore,JT),n=YT(t),r=new cS(t);return zE(e._query),xT(n,e._query).then((n=>new jE(t,r,e,n)))}(this._delegate),t.then((e=>new VS(this.firestore,new jE(this.firestore._delegate,this._userDataWriter,this._delegate,e._snapshot))))}onSnapshot(...e){const t=RS(e),n=OS(e,(e=>new VS(this.firestore,new jE(this.firestore._delegate,this._userDataWriter,this._delegate,e._snapshot))));return fS(this._delegate,t,n)}withConverter(e){return new MS(this.firestore,e?this._delegate.withConverter(CS.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}class FS{constructor(e,t){this._firestore=e,this._delegate=t}get type(){return this._delegate.type}get doc(){return new LS(this._firestore,this._delegate.doc)}get oldIndex(){return this._delegate.oldIndex}get newIndex(){return this._delegate.newIndex}}class VS{constructor(e,t){this._firestore=e,this._delegate=t}get query(){return new MS(this._firestore,this._delegate.query)}get metadata(){return this._delegate.metadata}get size(){return this._delegate.size}get empty(){return this._delegate.empty}get docs(){return this._delegate.docs.map((e=>new LS(this._firestore,e)))}docChanges(e){return this._delegate.docChanges(e).map((e=>new FS(this._firestore,e)))}forEach(e,t){this._delegate.forEach((n=>{e.call(t,new LS(this._firestore,n))}))}isEqual(e){return $E(this._delegate,e._delegate)}}class US extends MS{constructor(e,t){super(e,t),this.firestore=e,this._delegate=t}get id(){return this._delegate.id}get path(){return this._delegate.path}get parent(){const e=this._delegate.parent;return e?new NS(this.firestore,e):null}doc(e){try{return new NS(this.firestore,void 0===e?zT(this._delegate):zT(this._delegate,e))}catch(e){throw DS(e,"doc()","CollectionReference.doc()")}}add(e){return function(e,t){const n=LT(e.firestore,JT),r=zT(e),s=sS(e.converter,t);return gS(n,[mE(gE(e.firestore),"addDoc",r._key,s,null!==e.converter,{}).toMutation(r._key,wv.exists(!1))]).then((()=>r))}(this._delegate,e).then((e=>new NS(this.firestore,e)))}isEqual(e){return GT(this._delegate,e._delegate)}withConverter(e){return new US(this.firestore,e?this._delegate.withConverter(CS.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}function BS(e){return LT(e,BT)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jS{constructor(...e){this._delegate=new iE(...e)}static documentId(){return new jS(Xg.keyField().canonicalString())}isEqual(e){return(e=Ei(e))instanceof iE&&this._delegate._internalPath.isEqual(e._internalPath)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qS{constructor(e){this._delegate=e}static serverTimestamp(){const e=new wE("serverTimestamp");return e._methodName="FieldValue.serverTimestamp",new qS(e)}static delete(){const e=new yE("deleteField");return e._methodName="FieldValue.delete",new qS(e)}static arrayUnion(...e){const t=function(...e){return new bE("arrayUnion",e)}(...e);return t._methodName="FieldValue.arrayUnion",new qS(t)}static arrayRemove(...e){const t=function(...e){return new _E("arrayRemove",e)}(...e);return t._methodName="FieldValue.arrayRemove",new qS(t)}static increment(e){const t=new IE("increment",e);return t._methodName="FieldValue.increment",new qS(t)}isEqual(e){return this._delegate.isEqual(e._delegate)}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $S={Firestore:ES,GeoPoint:cE,Timestamp:Wg,Blob:IS,Transaction:xS,WriteBatch:AS,DocumentReference:NS,DocumentSnapshot:PS,Query:MS,QueryDocumentSnapshot:LS,QuerySnapshot:VS,CollectionReference:US,FieldPath:jS,FieldValue:qS,setLogLevel:function(e){var t;t=e,Ig.setLogLevel(t)},CACHE_SIZE_UNLIMITED:-1};!
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function(e){var t;t=(e,t)=>new ES(e,t,new TS),e.INTERNAL.registerComponent(new Si("firestore-compat",(e=>{const n=e.getProvider("app-compat").getImmediate(),r=e.getProvider("firestore").getImmediate();return t(n,r)}),"PUBLIC").setServiceProps(Object.assign({},$S))),e.registerVersion("@firebase/firestore-compat","0.1.20")}(Ro);Ro.initializeApp({apiKey:"AIzaSyDNC-IWnHKU4ZoeWfj3V5dlCFFtERd83Yc",authDomain:"vue-full-1023.firebaseapp.com",projectId:"vue-full-1023",storageBucket:"vue-full-1023.appspot.com",messagingSenderId:"294250998721",appId:"1:294250998721:web:7a5d95a97157e341e61d40"});const zS=Ro.auth();var GS={props:{isLoggedIn:{type:Boolean,default:!1}},data:()=>({list:[{title:"Home",to:"/"},{title:"DcHeroes",to:"/dc-heroes"},{title:"Calendar",to:"/calendar"},{title:"Markedown",to:"/marked"},{title:"Slider",to:"/slider"},{title:"Calculator",to:"/calculator"},{title:"ReuseableModal",to:"/reuseable-modal"}]}),computed:{isLoggedIn(){return this.$store.state.isLoggedIn}},methods:{logout(){zS.signOut()}}};const KS={class:"w-full bg-gradient-to-r from-blue-800 to-blue-600 text-white px-4 py-2"};GS.render=function(e,t,n,r,s,i){const o=Un("router-link");return Fr(),jr("nav",KS,[(Fr(!0),jr(Dr,null,qn(s.list,((e,t)=>(Fr(),qr(o,{class:"mx-2",to:e.to,key:t},{default:Qt((()=>[Yr(c(e.title),1)])),_:2},1032,["to"])))),128)),i.isLoggedIn?(Fr(),jr("button",{key:1,class:"mx-2",onClick:t[1]||(t[1]=(...e)=>i.logout&&i.logout(...e))},"Logout")):(Fr(),jr("button",{key:0,class:"mx-2",onClick:t[0]||(t[0]=t=>e.$emit("open-login-modal"))},"Login"))])};var WS={methods:{loginWithGoogle(){var e=new Ro.auth.GoogleAuthProvider;zS.signInWithPopup(e).then((()=>{this.$emit("close-login-from-google")}))}}};const HS={class:"my-5 text-center"};WS.render=function(e,t,n,r,s,i){return Fr(),jr("section",HS,[Hr("button",{class:"border rounded px-2",onClick:t[0]||(t[0]=(...e)=>i.loginWithGoogle&&i.loginWithGoogle(...e))},"Login with Google")])};var QS={components:{GoogleLogin:WS},data:()=>({email:"user1@gmail.com",password:"password",isLoading:!1}),mounted(){this.$refs.emailRef.focus()},methods:{submit(){this.isLoading=!0,zS.signInWithEmailAndPassword(this.email,this.password).then((()=>{this.email="",this.password="",this.isLoading=!1,this.close()})).catch((()=>{this.isLoading=!1}))},close(){this.$emit("close-login")}}};const JS={class:"absolute inset-0"},YS={class:"flex h-full"},XS={class:"z-30 m-auto bg-white p-2 rounded shadow"},ZS={class:"border p-2"},ex=Hr("h1",{class:"text-2xl text-center"},"Login",-1),tx=Hr("p",{class:"my-3 text-center"},"Or",-1),nx={class:"my-4"},rx=Hr("label",null,"Email or Username",-1),sx={class:"my-4"},ix=Hr("label",null,"Password",-1),ox={class:"my-4"},ax={type:"submit",class:"w-full rounded shadow-md bg-red-800 text-white"},cx={key:0},lx={key:1};QS.render=function(e,t,n,r,s,i){const o=Un("GoogleLogin");return Fr(),jr(Dr,null,[Hr("section",{onClick:t[0]||(t[0]=(...e)=>i.close&&i.close(...e)),class:"z-20 h-screen w-screen bg-gray-500 fixed top-0 opacity-50"}),Hr("div",JS,[Hr("div",YS,[Hr("div",XS,[Hr("div",ZS,[ex,Qr(o,{onCloseLoginFromGoogle:i.close},null,8,["onCloseLoginFromGoogle"]),tx,Hr("form",{action:"",class:"p-2 my-2",onSubmit:t[3]||(t[3]=(a=(...e)=>i.submit&&i.submit(...e),c=["prevent"],(e,...t)=>{for(let t=0;t<c.length;t++){const n=Xs[c[t]];if(n&&n(e,c))return}return a(e,...t)}))},[Hr("div",nx,[rx,Fn(Hr("input",{ref:"emailRef","onUpdate:modelValue":t[1]||(t[1]=e=>s.email=e),class:"rounded shadow p-2 w-full",placeholder:"Enter your email or username"},null,512),[[Js,s.email]])]),Hr("div",sx,[ix,Fn(Hr("input",{"onUpdate:modelValue":t[2]||(t[2]=e=>s.password=e),type:"password",class:"rounded shadow p-2 w-full",placeholder:"Enter your password"},null,512),[[Js,s.password]])]),Hr("div",ox,[Hr("button",ax,[s.isLoading?(Fr(),jr("span",lx,"Loading")):(Fr(),jr("span",cx,"Login"))])])],32)])])])])],64);var a,c};var ux={name:"App",components:{AppHeader:GS,LoginModal:QS},mounted(){zS.onAuthStateChanged((e=>{e?(this.$store.commit("setIsLoggedIn",!0),this.$store.commit("setAuthUser",e),console.log(e)):(this.$store.commit("setIsLoggedIn",!1),this.$store.commit("setAuthUser",{}),console.log("No user"))}))},data:()=>({isLoginOpen:!1})};const hx={class:"w-full flex justify-center"};function dx(){return"undefined"!=typeof navigator&&"undefined"!=typeof window?window:"undefined"!=typeof global?global:{}}ux.render=function(e,t,n,r,s,i){const o=Un("AppHeader"),a=Un("router-view"),c=Un("LoginModal");return Fr(),jr(Dr,null,[Qr(o,{onOpenLoginModal:t[0]||(t[0]=e=>s.isLoginOpen=!0),isLoggedIn:e.isLoggedIn},null,8,["isLoggedIn"]),Hr("div",hx,[Qr(a)]),(Fr(),qr(Nr,{to:"body"},[s.isLoginOpen?(Fr(),qr(c,{key:0,onCloseLogin:t[1]||(t[1]=e=>s.isLoginOpen=!1)})):Xr("",!0)]))],64)};const fx="function"==typeof Proxy;let px,gx;function mx(){return void 0!==px||("undefined"!=typeof window&&window.performance?(px=!0,gx=window.performance):"undefined"!=typeof global&&(null===(e=global.perf_hooks)||void 0===e?void 0:e.performance)?(px=!0,gx=global.perf_hooks.performance):px=!1),px?gx.now():Date.now();var e}class yx{constructor(e,t){this.target=null,this.targetQueue=[],this.onQueue=[],this.plugin=e,this.hook=t;const n={};if(e.settings)for(const t in e.settings){const r=e.settings[t];n[t]=r.defaultValue}const r=`__vue-devtools-plugin-settings__${e.id}`;let s=Object.assign({},n);try{const e=localStorage.getItem(r),t=JSON.parse(e);Object.assign(s,t)}catch(e){}this.fallbacks={getSettings:()=>s,setSettings(e){try{localStorage.setItem(r,JSON.stringify(e))}catch(e){}s=e},now:()=>mx()},t&&t.on("plugin:settings:set",((e,t)=>{e===this.plugin.id&&this.fallbacks.setSettings(t)})),this.proxiedOn=new Proxy({},{get:(e,t)=>this.target?this.target.on[t]:(...e)=>{this.onQueue.push({method:t,args:e})}}),this.proxiedTarget=new Proxy({},{get:(e,t)=>this.target?this.target[t]:"on"===t?this.proxiedOn:Object.keys(this.fallbacks).includes(t)?(...e)=>(this.targetQueue.push({method:t,args:e,resolve:()=>{}}),this.fallbacks[t](...e)):(...e)=>new Promise((n=>{this.targetQueue.push({method:t,args:e,resolve:n})}))})}async setRealTarget(e){this.target=e;for(const e of this.onQueue)this.target.on[e.method](...e.args);for(const e of this.targetQueue)e.resolve(await this.target[e.method](...e.args))}}function vx(e,t){const n=e,r=dx(),s=dx().__VUE_DEVTOOLS_GLOBAL_HOOK__,i=fx&&n.enableEarlyProxy;if(!s||!r.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__&&i){const e=i?new yx(n,s):null;(r.__VUE_DEVTOOLS_PLUGINS__=r.__VUE_DEVTOOLS_PLUGINS__||[]).push({pluginDescriptor:n,setupFn:t,proxy:e}),e&&t(e.proxiedTarget)}else s.emit("devtools-plugin:setup",e,t)}
/*!
  * vue-router v4.0.16
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const wx="function"==typeof Symbol&&"symbol"==typeof Symbol.toStringTag,bx=e=>wx?Symbol(e):"_vr_"+e,_x=bx("rvlm"),Ix=bx("rvd"),kx=bx("r"),Tx=bx("rl"),Ex=bx("rvl"),Sx="undefined"!=typeof window;const xx=Object.assign;function Ax(e,t){const n={};for(const r in t){const s=t[r];n[r]=Array.isArray(s)?s.map(e):e(s)}return n}const Cx=()=>{},Nx=/\/$/;function Dx(e,t,n="/"){let r,s={},i="",o="";const a=t.indexOf("?"),c=t.indexOf("#",a>-1?a:0);return a>-1&&(r=t.slice(0,a),i=t.slice(a+1,c>-1?c:t.length),s=e(i)),c>-1&&(r=r||t.slice(0,c),o=t.slice(c,t.length)),r=function(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),r=e.split("/");let s,i,o=n.length-1;for(s=0;s<r.length;s++)if(i=r[s],1!==o&&"."!==i){if(".."!==i)break;o--}return n.slice(0,o).join("/")+"/"+r.slice(s-(s===r.length?1:0)).join("/")}(null!=r?r:t,n),{fullPath:r+(i&&"?")+i+o,path:r,query:s,hash:o}}function Rx(e,t){return t&&e.toLowerCase().startsWith(t.toLowerCase())?e.slice(t.length)||"/":e}function Ox(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function Px(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(!Lx(e[n],t[n]))return!1;return!0}function Lx(e,t){return Array.isArray(e)?Mx(e,t):Array.isArray(t)?Mx(t,e):e===t}function Mx(e,t){return Array.isArray(t)?e.length===t.length&&e.every(((e,n)=>e===t[n])):1===e.length&&e[0]===t}var Fx,Vx,Ux,Bx;function jx(e){if(!e)if(Sx){const t=document.querySelector("base");e=(e=t&&t.getAttribute("href")||"/").replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return"/"!==e[0]&&"#"!==e[0]&&(e="/"+e),e.replace(Nx,"")}(Vx=Fx||(Fx={})).pop="pop",Vx.push="push",(Bx=Ux||(Ux={})).back="back",Bx.forward="forward",Bx.unknown="";const qx=/^[^#]+#/;function $x(e,t){return e.replace(qx,"#")+t}const zx=()=>({left:window.pageXOffset,top:window.pageYOffset});function Gx(e){let t;if("el"in e){const n=e.el,r="string"==typeof n&&n.startsWith("#"),s="string"==typeof n?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;t=function(e,t){const n=document.documentElement.getBoundingClientRect(),r=e.getBoundingClientRect();return{behavior:t.behavior,left:r.left-n.left-(t.left||0),top:r.top-n.top-(t.top||0)}}(s,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(null!=t.left?t.left:window.pageXOffset,null!=t.top?t.top:window.pageYOffset)}function Kx(e,t){return(history.state?history.state.position-t:-1)+e}const Wx=new Map;function Hx(e,t){const{pathname:n,search:r,hash:s}=t,i=e.indexOf("#");if(i>-1){let t=s.includes(e.slice(i))?e.slice(i).length:1,n=s.slice(t);return"/"!==n[0]&&(n="/"+n),Rx(n,"")}return Rx(n,e)+r+s}function Qx(e,t,n,r=!1,s=!1){return{back:e,current:t,forward:n,replaced:r,position:window.history.length,scroll:s?zx():null}}function Jx(e){const{history:t,location:n}=window,r={value:Hx(e,n)},s={value:t.state};function i(r,i,o){const a=e.indexOf("#"),c=a>-1?(n.host&&document.querySelector("base")?e:e.slice(a))+r:location.protocol+"//"+location.host+e+r;try{t[o?"replaceState":"pushState"](i,"",c),s.value=i}catch(e){console.error(e),n[o?"replace":"assign"](c)}}return s.value||i(r.value,{back:null,current:r.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0),{location:r,state:s,push:function(e,n){const o=xx({},s.value,t.state,{forward:e,scroll:zx()});i(o.current,o,!0),i(e,xx({},Qx(r.value,e,null),{position:o.position+1},n),!1),r.value=e},replace:function(e,n){i(e,xx({},t.state,Qx(s.value.back,e,s.value.forward,!0),n,{position:s.value.position}),!0),r.value=e}}}function Yx(e){return"string"==typeof e||"symbol"==typeof e}const Xx={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},Zx=bx("nf");var eA,tA;function nA(e,t){return xx(new Error,{type:e,[Zx]:!0},t)}function rA(e,t){return e instanceof Error&&Zx in e&&(null==t||!!(e.type&t))}(tA=eA||(eA={}))[tA.aborted=4]="aborted",tA[tA.cancelled=8]="cancelled",tA[tA.duplicated=16]="duplicated";const sA={sensitive:!1,strict:!1,start:!0,end:!0},iA=/[.+*?^${}()[\]/\\]/g;function oA(e,t){let n=0;for(;n<e.length&&n<t.length;){const r=t[n]-e[n];if(r)return r;n++}return e.length<t.length?1===e.length&&80===e[0]?-1:1:e.length>t.length?1===t.length&&80===t[0]?1:-1:0}function aA(e,t){let n=0;const r=e.score,s=t.score;for(;n<r.length&&n<s.length;){const e=oA(r[n],s[n]);if(e)return e;n++}if(1===Math.abs(s.length-r.length)){if(cA(r))return 1;if(cA(s))return-1}return s.length-r.length}function cA(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const lA={type:0,value:""},uA=/[a-zA-Z0-9_]/;function hA(e,t,n){const r=function(e,t){const n=xx({},sA,t),r=[];let s=n.start?"^":"";const i=[];for(const t of e){const e=t.length?[]:[90];n.strict&&!t.length&&(s+="/");for(let r=0;r<t.length;r++){const o=t[r];let a=40+(n.sensitive?.25:0);if(0===o.type)r||(s+="/"),s+=o.value.replace(iA,"\\$&"),a+=40;else if(1===o.type){const{value:e,repeatable:n,optional:c,regexp:l}=o;i.push({name:e,repeatable:n,optional:c});const u=l||"[^/]+?";if("[^/]+?"!==u){a+=10;try{new RegExp(`(${u})`)}catch(t){throw new Error(`Invalid custom RegExp for param "${e}" (${u}): `+t.message)}}let h=n?`((?:${u})(?:/(?:${u}))*)`:`(${u})`;r||(h=c&&t.length<2?`(?:/${h})`:"/"+h),c&&(h+="?"),s+=h,a+=20,c&&(a+=-8),n&&(a+=-20),".*"===u&&(a+=-50)}e.push(a)}r.push(e)}if(n.strict&&n.end){const e=r.length-1;r[e][r[e].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");return{re:o,score:r,keys:i,parse:function(e){const t=e.match(o),n={};if(!t)return null;for(let e=1;e<t.length;e++){const r=t[e]||"",s=i[e-1];n[s.name]=r&&s.repeatable?r.split("/"):r}return n},stringify:function(t){let n="",r=!1;for(const s of e){r&&n.endsWith("/")||(n+="/"),r=!1;for(const i of s)if(0===i.type)n+=i.value;else if(1===i.type){const{value:o,repeatable:a,optional:c}=i,l=o in t?t[o]:"";if(Array.isArray(l)&&!a)throw new Error(`Provided param "${o}" is an array but it is not repeatable (* or + modifiers)`);const u=Array.isArray(l)?l.join("/"):l;if(!u){if(!c)throw new Error(`Missing required param "${o}"`);s.length<2&&e.length>1&&(n.endsWith("/")?n=n.slice(0,-1):r=!0)}n+=u}}return n}}}(function(e){if(!e)return[[]];if("/"===e)return[[lA]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(e){throw new Error(`ERR (${n})/"${l}": ${e}`)}let n=0,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let a,c=0,l="",u="";function h(){l&&(0===n?i.push({type:0,value:l}):1===n||2===n||3===n?(i.length>1&&("*"===a||"+"===a)&&t(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:l,regexp:u,repeatable:"*"===a||"+"===a,optional:"*"===a||"?"===a})):t("Invalid state to consume buffer"),l="")}function d(){l+=a}for(;c<e.length;)if(a=e[c++],"\\"!==a||2===n)switch(n){case 0:"/"===a?(l&&h(),o()):":"===a?(h(),n=1):d();break;case 4:d(),n=r;break;case 1:"("===a?n=2:uA.test(a)?d():(h(),n=0,"*"!==a&&"?"!==a&&"+"!==a&&c--);break;case 2:")"===a?"\\"==u[u.length-1]?u=u.slice(0,-1)+a:n=3:u+=a;break;case 3:h(),n=0,"*"!==a&&"?"!==a&&"+"!==a&&c--,u="";break;default:t("Unknown state")}else r=n,n=4;return 2===n&&t(`Unfinished custom RegExp for param "${l}"`),h(),o(),s}(e.path),n),s=xx(r,{record:e,parent:t,children:[],alias:[]});return t&&!s.record.aliasOf==!t.record.aliasOf&&t.children.push(s),s}function dA(e,t){const n=[],r=new Map;function s(e,n,r){const a=!r,c=function(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:fA(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||{}:{default:e.component}}}(e);c.aliasOf=r&&r.record;const l=mA(t,e),u=[c];if("alias"in e){const t="string"==typeof e.alias?[e.alias]:e.alias;for(const e of t)u.push(xx({},c,{components:r?r.record.components:c.components,path:e,aliasOf:r?r.record:c}))}let h,d;for(const t of u){const{path:u}=t;if(n&&"/"!==u[0]){const e=n.record.path,r="/"===e[e.length-1]?"":"/";t.path=n.record.path+(u&&r+u)}if(h=hA(t,n,l),r?r.alias.push(h):(d=d||h,d!==h&&d.alias.push(h),a&&e.name&&!pA(h)&&i(e.name)),"children"in c){const e=c.children;for(let t=0;t<e.length;t++)s(e[t],h,r&&r.children[t])}r=r||h,o(h)}return d?()=>{i(d)}:Cx}function i(e){if(Yx(e)){const t=r.get(e);t&&(r.delete(e),n.splice(n.indexOf(t),1),t.children.forEach(i),t.alias.forEach(i))}else{const t=n.indexOf(e);t>-1&&(n.splice(t,1),e.record.name&&r.delete(e.record.name),e.children.forEach(i),e.alias.forEach(i))}}function o(e){let t=0;for(;t<n.length&&aA(e,n[t])>=0&&(e.record.path!==n[t].record.path||!yA(e,n[t]));)t++;n.splice(t,0,e),e.record.name&&!pA(e)&&r.set(e.record.name,e)}return t=mA({strict:!1,end:!0,sensitive:!1},t),e.forEach((e=>s(e))),{addRoute:s,resolve:function(e,t){let s,i,o,a={};if("name"in e&&e.name){if(s=r.get(e.name),!s)throw nA(1,{location:e});o=s.record.name,a=xx(function(e,t){const n={};for(const r of t)r in e&&(n[r]=e[r]);return n}(t.params,s.keys.filter((e=>!e.optional)).map((e=>e.name))),e.params),i=s.stringify(a)}else if("path"in e)i=e.path,s=n.find((e=>e.re.test(i))),s&&(a=s.parse(i),o=s.record.name);else{if(s=t.name?r.get(t.name):n.find((e=>e.re.test(t.path))),!s)throw nA(1,{location:e,currentLocation:t});o=s.record.name,a=xx({},t.params,e.params),i=s.stringify(a)}const c=[];let l=s;for(;l;)c.unshift(l.record),l=l.parent;return{name:o,path:i,params:a,matched:c,meta:gA(c)}},removeRoute:i,getRoutes:function(){return n},getRecordMatcher:function(e){return r.get(e)}}}function fA(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const r in e.components)t[r]="boolean"==typeof n?n:n[r];return t}function pA(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function gA(e){return e.reduce(((e,t)=>xx(e,t.meta)),{})}function mA(e,t){const n={};for(const r in e)n[r]=r in t?t[r]:e[r];return n}function yA(e,t){return t.children.some((t=>t===e||yA(e,t)))}const vA=/#/g,wA=/&/g,bA=/\//g,_A=/=/g,IA=/\?/g,kA=/\+/g,TA=/%5B/g,EA=/%5D/g,SA=/%5E/g,xA=/%60/g,AA=/%7B/g,CA=/%7C/g,NA=/%7D/g,DA=/%20/g;function RA(e){return encodeURI(""+e).replace(CA,"|").replace(TA,"[").replace(EA,"]")}function OA(e){return RA(e).replace(kA,"%2B").replace(DA,"+").replace(vA,"%23").replace(wA,"%26").replace(xA,"`").replace(AA,"{").replace(NA,"}").replace(SA,"^")}function PA(e){return null==e?"":function(e){return RA(e).replace(vA,"%23").replace(IA,"%3F")}(e).replace(bA,"%2F")}function LA(e){try{return decodeURIComponent(""+e)}catch(e){}return""+e}function MA(e){const t={};if(""===e||"?"===e)return t;const n=("?"===e[0]?e.slice(1):e).split("&");for(let e=0;e<n.length;++e){const r=n[e].replace(kA," "),s=r.indexOf("="),i=LA(s<0?r:r.slice(0,s)),o=s<0?null:LA(r.slice(s+1));if(i in t){let e=t[i];Array.isArray(e)||(e=t[i]=[e]),e.push(o)}else t[i]=o}return t}function FA(e){let t="";for(let n in e){const r=e[n];if(n=OA(n).replace(_A,"%3D"),null==r){void 0!==r&&(t+=(t.length?"&":"")+n);continue}(Array.isArray(r)?r.map((e=>e&&OA(e))):[r&&OA(r)]).forEach((e=>{void 0!==e&&(t+=(t.length?"&":"")+n,null!=e&&(t+="="+e))}))}return t}function VA(e){const t={};for(const n in e){const r=e[n];void 0!==r&&(t[n]=Array.isArray(r)?r.map((e=>null==e?null:""+e)):null==r?r:""+r)}return t}function UA(){let e=[];return{add:function(t){return e.push(t),()=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)}},list:()=>e,reset:function(){e=[]}}}function BA(e,t,n,r,s){const i=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise(((o,a)=>{const c=e=>{var c;!1===e?a(nA(4,{from:n,to:t})):e instanceof Error?a(e):"string"==typeof(c=e)||c&&"object"==typeof c?a(nA(2,{from:t,to:e})):(i&&r.enterCallbacks[s]===i&&"function"==typeof e&&i.push(e),o())},l=e.call(r&&r.instances[s],t,n,c);let u=Promise.resolve(l);e.length<3&&(u=u.then(c)),u.catch((e=>a(e)))}))}function jA(e,t,n,r){const s=[];for(const o of e)for(const e in o.components){let a=o.components[e];if("beforeRouteEnter"===t||o.instances[e])if("object"==typeof(i=a)||"displayName"in i||"props"in i||"__vccOpts"in i){const i=(a.__vccOpts||a)[t];i&&s.push(BA(i,n,r,o,e))}else{let i=a();s.push((()=>i.then((s=>{if(!s)return Promise.reject(new Error(`Couldn't resolve component "${e}" at "${o.path}"`));const i=(a=s).__esModule||wx&&"Module"===a[Symbol.toStringTag]?s.default:s;var a;o.components[e]=i;const c=(i.__vccOpts||i)[t];return c&&BA(c,n,r,o,e)()}))))}}var i;return s}function qA(e){const t=tn(kx),n=tn(Tx),r=ps((()=>t.resolve(gt(e.to)))),s=ps((()=>{const{matched:e}=r.value,{length:t}=e,s=e[t-1],i=n.matched;if(!s||!i.length)return-1;const o=i.findIndex(Ox.bind(null,s));if(o>-1)return o;const a=GA(e[t-2]);return t>1&&GA(s)===a&&i[i.length-1].path!==a?i.findIndex(Ox.bind(null,e[t-2])):o})),i=ps((()=>s.value>-1&&function(e,t){for(const n in t){const r=t[n],s=e[n];if("string"==typeof r){if(r!==s)return!1}else if(!Array.isArray(s)||s.length!==r.length||r.some(((e,t)=>e!==s[t])))return!1}return!0}(n.params,r.value.params))),o=ps((()=>s.value>-1&&s.value===n.matched.length-1&&Px(n.params,r.value.params)));return{route:r,href:ps((()=>r.value.href)),isActive:i,isExactActive:o,navigate:function(n={}){return function(e){if(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)return;if(e.defaultPrevented)return;if(void 0!==e.button&&0!==e.button)return;if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}e.preventDefault&&e.preventDefault();return!0}(n)?t[gt(e.replace)?"replace":"push"](gt(e.to)).catch(Cx):Promise.resolve()}}}const $A=vn({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:qA,setup(e,{slots:t}){const n=Xe(qA(e)),{options:r}=tn(kx),s=ps((()=>({[KA(e.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[KA(e.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive})));return()=>{const r=t.default&&t.default(n);return e.custom?r:gs("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},r)}}}),zA=$A;function GA(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const KA=(e,t,n)=>null!=e?e:null!=t?t:n,WA=vn({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:n}){const r=tn(Ex),s=ps((()=>e.route||r.value)),i=tn(Ix,0),o=ps((()=>s.value.matched[i]));en(Ix,i+1),en(_x,o),en(Ex,s);const a=dt();return rn((()=>[a.value,o.value,e.name]),(([e,t,n],[r,s,i])=>{t&&(t.instances[n]=e,s&&s!==t&&e&&e===r&&(t.leaveGuards.size||(t.leaveGuards=s.leaveGuards),t.updateGuards.size||(t.updateGuards=s.updateGuards))),!e||!t||s&&Ox(t,s)&&r||(t.enterCallbacks[n]||[]).forEach((t=>t(e)))}),{flush:"post"}),()=>{const r=s.value,i=o.value,c=i&&i.components[e.name],l=e.name;if(!c)return HA(n.default,{Component:c,route:r});const u=i.props[e.name],h=u?!0===u?r.params:"function"==typeof u?u(r):u:null,d=gs(c,xx({},h,t,{onVnodeUnmounted:e=>{e.component.isUnmounted&&(i.instances[l]=null)},ref:a}));return HA(n.default,{Component:d,route:r})||d}}});function HA(e,t){if(!e)return null;const n=e(t);return 1===n.length?n[0]:n}const QA=WA;function JA(e){return e.reduce(((e,t)=>e.then((()=>t()))),Promise.resolve())}var YA={data(){return{data:this.$store.state}},mounted(){console.log(this.$store.state)}};const XA={class:"flex"},ZA=[Hr("div",{class:"m-auto"},[Hr("h1",{class:"text-center"},"Welcome to vue 3")],-1)];YA.render=function(e,t,n,r,s,i){return Fr(),jr("div",XA,ZA)};var eC={setup(){const e=dt(""),t=dt(""),n=dt([{name:"SuperGirl"},{name:"Flash"},{name:"Batman"},{name:"Arrow"},{name:"Superman"}]),r=ps({get:()=>n.value.length});return An((()=>{e.value.focus()})),{dcHeroes:n,newHero:t,remove:function(e){n.value=n.value.filter(((t,n)=>n!=e))},addHero:function(){""!==t.value&&(n.value.unshift({name:t.value}),t.value="")},newHeroRef:e,heroesCount:r}},mounted(){}};const tC={class:"flex flex-wrap"},nC={class:"text-center m-auto w-full"},rC={class:"w-full"},sC=["onClick"];eC.render=function(e,t,n,r,s,i){return Fr(),jr("div",tC,[Hr("div",nC,"DcHeroes "+c(r.heroesCount),1),Hr("div",rC,[Hr("ul",null,[(Fr(!0),jr(Dr,null,qn(r.dcHeroes,((e,t)=>(Fr(),jr("li",{key:e},[Yr(c(e.name)+" ",1),Hr("button",{onClick:e=>r.remove(t)},"x",8,sC)])))),128))])]),Fn(Hr("input",{class:"border rounded","onUpdate:modelValue":t[0]||(t[0]=e=>r.newHero=e),ref:"newHeroRef"},null,512),[[Js,r.newHero]]),Hr("button",{type:"button",onClick:t[1]||(t[1]=e=>r.addHero()),class:"border rounded px-2"},"Add")])};var iC={};const oC={class:"flex"},aC=[Hr("div",{class:"text-center m-auto"},"Calendar",-1)];function cC(){return{baseUrl:null,breaks:!1,extensions:null,gfm:!0,headerIds:!0,headerPrefix:"",highlight:null,langPrefix:"language-",mangle:!0,pedantic:!1,renderer:null,sanitize:!1,sanitizer:null,silent:!1,smartLists:!1,smartypants:!1,tokenizer:null,walkTokens:null,xhtml:!1}}iC.render=function(e,t,n,r,s,i){return Fr(),jr("div",oC,aC)};let lC={baseUrl:null,breaks:!1,extensions:null,gfm:!0,headerIds:!0,headerPrefix:"",highlight:null,langPrefix:"language-",mangle:!0,pedantic:!1,renderer:null,sanitize:!1,sanitizer:null,silent:!1,smartLists:!1,smartypants:!1,tokenizer:null,walkTokens:null,xhtml:!1};const uC=/[&<>"']/,hC=/[&<>"']/g,dC=/[<>"']|&(?!#?\w+;)/,fC=/[<>"']|&(?!#?\w+;)/g,pC={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},gC=e=>pC[e];function mC(e,t){if(t){if(uC.test(e))return e.replace(hC,gC)}else if(dC.test(e))return e.replace(fC,gC);return e}const yC=/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/gi;function vC(e){return e.replace(yC,((e,t)=>"colon"===(t=t.toLowerCase())?":":"#"===t.charAt(0)?"x"===t.charAt(1)?String.fromCharCode(parseInt(t.substring(2),16)):String.fromCharCode(+t.substring(1)):""))}const wC=/(^|[^\[])\^/g;function bC(e,t){e="string"==typeof e?e:e.source,t=t||"";const n={replace:(t,r)=>(r=(r=r.source||r).replace(wC,"$1"),e=e.replace(t,r),n),getRegex:()=>new RegExp(e,t)};return n}const _C=/[^\w:]/g,IC=/^$|^[a-z][a-z0-9+.-]*:|^[?#]/i;function kC(e,t,n){if(e){let e;try{e=decodeURIComponent(vC(n)).replace(_C,"").toLowerCase()}catch(e){return null}if(0===e.indexOf("javascript:")||0===e.indexOf("vbscript:")||0===e.indexOf("data:"))return null}t&&!IC.test(n)&&(n=function(e,t){TC[" "+e]||(EC.test(e)?TC[" "+e]=e+"/":TC[" "+e]=DC(e,"/",!0));const n=-1===(e=TC[" "+e]).indexOf(":");return"//"===t.substring(0,2)?n?t:e.replace(SC,"$1")+t:"/"===t.charAt(0)?n?t:e.replace(xC,"$1")+t:e+t}(t,n));try{n=encodeURI(n).replace(/%25/g,"%")}catch(e){return null}return n}const TC={},EC=/^[^:]+:\/*[^/]*$/,SC=/^([^:]+:)[\s\S]*$/,xC=/^([^:]+:\/*[^/]*)[\s\S]*$/;const AC={exec:function(){}};function CC(e){let t,n,r=1;for(;r<arguments.length;r++)for(n in t=arguments[r],t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e}function NC(e,t){const n=e.replace(/\|/g,((e,t,n)=>{let r=!1,s=t;for(;--s>=0&&"\\"===n[s];)r=!r;return r?"|":" |"})).split(/ \|/);let r=0;if(n[0].trim()||n.shift(),n.length>0&&!n[n.length-1].trim()&&n.pop(),n.length>t)n.splice(t);else for(;n.length<t;)n.push("");for(;r<n.length;r++)n[r]=n[r].trim().replace(/\\\|/g,"|");return n}function DC(e,t,n){const r=e.length;if(0===r)return"";let s=0;for(;s<r;){const i=e.charAt(r-s-1);if(i!==t||n){if(i===t||!n)break;s++}else s++}return e.slice(0,r-s)}function RC(e){e&&e.sanitize&&!e.silent&&console.warn("marked(): sanitize and sanitizer parameters are deprecated since version 0.7.0, should not be used and will be removed in the future. Read more here: https://marked.js.org/#/USING_ADVANCED.md#options")}function OC(e,t){if(t<1)return"";let n="";for(;t>1;)1&t&&(n+=e),t>>=1,e+=e;return n+e}function PC(e,t,n,r){const s=t.href,i=t.title?mC(t.title):null,o=e[1].replace(/\\([\[\]])/g,"$1");if("!"!==e[0].charAt(0)){r.state.inLink=!0;const e={type:"link",raw:n,href:s,title:i,text:o,tokens:r.inlineTokens(o,[])};return r.state.inLink=!1,e}return{type:"image",raw:n,href:s,title:i,text:mC(o)}}class LC{constructor(e){this.options=e||lC}space(e){const t=this.rules.block.newline.exec(e);if(t&&t[0].length>0)return{type:"space",raw:t[0]}}code(e){const t=this.rules.block.code.exec(e);if(t){const e=t[0].replace(/^ {1,4}/gm,"");return{type:"code",raw:t[0],codeBlockStyle:"indented",text:this.options.pedantic?e:DC(e,"\n")}}}fences(e){const t=this.rules.block.fences.exec(e);if(t){const e=t[0],n=function(e,t){const n=e.match(/^(\s+)(?:```)/);if(null===n)return t;const r=n[1];return t.split("\n").map((e=>{const t=e.match(/^\s+/);if(null===t)return e;const[n]=t;return n.length>=r.length?e.slice(r.length):e})).join("\n")}(e,t[3]||"");return{type:"code",raw:e,lang:t[2]?t[2].trim():t[2],text:n}}}heading(e){const t=this.rules.block.heading.exec(e);if(t){let e=t[2].trim();if(/#$/.test(e)){const t=DC(e,"#");this.options.pedantic?e=t.trim():t&&!/ $/.test(t)||(e=t.trim())}const n={type:"heading",raw:t[0],depth:t[1].length,text:e,tokens:[]};return this.lexer.inline(n.text,n.tokens),n}}hr(e){const t=this.rules.block.hr.exec(e);if(t)return{type:"hr",raw:t[0]}}blockquote(e){const t=this.rules.block.blockquote.exec(e);if(t){const e=t[0].replace(/^ *>[ \t]?/gm,"");return{type:"blockquote",raw:t[0],tokens:this.lexer.blockTokens(e,[]),text:e}}}list(e){let t=this.rules.block.list.exec(e);if(t){let n,r,s,i,o,a,c,l,u,h,d,f,p=t[1].trim();const g=p.length>1,m={type:"list",raw:"",ordered:g,start:g?+p.slice(0,-1):"",loose:!1,items:[]};p=g?`\\d{1,9}\\${p.slice(-1)}`:`\\${p}`,this.options.pedantic&&(p=g?p:"[*+-]");const y=new RegExp(`^( {0,3}${p})((?:[\t ][^\\n]*)?(?:\\n|$))`);for(;e&&(f=!1,t=y.exec(e))&&!this.rules.block.hr.test(e);){if(n=t[0],e=e.substring(n.length),l=t[2].split("\n",1)[0],u=e.split("\n",1)[0],this.options.pedantic?(i=2,d=l.trimLeft()):(i=t[2].search(/[^ ]/),i=i>4?1:i,d=l.slice(i),i+=t[1].length),a=!1,!l&&/^ *$/.test(u)&&(n+=u+"\n",e=e.substring(u.length+1),f=!0),!f){const t=new RegExp(`^ {0,${Math.min(3,i-1)}}(?:[*+-]|\\d{1,9}[.)])((?: [^\\n]*)?(?:\\n|$))`),r=new RegExp(`^ {0,${Math.min(3,i-1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`),s=new RegExp(`^( {0,${Math.min(3,i-1)}})(\`\`\`|~~~)`);for(;e&&(h=e.split("\n",1)[0],l=h,this.options.pedantic&&(l=l.replace(/^ {1,4}(?=( {4})*[^ ])/g,"  ")),!s.test(l))&&!this.rules.block.heading.test(l)&&!t.test(l)&&!r.test(e);){if(l.search(/[^ ]/)>=i||!l.trim())d+="\n"+l.slice(i);else{if(a)break;d+="\n"+l}a||l.trim()||(a=!0),n+=h+"\n",e=e.substring(h.length+1)}}m.loose||(c?m.loose=!0:/\n *\n *$/.test(n)&&(c=!0)),this.options.gfm&&(r=/^\[[ xX]\] /.exec(d),r&&(s="[ ] "!==r[0],d=d.replace(/^\[[ xX]\] +/,""))),m.items.push({type:"list_item",raw:n,task:!!r,checked:s,loose:!1,text:d}),m.raw+=n}m.items[m.items.length-1].raw=n.trimRight(),m.items[m.items.length-1].text=d.trimRight(),m.raw=m.raw.trimRight();const v=m.items.length;for(o=0;o<v;o++){this.lexer.state.top=!1,m.items[o].tokens=this.lexer.blockTokens(m.items[o].text,[]);const e=m.items[o].tokens.filter((e=>"space"===e.type)),t=e.every((e=>{const t=e.raw.split("");let n=0;for(const e of t)if("\n"===e&&(n+=1),n>1)return!0;return!1}));!m.loose&&e.length&&t&&(m.loose=!0,m.items[o].loose=!0)}return m}}html(e){const t=this.rules.block.html.exec(e);if(t){const e={type:"html",raw:t[0],pre:!this.options.sanitizer&&("pre"===t[1]||"script"===t[1]||"style"===t[1]),text:t[0]};return this.options.sanitize&&(e.type="paragraph",e.text=this.options.sanitizer?this.options.sanitizer(t[0]):mC(t[0]),e.tokens=[],this.lexer.inline(e.text,e.tokens)),e}}def(e){const t=this.rules.block.def.exec(e);if(t){t[3]&&(t[3]=t[3].substring(1,t[3].length-1));return{type:"def",tag:t[1].toLowerCase().replace(/\s+/g," "),raw:t[0],href:t[2],title:t[3]}}}table(e){const t=this.rules.block.table.exec(e);if(t){const e={type:"table",header:NC(t[1]).map((e=>({text:e}))),align:t[2].replace(/^ *|\| *$/g,"").split(/ *\| */),rows:t[3]&&t[3].trim()?t[3].replace(/\n[ \t]*$/,"").split("\n"):[]};if(e.header.length===e.align.length){e.raw=t[0];let n,r,s,i,o=e.align.length;for(n=0;n<o;n++)/^ *-+: *$/.test(e.align[n])?e.align[n]="right":/^ *:-+: *$/.test(e.align[n])?e.align[n]="center":/^ *:-+ *$/.test(e.align[n])?e.align[n]="left":e.align[n]=null;for(o=e.rows.length,n=0;n<o;n++)e.rows[n]=NC(e.rows[n],e.header.length).map((e=>({text:e})));for(o=e.header.length,r=0;r<o;r++)e.header[r].tokens=[],this.lexer.inline(e.header[r].text,e.header[r].tokens);for(o=e.rows.length,r=0;r<o;r++)for(i=e.rows[r],s=0;s<i.length;s++)i[s].tokens=[],this.lexer.inline(i[s].text,i[s].tokens);return e}}}lheading(e){const t=this.rules.block.lheading.exec(e);if(t){const e={type:"heading",raw:t[0],depth:"="===t[2].charAt(0)?1:2,text:t[1],tokens:[]};return this.lexer.inline(e.text,e.tokens),e}}paragraph(e){const t=this.rules.block.paragraph.exec(e);if(t){const e={type:"paragraph",raw:t[0],text:"\n"===t[1].charAt(t[1].length-1)?t[1].slice(0,-1):t[1],tokens:[]};return this.lexer.inline(e.text,e.tokens),e}}text(e){const t=this.rules.block.text.exec(e);if(t){const e={type:"text",raw:t[0],text:t[0],tokens:[]};return this.lexer.inline(e.text,e.tokens),e}}escape(e){const t=this.rules.inline.escape.exec(e);if(t)return{type:"escape",raw:t[0],text:mC(t[1])}}tag(e){const t=this.rules.inline.tag.exec(e);if(t)return!this.lexer.state.inLink&&/^<a /i.test(t[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&/^<\/a>/i.test(t[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&/^<(pre|code|kbd|script)(\s|>)/i.test(t[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&/^<\/(pre|code|kbd|script)(\s|>)/i.test(t[0])&&(this.lexer.state.inRawBlock=!1),{type:this.options.sanitize?"text":"html",raw:t[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,text:this.options.sanitize?this.options.sanitizer?this.options.sanitizer(t[0]):mC(t[0]):t[0]}}link(e){const t=this.rules.inline.link.exec(e);if(t){const e=t[2].trim();if(!this.options.pedantic&&/^</.test(e)){if(!/>$/.test(e))return;const t=DC(e.slice(0,-1),"\\");if((e.length-t.length)%2==0)return}else{const e=function(e,t){if(-1===e.indexOf(t[1]))return-1;const n=e.length;let r=0,s=0;for(;s<n;s++)if("\\"===e[s])s++;else if(e[s]===t[0])r++;else if(e[s]===t[1]&&(r--,r<0))return s;return-1}(t[2],"()");if(e>-1){const n=(0===t[0].indexOf("!")?5:4)+t[1].length+e;t[2]=t[2].substring(0,e),t[0]=t[0].substring(0,n).trim(),t[3]=""}}let n=t[2],r="";if(this.options.pedantic){const e=/^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(n);e&&(n=e[1],r=e[3])}else r=t[3]?t[3].slice(1,-1):"";return n=n.trim(),/^</.test(n)&&(n=this.options.pedantic&&!/>$/.test(e)?n.slice(1):n.slice(1,-1)),PC(t,{href:n?n.replace(this.rules.inline._escapes,"$1"):n,title:r?r.replace(this.rules.inline._escapes,"$1"):r},t[0],this.lexer)}}reflink(e,t){let n;if((n=this.rules.inline.reflink.exec(e))||(n=this.rules.inline.nolink.exec(e))){let e=(n[2]||n[1]).replace(/\s+/g," ");if(e=t[e.toLowerCase()],!e||!e.href){const e=n[0].charAt(0);return{type:"text",raw:e,text:e}}return PC(n,e,n[0],this.lexer)}}emStrong(e,t,n=""){let r=this.rules.inline.emStrong.lDelim.exec(e);if(!r)return;if(r[3]&&n.match(/[\p{L}\p{N}]/u))return;const s=r[1]||r[2]||"";if(!s||s&&(""===n||this.rules.inline.punctuation.exec(n))){const n=r[0].length-1;let s,i,o=n,a=0;const c="*"===r[0][0]?this.rules.inline.emStrong.rDelimAst:this.rules.inline.emStrong.rDelimUnd;for(c.lastIndex=0,t=t.slice(-1*e.length+n);null!=(r=c.exec(t));){if(s=r[1]||r[2]||r[3]||r[4]||r[5]||r[6],!s)continue;if(i=s.length,r[3]||r[4]){o+=i;continue}if((r[5]||r[6])&&n%3&&!((n+i)%3)){a+=i;continue}if(o-=i,o>0)continue;if(i=Math.min(i,i+o+a),Math.min(n,i)%2){const t=e.slice(1,n+r.index+i);return{type:"em",raw:e.slice(0,n+r.index+i+1),text:t,tokens:this.lexer.inlineTokens(t,[])}}const t=e.slice(2,n+r.index+i-1);return{type:"strong",raw:e.slice(0,n+r.index+i+1),text:t,tokens:this.lexer.inlineTokens(t,[])}}}}codespan(e){const t=this.rules.inline.code.exec(e);if(t){let e=t[2].replace(/\n/g," ");const n=/[^ ]/.test(e),r=/^ /.test(e)&&/ $/.test(e);return n&&r&&(e=e.substring(1,e.length-1)),e=mC(e,!0),{type:"codespan",raw:t[0],text:e}}}br(e){const t=this.rules.inline.br.exec(e);if(t)return{type:"br",raw:t[0]}}del(e){const t=this.rules.inline.del.exec(e);if(t)return{type:"del",raw:t[0],text:t[2],tokens:this.lexer.inlineTokens(t[2],[])}}autolink(e,t){const n=this.rules.inline.autolink.exec(e);if(n){let e,r;return"@"===n[2]?(e=mC(this.options.mangle?t(n[1]):n[1]),r="mailto:"+e):(e=mC(n[1]),r=e),{type:"link",raw:n[0],text:e,href:r,tokens:[{type:"text",raw:e,text:e}]}}}url(e,t){let n;if(n=this.rules.inline.url.exec(e)){let e,r;if("@"===n[2])e=mC(this.options.mangle?t(n[0]):n[0]),r="mailto:"+e;else{let t;do{t=n[0],n[0]=this.rules.inline._backpedal.exec(n[0])[0]}while(t!==n[0]);e=mC(n[0]),r="www."===n[1]?"http://"+e:e}return{type:"link",raw:n[0],text:e,href:r,tokens:[{type:"text",raw:e,text:e}]}}}inlineText(e,t){const n=this.rules.inline.text.exec(e);if(n){let e;return e=this.lexer.state.inRawBlock?this.options.sanitize?this.options.sanitizer?this.options.sanitizer(n[0]):mC(n[0]):n[0]:mC(this.options.smartypants?t(n[0]):n[0]),{type:"text",raw:n[0],text:e}}}}const MC={newline:/^(?: *(?:\n|$))+/,code:/^( {4}[^\n]+(?:\n(?: *(?:\n|$))*)?)+/,fences:/^ {0,3}(`{3,}(?=[^`\n]*\n)|~{3,})([^\n]*)\n(?:|([\s\S]*?)\n)(?: {0,3}\1[~`]* *(?=\n|$)|$)/,hr:/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,heading:/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,blockquote:/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/,list:/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/,html:"^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n *)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$))",def:/^ {0,3}\[(label)\]: *(?:\n *)?<?([^\s>]+)>?(?:(?: +(?:\n *)?| *\n *)(title))? *(?:\n+|$)/,table:AC,lheading:/^([^\n]+)\n {0,3}(=+|-+) *(?:\n+|$)/,_paragraph:/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,text:/^[^\n]+/,_label:/(?!\s*\])(?:\\.|[^\[\]\\])+/,_title:/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/};MC.def=bC(MC.def).replace("label",MC._label).replace("title",MC._title).getRegex(),MC.bullet=/(?:[*+-]|\d{1,9}[.)])/,MC.listItemStart=bC(/^( *)(bull) */).replace("bull",MC.bullet).getRegex(),MC.list=bC(MC.list).replace(/bull/g,MC.bullet).replace("hr","\\n+(?=\\1?(?:(?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$))").replace("def","\\n+(?="+MC.def.source+")").getRegex(),MC._tag="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",MC._comment=/<!--(?!-?>)[\s\S]*?(?:-->|$)/,MC.html=bC(MC.html,"i").replace("comment",MC._comment).replace("tag",MC._tag).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),MC.paragraph=bC(MC._paragraph).replace("hr",MC.hr).replace("heading"," {0,3}#{1,6} ").replace("|lheading","").replace("|table","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",MC._tag).getRegex(),MC.blockquote=bC(MC.blockquote).replace("paragraph",MC.paragraph).getRegex(),MC.normal=CC({},MC),MC.gfm=CC({},MC.normal,{table:"^ *([^\\n ].*\\|.*)\\n {0,3}(?:\\| *)?(:?-+:? *(?:\\| *:?-+:? *)*)(?:\\| *)?(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)"}),MC.gfm.table=bC(MC.gfm.table).replace("hr",MC.hr).replace("heading"," {0,3}#{1,6} ").replace("blockquote"," {0,3}>").replace("code"," {4}[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",MC._tag).getRegex(),MC.gfm.paragraph=bC(MC._paragraph).replace("hr",MC.hr).replace("heading"," {0,3}#{1,6} ").replace("|lheading","").replace("table",MC.gfm.table).replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",MC._tag).getRegex(),MC.pedantic=CC({},MC.normal,{html:bC("^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:\"[^\"]*\"|'[^']*'|\\s[^'\"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))").replace("comment",MC._comment).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:AC,paragraph:bC(MC.normal._paragraph).replace("hr",MC.hr).replace("heading"," *#{1,6} *[^\n]").replace("lheading",MC.lheading).replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").getRegex()});const FC={escape:/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,autolink:/^<(scheme:[^\s\x00-\x1f<>]*|email)>/,url:AC,tag:"^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>",link:/^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/,reflink:/^!?\[(label)\]\[(ref)\]/,nolink:/^!?\[(ref)\](?:\[\])?/,reflinkSearch:"reflink|nolink(?!\\()",emStrong:{lDelim:/^(?:\*+(?:([punct_])|[^\s*]))|^_+(?:([punct*])|([^\s_]))/,rDelimAst:/^[^_*]*?\_\_[^_*]*?\*[^_*]*?(?=\_\_)|[^*]+(?=[^*])|[punct_](\*+)(?=[\s]|$)|[^punct*_\s](\*+)(?=[punct_\s]|$)|[punct_\s](\*+)(?=[^punct*_\s])|[\s](\*+)(?=[punct_])|[punct_](\*+)(?=[punct_])|[^punct*_\s](\*+)(?=[^punct*_\s])/,rDelimUnd:/^[^_*]*?\*\*[^_*]*?\_[^_*]*?(?=\*\*)|[^_]+(?=[^_])|[punct*](\_+)(?=[\s]|$)|[^punct*_\s](\_+)(?=[punct*\s]|$)|[punct*\s](\_+)(?=[^punct*_\s])|[\s](\_+)(?=[punct*])|[punct*](\_+)(?=[punct*])/},code:/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,br:/^( {2,}|\\)\n(?!\s*$)/,del:AC,text:/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,punctuation:/^([\spunctuation])/};function VC(e){return e.replace(/---/g,"—").replace(/--/g,"–").replace(/(^|[-\u2014/(\[{"\s])'/g,"$1‘").replace(/'/g,"’").replace(/(^|[-\u2014/(\[{\u2018\s])"/g,"$1“").replace(/"/g,"”").replace(/\.{3}/g,"…")}function UC(e){let t,n,r="";const s=e.length;for(t=0;t<s;t++)n=e.charCodeAt(t),Math.random()>.5&&(n="x"+n.toString(16)),r+="&#"+n+";";return r}FC._punctuation="!\"#$%&'()+\\-.,/:;<=>?@\\[\\]`^{|}~",FC.punctuation=bC(FC.punctuation).replace(/punctuation/g,FC._punctuation).getRegex(),FC.blockSkip=/\[[^\]]*?\]\([^\)]*?\)|`[^`]*?`|<[^>]*?>/g,FC.escapedEmSt=/\\\*|\\_/g,FC._comment=bC(MC._comment).replace("(?:--\x3e|$)","--\x3e").getRegex(),FC.emStrong.lDelim=bC(FC.emStrong.lDelim).replace(/punct/g,FC._punctuation).getRegex(),FC.emStrong.rDelimAst=bC(FC.emStrong.rDelimAst,"g").replace(/punct/g,FC._punctuation).getRegex(),FC.emStrong.rDelimUnd=bC(FC.emStrong.rDelimUnd,"g").replace(/punct/g,FC._punctuation).getRegex(),FC._escapes=/\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/g,FC._scheme=/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/,FC._email=/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/,FC.autolink=bC(FC.autolink).replace("scheme",FC._scheme).replace("email",FC._email).getRegex(),FC._attribute=/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/,FC.tag=bC(FC.tag).replace("comment",FC._comment).replace("attribute",FC._attribute).getRegex(),FC._label=/(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/,FC._href=/<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/,FC._title=/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/,FC.link=bC(FC.link).replace("label",FC._label).replace("href",FC._href).replace("title",FC._title).getRegex(),FC.reflink=bC(FC.reflink).replace("label",FC._label).replace("ref",MC._label).getRegex(),FC.nolink=bC(FC.nolink).replace("ref",MC._label).getRegex(),FC.reflinkSearch=bC(FC.reflinkSearch,"g").replace("reflink",FC.reflink).replace("nolink",FC.nolink).getRegex(),FC.normal=CC({},FC),FC.pedantic=CC({},FC.normal,{strong:{start:/^__|\*\*/,middle:/^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,endAst:/\*\*(?!\*)/g,endUnd:/__(?!_)/g},em:{start:/^_|\*/,middle:/^()\*(?=\S)([\s\S]*?\S)\*(?!\*)|^_(?=\S)([\s\S]*?\S)_(?!_)/,endAst:/\*(?!\*)/g,endUnd:/_(?!_)/g},link:bC(/^!?\[(label)\]\((.*?)\)/).replace("label",FC._label).getRegex(),reflink:bC(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",FC._label).getRegex()}),FC.gfm=CC({},FC.normal,{escape:bC(FC.escape).replace("])","~|])").getRegex(),_extended_email:/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/,url:/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,_backpedal:/(?:[^?!.,:;*_~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/,text:/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/}),FC.gfm.url=bC(FC.gfm.url,"i").replace("email",FC.gfm._extended_email).getRegex(),FC.breaks=CC({},FC.gfm,{br:bC(FC.br).replace("{2,}","*").getRegex(),text:bC(FC.gfm.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()});class BC{constructor(e){this.tokens=[],this.tokens.links=Object.create(null),this.options=e||lC,this.options.tokenizer=this.options.tokenizer||new LC,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};const t={block:MC.normal,inline:FC.normal};this.options.pedantic?(t.block=MC.pedantic,t.inline=FC.pedantic):this.options.gfm&&(t.block=MC.gfm,this.options.breaks?t.inline=FC.breaks:t.inline=FC.gfm),this.tokenizer.rules=t}static get rules(){return{block:MC,inline:FC}}static lex(e,t){return new BC(t).lex(e)}static lexInline(e,t){return new BC(t).inlineTokens(e)}lex(e){let t;for(e=e.replace(/\r\n|\r/g,"\n"),this.blockTokens(e,this.tokens);t=this.inlineQueue.shift();)this.inlineTokens(t.src,t.tokens);return this.tokens}blockTokens(e,t=[]){let n,r,s,i;for(e=this.options.pedantic?e.replace(/\t/g,"    ").replace(/^ +$/gm,""):e.replace(/^( *)(\t+)/gm,((e,t,n)=>t+"    ".repeat(n.length)));e;)if(!(this.options.extensions&&this.options.extensions.block&&this.options.extensions.block.some((r=>!!(n=r.call({lexer:this},e,t))&&(e=e.substring(n.raw.length),t.push(n),!0)))))if(n=this.tokenizer.space(e))e=e.substring(n.raw.length),1===n.raw.length&&t.length>0?t[t.length-1].raw+="\n":t.push(n);else if(n=this.tokenizer.code(e))e=e.substring(n.raw.length),r=t[t.length-1],!r||"paragraph"!==r.type&&"text"!==r.type?t.push(n):(r.raw+="\n"+n.raw,r.text+="\n"+n.text,this.inlineQueue[this.inlineQueue.length-1].src=r.text);else if(n=this.tokenizer.fences(e))e=e.substring(n.raw.length),t.push(n);else if(n=this.tokenizer.heading(e))e=e.substring(n.raw.length),t.push(n);else if(n=this.tokenizer.hr(e))e=e.substring(n.raw.length),t.push(n);else if(n=this.tokenizer.blockquote(e))e=e.substring(n.raw.length),t.push(n);else if(n=this.tokenizer.list(e))e=e.substring(n.raw.length),t.push(n);else if(n=this.tokenizer.html(e))e=e.substring(n.raw.length),t.push(n);else if(n=this.tokenizer.def(e))e=e.substring(n.raw.length),r=t[t.length-1],!r||"paragraph"!==r.type&&"text"!==r.type?this.tokens.links[n.tag]||(this.tokens.links[n.tag]={href:n.href,title:n.title}):(r.raw+="\n"+n.raw,r.text+="\n"+n.raw,this.inlineQueue[this.inlineQueue.length-1].src=r.text);else if(n=this.tokenizer.table(e))e=e.substring(n.raw.length),t.push(n);else if(n=this.tokenizer.lheading(e))e=e.substring(n.raw.length),t.push(n);else{if(s=e,this.options.extensions&&this.options.extensions.startBlock){let t=1/0;const n=e.slice(1);let r;this.options.extensions.startBlock.forEach((function(e){r=e.call({lexer:this},n),"number"==typeof r&&r>=0&&(t=Math.min(t,r))})),t<1/0&&t>=0&&(s=e.substring(0,t+1))}if(this.state.top&&(n=this.tokenizer.paragraph(s)))r=t[t.length-1],i&&"paragraph"===r.type?(r.raw+="\n"+n.raw,r.text+="\n"+n.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=r.text):t.push(n),i=s.length!==e.length,e=e.substring(n.raw.length);else if(n=this.tokenizer.text(e))e=e.substring(n.raw.length),r=t[t.length-1],r&&"text"===r.type?(r.raw+="\n"+n.raw,r.text+="\n"+n.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=r.text):t.push(n);else if(e){const t="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(t);break}throw new Error(t)}}return this.state.top=!0,t}inline(e,t){this.inlineQueue.push({src:e,tokens:t})}inlineTokens(e,t=[]){let n,r,s,i,o,a,c=e;if(this.tokens.links){const e=Object.keys(this.tokens.links);if(e.length>0)for(;null!=(i=this.tokenizer.rules.inline.reflinkSearch.exec(c));)e.includes(i[0].slice(i[0].lastIndexOf("[")+1,-1))&&(c=c.slice(0,i.index)+"["+OC("a",i[0].length-2)+"]"+c.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;null!=(i=this.tokenizer.rules.inline.blockSkip.exec(c));)c=c.slice(0,i.index)+"["+OC("a",i[0].length-2)+"]"+c.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);for(;null!=(i=this.tokenizer.rules.inline.escapedEmSt.exec(c));)c=c.slice(0,i.index)+"++"+c.slice(this.tokenizer.rules.inline.escapedEmSt.lastIndex);for(;e;)if(o||(a=""),o=!1,!(this.options.extensions&&this.options.extensions.inline&&this.options.extensions.inline.some((r=>!!(n=r.call({lexer:this},e,t))&&(e=e.substring(n.raw.length),t.push(n),!0)))))if(n=this.tokenizer.escape(e))e=e.substring(n.raw.length),t.push(n);else if(n=this.tokenizer.tag(e))e=e.substring(n.raw.length),r=t[t.length-1],r&&"text"===n.type&&"text"===r.type?(r.raw+=n.raw,r.text+=n.text):t.push(n);else if(n=this.tokenizer.link(e))e=e.substring(n.raw.length),t.push(n);else if(n=this.tokenizer.reflink(e,this.tokens.links))e=e.substring(n.raw.length),r=t[t.length-1],r&&"text"===n.type&&"text"===r.type?(r.raw+=n.raw,r.text+=n.text):t.push(n);else if(n=this.tokenizer.emStrong(e,c,a))e=e.substring(n.raw.length),t.push(n);else if(n=this.tokenizer.codespan(e))e=e.substring(n.raw.length),t.push(n);else if(n=this.tokenizer.br(e))e=e.substring(n.raw.length),t.push(n);else if(n=this.tokenizer.del(e))e=e.substring(n.raw.length),t.push(n);else if(n=this.tokenizer.autolink(e,UC))e=e.substring(n.raw.length),t.push(n);else if(this.state.inLink||!(n=this.tokenizer.url(e,UC))){if(s=e,this.options.extensions&&this.options.extensions.startInline){let t=1/0;const n=e.slice(1);let r;this.options.extensions.startInline.forEach((function(e){r=e.call({lexer:this},n),"number"==typeof r&&r>=0&&(t=Math.min(t,r))})),t<1/0&&t>=0&&(s=e.substring(0,t+1))}if(n=this.tokenizer.inlineText(s,VC))e=e.substring(n.raw.length),"_"!==n.raw.slice(-1)&&(a=n.raw.slice(-1)),o=!0,r=t[t.length-1],r&&"text"===r.type?(r.raw+=n.raw,r.text+=n.text):t.push(n);else if(e){const t="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(t);break}throw new Error(t)}}else e=e.substring(n.raw.length),t.push(n);return t}}class jC{constructor(e){this.options=e||lC}code(e,t,n){const r=(t||"").match(/\S*/)[0];if(this.options.highlight){const t=this.options.highlight(e,r);null!=t&&t!==e&&(n=!0,e=t)}return e=e.replace(/\n$/,"")+"\n",r?'<pre><code class="'+this.options.langPrefix+mC(r,!0)+'">'+(n?e:mC(e,!0))+"</code></pre>\n":"<pre><code>"+(n?e:mC(e,!0))+"</code></pre>\n"}blockquote(e){return`<blockquote>\n${e}</blockquote>\n`}html(e){return e}heading(e,t,n,r){if(this.options.headerIds){return`<h${t} id="${this.options.headerPrefix+r.slug(n)}">${e}</h${t}>\n`}return`<h${t}>${e}</h${t}>\n`}hr(){return this.options.xhtml?"<hr/>\n":"<hr>\n"}list(e,t,n){const r=t?"ol":"ul";return"<"+r+(t&&1!==n?' start="'+n+'"':"")+">\n"+e+"</"+r+">\n"}listitem(e){return`<li>${e}</li>\n`}checkbox(e){return"<input "+(e?'checked="" ':"")+'disabled="" type="checkbox"'+(this.options.xhtml?" /":"")+"> "}paragraph(e){return`<p>${e}</p>\n`}table(e,t){return t&&(t=`<tbody>${t}</tbody>`),"<table>\n<thead>\n"+e+"</thead>\n"+t+"</table>\n"}tablerow(e){return`<tr>\n${e}</tr>\n`}tablecell(e,t){const n=t.header?"th":"td";return(t.align?`<${n} align="${t.align}">`:`<${n}>`)+e+`</${n}>\n`}strong(e){return`<strong>${e}</strong>`}em(e){return`<em>${e}</em>`}codespan(e){return`<code>${e}</code>`}br(){return this.options.xhtml?"<br/>":"<br>"}del(e){return`<del>${e}</del>`}link(e,t,n){if(null===(e=kC(this.options.sanitize,this.options.baseUrl,e)))return n;let r='<a href="'+mC(e)+'"';return t&&(r+=' title="'+t+'"'),r+=">"+n+"</a>",r}image(e,t,n){if(null===(e=kC(this.options.sanitize,this.options.baseUrl,e)))return n;let r=`<img src="${e}" alt="${n}"`;return t&&(r+=` title="${t}"`),r+=this.options.xhtml?"/>":">",r}text(e){return e}}class qC{strong(e){return e}em(e){return e}codespan(e){return e}del(e){return e}html(e){return e}text(e){return e}link(e,t,n){return""+n}image(e,t,n){return""+n}br(){return""}}class $C{constructor(){this.seen={}}serialize(e){return e.toLowerCase().trim().replace(/<[!\/a-z].*?>/gi,"").replace(/[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,./:;<=>?@[\]^`{|}~]/g,"").replace(/\s/g,"-")}getNextSafeSlug(e,t){let n=e,r=0;if(this.seen.hasOwnProperty(n)){r=this.seen[e];do{r++,n=e+"-"+r}while(this.seen.hasOwnProperty(n))}return t||(this.seen[e]=r,this.seen[n]=0),n}slug(e,t={}){const n=this.serialize(e);return this.getNextSafeSlug(n,t.dryrun)}}class zC{constructor(e){this.options=e||lC,this.options.renderer=this.options.renderer||new jC,this.renderer=this.options.renderer,this.renderer.options=this.options,this.textRenderer=new qC,this.slugger=new $C}static parse(e,t){return new zC(t).parse(e)}static parseInline(e,t){return new zC(t).parseInline(e)}parse(e,t=!0){let n,r,s,i,o,a,c,l,u,h,d,f,p,g,m,y,v,w,b,_="";const I=e.length;for(n=0;n<I;n++)if(h=e[n],this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[h.type]&&(b=this.options.extensions.renderers[h.type].call({parser:this},h),!1!==b||!["space","hr","heading","code","table","blockquote","list","html","paragraph","text"].includes(h.type)))_+=b||"";else switch(h.type){case"space":continue;case"hr":_+=this.renderer.hr();continue;case"heading":_+=this.renderer.heading(this.parseInline(h.tokens),h.depth,vC(this.parseInline(h.tokens,this.textRenderer)),this.slugger);continue;case"code":_+=this.renderer.code(h.text,h.lang,h.escaped);continue;case"table":for(l="",c="",i=h.header.length,r=0;r<i;r++)c+=this.renderer.tablecell(this.parseInline(h.header[r].tokens),{header:!0,align:h.align[r]});for(l+=this.renderer.tablerow(c),u="",i=h.rows.length,r=0;r<i;r++){for(a=h.rows[r],c="",o=a.length,s=0;s<o;s++)c+=this.renderer.tablecell(this.parseInline(a[s].tokens),{header:!1,align:h.align[s]});u+=this.renderer.tablerow(c)}_+=this.renderer.table(l,u);continue;case"blockquote":u=this.parse(h.tokens),_+=this.renderer.blockquote(u);continue;case"list":for(d=h.ordered,f=h.start,p=h.loose,i=h.items.length,u="",r=0;r<i;r++)m=h.items[r],y=m.checked,v=m.task,g="",m.task&&(w=this.renderer.checkbox(y),p?m.tokens.length>0&&"paragraph"===m.tokens[0].type?(m.tokens[0].text=w+" "+m.tokens[0].text,m.tokens[0].tokens&&m.tokens[0].tokens.length>0&&"text"===m.tokens[0].tokens[0].type&&(m.tokens[0].tokens[0].text=w+" "+m.tokens[0].tokens[0].text)):m.tokens.unshift({type:"text",text:w}):g+=w),g+=this.parse(m.tokens,p),u+=this.renderer.listitem(g,v,y);_+=this.renderer.list(u,d,f);continue;case"html":_+=this.renderer.html(h.text);continue;case"paragraph":_+=this.renderer.paragraph(this.parseInline(h.tokens));continue;case"text":for(u=h.tokens?this.parseInline(h.tokens):h.text;n+1<I&&"text"===e[n+1].type;)h=e[++n],u+="\n"+(h.tokens?this.parseInline(h.tokens):h.text);_+=t?this.renderer.paragraph(u):u;continue;default:{const e='Token with "'+h.type+'" type was not found.';if(this.options.silent)return void console.error(e);throw new Error(e)}}return _}parseInline(e,t){t=t||this.renderer;let n,r,s,i="";const o=e.length;for(n=0;n<o;n++)if(r=e[n],this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[r.type]&&(s=this.options.extensions.renderers[r.type].call({parser:this},r),!1!==s||!["escape","html","link","image","strong","em","codespan","br","del","text"].includes(r.type)))i+=s||"";else switch(r.type){case"escape":case"text":i+=t.text(r.text);break;case"html":i+=t.html(r.text);break;case"link":i+=t.link(r.href,r.title,this.parseInline(r.tokens,t));break;case"image":i+=t.image(r.href,r.title,r.text);break;case"strong":i+=t.strong(this.parseInline(r.tokens,t));break;case"em":i+=t.em(this.parseInline(r.tokens,t));break;case"codespan":i+=t.codespan(r.text);break;case"br":i+=t.br();break;case"del":i+=t.del(this.parseInline(r.tokens,t));break;default:{const e='Token with "'+r.type+'" type was not found.';if(this.options.silent)return void console.error(e);throw new Error(e)}}return i}}function GC(e,t,n){if(null==e)throw new Error("marked(): input parameter is undefined or null");if("string"!=typeof e)throw new Error("marked(): input parameter is of type "+Object.prototype.toString.call(e)+", string expected");if("function"==typeof t&&(n=t,t=null),RC(t=CC({},GC.defaults,t||{})),n){const r=t.highlight;let s;try{s=BC.lex(e,t)}catch(e){return n(e)}const i=function(e){let i;if(!e)try{t.walkTokens&&GC.walkTokens(s,t.walkTokens),i=zC.parse(s,t)}catch(t){e=t}return t.highlight=r,e?n(e):n(null,i)};if(!r||r.length<3)return i();if(delete t.highlight,!s.length)return i();let o=0;return GC.walkTokens(s,(function(e){"code"===e.type&&(o++,setTimeout((()=>{r(e.text,e.lang,(function(t,n){if(t)return i(t);null!=n&&n!==e.text&&(e.text=n,e.escaped=!0),o--,0===o&&i()}))}),0))})),void(0===o&&i())}try{const n=BC.lex(e,t);return t.walkTokens&&GC.walkTokens(n,t.walkTokens),zC.parse(n,t)}catch(e){if(e.message+="\nPlease report this to https://github.com/markedjs/marked.",t.silent)return"<p>An error occurred:</p><pre>"+mC(e.message+"",!0)+"</pre>";throw e}}GC.options=GC.setOptions=function(e){var t;return CC(GC.defaults,e),t=GC.defaults,lC=t,GC},GC.getDefaults=cC,GC.defaults=lC,GC.use=function(...e){const t=CC({},...e),n=GC.defaults.extensions||{renderers:{},childTokens:{}};let r;e.forEach((e=>{if(e.extensions&&(r=!0,e.extensions.forEach((e=>{if(!e.name)throw new Error("extension name required");if(e.renderer){const t=n.renderers?n.renderers[e.name]:null;n.renderers[e.name]=t?function(...n){let r=e.renderer.apply(this,n);return!1===r&&(r=t.apply(this,n)),r}:e.renderer}if(e.tokenizer){if(!e.level||"block"!==e.level&&"inline"!==e.level)throw new Error("extension level must be 'block' or 'inline'");n[e.level]?n[e.level].unshift(e.tokenizer):n[e.level]=[e.tokenizer],e.start&&("block"===e.level?n.startBlock?n.startBlock.push(e.start):n.startBlock=[e.start]:"inline"===e.level&&(n.startInline?n.startInline.push(e.start):n.startInline=[e.start]))}e.childTokens&&(n.childTokens[e.name]=e.childTokens)}))),e.renderer){const n=GC.defaults.renderer||new jC;for(const t in e.renderer){const r=n[t];n[t]=(...s)=>{let i=e.renderer[t].apply(n,s);return!1===i&&(i=r.apply(n,s)),i}}t.renderer=n}if(e.tokenizer){const n=GC.defaults.tokenizer||new LC;for(const t in e.tokenizer){const r=n[t];n[t]=(...s)=>{let i=e.tokenizer[t].apply(n,s);return!1===i&&(i=r.apply(n,s)),i}}t.tokenizer=n}if(e.walkTokens){const n=GC.defaults.walkTokens;t.walkTokens=function(t){e.walkTokens.call(this,t),n&&n.call(this,t)}}r&&(t.extensions=n),GC.setOptions(t)}))},GC.walkTokens=function(e,t){for(const n of e)switch(t.call(GC,n),n.type){case"table":for(const e of n.header)GC.walkTokens(e.tokens,t);for(const e of n.rows)for(const n of e)GC.walkTokens(n.tokens,t);break;case"list":GC.walkTokens(n.items,t);break;default:GC.defaults.extensions&&GC.defaults.extensions.childTokens&&GC.defaults.extensions.childTokens[n.type]?GC.defaults.extensions.childTokens[n.type].forEach((function(e){GC.walkTokens(n[e],t)})):n.tokens&&GC.walkTokens(n.tokens,t)}},GC.parseInline=function(e,t){if(null==e)throw new Error("marked.parseInline(): input parameter is undefined or null");if("string"!=typeof e)throw new Error("marked.parseInline(): input parameter is of type "+Object.prototype.toString.call(e)+", string expected");RC(t=CC({},GC.defaults,t||{}));try{const n=BC.lexInline(e,t);return t.walkTokens&&GC.walkTokens(n,t.walkTokens),zC.parseInline(n,t)}catch(e){if(e.message+="\nPlease report this to https://github.com/markedjs/marked.",t.silent)return"<p>An error occurred:</p><pre>"+mC(e.message+"",!0)+"</pre>";throw e}},GC.Parser=zC,GC.parser=zC.parse,GC.Renderer=jC,GC.TextRenderer=qC,GC.Lexer=BC,GC.lexer=BC.lex,GC.Tokenizer=LC,GC.Slugger=$C,GC.parse=GC,GC.options,GC.setOptions,GC.use,GC.walkTokens,GC.parseInline;const KC=GC;zC.parse,BC.lex;var WC={mixins:[{data:()=>({timeout:""}),methods:{debounce(e,t=1e3){clearTimeout(this.timeout),this.timeout=setTimeout(e,t)}}}],data:()=>({text:""}),methods:{update(e){this.debounce((()=>{this.text=e.target.value}),500)}},computed:{markedText(){return KC(this.text)}},mounted(){this.$refs.markdownTextarea.focus()}};const HC={class:"flex flex-wrap w-full"},QC=Hr("h1",{class:"w-full text-center text-3xl my-4"},"Markdown App",-1),JC={class:"flex m-auto w-10/12 h-screen"},YC={class:"w-1/2 border"},XC=["value"],ZC=["innerHTML"];WC.render=function(e,t,n,r,s,i){return Fr(),jr("div",HC,[QC,Hr("section",JC,[Hr("article",YC,[Hr("textarea",{class:"w-full h-full",value:s.text,onInput:t[0]||(t[0]=(...e)=>i.update&&i.update(...e)),ref:"markdownTextarea"},null,40,XC)]),Hr("article",{class:"w-1/2 border bg-gray-100",innerHTML:i.markedText},null,8,ZC)])])};var eN={data:()=>({currentSlide:1,sliders:["bg-teal-600","bg-blue-600","bg-yellow-600"],interval:"",isTitleShowing:!1}),mounted(){this.interval=setInterval((()=>{console.log("I am changing current slide "+this.currentSlide),this.currentSlide=2===this.currentSlide?0:this.currentSlide+1}),2e3)},unmounted(){clearInterval(this.interval)},methods:{makeActive(e){this.currentSlide=e}},computed:{}};const tN={class:"flex flex-wrap w-full relative"},nN={class:"w-full",style:{height:"340px"}},rN={class:"absolute bottom-0 flex w-full justify-center"},sN=["onClick"];eN.render=function(e,t,n,r,s,i){return Fr(),jr("div",tN,[(Fr(!0),jr(Dr,null,qn(s.sliders,((e,t)=>(Fr(),jr("div",{key:e,class:"absolute w-full"},[Qr(Ls,{name:"fade"},{default:Qt((()=>[s.currentSlide==t?(Fr(),jr("div",{key:0,class:a(e),style:{height:"350px"}},null,2)):Xr("",!0)])),_:2},1024)])))),128)),Hr("div",nN,[Hr("div",rN,[(Fr(!0),jr(Dr,null,qn(s.sliders,((e,t)=>(Fr(),jr("div",{key:e,onClick:e=>i.makeActive(t),class:a([s.currentSlide==t?"bg-gray-700":"bg-gray-300","w-4 h-4 mx-2 rounded-full z-20 cursor-pointer shadow-md"])},null,10,sN)))),128))])])])};var iN={setup(){const e=dt(""),t=["+","-","*","/"],n=["1","2","3","4","5","6","7","8","9","0"],r=dt(""),s=dt(""),i=dt("");function o(e){"="===e||"Enter"===e?a():"c"===e?(r.value="",s.value=""):t.includes(e)?function(e){a(),s.value=r.value,r.value="",i.value=e}(e):n.includes(e)&&function(e){r.value=r.value+e}(e)}function a(){"*"===i.value&&(r.value=s.value*r.value),"/"===i.value&&(r.value=s.value/r.value),"-"===i.value&&(r.value=s.value-r.value),"+"===i.value&&(r.value=+s.value+ +r.value),s.value="",i.value=""}const c=e=>o(e.key);return An((()=>window.addEventListener("keydown",c))),Rn((()=>window.removeEventListener("keydown",c))),{calculation:e,pressed:o,selectedOperation:i,currentNum:r,prevNum:s}}};const oN={class:"flex w-full"},aN={class:"m-auto"},cN=Hr("h1",{class:"text-center text-2xl"},"Calculator",-1),lN={class:"text-3xl text-right mt-10 mb-2 w-40 overflow-x-scroll",style:{direction:"rtl"}},uN={key:0},hN={class:"my-10 grid grid-cols-4 gap-1"};iN.render=function(e,t,n,r,s,i){return Fr(),jr("div",oN,[Hr("div",aN,[cN,Hr("p",lN,c(r.currentNum),1),r.selectedOperation?(Fr(),jr("small",uN,c(r.prevNum)+" "+c(r.selectedOperation)+" "+c(r.currentNum),1)):Xr("",!0),Hr("div",hN,[Hr("button",{onClick:t[0]||(t[0]=e=>r.pressed("1")),class:"p-2 w-10 h-10 border rounded shadow"},"1"),Hr("button",{onClick:t[1]||(t[1]=e=>r.pressed("2")),class:"p-2 w-10 h-10 border rounded shadow"},"2"),Hr("button",{onClick:t[2]||(t[2]=e=>r.pressed("3")),class:"p-2 w-10 h-10 border rounded shadow"},"3"),Hr("button",{onClick:t[3]||(t[3]=e=>r.pressed("+")),class:"p-2 w-10 h-10 border rounded shadow"},"+"),Hr("button",{onClick:t[4]||(t[4]=e=>r.pressed("4")),class:"p-2 w-10 h-10 border rounded shadow"},"4"),Hr("button",{onClick:t[5]||(t[5]=e=>r.pressed("5")),class:"p-2 w-10 h-10 border rounded shadow"},"5"),Hr("button",{onClick:t[6]||(t[6]=e=>r.pressed("6")),class:"p-2 w-10 h-10 border rounded shadow"},"6"),Hr("button",{onClick:t[7]||(t[7]=e=>r.pressed("-")),class:"p-2 w-10 h-10 border rounded shadow"},"-"),Hr("button",{onClick:t[8]||(t[8]=e=>r.pressed("7")),class:"p-2 w-10 h-10 border rounded shadow"},"7"),Hr("button",{onClick:t[9]||(t[9]=e=>r.pressed("8")),class:"p-2 w-10 h-10 border rounded shadow"},"8"),Hr("button",{onClick:t[10]||(t[10]=e=>r.pressed("9")),class:"p-2 w-10 h-10 border rounded shadow"},"9"),Hr("button",{onClick:t[11]||(t[11]=e=>r.pressed("*")),class:"p-2 w-10 h-10 border rounded shadow"},"*"),Hr("button",{onClick:t[12]||(t[12]=e=>r.pressed("c")),class:"p-2 w-10 h-10 border rounded shadow"},"C"),Hr("button",{onClick:t[13]||(t[13]=e=>r.pressed("0")),class:"p-2 w-10 h-10 border rounded shadow"},"0"),Hr("button",{onClick:t[14]||(t[14]=e=>r.pressed("=")),class:"p-2 w-10 h-10 border rounded shadow"},"="),Hr("button",{onClick:t[15]||(t[15]=e=>r.pressed("/")),class:"p-2 w-10 h-10 border rounded shadow"},"/")])])])};var dN={setup:(e,{emit:t})=>({close:function(){t("close")}})};const fN={class:"absolute inset-0"},pN={class:"flex h-full"},gN={class:"z-30 m-auto bg-white p-2 rounded shadow"},mN={class:"border p-2"},yN={class:"text-2xl"},vN={class:"text-xl"};dN.render=function(e,t,n,r,s,i){return Fr(),jr(Dr,null,[Hr("section",{onClick:t[0]||(t[0]=(...e)=>r.close&&r.close(...e)),class:"z-20 h-screen w-screen bg-gray-500 fixed top-0 left-0 opacity-50"}),Hr("div",fN,[Hr("div",pN,[Hr("div",gN,[Hr("div",mN,[Hr("h1",yN,[$n(e.$slots,"title")]),Hr("main",vN,[$n(e.$slots,"body")])])])])])],64)};var wN={components:{ModalComp:dN},setup:()=>({isModalOpen:dt(!1)})};const bN={class:"flex w-full flex-wrap"},_N={class:"m-auto"},IN=Hr("h1",{class:"text-2xl my-5"},"Re-useable Modal",-1),kN=Yr(" Red Modal "),TN=Hr("p",null,"this is body slot",-1),EN=Hr("section",null,"asdf",-1);wN.render=function(e,t,n,r,s,i){const o=Un("ModalComp");return Fr(),jr("section",bN,[Hr("div",_N,[IN,r.isModalOpen?(Fr(),qr(o,{key:0,onClose:t[0]||(t[0]=e=>r.isModalOpen=!1)},{title:Qt((()=>[kN])),body:Qt((()=>[TN,EN])),_:1})):Xr("",!0),Hr("button",{onClick:t[1]||(t[1]=e=>r.isModalOpen=!0),class:"border rounded px-2 mx-4 bg-blue-800 text-white"},"Open Modal")])])};function SN(e,t){Object.keys(e).forEach((function(n){return t(e[n],n)}))}function xN(e,t,n){return t.indexOf(e)<0&&(n&&n.prepend?t.unshift(e):t.push(e)),function(){var n=t.indexOf(e);n>-1&&t.splice(n,1)}}function AN(e,t){e._actions=Object.create(null),e._mutations=Object.create(null),e._wrappedGetters=Object.create(null),e._modulesNamespaceMap=Object.create(null);var n=e.state;NN(e,n,[],e._modules.root,!0),CN(e,n,t)}function CN(e,t,n){var r=e._state;e.getters={},e._makeLocalGettersCache=Object.create(null);var s=e._wrappedGetters,i={};SN(s,(function(t,n){i[n]=function(e,t){return function(){return e(t)}}(t,e),Object.defineProperty(e.getters,n,{get:function(){return i[n]()},enumerable:!0})})),e._state=Xe({data:t}),e.strict&&function(e){rn((function(){return e._state.data}),(function(){}),{deep:!0,flush:"sync"})}(e),r&&n&&e._withCommit((function(){r.data=null}))}function NN(e,t,n,r,s){var i=!n.length,o=e._modules.getNamespace(n);if(r.namespaced&&(e._modulesNamespaceMap[o],e._modulesNamespaceMap[o]=r),!i&&!s){var a=RN(t,n.slice(0,-1)),c=n[n.length-1];e._withCommit((function(){a[c]=r.state}))}var l=r.context=function(e,t,n){var r=""===t,s={dispatch:r?e.dispatch:function(n,r,s){var i=ON(n,r,s),o=i.payload,a=i.options,c=i.type;return a&&a.root||(c=t+c),e.dispatch(c,o)},commit:r?e.commit:function(n,r,s){var i=ON(n,r,s),o=i.payload,a=i.options,c=i.type;a&&a.root||(c=t+c),e.commit(c,o,a)}};return Object.defineProperties(s,{getters:{get:r?function(){return e.getters}:function(){return DN(e,t)}},state:{get:function(){return RN(e.state,n)}}}),s}(e,o,n);r.forEachMutation((function(t,n){!function(e,t,n,r){(e._mutations[t]||(e._mutations[t]=[])).push((function(t){n.call(e,r.state,t)}))}(e,o+n,t,l)})),r.forEachAction((function(t,n){var r=t.root?n:o+n,s=t.handler||t;!function(e,t,n,r){(e._actions[t]||(e._actions[t]=[])).push((function(t){var s,i=n.call(e,{dispatch:r.dispatch,commit:r.commit,getters:r.getters,state:r.state,rootGetters:e.getters,rootState:e.state},t);return(s=i)&&"function"==typeof s.then||(i=Promise.resolve(i)),e._devtoolHook?i.catch((function(t){throw e._devtoolHook.emit("vuex:error",t),t})):i}))}(e,r,s,l)})),r.forEachGetter((function(t,n){!function(e,t,n,r){if(e._wrappedGetters[t])return;e._wrappedGetters[t]=function(e){return n(r.state,r.getters,e.state,e.getters)}}(e,o+n,t,l)})),r.forEachChild((function(r,i){NN(e,t,n.concat(i),r,s)}))}function DN(e,t){if(!e._makeLocalGettersCache[t]){var n={},r=t.length;Object.keys(e.getters).forEach((function(s){if(s.slice(0,r)===t){var i=s.slice(r);Object.defineProperty(n,i,{get:function(){return e.getters[s]},enumerable:!0})}})),e._makeLocalGettersCache[t]=n}return e._makeLocalGettersCache[t]}function RN(e,t){return t.reduce((function(e,t){return e[t]}),e)}function ON(e,t,n){var r;return null!==(r=e)&&"object"==typeof r&&e.type&&(n=t,t=e,e=e.type),{type:e,payload:t,options:n}}var PN=0;function LN(e,t){vx({id:"org.vuejs.vuex",app:e,label:"Vuex",homepage:"https://next.vuex.vuejs.org/",logo:"https://vuejs.org/images/icons/favicon-96x96.png",packageName:"vuex",componentStateTypes:["vuex bindings"]},(function(n){n.addTimelineLayer({id:"vuex:mutations",label:"Vuex Mutations",color:MN}),n.addTimelineLayer({id:"vuex:actions",label:"Vuex Actions",color:MN}),n.addInspector({id:"vuex",label:"Vuex",icon:"storage",treeFilterPlaceholder:"Filter stores..."}),n.on.getInspectorTree((function(n){if(n.app===e&&"vuex"===n.inspectorId)if(n.filter){var r=[];BN(r,t._modules.root,n.filter,""),n.rootNodes=r}else n.rootNodes=[UN(t._modules.root,"")]})),n.on.getInspectorState((function(n){if(n.app===e&&"vuex"===n.inspectorId){var r=n.nodeId;DN(t,r),n.state=function(e,t,n){t="root"===n?t:t[n];var r=Object.keys(t),s={state:Object.keys(e.state).map((function(t){return{key:t,editable:!0,value:e.state[t]}}))};if(r.length){var i=function(e){var t={};return Object.keys(e).forEach((function(n){var r=n.split("/");if(r.length>1){var s=t,i=r.pop();r.forEach((function(e){s[e]||(s[e]={_custom:{value:{},display:e,tooltip:"Module",abstract:!0}}),s=s[e]._custom.value})),s[i]=jN((function(){return e[n]}))}else t[n]=jN((function(){return e[n]}))})),t}(t);s.getters=Object.keys(i).map((function(e){return{key:e.endsWith("/")?VN(e):e,editable:!1,value:jN((function(){return i[e]}))}}))}return s}((s=t._modules,(o=(i=r).split("/").filter((function(e){return e}))).reduce((function(e,t,n){var r=e[t];if(!r)throw new Error('Missing module "'+t+'" for path "'+i+'".');return n===o.length-1?r:r._children}),"root"===i?s:s.root._children)),"root"===r?t.getters:t._makeLocalGettersCache,r)}var s,i,o})),n.on.editInspectorState((function(n){if(n.app===e&&"vuex"===n.inspectorId){var r=n.nodeId,s=n.path;"root"!==r&&(s=r.split("/").filter(Boolean).concat(s)),t._withCommit((function(){n.set(t._state.data,s,n.state.value)}))}})),t.subscribe((function(e,t){var r={};e.payload&&(r.payload=e.payload),r.state=t,n.notifyComponentUpdate(),n.sendInspectorTree("vuex"),n.sendInspectorState("vuex"),n.addTimelineEvent({layerId:"vuex:mutations",event:{time:Date.now(),title:e.type,data:r}})})),t.subscribeAction({before:function(e,t){var r={};e.payload&&(r.payload=e.payload),e._id=PN++,e._time=Date.now(),r.state=t,n.addTimelineEvent({layerId:"vuex:actions",event:{time:e._time,title:e.type,groupId:e._id,subtitle:"start",data:r}})},after:function(e,t){var r={},s=Date.now()-e._time;r.duration={_custom:{type:"duration",display:s+"ms",tooltip:"Action duration",value:s}},e.payload&&(r.payload=e.payload),r.state=t,n.addTimelineEvent({layerId:"vuex:actions",event:{time:Date.now(),title:e.type,groupId:e._id,subtitle:"end",data:r}})}})}))}var MN=8702998,FN={label:"namespaced",textColor:16777215,backgroundColor:6710886};function VN(e){return e&&"root"!==e?e.split("/").slice(-2,-1)[0]:"Root"}function UN(e,t){return{id:t||"root",label:VN(t),tags:e.namespaced?[FN]:[],children:Object.keys(e._children).map((function(n){return UN(e._children[n],t+n+"/")}))}}function BN(e,t,n,r){r.includes(n)&&e.push({id:r||"root",label:r.endsWith("/")?r.slice(0,r.length-1):r||"Root",tags:t.namespaced?[FN]:[]}),Object.keys(t._children).forEach((function(s){BN(e,t._children[s],n,r+s+"/")}))}function jN(e){try{return e()}catch(e){return e}}var qN=function(e,t){this.runtime=t,this._children=Object.create(null),this._rawModule=e;var n=e.state;this.state=("function"==typeof n?n():n)||{}},$N={namespaced:{configurable:!0}};$N.namespaced.get=function(){return!!this._rawModule.namespaced},qN.prototype.addChild=function(e,t){this._children[e]=t},qN.prototype.removeChild=function(e){delete this._children[e]},qN.prototype.getChild=function(e){return this._children[e]},qN.prototype.hasChild=function(e){return e in this._children},qN.prototype.update=function(e){this._rawModule.namespaced=e.namespaced,e.actions&&(this._rawModule.actions=e.actions),e.mutations&&(this._rawModule.mutations=e.mutations),e.getters&&(this._rawModule.getters=e.getters)},qN.prototype.forEachChild=function(e){SN(this._children,e)},qN.prototype.forEachGetter=function(e){this._rawModule.getters&&SN(this._rawModule.getters,e)},qN.prototype.forEachAction=function(e){this._rawModule.actions&&SN(this._rawModule.actions,e)},qN.prototype.forEachMutation=function(e){this._rawModule.mutations&&SN(this._rawModule.mutations,e)},Object.defineProperties(qN.prototype,$N);var zN=function(e){this.register([],e,!1)};function GN(e,t,n){if(t.update(n),n.modules)for(var r in n.modules){if(!t.getChild(r))return;GN(e.concat(r),t.getChild(r),n.modules[r])}}zN.prototype.get=function(e){return e.reduce((function(e,t){return e.getChild(t)}),this.root)},zN.prototype.getNamespace=function(e){var t=this.root;return e.reduce((function(e,n){return e+((t=t.getChild(n)).namespaced?n+"/":"")}),"")},zN.prototype.update=function(e){GN([],this.root,e)},zN.prototype.register=function(e,t,n){var r=this;void 0===n&&(n=!0);var s=new qN(t,n);0===e.length?this.root=s:this.get(e.slice(0,-1)).addChild(e[e.length-1],s);t.modules&&SN(t.modules,(function(t,s){r.register(e.concat(s),t,n)}))},zN.prototype.unregister=function(e){var t=this.get(e.slice(0,-1)),n=e[e.length-1],r=t.getChild(n);r&&r.runtime&&t.removeChild(n)},zN.prototype.isRegistered=function(e){var t=this.get(e.slice(0,-1)),n=e[e.length-1];return!!t&&t.hasChild(n)};var KN=function(e){var t=this;void 0===e&&(e={});var n=e.plugins;void 0===n&&(n=[]);var r=e.strict;void 0===r&&(r=!1);var s=e.devtools;this._committing=!1,this._actions=Object.create(null),this._actionSubscribers=[],this._mutations=Object.create(null),this._wrappedGetters=Object.create(null),this._modules=new zN(e),this._modulesNamespaceMap=Object.create(null),this._subscribers=[],this._makeLocalGettersCache=Object.create(null),this._devtools=s;var i=this,o=this.dispatch,a=this.commit;this.dispatch=function(e,t){return o.call(i,e,t)},this.commit=function(e,t,n){return a.call(i,e,t,n)},this.strict=r;var c=this._modules.root.state;NN(this,c,[],this._modules.root),CN(this,c),n.forEach((function(e){return e(t)}))},WN={state:{configurable:!0}};KN.prototype.install=function(e,t){e.provide(t||"store",this),e.config.globalProperties.$store=this,void 0!==this._devtools&&this._devtools&&LN(e,this)},WN.state.get=function(){return this._state.data},WN.state.set=function(e){},KN.prototype.commit=function(e,t,n){var r=this,s=ON(e,t,n),i=s.type,o=s.payload,a={type:i,payload:o},c=this._mutations[i];c&&(this._withCommit((function(){c.forEach((function(e){e(o)}))})),this._subscribers.slice().forEach((function(e){return e(a,r.state)})))},KN.prototype.dispatch=function(e,t){var n=this,r=ON(e,t),s=r.type,i=r.payload,o={type:s,payload:i},a=this._actions[s];if(a){try{this._actionSubscribers.slice().filter((function(e){return e.before})).forEach((function(e){return e.before(o,n.state)}))}catch(e){}var c=a.length>1?Promise.all(a.map((function(e){return e(i)}))):a[0](i);return new Promise((function(e,t){c.then((function(t){try{n._actionSubscribers.filter((function(e){return e.after})).forEach((function(e){return e.after(o,n.state)}))}catch(e){}e(t)}),(function(e){try{n._actionSubscribers.filter((function(e){return e.error})).forEach((function(t){return t.error(o,n.state,e)}))}catch(e){}t(e)}))}))}},KN.prototype.subscribe=function(e,t){return xN(e,this._subscribers,t)},KN.prototype.subscribeAction=function(e,t){return xN("function"==typeof e?{before:e}:e,this._actionSubscribers,t)},KN.prototype.watch=function(e,t,n){var r=this;return rn((function(){return e(r.state,r.getters)}),t,Object.assign({},n))},KN.prototype.replaceState=function(e){var t=this;this._withCommit((function(){t._state.data=e}))},KN.prototype.registerModule=function(e,t,n){void 0===n&&(n={}),"string"==typeof e&&(e=[e]),this._modules.register(e,t),NN(this,this.state,e,this._modules.get(e),n.preserveState),CN(this,this.state)},KN.prototype.unregisterModule=function(e){var t=this;"string"==typeof e&&(e=[e]),this._modules.unregister(e),this._withCommit((function(){delete RN(t.state,e.slice(0,-1))[e[e.length-1]]})),AN(this)},KN.prototype.hasModule=function(e){return"string"==typeof e&&(e=[e]),this._modules.isRegistered(e)},KN.prototype.hotUpdate=function(e){this._modules.update(e),AN(this,!0)},KN.prototype._withCommit=function(e){var t=this._committing;this._committing=!0,e(),this._committing=t},Object.defineProperties(KN.prototype,WN);const HN=new KN({state:()=>({isLoggedIn:!1,authUser:{}}),mutations:{setIsLoggedIn(e,t){e.isLoggedIn=t},setAuthUser(e,t){e.authUser=t}}});const QN=[{path:"/",component:YA},{path:"/dc-heroes",component:eC},{path:"/calendar",component:iC},{path:"/marked",component:WC},{path:"/slider",component:eN},{path:"/calculator",component:iN},{path:"/reuseable-modal",component:wN,beforeEnter:(e,t,n)=>{HN.state.isLoggedIn?n():n("/")}}],JN=function(e){const t=dA(e.routes,e),n=e.parseQuery||MA,r=e.stringifyQuery||FA,s=e.history,i=UA(),o=UA(),a=UA(),c=ft(Xx,!0);let l=Xx;Sx&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=Ax.bind(null,(e=>""+e)),h=Ax.bind(null,PA),d=Ax.bind(null,LA);function f(e,i){if(i=xx({},i||c.value),"string"==typeof e){const r=Dx(n,e,i.path),o=t.resolve({path:r.path},i),a=s.createHref(r.fullPath);return xx(r,o,{params:d(o.params),hash:LA(r.hash),redirectedFrom:void 0,href:a})}let o;if("path"in e)o=xx({},e,{path:Dx(n,e.path,i.path).path});else{const t=xx({},e.params);for(const e in t)null==t[e]&&delete t[e];o=xx({},e,{params:h(e.params)}),i.params=h(i.params)}const a=t.resolve(o,i),l=e.hash||"";a.params=u(d(a.params));const f=function(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}(r,xx({},e,{hash:(p=l,RA(p).replace(AA,"{").replace(NA,"}").replace(SA,"^")),path:a.path}));var p;const g=s.createHref(f);return xx({fullPath:f,hash:l,query:r===FA?VA(e.query):e.query||{}},a,{redirectedFrom:void 0,href:g})}function p(e){return"string"==typeof e?Dx(n,e,c.value.path):xx({},e)}function g(e,t){if(l!==e)return nA(8,{from:t,to:e})}function m(e){return v(e)}function y(e){const t=e.matched[e.matched.length-1];if(t&&t.redirect){const{redirect:n}=t;let r="function"==typeof n?n(e):n;return"string"==typeof r&&(r=r.includes("?")||r.includes("#")?r=p(r):{path:r},r.params={}),xx({query:e.query,hash:e.hash,params:e.params},r)}}function v(e,t){const n=l=f(e),s=c.value,i=e.state,o=e.force,a=!0===e.replace,u=y(n);if(u)return v(xx(p(u),{state:i,force:o,replace:a}),t||n);const h=n;let d;return h.redirectedFrom=t,!o&&function(e,t,n){const r=t.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&Ox(t.matched[r],n.matched[s])&&Px(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}(r,s,n)&&(d=nA(16,{to:h,from:s}),N(s,s,!0,!1)),(d?Promise.resolve(d):b(h,s)).catch((e=>rA(e)?rA(e,2)?e:C(e):A(e,h,s))).then((e=>{if(e){if(rA(e,2))return v(xx(p(e.to),{state:i,force:o,replace:a}),t||h)}else e=I(h,s,!0,a,i);return _(h,s,e),e}))}function w(e,t){const n=g(e,t);return n?Promise.reject(n):Promise.resolve()}function b(e,t){let n;const[r,s,a]=function(e,t){const n=[],r=[],s=[],i=Math.max(t.matched.length,e.matched.length);for(let o=0;o<i;o++){const i=t.matched[o];i&&(e.matched.find((e=>Ox(e,i)))?r.push(i):n.push(i));const a=e.matched[o];a&&(t.matched.find((e=>Ox(e,a)))||s.push(a))}return[n,r,s]}(e,t);n=jA(r.reverse(),"beforeRouteLeave",e,t);for(const s of r)s.leaveGuards.forEach((r=>{n.push(BA(r,e,t))}));const c=w.bind(null,e,t);return n.push(c),JA(n).then((()=>{n=[];for(const r of i.list())n.push(BA(r,e,t));return n.push(c),JA(n)})).then((()=>{n=jA(s,"beforeRouteUpdate",e,t);for(const r of s)r.updateGuards.forEach((r=>{n.push(BA(r,e,t))}));return n.push(c),JA(n)})).then((()=>{n=[];for(const r of e.matched)if(r.beforeEnter&&!t.matched.includes(r))if(Array.isArray(r.beforeEnter))for(const s of r.beforeEnter)n.push(BA(s,e,t));else n.push(BA(r.beforeEnter,e,t));return n.push(c),JA(n)})).then((()=>(e.matched.forEach((e=>e.enterCallbacks={})),n=jA(a,"beforeRouteEnter",e,t),n.push(c),JA(n)))).then((()=>{n=[];for(const r of o.list())n.push(BA(r,e,t));return n.push(c),JA(n)})).catch((e=>rA(e,8)?e:Promise.reject(e)))}function _(e,t,n){for(const r of a.list())r(e,t,n)}function I(e,t,n,r,i){const o=g(e,t);if(o)return o;const a=t===Xx,l=Sx?history.state:{};n&&(r||a?s.replace(e.fullPath,xx({scroll:a&&l&&l.scroll},i)):s.push(e.fullPath,i)),c.value=e,N(e,t,n,a),C()}let k;function T(){k||(k=s.listen(((e,t,n)=>{const r=f(e),i=y(r);if(i)return void v(xx(i,{replace:!0}),r).catch(Cx);l=r;const o=c.value;var a,u;Sx&&(a=Kx(o.fullPath,n.delta),u=zx(),Wx.set(a,u)),b(r,o).catch((e=>rA(e,12)?e:rA(e,2)?(v(e.to,r).then((e=>{rA(e,20)&&!n.delta&&n.type===Fx.pop&&s.go(-1,!1)})).catch(Cx),Promise.reject()):(n.delta&&s.go(-n.delta,!1),A(e,r,o)))).then((e=>{(e=e||I(r,o,!1))&&(n.delta?s.go(-n.delta,!1):n.type===Fx.pop&&rA(e,20)&&s.go(-1,!1)),_(r,o,e)})).catch(Cx)})))}let E,S=UA(),x=UA();function A(e,t,n){C(e);const r=x.list();return r.length?r.forEach((r=>r(e,t,n))):console.error(e),Promise.reject(e)}function C(e){return E||(E=!e,T(),S.list().forEach((([t,n])=>e?n(e):t())),S.reset()),e}function N(t,n,r,s){const{scrollBehavior:i}=e;if(!Sx||!i)return Promise.resolve();const o=!r&&function(e){const t=Wx.get(e);return Wx.delete(e),t}(Kx(t.fullPath,0))||(s||!r)&&history.state&&history.state.scroll||null;return Lt().then((()=>i(t,n,o))).then((e=>e&&Gx(e))).catch((e=>A(e,t,n)))}const D=e=>s.go(e);let R;const O=new Set;return{currentRoute:c,addRoute:function(e,n){let r,s;return Yx(e)?(r=t.getRecordMatcher(e),s=n):s=e,t.addRoute(s,r)},removeRoute:function(e){const n=t.getRecordMatcher(e);n&&t.removeRoute(n)},hasRoute:function(e){return!!t.getRecordMatcher(e)},getRoutes:function(){return t.getRoutes().map((e=>e.record))},resolve:f,options:e,push:m,replace:function(e){return m(xx(p(e),{replace:!0}))},go:D,back:()=>D(-1),forward:()=>D(1),beforeEach:i.add,beforeResolve:o.add,afterEach:a.add,onError:x.add,isReady:function(){return E&&c.value!==Xx?Promise.resolve():new Promise(((e,t)=>{S.add([e,t])}))},install(e){e.component("RouterLink",zA),e.component("RouterView",QA),e.config.globalProperties.$router=this,Object.defineProperty(e.config.globalProperties,"$route",{enumerable:!0,get:()=>gt(c)}),Sx&&!R&&c.value===Xx&&(R=!0,m(s.location).catch((e=>{})));const t={};for(const e in Xx)t[e]=ps((()=>c.value[e]));e.provide(kx,this),e.provide(Tx,Xe(t)),e.provide(Ex,c);const n=e.unmount;O.add(e),e.unmount=function(){O.delete(e),O.size<1&&(l=Xx,k&&k(),k=null,c.value=Xx,R=!1,E=!1),n()}}}}({history:function(e){const t=Jx(e=jx(e)),n=function(e,t,n,r){let s=[],i=[],o=null;const a=({state:i})=>{const a=Hx(e,location),c=n.value,l=t.value;let u=0;if(i){if(n.value=a,t.value=i,o&&o===c)return void(o=null);u=l?i.position-l.position:0}else r(a);s.forEach((e=>{e(n.value,c,{delta:u,type:Fx.pop,direction:u?u>0?Ux.forward:Ux.back:Ux.unknown})}))};function c(){const{history:e}=window;e.state&&e.replaceState(xx({},e.state,{scroll:zx()}),"")}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",c),{pauseListeners:function(){o=n.value},listen:function(e){s.push(e);const t=()=>{const t=s.indexOf(e);t>-1&&s.splice(t,1)};return i.push(t),t},destroy:function(){for(const e of i)e();i=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",c)}}}(e,t.state,t.location,t.replace),r=xx({location:"",base:e,go:function(e,t=!0){t||n.pauseListeners(),history.go(e)},createHref:$x.bind(null,e)},t,n);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>t.state.value}),r}(),routes:QN}),YN=((...e)=>{const t=(ei||(ei=kr(Zs))).createApp(...e),{mount:n}=t;return t.mount=e=>{const r=function(e){if(E(e)){return document.querySelector(e)}return e}(e);if(!r)return;const s=t._component;T(s)||s.render||s.template||(s.template=r.innerHTML),r.innerHTML="";const i=n(r,!1,r instanceof SVGElement);return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),i},t})(ux);YN.use(JN),YN.use(HN),YN.mount("#app");
