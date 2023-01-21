import React, { useEffect } from 'react'
import { PropTypes } from "prop-types"
import { useNavigate } from "react-router-dom"


function Redirect({ to }) {
    const navigate = useNavigate();
    useEffect(() => {
        let didCancel = false;
        const gotoPage = () => navigate(to);
        if (!didCancel) {
            gotoPage()
        }

        return () => {
            didCancel = true
        }
    }, [navigate, to])

    return ('')
}

Redirect.propTypes = {
    to: PropTypes.string.isRequired,
}

export default Redirect