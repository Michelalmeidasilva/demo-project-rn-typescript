import React, { FC, useEffect, useState } from 'react';
import { SafeAreaView, FlatList } from 'react-native';
import { Card, Title, Paragraph } from 'react-native-paper';

import { getNewslatters } from 'src/services';
import { Column, Text } from 'src/components';

const Newslatters: FC = () => {
  const [newslattersList, setNewslattersList]: any = useState([]);

  useEffect(() => {
    // simulando uma chamada de api
    const fetchData = () => setNewslattersList(getNewslatters());

    fetchData();
  }, []);

  const renderItem = ({ item }: any) => {
    const { image } = item;

    return (
      <>
        <Column>
          <Card key={item.id} style={{ width: 280, margin: 10, height: '100%' }}>
            <Card.Content>
              <Title>{item.title}</Title>

              <Paragraph>{item.content}</Paragraph>

              {image && <Card.Cover source={{ uri: image }} style={{ height: 200 }} />}
            </Card.Content>
          </Card>
        </Column>
      </>
    );
  };

  return (
    <Column>
      <Text color='white' textAlign='center' fontWeight={400} marginTop='8px' variant='small'>
        Que tal iniciar o dia vendo o boletim de noticias da guild?
      </Text>

      <SafeAreaView>
        <FlatList
          data={newslattersList}
          renderItem={renderItem}
          horizontal
          decelerationRate={'fast'}
        />
      </SafeAreaView>
    </Column>
  );
};

export default Newslatters;
