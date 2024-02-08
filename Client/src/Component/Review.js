import React, { useState, useEffect } from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Container, Row, Col, Image, Button } from 'react-bootstrap';

const  ReviewPage = () => {


 const random = [
   { id: 1,
    author: "Oscar Wilde",
    quote: "I had the most wonderful experience at Nail Salon. The staff was friendly, welcoming, and incredibly skilled. My nail technician took the time to understand exactly what I wanted and executed it perfectly. My nails have never looked better! The atmosphere was relaxing, and I left feeling pampered and refreshed. I can't wait to go back!"
   , background: 'bg-red-500',
   imageAddress: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=400"
   },
   { id: 2,
     author: "Rivera Gomet",
     quote: "I am absolutely thrilled with the service I received at the shop. The attention to detail here is unmatched. From the moment I walked in, I felt valued as a customer. The salon is clean, well-organized, and stylish. The nail artists are not only talented but also passionate about their work. I left with a stunning manicure that lasted for weeks. I highly recommend this salon to anyone looking for top-notch nail care!"
     , background: 'bg-gray-500',
     imageAddress:"https://images.pexels.com/photos/2218786/pexels-photo-2218786.jpeg?auto=compress&cs=tinysrgb&w=400"
   }, {
     id: 3,
     author:"Amanda Colden",
     quote: "I cannot express how impressed I am with the salon. The staff's expertise and creativity are outstanding. I came in with a vague idea, and my nail artist turned it into a masterpiece. The color selection was vast, and they used high-quality products that made my nails shine. The overall experience was delightful, and I left feeling beautiful and confident. I found my new go-to nail salon!"
     , background: 'bg-blue-500',
     imageAddress:"https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=400"
   }, {id: 4,
     author:"Beatriz Lalipa",
   quote: "I had an amazing time. The ambiance is serene, and the staff is incredibly professional. My nail technician was not only skilled but also friendly and engaging. She made sure I was comfortable throughout the entire process. My nails turned out absolutely gorgeous, and the polish didn't chip for weeks. I appreciate the dedication to customer satisfaction and will definitely be returning!"
   , background: 'bg-purple-500',
   imageAddress:"https://images.pexels.com/photos/2625122/pexels-photo-2625122.jpeg?auto=compress&cs=tinysrgb&w=400"
 }];
 const [currentReview, setCurrentReview] = useState(random[0])
 const [isVisible, setIsVisible] = useState(true);

 //setup UI
 useEffect(() => {
   let timer;
   if(isVisible) {
     timer = setTimeout(()=>{
 const randomIndex = Math.floor(Math.random()* random.length);
 setCurrentReview(random[randomIndex]);
}, [2500]);
   }
return ()=> clearTimeout(timer);
}, [isVisible,random]);
return (
   isVisible?<Container style={{ background: 'rgba(189,195,199, 0.3)' }} fluid className=' d-flex flex-column align-items-center justify-content-center p-1 shadow'>
   <Row className=' p-1 mx-auto my-1'><h3>Reviews</h3></Row>
   <Row><Col><i class="bi bi-star-fill"></i></Col><Col><i class="bi bi-star-fill"></i></Col><Col><i class="bi bi-star-fill"></i></Col><Col><i class="bi bi-star-fill"></i></Col><Col><i class="bi bi-star-fill"></i></Col></Row>
   <Button variant="outline-light" href="https://www.google.com/search?q=Nails+%26+Lashes%2C+West+Commercial+Boulevard%2C+Lauderhill%2C+FL&sca_esv=571565668&rlz=1C5MACD_enUS1057US1057&sxsrf=AM9HkKnwsmgRqdGsgmsrRcQ5KSQI1OuKqA%3A1696687674152&ei=OmYhZbH6CPm3qtsP29SgmA8&oq=nails+and+lashes+commer&gs_lp=Egxnd3Mtd2l6LXNlcnAiF25haWxzIGFuZCBsYXNoZXMgY29tbWVyKgIIADICECZI6idQiwVYox9wAXgBkAEAmAFyoAGsEKoBBDE0Ljm4AQHIAQD4AQGoAhTCAgcQIxjqAhgnwgIWEAAYAxiPARjlAhjqAhi0AhiMA9gBAcICBBAjGCfCAgcQIxiKBRgnwgIHEAAYigUYQ8ICDRAAGIoFGLEDGMkDGEPCAggQABiKBRiSA8ICChAAGIoFGLEDGEPCAg0QABiABBgUGIcCGLEDwgIIEAAYgAQYkgPCAggQABiABBixA8ICCxAAGIoFGLEDGJECwgIIEAAYigUYkQLCAgsQLhiABBjHARivAcICCxAuGK8BGMcBGIAEwgIREC4YgwEYrwEYxwEYsQMYgATCAg4QLhivARjHARixAxiABMICBRAAGIAEwgIGEAAYFhgewgIaEC4YgAQYxwEYrwEYlwUY3AQY3gQY4ATYAQLiAwQYACBBiAYBugYGCAEQARgLugYGCAIQARgU&sclient=gws-wiz-serp#lrd=0x49a6651293042c93:0x9ea7f08b018a7836,1,,,," className='text-dark'>Write a review</Button>
 <Row key={currentReview.id} className={`d-flex items-center justify-center text-dark ${currentReview.background} mx-auto p-1`}>
 <Row className='mx-auto' xs={1} md={3}><Image className='mx-auto col-sm-1 col-md-2' roundedCircle src={currentReview.imageAddress}></Image></Row>
 <h3 className="text-xl mb-4">{currentReview.author}:</h3>
 <p className="text-center text-dark">"{currentReview.quote}"</p>
</Row>


     </Container>:null
 );
};

export default ReviewPage;