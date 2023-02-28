import { FC } from 'react';
import ReactDaDataBox, { AddressResponseType } from 'react-dadata-box';

import styles from './dadata.module.scss';

const token = '18bead1e7fa40afa5dfbf40936243267d599cb5d';

interface IDadataInput {
  placeholder?: string;
  onChange?: ((suggestion: AddressResponseType) => void) | undefined;
}
export const DadataInput: FC<IDadataInput> = ({
  placeholder = '',
  onChange,
}) => {
  return (
    <ReactDaDataBox
      token={token}
      placeholder={placeholder}
      className={styles.input}
      customStyles={{
        'react-dadata__suggestions': styles.suggestions,
      }}
      onChange={onChange}
    />
  );
};
