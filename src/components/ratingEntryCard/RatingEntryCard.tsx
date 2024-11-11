import {useTheme} from '@emotion/react';
import {Card} from '../card';
import {Spacing} from '../spacing';
import {Typography} from '../typography';
import {RatingEntryCardProps} from './types';
import {Button} from '../button';

export const RatingEntryCard = ({title, description, actionLabel, onPress}: RatingEntryCardProps) => {
  const {spacing} = useTheme();
  return (
    <Card>
      <Typography variant="text" size="lg" weight="semibold">
        {title}
      </Typography>
      <Spacing height={spacing.xs} />
      <Typography variant="text" size="sm" color="tertiary">
        {description}
      </Typography>
      <Spacing height={spacing.xxl} />
      <Button variant="primary" label={actionLabel} onPress={onPress} fullWidth />
    </Card>
  );
};
