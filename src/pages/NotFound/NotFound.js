import React from 'react';
import DynaTitle from '../../Helmet/DynaTitle';
import { useScrollTop } from '../../hooks/useScrollTop';

const NotFound = () => {
    useScrollTop();
    return (
        <div>
            <DynaTitle title="Not Found" />
            <h1>Your destination page not found...</h1>
        </div>
    );
};

export default NotFound;