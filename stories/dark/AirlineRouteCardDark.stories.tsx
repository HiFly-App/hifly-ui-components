import type {Meta, StoryObj} from '@storybook/react';

import {getDefaultTheme, AirlineRouteCard, AirlineRouteCardProps} from '../../src';
import {ThemeProvider} from '@emotion/react';
import React from 'react';
import {Text, View} from 'react-native';

const meta: Meta<AirlineRouteCardProps> = {
  title: 'HiFly/Cards/AirlineRouteCard/Dark',
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
    departure: {
      airportInfo: {
        airportCode: 'JFK',
        city: 'New York',
        airportName: 'Kennedy Airport',
      },
      timeData: {
        originalTime: '10:00 AM',
        scheduledTime: '10:10 AM',
        scheduleTimeText: 'Departs in 1h 25m',
        scheduleTimeColor: 'error',
        timeStatusText: '10 min delayed',
        timeStatusColor: 'error',
      },
      gate: 'A1',
    },
    arrival: {
      airportInfo: {
        airportCode: 'LAX',
        city: 'Los Angeles',
        airportName: 'Kennedy Airport',
      },
      timeData: {
        originalTime: '18:00 PM',
        scheduledTime: '18:00 PM',
        scheduleTimeText: 'Arrives in 7h 50m',
        scheduleTimeColor: 'primary',
        timeStatusText: 'On time',
        timeStatusColor: 'success',
      },
      gate: 'B1',
      baggageCount: '2',
    },
    flyingTime: '7h 50m',
    flyingDistance: '4,000 km',
  },
};
