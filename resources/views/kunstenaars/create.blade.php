@extends('layout')

@section('content')

    <form action="{{ route('kunstenaars.store') }}" method="post">
        @csrf
        <input type="text" name="naam" value="">
        <input type="text" name="email" value="">
        <input type="number" name="marge" value="">
        <input type="text" name="website" value="">
        <input type="text" name="rol" value="">
        <input type="submit">
    </form>
    <hr>
    <a href="{{ route('kunstenaars.index') }}">Terug naar overzicht</a>
@endSection
