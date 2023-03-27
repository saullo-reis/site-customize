import { useSelector } from "react-redux"
import { RootState } from "../../store"
import './page.sass'

export const Text = () => {
    const text = useSelector((state: RootState) => state.data)
    return(
        <section style={{backgroundColor: text.backgroundMain}} className="text">
            <h1 className="text-words">{text.text.text}</h1>
        </section>
    )
}