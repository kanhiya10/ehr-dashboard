"use client";

import { useRouter } from "next/navigation";

const LoginPage = () => {
  const router = useRouter();

  const handleLogin = () => {
    const state = crypto.randomUUID();
    const url = new URL(process.env.NEXT_PUBLIC_EPIC_AUTH_URL!);

    url.searchParams.append("response_type", "code");
    url.searchParams.append("client_id", process.env.NEXT_PUBLIC_EPIC_CLIENT_ID!);
    url.searchParams.append("redirect_uri", process.env.NEXT_PUBLIC_EPIC_REDIRECT_URI!);
    url.searchParams.append("scope", "openid");
    url.searchParams.append("state", state);
    url.searchParams.append("aud", process.env.NEXT_PUBLIC_EPIC_FHIR_BASE!);
    

    router.push(url.toString());
  };

  return (
    <div className="flex h-screen items-center justify-center">
      <button
        onClick={handleLogin}
        className="px-6 py-3 bg-blue-600 text-white rounded-lg"
      >
        Login with Epic
      </button>
    </div>
  );
};

export default LoginPage;
