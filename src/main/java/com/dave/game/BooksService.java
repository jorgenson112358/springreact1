package com.dave.game;

import java.util.List;

import com.dave.game.books.Book;

import retrofit2.Call;
import retrofit2.http.GET;

public interface BooksService {
	@GET("/books")
	Call<List<Book>> listBooks();
}
