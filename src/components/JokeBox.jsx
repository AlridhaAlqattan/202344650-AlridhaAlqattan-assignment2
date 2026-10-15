import { useState, useEffect } from 'react';


function JokeBox() {
    const [joke, setJoke] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    async function fetchJoke() {
        setLoading(true);
        setError(null);
        try {

            const url = "https://official-joke-api.appspot.com/jokes/programming/random";
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(`Failed to fetch joke`);
            }

            const data = await response.json();

            if (!data.length) {
                throw new Error(`There are no jokes available`);
            }


            setJoke(`${data[0].setup}, ${data[0].punchline}`);
        }
        catch (error) {
            console.error('Error fetching the joke:', error);
            setJoke('');
            setError('Failed to fetch joke. Please try again later.');
        }
        finally {
            setLoading(false);
        }
    }


    useEffect(() => {
        fetchJoke();
    }, []);

    return (
        <div id="jokeBox">
            <p>{joke}</p>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <button id="jokeButton" onClick={fetchJoke} disabled={loading} >
                {loading ? 'Loading...' : 'Get Another Joke'}
            </button>
        </div>
    );
}

export default JokeBox;