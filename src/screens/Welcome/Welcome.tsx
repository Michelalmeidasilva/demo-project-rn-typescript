import React, { FC } from 'react';

import { Text, Column } from 'src/components';

const Welcome: FC = () => {
  return (
    <Column>
      <Text color='gray.n800' textAlign='center' fontWeight={400} marginTop='8px' variant='bigger'>
        Welcome
      </Text>
    </Column>
  );
};

export default Welcome;
