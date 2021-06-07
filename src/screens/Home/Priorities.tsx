import React, { FC, useEffect, useState } from 'react';

import { Text, Column, Row } from 'src/components';

import { getPriorities } from 'src/services';
import { useUser } from 'src/context';
import { ScrollView } from 'react-native-gesture-handler';

const Priorities: FC = () => {
  const [prioritiesList, setPrioritiesList]: any = useState([]);

  const { user } = useUser();

  useEffect(() => {
    const fetchData = () => setPrioritiesList(getPriorities(user?.uuid));

    fetchData();
  }, []);

  const renderItem = item => {
    const { content, subject, date, delegatedBy } = item;

    return (
      <Row mt='10px ' key={item.id}>
        <Text variant={'small'} color='white'>
          {content} {subject} no horário: {date}, foi delegado pelo {delegatedBy}
        </Text>
      </Row>
    );
  };

  return (
    <Column>
      <Text variant={'small'} color='white' lineHeight='25px'>
        De uma olhada nas suas prioridades dessa semana:
      </Text>

      <ScrollView horizontal pagingEnabled showsHorizontalScrollIndicator={false}>
        {prioritiesList && prioritiesList.map(item => renderItem(item))}
      </ScrollView>
    </Column>
  );
};

export default Priorities;
