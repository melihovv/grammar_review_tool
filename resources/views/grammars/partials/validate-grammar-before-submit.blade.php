<script>
    $(() => {
        $('form').submit(e => {
            const parser = new Parser.default()
            const $input = $('input[name={{ $inputName }}]')

            try {
                parser.parse($input.val())
            } catch (e) {
                const errors = parser.getErrors()
                let template = '<div class="text-danger">'
                errors.forEach(error => {
                    template += `${error}<br>`
                })
                template += '</div>'

                $input.after(template)

                return false
            }

            return true
        })
    })
</script>
