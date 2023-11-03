import {createBrowserRouter} from "react-router-dom"
import HomeScreen from "../pages/HomeScreen"
import LayOut from "../components/LayOut"

export const mainRouter = createBrowserRouter([
    {
        path: "/",
        element : <LayOut />,
        children : [
            {
                index : true,
                element : <HomeScreen />
            },
        ]
    }
])