import React from "react";
import { getFunName } from "../helpers";

class StorePicker extends React.Component {
  storeNameInput = React.createRef();

  handleSubmit = event => {
    event.preventDefault();
    const storeName = this.storeNameInput.value.value;
    this.goToStore(storeName);
  };

  goToStore = storeName => {
    this.props.history.push(`/store/${storeName}`);
  };

  render() {
    return (
      <form className="store-selector" onSubmit={this.handleSubmit}>
        <h2>Please choose a store...</h2>
        <input
          type="text"
          ref={this.storeNameInput}
          required
          placeholder="Store name"
          defaultValue={getFunName()}
        />
        <button type="Submit">Visit store &#x2192;</button>
      </form>
    );
  }
}

export default StorePicker;
