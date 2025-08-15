import {createBrowserRouter} from 'react-router-dom'
import Home from '../Pages/Home'
import Allusers from '../Pages/Allusers'

export const router = createBrowserRouter([
    {
        path:"/",
        element:<Home></Home>
    },
    {
        path:"/allusers",
        element:<Allusers></Allusers>
    }

])