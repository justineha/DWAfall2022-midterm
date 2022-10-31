import './App.css';
import Home from './pages/Home'
import Player from './pages/PlayerPic';
import Picture from './pages/NBAPlayer';
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
  {
    path: "/",
    element: <Picture />,
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
