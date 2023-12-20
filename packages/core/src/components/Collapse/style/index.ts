import { createStyles } from 'antd-style'

const useStyles = createStyles(({ css, token }) => {
  const { Collapse: collapseTokens } = token
  const { headerClickBg = '', headerHoverBg = '' } = collapseTokens
  return {
    aelfdCollapse: css`
      .ant-collapse-header-text {
        line-height: 24px;
      }
      .ant-collapse-content-box {
        line-height: 22px;
      }
      .ant-collapse-header {
        &:hover {
          background-color: ${headerHoverBg};
        }
        &:active {
          color: #127fff;
          background-color: ${headerClickBg};
        }
      }
      .ant-collapse-item:first-child {
        .ant-collapse-header:hover {
          border-top-left-radius: 8px;
          border-top-right-radius: 8px;
        }
      }
    `
  }
})

export default useStyles