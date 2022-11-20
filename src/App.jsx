import './App.css';
import Header from './components/header/header'
import HomePage from './components/homepage/homepage'
import TopAdmits from './components/topadmits/topadmits';
import Desire from './components/desire/desire';
import Features from './components/features/features';
import Whatsapp from './components/whatsapp/whatsapp';
import Footer from './components/footer/footer';
function App() {
  return (
    <div className="App">
       <Header></Header>
       <div className='homepage'>
        <HomePage></HomePage>
       </div>
       <div>
        <TopAdmits></TopAdmits>
       </div>
       <div>
         <Desire />
       </div>
       <div>
       <Features />
       </div>
       <Whatsapp />
       <Footer />
    </div>
  );
}

export default App;
