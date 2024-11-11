import {Card} from '../card';
import {AirlineCardProps} from './types';
import styled from '@emotion/native';
import {Typography} from '../typography';
import {useTheme} from '@emotion/react';
import {Spacing} from '../spacing';
import {Icons} from '../icons';
import {AirbnbRating} from 'react-native-ratings';
import {Button} from '../button';

export const AirlineCard = ({
  name,
  subName,
  country,
  rating,
  ratingCountText,
  details,
  actions,
  imageBase64,
}: AirlineCardProps) => {
  const {spacing} = useTheme();
  return (
    <Card>
      <Container>
        <TopWrapper>
          <TopLeftWrapper>
            <Typography variant="display" size="xs" weight="semibold">
              {name}
            </Typography>
            <Spacing height={spacing.xs} />
            <CityWrapper>
              <Typography variant="text" size="xs" weight="medium" color="quaternary">
                {subName}
              </Typography>
              <Dot />
              <Typography variant="text" size="xs" weight="medium" color="quaternary">
                {country}
              </Typography>
            </CityWrapper>
          </TopLeftWrapper>
          <ImageWrapper>
            <StyledImage source={{uri: imageBase64}} />
          </ImageWrapper>
        </TopWrapper>
        <RatingWrapper>
          <AirbnbRating
            showRating={false}
            defaultRating={rating}
            size={16}
            starContainerStyle={{margin: 10, height: 16}}
            isDisabled
            ratingContainerStyle={{height: 16, margin: 0, padding: 0, marginLeft: -12}}
          />
          <Spacing height={spacing.xs} />
          <Typography variant="text" color="secondary" size="xs" weight="medium">
            {ratingCountText}
          </Typography>
        </RatingWrapper>
        <DetailWrapper>
          {details.map((item, index) => (
            <DetailItem key={index}>
              <Typography variant="text" color="tertiary" size="xs">
                {item.title}
              </Typography>
              <Typography variant="text" color="primary" size="sm" weight="semibold">
                {item.value}
              </Typography>
            </DetailItem>
          ))}
        </DetailWrapper>
        <ActionWrapper>
          {actions.map((action, index) => (
            <Button variant="secondary" size="sm" label={action.label} key={index} onPress={action.onPress} />
          ))}
        </ActionWrapper>
      </Container>
    </Card>
  );
};

const Container = styled.View`
  flex-direction: column;
  gap: ${({theme}) => `${theme.spacing.xl}px`};
`;

const TopWrapper = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

const TopLeftWrapper = styled.View`
  flex-direction: column;
`;

const CityWrapper = styled.View`
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
  height: 56px;
  width: auto;
  aspect-ratio: 1;
`;

const StyledImage = styled.Image`
  height: 100%;
  width: 100%;
  resize-mode: contain;
`;

const RatingWrapper = styled.View`
  align-items: flex-start;
  height: 38px;
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
