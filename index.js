const title = document.querySelector('#title')
const sentence = document.querySelector('#sentence')
const todayDate = document.querySelector('#todayDate')

const compliments = [
  "Мышь, ты самая луяшая! ❤️",
  "Твоя улыбка как лучик солнца! 😊",
  "Люблю тебя, Мышка. ❤️",
  "Ты моя принцесса! 💎",
  "Обнял. Поцеловал. Погладил. ❤️",
  "Ты просто солнышко. ☀️",
  "У меня самая лучшая мышка. ⭐"
]

const now = new Date()

const time = now.toLocaleTimeString('ru-RU', { hour12: false })
const date = now.toLocaleDateString() // Текущая дата

todayDate.innerHTML = `${time.slice(0, -3)} ~ ${date}`

const randomNumber = Math.floor(Math.random() * compliments.length)
sentence.innerHTML = `${compliments[randomNumber]}`
