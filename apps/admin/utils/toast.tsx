import { addToast } from "@heroui/react";

export function toast({
    title,
    color,
    description,
    promise,
    classNames,
    timeout,
}: {
    title?: string | React.ReactNode,
    color?: "default" | "primary" | "secondary" | "success" | "warning" | "danger",
    description?: string | React.ReactNode,
    promise?: Promise<any> | undefined,
    classNames?: object | undefined,
    timeout?: number,
}) {
    const payload: any = {
        variant: "flat",
        timeout: 3000,
        promise: promise || undefined,
    };

    if (title) {
        payload.title = title;
    }

    if (color) {
        payload.color = color;
    }

    if (description) {
        payload.description = description;
    }

    if (classNames) {
        payload.classNames = classNames;
    }

    if (timeout) {
        payload.timeout = timeout;
    }

    return addToast(payload);
}
