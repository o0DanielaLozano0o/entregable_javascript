$(document).ready(function(){
	var boton1,video,boton2,boton3,boton4,boton5;
	boton1=$(".btn1");
	boton1.click(arrancarVideo);

	boton2=$(".btn2");
	boton2.click(pausarVideo);

	boton3=$(".btn3");
	boton3.click(bajarVolumen);

	boton4=$(".btn4");
	boton4.click(aumentarVolumen);

	boton4=$(".btn5");
	boton4.click(repetir);

	//get(0) activa las funciones nativas del video
	video=$("#mivideo").get(0);

	function arrancarVideo(){
		video.play();
	}

	function pausarVideo(){
		video.pause();
	}

	function bajarVolumen(){
		video.volume-=0.1;
	}
	function aumentarVolumen(){
		video.volume+=0.1;
	}
	function repetir(){
		video.pause();
   		video.currentTime = '0';
    	video.play();
	}


});

	