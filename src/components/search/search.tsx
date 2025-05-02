import { Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import React from "react";

interface SearchJSXProps {
  placeholder?: string;
  onSearch: (value: string) => void;
  style?: React.CSSProperties;
}

export default function SearchJSX({
  placeholder = "Search",
  onSearch,
  style,
}: SearchJSXProps) {
  return (
    <Input
      placeholder={placeholder}
      onChange={(e) => onSearch(e.target.value)}
      suffix={<SearchOutlined style={{ color: "#BFBFBF", fontSize: 24 }} />}
      style={style}
      allowClear
    />
  );
}
