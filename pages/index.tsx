import { getSession, signOut } from "next-auth/react";
import { NextPageContext } from "next";

import useCurrentUser from "@/hooks/userCurrentUser";
import { useRouter } from "next/router";

export async function getServerSideProps(context: NextPageContext) {
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        destination: "/auth",
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
}

export default function Home() {
  const router = useRouter();
  const { data: user } = useCurrentUser();

  //! Render
  return (
    <>
      <div className="flex justify-betwwen">
      <h1 className="text-4xl text-green-500">Hello {user?.name} </h1>
      <button className="h-10 w-20 bg-gray-500 hover:bg-gray-600 ml-3" onClick={() => signOut()}>
        Logout
      </button>
      </div>
      <button
        className="h-10 mt-5 w-full bg-amber-700 hover:text-white hover:bg-amber-900 transition"
        onClick={() => router.push("/profiles")}
      >
        Profiles
      </button>
    </>
  );
}
