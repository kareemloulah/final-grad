import QuizForm from "./QuizForm";
import QuizFormResult from "./QuizFormResult";

import { Provider } from "react-redux";

import store from "./store";

export default function QuizBuilder(props) {
  const { result, setResult } = props;

  const handleSubmit = (values) => {
    setResult(JSON.stringify(values, null, 2));
  };

  return (
    <Provider store={store}>
      <QuizForm onSubmit={handleSubmit} />
      {/* <QuizFormResult result={result} /> */}
    </Provider>
  );
}
