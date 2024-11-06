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
        Schema::create('articles', function (Blueprint $table) {
            $table->id();
            $table->string('image')->nullable();
            $table->string('title');
            $table->string('link')->nullable();
            $table->date('date')->default(now());
            $table->text('content');
            $table->enum('status', ['For Edit', 'Published'])->default('For Edit');
            $table->foreignId('writer_id')->constrained('users');
            $table->foreignId('editor_id')->nullable()->constrained('users')->default(0);
            $table->foreignId('company_id')->constrained('companies')->onDelete('cascade');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('articles');
    }
};
