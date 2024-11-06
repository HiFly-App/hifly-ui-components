import type {Meta, StoryObj} from '@storybook/react';

import {getDefaultTheme, AirlineCard, AirlineCardProps} from '../../src';
import {ThemeProvider} from '@emotion/react';
import React from 'react';
import {Text, View} from 'react-native';

import {useBreakpoints} from '../../src/hooks/useBreakpoints';

const meta: Meta<AirlineCardProps> = {
  title: 'HiFly/Atomics/AirlineCard/Light',
  component: AirlineCard,
  parameters: {
    docs: {iframeHeight: 600, previewSource: 'open'},
  },

  decorators: [
    Story => {
      const {xs} = useBreakpoints();
      return (
        <ThemeProvider theme={getDefaultTheme('light')}>
          <View
            style={{
              padding: xs ? undefined : 20,
              backgroundColor: 'white',
              width: xs ? undefined : 394,
            }}>
            <Story />
          </View>
        </ThemeProvider>
      );
    },
  ],
};

export default meta;

type Story = StoryObj<AirlineCardProps>;

export const DefaultAirlineRouteCard: Story = {
  args: {
    name: 'Lufthansa',
    subName: 'Star Alliance',
    country: 'Germany',
    rating: 4.5,
    ratingCount: 100,
    atc: 'Lufthansa',
    iata: 'DLH',
    icao: 'LH',
  },
};
