"use client";
export default function ErrorPage({reset}:{reset:()=>void}){return <main className="simple-state"><p className="section-label">Viga</p><h1>Midagi läks valesti.</h1><button className="primary-button" onClick={reset}>Proovi uuesti</button></main>}
