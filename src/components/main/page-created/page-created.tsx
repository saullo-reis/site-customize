import { useSelector } from "react-redux"
import { RootState } from "../../store"
import { Box } from "./box"

export const PageCreated = () => {
    const layout = useSelector((state: RootState) => state.data.layout)
    return (
    <>
    {layout === "box" && <Box/>}
    </>
    )
}