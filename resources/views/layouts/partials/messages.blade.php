@php $statuses = [
  'error' => 'danger',
  'warning' => 'warning',
  'info' => 'info',
  'success' => 'success',
]; @endphp

@foreach ($statuses as $status => $class)
    @if (session($status))
        <div class="alert alert-{{ $class }} alert-dismissable">
            <a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>
            {{ session($status) }}
        </div>
    @endif
@endforeach
