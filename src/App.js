import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextBox from './components/Textbox';

function App() {
  return (
    <>
    
<Navbar title="ReactJS"></Navbar>

<div className='container my-3'>
  <TextBox heading="enter your text below."></TextBox>
    </div>

    <div className='container'>
<About/>
</div>
    </>
  );
}

export default App;
