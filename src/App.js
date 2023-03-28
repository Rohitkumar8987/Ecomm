// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router,Route,Link,Switch,Routes } from 'react-router-dom';
import Header from './common/header/Header';


function App() {
  return (
  <>
     <Router>
      <Header/>
      <Routes>
  <Route path='/' element={''}/>
  
</Routes>

     </Router>
  </>
  );
}

export default App;
