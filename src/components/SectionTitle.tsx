import React from 'react';

type Props = {
  children: string;
  id: string;
};

function SectionTitle({ children, id }: Props) {
  return (
    <div className="section-title" id={id}>
      {children}
    </div>
  );
}

export default SectionTitle;
