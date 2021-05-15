// 1 часть - подключение библиотеки для запросов на api адреса
const rp = require('request-promise')

// выполняем асинхронный запрос и модуль работает как замыкание
module.exports = async function(city = '') {
     if (!city) {
         throw new Error('Имя города не может быть пустым')
     }
    //92ce5897abfe29e61894cfae8504bc66 api key openweathermap
    const KEY = '92ce5897abfe29e61894cfae8504bc66'
    const uri = 'http://api.openweathermap.org/data/2.5/weather'

    const options = {
        uri,
        qs: {
          appid: KEY,
          q: city,
          units: 'imperial'
        },
        json: true
      }
    
      try {
        const data = await rp(options)
        const celsius = (data.main.temp - 32) * 5/9
    
        return {
          weather: `${data.name}: ${celsius.toFixed(0)}`,
          error: null
        }
      } catch (error) {
        // console.log(error)
        return {
          weather: null,
          error: error.error.message
        }
      } 
    }