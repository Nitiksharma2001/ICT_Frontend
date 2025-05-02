import React from 'react'
import { Select } from 'antd'

interface DropdownJSXProps {
  options: { label: string; value: string | number }[] 
  placeholder?: string 
  onChange: (value: string | number | undefined) => void 
  style?: React.CSSProperties 
}

const DropdownJSX: React.FC<DropdownJSXProps> = ({
  options = [],
  placeholder,
  onChange,
  style,
}) => {
  return (
    <Select
      style={style}
      options={options}
      placeholder={placeholder}
      onChange={onChange}
      allowClear
    />
  )
}

export default DropdownJSX
