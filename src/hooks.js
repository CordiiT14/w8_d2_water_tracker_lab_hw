import React, {useState, useEffect} from 'react';

export const useToggle = () => {

    const [toggleState, setToggleState] = useState(true);

    const toggle = () => {
        setToggleState(!toggleState);
    }

    return {toggleState, toggle};
}