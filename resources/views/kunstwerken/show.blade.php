@extends('layout')

@section('content')

    <form method="POST" action="{{ route('kunstwerken.update', $kunstwerk->id) }}">
        @csrf
        @method('PUT')
        <label for="naam">Naam</label>
        <input type="text" name="naam" value="{{ $kunstwerk->naam }}">

        <label for="omschrijving">Omschrijving</label>
        <input type="text" name="omschrijving" value="{{ $kunstwerk->omschrijving }}">

        <label for="afbeelding_path">Afbeelding</label>
        <input type="text" name="afbeelding_path" value="{{ $kunstwerk->afbeelding_path }}">

        <label for="prijs">Prijs</label>
        <input type="number" name="prijs" value="{{ $kunstwerk->prijs }}">

        <label for="datum">Datum</label>
        <input type="date" name="datum" value="{{ $kunstwerk->datum }}">

        <label for="kunstenaar_id">Kunstenaar</label>
        <input type="number" name="kunstenaar_id" value="{{ $kunstwerk->kunstenaar_id }}">

        <label for="locatie">Locatie</label>
        <input type="text" name="locatie" value="{{ $kunstwerk->locatie }}">

        <label for="dimensies">Dimensies</label>
        <input type="text" name="dimensies" value="{{ $kunstwerk->dimensies }}">

        <input type="submit">
    </form>
    <hr>
    <a href="{{ route('kunstwerken.destroy', $kunstwerk->id) }}">Verwijderen</a>
    <a href="{{ route('kunstwerken.index') }}">Terug naar overzicht</a>
@endSection
