import React, { FC } from 'react';

import { Text, Column } from 'src/components';

const PasswordReset: FC = () => (
  <Column alignItems='center'>
    <Text color='gray.n800' textAlign='center' fontWeight={400} marginTop='8px' variant='bigger'>
      Password Reset
    </Text>
  </Column>
);

export default PasswordReset;
