<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('kunstwerken', function (Blueprint $table) {
            $table->id();
            $table->string('naam');
            $table->string('slug');
            $table->string('omschrijving');
            $table->string('afbeelding_path');
            $table->unsignedBigInteger('kunstenaar_id');
            $table->foreign('kunstenaar_id')->references('id')->on('kunstenaars');
            $table->integer('prijs');
            $table->date('datum');
            $table->string('locatie');
            $table->string('dimensies');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('kunstwerks');
    }
};
