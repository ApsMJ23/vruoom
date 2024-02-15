/**
 * @Description Component to apply interceptor to all requests and responses made using axios
 */

import React from 'react';
import axios from 'axios';
import { useNavigate, useSearchParams } from 'react-router-dom';
import {applyInterceptor} from "./Interceptor";

function ApplyInterceptor() {
    const [searchParams, setSearchParams] = useSearchParams();
    const navigate = useNavigate();

    React.useEffect(() => {
        applyInterceptor(axios, navigate);
    }, [navigate]);

    return <></>;
}

export default ApplyInterceptor;
