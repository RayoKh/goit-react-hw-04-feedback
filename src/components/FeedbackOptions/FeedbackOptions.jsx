import { FeedbackWrapper, FeedbackBtn } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <FeedbackWrapper>
    {options.map(option => (
      <FeedbackBtn key={option} onClick={() => onLeaveFeedback(option)}>
        {option}
      </FeedbackBtn>
    ))}
  </FeedbackWrapper>
);
