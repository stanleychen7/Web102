import './App.css';
import Flashcard from './component/flashcard';

const App = () => {

  return (
    <div className="App">
      <div className="header">
        <h1 className= "title">Traffic Sign</h1>
        <p className="description">Study and remember traffic signs</p>
        <h2>Total Cards: 16</h2>
      </div>
      <Flashcard/>
    </div>
  )
}

export default App