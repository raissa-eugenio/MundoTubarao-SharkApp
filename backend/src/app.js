const express = require("express");
const cors = require("cors");

const adminRoutes = require("./routes/admin.routes");
const cardsRoutes = require("./routes/cards.routes"); 

const authRoutes = require("./routes/auth.routes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/admin", adminRoutes);
app.use("/cards", cardsRoutes); 
app.use("/auth", authRoutes);

app.get("/", (req, res) => {
  res.send("FUNCIONANDO 🦈");
});

module.exports = app;
