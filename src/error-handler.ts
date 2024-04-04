import { FastifyInstance } from "fastify";
import { ZodError } from "zod";
import { BadRequest } from "./routes/_erros/bad-request";

type FastifyErrorHandeler = FastifyInstance['errorHandler'];

export const errorHandler: FastifyErrorHandeler = (error, request, reply) => {
    if(error instanceof ZodError) {
        return reply.status(400).send({
            message: 'Error during validation',
            errors: error.flatten().fieldErrors,  
        })
    }

    if(error instanceof BadRequest){
        return reply.status(400).send({
            message: error.message
        })
    }

    return reply.status(500).send({  message: "Um erro!"})
}