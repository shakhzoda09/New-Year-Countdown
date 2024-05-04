// const textarea = document.querySelector('textarea')
// const btn = document.querySelector('button')
// const harf = document.querySelector('.harf')
// const soz = document.querySelector('.soz')


// btn.addEventListener('click', () => {
//     const text = textarea.value
//     const harflar= text.length
//     const sozlar= text.split(" ").filter(word => word.length).length
        
//     harf.innerHTML = `harflar: ${harflar}`
//     soz.innerHTML = `so'zlar: ${sozlar}`
// })

// setInterval(() => {

//     const weeks = document.querySelector('.weeks')
//     const days = document.querySelector('.days')
//     const hours = document.querySelector('.hours')
//     const minutes = document.querySelector('.minutes')
//     const seconds = document.querySelector('.seconds')

    
// let future = new Date('January 1 2025, 00:00:00').getTime()
// let today = new Date().getTime()
// let newYear = future - today
// let weeksTime =Math.floor(newYear/(1000 * 60 * 60 * 24 * 7))
// let daysTime=Math.floor(newYear/(1000*60*60*24))
// let hoursTime=Math.floor(newYear/(1000*60)%24)
// let minutesTime=Math.floor(newYear/(1000*60)%60)
// let secondsTime=Math.floor(newYear/1000%60)

// weeksTime<10?weeks.innerHTML='0'+weeksTime:weeks.innerHTML=weeksTime
// daysTime<10?days.innerHTML='0'+daysTime:days.innerHTML=daysTime
// hoursTime<10?days.innerHtml = '0'+ hoursTime:hours.innerHTML=daysTime
// minutesTime <10? minutes.innerHTML='0'+ minutesTime:minutes.innerHTML=minutesTime
// secondsTime <10? seconds.innerHTML='0'+ secondsTime:seconds.innerHTML=secondsTime


// }, 1000)

setInterval(() => {
    const months = document.querySelector('.months')
    const weeks = document.querySelector('.weeks')
    const days = document.querySelector('.days')
    const hours = document.querySelector('.hours')
    const minutes = document.querySelector('.minutes')
    const seconds = document.querySelector('.seconds')
    
    let future = new Date('January 1, 2025 00:00:00').getTime()
    let today = new Date().getTime()
    let newYear = future-today

    // let monthsTime = Math.floor(newYear / 30)
    let weeksTime = Math.floor(newYear/(1000*60*60*24*7))
    let daysTime = Math.floor((newYear % (1000*60*60*24*7))/(1000* 60*60*24))
    let hoursTime = Math.floor((newYear % (1000*60*60*24))/(1000*60*60))
    let minutesTime = Math.floor((newYear % (1000*60*60))/(1000*60))
    let secondsTime = Math.floor((newYear % (1000*60))/1000)

    // monthsTime < 10 ? months.innerHTML = '0' + monthsTime : months.innerHTML = monthsTime
    weeksTime < 10 ? weeks.innerHTML = '0' + weeksTime : weeks.innerHTML = weeksTime
    daysTime < 10 ? days.innerHTML = '0' + daysTime : days.innerHTML = daysTime
    hoursTime < 10 ? hours.innerHTML = '0' + hoursTime : hours.innerHTML = hoursTime
    minutesTime < 10 ? minutes.innerHTML = '0' + minutesTime : minutes.innerHTML = minutesTime
    secondsTime < 10 ? seconds.innerHTML = '0' + secondsTime : seconds.innerHTML = secondsTime
}, 1000)




