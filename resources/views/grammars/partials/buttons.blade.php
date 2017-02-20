<div class="row bm10">
    <div class="col-md-12">
        <div class="pull-right">
            <a href="{{ route('grammars.history', $grammar->id) }}"
               class="btn btn-primary">History</a>

            @can('manageRights', $grammar)
                <a href="#" class="btn btn-primary" data-toggle="modal"
                   data-target="#manage-grammar-rights-modal">Access</a>
                @include('grammars.partials.rights-modal')
            @endcan

            @can('update', $grammar)
                <a href="{{ route('grammars.edit', $grammar->id) }}"
                   class="btn btn-primary">Edit</a>
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
