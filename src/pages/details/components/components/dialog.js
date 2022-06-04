/** @jsxImportSource @emotion/react */
import * as React from "react";
import Dialog from "@mui/material/Dialog";
import { css } from "@emotion/react";

function SimpleDialog(props) {
  const { onClose, selectedValue, open } = props;

  const rootStyles = (theme) => css({});

  const handleClose = () => {
    onClose(selectedValue);
  };

  return (
    <Dialog onClose={handleClose} open={open} css={rootStyles} maxWidth={"md"}>
      <img
        alt="dialogImage"
        src={selectedValue}
        style={{
          overflow: "auto",
        }}
      />
    </Dialog>
  );
}

/* SimpleDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  selectedValue: PropTypes.string.isRequired,
}; */

export default function SimpleDialogDemo(props) {
  const handleClose = (value) => {
    props.setOpen(false);
    props.setSelectedValue(null);
  };

  return (
    <div>
      <SimpleDialog
        selectedValue={props.selectedValue?.img}
        open={props.open}
        onClose={handleClose}
      />
    </div>
  );
}
