@extends('layout')

@section('content')
    <table>
        <tbody>
            @foreach ($kunstwerken as $kunstwerk)
                <tr>
                    <td>{{ $kunstwerk->naam }}</td>
                    <td>{{ $kunstwerk->kunstenaar()->naam }}</td>
                    <td><a href={{ route('kunstwerken.show', $kunstwerk->id) }}>Details</a></td>
                </tr>
            @endforeach

        </tbody>
    </table>

    <a href="{{ route('kunstwerken.create') }}">Nieuw kunstwerk</a>
    <a href="/">Terug naar overzicht</a>
@endSection
