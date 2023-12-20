import { createStyles } from 'antd-style'
export default createStyles(({ token, css }) => {
  return {
    tablePaginationContainer: css`
      padding: 16px 0;
    `,
    TableContainer: css`
      .ant-table-wrapper
        .ant-table-container
        table
        > thead
        > tr:first-child
        > *:first-child {
        border-bottom-left-radius: ${token.Table?.headerBorderRadius}px;
        border-start-start-radius: ${token.Table?.headerBorderRadius}px;
      }
      .ant-table-wrapper
        .ant-table-container
        table
        > thead
        > tr:first-child
        > *:last-child {
        border-bottom-right-radius: ${token.Table?.headerBorderRadius}px;
        border-start-end-radius: ${token.Table?.headerBorderRadius}px;
      }
    `
  }
})
