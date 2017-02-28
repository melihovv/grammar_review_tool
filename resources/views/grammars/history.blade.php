@extends('layouts.app')

@section('content')
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                {!! link_to_route('grammars.show', 'Back', $grammar) !!}
            </div>
        </div>
        <grammar-history grammar-id="{{ $grammar->id }}"
                         latest-version="{{ $latestVersion->depth }}">
        </grammar-history>
    </div>
@endsection
