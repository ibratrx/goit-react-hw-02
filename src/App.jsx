import { useEffect, useState } from 'react';
import "./App.css";
import Description from "./components/Description/Description";
import Options from "./components/Options/Options";
import Notification from './components/Notification/Notification';
import Feedback from "./components/Feedback/Feedback";

function App() {
  // Состояние для хранения отзывов
  const [feedback, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  // Загружаем сохраненные отзывы из localStorage при первой загрузке
  useEffect(() => {
    const savedFeedback = JSON.parse(localStorage.getItem("feedback"));
    if (savedFeedback) {
      setFeedback(savedFeedback);
    }
  }, []);

  // Сохраняем текущее состояние отзывов в localStorage при каждом изменении
  useEffect(() => {
    localStorage.setItem("feedback", JSON.stringify(feedback));
  }, [feedback]);

  // Обновление состояния при получении отзыва
  const updateFeedback = (feedbackType) => {
    setFeedback((prevFeedback) => ({
      ...prevFeedback,
      [feedbackType]: prevFeedback[feedbackType] + 1,
    }));
  };

  // Сброс состояния отзывов
  const resetFeedback = () => {
    setFeedback({ good: 0, neutral: 0, bad: 0 });
  };

  // Вычисление общего количества отзывов
  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;

  // Вычисление процента положительных отзывов
  const positiveFeedbackPercent =
    Math.round((feedback.good / totalFeedback) * 100) || 0;

  return (
    <section>
      {/* Описание формы отзывов */}
      <Description message="Please leave your feedback about our service by selecting one of the options below." />
      
      {/* Кнопки для выбора типа отзыва и кнопка сброса */}
      <Options
        onFeedback={updateFeedback}
        onReset={resetFeedback}
        totalFeedback={totalFeedback}
      />

      {/* Отображение статистики или уведомление, если нет отзывов */}
      {totalFeedback > 0 ? (
        <Feedback
          feedback={feedback}
          totalFeedback={totalFeedback}
          positiveFeedbackPercent={positiveFeedbackPercent}
        />
      ) : (
        <Notification message="No feedback yet" />
      )}
    </section>
  );
}

export default App;
