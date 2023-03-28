import { useSelector } from "react-redux"
import { RootState } from "../../store"

export const TextAndImage = () => {
    const data = useSelector((state: RootState) => state.data)
    
    return (
      <section className="text-and-image">
        <img
          className="text-and-image-image"
          src={data.textAndImage.image}
        ></img>
        <h1 className="text-and-image-text">{data.textAndImage.text}</h1>
      </section>
    );
}