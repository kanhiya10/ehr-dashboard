// app/callBack/page.tsx
import { Suspense } from "react";
import CallbackClient from "./callBackClient";

export default function Page() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <CallbackClient />
    </Suspense>
  );
}
