"use client";

import React, { PropsWithChildren, useEffect } from "react";

type Env = {
  SOME_ENV_VALUE: string;
  OTHER_ENV_VALUE: string;
};

const globalEnv: Env = {
  SOME_ENV_VALUE: "",
  OTHER_ENV_VALUE: "",
};

export function getEnv(): Env {
  return typeof window === "undefined" ? process.env : globalEnv;
}

export const GlobalEnvProvider: React.FC<PropsWithChildren<{ env: Env }>> = ({
  children,
  env,
}) => {
  useEffect(() => {
    Object.assign(globalEnv, env);
  }, [env]);

  return children;
};
