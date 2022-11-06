import React, { useEffect, useState } from "react";
import "./Loading.css";

//import api from '../../../services/api';

const Loading = () => {
  return (
    <div data-test-id="loading" className="loading-overlay">
      Loading...
    </div>
  );
};

export default Loading;
