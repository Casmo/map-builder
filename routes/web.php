<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

use Inertia\Inertia;
use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return Inertia::render('Welcome');
});

Route::get('/towns', '\App\Actions\Town\GetTowns')->name('towns.index');

Route::get('/display', function() {
    return view('nl', [
        'towns' => App\Town::where('national_level', '3rdOrder')->get()
    ]);
});

Route::get('/test', function() {
    $service = new Sabre\Xml\Service();
    $result = $service->parse(file_get_contents(storage_path('app/datasets/netherlands/towns.xml')));

    foreach ($result as $index => $town) {

        $country = $town['value'][0]['value'][2]['value'][0]['attributes']['codeListValue'];
        $nationalLevel = $town['value'][0]['value'][3]['attributes']['{http://www.w3.org/1999/xlink}title'];
        $townImportKey = $town['value'][0]['attributes']['{http://www.opengis.net/gml/3.2}id'];
        $townImportSlug = Str::slug($townImportKey, '-');
        $filePath = storage_path('app/datasets/netherlands/towns/'. $townImportSlug);
        if (file_exists($filePath)) {
            //continue;
        }
        $townName = $town['value'][0]['value'][8]['attributes']['{http://www.w3.org/1999/xlink}title'];
        $townBorders = $town['value'][0]['value'][0]['value'][0]['value'][0]['value'];

        preg_match_all('/([0-9\.]+)([[:space:]])([0-9\.]+)([[:space:]])?/', $townBorders, $matches);

        $numberOfPoints = count($matches[1]);
        $pointCount = ceil($numberOfPoints / 25);

        $bordersLq = [];
        foreach ($matches[1] as $key => $lat) {
            if ($key%$pointCount != 0) {
                continue;
            }
            $lon = $matches[3][$key];
            $bordersLq[] = [
                'lat' => (float)$lat,
                'lon' => (float)$lon
            ];
        }

        file_put_contents($filePath, $townBorders);
        App\Town::create([
            'country' => $country,
            'national_level' => $nationalLevel,
            'import_key' => $townImportKey,
            'name' => $townName,
            'slug' => $townImportSlug,
            'borders_lq' => $bordersLq
        ]);
    }
});