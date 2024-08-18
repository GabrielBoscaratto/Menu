import { useEffect, useState } from 'react';
import { useFoodDataMutate } from '/Users/gabrielsoares/Downloads/Siri Cascudo/menu2/src/hooks/useFoodDataMutate.ts';
import { FoodData } from '/Users/gabrielsoares/Downloads/Siri Cascudo/menu2/src/interface/FoodData.ts'
import "./modal.css";

interface InputProps {
    label: string,
    value: string | number,
    updateValue(value: any): void
}   

interface ModalProps {
    closeModal(): void
}

const Input = ({ label, value, updateValue }: InputProps) => {
    return (
        <>
            <label>{label}</label>
            <input value={value} onChange={event => updateValue(event.target.value)}></input>
        </>
    )
}

export function CreateModal({ closeModal }: ModalProps){
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [image, setImage] = useState("");
    const { mutate, isSuccess, isLoading } = useFoodDataMutate();

    const submit = () => {
        const foodData: FoodData = {
            title, 
            price,
            image
        }
        mutate(foodData)
    }

    useEffect(() => {
        if(!isSuccess) return 
        closeModal();
    }, [isSuccess])


    return(
        <div className="modal-overlay">
            <div className="modal-body">
                <button onClick={closeModal} className="close-button">X</button>
                <h2>Cadastre um novo item no cardápio</h2>
                <form className="input-container">
                    <Input label="Título" value={title} updateValue={setTitle}/>
                    <Input label="Preço" value={price} updateValue={setPrice}/>
                    <Input label="Imagem" value={image} updateValue={setImage}/>
                </form>
                <button onClick={submit} className="btn-secondary">
                    {isLoading ? 'Publicando...' : 'Publicar'}
                </button>
            </div>
        </div>
    )
}