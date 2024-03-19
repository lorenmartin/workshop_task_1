# workshop_task_1
2D primitive shapes / loops
https://lorenmartin.github.io/workshop_task_1/

These are the notes i made for the following workshop, in the end i used chatGPT to help me do code for moving spheres. Chat GPT helped me understand the coding better.


{} curly brackets means full loops 

To make the rectangle shape, move back and foward across the canvas. 

  if(x > width) { 

    move = -3; 

  } 

  if (x < 0){ 

    move = 3; 

  } 

  rect(x, 70, 70, 55); 

  x = x +move; 

3 key elements when moving shapes 

Start with a variable (x) the transformation stops when x is no longer doing more than the width 

Then we have a increment station 

 

Defining and calling functions 

functions, is functions already in p5j, like shapes already have the code instrctions in the reference and we give them arguments:    rect()    create canvas()     background() 

 

Defining functions 

Set up function:here we have set up and we put things in it to define what the function is. 
