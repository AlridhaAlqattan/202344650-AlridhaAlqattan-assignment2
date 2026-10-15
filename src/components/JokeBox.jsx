import {useState, useEffect} from 'react';


function JokeBox() {
  const [joke, setJoke] = useState('');

  function fetchJoke() {
    const url = "https://official-joke-api.appspot.com/jokes/programming/random";
    fetch(url)
      .then(response => response.json())
      .then(data => {
        const jokeData = data[0];
        setJoke(`${jokeData.setup}, ${jokeData.punchline}`);
      })
      .catch(error => {
        console.error('Error fetching the joke:', error);
        setJoke('Fetching a joke failed. apologies for the inconvenience.');
      });
    }

    useEffect(() => {
        fetchJoke();}, []);

    return (
        <div id="jokeBox">
            <p>{joke}</p>
            <button onClick={fetchJoke}>Get Another Joke</button>
        </div>
    );
}

export default JokeBox;