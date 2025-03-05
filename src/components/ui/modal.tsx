import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

type ModalProps = {
  title: string;
  children: React.ReactNode;
};

export default function Modal({ title, children }: ModalProps) {
  return (
    <Dialog defaultOpen>
      <DialogContent className="p-10">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
        </DialogHeader>
        {children}
      </DialogContent>
    </Dialog>
  );
}
