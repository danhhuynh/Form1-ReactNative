import RadioForm from "react-native-simple-radio-button";

import React from "react";

class MyRadioButton extends React.Component {
  constructor(props) {
    super(props);
    this.radio_props = props.ele.sampleSource.map((data) => {
      return { label: data, value: data };
    });
    this.state = {
      value: props.dataInput[props.ele.name],
    };
  }

  render() {
    return (
      <RadioForm
        radio_props={this.radio_props}
        initial={-1}
        onPress={(value) =>
          this.props.handleInputChange(
            value,
            this.props.ele.name,
            this.props.ele.edit_type
          )
        }
        formHorizontal={true}
        buttonSize={10}
        labelStyle={{ paddingRight: 5 }}
      />
    );
  }
}

export default MyRadioButton;
