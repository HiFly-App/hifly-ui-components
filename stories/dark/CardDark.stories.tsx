import type {Meta, StoryObj} from '@storybook/react';

import {getDefaultTheme, Card, CardProps} from '../../src';
import {ThemeProvider} from '@emotion/react';
import React, {PropsWithChildren} from 'react';
import {Text, View} from 'react-native';

const meta: Meta<CardProps> = {
  title: 'HiFly/Atomics/Card/Dark',
  component: Card,
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

type Story = StoryObj<CardProps>;

export const DefaultCard: Story = {
  args: {
    children: <Text style={{color: 'white'}}>Card content</Text>,
  },
};
