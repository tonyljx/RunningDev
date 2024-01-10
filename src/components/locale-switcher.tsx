"use client";
import { useLocale, useTranslations } from "next-intl";
import { locales } from "../i18n";

// A Client Component that registers an event listener for
// the `change` event of the select, uses `useRouter`
// to change the locale and uses `useTransition` to display
// a loading state during the transition.

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useRouter } from "next/navigation";

export default function LocaleSwitcher() {
  const t = useTranslations("languageSwitch");
  const locale = useLocale();
  const router = useRouter();

  // console.log(locales);

  return (
    <Select onValueChange={(v) => router.push(`/${v}`)}>
      <SelectTrigger className="w-16">
        <SelectValue placeholder={locale} />
      </SelectTrigger>
      <SelectContent defaultValue={locale}>
        <SelectGroup>
          <SelectLabel>{t("label")}</SelectLabel>
          {locales.map((cur) => (
            <SelectItem key={cur} value={cur}>
              {t("locale", { locale: cur })}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
