// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import t from"https://cdn.jsdelivr.net/gh/stdlib-js/string-format@esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float16-max@esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float32-max@esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-max@esm/index.mjs";var n=t,a=s,o=e,i=r;var d=function(t){switch(t){case"float64":return i;case"float32":return o;case"float16":return a;default:throw new TypeError(n("invalid argument. Must provide a recognized type. Value: `%s`.",t))}};export{d as default};
//# sourceMappingURL=index.mjs.map
