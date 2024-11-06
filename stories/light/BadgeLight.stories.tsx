import type {Meta, StoryObj} from '@storybook/react';

import {getDefaultTheme, Badge, BadgeProps, Icons} from '../../src';
import {ThemeProvider} from '@emotion/react';
import React from 'react';
import {View} from 'react-native';

const meta: Meta<BadgeProps> = {
  title: 'HiFly/Atomics/Badge/Light',
  component: Badge,
  args: {
    label: 'A52',
  },
  parameters: {
    docs: {iframeHeight: 600, previewSource: 'open'},
  },

  decorators: [
    Story => (
      <ThemeProvider theme={getDefaultTheme('light')}>
        <View style={{alignSelf: 'flex-start', padding: 20}}>
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
    icon: Icons.Gate,
  },
};

export const MediumBadge: Story = {
  args: {
    size: 'md',
    icon: Icons.Gate,
  },
};

export const LargeBadge: Story = {
  args: {
    size: 'lg',
    icon: Icons.Gate,
  },
};
