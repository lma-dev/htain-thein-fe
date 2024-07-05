// contactSchema.js
import { z } from "zod";

export const messageSchema = z
  .string()
  .min(1, { message: "Please provide a message" })
  .max(255, { message: "Message should not exceed 255 characters" });
