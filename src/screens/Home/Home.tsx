import React, { FC } from 'react';

import { Column, Text } from 'src/components';

const Home: FC = () => (
  <Column alignItems='center'>
    <Text color='gray.n800' textAlign='center' fontWeight={400} marginTop='8px' variant='bigger'>
      Home
    </Text>
  </Column>
);

export default Home;
