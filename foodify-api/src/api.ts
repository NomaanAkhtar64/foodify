import { FastifyReply, FastifyRequest } from "fastify";
import upload from "mediaUploader";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

interface FileRequest {
  file?: {
    buffer: Buffer;
    encoding: string;
    fieldname: string;
    mimetype: string;
    originalname: string;
    size: number;
  };
}

type CustomFastifyRequest<T> = FastifyRequest & {
  [K in keyof T]: T[K];
};

async function routesAPI(fastify, options) {
  fastify.post("/api/user/signup/", async (request, reply: FastifyReply) => {
    return { hello: "world" };
  });

  fastify.post(
    "/image/upload",
    { preHandler: upload.single("carousel-image") },
    function (request: CustomFastifyRequest<FileRequest>, reply: FastifyReply) {
      // console.log(request.file);
      reply.code(200).send(request.file);
    }
  );
}

export default routesAPI;
