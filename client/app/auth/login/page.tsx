"use client";
import { useState } from "react";
import Input from "@/app/components/Input";
import Link from "next/link";

import { RiLockPasswordFill } from "react-icons/ri";

const LoginPage = () => {
  const [values, setValue] = useState({});
  const onchange = (e: React.ChangeEvent<HTMLInputElement>):void => {
    setValue({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <div className="mx-auto w-1/3">
      <h1 className="flex p-3 justify-center p-3font-bold text-3xl">
        <RiLockPasswordFill className="mt-1 me-3" />
        Sign in
      </h1>
      <div>
        <Input
          name="email"
          id="email"
          type="text"
          placeholder={"Email"}
          onChange={onchange}
        />
        <Input
          name="password"
          id="password"
          type="password"
          placeholder={"Password"}
          onChange={onchange}
        />
      </div>
      <div>
        <button
          className="
                            w-full
                          bg-blue-500 hover:bg-blue-700
                          text-white font-bold 
                          py-3 px-4 mb-2
                          rounded
                         "
        >
          Sign in
        </button>
        <Link
          href="/auth/regist"
          className="
                            flex justify-center
                          bg-gray-200 hover:bg-gray-300
                          text-gray-500 font-bold 
                          py-3 px-4 
                          rounded
                         "
        >
          Register
        </Link>
      </div>
    </div>
  );
};

export default LoginPage;
