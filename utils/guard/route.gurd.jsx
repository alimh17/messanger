import React, { useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";

const RouteGourd = (props) => {
  const router = useRouter();
  const { data: session, status } = useSession();

  useEffect(() => {
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
