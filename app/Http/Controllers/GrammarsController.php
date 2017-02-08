<?php

namespace App\Http\Controllers;

use App\Entities\Grammar;
use App\Http\Forms\Grammars\CreateForm;
use App\Http\Forms\Grammars\EditForm;
use App\Http\Requests\Grammar\GrammarStoreRequest;
use App\Http\Requests\Grammar\GrammarUpdateRequest;
use App\Services\GrammarService;
use Illuminate\Support\Facades\Auth;

class GrammarsController extends Controller
{
    public function __construct()
    {
        $this->middleware('can:delete,grammar', ['only' => ['destroy']]);
        $this->middleware('can:view,grammar', ['only' => ['show']]);
    }

    public function index()
    {
        $grammars = Auth::user()
            ->availableGrammars()
            ->with('owner')
            ->orderBy('created_at', 'desc')
            ->paginate(10);

        return view('grammars.index', compact('grammars'));
    }

    public function show(Grammar $grammar)
    {
        $form = $this->form(EditForm::class, [
            'method' => 'PUT',
            'url' => route('grammars.update', $grammar),
            'model' => $grammar,
        ]);

        return view('grammars.show', compact('grammar', 'form'));
    }

    public function create()
    {
        $form = $this->form(CreateForm::class, [
            'method' => 'POST',
            'url' => route('grammars.store'),
        ]);

        return view('grammars.create', compact('form'));
    }

    public function store(GrammarStoreRequest $request)
    {
        $grammar = Grammar::create($request->all());

        return redirect()->route('grammars.show', $grammar->id);
    }

    public function destroy(Grammar $grammar)
    {
        $grammar->delete();

        return redirect()->route('grammars.index');
    }

    public function update(
        GrammarUpdateRequest $request,
        Grammar $grammar,
        GrammarService $service
    ) {
        $service->update($grammar, $request);

        return redirect()->route('grammars.show', $grammar);
    }
}
