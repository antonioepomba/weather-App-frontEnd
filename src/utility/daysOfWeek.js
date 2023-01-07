const daysOfWeek = (today) => {
    const dateOptions = { timeZone: 'UTC', month: 'long', day: 'numeric', year: 'numeric' };

    const dateFormatter = new Intl.DateTimeFormat('en-US', dateOptions);
    const dateAsFormattedString = dateFormatter.format(today);
    return dateAsFormattedString
    }
    export default daysOfWeek
   /* var actualDate = today
    var newDate;
    for(var i=1; i<=7; i++){
       
     newDate = new Date(actualDate.getUTCDay() ,actualDate.getUTCDate()+i);
      return newDate.toUTCString()
    }*/