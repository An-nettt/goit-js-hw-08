var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t=/^\s+|\s+$/g,n=/^[-+]0x[0-9a-f]+$/i,o=/^0b[01]+$/i,i=/^0o[0-7]+$/i,r=parseInt,a="object"==typeof e&&e&&e.Object===Object&&e,f="object"==typeof self&&self&&self.Object===Object&&self,u=a||f||Function("return this")(),l=Object.prototype.toString,c=Math.max,s=Math.min,m=function(){return u.Date.now()};function d(e,t,n){var o,i,r,a,f,u,l=0,d=!1,p=!1,b=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function y(t){var n=o,r=i;return o=i=void 0,l=t,a=e.apply(r,n)}function j(e){return l=e,f=setTimeout(T,t),d?y(e):a}function O(e){var n=e-u;return void 0===u||n>=t||n<0||p&&e-l>=r}function T(){var e=m();if(O(e))return h(e);f=setTimeout(T,function(e){var n=t-(e-u);return p?s(n,r-(e-l)):n}(e))}function h(e){return f=void 0,b&&o?y(e):(o=i=void 0,a)}function S(){var e=m(),n=O(e);if(o=arguments,i=this,u=e,n){if(void 0===f)return j(u);if(p)return f=setTimeout(T,t),y(u)}return void 0===f&&(f=setTimeout(T,t)),a}return t=g(t)||0,v(n)&&(d=!!n.leading,r=(p="maxWait"in n)?c(g(n.maxWait)||0,t):r,b="trailing"in n?!!n.trailing:b),S.cancel=function(){void 0!==f&&clearTimeout(f),l=0,o=u=i=f=void 0},S.flush=function(){return void 0===f?a:h(m())},S}function v(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function g(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==l.call(e)}(e))return NaN;if(v(e)){var a="function"==typeof e.valueOf?e.valueOf():e;e=v(a)?a+"":a}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(t,"");var f=o.test(e);return f||i.test(e)?r(e.slice(2),f?2:8):n.test(e)?NaN:+e}const p=document.querySelector(".feedback-form");p.addEventListener("input",(function(e){const{elements:{email:t,message:n}}=e.currentTarget;let o=t.value,i=n.value;localStorage.setItem("feedback-form-state",JSON.stringify({email:o,message:i}))})),p.addEventListener("submit",(function(e){e.preventDefault(),e.target.reset(),localStorage.removeItem("feedback-form-state"),console.log({email:b.email,message:b.message})}));let b={};const y=localStorage.getItem("feedback-form-state");y&&(b=JSON.parse(y),console.log(p.email),console.log(p.email.value),console.log(b),console.log(inputEmail));
//# sourceMappingURL=03-feedback.6a074af4.js.map
