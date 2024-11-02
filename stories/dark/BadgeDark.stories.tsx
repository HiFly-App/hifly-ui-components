import type {Meta, StoryObj} from '@storybook/react';

import {getDefaultTheme, Badge, BadgeProps} from '../../src';
import {ThemeProvider} from '@emotion/react';
import React from 'react';
import {View} from 'react-native';

const meta: Meta<BadgeProps> = {
  title: 'HiFly/Atomics/Badge/Dark',
  component: Badge,
  args: {
    label: 'A52',
  },
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
          }}>
          <Story />
        </View>
      </ThemeProvider>
    ),
  ],
};

export default meta;

type Story = StoryObj<BadgeProps>;

export const SmallBadge: Story = {
  args: {
    size: 'sm',
  },
};

export const MediumBadge: Story = {
  args: {
    size: 'md',
  },
};

export const LargeBadge: Story = {
  args: {
    size: 'lg',
  },
};
