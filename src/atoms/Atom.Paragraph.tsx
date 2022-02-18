import React from 'react';

type props = {
  text: string;
  className?: string;
};

const AtomParagraph = ({text, className} : props) => {
    return <p className={className}>{text}</p>;
}

export default AtomParagraph;