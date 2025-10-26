import {
  Dialog,
  DialogPanel,
  Transition,
  TransitionChild,
} from "@headlessui/react";
import { Fragment } from "react";
import Contacts from "./Contacts";

export const modalOpasity = {
  enter: "transition-opacity ease-linear duration-300",
  enterFrom: "opacity-0",
  enterTo: "opacity-60",
  leave: "transition-opacity ease-linear duration-200",
  leaveFrom: "opacity-60",
  leaveTo: "opacity-0",
};

const drawerPositionRight = {
  enter: "transform transition ease-in-out duration-300",
  enterFrom: "translate-x-full",
  enterTo: "translate-x-0",
  leave: "transform transition ease-in-out duration-300",
  leaveFrom: "translate-x-0",
  leaveTo: "translate-x-full",
};

interface Props {
  show: boolean;
  close: () => void;
}

const ManagedDrawer = ({ show, close }: Props) => {
  return (
    <Transition show={show} as={Fragment}>
      <Dialog as="div" className="relative z-5000" onClose={close}>
        <TransitionChild as={Fragment} {...modalOpasity}>
          <div className="fixed inset-0 bg-black opacity-60" />
        </TransitionChild>

        <div className="fixed inset-0 overflow-hidden backdrop-blur-[1.5px]">
          <div className="absolute inset-0 overflow-hidden">
            <div className="fixed top-0 h-full max-w-full flex right-0">
              <TransitionChild {...drawerPositionRight} as={Fragment}>
                <DialogPanel className="w-screen max-w-md bg-white shadow-xl">
                  <Contacts close={close} />
                </DialogPanel>
              </TransitionChild>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default ManagedDrawer;
