import { BrowserRouter, Route, Routes } from "react-router-dom";
import DefaultLayout from "./layouts/DefaultLayouts";
import TaskList from "./pages/TaskList";
import AddTask from "./pages/AddTask";
import GlobalProvider from "./context/GlobalContext";

function App() {

  return (
    <>
      <BrowserRouter>
        <GlobalProvider>
          <Routes>
            <Route element={<DefaultLayout />}>
              <Route index element={<TaskList />} />
              <Route path="/add" element={<AddTask />} />
            </Route>
          </Routes>
        </GlobalProvider>
      </BrowserRouter>
    </>
  )
}

export default App
