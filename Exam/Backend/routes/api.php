<?php

use App\Http\Controllers\DairyController;
use Illuminate\Support\Facades\Route;



Route::get('events', [DairyController::class,'index']);
Route::post('events/store', [DairyController::class,'storeEvent']);
Route::get('events/{id}', [DairyController::class,'editEvent']);
Route::post('events/{id}', [DairyController::class,'updateEvent']);
Route::delete('events/{id}', [DairyController::class,'eventDelete']);



