import { z } from "zod";

// later I will add confirm password in this
export const passwordSchema = z.string()
  .min(8, { message: "Password must be at least 8 characters long" })
  .max(32, { message: "Password must be at most 32 characters long" })
  .regex(/[A-Z]/, { message: "Password must contain at least one uppercase letter" })
  .regex(/[0-9]/, { message: "Password must contain at least one number" })
  .regex(/[^a-zA-Z0-9]/, { message: "Password must contain at least one special character" });

export const registerSchema = z.object({ 
  name: z.string().trim().min(1),
  email: z.string().email({ message: "Invalid email address" }),
  password: passwordSchema
});

export const loginSchema = z.object({ 
  email: z.string().email({ message: "Invalid email address" }),
  password: z.string().trim().min(1)

});