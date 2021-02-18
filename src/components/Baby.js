import { Link } from "react-router-dom";

function Baby() {

  return(
    <div className="App">
      <header className="App-header">
        <h1>
          Hayden J. Phan-Wheeler
        </h1>
        <p>
          <Link to="/birthday" className="Hlink"><button className="soon">has arrived!</button></Link>
        </p>
      </header>
    </div>
  )

}

export default Baby
