import React, { useEffect, useRef } from 'react';

export const useDidMountEffect = (func, deps) => {
    const didMount = useRef(false);

    useEffect(() => {
        console.log(didMount);
        if (didMount.current) func();
        else didMount.current = true;

        return () => {
            didMount.current = false;
        }
    }, deps);
}