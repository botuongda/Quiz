// addEventListener("click", ketqua)
// function ketqua() {
// 	console.log(document.getElementById("luu").value);
// 	console.log(document.getElementById("luu").value.length);
// 	var doicau="";
// 	doicau="cau1";
// 	document.getElementById(doicau).style.display = "none"
// 	// body...
// }

var cau1 = 
	{
	t:"Câu số 1",
	q:"1 cộng 1 bằng mấy?", 
	A:"2", 
	B:"3",
	C:"4"

	}; 

var cau2 = 
	{
	t:"Câu số 2",
	q:"2 cộng 2 bằng mấy?", 
	A:"2", 
	B:"3",
	C:"4"
	}; 
var cau3 = 
	{
	t:"Câu số 3",
	q:"3 cộng 2 bằng mấy?", 
	A:"2", 
	B:"5",
	C:"4"
	}; 
var cau4 = 
	{
	t:"Câu số 4",
	q:"6 cộng 3 bằng mấy?", 
	A:"9", 
	B:"3",
	C:"4"
	}; 
var cau5 = 
	{
	t:"Câu số 5",
	q:"8 cộng 2 bằng mấy?", 
	A:"11", 
	B:"10",
	C:"14"
	}; 
var cau6 = 
	{
	t:"Câu số 6",
	q:"5 cộng 6 bằng mấy?", 
	A:"5", 
	B:"11",
	C:"19"
	}; 

var nganhang=([cau1,cau2,cau3,cau4,cau5,cau6]);
var dapan=(["1A","2C","3B","4A","5B","6B"])

function test(x){
	console.log(x.value);
	document.getElementById("tam").value = x.value;

}
function ok(){
	var z=document.getElementById("luucauhoi").value
	z= +z + 1
	document.getElementById("luuketqua").value+= z+ document.getElementById("tam").value + ","
	console.log(document.getElementById("tam").value)
	document.getElementById("luucauhoi").value=z;
	console.log(document.getElementById("luucauhoi").value)
	if(z<=5)
	{
		tieude.innerHTML=nganhang[z].t;
		cauhoi.innerHTML=nganhang[z].q;
		phuongan1.innerHTML=nganhang[z].A;
		phuongan2.innerHTML=nganhang[z].B;
		phuongan3.innerHTML=nganhang[z].C;
		document.getElementById("tam").value=""
	}
	else
	{
		var j=document.getElementById("luuketqua").value.split(",")
		console.log(j)
		var caudung=0;
		for (var i = 0; i <= 5; i++) {
				if(j[i]==dapan[i]){caudung++}
			}
		alert("Bạn trả lời đúng " + caudung + " câu");

		if (caudung>=4)
		{
			window.location.replace("chuc-mung.html")
		}
		else
		{

			window.location.replace("chia-buon.html")
		}
	}
}
function thulai() {
	window.location.replace("index.html")
	// body...
}
function thoat() {
	window.location.href= "http://google.com.vn"
	// body...
}