import * as React from 'react';
import difference from 'ramda.difference';
import intersection from 'ramda.intersection';

interface IOptions {
  user: string[] | number[];
  expected: string[] | number[];
  isOpen?: boolean;
}

const useRender = (options: IOptions) => {
  const [grantAccess, setGrantAccess] = React.useState(false);

  if (!options.expected || !options.user) {
    throw new Error(
      'options are not correct, it mus contains at least user and expected properties'
    );
  }

  function grant_access() {
    if (options.isOpen) {
      if (intersection(options.user, options.expected).length) {
        setGrantAccess(true);
      }
    }
    if (difference(options.user, options.expected).length === 0) {
      setGrantAccess(true);
    }
  }
  grant_access();

  return { grantAccess };
};

export default useRender;
