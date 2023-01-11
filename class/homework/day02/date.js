function getToday(today) {
    var today = new Date();
    var year = today.getFullYear();
    var month = today.getMonth() + 1;
    var date = today.getDate();
    var hours = today.getHours(); 
    var minutes = today.getMinutes();  
    var seconds = today.getSeconds();
    
    return console.log("오늘은 " + year + "년" + month + "월 " + date + "일 " +  hours + ":" + minutes + ":" + seconds + "입니다")
}

getToday()