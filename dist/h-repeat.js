const p=({container:n,items:i,element:s,ref:M,opts:T={}})=>{const a=T.keyAttrName||"data-h-repeat-key",k=e=>e instanceof Map||e instanceof Set?e:Object.entries(e),m=T.key||(({key:e})=>e),c=new Set;let E=0;for(const[e,l]of k(i)){const r=m({key:e,item:l,index:E});c.add(r);let t=n.querySelector(`[${a}="${r}"]`);t||(t=s({key:e,item:l,index:E}),t.setAttribute(a,r),n.append(t)),M&&t&&M({key:e,item:l,index:E,element:t}),E++}n.querySelectorAll(`[${a}]`).forEach(e=>{c.has(e.getAttribute(a))||e.remove()})};export{p as hRepeat};
//# sourceMappingURL=h-repeat.js.map
