'use client';

import clsx from 'clsx';
import { useRouter, usePathname } from '../../navigation';
import { ChangeEvent, ReactNode, useTransition } from 'react';

type Props = {
    children: ReactNode;
    defaultValue: string;
    label: string;
};

export default function LocaleSwitcherSelect({
    children,
    defaultValue,
    label,
}: Props) {
    const router = useRouter();
    const pathname = usePathname();
    const [isPending, startTransition] = useTransition();

    function onSelectChange(event: ChangeEvent<HTMLSelectElement>) {
        const nextLocale = event.target.value;
        startTransition(() => {
            router.replace(pathname, { locale: nextLocale });
        });
    }

    return (
        <label
            className={clsx(
                'relative text-white',
                isPending && 'transition-opacity [&:disabled]:opacity-30'
            )}
        >
            <p className="sr-only">{label}</p>
            <select
                className="inline-flex appearance-none bg-base-color text-gray-100 text-lg md:text-sm lg:text-base transition border pl-3 pr-5 md:pr-4 py-2 rounded-custom"
                defaultValue={defaultValue}
                disabled={isPending}
                onChange={onSelectChange}
            >
                {children}
            </select>
            <span className="pointer-events-none absolute top-[3px] right-2">⌄</span>
        </label>
    );
}
