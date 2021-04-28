<?php

namespace App\Http\Controllers;

use App\Models\Event;
use Illuminate\Http\Request;

class DairyController extends Controller
{
    public function index()
    {
        try {
            $events = Event::all();
            return \response([
                'events' => $events
            ]);
        } catch (\Exception $th) {
            return \response(['message' => $th->getMessage()]);
        }
    }

    function storeEvent(Request $req)
    {   
        try {
            $event = new Event();

            $event->title = $req->title;
            $event->description = $req->description;
            $event->importance = $req->importance;
            $event->save();
            return \response([
                'message' => 'Diary added successfully'
            ]);
        } catch (\Exception $th) {
            return \response(['message' => $th->getMessage()]);
        }
    }

    public function editEvent(Request $req,$id)
    {
        try {
            $event = Event::find($id);
            return \response([
                'event' => $event
            ]);
        } catch (\Exception $th) {
            return \response(['message' => $th->getMessage()]);
        }
    }

    public function updateEvent(Request $req,$id)
    {
        try {
            $event = Event::find($id);
            $event->title = $req->title;
            $event->description = $req->description;
            $event->importance = $req->importance;
            $event->save();
            return \response([
                'message' => 'Updated successfully'
            ]);
        } catch (\Exception $th) {
            return \response(['message' => $th->getMessage()]);
        }
    }



    public function eventDelete($id)
    {
        try {
            $event = Event::find($id);
            $event->delete();
            return \response([
                'message' => 'Deleted successfully'
            ]);
        } catch (\Exception $th) {
            return \response(['message' => $th->getMessage()]);
        }
    }
}
