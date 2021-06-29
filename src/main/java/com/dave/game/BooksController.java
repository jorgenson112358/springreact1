package com.dave.game;

import org.springframework.web.bind.annotation.RestController;

import retrofit2.Call;
import retrofit2.Response;
import retrofit2.Retrofit;
import retrofit2.converter.gson.GsonConverterFactory;

import java.io.IOException;
import java.util.List;

import com.dave.game.books.Book;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.GetMapping;

@RestController
@RequestMapping("/api/")
public class BooksController {
	
	@GetMapping("books")
	public List<Book> getBooks() {
		//calls a cheap little nodejs app that returns json such that
		// [{"author": "JRR Tolkien", "title":"The Hobbit"},{"author": "NK Jemisin", "title:"The Fifth Season""}]
		Retrofit rfit = new Retrofit.Builder()
			.baseUrl("http://localhost:8090")
			.addConverterFactory(GsonConverterFactory.create())
			.build();

			BooksService service = rfit.create(BooksService.class);

			Response<List<Book>> booksResponse = null;
			try {
				booksResponse = service.listBooks().execute();
			} catch (IOException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
				return null;
			}

			return booksResponse.body();
	}
}
