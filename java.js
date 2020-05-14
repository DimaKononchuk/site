$('.move1').click(function(){
	$('#a').text('1');
});
$('.move2').click(function(){
	$('#a').text('2');
});
$('.move3').click(function(){
	$('#a').text('3');
});
$('.move4').click(function(){
	$('#a').text('4');
});
var indicator=function(){
	$('.body1').hide();
	$('.appindicator').hover(function(){
		$('.body1 ').show(1000);

	});
	$('.body2').hide();
	$('.appindicator').hover(function(){
		$('.body2 ').show(1000);

	});
	$('.body3').hide();
	$('.appindicator').hover(function(){
		$('.body3 ').show(1000);

	});
	$('.body4').hide();
	$('.appindicator').hover(function(){
		$('.body4 ').show(1000);

	});


};
var btn=function(){
	$('.btn1').click(function(){
		$('.terminals1').css('display','flex');
		$('#terminals2').css('display','none');
		$('#terminals3').css('display','none');

	});
	$('.btn2').click(function(){
		$('#terminals2').css('display','flex');
		$('#terminals1').css('display','none');
		$('#terminals3').css('display','none');
		
	});
	$('.btn3').click(function(){
		$('#terminals3').css('display','flex');
		$('#terminals1').css('display','none');
		$('#terminals2').css('display','none');
		
	});
};
btn();
indicator();
