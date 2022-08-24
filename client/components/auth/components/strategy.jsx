import { signIn } from "next-auth/react";
import Image from "next/image";
import React from "react";

const Strategy = () => {
  return (
    <div className="flex justify-around items-center ">
      <Image
      onClick={() => {
        signIn("instagram", { callbackUrl: "/" });
      }}
        className="rounded"
        src="/images/instagram.png"
        width={40}
        height={40}
      />
      <Image
        onClick={() => {
          signIn("google", { callbackUrl: "/" });
        }}
        className="rounded"
        src="/images/google.png"
        width={40}
        height={40}
      />
      <Image
        onClick={() => signIn("github", { callbackUrl: "/" })}
        className="rounded"
        src="/images/github.png"
        width={40}
        height={40}
      />
    </div>
  );
};

export default Strategy;
