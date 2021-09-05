<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <link rel="stylesheet" href="{{ mix('/css/app.css') }}" />
        <title>LazyCodeLab</title>
    </head>
    <body>
        <main id="lcl-app"></main>

        <script src="{{ mix('/js/app.js') }}"></script>
    </body>
</html>
