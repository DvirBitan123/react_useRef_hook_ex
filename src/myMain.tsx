import Book from "./Book";
import {booksData} from "./App";

export default function myMain() {
    return (
        <div>
            <Book title= {booksData[0].title} imgSrc = {booksData[0].imgSrc} text= {booksData[0].text}/>
            <Book title={booksData[1].title} imgSrc= {booksData[1].imgSrc} text= {booksData[1].text}/>
            <Book title={booksData[2].title} imgSrc= {booksData[2].imgSrc} text= {booksData[2].text}/>
        </div>
    )
}


