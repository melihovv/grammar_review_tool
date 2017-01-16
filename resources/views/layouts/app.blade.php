<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>{{ config('app.name', 'Laravel') }}</title>

    @section('styles')
        @if (App::environment('production'))
            <link rel="stylesheet" href="{{ elixir('app.css', 'assets') }}">
        @endif
    @show

    @section('top-scripts')
        <script>
            window.Laravel = @php echo json_encode([
              'csrfToken' => csrf_token(),
              'apiToken' => Auth::user() ? Auth::user()->api_token : '',
            ]); @endphp
        </script>
    @show
</head>

<body>
<div class="container-fluid">
    <div id="app">
        @include('layouts.partials.navbar')

        @yield('content')

        @include('layouts.partials.footer')
    </div>
</div>

@section('scripts')
    @if (App::environment('production'))
        <script src="{{ elixir('manifest.js', 'assets') }}"></script>
        <script src="{{ elixir('vendor.js', 'assets') }}"></script>
        <script src="{{ elixir('app.js', 'assets') }}"></script>
    @else
        <script src="{{ hmr_asset('app.js') }}"></script>
    @endif
@show
</body>

</html>
