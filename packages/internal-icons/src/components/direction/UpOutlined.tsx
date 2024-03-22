import * as React from 'react';

import { AelfIcon } from '../../icon/AelfIcon';
import AelfSVGComponent from '../../svgs/direction/up.svg';
import { IconProps } from '../../type';

const componentName = 'UpOutlined';
export const UpOutlined = React.forwardRef<HTMLSpanElement, IconProps>((props, ref) => {
  return (
    <AelfIcon component={AelfSVGComponent} componentName={componentName} ref={ref} {...props} />
  );
});
UpOutlined.displayName = componentName;
