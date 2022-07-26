
import './App.css';
import Header from './component/header';
import Footer from './component/footer';
import Main from './component/main';
import 'bootstrap/dist/css/bootstrap.min.css';
import Selectedbeast from './component/SelectedBeast';

function App() {
  return (
    <div className="App">
      

        <Header/>
        
        <Main/>
        <Selectedbeast/>

        <Footer/>
        
     
    </div>
  );
}

export default App;
