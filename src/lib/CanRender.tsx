import * as React from 'react';
import difference from 'ramda.difference';
import intersection from 'ramda.intersection';

interface IProps {
  children: JSX.Element;
  user: string[] | number[];
  expected: string[] | number[];
  renderOtherwise?: JSX.Element;
  isOpen?: boolean;
}

const CanRender: React.FunctionComponent<IProps> = ({
  children,
  user,
  expected,
  renderOtherwise,
  isOpen,
}) => {
  // check if pass
  function grant_access() {
    if (isOpen) {
      return intersection(user, expected).length;
    }
    return difference(user, expected).length === 0;
  }
  // check props
  if (!children || !user || !expected) {
    throw new Error('children, user, and expeced are required props');
  }

  if (grant_access()) {
    return children;
  } else if (renderOtherwise) {
    return renderOtherwise;
  }
  return null;
};
export default CanRender;
