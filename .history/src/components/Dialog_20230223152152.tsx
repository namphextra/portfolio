import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";

export type DialogProps = {
  onClose: () => void;
  open: boolean;
  dialogTitle?: string;
  dialogContent?: JSX.Element;
  dialogActions?: JSX.Element;
};

export default function GlobalDialog(props: DialogProps) {
  const { onClose, open, dialogTitle, dialogContent, dialogActions } = props;

  const handleClose = () => {
    onClose();
  };

  return (
    <Dialog onClose={handleClose} open={open}>
      <DialogTitle>{dialogTitle}</DialogTitle>
      <DialogContent>{dialogContent}</DialogContent>
      {dialogActions && <DialogActions>{dialogActions}</DialogActions>}
    </Dialog>
  );
}
