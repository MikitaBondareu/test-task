'use client';

import { useCallback, useState } from 'react';

import { Button } from '../../components/ui/button';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '../../components/ui/dialog';

type ModalRenderApi = {
  isOpen: boolean;
  open: () => void;
  close: () => void;
};

type ModalWindowTypes = {
  children?: React.ReactNode | string;
  title: string;
  button?: React.ReactNode;
  footerContent?: React.ReactNode | ((api: ModalRenderApi) => React.ReactNode);
  onOpenChange?: (open: boolean) => void;
};
type ModalCompound = React.FC<ModalWindowTypes> & {
  Trigger: typeof DialogTrigger;
  Header: typeof DialogHeader;
  Close: typeof DialogClose;
};

const ModalWindow: ModalCompound = ({
  children,
  title,
  button,
  footerContent,
  onOpenChange,
}: ModalWindowTypes) => {
  const [open, setOpen] = useState<boolean>(false);

  const openHandler = useCallback(() => setOpen(true), []);
  const closeHandler = useCallback(() => setOpen(false), []);

  const modalApi: ModalRenderApi = {
    isOpen: open,
    open: openHandler,
    close: closeHandler,
  };

  return (
    <Dialog
      open={open}
      onOpenChange={modalState => {
        setOpen(modalState);
        onOpenChange?.(modalState);
      }}
    >
      <ModalWindow.Trigger>
        {button ?? <Button>Open</Button>}
      </ModalWindow.Trigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
        </DialogHeader>
        {children}
        <DialogFooter>
          {typeof footerContent === 'function'
            ? footerContent(modalApi)
            : (footerContent ?? (
                <ModalWindow.Close asChild>
                  <Button variant="secondary">Close</Button>
                </ModalWindow.Close>
              ))}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
ModalWindow.Trigger = DialogTrigger;
ModalWindow.Header = DialogHeader;
ModalWindow.Close = DialogClose;
export default ModalWindow;
