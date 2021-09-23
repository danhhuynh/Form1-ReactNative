import {
  StyleSheet,
  View,
  Text,
  TextInput,
  CheckBox,
  Button,
} from "react-native";
import { Picker } from "@react-native-community/picker";
import React from "react";

class MyPicker extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let fetchedRows = this.props.ele.sampleSource.map((item, index) => {
      let checked = false;
      if (this.props.dataInput[this.props.ele.name] !== undefined) {
        checked = this.props.dataInput[this.props.ele.name].includes(item)
          ? true
          : false;
      }

      return <Picker.Item key={index} label={item} value={item} />;
    });
    return (
      <View>
        <Text style={{ fontWeight: "bold" }}>{this.props.ele.title}:</Text>
        <Picker
          selectedValue={this.props.dataInput[this.props.ele.name]}
          style={[styles.commonStyle, { height: 50, width: 150 }]}
          onValueChange={this.props.handleInputChange}
        >
          <Picker.Item key={-1} label="Select one item" value="" />
          {fetchedRows}
        </Picker>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  commonStyle: {
    padding: 5,
  },
});

export default MyPicker;
