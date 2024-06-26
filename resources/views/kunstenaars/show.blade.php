@extends('layout')

@section('content')

    <form method="POST" action="{{ route('kunstenaars.update', $kunstenaar->id) }}">
        @csrf
        @method('PUT')
        <input type="text" name="naam" value="{{ $kunstenaar->naam }}">
        <input type="text" name="email" value="{{ $kunstenaar->email }}">
        <input type="number" name="marge" value="{{ $kunstenaar->marge }}">
        <input type="text" name="website" value="{{ $kunstenaar->website }}">
        <input type="text" name="rol" value="{{ $kunstenaar->rol }}">
        <input type="submit">
    </form>
    <hr>
    <a href="{{ route('kunstenaars.destroy', $kunstenaar->id) }}">Verwijderen</a>
    <a href="{{ route('kunstenaars.index') }}">Terug naar overzicht</a>
@endSection
