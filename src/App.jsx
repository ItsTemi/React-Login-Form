import "./App.css";
import images from "./images/google.svg";

function App() {
  return (
    <div className="main-container">
      <div className="background-image">
        <h4>SkillupAfrica Blog</h4>

        <div>
          <p>
            <h2>
              The Ancient city of Rome and the <br /> history of the great city.
            </h2>
          </p>

          <br />
          <h3>Olive Junior</h3>
          <h5>Lead Writer, SkillupAfrica</h5>
        </div>
      </div>
      <div className="main-container2">
        <div>
          <h3>Create an Account</h3>
          <br />
          <p className="p2">Let's start a journey to great articles</p>
        </div>
        <br />
        <div className="inputs">
          <input type="text" placeholder="Name" />
          <br />
          <br />
          <input type="text" placeholder="Email Address" />
          <br />
          <br />
          <input type="text" placeholder="Add Profile Picture" />
          <br />
          <br />
          <input type="text" placeholder="Password" />
          <br />
          <br />
          <input type="text" placeholder="Confirm Password" />
        </div>
        <br />
        <div className="inputs2">
          <button className="btn1">Create an account</button>
          <br />
          <br />
          <button className="btn2">
            <img src={images} alt="" /> Sign up with Google
          </button>
        </div>
        <br />
        <p className="p3">Aready have an account?Log in</p>
      </div>
    </div>
  );
}

export default App;
