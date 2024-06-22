import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Allroutes } from './components/Allroutes';

function App() {
  return (
    <div className="flex flex-col justify-between" >
     <Header/>
     <Allroutes/>
     <Footer/>
    </div>
  );
}

export default App;
