import { Text, View, StyleSheet } from 'react-native';
import { useState, useEffect } from 'react';

export default function DateTimeScreen() {
  const [currentDate, setCurrentDate] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000);

    // Очищаем таймер при размонтировании компонента
    return () => clearInterval(timer);
  }, []);

  // Форматируем время (Часы:Минуты:Секунды)
  const formattedTime = currentDate.toLocaleTimeString();

  // Форматируем дату (День_Месяц_Год)
  const day = String(currentDate.getDate()).padStart(2, '0');
  const month = String(currentDate.getMonth() + 1).padStart(2, '0');
  const year = currentDate.getFullYear();
  const formattedDate = `${day}_${month}_${year}`;

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.timeText}>{formattedTime}</Text>
        <Text style={styles.dateText}>{formattedDate}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  timeText: {
    color: '#ffd33d',
    fontSize: 48,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  dateText: {
    color: '#fff',
    fontSize: 24,
    letterSpacing: 2,
  },
});