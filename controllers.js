const defaultRoute = (req, res) => {
  res.send("hello");
};
const message = "";

const getRouter = (model) => {
  return async (req, res) => {
    try {
      const data = await model.find();
      res.status(200).json({
        status: "success",
        message: data,
      });
    } catch (error) {
      res.status(404).json({
        status: "failure",
        message: error.message,
      });
    }
  };
};

const postRouter = (model) => {
  return async (req, res) => {
    try {
      const Userdata = req.body;
      console.log(req.body, "hi");
      const createdData = await model.create(Userdata);
      res.status(200).json({
        status: "success",
        message: createdData,
      });
    } catch (error) {
      res.status(404).json({
        status: "failure",
        message: err.message,
      });
    }
  };
};

module.exports = { defaultRoute, getRouter, postRouter };
