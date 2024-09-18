import fastify from "fastify";
import routesAPI from "./api";
import multer from "fastify-multer";

const app = fastify({ logger: true });

app.register(multer.contentParser);
app.register(routesAPI);

app.listen({ port: 3000 }, function (err, address) {
  if (err) {
    app.log.error(err);
    process.exit(1);
  }
});
