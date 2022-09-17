import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { initUser } from "store/action/init_user";
import axios from "axios";

const RouteGourd = (props) => {
  const router = useRouter();
  const { session, status, data } = useSession();
  const dispatch = useDispatch();

  const initialData = async (userInfo) => {
    const response = await axios.post("/api/initData", userInfo.user);
    dispatch(initUser(response.data.data));
  };

  useEffect(() => {
    // if (status === "unauthenticated") {
    //   router.push("/auth");
    // }
    if (data) {
      initialData(data);
    }
  }, [status]);

  if (status === "loading") {
    return <div>Loading</div>;
  }

  return <>{props.children}</>;
};

export default RouteGourd;
