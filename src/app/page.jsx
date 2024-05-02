
"use client";
import Link from 'next/link';


const Page = () => {
  return (
    <div>
      <Link href="/auth">
        Auth
      </Link>
      <Link href="/Login">
        Login
      </Link>
      <Link href="/Dashboard">
      Dashboard
      </Link>
    </div>

  );
};

export default Page;
