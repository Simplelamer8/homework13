import { useParams } from "react-router-dom";

const Test = () => {

    const params = useParams();

    return(
        <>
        {
            params.id
        }</>
    )
}

export default Test;