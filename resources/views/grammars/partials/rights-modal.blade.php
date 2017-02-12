<div class="modal fade" id="manage-grammar-rights-modal" tabindex="-1"
     role="dialog" aria-labelledby="manage-grammar-rights-modal-header">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close"
                        data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
                <h4 class="modal-title" id="manage-grammar-rights-modal-header">
                    Grammar access
                </h4>
            </div>
            <div class="modal-body">
                <rights-management grammar-id="{{ $grammar->id }}"></rights-management>
            </div>
        </div>
    </div>
</div>
