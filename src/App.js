import './App.css';
import Home from './pages/Home'
import Generator from './pages/PlayerPic';
import Definition from './pages/NBAPlayer';
import {
  createBrowserRouter, 
  RouterProvider, 
} from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/",
    element: <Player />,
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
