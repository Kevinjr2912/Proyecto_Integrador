import { useState, useEffect } from "react";

export default function fetchUse(url) {
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch(url,{
            method: "POST",
            body : JSON.stringify()
        })
            .then((res) => res.json())
            .then((data) => setData(data))
            .catch((error) => setError(error));
    }, []);

    return { data, error };
}
