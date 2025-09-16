"use client";

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

const CallbackPage = () => {
  const params = useSearchParams();
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const code = params.get("code");
    if (!code) {
      setError("Authorization code not found in callback.");
      return;
    }

    const fetchToken = async () => {
      try {
        const res = await fetch("api/auth/token", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ code }),
        });

        const text = await res.text();
        console.log("Backend response:", text);

        let data;
        try {
          data = JSON.parse(text);
        } catch {
          setError("Failed to parse token response from Epic.");
          return;
        }

        if (!data.access_token) {
          setError("No access token returned from Epic.");
          return;
        }

        localStorage.setItem("access_token", data.access_token);
        router.push("/dashboard");
      } catch (err) {
        console.error("Token request failed:", err);
        setError("Token request failed. Check console for details.");
      }
    };

    fetchToken();
  }, [params, router]);

  if (error) return <p className="text-red-600">{error}</p>;
  return <p>Processing login...</p>;
};

export default CallbackPage;
