const mongoose = require("mongoose");
const schema = {
  name: {
    type: String,
    require: true,
  },
};

const schema1 = mongoose.Schema(schema);
const model = mongoose.model("model1", schema1);

module.exports = { model };
