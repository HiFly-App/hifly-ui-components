import type {Meta, StoryObj} from '@storybook/react';

import {getDefaultTheme, DashboardCard, DashboardCardProps} from '../../src';
import {ThemeProvider} from '@emotion/react';
import React, {PropsWithChildren} from 'react';
import {Text, View} from 'react-native';

const meta: Meta<DashboardCardProps> = {
  title: 'HiFly/Atomics/DashboardCard/Light',
  component: DashboardCard,
  args: {},
  parameters: {
    docs: {iframeHeight: 600, previewSource: 'open'},
  },

  decorators: [
    Story => (
      <ThemeProvider theme={getDefaultTheme('light')}>
        <View style={{alignSelf: 'flex-start', backgroundColor: 'white', width: 361}}>
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
      },
    ],
  },
};
