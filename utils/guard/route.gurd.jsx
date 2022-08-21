import React, { useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";

const RouteGourd = (props) => {
  const router = useRouter();
  const { session, status } = useSession();

  useEffect(() => {
    console.log(session);
    console.log(status);

    if (status === "unauthenticated") {
      router.push("/auth");
    }
  }, [status]);

  if (status === "loading") {
    return <div>Loading</div>;
  }

  return <>{props.children}</>;
};

export default RouteGourd;
