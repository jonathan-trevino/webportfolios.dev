import React, { useState } from "react";
import UploadCta from "../uploadcta";

const Portfolio = () => {
  const [portfolio, setPortfolio] = useState(null);
  const [portfolioTemp, setPortfolioTemp] = useState(null);
  return (
    <div className="space-y-[23px]">
      <UploadCta />
      <div className="space-y-3">
        <div className="flex-[1] flex flex-col space-y-[3px]">
          <label className="text-sm">Portfolio URL</label>
          <input
            type="text"
            placeholder={"https://www.example.com"}
            className="input input-bordered"
            onChange={(e: any) => setPortfolioTemp(e.target.value)}
          />
        </div>
        <div className="flex justify-end">
          <button
            className="btn btn-primary btn-sm"
            disabled={
              portfolioTemp
                ? portfolioTemp && portfolioTemp.includes(".")
                  ? false
                  : true
                : true
            }
          >
            Upload Portfolio
          </button>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
