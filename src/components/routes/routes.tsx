import { Route, Routes } from "react-router-dom"
import { EditHeader } from "../main/edit/edit"
import { Main } from "../main/main"

export const AppRoutes = () => {
    return(
        <Routes>
            <Route path="/" element={<Main/>}></Route>
            <Route path="/edit" element={<EditHeader/>}></Route>
        </Routes>
    )
}