import { useContext, useLayoutEffect } from "react";
import dayjs from "dayjs";
import jalaliday from "jalaliday";
import faLocale from "./locale-fa";
import { ConfigProvider } from "antd";

// Extend dayjs with jalaliday plugin only once
dayjs.extend(jalaliday);

export default function Provider() {
  const { locale } = useContext(ConfigProvider.ConfigContext);

  useLayoutEffect(() => {
    if (locale?.locale === "fa") {
      dayjs.locale(faLocale);
      (dayjs as any).calendar("jalali");
    } else {
      dayjs.locale("en");
      (dayjs as any).calendar("gregory");
    }
  }, [locale]);

  return "";
}
