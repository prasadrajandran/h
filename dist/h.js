const m="data-FHF7Sj5kD1S",d=s=>`${m}="${s}"`,u=s=>`<i ${d(s)}></i>`,A=(s,i)=>{const a=new Map,g=document.createElement("template"),e=s.length-1;return g.innerHTML=s.reduce((o,l,t)=>{const n=`${o}${l}`,r=i[t],c=typeof r,p=r&&(r.constructor===Object||Object.getPrototypeOf(r)===null);if(t===e)return n;if(c==="string"||c==="number"||c==="boolean")return`${n}${r}`;if(r instanceof Node)return a.set(t,r),`${n}${u(t)}`;if(p)return a.set(t,r),`${n}${d(t)}`;throw new Error(`Invalid template argument at position ${t} (zero-based numbering)`)},"").trim(),{taggedTemplate:g,taggedArgs:a}},b=({taggedTemplate:s,taggedArgs:i})=>{const a=s.content.cloneNode(!0),g=new Set;if(a.querySelectorAll(`[${m}]`).forEach(e=>{const o=Number(e.getAttribute(m)),l=i.get(o);g.add(o),l instanceof Node?e.replaceWith(l):(e.removeAttribute(m),Object.entries(l).forEach(([t,n])=>{switch(t){case"$ref":n(e);break;case"style":Object.entries(n).forEach(([r,c])=>{e.style[r]=c});break;case"dataset":Object.entries(n).forEach(([r,c])=>{e.dataset[r]=c});break;default:typeof n=="string"&&!(t in e)?e.setAttribute(t,n):e[t]=n}}))}),g.size!==i.size){const e=[];for(const l of i.keys())g.has(l)||e.push(l);const o=e.length>1?"s":"";throw new Error(`Unexpected template argument${o} at position${o} ${""+o?`[${e.join(", ")}]`:e[0]} (zero-based numbering)`)}return a.childNodes.length===1?a.childNodes[0]:a},f=(s,...i)=>b(A(s,i));export{f as h};
//# sourceMappingURL=h.js.map
