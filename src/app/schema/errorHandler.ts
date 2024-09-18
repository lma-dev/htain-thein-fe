import { z } from "zod";
import ToastBox from "../components/Toasts/ToastsBox";

// Define a type for the error parameter
type ErrorType = z.ZodError | Error | unknown;

export const handleErrors = (error: ErrorType) => {
  if (error instanceof z.ZodError) {
    const errorMessages = error.errors.map((e) => e.message);

    errorMessages.forEach((errorMessage) => {
      ToastBox.error({ message: errorMessage });
    });
  } else if (error instanceof Error) {
    ToastBox.error({ message: error.message || "An unknown error occurred" });
  } else {
    ToastBox.error({ message: "An unknown error occurred" });
  }
};
