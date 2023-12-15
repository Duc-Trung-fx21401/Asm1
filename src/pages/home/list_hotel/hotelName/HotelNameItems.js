import hotelstyle from "./HotelNameItems.module.css";
const HotelNameItems = (props) => {
  return (
    <div className={hotelstyle.hotelname}>
      <img src={props.image_url} className={hotelstyle.hotelimage}></img>
      <a href="/detail">{props.name}</a>
      <div className={hotelstyle.hotelpading}>
        <p className={hotelstyle.hotelpading1}>{props.city}</p>
        <p className={hotelstyle.hotelpading1}>Starting from ${props.price}</p>
        <div className={hotelstyle.hotelRate}>
          <p className={hotelstyle.border}>{props.rate}</p>
          <p className={hotelstyle.border1}>{props.type}</p>
        </div>
      </div>
    </div>
  );
};

export default HotelNameItems;
