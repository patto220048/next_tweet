"use client";

import { useState } from "react";
import Input from "@/app/components/Input";
import Link from "next/link";

import { FaUser } from "react-icons/fa";

const RegistPage = () => {
  const [values, setValue] = useState({});
  const onchange = (e:React.ChangeEvent<HTMLInputElement>):void => {
    setValue({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <div className="mx-auto w-1/3">
      <h1 className="flex p-3 justify-center p-3font-bold text-3xl">
        <FaUser className="mt-1 me-3" />
        Sign up
      </h1>
      <div>
        <Input
          name="username"
          id="username"
          type="text"
          placeholder={"Your name"}
          onChange={onchange}
        />
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
          Sign up
        </button>
        <Link
          href="/auth/login"
          className="
                            flex justify-center
                          bg-gray-200 hover:bg-gray-300
                          text-gray-500 font-bold 
                          py-3 px-4 
                          rounded
                         "
        >
          Sing in
        </Link>
      </div>
    </div>
  );
};

export default RegistPage;
