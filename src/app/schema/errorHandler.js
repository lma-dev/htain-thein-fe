// errorHandler.js
import { z } from "zod";
import ToastBox from "../components/Toasts/ToastsBox";

export const handleErrors = (error) => {
  if (error instanceof z.ZodError) {
    const errorMessages = error.errors.map((e) => e.message);

    errorMessages.forEach((errorMessage) => {
      ToastBox.error({ message: errorMessage });
    });
  } else {
    ToastBox.error({ message: error.message || error });
  }
};
