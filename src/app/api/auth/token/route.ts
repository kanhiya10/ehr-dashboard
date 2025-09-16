import { NextResponse } from "next/server";
import fs from "fs";
import jwt from "jsonwebtoken";
import crypto from "crypto";
import path from "path";

export async function POST(req: Request) {
  try {
    const { code } = await req.json();

   const privateKeyPath = path.join(process.cwd(), "src/keys/privatekey.pem");
const privateKey = fs.readFileSync(privateKeyPath, "utf8");

    // Create JWT payload
    const payload = {
      iss: process.env.EPIC_CLIENT_ID,
      sub: process.env.EPIC_CLIENT_ID,
      aud: process.env.NEXT_PUBLIC_EPIC_TOKEN_URL,
      jti: crypto.randomUUID(),
      exp: Math.floor(Date.now() / 1000) + 280, // 5 minutes expiry
    };

    const header = {
      alg: "RS384",
      typ: "JWT",
      kid: "my-key-1", // MUST match your JWKS
    };

    // Sign the JWT
    const clientAssertion = jwt.sign(payload, privateKey, {
      algorithm: "RS384",
      header,
    });

    // console.log("Client Assertion JWT:", clientAssertion);
    // console.log("Authorization Code:", code);
    // console.log("Redirect URI:", process.env.NEXT_PUBLIC_EPIC_REDIRECT_URI);
    // console.log("Token URL:", process.env.NEXT_PUBLIC_EPIC_TOKEN_URL);
    // console.log("Client ID:", process.env.NEXT_PUBLIC_EPIC_CLIENT_ID);


    // Prepare token request
    const params = new URLSearchParams();
    params.append("grant_type", "authorization_code");
    params.append("code", code);
    params.append("redirect_uri", process.env.NEXT_PUBLIC_EPIC_REDIRECT_URI!);
    params.append(
      "client_assertion_type",
      "urn:ietf:params:oauth:client-assertion-type:jwt-bearer"
    );
    params.append("client_assertion", clientAssertion);

    const tokenRes = await fetch(process.env.NEXT_PUBLIC_EPIC_TOKEN_URL!, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: params.toString(),
    });

    const text = await tokenRes.text(); // Read raw response
    console.log("Raw token response from Epic:", text);
    let data;
    try {
      data = JSON.parse(text); // Try to parse as JSON
    } catch (err) {
      console.error("Failed to parse JSON from Epic:", text);
      return NextResponse.json(
        { error: "Failed to parse Epic token response", raw: text },
        { status: 500 }
      );
    }

    return NextResponse.json(data); // Return actual token response
  } catch (err) {
    console.error("Error in token handler:", err);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
