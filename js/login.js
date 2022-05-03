let wrapper = $("body");
let load = 0;
let int = setInterval(blurring, 20);
const scale = (number, inMin, inMax, outMin, outMax) => {
  return ((number - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
};
function blurring() {
  load++;
  if (load > 99) {
    clearInterval(int);
  }

  wrapper.css({
    filter: `blur(${scale(load, 0, 100, 30, 0)}px)`,
  });
}

$(function () {
  $("input").attr("required", true);
});

let container = document.getElementById("container");

toggle = () => {
  container.classList.toggle("sign-in");
  container.classList.toggle("sign-up");
};

setTimeout(() => {
  container.classList.add("sign-in");
}, 50);
