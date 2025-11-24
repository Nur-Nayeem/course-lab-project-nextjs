"use client";
import { signOut, useSession } from "next-auth/react";
import React, { createContext, useEffect, useState } from "react";

export const AuthContext = createContext(null);

const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState();
  const { data: session, status } = useSession();

  useEffect(() => {
    async function handleSession() {
      if (status === "loading") return;

      setUser(session?.user || null);
      setAuthLoading(false);
    }

    handleSession();
  }, [session, status]);
  const logout = async () => {
    await signOut({ callbackUrl: "/login" });
  };

  const authInfo = {
    user,
    logout,
    status,
  };
  return <AuthContext value={authInfo}>{children}</AuthContext>;
};

export default AuthContextProvider;
