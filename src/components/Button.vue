<template>
  <button href="#" class="myButton">Back</button>
</template>

<script>
export default {

}
</script>

<style>
.myButton {
	box-shadow: -1px 9px 14px -7px #000000;
	background:linear-gradient(to bottom, #000000 5%, #000405 100%);
	background-color:#000000;
	border-radius:8px;
	display:inline-block;
	cursor:pointer;
	color:#ffffff;
	font-family:Arial;
	font-size:16px;
	font-weight:bold;
	padding:11px 21px;
	text-decoration:none;
	text-shadow:0px 1px 0px #000000;
}
.myButton:hover {
	background:linear-gradient(to bottom, #000405 5%, #000000 100%);
	background-color:#000405;
}
.myButton:active {
	position:relative;
	top:1px;
}
</style>