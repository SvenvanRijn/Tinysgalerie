import Option from "./Option";
import { useState } from "react";

interface Props {
    initialValue?: string;
    options?: object[];
    onChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

export default function Select({ initialValue= "test2", options = [], onChange = () => {}}: Props) {

    const [value, setValue] = useState(initialValue);

    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setValue(event.target.value);
        onChange(event);
    };
    return (
        <select value={value} onChange={handleChange}>
            {options.map((option: any) => <Option key={option.value} value={option.value} text={option.text} />)}
        </select>
    );
}

