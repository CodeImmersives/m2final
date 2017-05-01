var qaItems = [
    {
        id: 1,
        question: 'What is JavaScript?',
        answer: 'JavaScript is a scripting language most often used for client-side web development.'
    },
    {
        id: 2,
        question: 'What is the difference between JavaScript and Jscript?',
        answer: 'Both JavaScript and Jscript are almost similar. JavaScript was developed by Netscape. Microsoft reverse engineered Javascript and called it JScript.'
    },
    {
        id: 3,
        question: 'How do we add JavaScript onto a web page?',
        answer: 'There are several way for adding JavaScript on a web page, \ but there are two ways which are commonly used by developers \
        If your script code is very short and only for single page, then following ways are the best: \
        a) You can place <script type="text/javascript"> tag inside the <head> element. \
        Code \
        <head> \
        <title>Page Title</title> \
        <script language="JavaScript" type="text/javascript"> \
           var name = "Vikas Ahlawta" \
           alert(name); \
        </script> \
        </head> \
        b) If your script code is very large, then you can make a JavaScript file and add its path in the following way: \
        Code \
        <head> \
        <title>Page Title</title> \
        <script type="text/javascript" src="myjavascript.js"></script> \
        </head>'
    }, 
    {
        id: 4,
        question: 'Is JavaScript case sensitive?',
        answer: 'Yes! \
                A function getElementById is not the same as getElementbyID.'
    }, 
    {
        id: 5,
        question: 'What are the types used in JavaScript?',
        answer: 'String, Number, Boolean, Function, Object, Null, Undefined.'
    },        
    {
        id: 6,
        question: 'What are the boolean operators supported by JavaScript?',
        answer: 'And Operator: && \
                 Or Operator: || \
                 Not Operator: !'
    },
    {
        id: 7,
        question: 'What is the difference between “==” and “===”?',
        answer: '“==” checks equality only, \
                “===” checks for equality as well as the type.'
    }
];
