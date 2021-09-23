import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text } from "react-native";
import { FloatingLabelInput } from "react-native-floating-label-input";
import { elementsOfFormType } from "../Models/FakeFormData";

const ViewForm = (props) => {
  const dataInput = props.dataInput;
  const elementsInForm = props.elementsInForm;
  let mappedFields = elementsInForm.map((ele, index) => {
    switch (ele.view_type) {
      case elementsOfFormType.Input:
        return (
          <View key={index} style={{ marginBottom: 5 }}>
            <FloatingLabelInput
              key={index}
              label={ele.title}
              value={dataInput[ele.name]}
            />
          </View>
        );

      default:
        break;
    }
    return false;
  });
  return (
    <View style={{ padding: 50, flex: 1, backgroundColor: "#fff" }}>
      <Text style={{ fontWeight: "bold", fontSize: 20, paddingBottom: 5 }}>
        Form View
      </Text>
      {mappedFields}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default ViewForm;
