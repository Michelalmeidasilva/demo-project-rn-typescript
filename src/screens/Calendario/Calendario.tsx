import React, { FC } from 'react';

import { Text, Column } from 'src/components';

const Calendario: FC = () => (
  <Column alignItems='center'>
    <Text color='gray.n800' textAlign='center' fontWeight={400} marginTop='8px' variant='bigger'>
      Calendário
    </Text>
  </Column>
);

export default Calendario;
