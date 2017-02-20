@extends('layouts.app')

@section('content')
    <div class="container">
        @include('grammars.partials.buttons')

        <div class="row">
            <div class="col-md-12">
                @if ($lastVersion)
                    You are looking not the
                    {{ link_to_route('grammars.show', 'latest', [$lastVersion]) }}
                    version of grammar.
                @endif

                <grammar-view grammar-id="{{ $grammar->id }}"></grammar-view>
            </div>
        </div>
    </div>
@endsection
