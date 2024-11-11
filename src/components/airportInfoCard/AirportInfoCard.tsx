import {AirportInfoCardProps} from './types';
import {Card} from '../card';
import {Typography} from '../typography';
import {Spacing} from '../spacing';
import styled from '@emotion/native';
import {useTheme} from '@emotion/react';
import {Button} from '../button';

export const AirportInfoCard = ({
  name,
  description,
  serviceAirline,
  imageBase64,
  details,
  actionItems,
}: AirportInfoCardProps) => {
  const {spacing} = useTheme();
  return (
    <Card>
      <Typography variant="display" size="xs" weight="semibold">
        {name}
      </Typography>
      <Spacing height={spacing.md} />
      <DescriptionWrapper>
        <Typography variant="text" size="xs" weight="medium" color="quaternary">
          {description}
        </Typography>
        <Dot />
        <Typography variant="text" size="xs" weight="medium" color="quaternary">
          {serviceAirline}
        </Typography>
      </DescriptionWrapper>
      <Spacing height={spacing.md} />
      <ImageWrapper>
        <StyledImage source={{uri: imageBase64}} />
      </ImageWrapper>
      <Spacing height={spacing.xl} />
      <DetailWrapper>
        {details.map((detail, index) => (
          <DetailItem key={`detail-${index}`}>
            <Typography variant="text" color="tertiary" size="xs">
              {detail.title}
            </Typography>
            <Typography variant="text" color="primary" size="sm" weight="semibold">
              {detail.value}
            </Typography>
          </DetailItem>
        ))}
      </DetailWrapper>
      <Spacing height={spacing.xxxl} />
      <ActionWrapper>
        {actionItems.map((actionItem, index) => (
          <Button
            variant="secondary"
            size="sm"
            label={actionItem.text}
            onPress={actionItem.onPress}
            key={`action-${index}`}
          />
        ))}
      </ActionWrapper>
    </Card>
  );
};

const DescriptionWrapper = styled.View`
  flex-direction: row;
  gap: ${({theme}) => `${theme.spacing.xs}px`};
  align-items: center;
`;

const Dot = styled.View`
  height: 8px;
  width: 8px;
  border-radius: 50%;
  background-color: ${({theme}) => theme.colors.text.quaternary};
`;

const ImageWrapper = styled.View`
  height: 188px;
`;

const StyledImage = styled.Image`
  width: 100%;
  height: 100%;
  resize-mode: contain;
  border-radius: 8px;
`;

const DetailWrapper = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

const DetailItem = styled.View`
  flex-direction: column;
  gap: ${({theme}) => `${theme.spacing.xs}px`};
`;

const ActionWrapper = styled.View`
  flex-direction: row;
  gap: ${({theme}) => `${theme.spacing.md}px`};
`;
