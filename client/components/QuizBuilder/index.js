import QuizForm from "./QuizForm";
import QuizFormResult from "./QuizFormResult";

import { Provider } from "react-redux";

import store from "./store";

export default function QuizBuilder(props) {
  const { result, setResult } = props;

  const handleSubmit = (values) => {
    setResult(JSON.stringify(values, null, 2));
    setResult(values);
  };
  console.log("🚀 ~ handleSubmit", handleSubmit)

  return (
    <Provider store={store}>
      {/* QuizBuilder Form Here 👇👇 */}
      <QuizForm onSubmit={handleSubmit} />
      {/* <QuizFormResult result={result} /> */}
    </Provider>
  );
}
