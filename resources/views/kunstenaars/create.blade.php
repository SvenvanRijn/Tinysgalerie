@extends('layout')

@section('content')

    <form action="{{ route('kunstenaars.store') }}" method="post">
        @csrf
        <label for="naam" >Naam:</label>
        <input type="text" name="naam" value="">

        <label for="naam" >Email:</label>
        <input type="text" name="email" value="">

        <label for="marge" >marge:</label>
        <input type="number" name="marge" value="">

        <label for="website" >website:</label>
        <input type="text" name="website" value="">

        <label for="rol" >rol:</label>
        <input type="text" name="rol" value="">

        <input type="submit">
    </form>
    <hr>
    <a href="{{ route('kunstenaars.index') }}">Terug naar overzicht</a>
@endSection
