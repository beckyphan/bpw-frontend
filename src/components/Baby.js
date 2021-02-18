import { Link } from "react-router-dom";
import IMG_3822 from "../media/IMG_3822.PNG"

function Baby() {

  return(
    <div className="App">
      <header className="App-header">
        <img src={IMG_3822} alt="baby phan-wheeler"/>
        <p>
          <Link to="/birthday" className="Hlink"><button className="soon">Birthday Guess Winners</button></Link>
        </p>
      </header>
    </div>
  )

}

export default Baby
