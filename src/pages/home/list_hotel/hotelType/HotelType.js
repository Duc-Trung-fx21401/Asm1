import style from "./HotelType.module.css";
import HotelTypeItems from "./HotelTypeItems";

const HotelType = () => {
  const hotelType = [
    {
      name: "Hotels",
      count: 233,
      image: "./images/type_1.webp",
    },
    {
      name: "Apartments",
      count: 2331,
      image: "./images/type_2.jpg",
    },
    {
      name: "Resorts",
      count: 2331,
      image: "./images/type_3.jpg",
    },
    {
      name: "Villas",
      count: 2331,
      image: "./images/type_4.jpg",
    },
    {
      name: "Cabins",
      count: 2331,
      image: "./images/type_5.jpg",
    },
  ];

  return (
    <div>
      <h1 className={style.hotel_h1}>Browse by property type</h1>
      <div className={style.display}>
        {hotelType.map((hotelType, index) => {
          return (
            <HotelTypeItems
              key={index}
              name={hotelType.name}
              count={hotelType.count}
              image={hotelType.image}
            />
          );
        })}
      </div>
    </div>
  );
};
export default HotelType;
