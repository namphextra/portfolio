import { Dialog, DialogTitle } from "@mui/material";

export default function Dialog(props: DialogProps) {
  const { onClose, selectedValue, open, dialogTitle, dialogContent } = props;

  const handleClose = () => {
    onClose(selectedValue);
  };

  const handleListItemClick = (value: string) => {
    onClose(value);
  };

  return (
    <Dialog onClose={handleClose} open={open}>
      <DialogTitle>{dialogTitle}</DialogTitle>
      {dialogContent}
    </Dialog>
  );
}
