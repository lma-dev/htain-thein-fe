import { z } from "zod";
import {
  preprocessNumber,
  preprocessBoolean,
  preprocessDate,
} from "../utils/zodChangeStringToInteger";

export const announcementSchema = z.object({
  title: z
    .string({ message: "Please provide a valid title" })
    .min(1, { message: "Please provide a title" }),
  content: z.string().optional(),
  isVisible: z.preprocess(
    preprocessBoolean,
    z.boolean({ message: "Please select Visible Status" }).optional()
  ),
  priority: z.preprocess(
    preprocessNumber,
    z.number({ message: "Please select a valid priority" }).int().min(1).max(3)
  ),
  slug: z.enum(["work", "cost", "alert", "info", "others"], {
    message: "Please select a valid slug",
  }),
  dueDate: z.preprocess(
    preprocessDate,
    z
      .date({ message: "Please select a valid date" })
      .refine((date) => date > new Date(), {
        message: "Due date must be after today",
      })
  ),
});
