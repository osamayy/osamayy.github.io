import{P as f,i as c,Q as l,R as d,C as i,S as v,T as m,U as h,V as p,W as M}from"./entry.D5Fm9Nbe.js";function H(s,t={}){const e=t.head||f();if(e)return e.ssr?e.push(s,t):U(e,s,t)}function U(s,t,e={}){const n=c(!1),r=c({});l(()=>{r.value=n.value?{}:h(t)});const a=s.push(r.value,e);return d(r,o=>{a.patch(o)}),p()&&(i(()=>{a.dispose()}),v(()=>{n.value=!0}),m(()=>{n.value=!1})),a}function _(s,t){const{title:e,titleTemplate:n,...r}=s;return H({title:e,titleTemplate:n,_flatMeta:r},{...t,transform(a){const u=M({...a._flatMeta});return delete a._flatMeta,{...a,meta:u}}})}export{H as a,_ as u};
