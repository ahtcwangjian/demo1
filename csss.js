#cover {
	position:fixed;
	z-index:9999;
	top:0px;
	left:0px;
	display:none;
	width:100%;
	height:100%;
	opacity:0.5;
	background: #000 none repeat scroll 0% 0%;
}

#carInfoTable{
	background-color: pink;
	display:block;
	width:30%;
	height:40%;
	z-index:99999;
	position:fixed;
	top:25%;
	left:30%;
	border: solid 1px #0EA9BF;
}

$("#carInfoTable").hide();

$("#cover").hide();


<div style="display: block;" id="cover"></div>
