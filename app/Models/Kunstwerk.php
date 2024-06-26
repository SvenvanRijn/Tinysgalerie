<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Kunstwerk extends Model
{
    use HasFactory;

    protected $table = 'kunstwerken';
    protected $fillable = [
        'naam',
        'omschrijving',
        'afbeelding_path',
        'kunstenaar_id',
        'prijs',
        'datum',
        'locatie',
        'dimensies',
    ];

    public function kunstenaar()
    {
        return $this->belongsTo(Kunstenaar::class)->first();
    }
}
