var E=Object.defineProperty;var C=(e,t,n)=>t in e?E(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var p=(e,t,n)=>C(e,typeof t!="symbol"?t+"":t,n);import{r as m,n as y,f as w,h as T,i as A,j,k as N,l as B,m as D,p as b,q as H,v as I,w as P}from"./scheduler.BvLojk_z.js";let $=!1;function q(){$=!0}function M(){$=!1}function O(e,t,n,r){for(;e<t;){const i=e+(t-e>>1);n(i)<=r?e=i+1:t=i}return e}function R(e){if(e.hydrate_init)return;e.hydrate_init=!0;let t=e.childNodes;if(e.nodeName==="HEAD"){const s=[];for(let l=0;l<t.length;l++){const o=t[l];o.claim_order!==void 0&&s.push(o)}t=s}const n=new Int32Array(t.length+1),r=new Int32Array(t.length);n[0]=-1;let i=0;for(let s=0;s<t.length;s++){const l=t[s].claim_order,o=(i>0&&t[n[i]].claim_order<=l?i+1:O(1,i,_=>t[n[_]].claim_order,l))-1;r[s]=n[o]+1;const u=o+1;n[u]=s,i=Math.max(u,i)}const f=[],a=[];let c=t.length-1;for(let s=n[i]+1;s!=0;s=r[s-1]){for(f.push(t[s-1]);c>=s;c--)a.push(t[c]);c--}for(;c>=0;c--)a.push(t[c]);f.reverse(),a.sort((s,l)=>s.claim_order-l.claim_order);for(let s=0,l=0;s<a.length;s++){for(;l<f.length&&a[s].claim_order>=f[l].claim_order;)l++;const o=l<f.length?f[l]:null;e.insertBefore(a[s],o)}}function z(e,t){if($){for(R(e),(e.actual_end_child===void 0||e.actual_end_child!==null&&e.actual_end_child.parentNode!==e)&&(e.actual_end_child=e.firstChild);e.actual_end_child!==null&&e.actual_end_child.claim_order===void 0;)e.actual_end_child=e.actual_end_child.nextSibling;t!==e.actual_end_child?(t.claim_order!==void 0||t.parentNode!==e)&&e.insertBefore(t,e.actual_end_child):e.actual_end_child=t.nextSibling}else(t.parentNode!==e||t.nextSibling!==null)&&e.appendChild(t)}function ee(e,t,n){$&&!n?z(e,t):(t.parentNode!==e||t.nextSibling!=n)&&e.insertBefore(t,n||null)}function L(e){e.parentNode&&e.parentNode.removeChild(e)}function te(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function U(e){return document.createElement(e)}function x(e){return document.createTextNode(e)}function ne(){return x(" ")}function ie(){return x("")}function re(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function se(e){return e.dataset.svelteH}function V(e){return Array.from(e.childNodes)}function W(e){e.claim_info===void 0&&(e.claim_info={last_index:0,total_claimed:0})}function S(e,t,n,r,i=!1){W(e);const f=(()=>{for(let a=e.claim_info.last_index;a<e.length;a++){const c=e[a];if(t(c)){const s=n(c);return s===void 0?e.splice(a,1):e[a]=s,i||(e.claim_info.last_index=a),c}}for(let a=e.claim_info.last_index-1;a>=0;a--){const c=e[a];if(t(c)){const s=n(c);return s===void 0?e.splice(a,1):e[a]=s,i?s===void 0&&e.claim_info.last_index--:e.claim_info.last_index=a,c}}return r()})();return f.claim_order=e.claim_info.total_claimed,e.claim_info.total_claimed+=1,f}function F(e,t,n,r){return S(e,i=>i.nodeName===t,i=>{const f=[];for(let a=0;a<i.attributes.length;a++){const c=i.attributes[a];n[c.name]||f.push(c.name)}f.forEach(a=>i.removeAttribute(a))},()=>r(t))}function le(e,t,n){return F(e,t,n,U)}function G(e,t){return S(e,n=>n.nodeType===3,n=>{const r=""+t;if(n.data.startsWith(r)){if(n.data.length!==r.length)return n.splitText(r.length)}else n.data=r},()=>x(t),!0)}function ae(e){return G(e," ")}function fe(e,t){t=""+t,e.data!==t&&(e.data=t)}function ce(e,t,n,r){n==null?e.style.removeProperty(t):e.style.setProperty(t,n,"")}function ue(e,t){const n=[];let r=0;for(const i of t.childNodes)if(i.nodeType===8){const f=i.textContent.trim();f===`HEAD_${e}_END`?(r-=1,n.push(i)):f===`HEAD_${e}_START`&&(r+=1,n.push(i))}else r>0&&n.push(i);return n}function oe(e,t){return new e(t)}const h=new Set;let d;function de(){d={r:0,c:[],p:d}}function _e(){d.r||m(d.c),d=d.p}function J(e,t){e&&e.i&&(h.delete(e),e.i(t))}function he(e,t,n,r){if(e&&e.o){if(h.has(e))return;h.add(e),d.c.push(()=>{h.delete(e),r&&(n&&e.d(1),r())}),e.o(t)}else r&&r()}function me(e){e&&e.c()}function $e(e,t){e&&e.l(t)}function K(e,t,n){const{fragment:r,after_update:i}=e.$$;r&&r.m(t,n),N(()=>{const f=e.$$.on_mount.map(H).filter(A);e.$$.on_destroy?e.$$.on_destroy.push(...f):m(f),e.$$.on_mount=[]}),i.forEach(N)}function Q(e,t){const n=e.$$;n.fragment!==null&&(B(n.after_update),m(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function X(e,t){e.$$.dirty[0]===-1&&(I.push(e),P(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function pe(e,t,n,r,i,f,a=null,c=[-1]){const s=D;b(e);const l=e.$$={fragment:null,ctx:[],props:f,update:y,not_equal:i,bound:w(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(s?s.$$.context:[])),callbacks:w(),dirty:c,skip_bound:!1,root:t.target||s.$$.root};a&&a(l.root);let o=!1;if(l.ctx=n?n(e,t.props||{},(u,_,...g)=>{const v=g.length?g[0]:_;return l.ctx&&i(l.ctx[u],l.ctx[u]=v)&&(!l.skip_bound&&l.bound[u]&&l.bound[u](v),o&&X(e,u)),_}):[],l.update(),o=!0,m(l.before_update),l.fragment=r?r(l.ctx):!1,t.target){if(t.hydrate){q();const u=V(t.target);l.fragment&&l.fragment.l(u),u.forEach(L)}else l.fragment&&l.fragment.c();t.intro&&J(e.$$.fragment),K(e,t.target,t.anchor),M(),T()}b(s)}class ye{constructor(){p(this,"$$");p(this,"$$set")}$destroy(){Q(this,1),this.$destroy=y}$on(t,n){if(!A(n))return y;const r=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return r.push(n),()=>{const i=r.indexOf(n);i!==-1&&r.splice(i,1)}}$set(t){this.$$set&&!j(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const Y="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(Y);export{te as A,ye as S,ae as a,re as b,le as c,L as d,U as e,z as f,ee as g,ue as h,pe as i,he as j,se as k,x as l,V as m,G as n,fe as o,ie as p,_e as q,ce as r,ne as s,J as t,de as u,oe as v,me as w,$e as x,K as y,Q as z};
