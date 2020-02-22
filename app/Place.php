<?php

namespace App;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Model;

class Place extends Model
{
    protected $guarded = [];

    protected $casts = [
        'borders_lq' => 'array'
    ];

    public function scopeTowns(Builder $builder) {
        return $builder->where('national_level', '3rdOrder');
    }

    public function scopeCountries(Builder $builder) {
        return $builder->where('national_level', '1stOrder');
    }

    public function scopeProvinces(Builder $builder) {
        return $builder->where('national_level', '2ndOrder');
    }

    public function scopeFilter(Builder $builder, $options = []) {
        $builder->when($options['search'] ?? null, function ($builder, $search) {
            return $builder->where('name', 'like', '%'. $search .'%');
        });
        return $builder;
    }
}
