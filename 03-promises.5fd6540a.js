!function(){var e,n=document.querySelectorAll("input"),t=document.querySelector("button");t.addEventListener("click",(function(t){t.preventDefault();var o=1,c=1*n[0].value;setTimeout((function(){e=setInterval((function(){!function(e,n){Math.random()>.3?console.log("✅ Fulfilled promise ".concat(e," in ").concat(n,"ms")):console.log("❌ Rejected promise ".concat(e," in ").concat(n,"ms"))}(o,c),o++,c+=1*n[1].value,o-1>=n[2].value&&clearInterval(e)}),n[1].value)}),n[0].value-n[1].value)}))}();
//# sourceMappingURL=03-promises.5fd6540a.js.map