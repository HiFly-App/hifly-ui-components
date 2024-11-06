import type {Meta, StoryObj} from '@storybook/react';

import {getDefaultTheme, AirlineRouteCard, AirlineRouteCardProps} from '../../src';
import {ThemeProvider} from '@emotion/react';
import React from 'react';
import {Text, View} from 'react-native';

const meta: Meta<AirlineRouteCardProps> = {
  title: 'HiFly/Atomics/AirlineRouteCard/Dark',
  component: AirlineRouteCard,
  parameters: {
    docs: {iframeHeight: 600, previewSource: 'open'},
  },

  decorators: [
    Story => (
      <ThemeProvider theme={getDefaultTheme('dark')}>
        <View
          style={{
            alignSelf: 'flex-start',
            padding: 20,
            backgroundColor: getDefaultTheme('dark').colors.background.primary,
            width: 578,
          }}>
          <Story />
        </View>
      </ThemeProvider>
    ),
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
        airportName: 'John F. Kennedy International Airport',
      },
      time: '10:00',
      timeColor: 'success',
      status: {
        text: 'On Time',
        type: 'success',
      },
      gate: 'A1',
    },
    arrivalInfo: {
      airportInfo: {
        airportCode: 'LAX',
        city: 'Los Angeles',
        airportName: 'Los Angeles International Airport',
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
