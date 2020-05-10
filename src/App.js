import React from "react";
import styles from "./App.module.css";
import coronaImage from "./images/image.png";
import { Cards, Chart, CountryPicker } from "./components";

import { fetchData } from "./api";

class App extends React.Component {
  state = {
    data: {},
    country: "",
  };

  async componentDidMount() {
    const dataFetch = await fetchData();

    this.setState({ data: dataFetch });
  }

  handleCountryChange = async (country) => {
    const dataFetch = await fetchData(country);
    this.setState({ data: dataFetch, country: country });
  };

  render() {
    const { data, country } = this.state;
    return (
      <div className={styles.container}>
        <img className={styles.image} src={coronaImage} alt="COVID-19" />
        <Cards data={data} />
        <CountryPicker handleCountryChange={this.handleCountryChange} />
        <Chart data={data} country={country} />
      </div>
    );
  }
}

export default App;
