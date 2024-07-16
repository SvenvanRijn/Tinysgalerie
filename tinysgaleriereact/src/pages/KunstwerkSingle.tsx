import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

type Kunstwerk = {
    naam: string;
    omschrijving: string;
    afbeelding_path: string;
    slug: string;
    id: number;
    dimensies: string;
    datum: string;
    locatie: string;
    kunstenaar: {
        naam: string;
        slug: string;
        email: string;
        website: string;
    };
};
export default function KunstwerkSingle() {

    const [kunstwerk, setKunstwerk] = useState<Kunstwerk | null>(null);

    const {slug} = useParams();
    useEffect(() => {
        axios
            .get("http://tinysgalerie.test/api/kunstwerken/" + slug)
            .then((response) => {
                setKunstwerk(response.data);
            })
            .catch((error) => {
                console.error("There was an error fetching the data!", error);
            });
    }, []);

    return (
        <div>
            {kunstwerk &&
                <div>
                    <h1>{kunstwerk.naam}</h1>
                    <img src={kunstwerk.afbeelding_path} alt={kunstwerk.naam} />
                    <p>{kunstwerk.omschrijving}</p>
                </div>
            }
        </div>
    );
}
