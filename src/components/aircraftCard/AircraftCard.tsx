import {useTheme} from '@emotion/react';
import {Card} from '../card';
import {Spacing} from '../spacing';
import {Typography} from '../typography';
import {AircraftCardProps} from './types';
import styled from '@emotion/native';
import {Image} from 'react-native';

export const AircraftCard = ({
  name,
  ageText,
  seatCountText,
  imageBase64,
  registrationNumber,
  engineCount,
  firstFlightYear,
  amenities,
}: AircraftCardProps) => {
  const {spacing} = useTheme();
  return (
    <Card>
      <Typography variant="display" weight="semibold" size="xs">
        {name}
      </Typography>
      <Spacing height={spacing.xs} />
      <TopDetailWrapper>
        <Typography variant="text" color="quaternary" size="xs" weight="medium">
          {ageText}
        </Typography>
        <Dot />
        <Typography variant="text" color="quaternary" size="xs" weight="medium">
          {seatCountText}
        </Typography>
      </TopDetailWrapper>
      <Spacing height={spacing.xs} />
      <ImageWrapper>
        <StyledImage source={{uri: imageBase64}} />
      </ImageWrapper>
      <Spacing height={spacing.xxxl} />
      <DetailWrapper>
        <DetailItem>
          <Typography variant="text" color="tertiary" size="xs">
            Registration Number
          </Typography>
          <Typography variant="text" color="primary" size="sm" weight="semibold">
            {registrationNumber}
          </Typography>
        </DetailItem>
        <DetailItem>
          <Typography variant="text" color="tertiary" size="xs">
            Engine Count
          </Typography>
          <Typography variant="text" color="primary" size="sm" weight="semibold">
            {engineCount}
          </Typography>
        </DetailItem>
        <DetailItem>
          <Typography variant="text" color="tertiary" size="xs">
            First Flight
          </Typography>
          <Typography variant="text" color="primary" size="sm" weight="semibold">
            {firstFlightYear}
          </Typography>
        </DetailItem>
      </DetailWrapper>
      <Spacing height={spacing.xxxl} />
      <AmenityWrapper>
        {amenities.map((amenity, index) => (
          <AmenityItemWrapper key={index}>
            {amenity.icon}
            <Typography variant="text" color="primary" size="xs">
              {amenity.text}
            </Typography>
          </AmenityItemWrapper>
        ))}
      </AmenityWrapper>
    </Card>
  );
};

const TopDetailWrapper = styled.View`
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
  padding: ${({theme}) => `0 ${theme.spacing.xl}px`};
  height: 129px;
`;

const StyledImage = styled.Image`
  width: 100%;
  height: 100%;
`;

const DetailWrapper = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

const DetailItem = styled.View`
  flex-direction: column;
  gap: ${({theme}) => `${theme.spacing.xs}px`};
`;

const AmenityWrapper = styled.View`
  gap: ${({theme}) => `${theme.spacing.md}px`};
`;

const AmenityItemWrapper = styled.View`
  flex-direction: row;
  gap: ${({theme}) => `${theme.spacing.md}px`};
  align-items: center;
`;
