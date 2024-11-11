export type AirlineCardDetailsItem = {
  title: string;
  value: string | number;
};

export type AirlineCardActionItem = {
  label: string;
  onPress: () => void;
};

export type AirlineCardProps = {
  name: string;
  subName: string;
  country: string;
  rating: number;
  ratingCountText: string;
  details: AirlineCardDetailsItem[];
  actions: AirlineCardActionItem[];
  imageBase64: string;
};
