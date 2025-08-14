
import './App.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './Routing/Router'
function App() {


  return (
    <>
   <RouterProvider router={router} />
    </>
  )
}

export default App
