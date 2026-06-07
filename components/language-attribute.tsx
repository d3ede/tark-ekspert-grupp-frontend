"use client";
import {useEffect} from "react";
export function LanguageAttribute({lang}:{lang:"et-EE"|"ru-EE"}){useEffect(()=>{document.documentElement.lang=lang},[lang]);return null}
