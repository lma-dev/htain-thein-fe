import { getSession } from "next-auth/react"; // Import getSession for client-side
import axios from "../utils/axios";
import ToastsBox from "../components/Toasts/ToastsBox";

export async function callApi(
  method: string,
  url: string,
  data?: any,
  responseType?: "arraybuffer" | "blob" | "document" | "json" | "text" // Explicit response type
) {
  // Get the session token
  const session = await getSession();
  const token = session?.user.access_token; // Adjust based on your session structure

  const config: any = {
    headers: {
      Authorization: `Bearer ${token}`, // Include the token in headers
    },
    method,
    url,
    data,
    responseType,
  };

  try {
    const response = await axios(config);

    if (
      (response.status === 200 || response.status === 201) &&
      response.data.msg &&
      response.data.alertVisible === 1
    ) {
      ToastsBox.success({ message: response.data.msg });
    }

    return response.data;
  } catch (error) {
    // Handle different error types
    if (error.response && error.response.data) {
      const { errors } = error.response.data;
      const errorMessages = Object.values(errors).flat();

      errorMessages.forEach((errorMessage) => {
        ToastsBox.error({ message: errorMessage });
      });

      throw new Error("Validation errors occurred");
    } else if (error.request) {
      ToastsBox.error({ message: "No response received: " + error.request });
      throw new Error("No response received");
    } else {
      ToastsBox.error({ message: "Error: " + error.message });
      throw new Error(error.message);
    }
  }
}
