let evenorodd = (num) => {
  if (num % 2 == 0) {
    return ["even", num];
  } else {
    return ["odd", num];
  }
};

exports.evenorodd = evenorodd;
