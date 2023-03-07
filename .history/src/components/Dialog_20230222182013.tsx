import { Dialog, DialogTitle } from "@mui/material";

export type DialogProps = {
  onClose: () => void;
  open: boolean;
  dialogTitle?: string;
  dialogContent?: JSX.Element;
};

export default function GlobalDialog(props: DialogProps) {
  const { onClose, open, dialogTitle, dialogContent } = props;

  const handleClose = () => {
    onClose();
  };

  return (
    <Dialog onClose={handleClose} open={open}>
      <DialogTitle>{dialogTitle}</DialogTitle>
      {dialogContent}
    </Dialog>
  );
}
