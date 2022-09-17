import Feedback from './Feedback';
export const App = () => {
  return (
    <>
      <Feedback good={0} neutral={0} bad={0} />
      {/* PropTypes.number.isRequired check */}
    </>
  );
};
