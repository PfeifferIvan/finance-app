import { Text } from "react-native";

type Props = {
  content: string;
};

export default function Amount({ content }: Props) {
  return <Text>{content}</Text>;
}
