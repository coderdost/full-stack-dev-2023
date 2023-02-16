import AddProduct from './AddProduct';
import './App.css';
import ProductList from './ProductsList';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";



const router = createBrowserRouter([
  {
    path: "/",
    element:<ProductList></ProductList> ,
  },
  {
    path: "/add",
    element: <AddProduct></AddProduct>,
  }
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
