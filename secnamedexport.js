const { result } = require("../exportgithub/namedimport");

let retur = null;
if (result[0] === "even") {
  retur = result[1] * result[1];
} else {
  retur = result[1] * result[1] * result[1];
}

exports.retur = retur;
