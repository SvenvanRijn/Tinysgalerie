import { Link } from "react-router-dom";

interface Props {
    img?: string;
    title?: string;
    slug?: string;
    omschrijving?: string;
}

export default function Card({ img = 'https://via.placeholder.com/400x200', title = 'No Title', slug = '', omschrijving = ''}: Props) {

    return (
        <Link to={`/kunstwerken/${slug}`} className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
            <img
                className="w-full"
                src="https://via.placeholder.com/400x200" // TODO: Replace with actual {img}
                alt={title}
            />{img}
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{title}</div>
                <p className="text-gray-700 text-base">
                    {omschrijving}
                </p>
            </div>
            <div className="px-6 pt-4 pb-2">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    #tag1
                </span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    #tag2
                </span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    #tag3
                </span>
            </div>
        </Link>
    );
}
