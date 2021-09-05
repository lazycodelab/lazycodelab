<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}" class="text-gray-900 leading-tight">
	<head>
		<meta charset="UTF-8">
		<meta http-equiv="X-UA-Compatible" content="IE=edge">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<link href="{{ asset('css/app.css') }}" rel="stylesheet">
		<link rel="preconnect" href="https://fonts.gstatic.com">
		<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital@0;1&display=swap" rel="stylesheet">
		<title>We are feeling a bit down.</title>

		<style>
			.wavebox {
				position: fixed;
				top: 0;
				left: 0;
				/*z-index: -1;*/
				transform: rotate(80deg);
				transition: all 200ms linear;
				border: 1px solid red;
			}
			.wavebox:hover {
				transform: rotate(80deg) translateY(-50px);
				cursor: grab;
			}
			.wavebox:active {
				cursor: grabbing;
			}

			.box {
				position: absolute;
				top: 0;
				left: 0;
				right: 0;
				margin: 0 auto;
				width: 1200px;
				z-index: -1;
				opacity: 0.2;
			}
			.wave {
				width: 1500px;
				height: 100vh;
				position: absolute;
				border-radius: 43%;
				opacity: .4;
				background: rgba(255, 255, 255, .75);
				animation: wave 15s infinite linear;
				left: 0;
				right: 0;
				margin: 0 auto;
			}
			/*.wave1 {
				top: -35%;
				transform: rotate(45deg);
			}*/
			.wave2 {
				animation: wave 13s infinite linear;
  opacity: .1;
  background: #0af;
			}
			.wave3 {
				animation: wave 16s infinite linear;
  opacity: .1;
  background: black;
			}
			.wave4 {
				animation: wave 14s infinite linear;
  background-color: #77daff;
			}

			@keyframes wave {
				from { transform: rotate(0deg);}
				from { transform: rotate(360deg);}
			}
		</style>

	</head>
	<body class="bg-secondary">
		<main class="min-h-screen grid grid-gap-4 grid-cols-3 container mx-auto"></main>
	</body>

	<script src="{{ mix('js/app.js') }}"></script>
</html>