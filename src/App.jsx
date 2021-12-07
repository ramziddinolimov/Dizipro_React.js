import Login from "./pages/Login/Login"
import "./App.scss"
import { BrowserRouter } from "react-router-dom"

function App() {
    return (
        <BrowserRouter>
            <Login />
        </BrowserRouter>
    );
}

export default App;