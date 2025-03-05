"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useRouter } from "next/navigation";

type ModalProps = {
  title: string;
  children: React.ReactNode;
};

export default function Modal({ title, children }: ModalProps) {
  const router = useRouter();

  function handleChangeOpenState(state: boolean) {
    if (!state) {
      router.back();
    }
  }

  return (
    <Dialog defaultOpen onOpenChange={handleChangeOpenState}>
      <DialogContent className="p-10">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
        </DialogHeader>
        {children}
      </DialogContent>
    </Dialog>
  );
}
