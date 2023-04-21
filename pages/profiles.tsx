import useCurrentUser from "@/hooks/userCurrentUser";
import { NextPageContext } from "next";
import { getSession } from "next-auth/react";
import { useRouter } from "next/router";
import React from "react";

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

const Profiles = () => {
  const router = useRouter(
    
  )
  //! State
  const { data: user } = useCurrentUser();
  //! Function

  //! Render
  return (
    <div className="w-full">
      <p className="text-red-600 flex justify-center text-4xl">Profiles</p>
      <img src={user?.image} />
      <p className="text-white text-2xl">Name: {user?.name}</p>
      <p className="text-white text-2xl">Email: {user?.email}</p>

      <button onClick={() => router.push('/')} className="text-white bg-gray-800 py-4 px-4">Back to HomePage</button>
    </div>
  );
};

export default Profiles;
