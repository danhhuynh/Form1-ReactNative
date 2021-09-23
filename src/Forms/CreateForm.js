import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text, Button } from "react-native";

import { FloatingLabelInput } from "react-native-floating-label-input";
import { elementsOfFormType } from "../Models/FakeFormData";
import MyRadioButton from "./Elements/MyRadioButton";
import MyCheckBox from "./Elements/MyCheckBox";
import MyPicker from "./Elements/MyPicker";

const CreateForm = (props) => {
  const dataInput = props.dataInput;
  const elementsInForm = props.elementsInForm;

  let mappedFields = elementsInForm.map((ele, index) => {
    switch (ele.edit_type) {
      case elementsOfFormType.Input:
        return (
          <View key={index} style={{ marginBottom: 5 }}>
            <FloatingLabelInput
              label={ele.title}
              onChangeText={(value) =>
                props.handleInputChange(value, ele.name, ele.edit_type)
              }
              value={dataInput[ele.name]}
            />
          </View>
        );

      case elementsOfFormType.RadioBox:
        return (
          <View key={index}>
            <Text style={{ fontWeight: "bold" }}>{ele.title}:</Text>
            <MyRadioButton
              ele={ele}
              dataInput={dataInput}
              handleInputChange={props.handleInputChange}
            />
          </View>
        );

      case elementsOfFormType.CheckBox:
        return (
          <MyCheckBox
            key={index}
            ele={ele}
            dataInput={dataInput}
            handleInputChange={props.handleInputChange}
          />
        );
      case elementsOfFormType.ComboBox:
        return (
          <View style={{ alignSelf: "stretch", marginBottom: 10 }} key={index}>
            <MyPicker
              ele={ele}
              dataInput={dataInput}
              handleInputChange={(value) =>
                props.handleInputChange(value, ele.name, ele.edit_type)
              }
            />
          </View>
        );
      case elementsOfFormType.Button:
        return (
          <Button
            key={index}
            title={ele.title}
            onPress={props.handleButtonClicked}
            style={styles.commonStyle}
          />
        );

      default:
        break;
    }
    return <Text>Error</Text>;
  });

  return (
    <View style={{ padding: 50, flex: 1, backgroundColor: "#fff" }}>
      <Text style={{ fontWeight: "bold", fontSize: 20, paddingBottom: 5 }}>
        Form Create
      </Text>
      {mappedFields}
    </View>
  );
};

const styles = StyleSheet.create({
  commonStyle: {
    padding: 5,
  },
});

export default CreateForm;
