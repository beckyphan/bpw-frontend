import React from 'react';
import NavBar from './NavBar';
import Guess from './Guess';

class Birthday extends React.Component {

  render() {
    let   guesses = [
        { name: "Brandon", month: 2, day: 11 },
        { name: "Becky", month: 2, day: 12},
        { name: "Allan", month: 2, day: 22},
        { name: "Annie", month: 2, day: 17},
        { name: "Andrew", month: 2, day: 16},
        { name: "Sarah", month: 2, day: 18},
        { name: "Dan", month: 2, day: 20},
        { name: "Grace", month: 2, day: 14},
        { name: "Mia", month: 2, day: 14},
        { name: "Nita", month: 2, day: 5},
        { name: "David", month: 2, day: 21},
        { name: "Jordyn", month: 2, day: 15},
        { name: "Jessica", month: 2, day: 11},
        { name: "Shap", month: 2, day: 13},
        { name: "Ben", month: 2, day: 14},
        { name: "Peter", month: 2, day: 12},
        { name: "Marshall", month: 2, day: 10},
        { name: "Jamie", month: 2, day: 12},
        { name: "Jennie", month: 2, day: 14},
        { name: "Ari", month: 2, day: 12},
        { name: "Zoe", month: 2, day: 18},
        { name: "Colleen", month: 2, day: 16},
        { name: "Karen", month: 2, day: 19}
      ]

    let sortedGuesses = guesses.sort((a, b) => a.day > b.day ? 1:-1)

    let today = new Date();

    return(
      <div className="BdayContainer">
        <NavBar />
        <h1>Birthday Guesses</h1>
        <div className="Guesses">
          {sortedGuesses.map((guess, i) => <Guess key={i} name={guess.name} month={guess.month} day={guess.day} status={today.getDate() > guess.day ? "out":"in"}/> )}
        </div>
      </div>
    )
  }
}

export default Birthday
