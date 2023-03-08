import { useSession, signIn, signOut } from "next-auth/react";
import { Button } from "@mantine/core";
export default function LoginBtn() {
  const { data: session } = useSession();
  if (session) {
    console.log("session here", session);
    return (
      <>
        Signed in as {session.user?.name} <br />
        <Button
          onClick={() => signOut()}
          type="button"
          // className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        >
          Sign out
        </Button>
      </>
    );
  }
  return (
    <>
      Not signed in <br />
      <Button
        onClick={() => signIn()}
        type="button"
        // className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
      >
        Sign in
      </Button>
    </>
  );
}
