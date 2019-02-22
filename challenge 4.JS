function TimeConverter(num) {
    var hours = Math.floor (num /60);
    var minutes = num % 60;
    return hours + ":" + minutes;
}

console.log(TimeConverter(78));
VM2733:7 1:18