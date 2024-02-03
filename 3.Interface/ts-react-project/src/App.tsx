import { useState } from "react";
import "./App.css";

function App() {
  return (
    <>
      <Task task="GO gym" description="ON TIME" done={false}></Task>
    </>
  );
}

interface TaskProps {
  task: string;
  description: string;
  done: boolean;
}

function Task(props: TaskProps) {
  const [buttonText, setButtonText] = useState(props.done ? "COMPLETED" : "Mark as Complete");

  const handleButtonClick = () => {
    if (!props.done) {
      setButtonText("COMPLETED");
    }
  };

  return (
    <div>
      <h1>{props.task}</h1>
      <p>{props.description}</p>
      <button disabled={props.done} onClick={handleButtonClick}>
        {buttonText}
      </button>
    </div>
  );
}

export default App;
