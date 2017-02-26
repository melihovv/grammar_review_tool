<script>
    $(() => {
        $('form').submit(e => {
            const parser = new Parser.default()
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
