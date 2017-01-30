<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>{{ config('app.name', 'Laravel') }}</title>

    @section('styles')
        {!! style('app.css') !!}
    @show

    @section('top-scripts')
        <script>
            window.Laravel = @php echo json_encode([
              'csrfToken' => csrf_token(),
              'apiToken' => Auth::user() ? Auth::user()->api_token : '',
              'user' => Auth::user(),
            ]); @endphp
        </script>
    @show
</head>

<body>
<div class="container-fluid">
    <div id="app">
        @include('layouts.partials.navbar')
        @include('layouts.partials.messages')

        @yield('content')

        @include('layouts.partials.footer')
    </div>
</div>

@section('scripts')
    {!! script('manifest.js') !!}
    {!! script('vendor.js') !!}
    {!! script('app.js', false) !!}
@show
</body>

</html>
