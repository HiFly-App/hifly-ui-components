import type {Meta, StoryObj} from '@storybook/react';

import {getDefaultTheme, AircraftCard, AircraftCardProps, Icons} from '../../src';
import {ThemeProvider} from '@emotion/react';
import React from 'react';
import {Text, View} from 'react-native';

import {useBreakpoints} from '../../src/hooks/useBreakpoints';

const meta: Meta<AircraftCardProps> = {
  title: 'HiFly/Atomics/AircraftCard/Light',
  component: AircraftCard,
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

type Story = StoryObj<AircraftCardProps>;

export const DefaultAircraftCard: Story = {
  args: {
    name: 'Airbus A350 XWB',
    ageText: '2 years old',
    seatCountText: 'Up to 300 seats',
    registrationNumber: 'D-AIXA',
    engineCount: 2,
    firstFlightYear: 2024,
    amenities: [
      {icon: <Icons.Meal width={20} height={20} color={'#101828'} />, text: 'Meal included'},
      {icon: <Icons.Usb width={20} height={20} color={'#101828'} />, text: 'USB port and power outlet'},
      {icon: <Icons.Wifi width={20} height={20} color={'#101828'} />, text: 'Wi-Fi is available'},
      {icon: <Icons.Entertainment width={20} height={20} color={'#101828'} />, text: 'On-demand entertainment'},
    ],
    imageBase64:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASIAAACBCAYAAABkQbdCAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAEWeSURBVHgB7X0HgGRVlfZ5r3Lo6uqcJ+dMBhVw1EX9QXQFXZU1sKuyrqjs/wusigvuKhhQCYskUXIYcnBGBAYEJs8wOfWk7pme6Z6ezt2V6733n3Pui9U9ZNwF7gc9VfXCfffd8N2T7r0AEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhLvdyggISEh8SaxePFiUBQlNGPu3Jlt+w59bPPWvR/q7u5rPnSwXwGfBjmtCNn0CKigQzqdwr8sDB7pgyP9faAqxpLYMS3/ue3BB/OSiCQkJN4U9u3bRyQUicfj1z6x+OWvXnf9PcGe3gGkHAMUA4knMwwjA30o7RjgDwZAQ1IyDLxRVcHQ8tq02dNO37r2mWWUlgoSEhISbxB/Xr4FdnWlq4LByEOX/+zWb1z5898HU9kchCNBCIcE6WQzI3Dc8bOhqrqCCUhRfMhBPlbDEonIi58764PrrPSkRCQhIfGGcM9LLyFxKJUTI5WPrli25rQbb30ICnkNdGQbXcdPLQ/9g91gFDWoKI9CvmBAKpXme4lwDCgYzS2NX9i9fdkiK00pEUlISLxu3PnIMjB6fHXz6xr/dMP1d592/Y2LII8kpBEBMQkVYHikH/QiKmhITAMDaRgZSfF30sroLxr2r/nIqbOfcqcrJSIJCYnXhdseexlVKyUxozl5z02/u/+sFas3Qj5bZBIiogGyC6FhOpUZBEXTyH4kjruga0WjqrHios49665zH5cSkYSExGti0aJFUKEfCS2YVH3nA/cvPuuZF1ZDPmeREKBNSINsNg0ZJCH8QQYhvs+iISYkxYB4XO254LKrbylNX0pEEhISr4rFL75I0k1tfXnl7+68e/E5ix55DnwhP0C+KFQulITy+YxQyQpFvNaAgD+AdqMCijo6spAqrlM0o6q66kedbWuuKn2GlIgkJCSOikXLl0MmEIzWldfe9cRj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',
  },
};
