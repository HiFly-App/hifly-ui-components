import type {Meta, StoryObj} from '@storybook/react';

import {getDefaultTheme, RatingEntryCardProps, RatingEntryCard} from '../../src';
import {ThemeProvider} from '@emotion/react';
import React from 'react';
import {Text, View} from 'react-native';

import {useBreakpoints} from '../../src/hooks/useBreakpoints';

const meta: Meta<RatingEntryCardProps> = {
  title: 'HiFly/Cards/RatingEntryCard/Light',
  component: RatingEntryCard,
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
              backgroundColor: getDefaultTheme('light').colors.background.primary,
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

type Story = StoryObj<RatingEntryCardProps>;

export const DefaultRatingEntryCard: Story = {
  args: {
    title: 'Rate your experience',
    description: 'Write your review and become a member',
    actionLabel: 'Write a review',
    onPress: () => {},
  },
};
