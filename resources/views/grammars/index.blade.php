@extends('layouts.app')

@section('content')
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <a href="{{ route('grammars.create') }}"
                   class="btn btn-primary pull-right">Create</a>
            </div>
        </div>

        @forelse ($grammars as $grammar)
            <div class="row">
                <div class="col-md-8 col-md-offset-2">
                    <div class="panel panel-default">
                        <div class="panel-body">
                            <a href="{{ route('grammars.show', $grammar->id) }}">{{ $grammar->name }}</a>
                            by {{ $grammar->owner->name }}
                        </div>
                    </div>
                </div>
            </div>
        @empty
            <div class="row">
                <div class="col-md-12 well tm10">You have no grammar to view. {{  link_to_route('grammars.create', 'Create') }} one?</div>
            </div>
        @endforelse

        <div class="row">
            <div class="col-md-12">{{ $grammars->links() }}</div>
        </div>
    </div>
@endsection
