/*
Sistema desenvolvido por William Castro
Email para contato: williamccoelho@gmail.com
*/

function exe_system(){
	var error = 0;

	// QUADRO 01 - LINHA 01
	var R_Q01L01 = 	$("input:checked[name=Q01L01]").map(function() {return $(this).val();}).get().join();
	
	if(R_Q01L01 == '') {
		error++;
		destacar('Q01L01');
	}
	else {
		if($('#L_Q01L01').is('.linha_h')) {
			$('#L_Q01L01').removeClass('linha_h');
			$('#L_Q01L01').addClass('even');
		}
	}
	
	// QUADRO 01 - LINHA 02 
	var R_Q01L02 = 	$("input:checked[name=Q01L02]").map(function() {return $(this).val();}).get().join();
	
	if(R_Q01L02 == '') {
		error++;
		destacar('Q01L02');
	}	
	else {
		if($('#L_Q01L02').is('.linha_h')) {
			$('#L_Q01L02').removeClass('linha_h');
		}
	}
	
	// QUADRO 01 - LINHA 03 
	var R_Q01L03 = 	$("input:checked[name=Q01L03]").map(function() {return $(this).val();}).get().join();
	
	if(R_Q01L03 == '') {
		error++;
		destacar('Q01L03');
	}	
	else {
		if($('#L_Q01L03').is('.linha_h')) {
			$('#L_Q01L03').removeClass('linha_h');
			$('#L_Q01L03').addClass('even');
		}
	}	
	
	// QUADRO 01 - LINHA 04
	var R_Q01L04 = 	$("input:checked[name=Q01L04]").map(function() {return $(this).val();}).get().join();
	
	if(R_Q01L04 == '') {
		error++;
		destacar('Q01L04');
	}
	else {
		if($('#L_Q01L04').is('.linha_h')) {
			$('#L_Q01L04').removeClass('linha_h');;
		}
	}	
	
	
	// QUADRO 02 - LINHA 01
	var R_Q02L01 = 	$("input:checked[name=Q02L01]").map(function() {return $(this).val();}).get().join();
	
	if(R_Q02L01 == '') {
		error++;
		destacar('Q02L01');
	}	
	else {
		if($('#L_Q02L01').is('.linha_h')) {
			$('#L_Q02L01').removeClass('linha_h');
			$('#L_Q02L01').addClass('even');
		}
	}		
	
	// QUADRO 03 - LINHA 01
	var R_Q03L01 = 	$("input:checked[name=Q03L01]").map(function() {return $(this).val();}).get().join();
	
	if(R_Q03L01 == '') {
		var R_Q03L01 = 0;
	}		
	
	
	// QUADRO 04 - LINHA 01
	var R_Q04L01 = 	$("input:checked[name=Q04L01]").map(function() {return $(this).val();}).get().join();
	
	if(R_Q04L01 == '') {
		error++;
		destacar('Q04L01');
	}		
	else {
		if($('#L_Q04L01').is('.linha_h')) {
			$('#L_Q04L01').removeClass('linha_h');
			$('#L_Q04L01').addClass('even');
		}
	}		
	
	
	// QUADRO 05 - LINHA 01
	var R_Q05L01 = 	$("input:checked[name=Q05L01]").map(function() {return $(this).val();}).get().join();
	
	if(R_Q05L01 == '') {
		error++;
		destacar('Q05L01');
	}		
	else {
		if($('#L_Q05L01').is('.linha_h')) {
			$('#L_Q05L01').removeClass('linha_h');
			$('#L_Q05L01').addClass('even');
		}
	}		
	
	
	// QUADRO 06 - LINHA 01
	var R_Q06L01 = 	$("input:checked[name=Q06L01]").map(function() {return $(this).val();}).get().join();
	
	if(R_Q06L01 == '') {
		error++;
		destacar('Q06L01');
	}			
	else {
		if($('#L_Q06L01').is('.linha_h')) {
			$('#L_Q06L01').removeClass('linha_h');
			$('#L_Q06L01').addClass('even');
		}
	}		
	
	// QUADRO 07 - LINHA 01
	var R_Q07L01 = 	$("input:checked[name=Q07L01]").map(function() {return $(this).val();}).get().join();
	
	if(R_Q07L01 == '') {
		var R_Q07L01 = 0;
	}			
	else {
		if($('#L_Q07L01').is('.linha_h')) {
			$('#L_Q07L01').removeClass('linha_h');
			$('#L_Q07L01').addClass('even');
		}
	}			
	
	
	// QUADRO 08 - LINHA 01
	var R_Q08L01 = 	$("input:checked[name=Q08L01]").map(function() {return $(this).val();}).get().join();
	
	if(R_Q08L01 == '') {
		error++;
		destacar('Q08L01');
	}	
	else {
		if($('#L_Q08L01').is('.linha_h')) {
			$('#L_Q08L01').removeClass('linha_h');
			$('#L_Q08L01').addClass('even');
		}
	}	

	// QUADRO 08 - LINHA 02
	var R_Q08L02 = 	$("input:checked[name=Q08L02]").map(function() {return $(this).val();}).get().join();
	
	if(R_Q08L02 == '') {
		error++;
		destacar('Q08L02');
	}
	else {
		if($('#L_Q08L02').is('.linha_h')) {
			$('#L_Q08L02').removeClass('linha_h');
		}
	}		
	
	// QUADRO 08 - LINHA 03
	var R_Q08L03 = 	$("input:checked[name=Q08L03]").map(function() {return $(this).val();}).get().join();
	
	if(R_Q08L03 == '') {
		error++;
		destacar('Q08L03');
	}
	else {
		if($('#L_Q08L03').is('.linha_h')) {
			$('#L_Q08L03').removeClass('linha_h');
			$('#L_Q08L03').addClass('even');
		}
	}	
	
	// QUADRO 08 - LINHA 04
	var R_Q08L04 = 	$("input:checked[name=Q08L04]").map(function() {return $(this).val();}).get().join();
	
	if(R_Q08L04 == '') {
		error++;
		destacar('Q08L04');
	}
	else {
		if($('#L_Q08L04').is('.linha_h')) {
			$('#L_Q08L04').removeClass('linha_h');
		}
	}	
	
	// QUADRO 08 - LINHA 05
	var R_Q08L05 = 	$("input:checked[name=Q08L05]").map(function() {return $(this).val();}).get().join();
	
	if(R_Q08L05 == '') {
		error++;
		destacar('Q08L05');
	}
	else {
		if($('#L_Q08L05').is('.linha_h')) {
			$('#L_Q08L05').removeClass('linha_h');
			$('#L_Q08L05').addClass('even');
		}
	}	
	
	// QUADRO 08 - LINHA 06
	var R_Q08L06 = 	$("input:checked[name=Q08L06]").map(function() {return $(this).val();}).get().join();
	
	if(R_Q08L06 == '') {
		error++;
		destacar('Q08L06');
	}
	else {
		if($('#L_Q08L06').is('.linha_h')) {
			$('#L_Q08L06').removeClass('linha_h');
		}
	}	
	
	// QUADRO 08 - LINHA 07
	var R_Q08L07 = 	$("input:checked[name=Q08L07]").map(function() {return $(this).val();}).get().join();
	
	if(R_Q08L07 == '') {
		error++;
		destacar('Q08L07')
	}
	else {
		if($('#L_Q08L07').is('.linha_h')) {
			$('#L_Q08L07').removeClass('linha_h');
			$('#L_Q08L07').addClass('even');
		}
	}					
		
		
	
	
	// QUADRO 09 - LINHA 01
	var R_Q09L01 = 	$("input:checked[name=Q09L01]").map(function() {return $(this).val();}).get().join();
	
	if(R_Q09L01 == '') {
		error++;
		destacar('Q09L01');
	}	
	else {
		if($('#L_Q09L01').is('.linha_h')) {
			$('#L_Q09L01').removeClass('linha_h');
			$('#L_Q09L01').addClass('even');
		}
	}	
	
	// QUADRO 09 - LINHA 02
	var R_Q09L02 = 	$("input:checked[name=Q09L02]").map(function() {return $(this).val();}).get().join();
	
	if(R_Q09L02 == '') {
		error++;
		destacar('Q09L02');
	}	
	else {
		if($('#L_Q09L02').is('.linha_h')) {
			$('#L_Q09L02').removeClass('linha_h');
		}
	}	
	
	// QUADRO 09 - LINHA 03
	var R_Q09L03 = 	$("input:checked[name=Q09L03]").map(function() {return $(this).val();}).get().join();
	
	if(R_Q09L03 == '') {
		error++;
		destacar('Q09L03');
	}
	else {
		if($('#L_Q09L03').is('.linha_h')) {
			$('#L_Q09L03').removeClass('linha_h');
			$('#L_Q09L03').addClass('even');
		}
	}	
	
	// QUADRO 09 - LINHA 04
	var R_Q09L04 = 	$("input:checked[name=Q09L04]").map(function() {return $(this).val();}).get().join();
	
	if(R_Q09L04 == '') {
		error++;
		destacar('Q09L04');
	}		
	else {
		if($('#L_Q09L04').is('.linha_h')) {
			$('#L_Q09L04').removeClass('linha_h');
		}
	}	

	// QUADRO 09 - LINHA 05
	var R_Q09L05 = 	$("input:checked[name=Q09L05]").map(function() {return $(this).val();}).get().join();
	
	if(R_Q09L05 == '') {
		error++;
		destacar('Q09L05');
	}			
	else {
		if($('#L_Q09L05').is('.linha_h')) {
			$('#L_Q09L05').removeClass('linha_h');
			$('#L_Q09L05').addClass('even');
		}
	}	

	// QUADRO 09 - LINHA 06
	var R_Q09L06 = 	$("input:checked[name=Q09L06]").map(function() {return $(this).val();}).get().join();
	
	if(R_Q09L06 == '') {
		error++;
		destacar('Q09L06');
	}
	else {
		if($('#L_Q09L06').is('.linha_h')) {
			$('#L_Q09L06').removeClass('linha_h');
		}
	}	
		
		
	
	
	// QUADRO 10 - LINHA 01
	var R_Q10L01 = 	$("input:checked[name=Q10L01]").map(function() {return $(this).val();}).get().join();
	
	if(R_Q10L01 == '') {
		error++;
		destacar('Q10L01');
	}	
	else {
		if($('#L_Q10L01').is('.linha_h')) {
			$('#L_Q10L01').removeClass('linha_h');
			$('#L_Q10L01').addClass('even');
		}
	}	

	// QUADRO 10 - LINHA 02
	var R_Q10L02 = 	$("input:checked[name=Q10L02]").map(function() {return $(this).val();}).get().join();
	
	if(R_Q10L02 == '') {
		error++;
		destacar('Q10L02');
	}		
	else {
		if($('#L_Q10L02').is('.linha_h')) {
			$('#L_Q10L02').removeClass('linha_h');
		}
	}	

	// QUADRO 10 - LINHA 03
	var R_Q10L03 = 	$("input:checked[name=Q10L03]").map(function() {return $(this).val();}).get().join();
	
	if(R_Q10L03 == '') {
		error++;
		destacar('Q10L03');
	}			
	else {
		if($('#L_Q10L03').is('.linha_h')) {
			$('#L_Q10L03').removeClass('linha_h');
			$('#L_Q10L03').addClass('even');
		}
	}	

	// QUADRO 10 - LINHA 04
	var R_Q10L04 = 	$("input:checked[name=Q10L04]").map(function() {return $(this).val();}).get().join();
	
	if(R_Q10L04 == '') {
		error++;
		destacar('Q10L04');
	}			
	else {
		if($('#L_Q10L04').is('.linha_h')) {
			$('#L_Q10L04').removeClass('linha_h');
		}
	}	

	// QUADRO 10 - LINHA 05
	var R_Q10L05 = 	$("input:checked[name=Q10L05]").map(function() {return $(this).val();}).get().join();
	
	if(R_Q10L05 == '') {
		error++;
		destacar('Q10L05');
	}			
	else {
		if($('#L_Q10L05').is('.linha_h')) {
			$('#L_Q10L05').removeClass('linha_h');
			$('#L_Q10L05').addClass('even');
		}
	}	

	// QUADRO 10 - LINHA 06
	var R_Q10L06 = 	$("input:checked[name=Q10L06]").map(function() {return $(this).val();}).get().join();
	
	if(R_Q10L06 == '') {
		error++;
		destacar('Q10L06');
	}			
	else {
		if($('#L_Q10L06').is('.linha_h')) {
			$('#L_Q10L06').removeClass('linha_h');
		}
	}	

	// QUADRO 10 - LINHA 07
	var R_Q10L07 = 	$("input:checked[name=Q10L07]").map(function() {return $(this).val();}).get().join();
	
	if(R_Q10L07 == '') {
		error++;
		destacar('Q10L07');
	}
	else {
		if($('#L_Q10L07').is('.linha_h')) {
			$('#L_Q10L07').removeClass('linha_h');
			$('#L_Q10L07').addClass('even');
		}
	}	

	// QUADRO 10 - LINHA 08
	var R_Q10L08 = 	$("input:checked[name=Q10L08]").map(function() {return $(this).val();}).get().join();
	
	if(R_Q10L08 == '') {
		error++;
		destacar('Q10L08');
	}
	else {
		if($('#L_Q10L08').is('.linha_h')) {
			$('#L_Q10L08').removeClass('linha_h');
		}
	}	
	
	
		
		

	// QUADRO 11 - LINHA 01 // zerar todas que tiverem em branco ( nao obrigatorias )
	var R_Q11L01 = 	$("input:checked[name=Q11L01]").map(function() {return $(this).val();}).get().join();
	
	if(R_Q11L01 == '') {
		var R_Q11L01 = 0;
	}
	
	// QUADRO 11 - LINHA 02
	var R_Q11L02 = 	$("input:checked[name=Q11L02]").map(function() {return $(this).val();}).get().join();
	
	if(R_Q11L02 == '') {
		var R_Q11L02 = 0;
	}	
	
	// QUADRO 11 - LINHA 03
	var R_Q11L03 = 	$("input:checked[name=Q11L03]").map(function() {return $(this).val();}).get().join();
	
	if(R_Q11L03 == '') {
		var R_Q11L03 = 0;
	}		
	
	// QUADRO 11 - LINHA 04
	var R_Q11L04 = 	$("input:checked[name=Q11L04]").map(function() {return $(this).val();}).get().join();
	
	if(R_Q11L04 == '') {
		var R_Q11L04 = 0;
	}
	
	
	
	
	
		
	
	// QUADRO 12 - LINHA 01
	var R_Q12L01 = 	$("input:checked[name=Q12L01]").map(function() {return $(this).val();}).get().join();
	
	if(R_Q12L01 == '') {
		error++;
		destacar('Q12L01');
	}
	else {
		if($('#L_Q12L01').is('.linha_h')) {
			$('#L_Q12L01').removeClass('linha_h');
			$('#L_Q12L01').addClass('even');
		}
	}		
	
	// QUADRO 12 - LINHA 02
	var R_Q12L02 = 	$("input:checked[name=Q12L02]").map(function() {return $(this).val();}).get().join();
	
	if(R_Q12L02 == '') {
		error++;
		destacar('Q12L02')
	}
	else {
		if($('#L_Q12L02').is('.linha_h')) {
			$('#L_Q12L02').removeClass('linha_h');
		}
	}		
	
	// QUADRO 12 - LINHA 03
	var R_Q12L03 = 	$("input:checked[name=Q12L03]").map(function() {return $(this).val();}).get().join();
	
	if(R_Q12L03 == '') {
		error++;
		destacar('Q12L03')
	}
	else {
		if($('#L_Q12L03').is('.linha_h')) {
			$('#L_Q12L03').removeClass('linha_h');
			$('#L_Q12L03').addClass('even');
		}
	}		
	
	// QUADRO 12 - LINHA 04
	var R_Q12L04 = 	$("input:checked[name=Q12L04]").map(function() {return $(this).val();}).get().join();
	
	if(R_Q12L04 == '') {
		error++;
		destacar('Q12L04')
	}
	else {
		if($('#L_Q12L04').is('.linha_h')) {
			$('#L_Q12L04').removeClass('linha_h');
		}
	}		
	
	// QUADRO 12 - LINHA 05
	var R_Q12L05 = 	$("input:checked[name=Q12L05]").map(function() {return $(this).val();}).get().join();
	
	if(R_Q12L05 == '') {
		error++;
		destacar('Q12L05')
	}
	else {
		if($('#L_Q12L05').is('.linha_h')) {
			$('#L_Q12L05').removeClass('linha_h');
			$('#L_Q12L05').addClass('even');
		}
	}		
	
	// QUADRO 12 - LINHA 06
	var R_Q12L06 = 	$("input:checked[name=Q12L06]").map(function() {return $(this).val();}).get().join();
	
	if(R_Q12L06 == '') {
		error++;
		destacar('Q12L06')
	}
	else {
		if($('#L_Q12L06').is('.linha_h')) {
			$('#L_Q12L06').removeClass('linha_h');
		}
	}
			
	// QUADRO 12 - LINHA 07
	var R_Q12L07 = 	$("input:checked[name=Q12L07]").map(function() {return $(this).val();}).get().join();
	
	if(R_Q12L07 == '') {
		error++;
		destacar('Q12L07')
	}
	else {
		if($('#L_Q12L07').is('.linha_h')) {
			$('#L_Q12L07').removeClass('linha_h');
			$('#L_Q12L07').addClass('even');
		}
	}
			
	// QUADRO 12 - LINHA 08
	var R_Q12L08 = 	$("input:checked[name=Q12L08]").map(function() {return $(this).val();}).get().join();
	
	if(R_Q12L08 == '') {
		error++;
		destacar('Q12L08')
	}
	else {
		if($('#L_Q12L08').is('.linha_h')) {
			$('#L_Q12L08').removeClass('linha_h');
		}
	}
			
	// QUADRO 12 - LINHA 09
	var R_Q12L09 = 	$("input:checked[name=Q12L09]").map(function() {return $(this).val();}).get().join();
	
	if(R_Q12L09 == '') {
		error++;
		destacar('Q12L09')
	}
	else {
		if($('#L_Q12L09').is('.linha_h')) {
			$('#L_Q12L09').removeClass('linha_h');
			$('#L_Q12L09').addClass('even');
		}
	}
			
			
			
			
			
			
	// QUADRO 13 - LINHA 01
	var R_Q13L01 = 	$("input:checked[name=Q13L01]").map(function() {return $(this).val();}).get().join();
	
	if(R_Q13L01 == '') {
		error++;
		destacar('Q13L01')
	}
	else {
		if($('#L_Q13L01').is('.linha_h')) {
			$('#L_Q13L01').removeClass('linha_h');
			$('#L_Q13L01').addClass('even');
		}
	}			
			
	// QUADRO 13 - LINHA 02
	var R_Q13L02 = 	$("input:checked[name=Q13L02]").map(function() {return $(this).val();}).get().join();
	
	if(R_Q13L02 == '') {
		error++;
		destacar('Q13L02')
	}
	else {
		if($('#L_Q13L02').is('.linha_h')) {
			$('#L_Q13L02').removeClass('linha_h');
		}
	}			
			
	// QUADRO 13 - LINHA 03
	var R_Q13L03 = 	$("input:checked[name=Q13L03]").map(function() {return $(this).val();}).get().join();
	
	if(R_Q13L03 == '') {
		error++;
		destacar('Q13L03')
	}
	else {
		if($('#L_Q13L03').is('.linha_h')) {
			$('#L_Q13L03').removeClass('linha_h');
			$('#L_Q13L03').addClass('even');
		}
	}			
			
	// QUADRO 13 - LINHA 04
	var R_Q13L04 = 	$("input:checked[name=Q13L04]").map(function() {return $(this).val();}).get().join();
	
	if(R_Q13L04 == '') {
		error++;
		destacar('Q13L04')
	}
	else {
		if($('#L_Q13L04').is('.linha_h')) {
			$('#L_Q13L04').removeClass('linha_h');
		}
	}			
			
	// QUADRO 13 - LINHA 04
	var R_Q13L05 = 	$("input:checked[name=Q13L05]").map(function() {return $(this).val();}).get().join();
	
	if(R_Q13L05 == '') {
		error++;
		destacar('Q13L05')
	}
	else {
		if($('#L_Q13L05').is('.linha_h')) {
			$('#L_Q13L05').removeClass('linha_h');
			$('#L_Q13L05').addClass('even');
		}
	}			
			
			
			
			
			
			
	// QUADRO 14 - LINHA 01
	var R_Q14L01 = 	$("input:checked[name=Q14L01]").map(function() {return $(this).val();}).get().join();

	if(R_Q14L01 == '') {
		error++;
		destacar('Q14L01')
	}
	else {
		if($('#L_Q14L01').is('.linha_h')) {
			$('#L_Q14L01').removeClass('linha_h');
			$('#L_Q14L01').addClass('even');
		}
	}
	
	
	
	
	
	// VERIFICAÇÃO	
	//error = 0;
	if(error > 0) {
		alert('As alternativas destacadas em cor rosa, não foram selecionadas e são obrigatórias.');
		var error = 0;
	}
	else {
		// SOMATÓRIA - QUADRO 01
		var R_Q01 = parseFloat(R_Q01L01)+parseFloat(R_Q01L02)+parseFloat(R_Q01L03)+parseFloat(R_Q01L04);
			R_Q01 = R_Q01.toFixed(1)
		
		// SOMATÓRIA - QUADRO 02
		var R_Q02 = parseFloat(R_Q02L01);
			R_Q02 = R_Q02.toFixed(1)

		// SOMATÓRIA - QUADRO 03
		var R_Q03 = parseFloat(R_Q03L01);
			R_Q03 = R_Q03.toFixed(1)

		// SOMATÓRIA - QUADRO 04
		var R_Q04 = parseFloat(R_Q04L01);
			R_Q04 = R_Q04.toFixed(1)

		// SOMATÓRIA - QUADRO 05
		var R_Q05 = parseFloat(R_Q05L01);
			R_Q05 = R_Q05.toFixed(1)

		// SOMATÓRIA - QUADRO 06
		var R_Q06 = parseFloat(R_Q06L01);	
			R_Q06 = R_Q06.toFixed(1)

		// SOMATÓRIA - QUADRO 07
		var R_Q07 = parseFloat(R_Q07L01);	
			R_Q07 = R_Q07.toFixed(1)

		// SOMATÓRIA - QUADRO 08
		var R_Q08 = parseFloat(R_Q08L01) + parseFloat(R_Q08L02) + parseFloat(R_Q08L03) + parseFloat(R_Q08L04) + parseFloat(R_Q08L05) + parseFloat(R_Q08L06) + parseFloat(R_Q08L07);
			R_Q08 = R_Q08.toFixed(1);
		
		var R_Q09 = parseFloat(R_Q09L01) + parseFloat(R_Q09L02) + parseFloat(R_Q09L03) + parseFloat(R_Q09L04) + parseFloat(R_Q09L05) + parseFloat(R_Q09L06);
			R_Q09 = R_Q09.toFixed(1);
		
		var R_Q10 = parseFloat(R_Q10L01) + parseFloat(R_Q10L02) + parseFloat(R_Q10L03) + parseFloat(R_Q10L04) + parseFloat(R_Q10L05) + parseFloat(R_Q10L06) + parseFloat(R_Q10L07) + parseFloat(R_Q10L08);
			R_Q10 = R_Q10.toFixed(1);
		
		var R_Q11 = parseFloat(R_Q11L01) + parseFloat(R_Q11L02) + parseFloat(R_Q11L03) + parseFloat(R_Q11L04);
			R_Q11 = R_Q11.toFixed(1);
		
		var R_Q12 = parseFloat(R_Q12L01) + parseFloat(R_Q12L02) + parseFloat(R_Q12L03) + parseFloat(R_Q12L04) + parseFloat(R_Q12L05) + parseFloat(R_Q12L06) + parseFloat(R_Q12L07) + parseFloat(R_Q12L08) + parseFloat(R_Q12L09);
			R_Q12 = R_Q12.toFixed(1);
			
		var R_Q13 = parseFloat(R_Q13L01) + parseFloat(R_Q13L02) + parseFloat(R_Q13L03) + parseFloat(R_Q13L04) + parseFloat(R_Q13L05);
			R_Q13 = R_Q13.toFixed(1);
			
		var R_Q14 = parseFloat(R_Q14L01);
			R_Q14 = R_Q14.toFixed(1);
			
		// CALCULO FINAL
		var parte1 		= parseFloat(R_Q01)+parseFloat(R_Q02)+parseFloat(R_Q03)+parseFloat(R_Q04)+parseFloat(R_Q05);
		var sessao1 	= parseFloat(R_Q06)+parseFloat(R_Q07);
		var sessao2		= parseFloat(R_Q08);
		var sessao3		= parseFloat(R_Q09);
		var sessao4		= parseFloat(R_Q10);
		var sessao5		= parseFloat(R_Q11);
		var sessao6		= parseFloat(R_Q12);
		var sessao7		= parseFloat(R_Q13)+parseFloat(R_Q14);
		
		var sintomas 	= (parte1*100)/662.5;
			sintomas	= sintomas.toFixed(2);
		
		var atividades 	= (sessao2+sessao6)*100/1209.1;
			atividades	= atividades.toFixed(2);
		
		var impacto		= (sessao1+sessao3+sessao4+sessao5+sessao7)*100/2117.8;
			impacto		= impacto.toFixed(2);
		
		var total 		= (parte1 + sessao2 + sessao6 + sessao1 + sessao3 + sessao4 + sessao5 + sessao7)*100/3989.4;
			total		= total.toFixed(2);
		
		$('#formulario').fadeOut('slow', function() { 
				$('#div_sintomas').html(sintomas);
				$('#div_atividades').html(atividades);
				$('#div_impacto').html(impacto);
				$('#div_total').html(total);
				
				$('#resultado').fadeIn('slow');
		});
	}
	
	
	
}
function voltar() {
	$('#resultado').fadeOut('slow' , function () {
		$('#formulario').fadeIn('slow')
		});		
	}

function resetar() {
	$('#formulario-perguntas').each(function(){
	        if(confirm("Você tem certeza que deseja resetar o formulário?")) {
		    	this.reset();
			}
	});
}

function destacar(id) {
	$('#L_'+id).removeClass('even'); 
	$('#L_'+id).addClass('linha_h'); 
}