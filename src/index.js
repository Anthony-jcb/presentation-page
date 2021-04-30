const path = require("path");
const app = require("./config/server");
const routes = require("./views/routes/routes");

// Settings
app.set("port", process.env.PORT || 5500);
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// Routes
app.use(routes);

// Server initialization.
app.listen(app.get("port"), () => {
  console.log(`Server on port ${app.get("port")}`);
});