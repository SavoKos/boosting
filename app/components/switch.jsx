import React, { useState } from 'react';
import { Switch as S } from '@headlessui/react';

function switchui({ changeTotal, additionalPercent }) {
  const [enabled, setEnabled] = useState(false);

  const handleChange = () => {
    if (enabled) changeTotal(additionalPercent * 1 - 0.2);
    if (!enabled) changeTotal(additionalPercent * 1 + 0.2);
    setEnabled((prev) => !prev);
  };

  return (
    <S
      checked={enabled}
      onChange={handleChange}
      className={`${
        enabled ? 'bg-blue-600' : 'bg-gray-200'
      } relative inline-flex h-6 w-11 items-center rounded-full`}
    >
      <span
        className={`${
          enabled ? 'translate-x-6' : 'translate-x-1'
        } inline-block h-4 w-4 transform rounded-full bg-white transition`}
      />
    </S>
  );
}

export default switchui;
