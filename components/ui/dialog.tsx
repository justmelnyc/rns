import {ComponentPropsWithoutRef, PropsWithChildren, ElementRef, forwardRef} from 'react'
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { Cross1Icon } from "@radix-ui/react-icons";

// Define the type for the DialogContent props
type DialogContentProps = ComponentPropsWithoutRef<typeof DialogPrimitive.Content> & PropsWithChildren;

export const DialogContent = forwardRef<
    ElementRef<typeof DialogPrimitive.Content>,
    DialogContentProps
>(({ children, ...props }, forwardedRef) => (
    <DialogPrimitive.Portal>
        <DialogPrimitive.Overlay asChild>
            <div
                className="Panel_overlay"
                style={{opacity: '0.8', pointerEvents: 'auto'}}
            />
        </DialogPrimitive.Overlay>
        <DialogPrimitive.Content {...props} ref={forwardedRef}>
            <DialogPrimitive.Title />
            <DialogPrimitive.Description />
            {children}
            <DialogPrimitive.Close aria-label="Close">
                <Cross1Icon />
            </DialogPrimitive.Close>
        </DialogPrimitive.Content>
    </DialogPrimitive.Portal>
));

// Set displayName for better debugging with React DevTools
DialogContent.displayName = "DialogContent";

// Export other Dialog components from Radix
export const Dialog = DialogPrimitive.Root;
export const DialogClose = DialogPrimitive.Close;
export const DialogTrigger = DialogPrimitive.Trigger;
