"use client";
import Image from "next/image";
import { ArrowLeft,ArrowRight } from "lucide-react";
import { useState } from "react";

export function WorkGallery({images,alt}:{images:readonly string[],alt:string}){
  const [active,setActive]=useState(0); const next=(delta:number)=>setActive(index=>(index+delta+images.length)%images.length);
  const visible=[0,1,2].map(offset=>(active+offset)%images.length);
  return <div className="work-gallery"><div className="gallery-controls"><span>{String(active+1).padStart(2,"0")} / {images.length}</span><button onClick={()=>next(-1)} aria-label="Eelmine foto"><ArrowLeft/></button><button onClick={()=>next(1)} aria-label="Järgmine foto"><ArrowRight/></button></div><div className="gallery-grid">{visible.map((index,position)=><figure className={position===0?"featured":""} key={`${index}-${position}`}><Image src={`/assets/works/${images[index]}`} alt={`${alt} ${index+1}`} fill sizes={position===0?"(max-width: 800px) 100vw, 60vw":"(max-width: 800px) 50vw, 20vw"}/></figure>)}</div></div>;
}
