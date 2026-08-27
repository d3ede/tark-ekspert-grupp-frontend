"use client";
import Image from "next/image";
import { ArrowLeft,ArrowRight } from "lucide-react";
import { useCallback,useEffect,useRef,useState } from "react";

export function WorkGallery({images,alt}:{images:readonly string[],alt:string}){
  const [active,setActive]=useState(0);
  const [paused,setPaused]=useState(false);
  const [direction,setDirection]=useState<-1|0|1>(0);
  const touchStart=useRef<number|null>(null);
  const move=useCallback((delta:number)=>setDirection(current=>current===0?(delta<0?-1:1):current),[]);
  useEffect(()=>{if(paused||window.matchMedia("(prefers-reduced-motion: reduce)").matches)return;const timer=window.setInterval(()=>move(1),6000);return()=>window.clearInterval(timer)},[move,paused]);
  const visible=[-2,-1,0,1,2].map(offset=>({offset,index:(active+offset+images.length)%images.length}));
  const finishSwipe=(clientX:number)=>{if(touchStart.current!==null&&Math.abs(clientX-touchStart.current)>45)move(clientX<touchStart.current?1:-1);touchStart.current=null};
  const finishMove=()=>{if(direction===0)return;setActive(index=>(index+direction+images.length)%images.length);setDirection(0)};
  const trackClass=direction===1?"gallery-track is-next":direction===-1?"gallery-track is-previous":"gallery-track";
  return <div className="work-gallery" onMouseEnter={()=>setPaused(true)} onMouseLeave={()=>setPaused(false)} onFocus={()=>setPaused(true)} onBlur={()=>setPaused(false)}><div className="gallery-controls"><span>{String((active+direction+images.length)%images.length+1).padStart(2,"0")} / {images.length}</span><button type="button" disabled={direction!==0} onClick={()=>move(-1)} aria-label="Eelmine foto"><ArrowLeft/></button><button type="button" disabled={direction!==0} onClick={()=>move(1)} aria-label="Järgmine foto"><ArrowRight/></button></div><div className="gallery-stage" aria-live="polite" onTouchStart={event=>{touchStart.current=event.touches[0]?.clientX??null}} onTouchEnd={event=>finishSwipe(event.changedTouches[0]?.clientX??0)}><div className={trackClass} onTransitionEnd={event=>{if(event.target===event.currentTarget&&event.propertyName==="transform")finishMove()}}>{visible.map(({index,offset})=><figure className={offset===direction?"gallery-slide is-active":"gallery-slide"} key={index}><Image src={`/assets/works/${images[index]}`} alt={`${alt} ${index+1}`} fill loading={Math.abs(offset)<=1?"eager":"lazy"} fetchPriority={offset===direction?"high":"auto"} sizes="(max-width: 700px) 76vw, 62vw"/></figure>)}</div></div></div>;
}
