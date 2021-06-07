import React, { FC } from 'react';

import { ScrollView } from 'react-native';

import { Column, Text } from 'src/components';
import Newslatters from './Newslatter';
import Priorities from './Priorities';

import { useUser } from 'src/context';
// import { GuildManagement } from 'src/screens';

const Home: FC = () => {
  const { user } = useUser();
  console.log(user);
  return (
    <ScrollView>
      <Column justifyContent='flex-start' m='10px'>
        <Text color='white' textAlign='center' fontWeight={400} marginTop='8px' variant='medium'>
          {user?.role} {user && user.name}, bom dia!
        </Text>

        {user?.role === 'member' && <Newslatters />}

        {user?.role === 'officer' && <Priorities />}

        {/* {user?.role === 'officer' && <GuildManagement />} */}
      </Column>
    </ScrollView>
  );
};

export default Home;
