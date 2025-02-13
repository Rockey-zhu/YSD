function ones(func) {
  let tag = true;
  return function () {
    if (tag == true) {
      func.apply(null, arguments);
      tag = false;
    }
    return undefined;
  };
}
