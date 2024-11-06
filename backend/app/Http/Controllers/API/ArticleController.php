<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Article;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class ArticleController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $articles = Article::with('company', 'editor', 'writer')->orderBy('created_at', 'desc')->simplePaginate(10);

        return response()->json([
            'success' => true,
            'count' => count($articles),
            'data' => $articles
        ], 200);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'title' => 'required|string|max:255',
            'content' => 'required|string',
            'company_id' => 'required|integer|exists:companies,id',
            'writer_id' => 'required|integer|exists:users,id',
            'editor_id' => 'nullable|integer|exists:users,id',
            'image' => 'nullable|string',     // Assuming URL or base64-encoded image
            'date' => 'nullable|date',        // Format date as 'YYYY-MM-DD'
            'link' => 'nullable|url'
        ]);

        if ($validator->fails()) {
            return response()->json([
                'success' => false,
                'errors' => $validator->errors()
            ], 422);
        }

        $article = Article::create($request->all());

        return response()->json([
            'success' => true,
            'data' => $article
        ], 201);
    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        $article = Article::with('company', 'editor', 'writer')->findOrFail($id);

        if (!$article) {
            return response()->json([
                'success' => false,
                'message' => 'Article not found'
            ], 404);
        }

        return response()->json([
            'success' => true,
            'data' => $article
        ], 200);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id)
    {
        $article = Article::find($id);

        if (!$article) {
            return response()->json([
                'success' => false,
                'message' => 'Article not found'
            ], 404);
        }

        $validator = Validator::make($request->all(), [
            'title' => 'sometimes|required|string|max:255',
            'content' => 'sometimes|required|string',
            'company_id' => 'sometimes|required|integer|exists:companies,id',
            'writer_id' => 'sometimes|required|integer|exists:users,id',
            'editor_id' => 'nullable|integer|exists:users,id',
            'image' => 'nullable|string',
            'date' => 'nullable|date',
            'link' => 'nullable|url',
            'status' => 'required|in:For Edit,Published',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'success' => false,
                'errors' => $validator->errors()
            ], 422);
        }

        $article->update($request->all());

        return response()->json([
            'success' => true,
            'data' => $article
        ], 200);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        $article = Article::find($id);

        if (!$article) {
            return response()->json([
                'success' => false,
                'message' => 'Article not found'
            ], 404);
        }

        $article->delete();

        return response()->json([
            'success' => true,
            'message' => 'Article deleted successfully'
        ], 200);
    }
}
