import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import CreatePost from "./pages/CreatePost";
import PageNotFound from "./pages/PageNotFound";
import PageLayout from "./components/PageLayout";
import { useState } from "react";

function App() {
  const [isAuth, setIsAuth] = useState(false);

  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={<PageLayout setIsAuth={setIsAuth} isAuth={isAuth} />}
        >
          <Route index element={<Home />} />
          <Route path="/login" element={<Login setIsAuth={setIsAuth} />} />
          <Route path="/createpost" element={<CreatePost />} />
        </Route>

        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default App;
