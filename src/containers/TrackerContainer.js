import { useState } from 'react';
import TrackerDisplay from "../components/TrackerDisplay";
import FormContainer from "./FormContainer";

const TrackerContainer = ({name, goal}) => {

    const [glasses, setGlasses] = useState(0);

    const handleUpdate = (updateAmount) => {
        if (glasses + updateAmount < 0) {
            setGlasses(0);
        }
        else {
            setGlasses(parseInt(glasses + updateAmount));
        }
    }

    const handleEmpty = () => {
        setGlasses(0);
    }

    return (
        <>
            <TrackerDisplay glasses={glasses} name={name} goal={goal} />
            <FormContainer handleUpdate={handleUpdate} handleEmpty={handleEmpty} />
        </>
    )
}

export default TrackerContainer;
