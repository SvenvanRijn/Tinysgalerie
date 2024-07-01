import { useState, useEffect } from "react";
import axios from "axios";
import Card from "../components/Card";
import Grid from "../components/Grid";

export default function Kunstwerken() {
    const [kunstwerken, setKunstwerken] = useState([]);

    useEffect(() => {
        axios
            .get("http://tinysgalerie.test/api/kunstwerken")
            .then((response) => {
                setKunstwerken(response.data);
            })
            .catch((error) => {
                console.error("There was an error fetching the data!", error);
            });
    }, []);

    const elements = kunstwerken.map((kunstwerk: any) => (
        <Card
            key={kunstwerk.id}
            img={kunstwerk.afbeelding_path}
            title={kunstwerk.naam}
            omschrijving={kunstwerk.omschrijving}
        />
    ));
    return (
        <>
            <Grid children={elements} />
        </>
    );
}
