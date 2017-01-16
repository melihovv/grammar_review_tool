@extends('layouts.app')

@section('content')
    <div class="container">
        @forelse ($grammars as $grammar)
            <div class="row">
                <div class="col-md-8 col-md-offset-2">
                    <div class="panel panel-default">
                        <div class="panel-body">
                            <a href="{{ route('grammars.show', $grammar->id) }}">{{ $grammar->name }}</a>
                            by {{ $grammar->user->name }}
                        </div>
                    </div>
                </div>
            </div>
        @empty
            <div class="row">
                <div class="col-md-12">There are no grammars</div>
            </div>
        @endforelse
    </div>
@endsection
