import styled from '@emotion/native';
import {Card} from '../card';
import {DashboardCardProps} from './types';
import {Typography} from '../typography';
import {Spacing} from '../spacing';
import {Fragment} from 'react';
import {useTheme} from '@emotion/react';

export const DashboardCard = ({items, headerText}: DashboardCardProps) => {
  const {colors} = useTheme();
  return (
    <Card>
      {headerText && (
        <HeaderContainer>
          <Typography variant="text" size="lg" weight="medium">
            {headerText}
          </Typography>
          <Spacing height={8} />
          <VerticalDevider />
          <Spacing height={8} />
        </HeaderContainer>
      )}
      <ItemContainer>
        {items.map((item, index) => (
          <Fragment key={`dashboard-item-${index}`}>
            <ItemWrapper>
              <Item>
                <Typography variant="text" size="md" color="tertiary" weight="medium">
                  {item.title}
                </Typography>
                <Spacing height={4} />
                <ValueWrapper>
                  {item.icon && <item.icon height={24} width={24} fill={colors.text[item.valueColor ?? 'primary']} />}
                  <Typography variant="display" size="xs" color={item.valueColor} weight="semibold">
                    {item.value}
                  </Typography>
                </ValueWrapper>
                <Typography variant="text" size="xs" color="quaternary" weight="regular">
                  {item.description}
                </Typography>
              </Item>
            </ItemWrapper>
            {index !== items.length - 1 && (
              <DeviderWrapper>
                <HorizontalDevider />
              </DeviderWrapper>
            )}
          </Fragment>
        ))}
      </ItemContainer>
    </Card>
  );
};

const HeaderContainer = styled.View`
  width: 100%;
  flex-direction: column;
`;

const ItemContainer = styled.View`
  flex-direction: row;
  display: flex;
  justify-content: space-between;
`;

const ItemWrapper = styled.View`
  display: flex;
  flex-direction: row;
  flex: 1;
`;

const Item = styled.View`
  flex-direction: column;
  width: fixd;
`;

const ValueWrapper = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 12px;
`;

const DeviderWrapper = styled.View`
  width: 33px;
  align-items: center;
  width: 34px;
`;

const HorizontalDevider = styled.View`
  display: flex;
  flex: 1;
  width: 1px;
  height: 100%;
  background-color: ${({theme}) => theme.colors.devider.background};
`;

const VerticalDevider = styled.View`
  height: 1px;
  background-color: ${({theme}) => theme.colors.devider.background};
  width: 100%;
`;
