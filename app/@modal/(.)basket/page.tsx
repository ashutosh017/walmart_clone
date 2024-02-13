"use client";
import Basket from "@/app/components/Basket";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useRouter } from "next/navigation";

function BasketInterception() {
  const router = useRouter();
  function onDismiss() {
    router.back();
  }
  return (
    <Dialog
      open
      onOpenChange={(isOpen) => {
        if (!isOpen) {
          onDismiss();
        }
      }}
    >
      <DialogContent className="h-4/5 w-full overflow-scroll max-w-3xl">
        <DialogHeader>
          <DialogTitle>Basket</DialogTitle>
          <DialogDescription>
            <p>Contents of your Basket</p>
          </DialogDescription>
        </DialogHeader>
        <Basket />
      </DialogContent>
    </Dialog>
  );
}
export default BasketInterception;
