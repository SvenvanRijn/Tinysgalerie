@extends('layout')

@section('page title')
    Tiny's Gallerie
@endSection

@section('content')
    <a href="{{ route('kunstwerken.index') }}">Kunstwerken</a>
    <a href="{{ route('kunstenaars.index') }}">Kunstenaars</a>
@endSection
