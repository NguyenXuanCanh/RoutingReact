import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import Header from './component/Header/Header';
import About from './Pages/About/About';
import ChonXe from './Pages/ChonXe/ChonXe';
import Home from './Pages/Home/Home';
import UseEffectDemo from './Pages/Hook/UseEffectDemo/UseEffectDemo';
import UseStateDemo from './Pages/Hook/UseStateDemo/UseStateDemo';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';

function App() {
  return (
    <BrowserRouter>
      {/* Dùng path exact Hoặc bao thêm thẻ Swtich bên ngoài hoặc dùng cả 2 để phòng ngừa hậu quả*/}
      <Switch>
        <div className="App">
          <Header></Header>
          <Route path='/home' exact component={Home}></Route>
          <Route path='/login' exact render={(propsRoute) => {
            return (
              <div>
                <h1>Login</h1>
                <Login {...propsRoute}></Login>
              </div>
            );
          }}></Route>
          <Route path='/register' exact render={(propsRoute) => {
            return (
              <Register></Register>
            );
          }}></Route>
          <Route path='/about' exact render={(propsRoute) => {
            return (
              <About></About>
            );
          }}></Route>
          <Route path='/demousestate' exact component={UseStateDemo}></Route>
          <Route path='/demouseeffect' exact component={UseEffectDemo}></Route>
          <Route path='/chonxe' exact component={ChonXe}></Route>

          <Route path='/' exact component={Home}></Route>
        </div>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
