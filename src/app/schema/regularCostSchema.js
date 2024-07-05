import { z } from "zod";
import { preprocessNumber } from "../utils/zodChangeStringToInteger";

export const regularCostSchema = z.object({
  description: z.string().min(1, { message: "Please provide a description" }),
  amount: z.preprocess(
    preprocessNumber,
    z
      .number({
        required_error: "Amount is required",
        invalid_type_error: "Amount must be a number",
      })
      .int({ message: "Please provide a valid amount" })
      .positive({ message: "Amount must be a positive number" })
      .min(51, { message: "Amount must be greater than 50 kyats" })
      .refine((value) => value % 2 === 0, { message: "Amount must be even" })
  ),
});
