import React from 'react';
import {GluestackUIProvider} from '@gluestack-ui/themed';
import {config} from '@gluestack-ui/config';
import Loginscreen from './screens/Loginscreen';
export default function App() {
  return (
    <>
      <GluestackUIProvider config={config}>
        <Loginscreen />
      </GluestackUIProvider>
    </>
  );
}
