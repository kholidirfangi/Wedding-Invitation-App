import React from 'react';

type Props = {
  children: string;
};

function SectionTitle({ children }: Props) {
  return <div className="section-title">{children}</div>;
}

export default SectionTitle;
