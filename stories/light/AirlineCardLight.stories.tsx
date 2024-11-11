import type {Meta, StoryObj} from '@storybook/react';

import {getDefaultTheme, AirlineCard, AirlineCardProps} from '../../src';
import {ThemeProvider} from '@emotion/react';
import React from 'react';
import {Text, View} from 'react-native';

import {useBreakpoints} from '../../src/hooks/useBreakpoints';

const meta: Meta<AirlineCardProps> = {
  title: 'HiFly/Cards/AirlineCard/Light',
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
    ratingCountText: '100 reviews',
    details: [
      {title: 'ATC', value: 'Lufthansa'},
      {title: 'IATA', value: 'DLH'},
      {title: 'ICAO', value: 'LH'},
    ],
    actions: [
      {
        label: 'Phone',
        onPress: () => {
          console.log('Phone');
        },
      },
      {
        label: 'Website',
        onPress: () => {
          console.log('Website');
        },
      },
      {
        label: 'Social Media',
        onPress: () => {
          console.log('Social Media');
        },
      },
    ],
    imageBase64:
      'data:image/png;base64,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',
  },
};
