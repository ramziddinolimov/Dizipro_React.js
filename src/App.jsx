import Login from "./pages/Login/Login"
import "./App.scss"
import { BrowserRouter } from "react-router-dom"
import Registration from "./pages/Registration/Registration";

function App() {
    return (
        <BrowserRouter>
            <Registration />
            {/* <Login /> */}
        </BrowserRouter>
    );
}

export default App;