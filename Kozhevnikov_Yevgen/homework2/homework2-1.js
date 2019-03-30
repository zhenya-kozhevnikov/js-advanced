																						//super object
var musicalInstrument = {
	placeInComposition,
	percentageInComposition
};

																		// струнные музыкальные инструменты
// лук
var bow = {
	stringsNumber:1,
	playWithHand: function (){
		alert("звук игры рукой на " + this.stringsNumber + "-струнном инструменте");
	}
};
bow.__proto__ = musicalInstrument;

// лютня
var lute = {
	stringsNumber:8,
	deckMaterial:"wood",
	playWithHand: function (){
		alert("звук игры рукой на " + this.stringsNumber + "-струнном инструменте");
	}
};
lute.__proto__ = bow;

// скрипка
var violin = {
	stringsNumber:4,
	deckMaterial:"wood",
	playWithHand: function (){
		alert("звук игры рукой на " + this.stringsNumber + "-струнном инструменте");
	},
	playWithFiddlestick: function (){
		alert("звук игры смычком на " + this.stringsNumber + "-струнном инструменте");
	}
};
violin.__proto__ = lute;

																		// духовые музыкальные инструменты

// диджериду
var didgeridoo = {
	size:3,
	color:"brown",
	blow: function(){
		alert("звук выдоха сквозь духовой инструмент");	
	}
};
didgeridoo.__proto__ = musicalInstrument;

// дудка
var tinWhistle = {
	size:3,
	color:"brown",
	holes:5,
	blow: function(){
		alert("звук выдоха сквозь духовой инструмент");	
	}
};
tinWhistle.__proto__ = didgeridoo;

// саксофон
var saxophone = {
	size:3,
	color:"brown",
	holes:10,
	pushButtons: function(){
		alert("нажатие кнопок");	
	},
	blow: function(){
		alert("звук выдоха сквозь духовой инструмент");	
	}
};
saxophone.__proto__ = tinWhistle;

																		//ударные музыкальные инструменты

// вудблок
var woodblock = {
	material:"wood",
	handHit: function (){
		alert("звук удара по перкусионному инструменту, извлеченный рукой");		
	}
};
woodblock.__proto__ = musicalInstrument;

// ксилофон
var xylophone = {
	numberOfDrums:10,
	metalDetails:true
};
xylophone.__proto__ = woodblock;

// барабанная установка
var rockDrumkit = {
	numberOfDrums:7,
	leatherDetails:true,
	bassDrum:true,
	cymbals:true,
	legHit: function(){
		alert("звук удара по перкусионному инструменту, извлеченный ногой");		
	}
};
rockDrumkit.__proto__ = xylophone;

																	//электрические музыкальные инструменты

// терменвокс
var theremin = {
	pluggedIn:false,
	note:"C3",
	volume:1,
	toggleOnOff: function(){
		alert("инструмент включен/выключен");		
	}
};
theremin.__proto__ = musicalInstrument;

// синтезатор
var synthesizer = {
	keysNumber:49,
	knobsNumber:8,
	setStereoPanoram: function () {
		alert("стереопанорама настроена");	
	}
	playChord: function (){
		alert("аккорд сыгран");
	}
};
synthesizer.__proto__ = theremin;

// рабочая станция
var audioWorkStation = {
	buildInMetronome:true,
	autoAccompaniment:true,
	playRecordedSound: function (){
		alert("предзаписанный звук воспроизведен");		
	}
	doSoundProcessing: function (){
		alert("обработка звука произведена");			
	}
};
audioWorkStation.__proto__ = synthesizer;

																	//вокальные музыкальные инструменты

// фольклорный
var folkloreVocals = {
	lyrics,
	mood:"variated",
	numberOfVocalists:2,
	sing: function (){
		alert("звук пения");			
	}
}
folkloreVocals.__proto__ = musicalInstrument;

// академический
var classicVocals = {
	lyrics:"классическая лирика",
	singWithMelisms: function (){
		alert("звук пения с мелизмами");		
	}
}
classicVocals.__proto__ = folkloreVocals;

// современный
var contemporaryVocals = {
	lyrics:"современная лирика",
	extremeSing: function(){
		alert("вокал исполненный в экстремальной манере");		
	},
	singWithSFX: function(){
		alert("обогащение вокала спецэффектами в реальном времени");
	},
	speak: function(){
		alert("речетатив");			
	}
}
contemporaryVocals.__proto__ = classicVocals;