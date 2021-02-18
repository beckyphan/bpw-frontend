import React from 'react';
import NavBar from './NavBar';
import Footer from './Footer';
import Guess from './Guess';

class Birthday extends React.Component {

  render() {
    let   guesses = [
        {status: "out", name: "Brandon", month: 2, day: 11 },
        {status: "out", name: "Becky", month: 2, day: 12},
        {status: "out", name: "Allan", month: 2, day: 22},
        {status: "out", name: "Annie", month: 2, day: 17},
        {status: "out", name: "Andrew", month: 2, day: 16},
        {status: "in", name: "Sarah", month: 2, day: 18},
        {status: "out", name: "Dan", month: 2, day: 20},
        {status: "out", name: "Grace", month: 2, day: 14},
        {status: "out", name: "Mia", month: 2, day: 14},
        {status: "out", name: "Nita", month: 2, day: 5},
        {status: "out", name: "David", month: 2, day: 21},
        {status: "out", name: "Jordyn", month: 2, day: 15},
        {status: "out", name: "Jessica", month: 2, day: 11},
        {status: "out", name: "Shap", month: 2, day: 13},
        {status: "out", name: "Ben", month: 2, day: 14},
        {status: "out", name: "Peter", month: 2, day: 12},
        {status: "out", name: "Marshall", month: 2, day: 10},
        {status: "out", name: "Jamie", month: 2, day: 12},
        {status: "out", name: "Jennie", month: 2, day: 14},
        {status: "out", name: "Ari", month: 2, day: 12},
        {status: "in", name: "Zoe", month: 2, day: 18},
        {status: "out", name: "Colleen", month: 2, day: 16},
        {status: "out", name: "Karen", month: 2, day: 19},
        {status: "out", name: "Nita's #2 Guess", month: 2, day: 8},
        {status: "out", name: "Nita's #3 Guess", month: 2, day: 11},
        {status: "out", name: "Tiffle", month: 2, day: 19}
      ]

    let sortedGuesses = guesses.sort((a, b) => a.day > b.day ? 1:-1)

    return(
      <div className="BdayContainer">
        <NavBar />
        <h1>Birthday Guesses</h1>
        <h2>Born on 2/18/2021</h2>
        <h3>Our winners are...</h3>
        <div className="Guesses">
          {sortedGuesses.map((guess, i) => <Guess key={i} name={guess.name} month={guess.month} day={guess.day} status={guess.status}/> )}
        </div>
        <Footer />
      </div>
    )
  }
}

export default Birthday
