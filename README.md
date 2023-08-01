<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# realmax

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Return the maximum finite value capable of being represented by a numeric real type.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->



<section class="usage">

## Usage

```javascript
import realmax from 'https://cdn.jsdelivr.net/gh/stdlib-js/utils-real-max@deno/mod.js';
```

#### realmax( dtype )

Returns the maximum **finite** value capable of being represented by a numeric **real** type.

```javascript
var m = realmax( 'float64' );
// returns 1.7976931348623157e+308
```

The following numeric **real** types are supported:

-   `float64`: double-precision floating-point numbers
-   `float32`: single-precision floating-point numbers
-   `float16`: half-precision floating-point numbers

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
import realmax from 'https://cdn.jsdelivr.net/gh/stdlib-js/utils-real-max@deno/mod.js';

var m = realmax( 'float64' );
// returns 1.7976931348623157e+308

m = realmax( 'float32' );
// returns 3.4028234663852886e+38

m = realmax( 'float16' );
// returns 65504.0
```

</section>

<!-- /.examples -->

<!-- Section for describing a command-line interface. -->



<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/utils-real-min`][@stdlib/utils/real-min]</span><span class="delimiter">: </span><span class="description">return the smallest positive normal value capable of being represented by a numeric real type.</span>
-   <span class="package-name">[`@stdlib/utils-type-max`][@stdlib/utils/type-max]</span><span class="delimiter">: </span><span class="description">return the maximum value of a specified numeric type.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2023. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/utils-real-max.svg
[npm-url]: https://npmjs.org/package/@stdlib/utils-real-max

[test-image]: https://github.com/stdlib-js/utils-real-max/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/utils-real-max/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/utils-real-max/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/utils-real-max?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/utils-real-max.svg
[dependencies-url]: https://david-dm.org/stdlib-js/utils-real-max/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[cli-section]: https://github.com/stdlib-js/utils-real-max#cli
[cli-url]: https://github.com/stdlib-js/utils-real-max/tree/cli
[@stdlib/utils-real-max]: https://github.com/stdlib-js/utils-real-max/tree/main

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/utils-real-max/tree/deno
[umd-url]: https://github.com/stdlib-js/utils-real-max/tree/umd
[esm-url]: https://github.com/stdlib-js/utils-real-max/tree/esm
[branches-url]: https://github.com/stdlib-js/utils-real-max/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/utils-real-max/main/LICENSE

<!-- <related-links> -->

[@stdlib/utils/real-min]: https://github.com/stdlib-js/utils-real-min/tree/deno

[@stdlib/utils/type-max]: https://github.com/stdlib-js/utils-type-max/tree/deno

<!-- </related-links> -->

</section>

<!-- /.links -->
