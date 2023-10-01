import { EnvProvider } from "./EnvProvider";
import { GlobalEnvProvider } from "./GlobalEnvProvider";

import "./globals.css";

export const dynamic = "force-dynamic";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body>
        <GlobalEnvProvider
          env={{
            SOME_ENV_VALUE: process.env.SOME_ENV_VALUE || "",
            OTHER_ENV_VALUE: process.env.OTHER_ENV_VALUE || "",
          }}
        >
          <EnvProvider
            env={{
              SOME_ENV_VALUE: process.env.SOME_ENV_VALUE || "",
              OTHER_ENV_VALUE: process.env.OTHER_ENV_VALUE || "",
            }}
          >
            {children}
          </EnvProvider>
        </GlobalEnvProvider>
      </body>
    </html>
  );
}
