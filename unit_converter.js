var arr = ["L", "M", "V", "T"];
var length = ["Inch","Foot","Yard", "Mile","Centimeter","Meter", "Kilometer"];
var weight = ["Ounce","Pound", "Gram", "Kilogram"];
var volume = ["Fluid Ounce", "Pint", "Quart", "Gallon", "Milliliter", "Liter"];
var temp = ["°F", "°C", "K"];
arr[0] = length;
arr[1] = weight;
arr[2] = volume;
arr[3] = temp;

function typeSelected(){
	var unit = document.getElementById("unitType").value;
	emptyList(document.getElementById("field1"));
	emptyList(document.getElementById("field2"));
	for(var i=0; i<arr[unit].length; i++){
		addOption(document.calculator.field1, arr[unit][i], arr[unit][i]);
		addOption(document.calculator.field2, arr[unit][i], arr[unit][i]);				
	}
	document.getElementById("ans1").value = 0;
	document.getElementById("ans2").value = 0;
	
	document.getElementById("units").style.visibility = "visible"; 
}
function emptyList(list){
	var x = list.length;
	while(x>0){
		list.remove(x-1);
		x = list.length;	
	}
}
function addOption(selectbox,text,value ){
	var optn = document.createElement("OPTION");
	optn.text = text;
	if(value == "°F"){
		value = "F";
	}
	if(value =="°C"){
		value = "C";
	}
	optn.value = value;
	selectbox.options.add(optn);
}
function calculate(){
	var first = document.getElementById("field1").value.replace(/\s+/g, '');
	var second = document.getElementById("field2").value.replace(/\s+/g, '');
	var call = first+"To"+second;
	var val = document.getElementById("ans1").value;
	if (first.toString() == second.toString()) {
		document.getElementById("ans2").value = val;
	}
	else {
		var answer = window[call](val);
		answer = Math.round(answer * 10000) / 10000; //rounds value to 5 decimals
		document.getElementById("ans2").value = answer;
	}
}
//Length Functions
function InchToFoot(i){return i/12.0}
function InchToYard(i){return i/36.0}
function InchToMile(i){return i/MileToInch(1)}
function InchToCentimeter(i){return i*2.54;}
function InchToMeter(i){return i*0.0254;}
function InchToKilometer(i){return i*0.0000254;}
function FootToInch(i){return i*12.0;}
function FootToYard(i){return i/3.0;}	
function FootToMile(i){return i/5280;}
function FootToCentimeter(i){return i*30.48;}
function FootToMeter(i){return i/0.3048;}
function FootToKilometer(i){return i/0.0003048;}
function YardToInch(i){return i*36.0;}
function YardToFoot(i){return i*3.0;}
function YardToMile(i){return i*1760.0;}
function YardToCentimeter(i){return i*91.44;}
function YardToMeter(i){return i*0.9144}
function YardToKilometer(i){return i*0.0009144;}
function MileToInch(i){return i*63360.0}
function MileToFoot(i){return i/FootToMile(1);}
function MileToYard(i){return i/YardToMile(1);}
function MileToCentimeter(i){return i*160934.0;}
function MileToMeter(i){return i*1609.34;}
function MileToKilometer(i){return i*1.60934}
function CentimeterToInch(i){return i/InchToCentimeter(1);}
function CentimeterToFoot(i){return i/FootToCentimeter(1);}
function CentimeterToYard(i){return i/YardToCentimeter(1);}
function CentimeterToMile(i){return i/MileToCentimeter(1);}
function CentimeterToMeter(i){return i/100.0;}
function CentimeterToKilometer(i){return i/100000.0;}
function MeterToInch(i){return i/InchToMeter(1);}
function MeterToFoot(i){return i/FootToMeter(1);}
function MeterToYard(i){return i/YardToMeter(1);}
function MeterToMile(i){return i/MileToMeter(1);}
function MeterToCentimeter(i){return i/CentimeterToMeter(i);}
function MeterToKilometer(i){return i/1000.0;}
function KilometerToInch(i){return i/InchToKilometer(1);}
function KilometerToFoot(i){return i/FootToKilometer(1);}
function KilometerToYard(i){return i/YardToKilometer(1);}
function KilometerToMile(i){return i/MileToKilometer(1);}
function KilometerToCentimeter(i){return i/CentimeterToKilometer(1);}
function KilometerToMeter(i){return i/MeterToKilometer(1);}

//Weight Functons
function OunceToPound(i) {return i*0.0625;}
function OunceToGram(i) {return i*28.3495;}
function OunceToKilogram(i) {return i*0.0283495;}
function PoundToOunce(i) {return i/OunceToPound(1);}
function PoundToGram(i) {return i*453.592;}
function PoundToKilogram(i) {return i*0.453592;}
function GramToOunce(i) {return i/OunceToGram(1);}
function GramToPound(i) {return i/PoundToGram(1);}
function GramToKilogram(i) {return i/1000.0;}
function KilogramToOunce(i) {return i/OunceToKilogram(1);}
function KilogramToPound(i) {return i/PoundToKilogram(1);}
function KilogramToGram(i) {return i/GramToKilogram(1);}

//Volume Functions
function FluidOunceToPint(i) {return i*0.0625;}
function FluidOunceToQuart(i) {return i*0.03125;}
function FluidOunceToGallon(i) {return i*0.0078125;}
function FluidOunceToMilliliter(i) {return i*29.5735;}
function FluidOunceToLiter(i) {return i*0.0295735;}
function PintToFluidOunce(i) {return i/FluidOunceToPint(1);}
function PintToQuart(i) {return i*0.5;}
function PintToGallon(i) {return i*0.125;}
function PintToMillilier(i) {return i*473.176;}
function PintToLiter(i) {return i*0.473176;}
function QuartToFluidOunce(i) {return i/FluidOunceToQuart(1);}
function QuartToPint(i) {return i/PintToQuart(1);}
function QuartToGallon(i) {return i*0.25;}
function QuartToMilliliter(i) {return i*946.353;}
function QuartToLiter(i) {return i*0.946353;}
function GallonToFluidOunce(i) {return i/FluidOunceToGallon(1);}
function GallonToPint(i) {return i/PintToGallon(1);}
function GallonToQuart(i) {return i/QuartToGallon(1);}
function GallonToMilliliter(i) {return i*3785.41;}
function GallonToLiter(i) {return i*3.78541;}
function MilliliterToFluidOunce(i) {return i/FluidOunceToMilliliter(1);}
function MilliliterToPint(i) {return i/PintToMillilier(1);}
function MilliliterToQuart(i) {return i/QuartToMilliliter(1);}
function MilliliterToGallon(i) {return i/GallonToMilliliter(1);}
function MilliliterToLiter(i) {return i*0.001;}
function LiterToFluidOunce(i) {return i/FluidOunceToLiter(1);}
function LiterToPint(i) {return i/PintToLiter(1);}
function LiterToQuart(i) {return i/QuartToLiter(1);}
function LiterToGallon(i) {return i/GallonToLiter(1);}
function LiterToMilliliter(i) {return i*1000;}

//Temperature Fuctions
function CToF(i){return 9.0/5*i + 32;}
function FToC(i){return (i-32)*5.0/9;}
function FToK(i){return CToK(FToC(i));}
function KToF(i){return CToF(KToC(i));}
function CToK(i){return parseFloat(i)+273.15;}	
function KToC(i){return i-273.15;}