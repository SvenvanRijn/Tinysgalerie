import { useState, useEffect} from "react";
import {  useParams } from "react-router-dom";
import axios from "axios";
import Card from "../components/Card";
import Grid from "../components/Grid";

export default function Kunstwerken() {
    const [kunstwerken, setKunstwerken] = useState([]);
    const {id} = useParams();

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
            {id}
            <Grid children={elements} />
        </>
    );
}
