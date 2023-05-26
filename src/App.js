import './App.css';
import Routes from './components/Routes';
import Nav from './components/Nav';

const whiskey = 'https://cdn.pixabay.com/photo/2016/10/10/14/13/dog-1728494_1280.png';
const duke = 'https://cdn.pixabay.com/photo/2015/11/17/13/13/bulldog-1047518_1280.jpg';
const perry = 'https://cdn.pixabay.com/photo/2012/05/07/13/41/dog-48490_1280.png';
const tubby = 'https://cdn.pixabay.com/photo/2018/05/26/18/06/dog-3431913_1280.jpg';

function App(props) {
  console.log(props)
  return (
    <div className="App">
      <Nav />
      <Routes />
    </div>
  );
}

App.defaultProps = {
  dogs: [
    {
      name: "Whiskey",
      age: 5,
      src: whiskey,
      facts: [
        "Whiskey loves eating popcorn.",
        "Whiskey is a terrible guard dog.",
        "Whiskey wants to cuddle with you!"
      ]
    },
    {
      name: "Duke",
      age: 3,
      src: duke,
      facts: [
        "Duke believes that ball is life.",
        "Duke likes snow.",
        "Duke enjoys pawing other dogs."
      ]
    },
    {
      name: "Perry",
      age: 4,
      src: perry,
      facts: [
        "Perry loves all humans.",
        "Perry demolishes all snacks.",
        "Perry hates the rain."
      ]
    },
    {
      name: "Tubby",
      age: 4,
      src: tubby,
      facts: [
        "Tubby is really stupid.",
        "Tubby does not like walks.",
        "Angelina used to hate Tubby, but claims not to anymore."
      ]
    }
  ]
}

export default App;
