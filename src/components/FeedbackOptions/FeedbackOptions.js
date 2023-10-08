export const FeedbackOptions = ({ options,onLeaveFeedback }) => {
  return (
    <ul>
      {Object.keys(options).map(name => (
        <li key={name}>
          <button
            onClick={() => {
                  onLeaveFeedback(name);
            }}
          >
            {name}
          </button>
        </li>
      ))}
    </ul>
  );
};
