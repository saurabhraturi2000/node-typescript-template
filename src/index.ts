import express from "express";

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Hello, TypeScript with Express!");
});

app.listen(PORT, (err) => {
  if (err) {
    console.error(`Error starting server: ${err}`);
    process.exit(1);
  } else {
    console.log(`Server is running on http://localhost:${PORT}`);
  }
});

export default app;
