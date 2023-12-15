import hotelstyle from "./HotelName.module.css";
import HotelNameItems from "./HotelNameItems";

const HotelName = () => {
  const hotelList = [
    {
      name: "Aparthotel Stare Miasto",
      city: "Madrid",
      price: 120,
      rate: 8.9,
      type: "Excellent",
      image_url: "./images/hotel_1.webp",
    },
    {
      name: "Comfort Suites Airport",
      city: "Austin",
      price: 140,
      rate: 9.3,
      type: "Exceptional",
      image_url: "./images/hotel_2.jpg",
    },
    {
      name: "Four Seasons Hotel",
      city: "Lisbon",
      price: 99,
      rate: 8.8,
      type: "Excellent",
      image_url: "./images/hotel_3.jpg",
    },
    {
      name: "Hilton Garden Inn",
      city: "Berlin",
      price: 105,
      rate: 8.9,
      type: "Excellent",
      image_url: "./images/hotel_4.jpg",
    },
  ];

  return (
    <div>
      <h1 className={hotelstyle.hotel}>Homes guests love</h1>
      <div className={hotelstyle.display}>
        {hotelList.map((hotelList, index) => {
          return (
            <HotelNameItems
              key={index}
              name={hotelList.name}
              city={hotelList.city}
              price={hotelList.price}
              rate={hotelList.rate}
              type={hotelList.type}
              image_url={hotelList.image_url}
            />
          );
        })}
      </div>
    </div>
  );
};
export default HotelName;
