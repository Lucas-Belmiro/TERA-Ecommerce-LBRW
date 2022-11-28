import React, { useEffect, useState } from 'react'
import './Loading.css'
import Spinner from 'react-bootstrap/Spinner'

const Loading = () => {
    return (
        <div data-test-id="loading" className="loading-overlay">
            <Spinner animation="border" variant="primary" />
        </div>
    )
}

export default Loading
