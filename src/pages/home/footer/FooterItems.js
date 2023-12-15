import footerStyle from "./FooterItems.module.css";
const FooterItems = (props) => {
  return (
    <ul className={footerStyle.item}>
      {props.col_values.map((col_values, index) => {
        return (
          <li key={index} className={footerStyle.li}>
            <a href="#" className={footerStyle.link}>
              {col_values}
            </a>
          </li>
        );
      })}
    </ul>
  );
};
export default FooterItems;
