const Feedback = ({ feedback, totalFeedback, positiveFeedbackPercent }) => {
    const { good, neutral, bad } = feedback;

    return (
        <div>
            <p>Good: {good}</p>
            <p>Neutral: {neutral}</p>
            <p>Bad: {bad}</p>
            <p>Total: {totalFeedback}</p>
            <p>Positive: {positiveFeedbackPercent}%</p>
        </div>
    );
};

export default Feedback;
