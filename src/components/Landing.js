import React, { useState, useEffect } from "react";

//api
import getcoins from "../services/api";

function Landing() {
  useEffect(() => {
    const fetchapi = async () => {
      const data = await getcoins();
      console.log(data);
    };

    fetchapi();
  }, []);

  return <div></div>;
}

export default Landing;
