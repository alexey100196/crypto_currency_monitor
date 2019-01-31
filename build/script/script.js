$(document).ready(function () {
	$('.filter').selectmenu();
	
	// debugger;
});
let previousValue = 'USD';

function change(chosed_cur) {
	$.ajax({
		url: "https://apiv2.bitcoinaverage.com/indices/global/ticker/BTC"+chosed_cur,
		dataType: "json",
		success: function( json ) {
			console.log( json );

				$('.currency__numb_hour').text(json.open.hour.toFixed());
				$('.currency__numb_day').text(json.open.day.toFixed());
				$('.currency__numb_week').text(json.open.week.toFixed());
				$('.currency__numb_month').text(json.open.month.toFixed());
		}
	});

	console.log(chosed_cur)
}
let chosed_cur = $('#currency option:selected').val()
change( $('#currency option:selected').val() );

// setInterval( function() {
// 	change( $('#currency option:selected').val() );
// }, 10000 );


$('#currency').change(function() {
	change( $(this).val() );
});





