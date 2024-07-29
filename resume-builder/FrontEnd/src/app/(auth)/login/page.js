"use client";
import React, { useContext } from "react";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../../provider/AuthProvider";
import { useRouter } from "next/navigation";

const Login = () => {
  const router = useRouter();
  const { user } = useContext(AuthContext);

  if (user) {
    router.push("/");
  }

  const { googleSignIn } = useContext(AuthContext);

  const handleSignInWithGoogle = () => {
    googleSignIn()
      .then((result) => {
        const loggedUser = result.user;
        console.log("loggedUser", loggedUser);
      })
      .catch((error) => {
        console.error("ERROR WHEN LOGIN WITH EMAIL", error.message);
      });
  };

  return (
    <div className="flex h-dvh items-center justify-center">
      <div className="flex h-[300px] w-[500px] items-center justify-center bg-[#1F2937] p-5 text-white">
        <div>
          <h2 className="bg-red-50 p-2 text-center text-black">
            Before downloading a resume you need to create an account with your
            email address just click and go
          </h2>
          <div className="mt-10 flex items-center justify-center">
            <button
              onClick={handleSignInWithGoogle}
              className="flex items-center justify-center gap-2 bg-white p-2 font-bold text-black"
            >
              <FcGoogle size={20} /> Sign In With Google
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
