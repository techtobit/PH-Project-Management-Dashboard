
import Link from 'next/link';



const Page = () => {
  return (
    <div>
      <h1>App Page</h1>
      <Link href="/auth">
        Login
      </Link>
      <Link href="/Dashboard">
      Dashboard
      </Link>
    </div>
  );
};

export default Page;
