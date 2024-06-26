import React, { memo } from 'react';
import { CloseOutlined } from '@aelf-design/icons';
import { Modal as AntdModal, ModalProps } from 'antd';
import { useTheme } from 'antd-style';

import useStyles from './style';

export interface IModalProps extends Omit<ModalProps, 'wrapClassName'> {
  wrapClassName?: string;
}

function Modal({ wrapClassName, width = 438, closeIcon = true, children, ...props }: IModalProps) {
  const { styles, cx } = useStyles();
  const token = useTheme();
  return (
    <AntdModal
      {...props}
      width={width}
      wrapClassName={cx(styles.modalWrap, wrapClassName)}
      closeIcon={
        closeIcon ? (
          <div className={styles.closeIconWrap}>
            <CloseOutlined color={token?.colorTextBase} />
          </div>
        ) : null
      }
    >
      {children}
    </AntdModal>
  );
}

export default memo(Modal);
