<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
	<head>
		<meta charset="UTF-8">
		<meta http-equiv="X-UA-Compatible" content="IE=edge">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<link href="{{ asset('css/app.css') }}" rel="stylesheet">

		<title>We are feeling a bit down.</title>
	</head>
	<body>
		<div id="root"></div>
	</body>

	<script src="{{ mix('js/app.js') }}"></script>
</html>