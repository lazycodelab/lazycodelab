<?php
# /app/Exceptions/Handler.php

# use Symfony\Component\Debug\Exception\FlattenException;

# public function render($request, Exception $e)

$exception = FlattenException::create($e);
$statusCode = $exception->getStatusCode($exception);

if ($statusCode === 404 or $statusCode === 500) {
    return response()->view('errors.' . $statusCode, [], $statusCode);
}