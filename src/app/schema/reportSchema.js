import { z } from "zod";
import { preprocessNumber } from "../utils/zodChangeStringToInteger";

export const reportSchema = z.object({
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
  description: z
    .string()
    .min(1, { message: "Please provide a description" })
    .max(255, { message: "Description should not exceed 255 characters" }),
  type: z.enum(["INCOME", "EXPENSE"], {
    message: "Please select a valid type",
  }),
  confirm_status: z.boolean().optional(),
  verifier_id: z
    .number({ message: "Please provide a valid ID" })
    .int({ message: "Please provide a valid ID" })
    .positive({ message: "Please provide a valid verifier ID" })
    .optional({ message: "Please provide a valid verifier ID" }),
});
