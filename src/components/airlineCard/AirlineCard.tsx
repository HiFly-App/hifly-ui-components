import {Card} from '../card';
import {AirlineCardProps} from './types';
import styled from '@emotion/native';
import {Typography} from '../typography';
import {useTheme} from '@emotion/react';
import {Spacing} from '../spacing';
import {Icons} from '../icons';
import {AirbnbRating} from 'react-native-ratings';
import {Button} from '../button';

export const AirlineCard = ({name, subName, country, rating, ratingCount, atc, iata, icao}: AirlineCardProps) => {
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
            <Icons.TempLuthansa width="56px" height="56px" />
          </ImageWrapper>
        </TopWrapper>
        <RatingWrapper>
          <AirbnbRating
            showRating={false}
            defaultRating={3}
            size={16}
            starContainerStyle={{margin: 10, height: 16}}
            isDisabled
            ratingContainerStyle={{height: 16, margin: 0, padding: 0, marginLeft: -12}}
          />
          <Spacing height={spacing.xs} />
          <Typography variant="text" color="secondary" size="xs" weight="medium">
            20+ Reviews
          </Typography>
        </RatingWrapper>
        <DetailWrapper>
          <DetailItem>
            <Typography variant="text" color="tertiary" size="xs">
              ATC Callsign
            </Typography>
            <Typography variant="text" color="primary" size="sm" weight="semibold">
              {atc}
            </Typography>
          </DetailItem>
          <DetailItem>
            <Typography variant="text" color="tertiary" size="xs">
              IATA
            </Typography>
            <Typography variant="text" color="primary" size="sm" weight="semibold">
              {iata}
            </Typography>
          </DetailItem>
          <DetailItem>
            <Typography variant="text" color="tertiary" size="xs">
              ICAO
            </Typography>
            <Typography variant="text" color="primary" size="sm" weight="semibold">
              {icao}
            </Typography>
          </DetailItem>
        </DetailWrapper>
        <ActionWrapper>
          <Button variant="secondary" size="sm" label="Phone" />
          <Button variant="secondary" size="sm" label="Website" />
          <Button variant="secondary" size="sm" label="Social Media" />
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
  //   gap: ${({theme}) => `${theme.spacing.xs}px`};
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
  justify-content: center;
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
