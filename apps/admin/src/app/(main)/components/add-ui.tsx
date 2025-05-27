"use client";

import APPS from "@/constants/apps";
import { useEffect, useMemo, useState } from "react";
import { GiCheckMark } from "react-icons/gi";
import { toast } from "../../../../utils/toast";
import { Button, Input } from "@heroui/react";

// AddUI Component
interface AddUIProps {
    isOpen: boolean;
    onClose: () => void;
    themes: any[];
    theme?: any;
}

function AddUI({ isOpen, onClose, themes, theme }: AddUIProps) {
    const [error, setError] = useState<any>({
        route: "",
        app: "",
    });
    const [route, setRoute] = useState<string>("");
    const [appSelected, setAppSelected] = useState<string>("");
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const appsList = useMemo(() => {
        return APPS?.filter((app) => {
            if (theme && app?.name === theme?.name) {
                return !themes
                    ?.filter(th => th?.name !== theme?.name)
                    ?.map((th) => th?.name).includes(app?.name)
            }

            return !themes?.map((theme) => theme?.name).includes(app?.name)
        })
    }, [theme]);

    const closeModal = () => {
        onClose();
        setAppSelected("");
        setRoute("");
        setError({
            route: "",
            app: "",
        });
    }

    useEffect(() => {
        if (theme) {
            setRoute(theme?.route);
            setAppSelected(theme?.name);
        }
    }, [theme])

    if (!isOpen) return null;

    const handleSave = async () => {
        try {
            const isExistingRoute = themes?.find(it => it?.route === route?.trim());

            if (!route?.trim()) {
                return setError((prev: any) => ({
                    ...prev,
                    route: "Vui lòng nhập route!",
                }));
            }

            if (isExistingRoute && isExistingRoute?.route !== theme?.route) {
                return setError((prev: any) => ({
                    ...prev,
                    route: "Route đã tồn tại!",
                }));
            }

            setError((prev: any) => ({ ...prev, route: "" }));

            if (!appSelected?.trim()) {
                return setError((prev: any) => ({
                    ...prev,
                    app: "Vui lòng chọn giao diện!",
                }));
            }

            setError((prev: any) => ({ ...prev, app: "" }));
            setIsLoading(true);

            const findApp = APPS?.find((app) => app.name === appSelected);
            let formatRoute = route?.trim()?.split('/');
            const newRoute = formatRoute[0] === '/' ? formatRoute.join('') : `/${formatRoute.join('')}`;

            const newTheme = {
                ...findApp,
                route: newRoute,
            };

            // Nếu đã tồn tại route => thay thế, nếu chưa => thêm
            const isExisting = themes.some((item) => item.name === appSelected);
            const newThemes = isExisting
                ? themes.map((item) => (item.name === appSelected ? newTheme : item))
                : [...themes, newTheme];

            const res = await fetch("/api/save", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(newThemes),
            });

            if (res.ok) {
                toast({ title: "Cấu hình đã lưu!", color: "success" });
            } else {
                toast({ title: `Lỗi ${res.status}!`, color: "danger" });
            }

            closeModal();
        } catch (e) {
            console.log("error: ", e);
        } finally {
            setIsLoading(false);
        }
    };


    return (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-lg shadow-xl w-full max-w-[70%] p-6">
                <h2 className="text-2xl font-bold mb-4 text-gray-800">
                    Thêm giao diện
                </h2>
                <div className="mt-10 mb-4">
                    <Input
                        type="text"
                        radius="sm"
                        label="Nhập route:"
                        labelPlacement="outside"
                        placeholder="Nhập route... Ví dụ: /news"
                        value={route}
                        onChange={(e) => setRoute(e?.target?.value)}
                        isInvalid={!!error?.route}
                        errorMessage={error?.route}
                    // startContent={<span className="font-semibold">/</span>}
                    />
                </div>

                <div>
                    <label
                        htmlFor="micro-frontend-data"
                        className="block text-e font-medium text-gray-700 mb-2"
                    >
                        Chọn giao diện:
                    </label>

                    <div className="grid grid-cols-3 gap-4">
                        {appsList?.map((theme: any, index: number) => (
                            <div
                                key={index}
                                className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 relative"
                                onClick={() =>
                                    setAppSelected(
                                        theme.name === appSelected
                                            ? ""
                                            : theme.name
                                    )
                                }
                            >
                                <img
                                    src={`/${theme.preview}`}
                                    alt={`${theme.name} preview`}
                                    className="w-full h-48 object-contain repeat-none"
                                />
                                <div className="p-4 flex gap-2">
                                    <span className="text-lg tracking-wider">
                                        [ {route} ]
                                    </span>
                                    <h3 className="text-lg font-semibold mb-2 tracking-wider uppercase text-center">
                                        {theme.description}
                                    </h3>
                                </div>

                                {appSelected === theme?.name && (
                                    <div className="absolute top-0 right-0 bg-success p-1">
                                        <GiCheckMark className="text-white" />
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>

                    {error?.app && (
                        <p className="text-red-500 text-sm mt-2">
                            {error?.app}
                        </p>
                    )}
                </div>

                <div className="flex justify-end space-x-3 mt-5">
                    <Button
                        onPress={closeModal}
                        className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 transition-colors duration-200 font-semibold"
                    >
                        Hủy
                    </Button>
                    <Button
                        onPress={handleSave}
                        className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors duration-200 font-semibold"
                        isLoading={isLoading}
                    >
                        Lưu
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default AddUI;
