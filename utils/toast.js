export const Toast = (formik, toast , type) => {
    if (type) {
        if (formik.errors.email) {
            toast.error(formik.errors.email, {
                style: {
                    backgroundColor: "#ced4da",
                    color: "#264653",
                },
            });
        }
        if (formik.errors.username) {
            toast.error(formik.errors.username, {
                style: {
                    backgroundColor: "#ced4da",
                    color: "#264653",
                },
            });
        }
        if (formik.errors.password) {
            toast.error(formik.errors.password, {
                style: {
                    backgroundColor: "#ced4da",
                    color: "#264653",
                },
            });
        }
    } else {
        if (formik.errors.username) {
            toast.error(formik.errors.username, {
                style: {
                    backgroundColor: "#ced4da",
                    color: "#264653",
                },
            });
        }
        if (formik.errors.password) {
            toast.error(formik.errors.password, {
                style: {
                    backgroundColor: "#ced4da",
                    color: "#264653",
                },
            });
        }
    }
}


export const resToast = (message, toast) => {
    toast.error(message, {
        style: {
            backgroundColor: "#ced4da",
            color: "#264653",
        },
    });
}