import type {Meta, StoryObj} from '@storybook/react';

import {getDefaultTheme, Typography, TypographyProps} from '../../src';
import {ThemeProvider} from '@emotion/react';
import React from 'react';
import {View} from 'react-native';

const meta: Meta<TypographyProps> = {
  title: 'HiFly/Atomics/Typography/Light',
  component: Typography,
  args: {
    children: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
  },
  parameters: {
    docs: {iframeHeight: 600, previewSource: 'open'},
  },

  decorators: [
    Story => (
      <ThemeProvider theme={getDefaultTheme('light')}>
        <View style={{flex: 1}}>
          <Story />
        </View>
      </ThemeProvider>
    ),
  ],
};

export default meta;

type Story = StoryObj<TypographyProps>;

export const VariantText: Story = {
  args: {
    variant: 'text',
    size: 'sm',
    weight: 'regular',
  },
};

export const VariantDisplay: Story = {
  args: {
    variant: 'display',
    size: '2xl',
    weight: 'regular',
  },
};
