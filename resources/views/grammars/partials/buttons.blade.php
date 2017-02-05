<div class="row bm10">
    <div class="col-md-12">
        @can('delete', $grammar)
            <a href="{{ route('grammars.destroy', $grammar) }}"
               class="btn btn-danger pull-right"
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
