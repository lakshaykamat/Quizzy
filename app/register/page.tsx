import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import React from "react";

type Props = {};

const RegisterPage = (props: Props) => {
  return (
    <Card className="max-w-sm mx-auto my-12 px-3 py-7">
      <CardHeader>
        <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          Create an Account
        </h3>
      </CardHeader>
      <CardContent>
        <form className="flex flex-col gap-4">
          <div className="flex flex-col gap-1">
            <label htmlFor="">Enter Name</label>
            <input
              type="text"
              className="bg-gray-200 dark:bg-gray-600 outline-none focus:ring-2 ring-offset-1 px-3 py-1 rounded-md"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="">Enter Email</label>
            <input
              type="email"
              className="bg-gray-200 dark:bg-gray-600 outline-none focus:ring-2 ring-offset-1 px-3 py-1 rounded-md"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="">Password</label>
            <input
              type="password"
              className="bg-gray-200 dark:bg-gray-600 outline-none focus:ring-2 ring-offset-1 px-3 py-1 rounded-md"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="">Confirm Password</label>
            <input
              type="password"
              className="bg-gray-200 dark:bg-gray-600 outline-none focus:ring-2 ring-offset-1 px-3 py-1 rounded-md"
            />
          </div>
          <Button type="submit">Register</Button>
        </form>
        <p className="text-sm mt-3 text-right">
          Already have an account?{" "}
          <Link href={`/login`} className="font-semibold underline">
            Login
          </Link>
        </p>
      </CardContent>
    </Card>
  );
};

export default RegisterPage;
