import { useContext, useLayoutEffect } from 'react'
import dayjs from 'dayjs'
import jalaliday from 'jalaliday'
import calendar from 'dayjs/plugin/calendar'
import faLocale from './locale-fa'
import { ConfigProvider } from 'antd'

export default function Provider () {
  const { locale } = useContext(ConfigProvider.ConfigContext)

  useLayoutEffect(() => {
    dayjs.extend(calendar)
    dayjs.extend(jalaliday)
    dayjs.locale(faLocale)
    dayjs.calendar(locale?.locale === 'fa' ? 'jalali' : undefined)
  }, [locale])

  return ''
}
