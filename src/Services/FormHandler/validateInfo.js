import React from 'react';
import { ErrorMessage } from '@hookform/error-message';
import { ErrMsg } from './validateElements';

export const Error = (err, name) => {

  return (
    <>
      <ErrorMessage
        errors={err}
        name={name}
        as={<ErrMsg/>}
        render={({ messages }) =>
          messages &&
          Object.entries(messages).map(([type, message]) => (
            <p key={type}>{message}</p>
          ))
        }
      />
    </>
  );
};
