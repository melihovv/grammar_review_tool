{!! script('editor.js', false) !!}
<script>
    const editor = ace.edit('{{ $editorId }}')
    const textarea = $('input[name="{{ $inputName }}"]')
    editor.getSession().on('change', () => {
        textarea.val(editor.getSession().getValue());
    })
</script>
