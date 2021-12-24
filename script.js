const button = document.querySelector('button');

const sayJoke = (string) => {
  // Initialize new SpeechSynthesisUtterance object
  let speech = new SpeechSynthesisUtterance();

  speech.text = string;

  //joke is read to the browser
  window.speechSynthesis.speak(speech);
  console.log(string);
};

// get joke from api
const getJoke = async () => {
  const jokeApi = 'https://v2.jokeapi.dev/joke/Programming?type=twopart';
  try {
    //fetch joke from api
    const joke = await (await fetch(jokeApi)).json();

    //Output joke audio
    sayJoke(`${joke.setup} ... ${joke.delivery}`);
  } catch (error) {
    // catch all errors
    console.log('whoops...', error);
  }
};

// Listen to button click to fetch new joke
button.addEventListener('click', getJoke);
