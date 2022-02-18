import React from 'react';

type props = {
  text: string;
  className?: string;
};

const AtomHeadingH1 = ({text, className} : props) => {
    return <h1 className={className}>{text}</h1>;
}

export default AtomHeadingH1;