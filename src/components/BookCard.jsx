import { Card } from '@heroui/react';
import Image from 'next/image';
import React from 'react';

const BookCard = ({ book }) => {
     console.log(book);
     
     return (
          <Card>
               <div>
                    <Image src={book.image}
                         width={200}
                         height={300}
                         alt={book.title} />
               </div>
          </Card>
     );
};

export default BookCard;