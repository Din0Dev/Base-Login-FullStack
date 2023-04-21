import { NextPageContext } from "next";
import { getSession } from "next-auth/react";
import React from "react";

export async function getServerSideProps(context: NextPageContext) {
  const session = await getSession();

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
  //! State

  //! Function

  //! Render
  return (
    <div>
      <p className="text-white text-4xl">Proffiles</p>
    </div>
  );
};

export default Profiles;
