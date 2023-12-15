import heaederstyle from "./HeaederInput.module.css";
import { useState, useEffect } from "react";
import { DateRange } from "react-date-range";
import { format, addDays } from "date-fns";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file

const HeaderInput = () => {
  const rePlace = () => {
    window.location.replace("/search");
  };
  const [openDate, setOpenDate] = useState(false);
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 7),
      key: "selection",
    },
  ]);

  return (
    <div className={heaederstyle.header}>
      <div className={heaederstyle.input}>
        <div className={heaederstyle.input1}>
          <div className={heaederstyle.input1}>
            <i className="fa fa-bed" />
            <input
              className={heaederstyle.input2}
              type="text"
              placeholder="Where are you going?"
              defaultValue={""}
              readOnly
            />
          </div>
          <div className={heaederstyle.input1}>
            <i className="fa  fa-calendar" />
            <div></div>
            <input
              value={`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(
                date[0].endDate,
                "MM/dd/yyyy"
              )}`}
              readOnly
              onClick={() => setOpenDate(!openDate)}
              className={heaederstyle.input2}
            />
            {openDate && (
              <DateRange
                className={heaederstyle.input3}
                onChange={(item) => setDate([item.selection])}
                showSelectionPreview={true}
                moveRangeOnFirstSelection={false}
                ranges={date}
              />
            )}
          </div>
          <div className={heaederstyle.input1}>
            <i className="fa fa-solid fa-female"></i>
            <input
              className={heaederstyle.input2}
              type="text"
              placeholder="1 adult - 0 children - 1 room"
              defaultValue={""}
              readOnly
            />
          </div>
        </div>
        <button className={heaederstyle.input_bnt} onClick={rePlace}>
          Search
        </button>
      </div>
    </div>
  );
};

export default HeaderInput;
