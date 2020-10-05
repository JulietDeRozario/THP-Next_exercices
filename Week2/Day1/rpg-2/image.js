const image = document.getElementById('image');

image.onmousedown = function(event) {
  image.style.position = 'absolute';

  document.body.append(image);

  function moveAt(pageX, pageY) {
    image.style.left = pageX + 'px';
    image.style.top = pageY + 'px';
  }

  moveAt(event.pageX, event.pageY);

  function onMouseMove(event) {
    moveAt(event.pageX, event.pageY);
  }

  document.addEventListener('mousemove', onMouseMove);

  image.onmouseup = function() {
    document.removeEventListener('mousemove', onMouseMove);
    image.onmouseup = null;
  };

};
image.ondragstart = function() {
  return false;
};