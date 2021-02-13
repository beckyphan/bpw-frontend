import { Link } from "react-router-dom";

function Baby() {

  return(
    <div className="App">
      <header className="App-header">
        <h1>
          baby phan-wheeler
        </h1>
        <p>
          <Link to="/birthday" className="Hlink"><button className="soon">Coming Soon</button></Link>
        </p>
      </header>
    </div>
  )

}

export default Baby
