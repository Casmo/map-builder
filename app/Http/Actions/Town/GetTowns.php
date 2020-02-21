<?php
namespace App\Actions\Town;

use App\Town;
use Illuminate\Http\Request;
use Illuminate\Support\Collection;
use Illuminate\Support\Facades\Response;
use Inertia\Inertia;
use Lorisleiva\Actions\Action;

class GetTowns extends Action
{
    public function handle(Request $request)
    {
        return Town::towns()
            ->filter($request->only('search'))
            ->limit(12)
            ->get();
    }

    public function response(Collection $towns, Request $request) {

        if ($request->expectsJson()) {
            return Response::json([
                'towns' => $towns
            ]);
        }
        return Inertia::render('Towns/Index', [
            'towns' => $towns
        ]);

    }
}