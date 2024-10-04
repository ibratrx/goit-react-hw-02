const Options = ({ onFeedback, onReset, totalFeedback }) => {

    const handleGoodFeedback = () => onFeedback("good");
    const handleNeutralFeedback = () => onFeedback("neutral");
    const handleBadFeedback = () => onFeedback("bad");

    return (
        <div className="buttonBox">
            <button 
                type="button" 
                onClick={handleGoodFeedback}>
                Good
            </button>

            <button 
                type="button" 
                onClick={handleNeutralFeedback}>
                Neutral
            </button>

            <button 
                type="button" 
                onClick={handleBadFeedback}>
                Bad
            </button>

            {totalFeedback > 0 && (
                <button 
                    type="button" 
                    onClick={onReset}>
                    Reset
                </button>
            )}
        </div>
    );
}

export default Options;
