import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import React from "react";

type Props = {};

const LoginPage = (props: Props) => {
  return (
    <Card className="max-w-sm mx-auto my-32 px-3 py-7">
      <CardHeader>
        <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          Login
        </h3>
      </CardHeader>
      <CardContent>
        <form className="flex flex-col gap-4">
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
          <Button type="submit">Login</Button>
        </form>
        <p className="text-sm mt-3 text-right">
          Create an account?{" "}
          <Link href={`/register`} className="font-semibold underline">
            Register
          </Link>
        </p>
      </CardContent>
    </Card>
  );
};

export default LoginPage;
