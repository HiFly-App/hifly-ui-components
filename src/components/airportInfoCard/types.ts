export type ActionItem = {
  text: string;
  onPress: () => void;
};

export type AirportInfoDetailsItem = {
  title: string;
  value: string | number;
};

export type AirportInfoCardProps = {
  name: string;
  description: string;
  serviceAirline: string;
  imageBase64: string; // Added property for base64 info
  details: AirportInfoDetailsItem[];
  actionItems: ActionItem[];
};
