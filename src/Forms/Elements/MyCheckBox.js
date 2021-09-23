import { StyleSheet, View, Text, CheckBox } from "react-native";

import React from "react";

class MyCheckBox extends React.Component {
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

      return (
        <View key={index} style={styles.container}>
          <View style={styles.checkboxContainer}>
            <CheckBox
              value={checked}
              onValueChange={(value) =>
                this.props.handleInputChange(
                  { data: item, checked: value },
                  this.props.ele.name,
                  this.props.ele.edit_type
                )
              }
              style={styles.checkbox}
            />
            <Text style={styles.label}>{item}</Text>
          </View>
        </View>
      );
    });
    return (
      <View>
        <Text style={{ fontWeight: "bold" }}>{this.props.ele.title}: </Text>
        {fetchedRows}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "flex-start",
    // justifyContent: "center",
    flexDirection: "row",
  },
  checkboxContainer: {
    flexDirection: "row",
    marginBottom: 20,
  },
  checkbox: {
    alignSelf: "center",
  },
  label: {
    margin: 4,
  },
});

export default MyCheckBox;
