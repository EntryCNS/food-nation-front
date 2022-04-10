import React from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import SignOut from "../../../assets/image/navBar/logout.svg";
import { Button } from "./AuthBtn.style";
const AuthBtn = () => {
  const { data: session } = useSession();
  if (session) {
    return (
      <Button onClick={() => signOut()}>
        <SignOut className="img" />
      </Button>
    );
  }
  return <Button onClick={() => signIn("google")}>Sign in</Button>;
};

export default AuthBtn;
