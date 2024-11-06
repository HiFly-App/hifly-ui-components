import type {Meta, StoryObj} from '@storybook/react';

import {getDefaultTheme, AirlineRouteCard, AirlineRouteCardProps} from '../../src';
import {ThemeProvider} from '@emotion/react';
import React from 'react';
import {Text, View} from 'react-native';

import {useBreakpoints} from '../../src/hooks/useBreakpoints';

const meta: Meta<AirlineRouteCardProps> = {
  title: 'HiFly/Atomics/AirlineRouteCard/Light',
  component: AirlineRouteCard,
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
              alignSelf: 'flex-start',
              padding: xs ? undefined : 20,
              backgroundColor: 'white',
              width: xs ? undefined : 578,
            }}>
            <Story />
          </View>
        </ThemeProvider>
      );
    },
  ],
};

export default meta;

type Story = StoryObj<AirlineRouteCardProps>;

export const DefaultAirlineRouteCard: Story = {
  args: {
    depatureInfo: {
      airportInfo: {
        airportCode: 'JFK',
        city: 'New York',
        airportName: 'Kennedy Airport',
      },
      time: '10:00',
      timeColor: 'success',
      status: {
        text: 'On Time',
        type: 'success',
      },
      gate: 'A52',
    },
    arrivalInfo: {
      airportInfo: {
        airportCode: 'LAX',
        city: 'Los Angeles',
        airportName: 'Kennedy Airport',
      },
      time: '12:00',
      timeColor: 'error',
      status: {
        text: '10m Delay',
        type: 'error',
      },
      gate: 'B1',
    },
    baggageCount: '2',
    curruntFlyingTime: '2h 30m',
    curruntFlyingDistance: '2500 km',
  },
};
