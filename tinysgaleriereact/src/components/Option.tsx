interface Props {
    value?: string;
    text?: string;
}
export default function Option({ value = "", text = "Kies een Optie"}: Props) {

    return (
        <option value={value}>{text}</option>
    );
}
