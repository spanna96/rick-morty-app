import React, { useState } from "react";
import { getShownOrHiddenClass } from "../helpers";

import "./NavigationBar.css";

function NavigationBar({ isLoaded, totalPages, fetchData }) {
  const [currentPage, setCurentPage] = useState(1);

  const onClickButton = (count) => {
    const targetPage = currentPage + count;

    setCurentPage(targetPage);
    fetchData(targetPage);
  };

  return (
    <div className={`navigation-bar ${getShownOrHiddenClass(!isLoaded)}`}>
      <div
        className={`arrow ${getShownOrHiddenClass(currentPage === 1)}`}
        onClick={() => onClickButton(-1)}
      >
        &#8249;
      </div>

      {currentPage}

      <div
        className={`arrow ${getShownOrHiddenClass(currentPage === totalPages)}`}
        onClick={() => onClickButton(1)}
      >
        &#8250;
      </div>
    </div>
  );
}

export default NavigationBar;
