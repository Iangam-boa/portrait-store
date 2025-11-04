{\rtf1\ansi\ansicpg1252\cocoartf2639
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\paperw11900\paperh16840\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\pard\tx566\tx1133\tx1700\tx2267\tx2834\tx3401\tx3968\tx4535\tx5102\tx5669\tx6236\tx6803\pardirnatural\partightenfactor0

\f0\fs24 \cf0 import * as React from "react";\
import \{ cn \} from "@/lib/utils";\
\
const Button = React.forwardRef<\
  HTMLButtonElement,\
  React.ButtonHTMLAttributes<HTMLButtonElement>\
>((\{ className, ...props \}, ref) => (\
  <button\
    ref=\{ref\}\
    className=\{cn(\
      "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",\
      className\
    )\}\
    \{...props\}\
  />\
));\
Button.displayName = "Button";\
\
export \{ Button \};}