	var tim,
		tim1,
		tim2;
	    a = 0;

	for(let i=1;i<=45;i++){
		$("#img_cvr").append("<div>"+i+"</div>");
	}

	    $("#img_cvr div").click ( function () {
			a++;
			if (a<4) {
				this.style.background="transparent";
				this.innerHTML="";					
					game_timer(a);
			}
	    });		

	function game_timer(b) {
		let t=0,
		    stp = 0;
		if(b==1){
			t=45;
			stp = 1;
			tim = setInterval(timer,1000);
		}else if(b==2){				
			t=30;
			stp = 2;
			clearInterval(tim);
			tim1 = setInterval(timer,1000);
		}else if(b==3){
	        t=15;
	        stp = 3;
	        clearInterval(tim1);
	        tim2 = setInterval(timer,1000);
		}
		function timer() {
	        --t;	            
	            $("#l_cnt").html("Timer"+stp);        
	            $("#timer").html("");
	            $("#timer").html(t);
	        if( t == 0 ) {
	            alert("timeout");
	            clearInterval(tim);
	            clearInterval(tim1);
	            clearInterval(tim2);
	            $("#img_cvr").hide();	             	             
	        }             	
	    }	    		    	
	}

	function srch(){
		let txt = $("#inp :nth-child(2)").val(),
		    txt_ary = ["SUBHASHCHANDRABOSE","CHANDRABOSE"],
		    t=0;
		if (txt != "") {
			let a = txt.toUpperCase();
			for (let i = 0; i < txt_ary.length; i++) {
				if(a === txt_ary[i]){
					t++;
				}
			}
			if (t===1){
				alert("correct");
				clearInterval(tim);
	            clearInterval(tim1);
	            clearInterval(tim2);
				$("#img_cvr").hide();
			}else {
					alert("incorrect");
				}
		}else{
			alert("enter input");
		}
	}