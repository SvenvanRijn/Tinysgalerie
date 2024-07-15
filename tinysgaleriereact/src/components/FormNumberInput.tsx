import { useState } from "react";


interface Props {
    name: string;
    label: string;
    placeholder: string;
    initValue?: number;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    required?: boolean;
}

export default function FormNumberInput({
    name,
    label,
    placeholder,
    initValue = 0,
    onChange = () => {},
    required = false,
}: Props) {

    const [value, setValue] = useState(initValue);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue((event.target as HTMLInputElement).valueAsNumber );
        onChange(event);
    };

    return (
        <div className="form__group">
            <label className="form__label" htmlFor={name}>{label}:</label>
            <input className="form__input" type="number" name={name} placeholder={placeholder} value={value} onChange={handleChange} required={required} />
        </div>
    );
}
