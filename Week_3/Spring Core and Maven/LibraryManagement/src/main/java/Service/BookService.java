package Service;
import Repository.BookRepository;
public class BookService {
        private BookRepository bookRepository;
        public void setBookRepository(BookRepository bookRepository) {
            this.bookRepository = bookRepository;
        }
        public void addBook(String book) {
            System.out.println("Adding book with title \" " + book+" \"");
            bookRepository.save(book);
        }
    }


