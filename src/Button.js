import React from 'react';
import { useImmer } from 'use-immer';
import cn from 'classnames';

const renderButton = (count, index, onClick, activeIndex) => {
  const buttonClass = cn({
    btn: true,
    'm-1': true,
    'btn-primary': index !== activeIndex,
    'btn-success': index === activeIndex,
  });

  return <button key={index} className={buttonClass} type="button" onClick={onClick}>{count}</button>;
};

const Buttons = ({ count = 3 }) => {
  const initial = new Array(count);
  const [counters, updateCounters] = useImmer({
    values: initial.fill(0),
    activeIndex: null,
  });

  const handleClick = (i) => () => {
    updateCounters((draft) => {
      draft.values[i] += 1;
      draft.activeIndex = i;
    });
  };

  const { values, activeIndex } = counters;

  return (
    <>
      {values.map((value, i) => renderButton(value, i, handleClick(i), activeIndex))}
    </>
  );
};

export default Buttons;
