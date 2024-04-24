import "./App.css";

import { ThemedComponent, ThemeProvider } from "./components/ThemeContext";
import RefHook from "./components/RefHook";
import UseMemoHook from "./components/UseMemoHook";
import UseStateHook from "./components/UseStateHook";
import UseCallBackHook from "./components/UseCallBackHook";
import ControlledComponents from "./components/ControlledComponents";
import UnControlledComponents from "./components/UnControlledComponents";
import Parent from "./components/Parent";
import Form from "./components/Form";
import UseReducerHook from "./components/UseReducerHook";

function App() {
  return (
    <>
      <div className="App">
        <header className="App-header">
          {/*
          <UseStateHook/>
          <RefHook />
          <UseMemoHook /> 
          <UseCallBackHook />
          <ControlledComponents/>
          <UnControlledComponents/>
          <Parent />
          <Form/>
          
          */}
          <UseReducerHook/>
        </header>
      </div>

      {/* <ThemeProvider>
        <ThemedComponent/>
      </ThemeProvider> */}
    </>
  );
}

export default App;
