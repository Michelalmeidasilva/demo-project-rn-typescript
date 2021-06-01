import React, { FC } from 'react';

import { Text, Column } from 'src/components/';

const Unauthorized: FC = () => (
  <Column alignItems='center'>
    <Text color='gray.n800' textAlign='center' fontWeight={400} marginTop='8px' variant='bigger'>
      Unauthorized
    </Text>
  </Column>
);

export default Unauthorized;
