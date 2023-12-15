import formstyle from "./Form.module.css";

const Form = () => {
  return (
    <div className={formstyle.form}>
      <h1 className={formstyle.h1}>Save time, save money!</h1>
      <p className={formstyle.p}>
        Sign up and we'll send the best deals to you
      </p>
      <div className={formstyle.input}>
        <input
          className={formstyle.input1}
          type="email"
          placeholder="Your Email"
        ></input>
        <button className={formstyle.bnt}>Subcribe</button>
      </div>
    </div>
  );
};
export default Form;
