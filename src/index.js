const app = require("./config/server");
const router = require("./views/routes");

// Server initialization.
app.listen(app.get("port"), () => {
  console.log(`Server on port ${app.get("port")}`);
});