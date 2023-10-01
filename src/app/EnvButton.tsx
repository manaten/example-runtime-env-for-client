"use client";

import { useCallback } from "react";

import { useEnv } from "./EnvProvider";
import { getEnv } from "./GlobalEnvProvider";

export const EnvButton: React.FC = () => {
  const { SOME_ENV_VALUE, OTHER_ENV_VALUE } = useEnv();

  const clickHandler = useCallback(() => {
    alert(JSON.stringify({ SOME_ENV_VALUE, OTHER_ENV_VALUE }, null, 2));
    alert(JSON.stringify(getEnv(), null, 2));
  }, [SOME_ENV_VALUE, OTHER_ENV_VALUE]);

  return <button onClick={clickHandler}>Click me!</button>;
};
