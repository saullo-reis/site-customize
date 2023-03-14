import { Route, Routes } from "react-router-dom"
import { EditHeader } from "../main/editheader/editheader"
import { Main } from "../main/main"

export const AppRoutes = () => {
    return(
        <Routes>
            <Route path="/" element={<Main/>}></Route>
            <Route path="/edit/header" element={<EditHeader/>}></Route>
        </Routes>
    )
}