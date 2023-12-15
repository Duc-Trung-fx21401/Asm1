import searchPop from "./SearchPopup.module.css";

const SearchPopup = () => {
  return (
    <div className={searchPop.box}>
      <h2 className={searchPop.h2}>Search</h2>
      <div>
        <p>Destination</p>
        <input type=" text" className={searchPop.input} />
      </div>
      <div>
        <p>Check-in Date</p>
        <input
          type="text"
          placeholder="06/24/2022 to 06/24/2022"
          className={searchPop.input}
        />
      </div>
      <div>
        <p className={searchPop.opt}>Options</p>
        <div className={searchPop.option}>
          <p>Min price per right</p>
          <input type="number" className={searchPop.input1} />
        </div>
        <div className={searchPop.option}>
          <p>Max price per right</p>
          <input type="number" className={searchPop.input1} />
        </div>
        <div className={searchPop.option}>
          <p>Adult</p>
          <input type="number" className={searchPop.input1} />
        </div>
        <div className={searchPop.option}>
          <p>Children</p>
          <input type="number" className={searchPop.input1} />
        </div>
        <div className={searchPop.option}>
          <p>Room</p>
          <input type="number" className={searchPop.input1} />
        </div>
      </div>
      <button className={searchPop.bnt}>Search</button>
    </div>
  );
};
export default SearchPopup;
