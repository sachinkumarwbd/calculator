let ans = document.querySelector("input");
let buttons = document.querySelectorAll("button");

let btnArrays = Array.from(buttons);

let str = "";

btnArrays.forEach((bt) => {
  bt.addEventListener("click", (e) => {
    if (e.target.innerHTML == "DEL") {
      str = str.substring(0, str.length - 1);
      ans.value = str;
    } else if (e.target.innerHTML == "AC") {
      str = "";
      ans.value = str;
    } else if (e.target.innerHTML == "=") {
      str = eval(str);
      ans.value = str;
    } else {
      str += e.target.innerHTML;
      ans.value = str;
    }
  });
});
