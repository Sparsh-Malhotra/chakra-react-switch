import React from "react";
import {
  Box,
  chakra,
  useCheckbox,
  useMultiStyleConfig,
} from "@chakra-ui/react";
import "./styles.css";
import { SwitchProps } from "./SwitchProps";

const LoadingSwitch = (props: SwitchProps) => {
  const styles = useMultiStyleConfig("Switch", props);
  const { isLoading, ...ownProps } = props;
  const { isChecked } = ownProps;

  const { getInputProps, getRootProps, getCheckboxProps } =
    useCheckbox(ownProps);

  const { track, container } = styles;

  return (
    <Box
      className={`container ${isLoading ? "loading" : ""} ${
        isChecked ? "active" : ""
      }`}
    >
      <chakra.label {...getRootProps()} className="switch" __css={container}>
        <chakra.input {...getInputProps({})} type="checkbox" />
        <chakra.span
          {...getCheckboxProps()}
          className="slider round"
          backgroundColor={track?.bg as string}
          __css={track}
        ></chakra.span>
      </chakra.label>
    </Box>
  );
};

export default LoadingSwitch;
