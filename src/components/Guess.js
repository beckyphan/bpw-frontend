function Guess(props) {

  return(
    <div className={"Card " + props.status}>
        {props.name}<br/>
        {props.month}/{props.day}
    </div>
  )

}

export default Guess
