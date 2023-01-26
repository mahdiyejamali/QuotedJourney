import React from 'react';
import { View } from 'react-native';
import { useTheme, useStyleSheet, StyleService } from '@ui-kitten/components';

export const ThemedAwesomeView = (props: any) => {
  const theme = useTheme();
  const styles = useStyleSheet(themedStyles);

  return (
    <View {...props} style={[styles.view, { color: theme['color-primary-100'] }]} />
  );
};

const themedStyles = StyleService.create({
  view: {
    backgroundColor: 'color-primary-500',
  }
});