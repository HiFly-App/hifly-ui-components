import type {Meta, StoryObj} from '@storybook/react';

import {getDefaultTheme, LandingCardProps, LandingCard} from '../../src';
import {ThemeProvider} from '@emotion/react';
import React from 'react';
import {Text, View} from 'react-native';

import {useBreakpoints} from '../../src/hooks/useBreakpoints';

const meta: Meta<LandingCardProps> = {
  title: 'HiFly/Cards/LandingCard/Light',
  component: LandingCard,
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

type Story = StoryObj<LandingCardProps>;

export const DefaultLandingCard: Story = {
  args: {
    title: 'Landing',
    timeText: 'in 90 min',
    gate: 'A52',
    timePillProps: {
      label: 'On Time',
      type: 'success',
    },
  },
};
