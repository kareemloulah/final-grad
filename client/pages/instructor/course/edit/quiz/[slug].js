import { useState, Fragment } from "react";

import { Modal, Button } from "antd";
import { useRouter } from "next/router";
import Quiz from "../../../../../components/QuizComponent/Quiz";
import QuizBuilder from "../../../../../components/QuizBuilder";



export default function AddQuez() {
  const [result, setResult] = useState(null);
  console.log("🚀 ~ result", result);

  // router
  const router = useRouter();
  const { slug, lessonId } = router.query;
  console.log("🚀 ~ router.query", router.query);
  console.log("🚀 ~ slug", slug);

  return (
    <>
      {/* QuizBuilder Form Here 👇👇 */}
      <QuizBuilder result={result} setResult={setResult} />
    </>
  );
}
