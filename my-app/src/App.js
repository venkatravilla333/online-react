import Myparent from "./Components/Myparent";
import Myjsx from "./Jsx/MyJsx";
import Parent from "./Props/child to child/Parent";
// import Parent from "./Props/child to parent/Parent";
// import Parent from "./Props/parent to child/Parent";


function App() {
  return (
    <div className="app">
      {/* <h1>App component</h1> */}
      {/* <Myparent/> */}
      {/* <Myjsx/> */}
      <Parent/>
      
    </div>
  );
}

export default App