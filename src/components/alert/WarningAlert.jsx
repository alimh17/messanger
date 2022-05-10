import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaTimesCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useToasts } from "react-toast-notifications";
import { InitAlertAction } from "../../action/alertAction";

const WarningAlert = () => {
  const alert = useSelector((state) => state.alert);
  const { addToast } = useToasts();
  const navigate = useNavigate();

  const dispatch = useDispatch();

  return (
    <>
      {alert[0] && (
        <div
          style={{ zIndex: 90 }}
          className="fixed top-0 w-full h-screen flex justify-center items-center bg-gray-400 bg-opacity-80"
        >
          <div className="w-full h-2/3 flex flex-col justify-around bg-white md:w-2/3 md:h-2/3 rounded-lg transition-all duration-200 ease-in animate-[wiggle_0.8s_ease-in-out]">
            <div className="w-full flex justify-center text-rose-800 text-8xl">
              <FaTimesCircle />
            </div>
            <div className="w-full flex flex-col items-center">
              <h2 className="text-2xl my-3">خارج می شوید؟</h2>
              <div className="w-full flex justify-center">
                <button
                  onClick={() => {
                    navigate("/login", { replace: true });
                    localStorage.removeItem("token");
                    addToast("خروج موفقیت آمیز بود", {
                      appearance: "success",
                      autoDismiss: true,
                    });
                    dispatch(InitAlertAction());
                  }}
                  className="p-3 bg-indigo-800 w-1/2 rounded-lg m-2 text-white text-xl"
                >
                  بله
                </button>
                <button
                  onClick={() => dispatch(InitAlertAction())}
                  className="p-3 bg-gray-400 w-1/2 rounded-lg m-2 text-white text-xl"
                >
                  خیر
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default WarningAlert;
