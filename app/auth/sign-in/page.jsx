import { Input } from "@/components/ui/input";
import Link from "next/link";
import React from "react";

const SignInpage = () => {
  return (
    <div className="">
      <section className="w-96">
        <div>
          <h3> Account SignIn </h3>
        </div>

        <div>
          <label htmlFor="Email"> Email </label>
          <Input placeholder="Email" type="text" />
        </div>

        <div>
          <label htmlFor="Email"> Password </label>
          <Input placeholder="Email" type="password" />
        </div>
      </section>

      <div>
        <Link href="/auth/sign-up" className="text-sm">
          Don't have an account? Signup
        </Link>
      </div>
    </div>
  );
};

export default SignInpage;
