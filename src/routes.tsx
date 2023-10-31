import { Route, Routes } from "react-router-dom"

import UserList from "./pages/Users/List"
import UserCreate from "./pages/Users/Create"
import UserEdit from "./pages/Users/Edit"

export default function AppRoutes() {
    return (
        <Routes>
            <Route path="/users">
                <Route path="/users/" element={<UserList />} />
                <Route path="/users/new" element={<UserCreate />} />
                <Route path="/users/:id" element={<UserEdit />} />
            </Route>
        </Routes>
    )
}
