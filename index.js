let leftSize = 0;
const moveSlider = () => {
  const boxs = document.querySelectorAll('.box');
  leftSize += 130;
  if (leftSize === (boxs.length - 2) * 130) {
    leftSize = 0;
  }
  boxs.forEach((box) => {
    box.style.left = `-${leftSize}px`;
  });
};
setInterval(moveSlider, 3000);
