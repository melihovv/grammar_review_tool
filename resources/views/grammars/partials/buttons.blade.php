<div class="row bm10">
    <div class="col-md-12">
        <div class="pull-right">
            @can('update', $grammar)
                <a href="#" class="btn btn-primary" data-toggle="modal"
                   data-target="#edit-grammar-modal">Edit</a>
                @include('grammars.partials.edit-modal')
            @endcan

            @can('delete', $grammar)
                <a href="{{ route('grammars.destroy', $grammar) }}"
                   class="btn btn-danger"
                   onclick="event.preventDefault(); document.getElementById('delete-grammar').submit();">
                    Delete
                </a>
                <form id="delete-grammar"
                      action="{{ route('grammars.destroy', $grammar) }}"
                      method="POST" style="display: none;">
                    {{ csrf_field() }}
                    {{ method_field('DELETE') }}
                </form>
            @endcan
        </div>
    </div>
</div>
