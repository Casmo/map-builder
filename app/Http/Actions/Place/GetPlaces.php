<?php
namespace App\Actions\Place;

use App\Place;
use Illuminate\Http\Request;
use Illuminate\Support\Collection;
use Illuminate\Support\Facades\Response;
use Inertia\Inertia;
use Lorisleiva\Actions\Action;

class GetPlaces extends Action
{
    public function handle(Request $request)
    {
        return Place::filter($request->only('search', 'type'))
            ->limit(12)
            ->get();
    }

    public function response(Collection $places, Request $request) {

        if ($request->expectsJson()) {
            return Response::json([
                'places' => $places,
                'filters' => $request
            ]);
        }
        return Inertia::render('Places/Index', [
            'places' => $places,
            'filters' => $request
        ]);

    }
}