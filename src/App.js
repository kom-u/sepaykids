import { BrowserRouter, Route } from "react-router-dom";

import "./app.css";

import Homepage from "./pages/homepage/Homepage";
import Product from "./pages/product/Product";

function App() {
  return (
    <div className='app'>
      <BrowserRouter>
        <Route path='/' exact component={Homepage} />
        <Route path='/products/:productId' component={Product} />
      </BrowserRouter>
    </div>
  );
}

export default App;
