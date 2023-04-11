import { app } from "./app.js";
import { connectDB } from "./config/db.js";

// use the connectDB function
connectDB();

app.listen(process.env.PORT, () => {
  console.log(
    `Server is working on port:${process.env.PORT} in ${process.env.NODE_Env} Mode`
  );
});
