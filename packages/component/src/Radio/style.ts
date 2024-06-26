import { createStyles } from 'antd-style';

export default createStyles(({ css, token, prefixCls }) => {
  return {
    aelfDesignRadio: css`
      &.${prefixCls}-radio-wrapper .${prefixCls}-radio-inner::after {
        background-color: ${token.customRadio?.dotColor};
      }
      &.${prefixCls}-radio-wrapper .${prefixCls}-radio-checked .${prefixCls}-radio-inner {
        background-color: ${token.colorPrimary};
      }
    `,
  };
});
