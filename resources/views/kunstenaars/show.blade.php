@extends('layout')

@section('content')

    <form method="POST" action="{{ route('kunstenaars.update', $kunstenaar->id) }}">
        @csrf
        @method('PUT')
        <label for="naam" >Naam:</label>
        <input type="text" name="naam" value="{{ $kunstenaar->naam }}">
        
        <label for="email" >email:</label>
        <input type="text" name="email" value="{{ $kunstenaar->email }}">
        
        <label for="marge" >marge:</label>
        <input type="number" name="marge" value="{{ $kunstenaar->marge }}">
        
        <label for="website" >website:</label>
        <input type="text" name="website" value="{{ $kunstenaar->website }}">
        
        <label for="rol" >rol:</label>
        <input type="text" name="rol" value="{{ $kunstenaar->rol }}">
        <input type="submit">
    </form>
    <hr>
    <a href="{{ route('kunstenaars.destroy', $kunstenaar->id) }}">Verwijderen</a>
    <a href="{{ route('kunstenaars.index') }}">Terug naar overzicht</a>
@endSection
