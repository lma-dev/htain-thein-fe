// contactSchema.js
import { z } from "zod";

export const contactSchema = z.object({
  name: z
    .string({ message: "Please provide a valid name" })
    .min(1, { message: "Please provide your name" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  subject: z.string().min(1, { message: "Please provide a subject" }),
  message: z.string().min(1, { message: "Please provide a message" }),
});
