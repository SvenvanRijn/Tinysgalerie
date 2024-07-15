import { useEffect, useState } from "react";
import BaseForm from "../components/BaseForm";
import FormTextInput from "../components/FormTextInput";


export default function FormPage() {

    const [formElements, setFormElements] = useState([]);


    function handleFormElementsChange(event: React.ChangeEvent<HTMLInputElement>) {

        setFormElements({
            ...formElements,
            [event.target.name]: event.target.value
        })
    }
    return (
        <BaseForm>
            <FormTextInput  name="name" label="Name" placeholder="vul je naam in" onChange={handleFormElementsChange}/>
            <FormTextInput  name="plaats" label="Due" placeholder="vul je naam in" onChange={handleFormElementsChange}/>
            <FormTextInput  name="hoi" label="kek" placeholder="vul je naam in" onChange={handleFormElementsChange}/>
        </BaseForm>
    );
}
