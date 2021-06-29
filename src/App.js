import "./App.css";
import NavBar from "./Navbar";
function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="container-fluid justify-content-center mt-5 mb-5" >
        <div className="row ml-5 mr-5 ">
          <div className="col-sm-6 mr-5" style={{height:"100vh",backgroundColor:"red",borderRadius:'20px'}}>
           <h3>Civility</h3>
          </div>
          <div className="col-sm-5">
            <div className="row mb-2" style={{height:"45vh",backgroundColor:"red",borderRadius:'20px'}}>
           
            </div>
            <div className="row mb-2" style={{height:"45vh",backgroundColor:"red",borderRadius:'20px'}}>
         
            </div>
            <div className="row justify-content-center" style={{height:'50px'}}>
          <button className='btn btn-success'>submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
