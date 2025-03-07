"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useRouter } from "next/navigation";

type ModalProps = {
  children: React.ReactNode;
};

export default function Modal({ children }: ModalProps) {
  const router = useRouter();

  function handleChangeOpenState(state: boolean) {
    if (!state) {
      router.back();
    }
  }

  return (
    <Dialog defaultOpen onOpenChange={handleChangeOpenState}>
      <DialogContent className="border-none bg-transparent">
        <DialogHeader className="hidden">
          <DialogTitle />
        </DialogHeader>
        {children}
      </DialogContent>
    </Dialog>
  );
}
