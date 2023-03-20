import { useSelector } from "react-redux"
import { Route, Routes } from "react-router-dom"
import { EditHeader } from "../main/edit/edit"
import { Main } from "../main/main"
import { PageCreated } from "../main/page-created/page-created"
import { RootState } from "../store"

export const AppRoutes = () => {
    const name = useSelector((state: RootState) => state.name.name)
    return(
        <Routes>
            <Route path="/" element={<Main/>}></Route>
            <Route path="/edit" element={<EditHeader/>}></Route>
            <Route path={`/page/${name}`} element={<PageCreated/>}></Route>
        </Routes>
    )
}