export const formatMinutesToHours = (minutes: number) => {
	const hours = Math.floor(minutes / 60)
	const restMinutes = minutes % 60

	const formatter = new Intl.NumberFormat('ru-RU', {
		minimumIntegerDigits: 2,
	})

	return `${formatter.format(hours)}:${formatter.format(restMinutes)}`
}
