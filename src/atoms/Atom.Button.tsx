import React from 'react';

type props = {
  text: string;
  onClick: (event: React.MouseEvent<HTMLElement>) => void
};

const AtomButton = ({text, onClick} : props) => {
    return <button onClick={onClick}>{text}</button>;
}

export default AtomButton;