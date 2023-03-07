import { Dialog, DialogTitle } from "@mui/material";

export default function Dialog(props: DialogProps) {
  const { onClose, selectedValue, open, dialogTitle, dialogContent } = props;

  const handleClose = () => {
    onClose(selectedValue);
  };

  return (
    <Dialog onClose={handleClose} open={open}>
      <DialogTitle>{dialogTitle}</DialogTitle>
      {dialogContent}
    </Dialog>
  );
}
