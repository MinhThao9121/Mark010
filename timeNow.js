var arrDay = ['Chủ nhật', 'Thứ Hai', 'Thứ Ba', 'Thứ Tư', 'Thứ Năm', 'Thứ Sáu', 'Thứ Bảy'];
var arrMonth = ['Tháng Một', 'Tháng Hai', 'Tháng Ba', 'Tháng Tư', 'Tháng Năm', 'Tháng Sáu', 'Tháng Bảy', 'Tháng Tám', 'Tháng Chín', 'Tháng Mười', 'Tháng Mười Một', 'Tháng Mười Hai']


var time1 = document.getElementById('time1');



function setTime1(){
	var times = new Date();
	var hour1 = times.getHours();
	var minute1 = times.getMinutes();
	var second1 = times.getSeconds();
	var day1 = times.getDay();
	var day2 = times.getDate();
	var month1 = times.getUTCMonth();
	var year1 = times.getFullYear();
	if(hour1 < 10) {
		hour1 = '0' + hour1;
	}
	if(minute1 < 10) {
		minute1 = '0' + minute1;
	}
	if(second1 < 10) {
		second1 = '0' + second1;
	}
	time1.innerHTML = hour1 + ':' + minute1 + ':'+ second1 + " - " + arrDay[day1] + ', ' + day2 + ' ' + arrMonth[month1] + ', '+year1;
}
setInterval(setTime1, 1000);