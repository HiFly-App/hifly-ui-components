import type {Meta, StoryObj} from '@storybook/react';

import {getDefaultTheme, DashboardCard, DashboardCardProps, Icons} from '../../src';
import {ThemeProvider} from '@emotion/react';
import React, {PropsWithChildren} from 'react';
import {Text, View} from 'react-native';

const meta: Meta<DashboardCardProps> = {
  title: 'HiFly/Atomics/DashboardCard/Dark',
  component: DashboardCard,
  args: {},
  parameters: {
    docs: {iframeHeight: 600, previewSource: 'open'},
  },

  decorators: [
    Story => (
      <ThemeProvider theme={getDefaultTheme('dark')}>
        <View
          style={{
            alignSelf: 'flex-start',
            backgroundColor: getDefaultTheme('dark').colors.background.primary,
            width: 381,
            padding: 20,
          }}>
          <Story />
        </View>
      </ThemeProvider>
    ),
  ],
};

export default meta;

type Story = StoryObj<DashboardCardProps>;

export const DefaultCard: Story = {
  args: {
    items: [
      {
        title: 'Staff',
        value: '4.9',
        valueColor: 'success',
        description: '2k reviews',
      },
      {
        title: 'Comfort',
        value: '4.3',
        valueColor: 'primary',
        description: '2.1k reviews',
        icon: Icons.CabinCareAlt,
      },
      {
        title: 'Amemities',
        value: '3.1',
        valueColor: 'primary',
        description: '100 reviews',
      },
    ],
  },
};

export const DefaultCardwith2Items: Story = {
  args: {
    items: [
      {
        title: 'Staff',
        value: '4.9',
        valueColor: 'success',
        description: '2k reviews',
      },
      {
        title: 'Comfort',
        value: '4.3',
        valueColor: 'primary',
        description: '2.1k reviews',
        icon: Icons.CabinCareAlt,
      },
    ],
  },
};
