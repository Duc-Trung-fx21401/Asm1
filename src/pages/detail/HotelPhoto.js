import hotelPhoto from "./HotelPhoto.module.css";

const HotelPhoto = (props) => {
  return (
    <div className={hotelPhoto.container}>
      <div className={hotelPhoto.display1}>
        <h2>{props.name}</h2>
        <button className={hotelPhoto.bnt}>Reserve or Book Now!</button>
      </div>
      <div className={hotelPhoto.add}>{props.address}</div>
      <div className={hotelPhoto.distance}>{props.distance}</div>
      <div className={hotelPhoto.price}>{props.price}</div>
      {/* {props.photos.map((photos, index) => {
        <img src={props.photos} key={index}>
          {photos}
        </img>;
      })} */}
      <ul className={hotelPhoto.ul}>
        {props.photos.map((photos, index) => {
          return (
            <li key={index}>
              <img src={photos} className={hotelPhoto.img}></img>
            </li>
          );
        })}
      </ul>
      <div className={hotelPhoto.display2}>
        <div>
          <h3 className={hotelPhoto.h3}>{props.title}</h3>
          <div className={hotelPhoto.des}>{props.description}</div>
        </div>
        <div className={hotelPhoto.item_stay}>
          <h3>Perfect for a 9-night stay!</h3>
          <div>
            Located in the real heart of Krakow,this property has an excellent
            location score of 9.8!
          </div>
          <div className={hotelPhoto.price_style}>
            <div className={hotelPhoto.night_price}>
              ${props.nine_night_price}
            </div>
            <div> (9nights)</div>
          </div>
          <button className={hotelPhoto.bnt1}>Reserve or Book Now!</button>
        </div>
      </div>
    </div>
  );
};
export default HotelPhoto;
