// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import t from"https://cdn.jsdelivr.net/gh/stdlib-js/string-format@v0.1.1-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float16-max@v0.1.1-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float32-max@v0.1.1-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-max@v0.1.1-esm/index.mjs";function r(r){switch(r){case"float64":return n;case"float32":return e;case"float16":return s;default:throw new TypeError(t("invalid argument. Must provide a recognized type. Value: `%s`.",r))}}export{r as default};
//# sourceMappingURL=index.mjs.map
