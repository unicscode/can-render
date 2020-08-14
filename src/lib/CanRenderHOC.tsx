import * as React from 'react';
import difference from 'ramda.difference';
import intersection from 'ramda.intersection';

interface IProps {
  Component: new () => React.Component;
  user: string[] | number[];
  expected: string[] | number[];
  isOpen?: boolean;
  callbackFunction?: Function;
}

interface IAcces {
  history: object;
}

const CanRenderHOC: React.FC<IProps> = ({
  Component,
  user,
  expected,
  isOpen,
  callbackFunction,
}) => {
  const status = isOpen
    ? intersection(user, expected).length
    : difference(user, expected).length === 0;

  const AccessHOC: React.FunctionComponent<IAcces> = props => {
    function runCallback() {
      if (callbackFunction) {
        return callbackFunction({ user, expected }, props.history);
      }
      return;
    }

    if (!status) runCallback();
    if (status) {
      return <Component {...props} />;
    }
    return null;
  };

  return AccessHOC;
};

export default CanRenderHOC;
