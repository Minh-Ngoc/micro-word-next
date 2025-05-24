'use client'

import { Button, Select, SelectItem } from "@heroui/react";
import { useMemo, useState } from "react";
import { toast } from "../../utils/toast";

export default function ConfigApp({ currentConfig }: any) {
    const [mainAppRoute, setMainAppRoute] = useState(currentConfig?.find((app: any) => app?.route === '/')?.route || '/');
    const [subApps, setSubApps] = useState<{ [route: string]: string }>({
        '/news': currentConfig?.find((app: any) => app?.route === '/news')?.name || ''
    });

    const allApps = useMemo(() => currentConfig || [], [currentConfig]);

    const handleSave = async () => {
        if (!mainAppRoute || !subApps['/news']) {
            toast({
                title: 'Vui lòng chọn đầy đủ Main App và Sub App.',
                color: 'warning',
            });
            return;
        }

        const formatted: any[] = [];

        // Main app
        const mainAppData = allApps.find((app: any) => app.route === mainAppRoute);
        if (mainAppData) {
            formatted.push({
                name: mainAppData.name,
                port: mainAppData.port,
                route: '/',
            });
        }

        // Sub apps
        Object.entries(subApps).forEach(([route, appName]) => {
            const subAppData = allApps.find((app: any) => app.name === appName);
            if (subAppData) {
                formatted.push({
                    name: subAppData.name,
                    port: subAppData.port,
                    route,
                });
            }
        });

        const res = await fetch('/api/save', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formatted),
        });

        if (res.ok) {
            toast({ title: 'Cấu hình đã lưu!', color: 'success' });
        } else {
            toast({ title: `Lỗi ${res.status}!`, color: 'danger' });
        }
    };

    const handleChangeSubApp = (route: string, value: string) => {
        setSubApps(prev => ({
            ...prev,
            [route]: value,
        }));
    };

    const handleChangeMainApp = (event: any) => {
        const value = event?.target?.value;
        const filter = currentConfig?.filter((app: any) => app?.route !== value);
        
        setMainAppRoute(value);
        setSubApps(prev => ({ ...prev, '/news': filter[0]?.name }));
    };

    return (
        <div style={{ padding: 20 }}>
            <div className="space-y-4">
                <h1 className="font-semibold uppercase">Micro Frontend Config</h1>
                <Select
                    labelPlacement="outside-left"
                    label={'Main App:'}
                    items={allApps}
                    selectionMode="single"
                    placeholder={'Choose Main App...'}
                    classNames={{
                        base: "w-full",
                        label: "text-dark font-medium",
                        trigger:
                            "text-dark border border-slate-400 rounded-[0.5rem] min-h-10 h-10 border bg-white data-[hover=true]:bg-white data-[open=true]:border-primary",
                    }}
                    selectedKeys={new Set([mainAppRoute])}
                    onChange={handleChangeMainApp}
                    renderValue={(items) => {
                        const textValue = items.map((e) => e.textValue);
                        return <span>{textValue.join(", ")}</span>;
                    }}
                >
                    {(item: any) => (
                        <SelectItem
                            key={item.route}
                            textValue={item.name}
                        >
                            {item?.name}
                        </SelectItem>
                    )}
                </Select>

                <h2 className="font-semibold uppercase">Sub-App Routes</h2>
                {['/news'].map((route) => (
                    <div key={route}>
                        <Select
                            labelPlacement="outside-left"
                            label={`${route} → `}
                            selectionMode="single"
                            placeholder={`${route} → `}
                            classNames={{
                                base: "w-full",
                                label: "text-dark font-medium",
                                trigger:
                                    "text-dark border border-slate-400 rounded-[0.5rem] min-h-10 h-10 border bg-white data-[hover=true]:bg-white data-[open=true]:border-primary",
                            }}
                            selectedKeys={new Set([subApps[route] || ''])}
                            onChange={(e) => handleChangeSubApp(route, e.target.value)}
                            renderValue={(items) => {
                                const textValue = items.map((e) => e.textValue);
                                return <span>{textValue.join(", ")}</span>;
                            }}
                        >
                            {allApps
                                .filter((app: any) => app.route !== mainAppRoute)
                                .map((item: any) => (
                                    <SelectItem
                                        key={item.name}
                                        textValue={item.name}
                                    >
                                        {item?.name}
                                    </SelectItem>
                                ))}
                        </Select>
                    </div>
                ))}
            </div>

            <br />
            <Button
                radius="sm"
                color="primary"
                className="uppercase font-medium"
                onPress={handleSave}
            >
                Lưu cấu hình
            </Button>
        </div>
    );
}
