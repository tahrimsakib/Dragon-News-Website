import React from "react";
import { FaGithub, FaGoogle } from "react-icons/fa";

const SocialLogin = () => {
  return (
    <div>
      <h1 className="font-bold mb-5">login Now</h1>
      <div className="gap-4">
        <button className="btn btn-outline btn-secondary w-full ">
          <FaGithub size={18}></FaGithub>
          Login with GitHub
        </button>

        <button class="mt-2 btn btn-secondary btn-outline  w-full">
          <FaGoogle size={17}></FaGoogle>
          Login with Google
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
