import { config } from 'dotenv'
import { expand } from 'dotenv-expand'
import { z, ZodError } from 'zod'

const stringToBoolean = z.coerce.string().transform((value) => {
  return value === "true"
}).default("false")

const EnvSchema = z.object({
  SERVER_PORT: z.coerce.number(),
  NODE_ENV: z.string().default("development"),
  DB_HOST: z.string(),
  DB_USER: z.string(),
  DB_PASSWORD: z.string(),
  DB_NAME: z.string(),
  DB_PORT: z.coerce.number(),
  DATABASE_URL: z.string(),
  DB_MIGRATING: stringToBoolean,
  DB_SEEDING: stringToBoolean,
})

export type EnvSchema = z.infer<typeof EnvSchema>

expand(config())

try {
  EnvSchema.parse(process.env)
} catch (error) {
  if (error instanceof ZodError) {
    let message = "Missing required values in ./env: \n";

    error.issues.forEach((issue) => {
      message += issue.path[0] + "\n"
    })

    let e = new Error(message)
    e.stack = ""

    throw e;
  } else {
    console.error(error)
  }
}

export default EnvSchema.parse(process.env)
