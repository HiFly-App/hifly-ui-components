import type {Meta, StoryObj} from '@storybook/react';

import {getDefaultTheme, Pill, PillProps} from '../../src';
import {ThemeProvider} from '@emotion/react';
import React from 'react';
import {View} from 'react-native';

const meta: Meta<PillProps> = {
  title: 'HiFly/Atomics/Pill/Dark',
  component: Pill,
  args: {
    label: 'On Time',
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
            backgroundColor: getDefaultTheme('dark').colors.background.primary,
            padding: 20,
          }}>
          <Story />
        </View>
      </ThemeProvider>
    ),
  ],
};

export default meta;

type Story = StoryObj<PillProps>;

export const DefaultPill: Story = {
  args: {
    size: 'sm',
  },
};
