import { AddComment } from "./components/AddComment";
import { CommentList } from "./components/CommentList";
import { GlobalProvider } from "./context/GlobalState";
import "./App.css";

function App() {
  return (
    <GlobalProvider className="App">
      <AddComment />
      <CommentList />
    </GlobalProvider>
  );
}

export default App;
