"use client";

import React, { PropsWithChildren, createContext, useContext } from "react";

type Env = {
  SOME_ENV_VALUE: string;
  OTHER_ENV_VALUE: string;
};

const envContext = createContext<Env>({
  SOME_ENV_VALUE: "",
  OTHER_ENV_VALUE: "",
});

export function useEnv(): Env {
  return useContext(envContext);
}

export const EnvProvider: React.FC<PropsWithChildren<{ env: Env }>> = ({
  children,
  env,
}) => {
  return <envContext.Provider value={env}>{children}</envContext.Provider>;
};
