<script src="http://localhost:8097"></script>;
import React, { useState, Component } from "react";
import { ScrollView, StyleSheet } from "react-native";
import * as FakeFormData from "./src/Models/FakeFormData";
import CreateForm from "./src/Forms/CreateForm";
import ViewForm from "./src/Forms/ViewForm";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      customer: FakeFormData.customer,
      customerView: {},
      showView: false,
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleButtonClicked = this.handleButtonClicked.bind(this);
  }

  handleInputChange(value, target, type) {
    // console.log(value, target, type);
    switch (type) {
      case FakeFormData.elementsOfFormType.RadioBox:
      case FakeFormData.elementsOfFormType.ComboBox:
      case FakeFormData.elementsOfFormType.Input:
        this.setState((prevState) => {
          let customer = Object.assign({}, prevState.customer);
          customer[target] = value;
          return { customer };
        });
        break;
      case FakeFormData.elementsOfFormType.CheckBox:
        this.setState((prevState) => {
          let customer = Object.assign({}, prevState.customer);
          if (value.checked) {
            customer[target] = customer[target]
              ? customer[target] + "," + value.data
              : value.data;
          } else {
            customer[target] = customer[target].replace(value.data, "");
          }
          customer[target] = customer[target]
            .replace(/^,/, "")
            .replace(/,,/gm, ",");
          return { customer };
        });
        break;
      default:
        break;
    }
  }

  handleButtonClicked(event) {
    this.setState({ showView: true, customerView: { ...this.state.customer } });
    this.scrollView.scrollToEnd({ animated: true });
  }

  render() {
    return (
      <ScrollView
        // ref={this.scrollView}
        // onContentSizeChange={this.scrollView.scrollToEnd({ animated: true })}
        ref={(ref) => {
          this.scrollView = ref;
        }}
        onContentSizeChange={() =>
          this.scrollView.scrollToEnd({ animated: true })
        }
        style={[styles.container, { flexDirection: "column" }]}
      >
        <CreateForm
          dataInput={this.state.customer}
          elementsInForm={FakeFormData.elementsInForm}
          handleInputChange={this.handleInputChange}
          handleButtonClicked={this.handleButtonClicked}
        />
        {this.state.showView && (
          <ViewForm
            dataInput={this.state.customerView}
            elementsInForm={FakeFormData.elementsInForm}
          />
        )}
      </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    height: 500,
  },
  header: {
    fontWeight: "bold",
    color: "black",
  },
});

export default App;
