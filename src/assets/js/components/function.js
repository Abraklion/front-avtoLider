function getCoords(block) {
  let box = block.getBoundingClientRect();

  return box.top + pageYOffset
}
