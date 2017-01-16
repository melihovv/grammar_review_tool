<?php

namespace App\Http\Controllers;

use App\Entities\Grammar;
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
            ->paginate(10);

        return view('grammars.index', compact('grammars'));
    }

    public function show(Grammar $grammar)
    {
        return view('grammars.show', compact('grammar'));
    }
}
