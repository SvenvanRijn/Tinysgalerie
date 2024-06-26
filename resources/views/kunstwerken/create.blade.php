@extends('layout')

@section('content')

    <form action="{{ route('kunstwerken.store') }}" method="post">
        @csrf
        <<label for="naam">Naam</label>
        <input type="text" name="naam" value="">

        <label for="omschrijving">Omschrijving</label>
        <input type="text" name="omschrijving" value="">

        <label for="afbeelding_path">Afbeelding</label>
        <input type="text" name="afbeelding_path" value="">

        <label for="prijs">Prijs</label>
        <input type="number" name="prijs" value="">

        <label for="datum">Datum</label>
        <input type="date" name="datum" value="">

        <label for="kunstenaar_id">Kunstenaar</label>
        <input type="number" name="kunstenaar_id" value="">

        <label for="locatie">Locatie</label>
        <input type="text" name="locatie" value="">

        <label for="dimensies">Dimensies</label>
        <input type="text" name="dimensies" value="">
        <input type="submit">
    </form>
    <hr>
    <a href="{{ route('kunstwerken.index') }}">Terug naar overzicht</a>
@endSection
