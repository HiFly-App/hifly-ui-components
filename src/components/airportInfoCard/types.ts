export type ActionItem = {
  text: string;
  onPress: () => void;
};

export type AirportInfoCardProps = {
  name: string;
  description: string;
  serviceAirline: string;
  imageBase64: string; // Added property for base64 info
  code: string;
  openYear: string;
  actionItems: ActionItem[];
};
