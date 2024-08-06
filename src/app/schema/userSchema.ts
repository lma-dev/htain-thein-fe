import { z } from "zod";

export const userSchema = z.object({
  name: z
    .string()
    .min(1, { message: "Please enter a name with at least 1 character" })
    .max(255, { message: "Name should not exceed 255 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  password: z
    .string()
    .min(8, { message: "Password should be at least 8 characters long" }),
  role: z.enum(["ADMIN", "MEMBER", "SUPER_ADMIN"], {
    message: "Please select a valid role",
  }),
  accountStatus: z.enum(["ACTIVE", "SUSPENDED"], {
    message: "Please select a valid account status",
  }),
});
