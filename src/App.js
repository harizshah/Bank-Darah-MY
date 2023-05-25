// import {BrowserRouter, Routes, Route} from "react-router-dom";
// import Home from "./pages/Home";
// import Login from "./pages/Login";
// import Register from "./pages/Register";
// import ProjectedPage from "./components/ProjectedPage";
//
// function App() {
//   return (
//       <BrowserRouter>
//         <Routes>
//             <Route path="/" element={<ProjectedPage><Home /><ProjectedPage>} />
//             <Route path="/login" element={<Login />} />
//             <Route path="/register" element={<Register />} />
//             <Routes />
//       </BrowserRouter>
//   );
// }
//
// export default App;

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ProtectedPage from "./components/ProtectedPage";
import {useSelector} from "react-redux";
import Spinner from "./components/Spinner";


function App() {
    const {loading} = useSelector((state) => state.loaders);
    return (
        <div>
            { loading && <Spinner />}
            <BrowserRouter>
                <Routes>
                    <Route
                        path="/"
                        element={<ProtectedPage><Home /></ProtectedPage>}
                    />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;

