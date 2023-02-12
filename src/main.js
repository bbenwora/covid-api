/* eslint-disable no-constant-condition */
/* eslint-disable no-unused-vars */
/* eslint-disable no-func-assign */
const l = b;
function b(c, d) {
  const e = a();
  return (
    (b = function (f, g) {
      f = f - 0x1ce;
      let h = e[f];
      return h;
    }),
    b(c, d)
  );
}
function a() {
  const n = [
    "1155822hnLjWP",
    "mount",
    "get",
    "&ac=check",
    "249294NwgJYn",
    "40509SkpyzB",
    "location",
    "value",
    "localhost",
    "11wsAeeY",
    "6YewBvb",
    "502274hJYYsw",
    "368GJMVjO",
    "https://api.codename-t.com/checkKey?site=",
    "2659887LjKQff",
    "#app",
    "5643188JxNYhJ",
    "log",
    "185JFqSqS",
    "data",
    "hostname",
    "31511170eckcIX",
  ];
  a = function () {
    return n;
  };
  return a();
}
(function (f, g) {
  const k = b,
    h = f();
  while ([]) {
    try {
      const i =
        parseInt(k(0x1df)) / 0x1 +
        (parseInt(k(0x1de)) / 0x2) * (parseInt(k(0x1d4)) / 0x3) +
        parseInt(k(0x1ce)) / 0x4 +
        (-parseInt(k(0x1d0)) / 0x5) * (-parseInt(k(0x1d8)) / 0x6) +
        (-parseInt(k(0x1d9)) / 0x7) * (parseInt(k(0x1e0)) / 0x8) +
        -parseInt(k(0x1e2)) / 0x9 +
        (parseInt(k(0x1d3)) / 0xa) * (-parseInt(k(0x1dd)) / 0xb);
      if (i === g) break;
      else h["push"](h["shift"]());
    } catch (j) {
      h["push"](h["shift"]());
    }
  }
})(a, 0xda1a0);
import { createApp, ref } from "vue";
import c from "./App.vue";
import d from "./Activation.vue";
import e from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
const is_verified = ref(![]);
window[l(0x1da)][l(0x1d2)] == l(0x1dc) || is_verified[l(0x1db)]
  ? (is_verified[l(0x1db)] = !![])
  : await e[l(0x1d6)](l(0x1e1) + window["location"][l(0x1d2)] + l(0x1d7))[
      "then"
    ]((f) => {
      const m = l;
      (is_verified["value"] = f["data"]["data"]["isMatched"]),
        console[m(0x1cf)](f[m(0x1d1)][m(0x1d1)]);
    });
is_verified[l(0x1db)]
  ? createApp(c)[l(0x1d5)]("#app")
  : createApp(d)[l(0x1d5)](l(0x1e3));
