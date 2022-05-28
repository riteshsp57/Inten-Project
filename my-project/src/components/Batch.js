import React, { useState } from "react";
import "./Batch.css";

export default function Batch(props) {
  const { title, description, eff, number } = props;
  const [toggle, setToggle] = useState(true);

  console.log(number);

  const changeId = () => {
    setToggle(!toggle);
  };

  return (
    <div className={`${eff}`}>
      <div>
        {number == "1" && (
          <div>
            <p className=" py-4 md:p-4 font-bold text-pb text-sky-700 font-nunito">
              Description
            </p>
            <p className="md:pl-4">
              The course aims at enhancing mathematical skills and brain
              development. It improves one's number sense and helps them gain
              the ability to understand relationships between quantities, while
              stimulating their brain and improving observation skills.
            </p>
          </div>
        )}
        <div
          className="h-12 py-4 md:p-4 font-bold text-sky-700 text-pb"
          style={{ display: "flex" }}
        >
          {title}
          <svg
            style={{ paddingBottom: "13px" }}
            onClick={changeId}
            height="48"
            viewBox="0 0 48 48"
            width="48"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M14 20l10 10 10-10z" />
            <path d="M0 0h48v48h-48z" fill="none" />
          </svg>
        </div>
      </div>
      {toggle == true && <p className="md:pl-4" style={{"font-family": "Nunito,Helvetica", "whiteSpace": "pre-wrap"}}>{description}</p>}
    </div>
  );
}
