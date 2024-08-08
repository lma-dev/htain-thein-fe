"use client";
import React, { ChangeEvent, useState } from "react";
import { useRouter } from "next/navigation"; // Change import statement
import { usePathname } from "next/navigation";
import { useLocale } from "next-intl";
import { useTransition } from "react";

const LangSwitcher = () => {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const localActive = useLocale();
  const pathname = usePathname();

  const onSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const nextLocale = e.target.value;
    const currentRoute = pathname.slice(4);
    startTransition(() => {
      router.replace(`/${nextLocale}/${currentRoute}`);
    });
  };

  return (
    <div className="flex">
      <label htmlFor="language-switcher" className="sr-only">
        Language Switcher
      </label>
      <select
        defaultValue={localActive}
        onChange={onSelectChange}
        disabled={isPending}
        className="focus:shadow-outline-blue p-2 block w-auto appearance-none rounded-lg text-center border mr-2 border-gray-300 bg-gray-800 text-white leading-tight shadow hover:border-blue-500 focus:border-blue-300 focus:outline-none"
      >
        <option value="en">English</option>
        <option value="jp">Japanese</option>
        <option value="mm">Burmese</option>
      </select>
    </div>
  );
};

export default LangSwitcher;
