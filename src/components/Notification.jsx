import { Text } from './Feedback.styled';
export const Notification = ({ message, display }) => {
 if (!display) return  <Text>{message}</Text>;
};
