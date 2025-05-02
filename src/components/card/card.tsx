import { Flex } from 'antd';
import React, { ReactNode } from 'react';

const cardStyle: React.CSSProperties = {
  borderRadius: '8px',
  background: '#f6f6f6',
  boxShadow: '0px 1px 2px 0px rgba(0, 0, 0, 0.06)',
  padding: '8px 16px',
};

interface CardJSXProps {
  children: ReactNode;
}

export default function CardJSX({ children }: CardJSXProps) {
  return (
    <Flex style={cardStyle} justify="space-between">
      {children}
    </Flex>
  );
}
