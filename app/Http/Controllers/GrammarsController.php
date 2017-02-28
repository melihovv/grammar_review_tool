<?php

namespace App\Http\Controllers;

use App\Entities\Grammar;
use App\Http\Forms\Grammars\CreateForm;
use App\Http\Forms\Grammars\EditForm;
use App\Http\Requests\Grammar\ShowRequest;
use App\Http\Requests\Grammar\StoreRequest;
use App\Http\Requests\Grammar\UpdateRequest;
use App\Services\GrammarService;
use Illuminate\Support\Facades\Auth;

class GrammarsController extends Controller
{
    public function __construct()
    {
        $this->middleware('can:delete,grammar', ['only' => ['destroy']]);
        $this->middleware('can:view,grammar', ['only' => ['show', 'history']]);
        $this->middleware('can:update,grammar', ['only' => ['edit', 'update']]);
    }

    public function index()
    {
        $grammars = Auth::user()
            ->availableGrammars()
            ->with('owner')
            ->orderBy('created_at', 'desc')
            ->paginate(10, ['id', 'name', 'user_id']);

        return view('grammars.index', compact('grammars'));
    }

    public function show(Grammar $grammar, ShowRequest $request)
    {
        if ($request->has('version')) {
            $version = $grammar->version($request->get('version', 0));
        } else {
            $version = $grammar->latestVersion();
        }

        $version = $version->exclude(['content'])->first();
        $latestVersion = $version->isLeaf()
            ? null
            : $version->leaves()->select(['id'])->first();

        return view('grammars.show', compact(
            'grammar',
            'version',
            'latestVersion'
        ));
    }

    public function create()
    {
        $form = $this->form(CreateForm::class, [
            'method' => 'POST',
            'url' => route('grammars.store'),
        ]);

        return view('grammars.create', compact('form'));
    }

    public function store(GrammarService $service, StoreRequest $request)
    {
        list($grammar) = $service->create($request->all());

        return redirect()->route('grammars.show', $grammar->id);
    }

    public function destroy(Grammar $grammar, GrammarService $service)
    {
        $service->delete($grammar);

        return redirect()->route('grammars.index');
    }

    public function edit(Grammar $grammar)
    {
        $grammar->content = $grammar->getLatestVersion()->content;

        $form = $this->form(EditForm::class, [
            'method' => 'PUT',
            'url' => route('grammars.update', $grammar),
            'model' => $grammar,
        ]);

        return view('grammars.edit', compact('grammar', 'form'));
    }

    public function update(
        UpdateRequest $request,
        Grammar $grammar,
        GrammarService $service
    ) {
        $service->update($grammar, Auth::user(), $request->all());

        return redirect()->route('grammars.show', $grammar->id);
    }

    public function history(Grammar $grammar)
    {
        $latestVersion = $grammar->latestVersion()
            ->select(['id', 'depth'])
            ->first();

        return view('grammars.history', compact('grammar', 'latestVersion'));
    }
}
