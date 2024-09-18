import toast from "react-hot-toast";

type ToastType = {
  message: any;
};
const ToastsBox = {
  success: ({ message }: ToastType) => {
    toast.success(message);
  },

  error: ({ message }: ToastType) => {
    toast.error(message);
  },
};

export default ToastsBox;
