import { useState } from "react";
import axios from "axios"; // Make sure to import axios

const App = () => {
  const [values, setValues] = useState({
    country: "",
    province: "",
    city: "",
    street: "",
    zip_code: "", // Changed from "zipcode" to "postalCode"
  });

  const handleChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value }); // Removed the array brackets
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:8081/root", values)
      .then(() => console.log("Address added successfully"))
      .catch((err) => console.log(err));
  };

  return (
    <div className="wrapper">
      <form onSubmit={handleSubmit}>
        <h2>Address Registration Form</h2>
        <div className="form-group">
          <label htmlFor="country">Country:</label>
          <input
            type="text"
            name="country"
            value={values.country}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="province">Province:</label>
          <input
            type="text"
            name="province"
            value={values.province}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="city">City:</label>
          <input
            type="text"
            name="city"
            value={values.city}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="street">Street:</label>
          <input
            type="text"
            name="street"
            value={values.street}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="zip_code">Postal Code:</label>
          <input
            type="text"
            name="zip_code"
            value={values.postalCode} // Updated to match the state property
            onChange={handleChange}
            maxLength={5}
            required
          />
        </div>

        <div className="form-group">
          <input type="submit" name="submit" value="Add Address" />
        </div>
      </form>
    </div>
  );
};

export default App;
