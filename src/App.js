import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  return (
    <>   
    <Navbar title="TextUtils" aboutText="About"/>
    <div className="container my-3">
    <TextForm heading="Enter The text to analyse below"/>
    </div>
    </>
  );
}

export default App;
