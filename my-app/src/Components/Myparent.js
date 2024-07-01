import Mychild from "./Mychild";


function Myparent() {
  return (
    <div>
      <h2>This is parent</h2>
      {/* <Mychild data='sachin'/>
      <Mychild data='kohli'/>
      <Mychild data='dhoni'/>
      <Mychild data='rahul'/>
      <Mychild data='gill'/> */}
      {/* {new Mychild()} */}
      <Mychild/>
    </div>
  ); 
}

export default Myparent