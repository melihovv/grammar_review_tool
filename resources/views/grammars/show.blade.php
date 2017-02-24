@extends('layouts.app')

@section('content')
    <div class="container">
        @include('grammars.partials.buttons')

        <div class="row">
            <div class="col-md-12">
                @if ($lastVersion)
                    <p class="bg-info">
                        You are looking at early version of grammar. Click
                        {{ link_to_route('grammars.show', 'here', [$lastVersion]) }}
                        to view the latest version.
                    </p>
                @endif

                <grammar-view grammar-id="{{ $grammar->id }}"></grammar-view>
            </div>
        </div>
    </div>
@endsection
