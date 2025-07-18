import { BrowserRouter, Route, Routes } from "react-router-dom"
import Signup from "./pages/Signup"
import Signin from "./pages/Signin"
import CreateWorkspace from "./pages/CreateWorkspace"
import Home from "./pages/Home"

function App() {
  return (
    <>
      <BrowserRouter>
        <div>
          <Routes>
            <Route path="/sign_up" element={<Signup/>}></Route>
            <Route path="/sign_in" element={<Signin/>}></Route>
            <Route path="/" element={<CreateWorkspace/>}></Route>
            <Route path="/:workspaceId/:channelId" element={<Home/>}></Route>
          </Routes>
        </div>
      </BrowserRouter>
    </>
  )
}

export default App
