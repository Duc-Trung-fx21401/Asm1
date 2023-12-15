import style from "./HotelTypeItems.module.css";

const HotelTypeItems = (props) => {
  return (
    <div>
      <img src={props.image} className={style.hotelimage}></img>
      <div className={style.hotelfont}>
        <h2>{props.name}</h2>
        <p>{props.count}</p>
      </div>
    </div>
  );
};
export default HotelTypeItems;
