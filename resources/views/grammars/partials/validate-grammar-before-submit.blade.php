<script>
    $(() => {
        $('form').submit(e => {
            const type = @php echo isset($type) ? "'$type'" : "$('select[name=type]').val()" @endphp

            let parser = null
            try {
                parser = new Parser.default(type)
            } catch (e) {
              console.error(e)
              return false
            }

            const $input = $('input[name={{ $inputName }}]')
            const $syntaxErrors = $('.syntax-errors')

            try {
                parser.parse($input.val())
            } catch (e) {
                const errors = parser.getErrors()
                let template = ''
                errors.forEach(error => {
                    template += `${error}<br>`
                })

                if ($syntaxErrors.length) {
                  $syntaxErrors.html(template)
                } else {
                    $input.after(`
<div class="alert alert-danger syntax-errors">${template}</div>
`)
                }

                return false
            }

            return true
        })
    })
</script>
