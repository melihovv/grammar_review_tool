@component('mail::message')

User {{ $user->name }} commented on {{ $grammar->name }}


@component('mail::panel')
{{ $comment->content }}
@endcomponent

@component('mail::button', [
    'url' => route('grammars.show', [
      'grammar' => $grammar->id,
      'version' => $version->depth,
    ]) . "#comment-$comment->id",
    'color' => 'blue',
])
View in service
@endcomponent

@endcomponent
