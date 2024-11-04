import type {Meta, StoryObj} from '@storybook/react';

import {getDefaultTheme, Card, CardProps} from '../../src';
import {ThemeProvider} from '@emotion/react';
import React, {PropsWithChildren} from 'react';
import {Text, View} from 'react-native';

const meta: Meta<CardProps> = {
  title: 'HiFly/Atomics/Card/Light',
  component: Card,
  args: {},
  parameters: {
    docs: {iframeHeight: 600, previewSource: 'open'},
  },

  decorators: [
    Story => (
      <ThemeProvider theme={getDefaultTheme('light')}>
        <View style={{alignSelf: 'flex-start', padding: 20, backgroundColor: 'white'}}>
          <Story />
        </View>
      </ThemeProvider>
    ),
  ],
};

export default meta;

type Story = StoryObj<CardProps>;

export const DefaultCard: Story = {
  args: {
    children: <Text>Card content</Text>,
  },
};
