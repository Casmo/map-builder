<?php

namespace App;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Model;

class Town extends Model
{
    protected $guarded = [];

    protected $casts = [
        'borders_lq' => 'array'
    ];

    public function scopeTowns(Builder $builder) {
        return $builder->where('national_level', '3rdOrder');
    }

    public function scopeFilter(Builder $builder, $options = []) {
        $builder->when($options['search'] ?? null, function ($builder, $search) {
            return $builder->where('name', 'like', '%'+ $search +'%');
        });
        return $builder;
    }
}
