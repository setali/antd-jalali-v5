# Ant Design DatePicker, Jalali Support

###### (Compatible with version 5)

## Installation

```shell
npm install antd-jalali-v5
```

Install via **yarn**

```shell
yarn add antd-jalali-v5
```

## How to use

```jsx
import { ConfigProvider, DatePicker } from 'antd'
import faIR from 'antd/locale/fa_IR'
import JalaliProvider from 'antd-jalali-v5'

function App() {
  return (
    <ConfigProvider direction='rtl' locale={faIR}>
      <JalaliProvider />
      <DatePicker />
      <DatePicker.RangePicker />
    </ConfigProvider>
  )
}
```
