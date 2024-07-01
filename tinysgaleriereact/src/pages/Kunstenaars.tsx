import Select from "../components/Select";

export default function Kunstenaars() {

    const options = [
        {value: "", text: "maak een keuze"},
        {value: "test", text: "test"},
        {value: "test2", text: "test2"},
        {value: "test3", text: "test3"},
        {value: "test4", text: "test4"},
        {value: "test5", text: "test5"},
    ]
    return (
        <div>
            <Select initialValue="test2" options={options} />
        </div>
    );
}
