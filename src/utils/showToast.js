
export const handleShowToast = (err, touch , addToast) => {


    if (err.username && touch.username) {
      addToast(err.username, {
        appearance: "error",
        autoDismiss: true,
      });
    }
    if (err.email && touch.email) {
      addToast(err.email, {
        appearance: "error",
        autoDismiss: true,
      });
    }
    if (err.password && touch.password) {
      addToast(err.password, {
        appearance: "error",
        autoDismiss: true,
      });
    }
  };


  export const showToastLogin = (err ,touch , addToast) => {
    if (err.username && touch.username) {
      addToast(err.username, {
        appearance: "error",
        autoDismiss: true,
      });
    }

    if (err.password && touch.password) {
      addToast(err.password, {
        appearance: "error",
        autoDismiss: true,
      });
    }
  }