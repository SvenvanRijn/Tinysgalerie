<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Kunstenaar extends Model
{
    use HasFactory;

    protected $fillable = [
        'naam',
        'email',
        'marge',
        'website',
        'rol',
    ];

    public function kunst()
    {
        return $this->hasMany(Kunstwerk::class);
    }
}
