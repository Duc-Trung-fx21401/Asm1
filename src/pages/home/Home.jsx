import NavBar from "./navbar/NavBar";
import Heaeder from "./header/Heaeder";
import CityList from "./list_hotel/cityList/CityList";
import HotelType from "./list_hotel/hotelType/HotelType";
import HotelName from "./list_hotel/hotelName/HotelName";
import Form from "./form/Form";
import Footer from "./footer/Footer";

const Home = () => {
  return (
    <div>
      <h1>Home Page</h1>
      <NavBar />
      <Heaeder />
      <CityList />
      <HotelType />
      <HotelName />
      <Form />
      <Footer />
    </div>
  );
};

export default Home;
