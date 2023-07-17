import app from "./app";
import { Server } from "http";
import { dbConnect } from "./config/dbs";

process.on("uncaughtException", (err) => {
  console.log("uncaught exception is detected ", err);
  process.exit(1);
});
let server: Server;
async function bootstrap() {
  try {
    await dbConnect();
    server = app.listen(5000, () => {
      console.log("server is running port 5000");
    });
  } catch (err) {
    console.log(err);
  }

  process.on("unhandledRejection", (err) => {
    console.log("unhandled rejection is detected, we are closing server", err);
    if (server) {
      server.close(() => {
        console.log(err);
        process.exit(1);
      });
    } else {
      process.exit(1);
    }
  });
}

bootstrap();

//sigterm
process.on("SIGTERM", () => {
  console.log("SIGTERM IS RECEIVED...");
  if (server) {
    server.close();
  }
});
