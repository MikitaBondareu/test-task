'use client';

import { useState } from 'react';

import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';

type ModalWindowTypes = {
  children?: React.ReactNode | string;
  title: string;
  button?: React.ReactNode;
  footerContent?: React.ReactNode;
};

const ModalWindow = ({
  children,
  title,
  button,
  footerContent,
}: ModalWindowTypes) => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      {/* Compound Component */}
      <ModalWindow.Trigger>
        {button ?? <Button>Open</Button>}
      </ModalWindow.Trigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
        </DialogHeader>
        {children}
        <DialogFooter>{footerContent ?? <p>footer</p>}</DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
ModalWindow.Trigger = DialogTrigger;
ModalWindow.Header = DialogHeader;
export default ModalWindow;
