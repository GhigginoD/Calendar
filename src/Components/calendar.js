/* eslint-disable */


const dayName = new Array ("domingo", "segunda", "terça", "quarta", "quinta", "sexta", "sábado")
const monName = new Array ("janeiro", "fevereiro", "março", "abril", "maio", "junho", "julho","agosto", "setembro","outubro", "novembro", "dezembro")
const quantDays = new Array (90,90,89,92,91,92,92,92,92,91,92,92)
export default function Calendar() {
  const now = new Date("02-02-2023")
  const currentMonth = now.getMonth()
  const quantMonthsDays = quantDays[currentMonth]
  const currentYear = now.getFullYear()
  const days = []
  var initialDay = 1
  while(true){
    const currentDay = new Date(currentYear, currentMonth-1, initialDay)
    if (initialDay > quantMonthsDays) break
    days.push(currentDay)
    initialDay++;
  }
  return (
    <>
      {days.map(currentDay => {
        return <h4>{dayName[currentDay.getDay()]} {currentDay.getDate()} de {monName[currentDay.getMonth()]} de {currentDay.getFullYear()}. </h4>
      })}
      
    </>
  ) 
}
