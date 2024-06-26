@extends('layout')

@section('content')

<table>
    <tbody>
    @foreach($kunstenaars as $kunstenaar)
        <tr>
            <td>{{ $kunstenaar->naam }}</td>
            <td>{{ $kunstenaar->email }}</td>
            <td><a href={{ route('kunstenaars.show', $kunstenaar->id) }}>Details</a></td>
        </tr>
    @endforeach

    </tbody>
</table>

    <a href="{{ route('kunstenaars.create') }}">Nieuwe kunstenaar</a>
    <a href="/">Terug naar overzicht</a>
@endSection
