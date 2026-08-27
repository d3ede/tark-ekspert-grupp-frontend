"use client";
import { MoveRight } from "lucide-react";
import { useEffect,useState } from "react";
import type { getContent } from "@/lib/site-content";

type Copy=ReturnType<typeof getContent>;
const initialChallenge:[number,number]=[7,6];
function createChallenge():[number,number]{return [Math.floor(Math.random()*9)+1,Math.floor(Math.random()*9)+1]}

export function ContactForm({copy}:{copy:Copy}){
  const [numbers,setNumbers]=useState(initialChallenge);
  useEffect(()=>{const timer=window.setTimeout(()=>setNumbers(createChallenge()),0);return ()=>window.clearTimeout(timer)},[]);
  return <form className="contact-form" action={copy.endpoint} method="post">
    <h3>{copy.formTitle}</h3>
    <div className="field-row"><label>{copy.name}<input name="name" autoComplete="name" required/></label><label>{copy.phoneLabel}<input name="phone" type="tel" autoComplete="tel" required/></label></div>
    <div className="field-row"><label>{copy.emailLabel}<input name="email" type="email" autoComplete="email"/></label><label>{copy.location}<input name="location" autoComplete="street-address"/></label></div>
    <label>{copy.message}<textarea name="message" rows={5} required/></label>
    <input className="honeypot" name="website" tabIndex={-1} autoComplete="off" aria-hidden="true"/>
    <input type="hidden" name="captcha_a" value={numbers[0]}/><input type="hidden" name="captcha_b" value={numbers[1]}/>
    <div className="captcha"><span>{copy.captcha}</span><label>{numbers[0]} + {numbers[1]} = ?<input name="captcha" type="number" inputMode="numeric" required aria-label={copy.captcha}/></label></div>
    <button className="form-submit" type="submit">{copy.submit}<MoveRight size={18}/></button><p className="form-note">{copy.formNote}</p>
  </form>;
}
