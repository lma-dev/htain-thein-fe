import toast from 'react-hot-toast';


const ToastsBox = {
    success: ({ message }) => {
        toast.success(message)

    },

    error: ({ message }) => {
        toast.error(message)

    },

    info: ({ message }) => {
        toast.promise(
            saveSettings(settings),
            {
                loading: 'Saving...',
                success: <b>Settings saved!</b>,
                error: <b>Could not save.</b>,
            }
        );
    }
};

export default ToastsBox;