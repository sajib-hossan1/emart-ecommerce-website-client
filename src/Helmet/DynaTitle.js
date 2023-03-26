import React from 'react';
import { Helmet } from 'react-helmet';

const DynaTitle = ({title}) => {
    return (
        <Helmet>
            <title>{title} - EMart - Smart Shopping</title>
        </Helmet>
    );
};

export default DynaTitle;