import NavBarItem from "./NavBarItem";
import navstyle from "./NavBar.module.css";

const NavBar = () => {
  const data = [
    {
      type: "Stays",
      icon: "fa-bed",
      active: true,
    },
    {
      type: "Flights",
      icon: "fa-plane",
      active: false,
    },
    {
      type: "Car rentals",
      icon: "fa-car",
      active: false,
    },
    {
      type: "Attractions",
      icon: "fa-bed",
      active: false,
    },
    {
      type: "Airport taxis",
      icon: "fa-taxi",
      active: false,
    },
  ];

  return (
    <div className={navstyle.navbar}>
      <div className={navstyle.navbar_item__1}>
        <p>Booking Website</p>
        <div>
          <button className={navstyle.navbar_btn}>Register</button>
          <button className={navstyle.navbar_btn}>Login</button>
        </div>
      </div>
      <div className={navstyle.nav}>
        {data.map((data, index) => {
          return (
            <NavBarItem
              key={index}
              type={data.type}
              icon={data.icon}
              active={data.active}
            />
          );
        })}
      </div>
    </div>
  );
};

export default NavBar;
