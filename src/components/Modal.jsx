import { useGlobalContext } from "../context"

const Modal = () => {

    const {showModal, closeModal, selectedMeal } = useGlobalContext()
    const {strMealThumb: image, strMeal: title, strInstructions: text, strSource: source} = selectedMeal

    return (
        <div className="modal-overlay">
            <div className="modal-container">
                <img src={image} className="img modal-img" />
                <div className="modal-content">
                    <h4>{title}</h4>
                    <p>Cooking instructions</p>
                    <p>{text}</p>
                    <a href={source} target="_blank">Original Source</a>
                    <button className="btn btn-hipster close-btn" onClick={closeModal}>close</button>
                </div>
            </div>
        </div>
    )
}

export default Modal
