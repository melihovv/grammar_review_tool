@extends('layouts.app')

@section('content')
    <div class="container">
        @include('grammars.partials.buttons')

        <div class="row">
            <div class="col-md-12">
                @if ($latestVersion)
                    <p class="bg-info">
                        You are looking at early version of grammar. Click
                        {{ link_to_route('grammars.show', 'here', [
                          'grammar' => $grammar->id,
                          'version' => $latestVersion->id,
                        ]) }}
                        to view the latest version.
                    </p>
                @endif

                @include('grammars.partials.symbol-search')

                <grammar-view grammar-id="{{ $grammar->id }}"
                              version="{{ $version->depth }}"
                              version-id="{{ $version->id }}"></grammar-view>
            </div>
        </div>
    </div>
@endsection
