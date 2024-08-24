import { Input } from "@/components/ui/input";
import Link from "next/link";
import React from "react";

const SignUppage = () => {
  return (
    <section className="w-96">
      <div>
        <h3> Account Register </h3>
      </div>

      <div>
        <label htmlFor="Email"> Email </label>
        <Input placeholder="Email" type="text" />
      </div>

      <div>
        <label htmlFor="Email"> Password </label>
        <Input placeholder="Email" type="password" />
      </div>

      <div>
        <Link href="/auth/sign-in" className="text-sm text-green-800">
          Already have an account? Sign In
        </Link>
      </div>
    </section>
  );
};

export default SignUppage;
